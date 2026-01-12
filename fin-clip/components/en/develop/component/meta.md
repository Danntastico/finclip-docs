<!--
Source URL: https://super-apps.ai/mop/document/en/develop/component/meta.html
Extracted: 2026-01-12T23:14:48.345Z (January 12, 2026)
Title: Page Attribute Node | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
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
Canvas](https://super-apps.ai/mop/document/en/develop/component/canvas.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Open Abilities](https://super-apps.ai/mop/document/en/develop/component/meta.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Native Component Intro](https://super-apps.ai/mop/document/en/develop/component/original.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Navigation Bar](https://super-apps.ai/mop/document/en/develop/component/navigation-bar.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Page Meta](https://super-apps.ai/mop/document/en/develop/component/meta.html)

# [\#](https://super-apps.ai/mop/document/en/develop/component/meta.html\#page-attribute-node) Page Attribute Node

## [\#](https://super-apps.ai/mop/document/en/develop/component/meta.html\#page-meta) page-meta

| Attribute | Type | Default | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| background-text-style | string |  | No | Pull-down background font and loading image style, supports only `dark` and `light` | 3.0.7 |
| background-color | string |  | No | Window background color, must be a hexadecimal color value | 2.5.1 |
| background-color-top | string |  | No | Top window background color, must be a hexadecimal color value, supported only on iOS | 2.5.1 |
| background-color-bottom | string |  | No | Bottom window background color, must be a hexadecimal color value, supported only on iOS | 2.5.1 |
| root-background-color | string |  | No | Page content background color, used for blank areas within the page and temporary idle areas during page resize animations | 3.0.1 |
| scroll-top | string | "" | No | Scroll position, can use `px` or `rpx` as units. When set, the page will scroll to the corresponding position | 3.0.1 |
| scroll-duration | number | 300 | No | Scroll animation duration (in milliseconds) | 3.0.4 |
| page-style | string | "" | No | Page root node style. The page root node is the ancestor node of all page nodes, equivalent to the `body` node in HTML | 2.5.1 |
| page-font-size | string | "" | No | Font size of the page. Can be set to `system` to use the current user's App font size setting | 2.11.4 |
| root-font-size | string | "" | No | Root font size of the page. All `rem` units in the page will use this font size as the reference value (1rem equals this font size). Starting from Mini-Program version 2.11.0, can also be set to `system` | 2.5.1 |
| page-orientation | string | "" | No | Page orientation, can be `auto`, `portrait`, or `landscape` | 3.0.1 |
| bindresize | eventhandle |  | No | Triggered when the page size changes (resize event), `event.detail = { size: { windowWidth, windowHeight } }` | 2.11.4 |
| bindscroll | eventhandle |  | No | Triggered when the page scrolls (scroll event), `event.detail = { scrollTop }` | 2.5.1 |
| bindscrolldone | eventhandle |  | No | If the page scrolls by changing the `scroll-top` attribute, the `scrolldone` event will be triggered after the page scrolling ends | 2.11.4 |

[Previous：Navigation Bar](https://super-apps.ai/mop/document/en/develop/component/navigation-bar.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)