<!--
Source URL: https://super-apps.ai/mop/document/en/develop/jssdk/web-view.html
Extracted: 2026-01-12T23:14:52.241Z (January 12, 2026)
Title: JSSDK | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Component Overview](https://super-apps.ai/mop/document/en/develop/component/overview.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
View Container](https://super-apps.ai/mop/document/en/develop/component/view.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Basic Content](https://super-apps.ai/mop/document/en/develop/component/basic.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Form Components](https://super-apps.ai/mop/document/en/develop/component/form.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Navigation](https://super-apps.ai/mop/document/en/develop/component/navigation.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Media Components](https://super-apps.ai/mop/document/en/develop/component/media.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Map Components](https://super-apps.ai/mop/document/en/develop/component/map.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Canvas](https://super-apps.ai/mop/document/en/develop/component/canvas.html) [![](https://super-apps.ai/mop/document/images/arrow_open.svg)\\
Open Abilities](https://super-apps.ai/mop/document/en/develop/jssdk/web-view.html)

- [web-view](https://super-apps.ai/mop/document/en/develop/jssdk/web-view.html)
- [Interface Specification](https://super-apps.ai/mop/document/en/develop/jssdk/jssdk-interface.html)
- [Changelog](https://super-apps.ai/mop/document/en/develop/jssdk/jssdk-update-log.html)

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Native Component Intro](https://super-apps.ai/mop/document/en/develop/component/original.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Navigation Bar](https://super-apps.ai/mop/document/en/develop/component/navigation-bar.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Page Meta](https://super-apps.ai/mop/document/en/develop/component/meta.html)

# [\#](https://super-apps.ai/mop/document/en/develop/jssdk/web-view.html\#jssdk) JSSDK

## [\#](https://super-apps.ai/mop/document/en/develop/jssdk/web-view.html\#_1-web-view-component) 1\. web-view Component

A container component for hosting web page content.

Starting from Base Library 3.6.4 and SDK 2.47.11, the cover-view component is supported within web-view pages.

If nesting is used inside web-view, due to underlying rendering layer reasons, the cover-view node under web-view must have a root node with fixed positioning added, for example:

```html
<web-view src="https://some-url.com">
    <cover-view style="position: fixed;top: 0;right: 0;width: 100vw;height: 100vh;">
        ...
    </cover-view>
</web-view>

        Code copied

```

It can also be used in the following way; it is also recommended to add `position: fixed` to the cover-view as the root node to avoid layer issues:

```html
<web-view src="https://some-url.com">
</web-view>
<cover-view style="position: fixed;top: 0;right: 0;width: 100vw;height: 100vh;">
    ...
</cover-view>

        Code copied

```

**Attribute Description**

| Attribute | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| src | string |  | No | The web page link to open |  |
| timeout | number |  | 0 | Specifies the timeout event. If `ft.complete()` is not called by the web page within the specified time, the `bindtimeout` event will be triggered. |  |
| bindmessage | eventhandler |  | No | Triggered when the web page posts a message to the Mini-Program at specific times (Mini-Program navigation back, component destruction, sharing). `e.detail = { data }`, where `data` is an array of parameters from multiple `postMessage` calls. |  |
| bindload | eventhandler |  | No | Triggered when the web page loads successfully. `e.detail = { src }` |  |
| binderror | eventhandler |  | No | Triggered when the web page fails to load. `e.detail = { src }` |  |
| bindevent | eventhandler |  | No | Receives data sent by the web page via the JSSDK. |  |
| bindtimeout | eventhandler |  | No | Only takes effect when `timeout` is configured. Triggered when the web page loading times out or the web page does not call `ft.complete`. |  |

## [\#](https://super-apps.ai/mop/document/en/develop/jssdk/web-view.html\#_2-jssdk-introduction) 2\. JSSDK Introduction

The JSSDK can be used within web-view web pages. By utilizing the JSSDK, web developers can efficiently access mobile system capabilities such as camera, image selection, voice, and location, while also directly leveraging the unique features of Mini-Programs to provide users with a superior web experience.

Since the JSSDK provides capabilities based on the web-view component within Mini-Programs, it can only be invoked when a domain link is opened using web-view within a Mini-Program. The links opened by web-view are controlled by an allowlist. Please configure the allowlist domain addresses in the Management Console under "Development Management > Domain Settings".

## [\#](https://super-apps.ai/mop/document/en/develop/jssdk/web-view.html\#_3-how-to-use-jssdk-in-web-view) 3\. How to Use JSSDK in web-view

### [\#](https://super-apps.ai/mop/document/en/develop/jssdk/web-view.html\#_3-1-importing-via-script-tag-in-the-web-page) 3.1 Importing via script Tag in the Web Page

```js
<script src="path/to/jssdk.min.js">

        Code copied

```

[JSSDK 1.4.20(opens new window)](https://public-1251849568.cos.ap-guangzhou.myqcloud.com/jssdk/finclip-jssdk-1.4.20.js)

[JSSDK 1.4.20(ESM)(opens new window)](https://public-1251849568.cos.ap-guangzhou.myqcloud.com/jssdk/finclip-jssdk-1.4.20.esm.js)

### [\#](https://super-apps.ai/mop/document/en/develop/jssdk/web-view.html\#_3-2-importing-via-npm) 3.2 Importing via npm

1. Install

```shell
npm install finclip-js-sdk

        Code copied

```

2. Usage

```js
import ft from 'finclip-js-sdk'

ft.miniProgram.navigateTo({
  url: '/pages/index/index'
})

        Code copied

```

[Previous：Canvas](https://super-apps.ai/mop/document/en/develop/component/canvas.html)[Next：Interface Specification](https://super-apps.ai/mop/document/en/develop/jssdk/jssdk-interface.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)