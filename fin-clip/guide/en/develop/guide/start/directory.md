<!--
Source URL: https://super-apps.ai/mop/document/en/develop/guide/start/directory.html
Extracted: 2026-01-12T23:20:41.935Z (January 12, 2026)
Title: Mini-Program Directory Structure | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

# [\#](https://super-apps.ai/mop/document/en/develop/guide/start/directory.html\#mini-program-directory-structure) Mini-Program Directory Structure

A Mini-Program consists of one `app` that describes the overall program and multiple `pages` that describe individual pages.

The main part of a Mini-Program is composed of three files, which must be placed in the root directory of the project, as follows:

| File | Required | Purpose |
| --- | --- | --- |
| app.js | Yes | Mini-Program logic |
| app.json | Yes | Mini-Program public configuration |
| app.ftss | No | Mini-Program public stylesheet |

A Mini-Program page is composed of four files:

| File Type | Required | Purpose |
| --- | --- | --- |
| js | Yes | Page logic |
| fxml | Yes | Page structure |
| json | No | Page configuration |
| ftss | No | Page stylesheet |

Note

To reduce configuration efforts for developers, the four files describing a page must have the same path and filename.