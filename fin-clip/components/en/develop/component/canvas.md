<!--
Source URL: https://super-apps.ai/mop/document/en/develop/component/canvas.html
Extracted: 2026-01-12T23:14:44.224Z (January 12, 2026)
Title: Canvas Component | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

# [\#](https://super-apps.ai/mop/document/en/develop/component/canvas.html\#canvas-component) Canvas Component

## [\#](https://super-apps.ai/mop/document/en/develop/component/canvas.html\#canvas-component-description) Canvas Component Description

| Component | Description | Minimum Version |
| --- | --- | --- |
| canvas | Canvas | 1.0.0 |

Starting from Base Library 2.12.1 and iOS/Android 2.35.1, a new set of Canvas 2D interfaces is supported, enabling native rendering (requires configuring the native attribute). Related API: [Get Canvas Instance](https://super-apps.ai/mop/document/develop/api/canvas.html#canvas).

## [\#](https://super-apps.ai/mop/document/en/develop/component/canvas.html\#canvas) canvas

| Attribute | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| id | string |  | No | Unique identifier for the canvas component |  |
| type | string | 2d | No | Only supports 2d, does not support webgl |  |
| canvas-id | string |  | No | Unique identifier for the canvas component. If type is specified, this attribute does not need to be specified |  |
| disable-scroll | string |  | No | Prevents screen scrolling and pull-down refresh when moving within the canvas and gesture events are bound |  |
| native | boolean | false | No | Renders the canvas using native rendering mode |  |
| bindtouchstart | eventhandle |  | No | Finger touch action starts |  |
| bindtouchmove | eventhandle |  | No | Finger moves after touch |  |
| bindtouchend | eventhandle |  | No | Finger touch action ends |  |
| bindtouchcancel | eventhandle |  | No | Finger touch action is interrupted, such as by an incoming call reminder or pop-up |  |
| bindlongtap | eventhandle |  | No | Triggered after a long press of 500ms; moving after triggering the long press event will not cause screen scrolling |  |
| binderror | eventhandle |  | No | Triggers an error event when an error occurs, detail = {errMsg} |  |
| hidpi | boolean |  | No | Enables hidpi rendering; hidpi addresses the issue of insufficient image clarity when using 1x canvas logic in some canvas drawing operations. If the business logic already includes settings for canvas at dpr scale, hidpi is not needed |  |
| hidpiDisableScale | boolean |  | No | Used in conjunction with hidpi. Some canvas drawing libraries have different scale logic. When using hidpi, conflicts may arise with the library's own scale logic. Therefore, hidpiDisableScale is used to ignore the scale logic when hidpi is configured |  |