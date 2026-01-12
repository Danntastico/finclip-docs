<!--
Source URL: https://super-apps.ai/mop/document/en/develop/guide/setting/config.html
Extracted: 2026-01-12T23:20:45.632Z (January 12, 2026)
Title: Configuring Mini-Programs | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Overview](https://super-apps.ai/mop/document/en/develop/guide/feature.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Understand Mini Program](https://super-apps.ai/mop/document/en/develop/guide/setting/config.html) [![](https://super-apps.ai/mop/document/images/arrow_open.svg)\\
Configure Mini Program](https://super-apps.ai/mop/document/en/develop/guide/setting/config.html)

- [Global & Page Configuration](https://super-apps.ai/mop/document/en/develop/guide/setting/config.html)
- [Sitemap Configuration](https://super-apps.ai/mop/document/en/develop/guide/setting/sitemap.html)

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Mini Program Framework](https://super-apps.ai/mop/document/en/develop/guide/setting/config.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Custom Component](https://super-apps.ai/mop/document/en/develop/guide/component.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Mini Program Plugin](https://super-apps.ai/mop/document/en/develop/guide/plugin.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Basic Abilities](https://super-apps.ai/mop/document/en/develop/guide/setting/config.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Import from 3rd-party (beta)](https://super-apps.ai/mop/document/en/develop/guide/setting/config.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
SSO Login Guide](https://super-apps.ai/mop/document/en/develop/guide/ssoLogin.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Traceability (beta)](https://super-apps.ai/mop/document/en/develop/guide/trace.html)

# [\#](https://super-apps.ai/mop/document/en/develop/guide/setting/config.html\#configuring-mini-programs) Configuring Mini-Programs

## [\#](https://super-apps.ai/mop/document/en/develop/guide/setting/config.html\#_1-global-configuration) 1\. Global Configuration

The app.json file is used for global configuration of the Mini-Program, including page paths, window appearance, network timeout settings, and tab bar configuration. If a JSON file within a page contains the same configuration options, it will override the global configuration (Note: JSON files within pages can only configure specific options. For details, refer to the page configuration).

Below is an example configuration file app.json:

```json
{
  "pages": [\
    "pages/index/index",\
    "pages/my/my"\
  ],
  "window": {
    "navigationBarTitleText": "FinClip Mini-Program Demo",
    "navigationBarHideCloseButton": true, // Hide the capsule close button
    "navigationBarHideMoreButton": true, // Hide the capsule more button
    "navigationStyle": "default/custom/hide"
  },
  "tabBar": {
    "list": [{\
      "pagePath": "pages/index/index",\
      "text": "Home"\
    }, {\
      "pagePath": "pages/my/my",\
      "text": "Personal Center"\
    }]
  },
  "debug": true
}

        Code copied

```

For a complete description of configuration items, please refer to [Mini-Program Global Configuration](https://super-apps.ai/mop/document/develop/frameInterface/config/app.html).

## [\#](https://super-apps.ai/mop/document/en/develop/guide/setting/config.html\#_2-page-configuration) 2\. Page Configuration

Used to specify which pages constitute the Mini-Program. Each item corresponds to the path + filename information of a page. The first item in the pages array represents the home page of the Mini-Program. Adding or removing pages requires manually modifying the pages array. It is important to note that items within the pages array cannot be duplicated.

For example, if the development directory is:

```bash
├── app.js
├── app.json
├── app.ftss
├── pages
│   │── index
│   │   ├── index.fxml
│   │   ├── index.js
│   │   ├── index.json
│   │   └── index.ftss
│   └── my
│       ├── my.fxml
│       └── my.js

        Code copied

```

Then you need to write the following in app.json:

```json
{
  "pages":[\
    "pages/index/index",\
    "pages/my/my"\
  ]
}

        Code copied

```

For a complete description of configuration items, please refer to [Mini-Program Page Configuration](https://super-apps.ai/mop/document/develop/frameInterface/config/page.html).

[Previous：Directory Structure](https://super-apps.ai/mop/document/en/develop/guide/start/directory.html)[Next：Sitemap Configuration](https://super-apps.ai/mop/document/en/develop/guide/setting/sitemap.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)