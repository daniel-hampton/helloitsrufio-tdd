# With TypeScript

Same as part one but we'll show how you can use mocha with typescript.

Key differences:

- need `ts-node and typescript` to compile typescript on demand for tests. `npm install --save-dev ts-node typescript`
- typescript needs type definitions for mocha and chai, which are separate: `npm install --save-dev @types/mocha @types/chai`
- need a `tsconfig.json`, so we'll run `npm exec tsc -- --init`, the extra `--` is to make sure args are passed to `tsc` and not `npm`
- remove `"type": "module"` from `package.json` because typescript letting us use import syntax but coverting to commonjs.
- update npm `test` script to `"mocha --loader=ts-node/esm test/*.test.ts"`
  - This `--loader=ts-node/esm` part was tricky to figure out.
