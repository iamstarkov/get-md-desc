# get-md-desc

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]

> get description from markdown article

## Install

    npm install --save get-md-desc

## Usage

```js
import getDesc from 'get-md-desc';

const input = `
# title

Published yesterday

Or in 21 december 2012

True *description*
`.trim();

getDesc(/Published|december/, input).text; // True description
getDesc(/Published|december/, input).html; // True <em>description</em>
getDesc(/Published|december/, input).node; // AST node, see commonmark API
getDesc(/Published|december/, '');         // undefined ¯\_(ツ)_/¯
```

## API

### getDesc(exclude, input)

#### exclude

*Required*  
Type: `String` or `RegExp`

Pattern, which description should not have.

#### input

*Required*  
Type: `String`

Markdown string.

## License

MIT © [Vladimir Starkov](https://iamstarkov.com)

[npm-url]: https://npmjs.org/package/get-md-desc
[npm-image]: https://img.shields.io/npm/v/get-md-desc.svg?style=flat-square

[travis-url]: https://travis-ci.org/iamstarkov/get-md-desc
[travis-image]: https://img.shields.io/travis/iamstarkov/get-md-desc.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/iamstarkov/get-md-desc
[coveralls-image]: https://img.shields.io/coveralls/iamstarkov/get-md-desc.svg?style=flat-square

[depstat-url]: https://david-dm.org/iamstarkov/get-md-desc
[depstat-image]: https://david-dm.org/iamstarkov/get-md-desc.svg?style=flat-square
