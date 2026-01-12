<!--
Source URL: https://super-apps.ai/mop/document/en/develop/developer/convert/harmony-local-configuration.html
Extracted: 2026-01-12T23:17:06.611Z (January 12, 2026)
Title: Local Project File Configuration | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
FinClip Studio](https://super-apps.ai/mop/document/en/develop/developer/convert/harmony-local-configuration.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Low-code Development](https://super-apps.ai/mop/document/en/develop/developer/convert/harmony-local-configuration.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
FinClip App](https://super-apps.ai/mop/document/en/develop/developer/convert/harmony-local-configuration.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Generate App from Mini Program](https://super-apps.ai/mop/document/en/develop/developer/convert/harmony-local-configuration.html) [![](https://super-apps.ai/mop/document/images/arrow_open.svg)\\
Generate HarmonyOS App from Mini Program](https://super-apps.ai/mop/document/en/develop/developer/convert/harmony-convert-app.html)
- [Introduction and Guide](https://super-apps.ai/mop/document/en/develop/developer/convert/harmony-convert-app.html)
- [Local Build Guide](https://super-apps.ai/mop/document/en/develop/developer/convert/harmony-local-configuration.html)

# [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/harmony-local-configuration.html\#local-project-file-configuration) Local Project File Configuration

## [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/harmony-local-configuration.html\#_1-harmonyos-project-configuration) 1\. HarmonyOS Project Configuration

### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/harmony-local-configuration.html\#_2-1-prepare-the-project) 2.1 Prepare the Project

- Install DevEco Studio, download address: [HarmonyOS Developer Official Website(opens new window)](https://developer.huawei.com/consumer/cn/deveco-studio/)

### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/harmony-local-configuration.html\#_2-2-configure-the-project) 2.2 Configure the Project

Open the exported HarmonyOS project using DevEco Studio:

![harmony-1](https://super-apps.ai/mop/document/assets/img/harmony-1.10befb17.png)

Select the directory where the HarmonyOS App was exported.

![harmony-2](https://super-apps.ai/mop/document/assets/img/harmony-2.ae1a8dd7.png)

The first time you open the project may take longer, as DevEco Studio needs to automatically download the dependency libraries.

#### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/harmony-local-configuration.html\#_2-2-1-appscope-app-json5) 2.2.1 AppScope/app.json5

![harmony-3](https://super-apps.ai/mop/document/assets/img/harmony-3.962f5455.png)

#### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/harmony-local-configuration.html\#_2-2-2-entry-src-main-module-json5) 2.2.2 entry/src/main/module.json5

![harmony-4](https://super-apps.ai/mop/document/assets/img/harmony-4.3206ae22.png)

You can view the permissions required by the app declaration, and add or remove them as needed.

#### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/harmony-local-configuration.html\#_2-2-3-application-icon) 2.2.3 Application Icon

Application icon file, replace it as needed.

![harmony-5](https://super-apps.ai/mop/document/assets/img/harmony-5.bffafc0c.png)

### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/harmony-local-configuration.html\#_2-3-run-the-project) 2.3 Run the Project

#### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/harmony-local-configuration.html\#_2-3-1-enable-developer-mode-on-the-phone) 2.3.1 Enable Developer Mode on the Phone

The method to enable developer mode may vary for different phone brands. For most devices, you can enable it by tapping the version number five times in the device details interface.

Then go to the developer options interface and enable USB debugging. (If there is a USB installation option, enable that as well.)

![Android-8](https://super-apps.ai/mop/document/assets/img/Android-8.86eea6f5.png)

Connect the phone to the computer using a USB cable. A debugging authorization window will pop up on the phone; click Allow.

![Android-9](https://super-apps.ai/mop/document/assets/img/Android-9.36af1322.png)

#### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/harmony-local-configuration.html\#_2-3-2-run-the-application) 2.3.2 Run the Application

Finally, return to DevEco Studio and click the run icon in the upper right corner to directly run the debug version of the application on the phone.

![Android-10](https://super-apps.ai/mop/document/assets/img/harmony-6.0854f91f.png)

### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/harmony-local-configuration.html\#_2-4-publish-harmonyos-application) 2.4 Publish HarmonyOS Application

You can refer to the HarmonyOS official website documentation [Publish HarmonyOS Application(opens new window)](https://developer.huawei.com/consumer/cn/doc/app/agc-help-harmonyos-releaseapp-0000001126380068#section55531120183018) to publish the application.

[Previous：Introduction and Guide](https://super-apps.ai/mop/document/en/develop/developer/convert/harmony-convert-app.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)