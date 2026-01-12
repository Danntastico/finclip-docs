<!--
Source URL: https://super-apps.ai/mop/document/en/develop/component/navigation.html
Extracted: 2026-01-12T23:14:02.354Z (January 12, 2026)
Title: Navigation Components | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
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
Open Abilities](https://super-apps.ai/mop/document/en/develop/component/navigation.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Native Component Intro](https://super-apps.ai/mop/document/en/develop/component/original.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Navigation Bar](https://super-apps.ai/mop/document/en/develop/component/navigation-bar.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Page Meta](https://super-apps.ai/mop/document/en/develop/component/meta.html)

# [\#](https://super-apps.ai/mop/document/en/develop/component/navigation.html\#navigation-components) Navigation Components

## [\#](https://super-apps.ai/mop/document/en/develop/component/navigation.html\#navigation-components-description) Navigation Components Description

| Component | Description | Minimum Version |
| --- | --- | --- |
| navigator | Page Link | 1.0.0 |
| functional-page-navigator | Used to navigate to plugin function pages | Not Supported |

## [\#](https://super-apps.ai/mop/document/en/develop/component/navigation.html\#navigator) navigator

| Property | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| url | string |  | No | Jump link within the current Mini-Program |  |
| open-type | navigate |  | No | Navigation method |  |
| hover-class | string | navigator-hover | No | Specifies the style class when clicked. When hover-class="none", there is no click state effect |  |
| hover-stop-propagation | boolean | false | No | Specifies whether to prevent the click state from appearing on ancestor nodes of this node |  |
| hover-start-time | number | 50 | No | Duration after pressing before the click state appears, in milliseconds |  |
| hover-stay-time | number | 600 | No | Duration the click state remains after releasing the finger, in milliseconds |  |
| delta | number | 1 | No | Effective when open-type is 'navigateBack', indicates the number of levels to go back | 3.0.1 |
| target | string |  | No | On which target the jump occurs, defaults to the current Mini-Program | 3.0.1 |
| app-id | string |  | No | Effective when `target="miniProgram"` and `open-type="navigate"`, the appId of the Mini-Program to open | 3.0.1 |
| path | string |  | No | Effective when `target="miniProgram"` and `open-type="navigate"`, the path of the page to open. If empty, opens the homepage | 3.0.1 |
| extraData | object |  | No | Effective when `target="miniProgram"` and `open-type="navigate/navigateBack"`, data to be passed to the target Mini-Program. The target Mini-Program can obtain this data in `App.onLaunch()` or `App.onShow()`. | 3.0.1 |

### [\#](https://super-apps.ai/mop/document/en/develop/component/navigation.html\#valid-values-for-open-type) Valid Values for open-type

| Value | Description | Minimum Version |
| --- | --- | --- |
| navigate | Corresponds to the functionality of navigateTo or navigateToMiniProgram |  |
| redirect | redirectTo |  |
| switchTab | switchTab |  |
| reLaunch | reLaunch |  |
| navigateBack | navigateBack |  |
| exit | Exit the Mini-Program, effective when target="miniProgram" |  |

[Previous：Form Components](https://super-apps.ai/mop/document/en/develop/component/form.html)[Next：Media Components](https://super-apps.ai/mop/document/en/develop/component/media.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)