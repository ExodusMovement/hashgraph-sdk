#!/bin/bash

rm -rf patched
cp -r orig patched

find patched -name "*.d.ts" -delete
rm patched/lib/index-web.js
