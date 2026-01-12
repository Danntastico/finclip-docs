<!--
Source URL: https://super-apps.ai/mop/document/en/develop/guide/start/host-environment.html
Extracted: 2026-01-12T23:19:54.719Z (January 12, 2026)
Title: Mini-Program Host Environment | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Overview](https://super-apps.ai/mop/document/en/develop/guide/feature.html) [![](https://super-apps.ai/mop/document/images/arrow_open.svg)\\
Understand Mini Program](https://super-apps.ai/mop/document/en/develop/guide/start/host-environment.html)

- [Host Environment](https://super-apps.ai/mop/document/en/develop/guide/start/host-environment.html)
- [Working Process](https://super-apps.ai/mop/document/en/develop/guide/start/working-process.html)
- [Migration Inspection](https://super-apps.ai/mop/document/en/develop/guide/start/migration-inspection.html)
- [Code Structure](https://super-apps.ai/mop/document/en/develop/guide/start/structure.html)
- [Directory Structure](https://super-apps.ai/mop/document/en/develop/guide/start/directory.html)

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Configure Mini Program](https://super-apps.ai/mop/document/en/develop/guide/start/host-environment.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Mini Program Framework](https://super-apps.ai/mop/document/en/develop/guide/start/host-environment.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Custom Component](https://super-apps.ai/mop/document/en/develop/guide/component.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Mini Program Plugin](https://super-apps.ai/mop/document/en/develop/guide/plugin.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Basic Abilities](https://super-apps.ai/mop/document/en/develop/guide/start/host-environment.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Import from 3rd-party (beta)](https://super-apps.ai/mop/document/en/develop/guide/start/host-environment.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
SSO Login Guide](https://super-apps.ai/mop/document/en/develop/guide/ssoLogin.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Traceability (beta)](https://super-apps.ai/mop/document/en/develop/guide/trace.html)

# [\#](https://super-apps.ai/mop/document/en/develop/guide/start/host-environment.html\#mini-program-host-environment) Mini-Program Host Environment

FinClip Mini-Programs can run within various types of mobile applications (such as desktop applications and mobile applications). When a Mini-Program is launched, the client provides the necessary runtime environment and capabilities to the Mini-Program. We refer to this set of environments as the **"Host Environment (Host-App)"**. Through the Host Environment, Mini-Programs can achieve many functions that native applications and H5 applications cannot.

## [\#](https://super-apps.ai/mop/document/en/develop/guide/start/host-environment.html\#_1-logic-layer-and-view-layer) 1\. Logic Layer and View Layer

The runtime environment of a Mini-Program can be divided into two parts: the **Logic Layer** and the **View Layer**.

The Logic Layer is responsible for loading the JS scripts that handle the business logic within the Mini-Program, while the View Layer is responsible for rendering the FXML templates and FTSS styles to display the final page. In a Mini-Program, the Logic Layer and the View Layer are managed by two independent threads:

- The Logic Layer uses the JS Core engine to run JS scripts, handling business logic;
- The View Layer interface is rendered using WebView (if a Mini-Program contains multiple pages, there will be multiple WebView threads).

Therefore, a Mini-Program application has only one JS Core thread and multiple WebView threads.

The overall runtime environment and communication model of the Mini-Program are shown in the following diagram:

![](https://super-apps.ai/mop/document/assets/img/framework01.fc0c8f0d.jpg)

As the Host Environment, the mobile or desktop application needs to interact with both the Logic Layer and the View Layer. These two layers cannot communicate directly with each other; communication must occur through the Host Environment.

## [\#](https://super-apps.ai/mop/document/en/develop/guide/start/host-environment.html\#_2-app-and-pages) 2\. App and Pages

When a Mini-Program is opened within the Host-App, its code package is first downloaded locally. Then, by parsing the `pages` field in `app.json`, all the page paths of the Mini-Program can be identified:

```json
{
  "pages":[\
    "pages/index/index",\
    "pages/logs/logs"\
  ]
}

        Code copied

```

The first value in the `pages` array is the first page seen when the Mini-Program is opened. For each page path, the corresponding file path can be found within the program code package.

For example, for `pages/index/index`, under this path, the corresponding FXML, FTSS, and JS files for this page exist. After the Mini-Program starts, it locates the code files for the corresponding page based on this path, then hands them over to the Logic Layer and View Layer for execution. Thus, we can see the Mini-Program's page on the Host-App.

Once the Mini-Program starts, the **onLaunch** method defined in `app.js` is triggered.

```javascript
App({
  onLaunch: function () {
    // Executed after the Mini-Program starts
  }
})

        Code copied

```

Let's look specifically at the page structure and composition of a Mini-Program, using `pages/index/index` as an example. In this file directory, `index.js`, `index.fxml`, and `index.ftss` exist.

```javascript
// Contents of index.js
// Get the application instance
const app = getApp()

Page({
  data: {
    motto: '',
  },
  // Event handler function
  bindViewTap() {
    ft.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    this.setData({
      motto: 'hello world'
    })
  }
})

        Code copied

```

In the `index.js` file, `Page({...})` constructs the index page instance. `data` represents the rendering data needed for this page. When the page is generated, the Mini-Program engine combines the `data` with `index.fxml` and renders it for display to the user.

The `onLoad()` method is a lifecycle method of the page. This method is called back when the page is created, allowing developers to define their own logic within it.

> For more information related to code structure, please refer to [FinClip Development Documentation - Code Structure](https://super-apps.ai/mop/document/develop/guide/start/structure.html)

## [\#](https://super-apps.ai/mop/document/en/develop/guide/start/host-environment.html\#_3-components) 3\. Components

Components are provided by the Mini-Program for developers to create page UI and customize FXML. Developers can flexibly combine various components to build their own page UI.

**What is a component:**

- Using components in FXML is the basic building block of the View Layer.
- A component typically includes a start tag and an end tag. Attributes are used to modify the component, and content is placed between the two tags.

> Note: All components and attributes are lowercase and connected by hyphens.

Just like HTML tags, in a Mini-Program, developers write the corresponding component tags in FXML to display them. For example:

```xml
// Contents of index.fxml
<view class="intro">Welcome to FinClip</view>

        Code copied

```

This page displays a line of text: `Welcome to FinClip`. Developers can control the style of this component using **style** and **class** to specify width, height, color, etc.

> For more information related to components, please refer to [FinClip Development Documentation - Component Overview](https://super-apps.ai/mop/document/develop/component/overview.html) ​

## [\#](https://super-apps.ai/mop/document/en/develop/guide/start/host-environment.html\#_4-api) 4\. API

To make it more convenient for developers to utilize the capabilities provided by the Mini-Program, FinClip offers various APIs for developers to use. Developers can use these APIs to modify the Mini-Program interface, obtain the device's current location, play video, audio, etc.

APIs are divided into synchronous and asynchronous types. Synchronous APIs return results directly, while asynchronous APIs return results through callbacks. Developers need to handle the logic according to the API's callback method and pass the correct parameters to handle the business.

For example, `setStorageSync` is a synchronous API, and `setStorage` is an asynchronous API:

```javascript
ft.setStorage({
  key: 'key',
  data: 'value'
})

try {
  ft.setStorageSync('key', 'value')
} catch (e) { }

        Code copied

```

> For more information related to APIs, please refer to [FinClip Development Documentation - API Overview](https://super-apps.ai/mop/document/develop/api/overview.html) ​

[Previous：Overview](https://super-apps.ai/mop/document/en/develop/guide/feature.html)[Next：Working Process](https://super-apps.ai/mop/document/en/develop/guide/start/working-process.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)