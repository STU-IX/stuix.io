const assert = require('node:assert/strict')
const fs = require('node:fs')
const os = require('node:os')
const path = require('node:path')
const { spawnSync } = require('node:child_process')
const { test } = require('node:test')
const { validateMembers, convertSheet } = require('../scripts/members')

const root = path.resolve(__dirname, '..')
const previous = [{ ASN: '6939', Country: 'US', Org: 'Existing member', Status: 'Connected', MANRS: true }]
const rows = [
  ['ASN', 'Country', 'Org', 'Status', 'Type'],
  ['6939', 'US', 'Updated member', 'Connected', 'Transit'],
  ['42', ' US ', '', 'Connected', 'ICPs'],
  []
]
const sheet = (values = rows) => ({ sheets: [{
  properties: { sheetId: 1142204253 },
  data: [{ rowData: values.map(row => ({ values: row.map(formattedValue => ({ formattedValue })) })) }]
}] })

function fixture(t, options = {}) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'stuix-members-'))
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }))
  for (const folder of ['scripts', 'static/data', 'bin']) fs.mkdirSync(path.join(dir, folder), { recursive: true })
  for (const file of ['download.sh', 'scripts/members.js', 'package.json']) {
    fs.copyFileSync(path.join(root, file), path.join(dir, file))
  }
  const target = path.join(dir, 'static/data/members.json')
  fs.writeFileSync(target, JSON.stringify(previous))
  fs.writeFileSync(path.join(dir, 'sheet.json'), options.sheetText ?? JSON.stringify(options.sheet ?? sheet()))
  fs.writeFileSync(path.join(dir, 'manrs.json'), options.manrsText ?? '[42]')
  // Exercise the actual shell script without network calls or API credentials.
  fs.writeFileSync(path.join(dir, 'bin/curl'), `#!/bin/bash
set -eu
output=''
kind=sheet
while [ "$#" -gt 0 ]; do
  case "$1" in
    --output) output="$2"; shift ;;
    https://www.manrs.org/*) kind=manrs ;;
  esac
  shift
done
cp "$FIXTURE_DIR/$kind.json" "$output"
if [ "$FAIL_DOWNLOAD" = "$kind" ]; then exit 22; fi
`, { mode: 0o755 })
  const env = {
    ...process.env,
    PATH: `${path.join(dir, 'bin')}:${process.env.PATH}`,
    FIXTURE_DIR: dir,
    SPREADSHEET_ID: 'test-spreadsheet',
    GOOGLE_API_KEY: 'test-key',
    SHEET_ID: '1142204253',
    FAIL_DOWNLOAD: options.failDownload || ''
  }
  return { dir, target, env, run: () => spawnSync('bash', [path.join(dir, 'download.sh')], { env, encoding: 'utf8' }) }
}

test('converts the selected tab, skips blank rows, and allows blank organization names', () => {
  const result = convertSheet(sheet(), 1142204253, new Set(['42']))
  assert.equal(result.length, 2)
  assert.equal(result[0].MANRS, false)
  assert.equal(result[1].MANRS, true)
  assert.equal(result[1].Country, 'US')
  assert.equal(result[1].Org, '')
})

test('rejects empty, malformed, and invalid member lists', () => {
  for (const value of [[], {}, null, [null], [{ ...previous[0], ASN: 'AS6939' }],
    [{ ...previous[0], ASN: '4294967296' }], [{ ...previous[0], MANRS: 'false' }],
    [{ ...previous[0], Country: '' }], [{ ...previous[0], Status: '' }]]) {
    assert.throws(() => validateMembers(value))
  }
})

test('successful download replaces the member list and cleans temporary files', t => {
  const f = fixture(t)
  const result = f.run()
  assert.equal(result.status, 0, result.stderr)
  assert.deepEqual(JSON.parse(fs.readFileSync(f.target)), convertSheet(sheet(), '1142204253', new Set(['42'])))
  assert.deepEqual(fs.readdirSync(path.dirname(f.target)), ['members.json'])
})

for (const [name, options] of Object.entries({
  'Sheets HTTP error with a response body': { failDownload: 'sheet' },
  'empty response': { sheetText: '' },
  'invalid JSON': { sheetText: '<html>Service unavailable</html>' },
  'API error JSON': { sheet: { error: { code: 403 } } },
  'missing tab': { sheet: { sheets: [] } },
  'empty tab': { sheet: sheet([]) },
  'headers only': { sheet: sheet([rows[0]]) },
  'wrong tab columns': { sheet: sheet([['VLAN ID', 'Name']]) },
  'invalid row after a valid row': { sheet: sheet([...rows.slice(0, 2), ['bad-asn', 'US', 'Bad', 'Connected']]) }
})) {
  test(`${name} fails without changing the existing file`, t => {
    const f = fixture(t, options)
    const before = fs.readFileSync(f.target)
    const result = f.run()
    assert.notEqual(result.status, 0)
    assert.deepEqual(fs.readFileSync(f.target), before)
    assert.deepEqual(fs.readdirSync(path.dirname(f.target)), ['members.json'])
  })
}

for (const [name, options] of Object.entries({
  'HTTP 403': { failDownload: 'manrs' },
  'HTML response': { manrsText: '<html>Forbidden</html>' },
  'empty response': { manrsText: '' },
  'empty array': { manrsText: '[]' },
  'wrong response shape': { manrsText: '{}' },
  'invalid ASN': { manrsText: '["not-an-asn"]' }
})) {
  test(`MANRS ${name} retains previous flags by ASN and still updates members`, t => {
    const f = fixture(t, options)
    const result = f.run()
    assert.equal(result.status, 0, result.stderr)
    assert.match(result.stderr, /WARNING: MANRS data unavailable/)
    const members = JSON.parse(fs.readFileSync(f.target))
    assert.equal(members.length, 2)
    assert.equal(members[0].Org, 'Updated member')
    assert.equal(members[0].MANRS, true)
    assert.equal(members[1].MANRS, false)
  })
}

test('missing configuration fails before changing the existing file', t => {
  const f = fixture(t)
  delete f.env.SHEET_ID
  assert.notEqual(f.run().status, 0)
  assert.deepEqual(JSON.parse(fs.readFileSync(f.target)), previous)
})

test('invalid previous data cannot be used as a MANRS fallback', t => {
  const f = fixture(t, { failDownload: 'manrs' })
  fs.writeFileSync(f.target, '[]')
  assert.notEqual(f.run().status, 0)
  assert.equal(fs.readFileSync(f.target, 'utf8'), '[]')
})

for (const command of ['build', 'generate']) {
  for (const contents of ['[]', '', '{"error":"unavailable"}']) {
    test(`npm run ${command} stops before Nuxt when members.json is ${JSON.stringify(contents)}`, t => {
      const f = fixture(t)
      fs.writeFileSync(f.target, contents)
      const result = spawnSync('npm', ['run', command], { cwd: f.dir, env: f.env, encoding: 'utf8' })
      assert.notEqual(result.status, 0)
      assert.match(result.stderr, /Members data error:/)
      assert.doesNotMatch(result.stdout, /> nuxt/)
      assert.equal(fs.existsSync(path.join(f.dir, 'dist')), false)
    })
  }
}
