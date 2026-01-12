<!--
Source URL: https://super-apps.ai/mop/document/en/develop/guide/ability/dark-mode.html
Extracted: 2026-01-12T23:22:18.246Z (January 12, 2026)
Title: Dark Mode Adaptation Guide | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Overview](https://super-apps.ai/mop/document/en/develop/guide/feature.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Understand Mini Program](https://super-apps.ai/mop/document/en/develop/guide/ability/dark-mode.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Configure Mini Program](https://super-apps.ai/mop/document/en/develop/guide/ability/dark-mode.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Mini Program Framework](https://super-apps.ai/mop/document/en/develop/guide/ability/dark-mode.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
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
Import from 3rd-party (beta)](https://super-apps.ai/mop/document/en/develop/guide/ability/dark-mode.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
SSO Login Guide](https://super-apps.ai/mop/document/en/develop/guide/ssoLogin.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Traceability (beta)](https://super-apps.ai/mop/document/en/develop/guide/trace.html)

# [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/dark-mode.html\#dark-mode-adaptation-guide) Dark Mode Adaptation Guide

> Supported in Base Library 2.12.2 and above. Use Developer Tools 1.8.11 or above for debugging, and SDK 2.35.1 or above.

## [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/dark-mode.html\#enabling-dark-mode-in-the-sdk) Enabling Dark Mode in the SDK

When initializing the Mini-Program SDK, set `autoAdaptDarkMode = true` (deprecated in version 2.44.5) to enable Dark Mode. Starting from version 2.44.5, you can set `themeStyle` (Light Mode, Dark Mode, Follow System) to specify the Mini-Program's theme mode.

- [Kotlin](https://super-apps.ai/mop/document/en/develop/guide/ability/dark-mode.html#kotlin)
- [Objective-C](https://super-apps.ai/mop/document/en/develop/guide/ability/dark-mode.html#objective-c)

```kotlin
val uiConfig = UIConfig()
uiConfig.autoAdaptDarkMode = true
//Starting from version 2.44.5
uiConfig.themeStyle = UIConfig.THEME_STYLE_AUTO

        Code copied

```

```objectivec
FATUIConfig *uiConfig = [[FATUIConfig alloc] init];
uiConfig.autoAdaptDarkMode = YES;
//Starting from version 2.44.5
uiConfig.themeStyle = FATThemeStyleAuto;

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/dark-mode.html\#enabling-dark-mode-in-the-mini-program) Enabling Dark Mode in the Mini-Program

Configure `darkmode` as `true` in `app.json` to indicate that the current Mini-Program has adapted to Dark Mode. All Basic Components will display different default styles according to the system theme, and the Navigation Bar and Tab Bar will also automatically switch based on the configurations below.

## [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/dark-mode.html\#related-configurations) Related Configurations

When `darkmode` is set to `true` in `app.json`, some Mini-Program configuration items can be configured using variables. Define colors or icons under different themes in the variable configuration file as follows:

1. Configure `themeLocation` in `app.json` to specify the path of the variable configuration file `theme.json`. For example, if you add `theme.json` in the root directory, configure `"themeLocation":"theme.json"`.
2. Define related variables in `theme.json`.
3. Reference variables in `app.json` using `@` as a prefix.

Properties that support variable configuration:

- Window properties under global configuration and properties under page configuration
  - navigationBarBackgroundColor
  - navigationBarTextStyle
  - backgroundColor
  - backgroundTextStyle
  - backgroundColorTop
  - backgroundColorBottom
- Properties under global configuration window.tabBar
  - color
  - selectedColor
  - backgroundColor
  - borderStyle
  - list
    - iconPath
    - selectedIconPath

### [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/dark-mode.html\#variable-configuration-file-theme-json) Variable Configuration File theme.json

`theme.json` is used for defining variables related to color themes. You must first configure the path of `theme.json` in `themeLocation`; otherwise, the variable configuration cannot be read.

The configuration file must include the following properties:

| Property | Type | Required | Description |
| --- | --- | --- | --- |
| light | object | Yes | Variable definitions for Light Mode |
| dark | object | Yes | Variable definitions for Dark Mode |

Variables can be defined under `light` and `dark` in the format `key: value`, for example:

```json
{
  "light": {
    "navBgColor": "#f5f6f7",
    "navTxtStyle": "black"
  },
  "dark": {
    "navBgColor": "#1a1a1a",
    "navTxtStyle": "white"
  }
}

        Code copied

```

After definition, you can reference the variables in relevant properties of the global or page configuration using `@` as a prefix, for example:

```json
// Global configuration
{
  "window": {
    "navigationBarBackgroundColor": "@navBgColor",
    "navigationBarTextStyle": "@navTxtStyle"
  }
}
// Page configuration
{
  "navigationBarBackgroundColor": "@navBgColor",
  "navigationBarTextStyle": "@navTxtStyle"
}

        Code copied

```

After configuration, the Mini-Program Framework will automatically display the colors corresponding to the system theme for the Mini-Program.

### [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/dark-mode.html\#configuration-example) Configuration Example

app.json

```json
{
    "window": {
        "navigationBarBackgroundColor": "@navBgColor",
        "navigationBarTextStyle": "@navTxtStyle",
        "backgroundColor": "@bgColor",
        "backgroundTextStyle": "@bgTxtStyle",
        "backgroundColorTop": "@bgColorTop",
        "backgroundColorBottom": "@bgColorBottom"
    },
    "tabBar": {
        "color": "@tabFontColor",
        "selectedColor": "@tabSelectedColor",
        "backgroundColor": "@tabBgColor",
        "borderStyle": "@tabBorderStyle",
        "list": [{\
            "iconPath": "@iconPath1",\
            "selectedIconPath": "@selectedIconPath1"\
        }, {\
            "iconPath": "@iconPath2",\
            "selectedIconPath": "@selectedIconPath2"\
        }]
    }
}

        Code copied

```

theme.json

```json
{
    "light": {
        "navBgColor": "#f5f6f7",
        "navTxtStyle": "black",
        "bgColor": "#ffffff",
        "bgTxtStyle": "light",
        "bgColorTop": "#eeeeee",
        "bgColorBottom": "#efefef",
        "tabFontColor": "#000000",
        "tabSelectedColor": "#30c8121",
        "tabBgColor": "#ffffff",
        "tabBorderStyle": "black",
        "iconPath1": "image/icon1_light.png",
        "selectedIconPath1": "image/selected_icon1_light.png",
        "iconPath2": "image/icon2_light.png",
        "selectedIconPath2": "image/selected_icon2_light.png",
    },
    "dark": {
        "navBgColor": "#1a1a1a",
        "navTxtStyle": "white",
        "bgColor": "#1e1e1e",
        "bgTxtStyle": "dark",
        "bgColorTop": "#1a1a1a",
        "bgColorBottom": "#1e1e1e",
        "tabFontColor": "#ffffff",
        "tabSelectedColor": "#51a937",
        "tabBgColor": "#1a1a1a",
        "tabBorderStyle": "white",
        "iconPath1": "image/icon1_dark.png",
        "selectedIconPath1": "image/selected_icon1_dark.png",
        "iconPath2": "image/icon2_dark.png",
        "selectedIconPath2": "image/selected_icon2_dark.png",
    }
}

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/dark-mode.html\#getting-the-current-system-theme) Getting the Current System Theme

If `"darkmode": true` is declared in `app.json`, the return result of `ft.getSystemInfo` or `ft.getSystemInfoSync` will include a `theme` property, with a value of `light` or `dark`.
If `"darkmode": true` is not declared in `app.json`, the `theme` property cannot be obtained (i.e., `theme` is `undefined`).

## [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/dark-mode.html\#listening-for-theme-change-events) Listening for Theme Change Events

Two methods are supported:

1. Pass the `onThemeChange` callback method in `App()`; this callback will be triggered when the theme changes.
2. Use `ft.onThemeChange` to listen for theme changes and `ft.offThemeChange` to cancel listening.

## [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/dark-mode.html\#wxss-adaptation) WXSS Adaptation

In WXSS, you can adapt to different themes using the media query `prefers-color-scheme`, consistent with the adaptation method on the Web, for example:

```css
/* Styles under normal conditions begin */
.some-background {
    background: white;
}
.some-text {
    color: black;
}
/* Styles under normal conditions end */

@media (prefers-color-scheme: dark) {
    /* Styles under Dark Mode start */
    .some-background {
        background: #1b1b1b;
    }
    .some-text {
        color: #ffffff;
    }
    /* Styles under Dark Mode end */
}

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/dark-mode.html\#debugging-in-developer-tools) Debugging in Developer Tools

Developer Tools version 1.8.11 and above support Dark Mode debugging. You can switch between Dark/Light modes at the top of the simulator, as shown in the figure:
![](https://super-apps.ai/mop/document/assets/img/darkmode_devtool.20389b1f.png)

[Previous：Worker (Beta)](https://super-apps.ai/mop/document/en/develop/guide/ability/worker.html)[Next：Background Data Fetch](https://super-apps.ai/mop/document/en/develop/guide/ability/background-data.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)