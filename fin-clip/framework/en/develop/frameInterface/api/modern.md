<!--
Source URL: https://super-apps.ai/mop/document/en/develop/frameInterface/api/modern.html
Extracted: 2026-01-12T23:18:15.298Z (January 12, 2026)
Title: Modularization | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

# [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/api/modern.html\#modularization) Modularization

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/api/modern.html\#_1-required) 1\. required

Imports a module. Returns the interface exposed by the module via `module.exports` or `exports`.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| path | string | The relative path of the module file to be imported relative to the current file, or the npm module name, or the npm module path. Absolute paths are not supported. |

**Example Code**

```javascript
// common.js
function sayHello(name) {
  console.log(`Hello ${name} !`)
}
function sayGoodbye(name) {
  console.log(`Goodbye ${name} !`)
}

module.exports.sayHello = sayHello
exports.sayGoodbye = sayGoodbye
```

```javascript
var common = require('common.js')
Page({
  helloMINA: function() {
    common.sayHello('MINA')
  },
  goodbyeMINA: function() {
    common.sayGoodbye('MINA')
  }
})
```

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/api/modern.html\#_2-module) 2\. module

The current module object.

**Properties**

| Property | Type | Description |
| --- | --- | --- |
| exports | Object | The object exposed by the module, which can be obtained when using `require` to reference this module. |

**Example Code**

```javascript
// common.js
function sayHello(name) {
  console.log(`Hello ${name} !`)
}
function sayGoodbye(name) {
  console.log(`Goodbye ${name} !`)
}

module.exports.sayHello = sayHello
exports.sayGoodbye = sayGoodbye
```

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/api/modern.html\#_3-exports) 3\. exports

A reference to `module.exports`

**Example Code**

```javascript
// common.js
function sayHello(name) {
  console.log(`Hello ${name} !`)
}
function sayGoodbye(name) {
  console.log(`Goodbye ${name} !`)
}

module.exports.sayHello = sayHello
exports.sayGoodbye = sayGoodbye
```