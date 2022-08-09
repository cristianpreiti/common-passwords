CommonPasswords.js
================

CommonPasswords is a list of common passwords implemented to provide NIST best practices of preventing usage of the 100,000 most used passwords.

This module is based on the library [CommonPasswords](https://github.com/wikimedia/common-passwords) created by Wikimedia for PHP. All credits go to the original authors.

## Installation

```
$ npm install common-passwords
```

## Usage

```js
const CommonPasswords = require('common-passwords');

CommonPasswords.isCommon('abc123'); // TRUE
CommonPasswords.isCommon('metallica'); // TRUE
CommonPasswords.isCommon('my_super_secure_password'); // FALSE
```

## Password list

The source password list can be found on [GitHub](https://github.com/danielmiessler/SecLists/blob/aad07ff/Passwords/10_million_password_list_top_100000.txt)
