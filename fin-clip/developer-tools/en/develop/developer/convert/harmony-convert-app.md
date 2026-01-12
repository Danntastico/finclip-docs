<!--
Source URL: https://super-apps.ai/mop/document/en/develop/developer/convert/harmony-convert-app.html
Extracted: 2026-01-12T23:17:07.950Z (January 12, 2026)
Title: Generate HarmonyOS App from Mini-Program | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
FinClip Studio](https://super-apps.ai/mop/document/en/develop/developer/convert/harmony-convert-app.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Low-code Development](https://super-apps.ai/mop/document/en/develop/developer/convert/harmony-convert-app.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
FinClip App](https://super-apps.ai/mop/document/en/develop/developer/convert/harmony-convert-app.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Generate App from Mini Program](https://super-apps.ai/mop/document/en/develop/developer/convert/harmony-convert-app.html) [![](https://super-apps.ai/mop/document/images/arrow_open.svg)\\
Generate HarmonyOS App from Mini Program](https://super-apps.ai/mop/document/en/develop/developer/convert/harmony-convert-app.html)
- [Introduction and Guide](https://super-apps.ai/mop/document/en/develop/developer/convert/harmony-convert-app.html)
- [Local Build Guide](https://super-apps.ai/mop/document/en/develop/developer/convert/harmony-local-configuration.html)

# [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/harmony-convert-app.html\#generate-harmonyos-app-from-mini-program) Generate HarmonyOS App from Mini-Program

Feature Background

The "Generate HarmonyOS App from Mini-Program" feature is an additional function within the Developer Tools, designed to assist Mini-Program application developers in quickly converting existing Mini-Programs into mobile Apps that can be published to app stores or run locally. This significantly reduces development costs and improves development efficiency.

## [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/harmony-convert-app.html\#_1-feature-overview) 1\. Feature Overview

The "Generate HarmonyOS App from Mini-Program" feature helps developers export existing Mini-Program code into a HarmonyOS project. Developers no longer need to master comprehensive mobile application development and packaging skills. By focusing their main efforts on product design and functional implementation within the Mini-Program, they can obtain an App that can be published to app stores or installed directly on smart devices like mobile phones.

> Here, the exported HarmonyOS application acts merely as a "shell application" for the Mini-Program. The actual business logic and related requests are all handled by the Mini-Program. Updates and upgrades for the App can also be performed through the Mini-Program.

Furthermore, users can customize the App's icon, name, and permissions to meet more diverse usage requirements.

## [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/harmony-convert-app.html\#_2-operation-instructions) 2\. Operation Instructions

Users can generate a HarmonyOS App from a Mini-Program by following these steps:

1. Configure HarmonyOS App Settings
2. Generate the HarmonyOS App

### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/harmony-convert-app.html\#_2-1-configure-harmonyos-app-settings) 2.1 Configure HarmonyOS App Settings

You can access the relevant functions via the "Generate App" menu in the upper right corner of the interface.

![image.png](https://super-apps.ai/mop/document/assets/img/harmony-app-configuration.f92cd5af.jpg)
Click on the Developer Tools menu bar -> Generate App -> Configure HarmonyOS App to set up the relevant content.

#### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/harmony-convert-app.html\#_2-1-1-basic-app-configuration) 2.1.1 Basic App Configuration

HarmonyOS Basic App Configuration: Configure the application name, application version number, and application build version number for the app that needs to be packaged.

- The App version number should be filled in using the x.y.z format.
- The application build version number will be generated automatically.

![image.png](https://super-apps.ai/mop/document/assets/img/harmony-app-info.bfefccb5.png)

#### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/harmony-convert-app.html\#_2-1-2-app-icon-configuration) 2.1.2 App Icon Configuration

App Icon Configuration: Developers only need to configure one icon image (1024 \* 1024, PNG format). The Developer Tools will automatically generate the images required for HarmonyOS device configurations.
![image.png](https://super-apps.ai/mop/document/assets/img/harmony-app-imgConfiguration.24a3a106.png)

### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/harmony-convert-app.html\#_2-2-generate-harmonyos-app-package) 2.2 Generate HarmonyOS App Package

#### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/harmony-convert-app.html\#_2-2-1-preparations) 2.2.1 Preparations

Before packaging the App, some preparatory work is required, as detailed below:

- The user needs to have a Mini-Program package for packaging and a FinClip SaaS account. If not, please refer to: [Platform Registration](https://super-apps.ai/mop/document/introduce/accessGuide/saas-guidelines.html#_1-%E5%B9%B3%E5%8F%B0%E6%B3%A8%E5%86%8C%E5%8F%8A%E4%BC%81%E4%B8%9A%E8%AE%A4%E8%AF%81).
- Create a Mini-Program on the SaaS platform and upload the Mini-Program via the Developer Tools. Refer to: [Create a Mini-Program](https://super-apps.ai/mop/document/introduce/accessGuide/saas-guidelines.html#_3-1-%E5%88%9B%E5%BB%BA%E6%96%B0%E7%9A%84%E5%B0%8F%E7%A8%8B%E5%BA%8F).
- After uploading the Mini-Program code package, submit the Mini-Program for review and release. Refer to: [Mini-Program Review and Release](https://super-apps.ai/mop/document/introduce/accessGuide/saas-guidelines.html#_5-%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%8F%90%E4%BA%A4%E5%AE%A1%E6%A0%B8%E4%B8%8E%E4%B8%8A%E4%B8%8B%E6%9E%B6). At this point, you have a released Mini-Program. Remember the AppId of this Mini-Program, as it will be used later.
- Configure the associated application, add a bundleId, and associate the Mini-Program. Refer to [Associate Application and bundleId](https://super-apps.ai/mop/document/introduce/accessGuide/saas-guidelines.html#_6-%E5%85%B3%E8%81%94%E7%A7%BB%E5%8A%A8%E5%BA%94%E7%94%A8). In the step for associating the Mini-Program, associate the Mini-Program released above. Remember the newly added bundleId, as it will be useful later.

With this, the preparatory work is complete. Next, proceed with HarmonyOS App packaging.

#### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/harmony-convert-app.html\#_2-2-2-local-compilation-export-project) 2.2.2 Local Compilation (Export Project)

**Step 1: Configure Mini-Program Information**![image.png](https://super-apps.ai/mop/document/assets/img/config-info.18ba617e.png)

**Step 2: Select Associated Application and BundleID**![image.png](https://super-apps.ai/mop/document/assets/img/select.8d7b0a58.png)

**Step 3: Configure Export Directory**![image.png](https://super-apps.ai/mop/document/assets/img/export-catalog.4f080906.png)

**Step 4: Export Successful**![image.png](https://super-apps.ai/mop/document/assets/img/export-success.50107289.png)

### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/harmony-convert-app.html\#_2-3-local-project-configuration) 2.3 Local Project Configuration

For local project file configuration, please see [Local Project File Configuration](https://super-apps.ai/mop/document/develop/developer/convert/harmony-local-configuration.html)

[Previous：Common Errors and Solutions](https://super-apps.ai/mop/document/en/develop/developer/convert/convert-log.html)[Next：Local Build Guide](https://super-apps.ai/mop/document/en/develop/developer/convert/harmony-local-configuration.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)