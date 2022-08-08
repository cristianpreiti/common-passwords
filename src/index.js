'use strict';

const { BloomFilter } = require('bloom-filters');

const jsonFile = require('./common-passwords.json');
const bloomFilter = BloomFilter.fromJSON(jsonFile);

function CommonPasswords() {
  // TO-DO: Should we just use classes?
}

CommonPasswords.getFilter = function () {
  return bloomFilter;
};

CommonPasswords.isCommon = function (password) {
  return typeof password === 'string' && CommonPasswords.getFilter().has(password);
};

module.exports = CommonPasswords;
