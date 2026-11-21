#!/bin/bash

set -euo pipefail
cd "$(dirname "$0")"

: "${SPREADSHEET_ID:?SPREADSHEET_ID is required}"
: "${SHEET_ID:?SHEET_ID is required}"
: "${GOOGLE_API_KEY:?GOOGLE_API_KEY is required}"

# Keep the current file intact until the complete replacement is validated.
# Use the same filesystem so the final rename is atomic.
tmp_dir=$(mktemp -d static/data/.members.XXXXXX)
trap 'rm -rf "$tmp_dir"' EXIT

curl --fail --silent --show-error --location --connect-timeout 10 --max-time 60 --retry 2 \
    "https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}?includeGridData=true&key=${GOOGLE_API_KEY}" \
    --output "$tmp_dir/sheet.json"

# MANRS is optional enrichment; an outage must not erase the member list.
if ! curl --fail --silent --show-error --location --connect-timeout 10 --max-time 60 --retry 2 \
    https://www.manrs.org/wp-json/manrs/v1/asn --output "$tmp_dir/manrs.json"; then
    rm -f "$tmp_dir/manrs.json"
fi

node scripts/members.js convert "$tmp_dir/sheet.json" "$tmp_dir/manrs.json" \
    static/data/members.json "$SHEET_ID" > "$tmp_dir/members.json"
mv "$tmp_dir/members.json" static/data/members.json
