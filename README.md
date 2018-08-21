[![NPM version](https://badge.fury.io/js/%40dizmo%2Ffunctions-after.svg)](https://npmjs.org/package/@dizmo/functions-after)
[![Build Status](https://travis-ci.org/dizmo/functions-after.svg?branch=master)](https://travis-ci.org/dizmo/functions-after)
[![Coverage Status](https://coveralls.io/repos/github/dizmo/functions-after/badge.svg?branch=master)](https://coveralls.io/github/dizmo/functions-after?branch=master)

# @dizmo/functions-after
Returns a method decorator taking a callback, which will be invoked after the execution of the decorated function.

## Usage
### Install
```sh
npm install @dizmo/functions-after --save
```
### Require
```javascript
let lib = require("@dizmo/functions-after");
```
### Examples
```typescript
import { after } from "@dizmo/functions-after";

const f1 = (): number => {
    return 1;
};
const f2 = after(f1, (n: number): number => {
    return n + 1;
});
console.debug(f2());
```
```typescript
import { decorator as after } from "@dizmo/functions-after";

class Class {
    @after((n: number): number => {
        return n + 1;
    })
    public method(): number {
        return 1;
    }
}
console.debug(new Class().method());
```
## Development
### Build
```sh
npm run build
```
#### without linting:
```sh
npm run -- build --no-lint
```
### Lint
```sh
npm run lint
```
#### with auto-fixing (for JavaScript and TypeScript):
```sh
npm run -- lint --fix
```
### Test
```sh
npm run test
```
#### without (re-)building:
```sh
npm run -- test --no-build
```
### Cover
```sh
npm run cover
```
#### without (re-)building:
```sh
npm run -- cover --no-build
```

## Copyright

 © 2018 [dizmo AG](http://dizmo.com/), Switzerland
