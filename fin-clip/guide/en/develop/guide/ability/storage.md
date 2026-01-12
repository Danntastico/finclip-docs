<!--
Source URL: https://super-apps.ai/mop/document/en/develop/guide/ability/storage.html
Extracted: 2026-01-12T23:21:17.727Z (January 12, 2026)
Title: Storage | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Overview](https://super-apps.ai/mop/document/en/develop/guide/feature.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Understand Mini Program](https://super-apps.ai/mop/document/en/develop/guide/ability/storage.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Configure Mini Program](https://super-apps.ai/mop/document/en/develop/guide/ability/storage.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Mini Program Framework](https://super-apps.ai/mop/document/en/develop/guide/ability/storage.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
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
Import from 3rd-party (beta)](https://super-apps.ai/mop/document/en/develop/guide/ability/storage.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
SSO Login Guide](https://super-apps.ai/mop/document/en/develop/guide/ssoLogin.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Traceability (beta)](https://super-apps.ai/mop/document/en/develop/guide/trace.html)

# [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/storage.html\#storage) Storage

Each Mini-Program can have its own local cache. You can read, write, and clear the local cache using `ft.setStorage`, `ft.getStorage`, `ft.clearStorage`, and `ft.removeStorage`.

## [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/storage.html\#_1-isolation-strategy) 1\. Isolation Strategy

Storage is isolated by user dimension. On the same device, User A cannot read data from User B; different Mini-Programs also cannot read or write each other's data.

### [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/storage.html\#_1-1-plugin-isolation-strategy) 1.1 Plugin Isolation Strategy

Same Mini-Program using different plugins: Storage is not shared between different plugins, nor between plugins and the Mini-Program.
Different Mini-Programs using the same plugin: Storage for the same plugin is not shared.

## [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/storage.html\#_2-cleanup-strategy) 2\. Cleanup Strategy

The cleanup timing for the local cache is the same as for the code package. The local cache is only cleared when the code package is cleaned up.

[Previous：Mini Program Plugin](https://super-apps.ai/mop/document/en/develop/guide/plugin.html)[Next：File System](https://super-apps.ai/mop/document/en/develop/guide/ability/file-system.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)