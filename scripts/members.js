const fs = require('node:fs')

const columns = ['ASN', 'Country', 'Org', 'Status']
const validAsn = value => typeof value === 'string' && /^\d+$/.test(value) &&
  Number(value) > 0 && Number(value) <= 4294967295

function validateMembers(members) {
  if (!Array.isArray(members) || members.length === 0) {
    throw new Error('Members must be a non-empty array; refusing to build an empty members page')
  }
  for (const [index, member] of members.entries()) {
    if (!member || !validAsn(member.ASN) ||
        !columns.every(key => typeof member[key] === 'string') ||
        !member.Country.trim() || !member.Status.trim() ||
        typeof member.MANRS !== 'boolean') {
      throw new Error(`Invalid member at row ${index + 1}`)
    }
  }
  return members
}

function readMembers(path) {
  return validateMembers(JSON.parse(fs.readFileSync(path, 'utf8')))
}

function convertSheet(spreadsheet, sheetId, manrsAsns) {
  const sheet = spreadsheet.sheets?.find(sheet => String(sheet.properties?.sheetId) === String(sheetId))
  if (!sheet) throw new Error(`Member sheet ${sheetId} is missing from the Sheets response`)
  const rows = (sheet.data || []).flatMap(grid => grid.rowData || [])
    .map(row => columns.map((_, index) => (row.values?.[index]?.formattedValue || '').trim()))
    .filter(row => row.some(Boolean))
  if (!columns.every((name, index) => rows[0]?.[index] === name)) {
    throw new Error('Member sheet must start with ASN, Country, Org, Status columns')
  }
  return validateMembers(rows.slice(1).map(row => ({
    ...Object.fromEntries(columns.map((name, index) => [name, row[index]])),
    MANRS: manrsAsns.has(row[0])
  })))
}

function readManrs(path, previousPath) {
  try {
    const asns = JSON.parse(fs.readFileSync(path, 'utf8'))
    if (!Array.isArray(asns) || asns.length === 0 ||
        !asns.every(asn => validAsn(String(asn)))) {
      throw new Error('Invalid MANRS ASN list')
    }
    return new Set(asns.map(String))
  } catch (error) {
    // Do not print upstream response bodies or credentials in CI logs.
    console.warn('WARNING: MANRS data unavailable; retaining flags from the existing members file (new ASNs are unmarked).')
    return new Set(readMembers(previousPath).filter(member => member.MANRS).map(member => member.ASN))
  }
}

if (require.main === module) {
  try {
    const [command, ...args] = process.argv.slice(2)
    if (command === 'validate') {
      const members = readMembers(args[0] || 'static/data/members.json')
      console.log(`Validated ${members.length} members`)
    } else if (command === 'convert') {
      const [sheetPath, manrsPath, previousPath, sheetId] = args
      const spreadsheet = JSON.parse(fs.readFileSync(sheetPath, 'utf8'))
      const members = convertSheet(spreadsheet, sheetId, readManrs(manrsPath, previousPath))
      process.stdout.write(JSON.stringify(members, null, 2) + '\n')
    } else {
      throw new Error('Usage: members.js validate [file] | convert sheet.json manrs.json previous.json sheetId')
    }
  } catch (error) {
    console.error(`Members data error: ${error.message}`)
    process.exitCode = 1
  }
}

module.exports = { validateMembers, readMembers, convertSheet }
