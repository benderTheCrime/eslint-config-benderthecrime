# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).


### [1.7.0] - 2016-22-11
#### Changed
- Enabled the following rules:
  - "complexity"
  - "func-style"
  - "id-length"
  - "max-statements"
  - "no-continue"
  - "no-empty-function"
  - "no-implicit-coercion"
  - "no-invalid-this"
  - "no-lone-blocks"
  - "no-magic-numbers"
  - "no-sync"
  - "no-underscore-dangle"
  - "padded-blocks"
  - "prefer-rest-params"


### [1.6.0] - 2016-20-11
#### Added/Changed
- Added the "require-jsdoc-on-export" rule
- Changed the "no-warning-comments" terms to all caps

### [1.5.0] - 2016-11-06
#### Added/Changed/Removed
- Added the "max-func-body-len" rule
- Added `eslintrc.json` to which `index.js` now points
- Upgraded versions of eslint depenednencies
- Removed the "new-cap-alt" rule

### [1.4.0] - 2016-06-16
#### Added/Changed/Removed
- Upgraded to eslint "2.12.0" and modified rules to reflect the upgrade
- Added ES6 specific rules to the configuration
- Removed extension dependencies

#### [1.3.1] - 2016-05-24
##### Changed
- Changed the RegExp ignore pattern for `max-len` to accept "const/require"
statements

### [1.3.0] - 2016-02-29
#### Added
- Added new 2.0 rules for `array-callback-return`

### [1.2.0] - 2016-02-22
#### Added
- Added new 2.0 rules for `consistent-return`, `no-return-assign`,
`keyword-spacing`, and `no-labels`

### [1.1.0] - 2016-02-22
#### Added
- Added a RegExp ignore clause for `max-len` to not fault on import statements

#### [1.0.2] - 2016-01-30
##### Changed
- Added more clarity to the README