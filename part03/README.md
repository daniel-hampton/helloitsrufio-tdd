# Part 3 - React Components & End to End tests

In this directory we started a react app called `react-app` with the command:

```
npx create-react-app@latest react-app
```

CRA should include Jest in its default configuration.

## Cypress

- `npm install --save-dev cypress`
- `npx cypress open` -> opens browser. Following prompts will add files to your system `cypress.config.js` and the `cypress` folder.

After adding the script `"cy:run": "cypress run"` to package.json, we can also run the tests from the CLI.

```
npm run cy:run
```

More information in the [docs](https://docs.cypress.io/guides/guides/command-line#How-to-run-commands).

## Jest

Component tests are similar to larger unit tests. Ideally you want to test components that are "pure" or "presentational" and do not call external APIs.

Run the example Jest test. It will enter 'watch' mode and give you options in the terminal. It is sometimes convenient to have your relevant tests run
immediately when you save changes to a file.

```
npm run test
```
