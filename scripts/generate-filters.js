#!/usr/bin/env node

'use strict';

const { BloomFilter } = require('bloom-filters');
const fs = require('fs');
const path = require('path');

const inputFile = path.resolve(__dirname, './common-passwords.txt');
const outputFile = path.resolve(__dirname, '../src/common-passwords.json');

try {
  // Read and process passwords.
  const fileContents = fs.readFileSync(inputFile, 'utf8');
  const commonPasswords = fileContents.split(/\r?\n/).map((element) => element.trim());
  const bloomFilter = BloomFilter.from(commonPasswords, 0.000001);

  // Generate and export data structure.
  const dataStructure = bloomFilter.saveAsJSON();

  fs.writeFileSync(outputFile, JSON.stringify(dataStructure, null, 2), 'utf8');

  console.log(`Serialised file 'common-passwords.json' successfully created.`);
} catch (error) {
  console.error(error);
}
