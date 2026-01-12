<!--
Source URL: https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/list.html
Extracted: 2026-01-12T23:18:19.170Z (January 12, 2026)
Title: List Rendering | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Mini Program Configuration](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/list.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Framework API](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/list.html) [![](https://super-apps.ai/mop/document/images/arrow_open.svg)\\
FXML Syntax](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/intro.html)

- [Introduction](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/intro.html)
- [Data Binding](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/data.html)
- [List Rendering](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/list.html)
- [Conditional Rendering](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/conditional.html)
- [Templates](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/template.html)
- [Reference](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/import.html)

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
FTS Syntax](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/list.html)

# [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/list.html\#list-rendering) List Rendering

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/list.html\#_1-wx-for) 1\. wx:for

Use the `wx:for` control attribute on a component to bind an array, allowing you to repeatedly render the component using the data from each item in the array.

By default, the variable name for the current item's index in the array is `index`, and the variable name for the current array item is `item`.

```html
<view wx:for="{{array}}">
  {{index}}: {{item.message}}
</view>

        Code copied

```

```javascript
Page({
  data: {
    array: [{\
      message: 'foo',\
    }, {\
      message: 'bar'\
    }]
  }
})

        Code copied

```

Use `wx:for-item` to specify the variable name for the current element in the array.

Use `wx:for-index` to specify the variable name for the current index in the array:

```html
<view wx:for="{{array}}" wx:for-index="idx" wx:for-item="itemName">
  {{idx}}: {{itemName.message}}
</view>

        Code copied

```

`wx:for` can also be nested. Below is an example of a multiplication table:

```html
<view wx:for="{{[1, 2, 3, 4, 5, 6, 7, 8, 9]}}" wx:for-item="i">
  <view wx:for="{{[1, 2, 3, 4, 5, 6, 7, 8, 9]}}" wx:for-item="j">
    <view wx:if="{{i <= j}}">
      {{i}} * {{j}} = {{i * j}}
    </view>
  </view>
</view>

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/list.html\#_2-block-wx-for) 2\. block wx:for

Similar to `block wx:if`, `wx:for` can also be used on a `<block/>` tag to render a structural block containing multiple nodes. For example:

```html
<block wx:for="{{[1, 2, 3]}}">
  <view> {{index}}: </view>
  <view> {{item}} </view>
</block>

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/list.html\#_3-wx-key) 3\. wx:key

If the position of items in the list may change dynamically, or new items may be added to the list, and you want the items in the list to maintain their own characteristics and state (such as input content in `input`, or the checked state of a `switch`), you need to use `wx:key` to specify a unique identifier for the items in the list.

The value of `wx:key` can be provided in two forms:

1. A string, representing a property of the item in the for loop's array. The value of this property must be a unique string or number in the list and cannot change dynamically.
2. The reserved keyword `*this` represents the item itself in the for loop. This usage requires that the item itself is a unique string or number.

When data changes trigger re-rendering of the rendering layer, components with a key will be corrected. The framework ensures they are reordered rather than recreated, to maintain the component's own state and improve the efficiency of list rendering.

If `wx:key` is not provided, a `warning` will be reported. If you are certain that the list is static or the order is not important, you can choose to ignore it.

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/list.html\#_4-example-code) 4\. Example Code

```html
<switch wx:for="{{objectArray}}" wx:key="unique" style="display: block;"> {{item.id}} </switch>
<button bindtap="switch"> Switch </button>
<button bindtap="addToFront"> Add to the front </button>

<switch wx:for="{{numberArray}}" wx:key="*this" style="display: block;"> {{item}} </switch>
<button bindtap="addNumberToFront"> Add to the front </button>

        Code copied

```

```javascript
Page({
  data: {
    objectArray: [\
      {id: 5, unique: 'unique_5'},\
      {id: 4, unique: 'unique_4'},\
      {id: 3, unique: 'unique_3'},\
      {id: 2, unique: 'unique_2'},\
      {id: 1, unique: 'unique_1'},\
      {id: 0, unique: 'unique_0'},\
    ],
    numberArray: [1, 2, 3, 4]
  },
  switch: function(e) {
    const length = this.data.objectArray.length
    for (let i = 0; i < length; ++i) {
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      const temp = this.data.objectArray[x]
      this.data.objectArray[x] = this.data.objectArray[y]
      this.data.objectArray[y] = temp
    }
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addToFront: function(e) {
    const length = this.data.objectArray.length
    this.data.objectArray = [{id: length, unique: 'unique_' + length}].concat(this.data.objectArray)
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addNumberToFront: function(e){
    this.data.numberArray = [ this.data.numberArray.length + 1 ].concat(this.data.numberArray)
    this.setData({
      numberArray: this.data.numberArray
    })
  }
})

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/list.html\#_5-notes) 5\. Notes

When the value of `wx:for` is a string, it will be parsed into a string array.

```html
<view wx:for="array">
  {{item}}
</view>

        Code copied

```

Equivalent to:

```html
<view wx:for="{{['a','r','r','a','y']}}">
  {{item}}
</view>

        Code copied

```

Please note

If there is a space between the curly braces and the quotes, it will ultimately be parsed as a string.

```html
<view wx:for="{{[1,2,3]}} ">
  {{item}}
</view>

        Code copied

```

Equivalent to:

```html
<view wx:for="{{[1,2,3] + ' '}}" >
  {{item}}
</view>

        Code copied

```

[Previous：Data Binding](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/data.html)[Next：Conditional Rendering](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/conditional.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)