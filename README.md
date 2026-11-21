# Official Website of STUIX
[![Release](https://github.com/STU-IX/stuix.io/actions/workflows/release.yml/badge.svg)](https://github.com/STU-IX/stuix.io/actions/workflows/release.yml)

## What is an Internet Exchange?

An IX (Internet Exchange) allows networks to interconnect on an open-access ethernet fabric -- providing low-latency, high-bandwidth, cost-effectively, in a locale.

## What is STUIX?
Student & Technology United Internet Exchanges is a non-profit IX (Internet Exchange) for educational purposes.

PeeringDB: [Student & Technology United Internet Exchanges](https://www.peeringdb.com/ix/3352)

## How much does it cost?
Currently, a 10 Gbps SFP+ Port cost $1000 TWD per month, the price will change if the exchanged traffic increase.

## How do I join?

Anyone who holds public resources (ASN and IPv4/IPv6) can join STUIX.

To get started first fill out the request form on our [join STUIX](https://stuix.io/join/) page

## How to contact us?

If you need to contact us directly, please reach out to admin_at_stuix_io

## Member data and safe builds

`download.sh` reads the Google Sheets tab selected by `SPREADSHEET_ID` and
`SHEET_ID`, using `GOOGLE_API_KEY`. The public member table is the `Website`
tab (`SHEET_ID=1142204253`), with `ASN`, `Country`, `Org`, and `Status` as its
first four columns. The `VLAN` tab is not the website member source.

Downloads are written to temporary files and validated before replacing
`static/data/members.json`. HTTP errors, invalid JSON, a missing/wrong tab,
invalid rows, or an empty member list stop the release before deployment,
preserving the existing file and the currently published site. Blank organization
names are allowed because the source sheet contains them.

If MANRS is unavailable or returns invalid data, existing MANRS flags are retained
by ASN from the local member file, with a warning; new ASNs remain unmarked.
CI uses the committed member file for this fallback, so its flags may be stale.

`npm run build` and `npm run generate` also validate the member JSON before
starting Nuxt. Run `npm test` to exercise the download failure cases and build guards.
