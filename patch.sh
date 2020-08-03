#!/bin/bash

rm -rf patched
cp -r orig patched

find patched -name "*.d.ts" -delete
rm patched/lib/index-web.js

replace "var global = Function('return this')();" "" -- patched/lib/generated/*_pb.js > /dev/null
if grep -qrE "[^a-zA-Z]Function\(" patched; then
  echo "Error: Function( still present"
  exit -1
fi
