#!/bin/bash

cd hedera-sdk-js
yarn --frozen-lockfile
rm -rf lib
yarn run prepare
cd ..

rm -rf orig
mkdir orig
cp -r hedera-sdk-js/{lib,package.json,README.md,LICENSE.txt} orig

rm -rf patched
cp -r orig patched

find patched -name "*.d.ts" -delete
rm patched/lib/index-web.js
