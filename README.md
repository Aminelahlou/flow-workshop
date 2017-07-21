# flow-sample

JS@PayPal 2017: Flow Workshop

## Task 1: Install Flow

For this task you need to install flow.

**Instructions**

1. `npm install flow-bin`
2. Edit package.json and add `flow` to scripts.
3. Run `npm run flow init` to setup your `.flowconfig`
4. Type `npm run flow`

**Expectation**

Flow needs to run when you type: `npm run flow`

## Task 2: Setup Babel

Here we'll be setting up babel to strip flow types.

**Instructions**

1. `npm install babel-cli babel-preset-env babel-plugin-transform-flow-strip-types`
2. Edit `.babelrc` to enable the `preset-env` and `strip-types`
3. Add `"babel": "babel-node",` to the `package.json` in `scripts`
4. Type `npm run babel index.js`

**Expectation**

Calling `npm run babel index.js` should produce `"Welcome to the FlowType Workshop"`

## Task 3: Add Flow Types to 1.js

Go through each function and variable declartion in `1.js` and make
sure that it has the correct flowType. Correct any type errors
or add additional conditional statements needed to satisfy flow.

**Expectation**

- `npm run babel 1.js` should display "Hello"
- `npm run flow check-contents < 1.js` should show no errors
- `npm run flow coverage 1.js` should show 100% coverage

## Task 4: Add Flow Types to 2.js

Go through each function and variable declartion in `1.js` and make
sure that it has the correct flowType. Correct any type errors
or add additional conditional statements needed to satisfy flow.

**Expectation**

- `npm run babel 2.js` should display "Hello"
- `npm run flow check-contents < 2.js` should show no errors
- `npm run flow coverage 2.js` should show 100% coverage

## Task 5: Complete 3.js

Create a `formatAmount` function in 3.js that takes as params
a string or a number and returns a formatted number string
that is formatted to 2-decimal places. 

After ensuring that the flow typing is working, you can change or remove
any input into the `formatAmount()` function that is not a string or
a number.

**Expectation**

- `npm run babel 3.js` should show 6 numbers formatted w/2-decimal places (i.e.  "10.00")
- `npm run flow check-conents < 3.js` should show no errors
- `npm run flow coverage 3.js` should show 100%


