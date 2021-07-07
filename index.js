#!/usr/bin/env node
// runs exercism submit finding the right js file in the local directory
// example: node index.js js

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const result = fs.readdirSync(process.cwd());
let [cmd, thisFile, ext] = process.argv;
ext ??= 'js';

const file = result.filter(
  (file) =>
    !file.includes('spec') &&
    !file.includes('config') &&
    path.extname(file) === `.${ext}`
);

exec(`exercism submit ${file}`, (err, stdout, stderr) => {
  if (err) {
    //some err occurred
    console.error(err);
  } else {
    // the *entire* stdout and stderr (buffered)
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  }
});
