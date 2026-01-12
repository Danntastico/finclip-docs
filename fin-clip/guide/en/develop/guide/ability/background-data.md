<!--
Source URL: https://super-apps.ai/mop/document/en/develop/guide/ability/background-data.html
Extracted: 2026-01-12T23:22:21.116Z (January 12, 2026)
Title: Data Prefetching and Periodic Updates | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Overview](https://super-apps.ai/mop/document/en/develop/guide/feature.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Understand Mini Program](https://super-apps.ai/mop/document/en/develop/guide/ability/background-data.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Configure Mini Program](https://super-apps.ai/mop/document/en/develop/guide/ability/background-data.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Mini Program Framework](https://super-apps.ai/mop/document/en/develop/guide/ability/background-data.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Custom Component](https://super-apps.ai/mop/document/en/develop/guide/component.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Mini Program Plugin](https://super-apps.ai/mop/document/en/develop/guide/plugin.html) [![](https://super-apps.ai/mop/document/images/arrow_open.svg)\\
Basic Abilities](https://super-apps.ai/mop/document/en/develop/guide/ability/storage.html)

- [Storage](https://super-apps.ai/mop/document/en/develop/guide/ability/storage.html)
- [File System](https://super-apps.ai/mop/document/en/develop/guide/ability/file-system.html)
- [Subpackages](https://super-apps.ai/mop/document/en/develop/guide/ability/subpackages.html)
- [Canvas](https://super-apps.ai/mop/document/en/develop/guide/ability/canvas.html)
- [Custom TabBar](https://super-apps.ai/mop/document/en/develop/guide/ability/custom-tabbar.html)
- [Lazy Load](https://super-apps.ai/mop/document/en/develop/guide/ability/lazyload.html)
- [Worker (Beta)](https://super-apps.ai/mop/document/en/develop/guide/ability/worker.html)
- [DarkMode Guide](https://super-apps.ai/mop/document/en/develop/guide/ability/dark-mode.html)
- [Background Data Fetch](https://super-apps.ai/mop/document/en/develop/guide/ability/background-data.html)

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Import from 3rd-party (beta)](https://super-apps.ai/mop/document/en/develop/guide/ability/background-data.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
SSO Login Guide](https://super-apps.ai/mop/document/en/develop/guide/ssoLogin.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Traceability (beta)](https://super-apps.ai/mop/document/en/develop/guide/trace.html)

# [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/background-data.html\#data-prefetching-and-periodic-updates) Data Prefetching and Periodic Updates

> Supported since Base Library 3.2.1, SDK 2.43.1, and FinClip Studio 2.0.18

Prefetching allows the SDK to proactively fetch business data from the developer's third-party server during the cold start of a Mini-Program. When the code package finishes loading, pages can be rendered faster, reducing user wait time, thereby improving the Mini-Program's launch speed and enhancing the user experience.

> For the product operation instructions of this feature, please click [here(opens new window)](https://super-apps.ai/mop/document/introduce/functionDescription/miniProgram-management.html#_2-8-%E6%95%B0%E6%8D%AE%E5%91%A8%E6%9C%9F%E6%80%A7%E6%9B%B4%E6%96%B0%E4%B8%8E%E6%95%B0%E6%8D%AE%E9%A2%84%E6%8B%89%E5%8F%96)

## [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/background-data.html\#usage-process) Usage Process

### [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/background-data.html\#_1-configure-request-url-in-the-management-console) 1\. Configure Request URL in the Management Console

Configure in the Management Console. The entry point is 【My Mini-Programs】-【Details】-【Others】. Enable Periodic Data Updates or Data Prefetching and fill in the relevant URL.

### [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/background-data.html\#_2-set-token-in-the-mini-program) 2\. Set Token in the Mini-Program

During the first launch of the Mini-Program, call `wx.setBackgroundFetchToken()` to set a token string. This token will be included when the SDK subsequently makes requests to the developer's server, used for the server to verify the request's validity.

```js
App({
  onLaunch() {
    ft.setBackgroundFetchToken({
      token: 'some token'
    })
  }
})

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/background-data.html\#_3-launch-the-mini-program) 3\. Launch the Mini-Program

When a URL for Periodic Data Updates or Data Prefetching is configured, opening the Mini-Program will cause the SDK to initiate an HTTP GET request to the configured URL. The request includes the following query parameters. Once the data is fetched, the entire HTTP body is cached locally.

| Property | Type | Required | Description |
| --- | --- | --- | --- |
| appId | string | Yes | Mini-Program identifier |
| token | string | No | Token set by `setBackgroundFetchToken` |
| timeStamp | number | Yes | Timestamp when the client initiated the request, in ms |
| path | string | No | Mini-Program page path |
| query | string | No | Query parameters passed to the page |
| scene | number | No | Scene value when entering the Mini-Program |
| customMiniprogramVersion | number | No | Mini-Program version number; fixed as 'devtool' in the developer tools |

### [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/background-data.html\#_4-read-data-in-the-mini-program) 4\. Read Data in the Mini-Program

```js
App({
  onLaunch() {
    ft.onBackgroundFetchData(function (res) {
      console.log(res.fetchType)
      console.log(res.fetchedData)
      console.log(res.timeStamp)
      console.log(res.path)
      console.log(res.query)
      console.log(res.scene)
    })
    ft.getBackgroundFetchData({
      fetchType: 'pre',
      success(res) {
        console.log(res.fetchedData) // Cached data
        console.log(res.timeStamp) // Timestamp when the client obtained the cached data
        console.log(res.path) // Page path
        console.log(res.query) // Query parameters
        console.log(res.scene) // Scene value
      }
    })
  }
})


        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/background-data.html\#debugging-methods) Debugging Methods

FinClip Studio must be upgraded to the supported version 2.0.18.

1. In the Mini-Program details, there will be a checkbox for 【Data Prefetching】. Checking it and recompiling the Mini-Program will trigger the 【Data Prefetching】 request.
2. In the top help bar, there will be an option for 【Fetch Periodic Data】. Selecting it will trigger the 【Fetch Periodic Data】 request.

![](https://super-apps.ai/mop/document/assets/img/backdround-data.592fadf9.png)

Note

If the request URL is not configured in the backend, triggering the request will log a warning about the unconfigured URL in the log panel, which developers can use for debugging and identification.

[Previous：DarkMode Guide](https://super-apps.ai/mop/document/en/develop/guide/ability/dark-mode.html)[Next：Alipay Mini Program](https://super-apps.ai/mop/document/en/develop/guide/compatible/ali.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)