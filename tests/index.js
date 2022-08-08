'use strict';

const assert = require('assert');
const fs = require('fs');
const path = require('path');

const CommonPasswords = require('../src/index');

describe('CommonPasswords', function () {
  describe('#isCommon()', function () {
    let commonPasswords = [];
    const notCommonPasswords = ['testwikijenkinspass', 'MediaWiki', 'Wikipedia', 'Wikimedia', 'yell0w']

    before(function () {
      try {
        const fileContents = fs.readFileSync(path.resolve(__dirname, '../scripts/common-passwords.txt'), 'utf8');
        commonPasswords = fileContents.split(/\r?\n/).map((element) => element.trim());
      } catch (error) {
        console.error(error);
      }
    });

    // Test common passwords.
    it('should be true for all elements', function () {
      for (const password of commonPasswords) {
        assert.equal(true, CommonPasswords.isCommon(password));
      }
    });

    // Test not common passwords.
    it('should be false for all elements', function () {
      for (const password of notCommonPasswords) {
        assert.notEqual(true, CommonPasswords.isCommon(password));
      }
    });
  });
});
