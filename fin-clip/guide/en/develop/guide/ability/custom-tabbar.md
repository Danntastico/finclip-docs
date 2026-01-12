<!--
Source URL: https://super-apps.ai/mop/document/en/develop/guide/ability/custom-tabbar.html
Extracted: 2026-01-12T23:21:54.528Z (January 12, 2026)
Title: Custom tabBar | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Overview](https://super-apps.ai/mop/document/en/develop/guide/feature.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Understand Mini Program](https://super-apps.ai/mop/document/en/develop/guide/ability/custom-tabbar.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Configure Mini Program](https://super-apps.ai/mop/document/en/develop/guide/ability/custom-tabbar.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Mini Program Framework](https://super-apps.ai/mop/document/en/develop/guide/ability/custom-tabbar.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
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
Import from 3rd-party (beta)](https://super-apps.ai/mop/document/en/develop/guide/ability/custom-tabbar.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
SSO Login Guide](https://super-apps.ai/mop/document/en/develop/guide/ssoLogin.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Traceability (beta)](https://super-apps.ai/mop/document/en/develop/guide/trace.html)

# [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/custom-tabbar.html\#custom-tabbar) Custom tabBar

Custom tabBar allows developers to set tabBar styles more flexibly to meet more personalized scenarios.

In custom tabBar mode:

- To ensure compatibility with lower versions and distinguish which pages are tab pages, the relevant configuration items for tabBar must be fully declared, but these fields will not affect the rendering of the custom tabBar.
- Developers need to provide a custom component to render the tabBar, and all tabBar styles are rendered by this custom component. It is recommended to use `cover-view` \+ `cover-image` components fixed at the bottom to ensure the tabBar has a relatively high hierarchy.
- Interfaces related to tabBar styles, such as `ft.setTabBarItem`, will become invalid.
- **The custom tabBar component instances under each tab page are different**. The custom tabBar component instance of the current page can be obtained through the `getTabBar` interface under the custom component.

Please note

To implement the tab selected state, you need to obtain the component instance through the `getTabBar` interface on the current page and call `setData` to update the selected state. Refer to the code example at the bottom.

## [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/custom-tabbar.html\#_1-usage-process) 1\. Usage Process

### [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/custom-tabbar.html\#_1-1-configuration-information) 1.1 Configuration Information

- Specify the `custom` field in the `tabBar` item in `app.json`, and complete the remaining `tabBar`-related configurations.
- All tab pages must declare the `usingComponents` item in their json, or it can be enabled globally in `app.json`.
Example:

```javascript
{
  "tabBar": {
    "custom": true,
    "color": "#000000",
    "selectedColor": "#000000",
    "backgroundColor": "#000000",
    "list": [{\
      "pagePath": "page/component/index",\
      "text": "Component"\
    }, {\
      "pagePath": "page/API/index",\
      "text": "API"\
    }]
  },
  "usingComponents": {}
}


        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/custom-tabbar.html\#_1-2-add-tabbar-code-files) 1.2 Add tabBar Code Files

Add the entry files in the code root directory:

```text
custom-tab-bar/index.js
custom-tab-bar/index.json
custom-tab-bar/index.fxml
custom-tab-bar/index.ftss

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/custom-tabbar.html\#_1-3-write-tabbar-code) 1.3 Write tabBar Code

Write it as a custom component. This custom component completely takes over the rendering of the tabBar. Additionally, the custom component adds a `getTabBar` interface, which can obtain the custom tabBar component instance of the current page.

[Previous：Canvas](https://super-apps.ai/mop/document/en/develop/guide/ability/canvas.html)[Next：Lazy Load](https://super-apps.ai/mop/document/en/develop/guide/ability/lazyload.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)