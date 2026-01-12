<!--
Source URL: https://super-apps.ai/mop/document/en/develop/framework/framework-management.html
Extracted: 2026-01-12T23:13:36.053Z (January 12, 2026)
Title: Base Library Maintenance | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Base Library Introduction](https://super-apps.ai/mop/document/en/develop/framework/framework-principle.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Base Library Maintenance](https://super-apps.ai/mop/document/en/develop/framework/framework-management.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Changelog](https://super-apps.ai/mop/document/en/develop/framework/framework-update-log.html)

# [\#](https://super-apps.ai/mop/document/en/develop/framework/framework-management.html\#base-library-maintenance) Base Library Maintenance

Please Note

When using the Community Edition or a private deployment of FinClip, you need to log in to the Operation Center yourself and maintain the relevant version information of the base library in "Mini-Program Management > Mini-Program Base Library". If you are using the FinClip SaaS version, you do not need to maintain the Mini-Program base library.

## [\#](https://super-apps.ai/mop/document/en/develop/framework/framework-management.html\#_1-base-library-maintenance) 1\. Base Library Maintenance

### [\#](https://super-apps.ai/mop/document/en/develop/framework/framework-management.html\#_1-1-obtain-the-latest-base-library) 1.1 Obtain the Latest Base Library

![](https://super-apps.ai/mop/document/assets/img/jichuku01.e99c58ad.png)

You can learn about different versions of the base library in [Development > Base Library > Update Log](https://super-apps.ai/mop/document/develop/framework/framework-update-log.html) and click the "Download Link" on the page to obtain the base library file for the corresponding version.

Please Note

Since **lower versions** of the base library have corresponding relationships with the SDK, please refer to the [SDK and Base Library Version Comparison Table](https://super-apps.ai/mop/document/runtime-sdk/versionmap/comparison.html) to obtain available base library information. In each row, you can find the minimum SDK version corresponding to a specific base library version.

When the SDK fetches the base library, it will first attempt to match the latest version within the current compatible range. If no available base library within the range is uploaded to the Operation Center, it will default to fetching the latest version of the base library content.

### [\#](https://super-apps.ai/mop/document/en/develop/framework/framework-management.html\#_1-2-update-the-base-library) 1.2 Update the Base Library

After obtaining the base library file, you need to log in to "Operation Center > Mini-Program Management > Mini-Program Base Library", click the "Add" button on the right side of the page, upload the base library file, configure whether to notify the enterprise side, and enter the base library version description.

![](https://super-apps.ai/mop/document/assets/img/jichuku02.6f05e49b.png)

After clicking the "Confirm" button, the Mini-Program base library update is complete.

### [\#](https://super-apps.ai/mop/document/en/develop/framework/framework-management.html\#_1-3-disable-a-base-library) 1.3 Disable a Base Library

![](https://super-apps.ai/mop/document/assets/img/jichuku03.41e2fd07.png)

If you need to temporarily disable a specific version of the base library, you can click "Disable" in the far-right column of that base library entry. After clicking, Mini-Programs will no longer fetch information for that version of the base library.

## [\#](https://super-apps.ai/mop/document/en/develop/framework/framework-management.html\#_2-base-library-maintenance-faqs) 2\. Base Library Maintenance FAQs

### [\#](https://super-apps.ai/mop/document/en/develop/framework/framework-management.html\#_2-1-can-i-control-base-library-version-updates) 2.1 Can I Control Base Library Version Updates?

You can manage and control base library updates according to your needs within the base library management section.

Different companies may have different policies regarding Mini-Program updates and releases. If your team or company requires stricter control over releases, you can configure Mini-Programs to run on a specified base library version and proceed with the official release after testing is complete. This helps manage development risks or locate defects.

### [\#](https://super-apps.ai/mop/document/en/develop/framework/framework-management.html\#_2-2-how-long-does-it-take-for-a-base-library-update-to-take-effect) 2.2 How Long Does It Take for a Base Library Update to Take Effect?

After the base library update is complete, the SDK will check for a new base library version the next time a Mini-Program is opened. When a new version is detected and the App is running in the foreground, the new base library will be downloaded automatically. The new base library version will then be used the next time the Mini-Program is opened.

### [\#](https://super-apps.ai/mop/document/en/develop/framework/framework-management.html\#_2-3-how-to-check-the-currently-used-base-library-version) 2.3 How to Check the Currently Used Base Library Version?

If the Mini-Program has [debug mode](https://super-apps.ai/mop/document/faq/miniProgram/developer.html#_1-%E5%A6%82%E4%BD%95%E6%89%93%E5%BC%80%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%9A%84%E8%B0%83%E8%AF%95%E6%A8%A1%E5%BC%8F) enabled, you can see the base library version information in the first line of the logs.

If debug mode is not enabled for the Mini-Program, you can also obtain the base library version information via the `getSystemInfo` or `getSystemInfoSync` API.

[Previous：Base Library Introduction](https://super-apps.ai/mop/document/en/develop/framework/framework-principle.html)[Next：Changelog](https://super-apps.ai/mop/document/en/develop/framework/framework-update-log.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)