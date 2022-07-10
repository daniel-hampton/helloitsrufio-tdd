# TDD Part 1

Here we'll start off simple testing some plain JavaScript functions with `mocha` and `chai`.

Mocha is the _test runner_ framework and chai is the _assertion library_.

We'll also use chai-expect to use the more familiar `expect` syntax for test assertions.

Steps:

- `npm init` follow prompts
- Update `package.json` to `"type": "module"` (to use import syntax)
- `npm install --save-dev mocha chai`
- Update `package.json` with a script `"test": "mocha"`
- Create an index.js file
- Create an index.test.js file in a `test` subfolder (mocha looks there by default).
- Write your tests then `npm run test`
- Write your code, test and repeat.
