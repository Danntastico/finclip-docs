<!--
Source URL: https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/module.html
Extracted: 2026-01-12T23:19:18.437Z (January 12, 2026)
Title: Modules | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Mini Program Configuration](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/module.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Framework API](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/module.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
FXML Syntax](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/module.html) [![](https://super-apps.ai/mop/document/images/arrow_open.svg)\\
FTS Syntax](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/intro.html)
- [Introduction](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/intro.html)
- [Modules](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/module.html)
- [Variables](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/variate.html)
- [Annotations](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/annotation.html)
- [Operators](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/operate.html)
- [Statements](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/statement.html)
- [Data Types](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html)
- [Basic Library](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/basiclibrary.html)

# [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/module.html\#modules) Modules

FTS code can be written inside the `<fts>` tag in `fxml` files, or in files with the `.fts` extension.

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/module.html\#_1-modules) 1\. Modules

Each `.fts` file and `<fts>` tag is an independent module.

Each module has its own independent scope. That is, variables and functions defined within a module are private by default and not visible to other modules.

To expose its internal private variables and functions to the outside, a module can only do so through `module.exports`.

### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/module.html\#fts-files) .fts Files

In the WeChat Developer Tools, you can right-click to create a `.fts` file directly and write FTS scripts inside it.

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/module.html\#example-code) Example Code

```css
// /pages/comm.fts

var foo = "'hello world' from comm.fts";
var bar = function(d) {
  return d;
}
module.exports = {
  foo: foo,
  bar: bar
};

        Code copied

```

The above example writes FTS code in the `/pages/comm.fts` file. This `.fts` file can be referenced by other `.fts` files or the `<fts>` tag in FXML.

### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/module.html\#module-object) module Object

Each `fts` module has a built-in `module` object.

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/module.html\#properties) Properties

- `exports`: Through this property, private variables and functions of this module can be shared externally.

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/module.html\#example-code-2) Example Code

```css
// /pages/tools.fts

var foo = "'hello world' from tools.fts";
var bar = function (d) {
  return d;
}
module.exports = {
  FOO: foo,
  bar: bar,
};
module.exports.msg = "some msg";

        Code copied

```

```html
<!-- page/index/index.fxml -->

<fts src="./../tools.fts" module="tools" />
<view> {{tools.msg}} </view>
<view> {{tools.bar(tools.FOO)}} </view>

        Code copied

```

Page Output:

```html
some msg
'hello world' from tools.fts

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/module.html\#require-function) require Function

To reference other `fts` file modules within a `.fts` module, you can use the `require` function.

When referencing, note the following points:

- Only `.fts` file modules can be referenced, and relative paths must be used.
- `fts` modules are singletons. When an `fts` module is referenced for the first time, it is automatically initialized as a singleton object. Multiple pages, multiple locations, and multiple references all use the same `fts` module object.
- If an `fts` module is defined but never referenced, it will not be parsed or executed.

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/module.html\#example-code-3) Example Code

```css
// /pages/tools.fts

var foo = "'hello world' from tools.fts";
var bar = function (d) {
  return d;
}
module.exports = {
  FOO: foo,
  bar: bar,
};
module.exports.msg = "some msg";

        Code copied

```

```css
// /pages/logic.fts

var tools = require("./tools.wxs");

console.log(tools.FOO);
console.log(tools.bar("logic.wxs"));
console.log(tools.msg);

        Code copied

```

```html
<!-- /page/index/index.fxml -->
<fts src="./../logic.fts" module="logic" />

        Code copied

```

Console Output:

```html
'hello world' from tools.fts
logic.fts
some msg

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/module.html\#fts-tag)`<fts>` Tag

| Attribute Name | Type | Default Value | Description |
| --- | --- | --- | --- |
| module | String |  | The module name of the current `<fts>` tag. Required field. |
| src | String |  | The relative path to the referenced `.fts` file. Only effective when this tag is a self-closing tag or its content is empty. |

### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/module.html\#module-attribute) module Attribute

The module attribute is the module name of the current `<fts>` tag. Within a single FXML file, it is recommended that its value be unique. If there are duplicate module names, they will be overwritten in order (the latter overwrites the former). Module names of `fts` modules in different files do not overwrite each other.

The naming of the module attribute value must comply with the following two rules:

- The first character must be: a letter (a-zA-Z) or an underscore (\_).
- The remaining characters can be: letters (a-zA-Z), underscores (\_), or digits (0-9).

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/module.html\#example-code-4) Example Code

```html
<!--fxml-->

<fts module="foo">
var some_msg = "hello world";
module.exports = {
  msg : some_msg,
}
</fts>
<view> {{foo.msg}} </view>

        Code copied

```

Page Output:

```html
hello world

        Code copied

```

The above example declares a module named `foo`, exposing the `some_msg` variable for use by the current page.

### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/module.html\#src-attribute) src Attribute

The src attribute can be used to reference other `fts` file modules.

When referencing, note the following points:

- Only `.wxs` file modules can be referenced, and relative paths must be used.
- `wxs` modules are singletons. When a `wxs` module is referenced for the first time, it is automatically initialized as a singleton object. Multiple pages, multiple locations, and multiple references all use the same `wxs` module object.
- If a `wxs` module is defined but never referenced, it will not be parsed or executed.

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/module.html\#example-code-5) Example Code

```javascript
// /pages/index/index.js

Page({
  data: {
    msg: "'hello wrold' from js",
  }
})

        Code copied

```

```html
<!-- /pages/index/index.fxml -->

<fts src="./../comm.fts" module="some_comms"></fts>
<!-- Alternatively, you can use the self-closing tag syntax:
<fts src="./../comm.fts" module="some_comms" />
-->

<!-- Call the bar function from the some_comms module with the parameter being foo from the some_comms module -->
<view> {{some_comms.bar(some_comms.foo)}} </view>
<!-- Call the bar function from the some_comms module with the parameter being msg from page/index/index.js -->
<view> {{some_comms.bar(msg)}} </view>

        Code copied

```

Page Output:

```html
'hello world' from comm.wxs
'hello wrold' from js

        Code copied

```

The above example references the `/page/comm.fts` module via the `<fts>` tag in the file `/page/index/index.fxml`.

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/module.html\#_2-notes) 2\. Notes

1. The `<fts>` module can only be accessed within the FXML file where it is defined. When using `<include>` or `<import>`, the `<fts>` module will not be imported into the corresponding FXML file.
2. Within the `<template>` tag, only the `<fts>` modules defined in the FXML file that defines the `<template>` can be used.

[Previous：Introduction](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/intro.html)[Next：Variables](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/variate.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)