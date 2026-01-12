<!--
Source URL: https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/data.html
Extracted: 2026-01-12T23:18:18.948Z (January 12, 2026)
Title: Data Binding | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Mini Program Configuration](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/data.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Framework API](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/data.html) [![](https://super-apps.ai/mop/document/images/arrow_open.svg)\\
FXML Syntax](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/intro.html)

- [Introduction](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/intro.html)
- [Data Binding](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/data.html)
- [List Rendering](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/list.html)
- [Conditional Rendering](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/conditional.html)
- [Templates](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/template.html)
- [Reference](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/import.html)

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
FTS Syntax](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/data.html)

# [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/data.html\#data-binding) Data Binding

Dynamic data in FXML comes from the corresponding Page's data.

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/data.html\#_1-simple-binding) 1\. Simple Binding

Data binding uses double curly braces to wrap variables and can be applied to:

### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/data.html\#_1-1-content) 1.1 Content

```html
<view> {{message}} </view>

        Code copied

```

```javascript
// page.js
Page({
  data: {
    message: 'Hello World!'
  }
})

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/data.html\#_1-2-component-attributes-must-be-inside-double-quotes) 1.2 Component Attributes (must be inside double quotes)

```html
<view id="item-{{id}}"> </view>

        Code copied

```

```javascript
// page.js
Page({
  data: {
    id: 0
  }
})

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/data.html\#_1-3-control-attributes-must-be-inside-double-quotes) 1.3 Control Attributes (must be inside double quotes)

```html
<view wx:if="{{condition}}"> </view>

        Code copied

```

```javascript
// page.js
Page({
  data: {
    condition: true
  }
})

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/data.html\#_1-4-keywords-must-be-inside-double-quotes) 1.4 Keywords (must be inside double quotes)

`true`: boolean type true, representing a truthy value.

`false`: boolean type false, representing a falsy value.

```html
<checkbox checked="{{false}}"> </checkbox>

        Code copied

```

Note

Do not write `checked="false"` directly, as its evaluation result is a string, which converts to a truthy value when cast to boolean type.

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/data.html\#_2-operations) 2\. Operations

Simple operations can be performed within `{{}}`, supporting the following methods:

### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/data.html\#_2-1-ternary-operation) 2.1 Ternary Operation

```html
<view hidden="{{flag ? true : false}}"> Hidden </view>

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/data.html\#_2-2-arithmetic-operations) 2.2 Arithmetic Operations

```html
<view> {{a + b}} + {{c}} + d </view>

        Code copied

```

```javascript
// page.js
Page({
  data: {
    a: 1,
    b: 2,
    c: 3
  }
})

        Code copied

```

The content in the view is `3 + 3 + d`.

### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/data.html\#_2-3-logical-judgment) 2.3 Logical Judgment

```html
<view wx:if="{{length > 5}}"> </view>

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/data.html\#_2-4-string-operations) 2.4 String Operations

```html
<view>{{"hello" + name}}</view>

        Code copied

```

```javascript
Page({
  data:{
    name: ' '
  }
})

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/data.html\#_2-5-data-path-operations) 2.5 Data Path Operations

```html
<view>{{object.key}} {{array[0]}}</view>

        Code copied

```

```javascript
Page({
  data: {
    object: {
      key: 'Hello '
    },
    array: ['MINA']
  }
})

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/data.html\#_3-combination) 3\. Combination

You can also directly combine within Mustache to form new objects or arrays.

### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/data.html\#_3-1-array) 3.1 Array

```html
<view wx:for="{{[zero, 1, 2, 3, 4]}}"> {{item}} </view>

        Code copied

```

```javascript
Page({
  data: {
    zero: 0
  }
})

        Code copied

```

The final combined array is `[0, 1, 2, 3, 4]`.

### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/data.html\#_3-2-object) 3.2 Object

```html
<template is="objectCombine" data="{{for: a, bar: b}}"></template>

        Code copied

```

```javascript
Page({
  data: {
    a: 1,
    b: 2
  }
})

        Code copied

```

The final combined object is `{for: 1, bar: 2}`

You can also use the spread operator `...` to expand an object

```html
<template is="objectCombine" data="{{...obj1, ...obj2, e: 5}}"></template>

        Code copied

```

```javascript
Page({
  data: {
    obj1: {
      a: 1,
      b: 2
    },
    obj2: {
      c: 3,
      d: 4
    }
  }
})

        Code copied

```

The final combined object is `{a: 1, b: 2, c: 3, d: 4, e: 5}`.

If the object's key and value are the same, it can also be expressed indirectly.

```html
<template is="objectCombine" data="{{foo, bar}}"></template>

        Code copied

```

```javascript
Page({
  data: {
    foo: 'my-foo',
    bar: 'my-bar'
  }
})

        Code copied

```

The final combined object is `{foo: 'my-foo', bar:'my-bar'}`.

Note

The above methods can be combined arbitrarily, but if there are variables with the same name, the latter will overwrite the former, for example:

```html
<template is="objectCombine" data="{{...obj1, ...obj2, a, c: 6}}"></template>

        Code copied

```

```javascript
Page({
  data: {
    obj1: {
      a: 1,
      b: 2
    },
    obj2: {
      b: 3,
      c: 4
    },
    a: 5
  }
})

        Code copied

```

The final combined object is {a: 5, b: 3, c: 6}.

Note

If there is a space between the curly braces and quotes, it will ultimately be parsed as a string

```html
<view wx:for="{{[1,2,3]}} ">
  {{item}}
</view>

        Code copied

```

Equivalent to

```html
<view wx:for="{{[1,2,3] + ' '}}">
  {{item}}
</view>

        Code copied

```

[Previous：Introduction](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/intro.html)[Next：List Rendering](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/list.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)