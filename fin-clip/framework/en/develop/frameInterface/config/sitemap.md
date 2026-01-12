<!--
Source URL: https://super-apps.ai/mop/document/en/develop/frameInterface/config/sitemap.html
Extracted: 2026-01-12T23:17:19.648Z (January 12, 2026)
Title: sitemap Configuration | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
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
Framework API](https://super-apps.ai/mop/document/en/develop/frameInterface/config/sitemap.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
FXML Syntax](https://super-apps.ai/mop/document/en/develop/frameInterface/config/sitemap.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
FTS Syntax](https://super-apps.ai/mop/document/en/develop/frameInterface/config/sitemap.html)

# [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/config/sitemap.html\#sitemap-configuration) sitemap Configuration

Mini-Program search is now available. Developers can configure whether their Mini-Program pages are allowed to be indexed by configuring `sitemap.json`. It will establish an index for the Mini-Program's page content through a crawler. When a user's search query triggers this index, the Mini-Program's pages may appear in the search results.

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/config/sitemap.html\#_1-sitemap-configuration) 1\. sitemap Configuration

The `sitemap.json` file in the Mini-Program root directory is used to configure whether the Mini-Program and its pages are allowed to be indexed by WeChat. The file content is a `JSON` object. If `sitemap.json` does not exist, all pages are allowed to be indexed by default. `sitemap.json` has the following properties:

### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/config/sitemap.html\#_1-1-configuration-items) 1.1 Configuration Items

| Property | Type | Required | Description |
| --- | --- | --- | --- |
| rules | Object\[\] | Yes | Index rule list |

### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/config/sitemap.html\#_1-2-rules) 1.2 rules

The rules configuration item specifies the indexing rules. Each rule is a JSON object with the following properties:

| Property | Type | Required | Default Value | Valid Values | Value Description |
| --- | --- | --- | --- | --- | --- |
| action | string | No | "allow" | "allow", "disallow" | Whether pages matching this rule can be indexed |
| page | string | Yes |  | "\*", page path | "\*" represents all pages; cannot be used as a wildcard |

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/config/sitemap.html\#_2-configuration-example) 2\. Configuration Example

```json
{
  "rules":[{\
    "action": "disallow",\
    "page": "path/to/page1"\
  }, {\
    "action": "disallow",\
    "page": "path/to/page2"\
  }]
}

        Code copied

```

- `path/to/page1` =\> Not indexed
- `path/to/page2` =\> Not indexed
- All other pages will be indexed

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/config/sitemap.html\#_3-special-cases-explanation) 3\. Special Cases Explanation

1. If `sitemap.json` does not exist, all pages are allowed to be indexed by default;
2. `{"action": "allow", "page": "*"}` is the lowest priority default rule. Pages not explicitly marked as `"disallow"` are indexed by default;
3. The `sitemap.json` file content has a maximum size of `5120` UTF8 characters;
4. For pages that are not suitable to be included by the platform, developers can also use `sitemap.json` to declare and handle them.

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/config/sitemap.html\#_4-disclaimer) 4\. Disclaimer

If developers fail to follow the prompts and guidelines provided in this configuration for setting up the functionality, resulting in the display, disclosure, unauthorized access, or leakage of users' personal information, all legal responsibilities shall be borne by the developers.

If user information is inappropriately displayed or similar situations occur, we may take measures including but not limited to requiring developers to rectify within a specified period to ensure the security of user information.

[Previous：Page Configuration](https://super-apps.ai/mop/document/en/develop/frameInterface/config/page.html)[Next：APP](https://super-apps.ai/mop/document/en/develop/frameInterface/api/app.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)