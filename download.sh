#!/bin/bash

curl --silent --url "${FILE_URL}" | \
	jq '.feed.entry[] |
    {
      "ASN": .["gsx$asn"]["$t"],
      "IPv4": (if .["gsx$ipv4"]["$t"] == "TRUE" then true else false end),
      "IPv6": (if .["gsx$ipv6"]["$t"] == "TRUE" then true else false end),
      "Country": .["gsx$country"]["$t"],
      "Org": .["gsx$org"]["$t"],
      "NIC": .["gsx$nic"]["$t"],
      "OwnerTgId": .["gsx$ownertgid"]["$t"]
    }' | \
	jq -s '.' > static/data/members.json
