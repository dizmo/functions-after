[![NPM version](https://badge.fury.io/js/%40dizmo%2Ffunctions-after.svg)](https://npmjs.org/package/@dizmo/functions-after)
[![Build Status](https://travis-ci.org/dizmo/functions-after.svg?branch=master)](https://travis-ci.org/dizmo/functions-after)
[![Coverage Status](https://coveralls.io/repos/github/dizmo/functions-after/badge.svg?branch=master)](https://coveralls.io/github/dizmo/functions-after?branch=master)

# @dizmo/functions-after

Returns a function decorating an original function with a callback, which will be invoked after the execution of the original function. The return value of the original function will be handed over to the *after* callback as an argument, while the return value of the callback will become the overall result.

## Usage

### Install

```sh
npm install @dizmo/functions-after --save
```

### Require

```javascript
const { after } = require("@dizmo/functions-after");
```

### Examples

```typescript
import { after } from "@dizmo/functions-after";
```

```typescript
const f1 = (): number => {
    return 1;
};
const f2 = after(f1, (n: number): number => {
    return n + 1;
});
const expect = 2 === f2();
```

```typescript
class Class {
    @after.decorator((n: number): number => {
        return n + 1;
    })
    public method(): number {
        return 1;
    }
}
const expect = 2 === new Class().method();
```

## Development

### Clean

```sh
npm run clean
```

### Build

```sh
npm run build
```

#### without linting and cleaning:

```sh
npm run -- build --no-lint --no-clean
```

#### with UMD bundling (incl. minimization):

```sh
npm run -- build --prepack
```

#### with UMD bundling (excl. minimization):

```sh
npm run -- build --prepack --no-minify
```

### Lint

```sh
npm run lint
```

#### with auto-fixing:

```sh
npm run -- lint --fix
```

### Test

```sh
npm run test
```

#### without linting, cleaning and (re-)building:

```sh
npm run -- test --no-lint --no-clean --no-build
```

### Cover

```sh
npm run cover
```

#### without linting, cleaning and (re-)building:

```sh
npm run -- cover --no-lint --no-clean --no-build
```

## Publish

```sh
npm publish
```

#### initially (if public):

```sh
npm publish --access=public
```

## Copyright

 © 2019 [dizmo AG](http://dizmo.com/), Switzerland
