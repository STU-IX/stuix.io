#!/bin/bash

# Google why you removed v3 API???????
curl -s --url "https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}?includeGridData=true&key=${GOOGLE_API_KEY}" | \
    jq "$(curl -s https://www.manrs.org/wp-json/manrs/v1/asn)"' as $manrs | .sheets[] | select(.properties.sheetId == '${SHEET_ID}') | select(.data[] != null) | .data[].rowData[] |
    select(.values[0].formattedValue != null and .values[0].formattedValue != "ASN") | {
    "ASN": .values[0].formattedValue,
    "IPv4": (if .values[1].formattedValue == "TRUE" then true else false end),
    "IPv6": (if .values[2].formattedValue == "TRUE" then true else false end),
    "Country": .values[3].formattedValue,
    "Org": .values[4].formattedValue,
    "Status": .values[6].formattedValue,
    "MANRS": .values[0].formattedValue | tonumber | IN($manrs[])
}' | jq -s '.' > static/data/members.json
