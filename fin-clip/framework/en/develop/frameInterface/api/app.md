<!--
Source URL: https://super-apps.ai/mop/document/en/develop/frameInterface/api/app.html
Extracted: 2026-01-12T23:17:51.623Z (January 12, 2026)
Title: APP | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

# [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/api/app.html\#app) APP

Registers a Mini-Program. Accepts an Object parameter that specifies the Mini-Program's lifecycle callbacks, etc.

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| onLaunch | function |  | No | Lifecycle callback — triggered when the Mini-Program initializes. |
| onShow | function |  | No | Lifecycle callback — triggered when the Mini-Program starts or switches to the foreground. |
| onHide | function |  | No | Lifecycle callback — triggered when the Mini-Program switches to the background. |
| onError | function |  | No | Error listener function. |
| onPageNotFound | function |  | No | Page not found listener function. |
| onUnhandledRejection | function |  | No | Unhandled Promise rejection event listener function. |
| onThemeChange | function |  | No | Listens for system theme changes. |
| Others | any |  | No | Developers can add any functions or data variables to the Object parameter, accessible via `this`. |