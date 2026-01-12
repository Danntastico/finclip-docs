<!--
Source URL: https://super-apps.ai/mop/document/en/develop/guide/setting/sitemap.html
Extracted: 2026-01-12T23:20:45.909Z (January 12, 2026)
Title: sitemap Configuration | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Overview](https://super-apps.ai/mop/document/en/develop/guide/feature.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Understand Mini Program](https://super-apps.ai/mop/document/en/develop/guide/setting/sitemap.html) [![](https://super-apps.ai/mop/document/images/arrow_open.svg)\\
Configure Mini Program](https://super-apps.ai/mop/document/en/develop/guide/setting/config.html)

- [Global & Page Configuration](https://super-apps.ai/mop/document/en/develop/guide/setting/config.html)
- [Sitemap Configuration](https://super-apps.ai/mop/document/en/develop/guide/setting/sitemap.html)

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Mini Program Framework](https://super-apps.ai/mop/document/en/develop/guide/setting/sitemap.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Custom Component](https://super-apps.ai/mop/document/en/develop/guide/component.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Mini Program Plugin](https://super-apps.ai/mop/document/en/develop/guide/plugin.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Basic Abilities](https://super-apps.ai/mop/document/en/develop/guide/setting/sitemap.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Import from 3rd-party (beta)](https://super-apps.ai/mop/document/en/develop/guide/setting/sitemap.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
SSO Login Guide](https://super-apps.ai/mop/document/en/develop/guide/ssoLogin.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Traceability (beta)](https://super-apps.ai/mop/document/en/develop/guide/trace.html)

# [\#](https://super-apps.ai/mop/document/en/develop/guide/setting/sitemap.html\#sitemap-configuration) sitemap Configuration

FinClip now supports in-app search for Mini-Programs. Developers can configure whether their Mini-Program pages are allowed to be indexed by setting up `sitemap.json`. FinClip uses crawlers to index Mini-Program page content. When a user's search query triggers this index, the Mini-Program pages may appear in the search results.

## [\#](https://super-apps.ai/mop/document/en/develop/guide/setting/sitemap.html\#_1-sitemap-configuration) 1\. sitemap Configuration

The `sitemap.json` file located in the root directory of the Mini-Program is used to configure whether the Mini-Program and its pages are allowed to be indexed by FinClip.

For the complete configuration reference, please see [sitemap Configuration](https://super-apps.ai/mop/document/develop/guide/setting/sitemap.html)

### [\#](https://super-apps.ai/mop/document/en/develop/guide/setting/sitemap.html\#example-1) Example 1

```json
{
  "rules":[{\
    "action": "allow",\
    "page": "*"\
  }]
}

        Code copied

```

All pages will be indexed by FinClip (default behavior)

### [\#](https://super-apps.ai/mop/document/en/develop/guide/setting/sitemap.html\#example-2) Example 2

```json
{
  "rules":[{\
    "action": "disallow",\
    "page": "path/to/page"\
  }]
}

        Code copied

```

Configure the `path/to/page` page not to be indexed, while allowing all other pages to be indexed

### [\#](https://super-apps.ai/mop/document/en/develop/guide/setting/sitemap.html\#example-3) Example 3

```json
{
  "rules":[{\
    "action": "allow",\
    "page": "path/to/page"\
  }, {\
    "action": "disallow",\
    "page": "*"\
  }]
}

        Code copied

```

Configure the `path/to/page` page to be indexed, while all other pages are not indexed

## [\#](https://super-apps.ai/mop/document/en/develop/guide/setting/sitemap.html\#_2-special-case-notes) 2\. Special Case Notes

1. If `sitemap.json` does not exist, all pages are indexable by default;
2. `{"action": "allow", "page": "*"}` is the default rule with the lowest priority; any page not explicitly marked `"disallow"` is indexable by default;
3. The `sitemap.json` file has a maximum size limit of `5120` UTF8 characters;
4. For pages that should not be indexed by the platform, developers can also use `sitemap.json` to declare their handling.

[Previous：Global & Page Configuration](https://super-apps.ai/mop/document/en/develop/guide/setting/config.html)[Next：Introduction](https://super-apps.ai/mop/document/en/develop/guide/framework/intro.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)