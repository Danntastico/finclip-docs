<!--
Source URL: https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/template.html
Extracted: 2026-01-12T23:18:22.978Z (January 12, 2026)
Title: Templates | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Mini Program Configuration](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/template.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Framework API](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/template.html) [![](https://super-apps.ai/mop/document/images/arrow_open.svg)\\
FXML Syntax](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/intro.html)

- [Introduction](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/intro.html)
- [Data Binding](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/data.html)
- [List Rendering](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/list.html)
- [Conditional Rendering](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/conditional.html)
- [Templates](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/template.html)
- [Reference](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/import.html)

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
FTS Syntax](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/template.html)

# [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/template.html\#templates) Templates

FXML provides templates (`template`) that allow defining code snippets within templates and then invoking them in different locations.

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/template.html\#_1-defining-templates) 1\. Defining Templates

Use the `name` attribute as the template's name. Then define the code snippet inside `<template/>`, for example:

```html
<!--
  index: int
  msg: string
  time: string
-->
<template name="msgItem">
  <view>
    <text> {{index}}: {{msg}} </text>
    <text> Time: {{time}} </text>
  </view>
</template>

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/template.html\#_2-using-templates) 2\. Using Templates

Use the `is` attribute to declare the template to be used, then pass the required data to the template, for example:

```html
<template is="msgItem" data="{{...item}}"/>

        Code copied

```

```javascript
Page({
  data: {
    item: {
      index: 0,
      msg: 'this is a template',
      time: '2016-09-15'
    }
  }
})

        Code copied

```

The `is` attribute can use Mustache syntax to dynamically determine which specific template to render:

```html
<template name="odd">
  <view> odd </view>
</template>
<template name="even">
  <view> even </view>
</template>

<block wx:for="{{[1, 2, 3, 4, 5]}}">
  <template is="{{item % 2 == 0 ? 'even' : 'odd'}}"/>
</block>

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/template.html\#_3-template-scope) 3\. Template Scope

Templates have their own scope and can only use data passed via `data` and the `<fts/>` module defined in the template definition file.

[Previous：Conditional Rendering](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/conditional.html)[Next：Reference](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/import.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)