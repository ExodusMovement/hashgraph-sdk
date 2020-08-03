#!/bin/bash

rm -rf patched
cp -r orig patched

find patched -name "*.d.ts" -delete
rm patched/lib/index-web.js

replace "var global = Function('return this')();" "const global = jspb.globalScope; const { proto } = jspb.globalScope" -- patched/lib/generated/*_pb.js > /dev/null
if grep -qrE "[^a-zA-Z]Function\(" patched; then
  echo "Error: Function( still present"
  exit -1
fi

replace "require('google-protobuf')" "require('../google-protobuf.patched/google-protobuf')" -- patched/lib/generated/*.js > /dev/null
replace "require('google-protobuf/google/protobuf/wrappers_pb.js')" "require('../google-protobuf.patched/wrappers_pb')" -- patched/lib/generated/*.js > /dev/null
replace 'require("google-protobuf")' "require('./google-protobuf.patched/google-protobuf')" -- patched/lib/*.js > /dev/null
replace 'require("google-protobuf/google/protobuf/wrappers_pb")' "require('./google-protobuf.patched/wrappers_pb')" -- patched/lib/*.js > /dev/null
replace 'require("google-protobuf/google/protobuf/wrappers_pb")' "require('../google-protobuf.patched/wrappers_pb')" -- patched/lib/*/*.js > /dev/null
cp -r google-protobuf.patched patched/lib/
if grep -qrE "require\(.google-protobuf" patched; then
  echo "Error: google-protobuf still present"
  exit -1
fi
