# flow-sample

JS@PayPal 2017: Flow Workshop

## Task 1: Install Flow

For this task you need to install flow.

**Expectation**

Flow needs to run when you type: `npm run flow`

1. `npm install flow-bin`
2. Edit package.json and add `flow` to scripts.
3. Run `npm run flow` and see some errors

## Task 2: Achieve 100% Flow Coverage for 1.js

Go through each function and variable declartion in `1.js` and make
sure that it has the correct flowType. Correct any type errors
or add additional conditional statements needed to satisfy flow.

**Expectation**

- `node 1.js` should display "Hello" twice
- `npm run flow` should show no errors
- `npm run flow -- coverage 1.js` should show 100% coverage

## Task 3: 