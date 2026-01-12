<!--
Source URL: https://super-apps.ai/mop/document/en/develop/frameInterface/config/page.html
Extracted: 2026-01-12T23:17:15.386Z (January 12, 2026)
Title: Page Configuration | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
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
Framework API](https://super-apps.ai/mop/document/en/develop/frameInterface/config/page.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
FXML Syntax](https://super-apps.ai/mop/document/en/develop/frameInterface/config/page.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
FTS Syntax](https://super-apps.ai/mop/document/en/develop/frameInterface/config/page.html)

# [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/config/page.html\#page-configuration) Page Configuration

Some configurations in `app.json` can also be configured for individual pages. You can configure the behavior of the current page in the corresponding `.json` file.

Configuration items in the page configuration will override the same configuration items in `app.json` for the current page (style-related configuration items belong to the window property in `app.json`, but there is no need to specify the window field here). For specific values and meanings, please refer to the global configuration documentation.

The file content is a JSON object with the following properties:

### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/config/page.html\#configuration-items) Configuration Items

| Property | Type | Default Value | Description | Minimum Version |
| --- | --- | --- | --- | --- |
| navigationBarBackgroundColor | HexColor | #000000 | Navigation Bar background color, e.g., #000000 |  |
| navigationBarTextStyle | string | white | Navigation Bar title color, only supports black / white |  |
| navigationBarTitleText | string |  | Navigation Bar title text content |  |
| navigationBarTitleFixed | boolean | false | Whether not to use the web-view's title, defaults to false; when set to true, only navigationBarTitleText will be displayed |  |
| navigationStyle | string | default | Navigation Bar style, only supports the following values: 1. default (default style), 2. custom (custom Navigation Bar, only retains the top-right Capsule Button, invalid for web-view components), 3.customV2 (custom Navigation Bar, only retains the top-right Capsule Button), 4.hide (hides the Navigation Bar and the top-right Capsule Button) |  |
| backgroundColor | HexColor | #ffffff | Window background color |  |
| backgroundTextStyle | string | dark | Pull-down loading style, only supports dark / light |  |
| backgroundColorTop | string | #ffffff | Top window background color, only supported on iOS |  |
| backgroundColorBottom | string | #ffffff | Bottom window background color, only supported on iOS |  |
| enablePullDownRefresh | boolean | false | Whether to enable pull-down refresh for the current page. See Page.onPullDownRefresh |  |
| pageOrientation | string | portrait | Screen orientation setting, supports auto / portrait / landscape. See Responding to Display Area Changes | 2.4.0 (auto) / 2.5.0 (landscape) |
| usingComponents | Object | No | Page custom component configuration | 1.6.3 |
| initialRenderingCache | string |  | Page initial rendering cache configuration, supports static / dynamic | 2.10.1 |
| style | string | default | Enable the new component style | 2.11.1 |
| onReachBottomDistance | number | 50 | Distance from the bottom of the page when the page's reach bottom event is triggered, in px. See Page.onReachBottom | 2.12.8 |
| disableScroll | boolean | false | If set to true, the entire page cannot scroll vertically. Only effective in page configuration, cannot be set in app.json | 2.40.7 |

Note

The following configuration items are not currently supported.

| Name | Function Description |
| --- | --- |
| singlePage | Object |
| restartStrategy | string |

### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/config/page.html\#configuration-example) Configuration Example

```text
{
  "navigationBarBackgroundColor": "#ffffff",
  "navigationBarTextStyle": "black",
  "navigationBarTitleText": "API Function Demo",
  "backgroundColor": "#eeeeee",
  "backgroundTextStyle": "light"
}

        Code copied

```

[Previous：Global Configuration](https://super-apps.ai/mop/document/en/develop/frameInterface/config/app.html)[Next：Sitemap Configuration](https://super-apps.ai/mop/document/en/develop/frameInterface/config/sitemap.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)