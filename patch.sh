#!/bin/bash

rm -rf patched
cp -r orig patched

find patched -name "*.d.ts" -delete
rm patched/lib/index-web.js

replace "var global = Function('return this')();" "const { proto } = jspb.globalScope" -- patched/lib/generated/*_pb.js > /dev/null
if grep -qrE "[^a-zA-Z]Function\(" patched; then
  echo "Error: Function( still present"
  exit -1
fi

replace "require('google-protobuf')" "require('../google-protobuf.patched/google-protobuf')" -- patched/lib/generated/*.js > /dev/null
replace "require('google-protobuf/google/protobuf/wrappers_pb.js')" "require('../google-protobuf.patched/wrappers_pb')" -- patched/lib/generated/*.js > /dev/null
replace 'require("google-protobuf")' "require('./google-protobuf.patched/google-protobuf')" -- patched/lib/*.js > /dev/null
replace 'require("google-protobuf/google/protobuf/wrappers_pb")' "require('./google-protobuf.patched/wrappers_pb')" -- patched/lib/*.js > /dev/null
replace 'require("google-protobuf/google/protobuf/wrappers_pb")' "require('../google-protobuf.patched/wrappers_pb')" -- patched/lib/*/*.js > /dev/null
replace ", global)" ", jspb.globalScope)" -- patched/lib/generated/*.js > /dev/null
cp -r google-protobuf.patched patched/lib/
if grep -qrE "require\(.google-protobuf" patched; then
  echo "Error: google-protobuf still present"
  exit -1
fi
if grep -qrE '(^|[^a-zA-Z."])global([^a-zA-Z]|$)' patched; then
  echo "Error: global still present"
  exit -1
fi

cp package.patched.json patched/package.json

replace "@grpc/grpc-js" "@exodus/grpc-js" -- patched/lib/index-node.js patched/lib/mirror/node/*js > /dev/null
if grep -qrE '@grpc/grpc-js' patched; then
  echo "Error: @grpc/grpc-js still present"
  exit -1
fi
