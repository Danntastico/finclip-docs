<!--
Source URL: https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/intro.html
Extracted: 2026-01-12T23:18:15.148Z (January 12, 2026)
Title: FXML Introduction | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

# [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/intro.html\#fxml-introduction) FXML Introduction

FXML (Markup Language) is a markup language designed by the framework, which, combined with basic components and the event system, can construct the structure of pages.

Let's look at some simple examples to see what capabilities FXML possesses:

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/intro.html\#_1-data-binding) 1\. Data Binding

```xml
<!--fxml-->
<view> {{message}} </view>
// page.js
Page({
  data: {
    message: 'Hello World!'
  }
})
```

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/intro.html\#_2-list-rendering) 2\. List Rendering

```xml
<!--fxml-->
<view wx:for="{{array}}"> {{item}} </view>
// page.js
Page({
  data: {
    array: [1, 2, 3, 4, 5]
  }
})
```

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/intro.html\#_3-conditional-rendering) 3\. Conditional Rendering

```xml
<!--fxml-->
<view wx:if="{{view == 'WEBVIEW'}}"> WEBVIEW </view>
<view wx:elif="{{view == 'APP'}}"> APP </view>

// page.js
Page({
  data: {
    view: 'APP'
  }
})
```

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/intro.html\#_4-template) 4\. Template

```xml
<!--fxml-->
<template name="staffName">
  <view>
    FirstName: {{firstName}}, LastName: {{lastName}}
  </view>
</template>

<template is="staffName" data="{{...staffA}}"></template>
<template is="staffName" data="{{...staffB}}"></template>
<template is="staffName" data="{{...staffC}}"></template>
```

```js
// page.js
Page({
  data: {
    staffA: {firstName: 'Alex', lastName: 'Wang'},
    staffB: {firstName: 'Yuran', lastName: 'Wu'},
    staffC: {firstName: 'Arron', lastName: 'Liu'}
  }
})
```

Specific capabilities and usage methods can be viewed in the respective chapters within this directory.