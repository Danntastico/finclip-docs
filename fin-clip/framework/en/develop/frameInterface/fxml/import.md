<!--
Source URL: https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/import.html
Extracted: 2026-01-12T23:18:26.824Z (January 12, 2026)
Title: Importing | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Mini Program Configuration](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/import.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Framework API](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/import.html) [![](https://super-apps.ai/mop/document/images/arrow_open.svg)\\
FXML Syntax](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/intro.html)

- [Introduction](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/intro.html)
- [Data Binding](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/data.html)
- [List Rendering](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/list.html)
- [Conditional Rendering](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/conditional.html)
- [Templates](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/template.html)
- [Reference](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/import.html)

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
FTS Syntax](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/import.html)

# [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/import.html\#importing) Importing

FXML provides two methods for file importing: `import` and `include`.

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/import.html\#_1-import) 1\. import

`import` allows the use of `template` defined in the target file within the current file, for example:

Define a `template` named `item` in item.fxml:

```html
<!-- item.fxml -->
<template name="item">
  <text>{{text}}</text>
</template>

        Code copied

```

After importing item.fxml in index.fxml, you can use the `item` template:

```html
<import src="item.fxml"/>
<template is="item" data="{{text: 'forbar'}}"/>

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/import.html\#_2-scope-of-import) 2\. Scope of import

Import has the concept of scope, meaning it only imports the `template` defined in the target file, and does not import templates imported by the target file.

**For example: C imports B, B imports A. In C, you can use the `template` defined in B, and in B you can use the `template` defined in A, but C cannot use the `template` defined in A.**

```html
<!-- A.fxml -->
<template name="A">
  <text> A template </text>
</template>

        Code copied

```

```html
<!-- B.fxml -->
<import src="a.fxml"/>
<template name="B">
  <text> B template </text>
</template>

        Code copied

```

```html
<!-- C.fxml -->
<import src="b.fxml"/>
<template is="A"/>  <!-- Error! Can not use tempalte when not import A. -->
<template is="B"/>

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/import.html\#_3-include) 3\. include

`include` imports the entire code of the target file except for `<template/>` and `<fts/>`, essentially copying it to the `include` location, for example:

```html
<!-- index.fxml -->
<include src="header.fxml"/>
<view> body </view>
<include src="footer.fxml"/>

        Code copied

```

```html
<!-- header.fxml -->
<view> header </view>

        Code copied

```

```html
<!-- footer.fxml -->
<view> footer </view>

        Code copied

```

[Previous：Templates](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/template.html)[Next：Introduction](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/intro.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)