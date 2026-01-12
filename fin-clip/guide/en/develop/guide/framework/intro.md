<!--
Source URL: https://super-apps.ai/mop/document/en/develop/guide/framework/intro.html
Extracted: 2026-01-12T23:20:49.868Z (January 12, 2026)
Title: Introduction | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Overview](https://super-apps.ai/mop/document/en/develop/guide/feature.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Understand Mini Program](https://super-apps.ai/mop/document/en/develop/guide/framework/intro.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Configure Mini Program](https://super-apps.ai/mop/document/en/develop/guide/framework/intro.html) [![](https://super-apps.ai/mop/document/images/arrow_open.svg)\\
Mini Program Framework](https://super-apps.ai/mop/document/en/develop/guide/framework/intro.html)

- [Introduction](https://super-apps.ai/mop/document/en/develop/guide/framework/intro.html)
- [Logic Layer](https://super-apps.ai/mop/document/en/develop/guide/framework/app-service.html)
- [View Layer](https://super-apps.ai/mop/document/en/develop/guide/framework/view.html)

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Custom Component](https://super-apps.ai/mop/document/en/develop/guide/component.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Mini Program Plugin](https://super-apps.ai/mop/document/en/develop/guide/plugin.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Basic Abilities](https://super-apps.ai/mop/document/en/develop/guide/framework/intro.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Import from 3rd-party (beta)](https://super-apps.ai/mop/document/en/develop/guide/framework/intro.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
SSO Login Guide](https://super-apps.ai/mop/document/en/develop/guide/ssoLogin.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Traceability (beta)](https://super-apps.ai/mop/document/en/develop/guide/trace.html)

# [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/intro.html\#introduction) Introduction

The goal of the Mini-Program development framework is to enable developers to create services with a native APP experience within WeChat in the simplest and most efficient way possible.

The entire Mini-Program framework system is divided into two parts: the `App Service / Logic Layer` and the `View Layer`. The Mini-Program provides its own view layer description languages `FXML` and `FTSS`, a `JavaScript`-based logic layer framework, and offers data transfer and event systems between the view layer and the logic layer, allowing developers to focus on data and logic.

## [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/intro.html\#_1-reactive-data-binding) 1\. Reactive Data Binding

The core of the framework is a reactive data binding system that makes it very simple to keep data and the view in sync. When making data modifications, you only need to modify the data in the logic layer, and the view layer will update accordingly.

Take a look at this simple example:

```html
<!-- This is our View -->
<view> Hello {{name}}! </view>
<button bindtap="changeName"> Click me! </button>

        Code copied

```

```js
// This is our App Service.
// This is our data.
var helloData = {
  name: 'FinClip'
}

// Register a Page.
Page({
  data: helloData,
  changeName: function(e) {
    // sent data change to view
    this.setData({
      name: 'World'
    })
  }
})

        Code copied

```

- The developer binds the `name` in the logic layer data with the `name` in the view layer through the framework, so when the page opens, it displays `Hello FinClip!`.
- When the button is clicked, the view layer sends a `changeName` event to the logic layer, which finds and executes the corresponding event handler function.
- After the callback function is triggered, the logic layer performs a `setData` operation, changing the `name` in `data` from `FinClip` to `World`. Because this data is already bound to the view layer, the view layer automatically changes to `Hello World!`.

## [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/intro.html\#_2-page-management) 2\. Page Management

The `Framework` manages **the entire Mini-Program's** page routing, enabling seamless transitions between pages and providing a complete lifecycle for each page. Developers only need to register the page's data, methods, and lifecycle functions with the `Framework`, and all other complex operations are handled by the `Framework`.

## [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/intro.html\#_3-basic-components) 3\. Basic Components

The `Framework` provides a set of **basic components** that come with unified styling and specific logic. Developers can create powerful FinClip Mini-Programs by combining these basic components.

## [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/intro.html\#_4-rich-apis) 4\. Rich APIs

The `Framework` offers a rich set of **native APIs**, making it convenient to invoke the capabilities provided by the Mini-Program SDK.

[Previous：Sitemap Configuration](https://super-apps.ai/mop/document/en/develop/guide/setting/sitemap.html)[Next：Logic Layer](https://super-apps.ai/mop/document/en/develop/guide/framework/app-service.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)