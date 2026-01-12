<!--
Source URL: https://super-apps.ai/mop/document/en/develop/api/navigate.html
Extracted: 2026-01-12T23:11:48.109Z (January 12, 2026)
Title: Navigation | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
API Overview](https://super-apps.ai/mop/document/en/develop/api/overview.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Basic](https://super-apps.ai/mop/document/en/develop/api/basic.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Routing](https://super-apps.ai/mop/document/en/develop/api/route.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Navigation](https://super-apps.ai/mop/document/en/develop/api/navigate.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Forwarding](https://super-apps.ai/mop/document/en/develop/api/forward.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Interface](https://super-apps.ai/mop/document/en/develop/api/interface.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Network](https://super-apps.ai/mop/document/en/develop/api/network.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Data Cache](https://super-apps.ai/mop/document/en/develop/api/storage.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Media](https://super-apps.ai/mop/document/en/develop/api/media.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Map](https://super-apps.ai/mop/document/en/develop/api/map.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Location](https://super-apps.ai/mop/document/en/develop/api/location.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
File](https://super-apps.ai/mop/document/en/develop/api/file.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Device](https://super-apps.ai/mop/document/en/develop/api/device.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Canvas](https://super-apps.ai/mop/document/en/develop/api/canvas.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Worker (Beta)](https://super-apps.ai/mop/document/en/develop/api/worker.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
FXML](https://super-apps.ai/mop/document/en/develop/api/fxml.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Custom Menu](https://super-apps.ai/mop/document/en/develop/api/custom-menu.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Other](https://super-apps.ai/mop/document/en/develop/api/other.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Cloud Development](https://super-apps.ai/mop/document/en/develop/api/cloud.html)

# [\#](https://super-apps.ai/mop/document/en/develop/api/navigate.html\#navigation) Navigation

## [\#](https://super-apps.ai/mop/document/en/develop/api/navigate.html\#navigatetominiprogram) navigateToMiniProgram

> Supported since Base Library 1.3.9, iOS SDK 2.1.23, Android SDK 2.1.38

**navigateToMiniProgram(Object object)**

Opens another Mini-Program.

**Parameters**

**Object object**

| Property | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| appId | string |  | Yes | The appId of the Mini-Program to open |
| path | string |  | No | The page path to open; opens the homepage if left empty. The part after `?` in the path becomes the query, which can be obtained in the callback functions `App.onLaunch`, `App.onShow`, and `Page.onLoad` for Mini-Programs, or `ft.onShow` callback function and `ft.getLaunchOptionsSync` for Mini-Games. For Mini-Games, only the query part can be passed to achieve parameter passing, e.g., pass `"?foo=bar"`. |
| extraData | Object |  | No | Data to be passed to the target Mini-Program, which can be obtained in `App.onLaunch` and `App.onShow` of the target Mini-Program. If navigating to a Mini-Game, this data can be obtained in `ft.onShow` and `ft.getLaunchOptionsSync`. |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function for API call completion (executes regardless of success or failure) |

**Example**

```javascript
ft.navigateToMiniProgram({
  appId: '',
 path: 'page/index/index?id=123',
  extraData: {
    foo: 'bar'
  },
  success(res) {
    // Opened successfully
  }
})

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/api/navigate.html\#navigatetowechatminiprogram) navigateToWechatMiniProgram

> Supported since Base Library 3.0.42, iOS SDK 2.40.7, Android SDK 2.40.7

**navigateToWechatMiniProgram(Object object)**

Navigates to open a WeChat Mini-Program.

**Parameters**

**Object object**

| Property | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| originId | string |  | Yes | Original ID |
| path | string |  | No | The page path to open; opens the homepage if left empty. The part after `?` in the path becomes the query, which can be obtained in the callback functions `App.onLaunch`, `App.onShow`, and `Page.onLoad` for Mini-Programs, or `ft.onShow` callback function and `ft.getLaunchOptionsSync` for Mini-Games. For Mini-Games, only the query part can be passed to achieve parameter passing, e.g., pass `"?foo=bar"`. |
| envVersion | String | release | No | The version of the Mini-Program to open. This parameter is only effective when the current Mini-Program is a development version or trial version. If the current Mini-Program is a release version, the opened Mini-Program will definitely be a release version. |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function for API call completion (executes regardless of success or failure) |

**Valid values for object.envVersion**

| Value | Description | Minimum Version |
| --- | --- | --- |
| develop | Development Version |  |
| trial | Trial Version |  |
| release | Release Version |  |

**Example**

```javascript
ft.navigateToWechatMiniProgram({
  originId: '',
  path: 'page/index/index?id=123'
})

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/api/navigate.html\#navigatebackminiprogram) navigateBackMiniProgram

> Supported since Base Library 1.3.9, iOS SDK 2.1.23, Android SDK 2.1.38

**navigateBackMiniProgram(Object object)**

**Parameters**

**Object object**

| Property | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| extraData | Object |  | No | Data to be returned to the previous Mini-Program, which can be obtained in `App.onShow` of the previous Mini-Program. |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function for API call completion (executes regardless of success or failure) |

**Example Code**

```javascript
ft.navigateBackMiniProgram({
  extraData: {
    foo: 'bar'
  },
  success(res) {
  // Returned successfully
  }
})

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/api/navigate.html\#exitminiprogram) exitMiniProgram

**ft.exitMiniProgram(Object object)**

Exits the current Mini-Program.

**Parameters**

**Object object**

| Property | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function for API call completion (executes regardless of success or failure) |

## [\#](https://super-apps.ai/mop/document/en/develop/api/navigate.html\#restartminiprogram) restartMiniProgram

**ft.restartMiniProgram(Object object)**

Restarts the Mini-Program.

**Parameters**

**Object object**

| Property | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| path | string |  | Yes | The page path to open; query parameters can be added. |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function for API call completion (executes regardless of success or failure) |

[Previous：Routing](https://super-apps.ai/mop/document/en/develop/api/route.html)[Next：Forwarding](https://super-apps.ai/mop/document/en/develop/api/forward.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)