<!--
Source URL: https://super-apps.ai/mop/document/en/develop/frameInterface/config/app.html
Extracted: 2026-01-12T23:17:11.776Z (January 12, 2026)
Title: Global Configuration | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

[![](https://super-apps.ai/mop/document/images/arrow_open.svg)\\
Mini Program Configuration](https://super-apps.ai/mop/document/en/develop/frameInterface/config/project.html)

- [Project Configuration](https://super-apps.ai/mop/document/en/develop/frameInterface/config/project.html)
- [Global Configuration](https://super-apps.ai/mop/document/en/develop/frameInterface/config/app.html)
- [Page Configuration](https://super-apps.ai/mop/document/en/develop/frameInterface/config/page.html)
- [Sitemap Configuration](https://super-apps.ai/mop/document/en/develop/frameInterface/config/sitemap.html)

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Framework API](https://super-apps.ai/mop/document/en/develop/frameInterface/config/app.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
FXML Syntax](https://super-apps.ai/mop/document/en/develop/frameInterface/config/app.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
FTS Syntax](https://super-apps.ai/mop/document/en/develop/frameInterface/config/app.html)

# [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/config/app.html\#global-configuration) Global Configuration

The `app.json` file in the Mini-Program root directory is used for global configuration of the Mini-Program. The file content is a JSON object.

Extended Functionality

You can create an `app.ext.json` file. This file will be merged with `app.json`, prioritizing configurations from `app.ext.json` (same applies for pages and components).

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/config/app.html\#_1-configuration-items) 1\. Configuration Items

| Property | Type | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- |
| entryPagePath | string | No | Default startup homepage for the Mini-Program |  |
| pages | string\[\] | Yes | List of page paths |  |
| window | Object | No | Global default window behavior |  |
| tabBar | Object | No | Bottom tab bar behavior |  |
| debug | boolean | No | `Whether to enable debug mode, deprecated` |  |
| subpackages | Object\[\] | No | Subpackage structure configuration | 2.10.1 |
| plugins | Object | No | Plugins used | 2.11.1 |
| preloadRule | Object | No | Subpackage preload rules | 2.11.1 |
| resizable | boolean | No | Whether PC Mini-Program supports users arbitrarily resizing the window (including maximizing the window); Whether iPad Mini-Program supports screen rotation. Default is off. | 2.3.0 |
| usingComponents | Object | No | Global custom component configuration |  |
| style | string | No | Specify using the upgraded WeUI styles | 2.11.1 |
| useExtendedLib | Object | No | Specify the extended libraries to be referenced | 2.12.2 |
| darkmode | boolean | No | Mini-Program supports DarkMode | 2.11.8 |
| themeLocation | string | No | Specifies the location of theme.json, required when darkmode is true | 2.11.8 |
| networkTimeout | Object | No | Network timeout durations |  |
| requiredBackgroundModes | Object | No | Capabilities required for background use, such as "Music Playback" |  |
| referer | string | No | After configuration, some components or APIs within the Mini-Program will carry this referer value when initiating HTTP resource requests. The concatenation rule is {referer}/{appid}/{version}/view.html |  |
| permission | Object | No | Mini-Program API permission related settings. Refer to the description below for configuration details. |  |
| lazyCodeLoading | string | No | Only supports the value `requiredComponents`, indicating enabling the "Lazy Code Loading" feature for the Mini-Program. |  |

Please Note

The following configuration items are not currently supported.

| Name | Function Description |
| --- | --- |
| entranceDeclare | Open Mini-Program via WeChat messages |
| functionalPages | Whether to enable plugin functional pages, default is off |
| sitemapLocation | Specifies the location of sitemap.json |
| workers | Directory for placing Worker code |
| singlePage | Single-page mode related configuration |
| supportedMaterials | Chat material Mini-Program opening related configuration |
| serviceProviderTicket | Customized service provider ticket |
| embeddedAppIdList | Half-screen Mini-Program appId list |
| halfPage | Video Channel live stream half-screen scenario settings |

### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/config/app.html\#entrypagepath) entryPagePath

Specifies the default startup path (homepage) for the Mini-Program. If left blank, it defaults to the first item in the pages list. Does not support path parameters.

### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/config/app.html\#pages) pages

Used to specify which pages constitute the Mini-Program. Each item corresponds to the path (including filename) information of a page. The file suffix should not be written; the framework will automatically search for the corresponding `.json`, `.js`, `.fxml`, and `.ftss` files in the location for processing.

When `entryPagePath` is not specified, the first item in the array represents the initial page (homepage) of the Mini-Program.

Adding or removing pages in the Mini-Program requires modifying the pages array.

For example, with a development directory structure of:

```text
├── app.js
├── app.json
├── app.ftss
├── pages
│   │── index
│   │   ├── index.fxml
│   │   ├── index.js
│   │   ├── index.json
│   │   └── index.ftss
│   └── logs
│       ├── logs.fxml
│       └── logs.js
└── utils

        Code copied

```

You need to write the following in `app.json`:

```json
{
  "pages": ["pages/index/index", "pages/logs/logs"]
}


        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/config/app.html\#window) window

Used to set the status bar, navigation bar, title, and window background color for the Mini-Program.

| Property | Type | Default Value | Description | Minimum Version |
| --- | --- | --- | --- | --- |
| homeButton | boolean | false | Displays the home button in the navigation bar on pages that are not the homepage, not the bottom of the page stack, or not within a tabbar page. | Supported from iOS and Android 2.41.13 |
| navigationBarBackgroundColor | HexColor | #000000 | Navigation bar background color, e.g., #000000 |  |
| navigationBarTextStyle | string | white | Navigation bar title color, only supports black / white |  |
| navigationBarTitleText | string |  | Navigation bar title text content |  |
| navigationStyle | string | default | Navigation bar style, only supports the following values: 1. default (default style), 2. custom (custom navigation bar, only retains the top-right capsule button, invalid for web-view component), 3.customV2 (custom navigation bar, only retains the top-right capsule button), 4.hide (hides navigation bar and top-right capsule button) |  |
| navigationBarHideCloseButton | Boolean | false | Hide the capsule close button |  |
| navigationBarHideMoreButton | Boolean | false | Hide the capsule menu button |  |
| backgroundColor | HexColor | #ffffff | Window background color |  |
| backgroundColorContent | HexColor |  | Page container background color | Supported from iOS and Android 2.46.13, HarmonyOS 1.1.5 |
| backgroundTextStyle | string | dark | Pull-down loading style, only supports dark / light |  |
| backgroundColorTop | string | #ffffff | Top window background color, only supported on iOS |  |
| backgroundColorBottom | string | #ffffff | Bottom window background color, only supported on iOS |  |
| enablePullDownRefresh | boolean | false | Whether to enable global pull-down refresh. See Page.onPullDownRefresh for details. |  |
| pageOrientation | string | portrait | Screen rotation settings, supports auto / portrait / landscape |  |
| initialRenderingCache | string |  | Page initial rendering cache configuration, supports static / dynamic |  |
| onReachBottomDistance | The distance from the bottom of the page when the page's reach bottom event is triggered, in px. See Page.onReachBottom for details. | 2.12.8 |  |  |
| disableBackForwardGesture | boolean | false | Used to control whether the swipe-back gesture for Mini-Program pages is enabled. | Supported from iOS and Android 2.45.3; HarmonyOS 1.1.2; |
| handleWebviewPreload | string | No | Controls the timing for preloading the next page. Supports static / manual, default value static. | Supported from SDK 2.43.11 |

Please Note

The following configuration items are not currently supported.

| Name | Function Description |
| --- | --- |
| restartStrategy | Restart strategy configuration |
| visualEffectInBackground | When switching to the system background, hide page content to protect user privacy. Supports hidden / none |

### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/config/app.html\#tabbar) tabBar

`tabBar` is used to configure the style of the bottom or top tab navigation bar in the Mini-Program, as well as the pages to navigate to.

Detailed configuration items are as follows:

| Property | Type | Required | Default Value | Description |
| --- | --- | --- | --- | --- |
| color | HexColor | Yes |  | Default text color on tabs |
| selectedColor | HexColor | Yes |  | Text color on tabs when selected |
| backgroundColor | HexColor | Yes |  | Background color of the tab bar |
| borderStyle | String | No | black | Color of the top border of the tabbar, only supports black, white |
| list | Array | Yes |  | List of tabs, see list property description for details, supports 2-5 tab options |
| position | String | No | bottom | Position of the tabBar, only supports two values: bottom, top |

The `list` is an array type and can only be configured with a minimum of 2 and a maximum of 5 tabs.

Tabs are sorted according to the array order. Each item is an independent object with the following configurable values:

| Property | Type | Required | Description |
| --- | --- | --- | --- |
| pagePath | String | Yes | Page path, must be defined first in the pages array |
| text | String | Yes | Button text on the tab |
| iconPath | String | No | Image path, icon size limit is 40kb, recommended size is 81px \* 81px, network images are not supported. When position is top, icon is not displayed. |
| selectedIconPath | String | No | Image path when selected, requirements same as iconPath |

### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/config/app.html\#networktimeout) networkTimeout

Timeout durations for various network requests, all in milliseconds.

| Property | Type | Required | Default Value | Description |
| --- | --- | --- | --- | --- |
| request | number | No | 60000 | Timeout for wx.request, unit: milliseconds. |
| connectSocket | number | No | 60000 | Timeout for wx.connectSocket, unit: milliseconds. |
| uploadFile | number | No | 60000 | Timeout for wx.uploadFile, unit: milliseconds. |
| downloadFile | number | No | 60000 | Timeout for wx.downloadFile, unit: milliseconds. |

### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/config/app.html\#debug) debug

Boolean type. When configured as true, a vconsole info viewing button is added to the Mini-Program after scanning the QR code, facilitating developers to view logs (deprecated).

Can be enabled via:

1. Calling the Mini-Program API (`ft.setEnableDebug`) to enable Debug mode.

2. For non-production versions (e.g., Trial, Audit, Development, Preview versions), Debug mode can be enabled via \[Open Debugging\] in the More menu.


### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/config/app.html\#subpackages) subpackages

Declares the project's subpackage structure when分包加载 is enabled.

### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/config/app.html\#plugins) plugins

Declares the plugins required by the Mini-Program.

### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/config/app.html\#preloadrule) preloadRule

Declares the rules for分包预下载.

### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/config/app.html\#resizable) resizable

Mini-Programs running on iPad can be set to support screen rotation.

For Mini-Programs running on PC, users can drag the window to any proportion, or maximize the window via the Mini-Program menu.

### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/config/app.html\#usingcomponents) usingComponents

Custom components declared in `app.json` are considered global custom components and can be used directly within pages or custom components of the Mini-Program without redeclaration.

Note: Globally declared custom components are considered dependencies of all pages, are initialized when all pages start, and occupy主包 size. Custom components referenced only by individual pages or subpackages should preferably be declared in the page configuration.

### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/config/app.html\#style) style

Starting from WeChat client version 7.0, the UI underwent a major redesign. Mini-Programs also upgraded the styles of their basic components. Configuring `"style": "v2"` in app.json indicates enabling component styles compatible with the new WeChat version.

Components affected by this change include:

- button
- icon
- radio
- checkbox
- switch
- slider

### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/config/app.html\#useextendedlib) useExtendedLib

Specifies the extended libraries to be referenced. Currently supports the following items:

After specification, it is equivalent to importing the latest version npm packages related to the corresponding extended library, and it also does not occupy the Mini-Program's package size. Usage is as follows:

```text
{
  "useExtendedLib": {
    "kbone": true,
    "weui": true
  }
}

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/config/app.html\#darkmode) darkmode

SDK version 2.35.1 officially supports DarkMode. Configuring `"darkmode": true` indicates that the current Mini-Program can adapt to DarkMode. All basic components will display different default styles based on the system theme, and the navigation bar and tab bar will also automatically switch based on the developer's configuration.

After configuration, complete the adaptation work beyond the basic styles yourself.

Currently, Android implementation is via color inversion. Please conduct thorough testing before use.

Specific performance: In dark mode, the styles of some basic library components differ from iOS, WXSS cannot use prefers-color-scheme, other functions are normal.

### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/config/app.html\#themelocation) themeLocation

Custom path for `theme.json`. When `"darkmode":true` is configured, this configuration file is required.

### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/config/app.html\#referer) referer

If referer is configured

Components video, image (Android only) and APIs request, download & uploadFile, loadFontFace, previewImage, previewMedia, getImageInfo will carry the configured referer when requesting http resources.

### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/config/app.html\#permission) permission

Mini-Program API permission related settings. The field type is Object, with the structure:

| Property | Type | Required | Default Value | Description |
| --- | --- | --- | --- | --- |
| scope.userLocation | Object | No |  | Location-related permission declaration |

Supported scopes include:

- scope.userLocation
- scope.userLocationBackground
- scope.record
- scope.camera
- scope.bluetooth
- scope.writePhotosAlbum
- scope.addPhoneContact
- scope.addPhoneCalendar
- scope.userInfo
- scope.getPhoneNumber

**Object Structure**

| Property | Type | Required | Default Value | Description |
| --- | --- | --- | --- | --- |
| desc | string | Yes |  | Description of the API's purpose displayed when the Mini-Program requests permission |

```json
{
  "permission": {
    "scope.userLocation": {
      "desc": "Location information will be used to display the effects of the Mini-Program's location interface"
    }
  }
}

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/config/app.html\#_2-configuration-example) 2\. Configuration Example

```json
{
  "pages": ["pages/index/index", "pages/logs/index"],
  "window": {
    "navigationBarTitleText": "Demo"
  },
  "tabBar": {
    "list": [\
      {\
        "pagePath": "pages/index/index",\
        "text": "Home"\
      },\
      {\
        "pagePath": "pages/logs/logs",\
        "text": "Logs"\
      }\
    ]
  },
  "debug": true,
}

        Code copied

```

[Previous：Project Configuration](https://super-apps.ai/mop/document/en/develop/frameInterface/config/project.html)[Next：Page Configuration](https://super-apps.ai/mop/document/en/develop/frameInterface/config/page.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)