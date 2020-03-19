#!/bin/sh

#Requirements: brew
#Press 's' key + enter for data snapshots

echo "Fake data service:"

generate_file="generate.js"

brew install npm && \
npm install . && \
npm install json-server &&
json-server $generate_file
