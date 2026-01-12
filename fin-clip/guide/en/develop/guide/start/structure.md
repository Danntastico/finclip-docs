<!--
Source URL: https://super-apps.ai/mop/document/en/develop/guide/start/structure.html
Extracted: 2026-01-12T23:20:41.836Z (January 12, 2026)
Title: Mini-Program Code Structure | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

# [\#](https://super-apps.ai/mop/document/en/develop/guide/start/structure.html\#mini-program-code-structure) Mini-Program Code Structure

## [\#](https://super-apps.ai/mop/document/en/develop/guide/start/structure.html\#_1-json-configuration) 1\. JSON Configuration

JSON is a data format, not a programming language. In Mini-Programs, JSON plays the role of static configuration.

### [\#](https://super-apps.ai/mop/document/en/develop/guide/start/structure.html\#_1-1-mini-program-configuration-app-json) 1.1 Mini-Program Configuration app.json

app.json is the global configuration for the current Mini-Program, including all page paths, interface presentation, network timeout settings, bottom tabs, etc.

```json
{
  "pages":[\
    "pages/index/index",\
    "pages/logs/logs"\
  ],
  "window":{
    "backgroundTextStyle":"light",
    "navigationBarBackgroundColor": "#fff",
    "navigationBarTitleText": "Weixin",
    "navigationBarTextStyle":"black"
  }
}
```

Let's briefly explain the meaning of each item in this configuration:

**pages Field**

Used to describe all page paths of the current Mini-Program. This is so the Host-App client knows which directory your Mini-Program pages are defined in.

**window Field**

Defines the top background color, text color, etc., for all pages of the Mini-Program.

### [\#](https://super-apps.ai/mop/document/en/develop/guide/start/structure.html\#_1-2-page-configuration-page-json) 1.2 Page Configuration page.json

Here, page.json actually refers to configurations related to Mini-Program pages, such as logs.json in the pages/logs directory.

If your entire Mini-Program theme is blue, you can simply declare the top color as blue in app.json. However, in practice, this might not be the case. Different pages within your Mini-Program might have different color schemes to distinguish various functional modules. Therefore, we provide page.json, allowing developers to independently define certain attributes for each page, such as the top color mentioned earlier, whether pull-down refresh is allowed, etc.

### [\#](https://super-apps.ai/mop/document/en/develop/guide/start/structure.html\#_1-3-json-syntax) 1.3 JSON Syntax

Here are some points to note regarding JSON configuration in Mini-Programs.

JSON files are enclosed within curly braces `{}` and express data using key-value pairs. The Key in JSON must be enclosed in double quotes. In practice, forgetting to add double quotes around Key values or using single quotes instead are common errors when writing JSON.

Tip

JSON values can only be one of the following data formats. Any other format will trigger an error, such as `undefined` in JavaScript.

1. Numbers, including floating-point numbers and integers
2. Strings, which must be enclosed in double quotes
3. Boolean values, `true` or `false`
4. Arrays, which must be enclosed in square brackets `[]`
5. Objects, which must be enclosed in curly braces `{}`
6. Null

It is also important to note that comments cannot be used in JSON files. Attempting to add comments will cause an error.

## [\#](https://super-apps.ai/mop/document/en/develop/guide/start/structure.html\#_2-fxml-template) 2\. FXML Template

FXML is a tag language designed by the framework. Combined with Basic Components and the event system, it can construct the structure of a page.

```html
<!--fxml-->
<view> hello {{name}} </view>
// page.js
Page({
  data: {
    name: 'cortana'
  }
})
```

## [\#](https://super-apps.ai/mop/document/en/develop/guide/start/structure.html\#_3-ftss-styles) 3\. FTSS Styles

FTSS possesses most of the features of CSS. The Mini-Program has also made some extensions and modifications to FTSS.

New size units have been added. When writing CSS styles, developers need to consider that mobile devices have screens of different widths and device pixel ratios, requiring techniques to convert pixel units. FTSS supports a new size unit, `rpx`, at the underlying level, freeing developers from conversion hassles. The underlying Mini-Program handles the conversion. Since floating-point arithmetic is used for conversion, the result may have a slight deviation from the expected outcome.

Global styles and local styles are provided. Similar to the concepts of app.json and page.json mentioned earlier, you can write an app.FTSS as a global style, which will apply to all pages of the current Mini-Program. Local page styles, page.FTSS, only take effect on the current page.

Furthermore, FTSS only supports a subset of CSS selectors. For more detailed documentation, please refer to FTSS.

## [\#](https://super-apps.ai/mop/document/en/develop/guide/start/structure.html\#_4-js-logic-interaction) 4\. JS Logic Interaction

A service with only interface display is insufficient; it also needs to interact with users: responding to user clicks, obtaining user location, etc. In Mini-Programs, we handle user operations by writing JS script files.

```html
<view>{{ msg }}</view>
<button bindtap="clickMe">Click Me</button>
```

When the button is clicked, we want to change the `msg` displayed on the interface to "Hello World". Therefore, we declare an attribute `bindtap` on the button and declare a `clickMe` method in the JS file to respond to this click operation:

```javascript
Page({
  clickMe: function() {
    this.setData({ msg: "Hello World" })
  }
})
```