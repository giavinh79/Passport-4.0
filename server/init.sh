#!/bin/bash

rm -rf build_client
mkdir build_client
cd ../website
npm i
npm run build
mv build ../server/build_client
cd ../server
gcloud app deploy