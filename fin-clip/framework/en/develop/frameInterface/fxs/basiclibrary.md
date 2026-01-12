<!--
Source URL: https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/basiclibrary.html
Extracted: 2026-01-12T23:19:50.547Z (January 12, 2026)
Title: Base Library | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

# [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/basiclibrary.html\#base-library) Base Library

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/basiclibrary.html\#console) console

The `console.log` method is used to output information in the console window. It can accept multiple parameters and concatenate their results for output.

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/basiclibrary.html\#math) Math

### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/basiclibrary.html\#properties) Properties

- `E`
- `LN10`
- `LN2`
- `LOG2E`
- `LOG10E`
- `PI`
- `SQRT1_2`
- `SQRT2`

> For specific usage of the above properties, please refer to the `ES5` standard.

### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/basiclibrary.html\#methods) Methods

- `abs`
- `acos`
- `asin`
- `atan`
- `atan2`
- `ceil`
- `cos`
- `exp`
- `floor`
- `log`
- `max`
- `min`
- `pow`
- `random`
- `round`
- `sin`
- `sqrt`
- `tan`

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/basiclibrary.html\#json) JSON

### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/basiclibrary.html\#methods-2) Methods

- `stringify(object)`: Converts an `object` into a `JSON` string and returns the string.
- `parse(string)`: Parses a `JSON` string into an object and returns the object.

### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/basiclibrary.html\#example-code) Example Code

```text
console.log(undefined === JSON.stringify());
console.log(undefined === JSON.stringify(undefined));
console.log("null"===JSON.stringify(null));

console.log("111"===JSON.stringify(111));
console.log('"111"'===JSON.stringify("111"));
console.log("true"===JSON.stringify(true));
console.log(undefined===JSON.stringify(function(){}));

console.log(undefined===JSON.parse(JSON.stringify()));
console.log(undefined===JSON.parse(JSON.stringify(undefined)));
console.log(null===JSON.parse(JSON.stringify(null)));

console.log(111===JSON.parse(JSON.stringify(111)));
console.log("111"===JSON.parse(JSON.stringify("111")));
console.log(true===JSON.parse(JSON.stringify(true)));

console.log(undefined===JSON.parseJSON.stringify(function(){})));
```

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/basiclibrary.html\#number) Number

### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/basiclibrary.html\#properties-2) Properties

- `MAX_VALUE`
- `MIN_VALUE`
- `NEGATIVE_INFINITY`
- `POSITIVE_INFINITY`

> For specific usage of the above properties, please refer to the `ES5` standard.

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/basiclibrary.html\#date) Date

### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/basiclibrary.html\#properties-3) Properties

- `parse`
- `UTC`
- `now`

> For specific usage of the above properties, please refer to the `ES5` standard.

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/basiclibrary.html\#global) Global

### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/basiclibrary.html\#properties-4) Properties

- `NaN`
- `Infinity`
- `undefined`

> For specific usage of the above properties, please refer to the `ES5` standard.

### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/basiclibrary.html\#methods-3) Methods

- `parseInt`
- `parseFloat`
- `isNaN`
- `isFinite`
- `decodeURI`
- `decodeURIComponent`
- `encodeURI`
- `encodeURIComponent`

> For specific usage of the above properties, please refer to the `ES5` standard.