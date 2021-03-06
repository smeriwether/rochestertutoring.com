#!/bin/bash

rm -rf ./site

npx postcss ./styles.css -o ./site/styles.css

cp index.html ./site/index.html
cp thanks.html ./site/thanks.html
cp 404.html ./site/404.html

if [ $NODE_ENV == "production" ]; then
  for file in ./site/*.html; do
    mv -- "$file" "${file%%.html}"
  done
fi

cp -R ./public ./site
