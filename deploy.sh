#!/bin/bash

bun install
bun run build

git checkout gh-pages
mv dist/* ./
rm -rf dist
git add .
git commit -m "Deploy"
git push origin gh-pages
git checkout master

