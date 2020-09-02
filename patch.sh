#!/bin/bash

rm -rf patched
cp -r orig patched

find patched -name "*.d.ts" -delete
rm patched/lib/index-web.js

./fix_pb.sh patched/lib/generated/*_pb.js

if grep -qrE "[^a-zA-Z]Function\(" patched; then
  echo "Error: Function( still present"
  exit -1
fi

replace 'require("google-protobuf")' 'require("@exodus/google-protobuf")' -- patched/lib/*.js patched/lib/*/*.js > /dev/null
replace 'require("google-protobuf/' 'require("@exodus/google-protobuf/' -- patched/lib/*.js patched/lib/*/*.js > /dev/null
if grep -qrE "\(.google-protobuf" patched; then
  echo "Error: google-protobuf still present"
  exit -1
fi

if grep -qrE '(^|[^a-zA-Z."])global([^a-zA-Z]|$)' patched; then
  echo "Error: global still present"
  exit -1
fi

cp package.patched.json patched/package.json

replace "@grpc/grpc-js" "@exodus/grpc-js" -- patched/lib/index-node.js > /dev/null
if grep -qrE '@grpc/grpc-js' patched; then
  echo "Error: @grpc/grpc-js still present"
  exit -1
fi
