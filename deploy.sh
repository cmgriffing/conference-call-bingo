#! /bin/bash

git checkout gh-pages
npm run i18n-build
git add locale -f
git commit -m "Deploying i18n builds"
git push origin gh-pages -f
git checkout master
git branch -D gh-pages