<!--
Source URL: https://super-apps.ai/mop/document/en/develop/developer/convert/extend-sdk-config.html
Extracted: 2026-01-12T23:16:46.783Z (January 12, 2026)
Title: Third-Party SDK Parameter Configuration | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
FinClip Studio](https://super-apps.ai/mop/document/en/develop/developer/convert/extend-sdk-config.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Low-code Development](https://super-apps.ai/mop/document/en/develop/developer/convert/extend-sdk-config.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
FinClip App](https://super-apps.ai/mop/document/en/develop/developer/convert/extend-sdk-config.html) [![](https://super-apps.ai/mop/document/images/arrow_open.svg)\\
Generate App from Mini Program](https://super-apps.ai/mop/document/en/develop/developer/convert/convert-app.html)

- [Introduction and Guide](https://super-apps.ai/mop/document/en/develop/developer/convert/convert-app.html)
- [Local Build Guide](https://super-apps.ai/mop/document/en/develop/developer/convert/local-configuration.html)
- [App Store Submission Guide](https://super-apps.ai/mop/document/en/develop/developer/convert/appstore.html)
- [Extend SDK Configuration](https://super-apps.ai/mop/document/en/develop/developer/convert/extend-sdk-config.html)
- [Common Errors and Solutions](https://super-apps.ai/mop/document/en/develop/developer/convert/convert-log.html)

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Generate HarmonyOS App from Mini Program](https://super-apps.ai/mop/document/en/develop/developer/convert/extend-sdk-config.html)

## [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/extend-sdk-config.html\#third-party-sdk-parameter-configuration) Third-Party SDK Parameter Configuration

Note

The Developer Tools have the capability to "Generate an App." Through "App Settings," the App can acquire certain extended capabilities, such as Amap (AutoNavi), WeChat Login, etc. This document primarily explains how to configure and obtain the capabilities of third-party SDKs.

Currently, FinClip Studio supports the integration of the following third-party SDKs:

1. Amap (AutoNavi)
2. WeChat Login/Payment

### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/extend-sdk-config.html\#amap-autonavi-sdk-configuration) Amap (AutoNavi) SDK Configuration

To use the Amap SDK, you need to apply for a key on the Amap official website:

1. [iOS Key Application Guide(opens new window)](https://lbs.amap.com/api/ios-indoor-sdk/guide/creat-project/get-key)
2. [Android Key Application Guide(opens new window)](https://lbs.amap.com/api/android-sdk/guide/create-project/get-key)

After successfully applying, configure it in FinClip Studio:

1. Check the Amap option, which will bring up the key configuration pop-up window.

![image.png](https://super-apps.ai/mop/document/assets/img/extend-1.dc0c5516.png)

2. Fill in the keys applied for the iOS and Android platforms respectively, then click "Save."

![image.png](https://super-apps.ai/mop/document/assets/img/extend-4.cf2faf8b.png)

3. Save the App settings.

### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/extend-sdk-config.html\#wechat-login-payment-sdk-configuration) WeChat Login/Payment SDK Configuration

Add the WeChat authorization page:

Refer to [Adding the WeChat Authorization Page](https://super-apps.ai/mop/document/introduce/functionDescription/wx-login.html#%E7%AC%AC%E4%B8%80%E6%AD%A5-%E6%B7%B1%E5%8A%A0%E8%B7%B3%E8%BD%AC%E9%A1%B5%E9%9D%A2).

WeChat Login/Payment SDK configuration requires referencing the following WeChat integration documents to obtain the AppID (used by WeChat to identify mobile applications):

1. [iOS Obtain AppID(opens new window)](https://developers.weixin.qq.com/doc/oplatform/Mobile_App/Access_Guide/iOS.html) (The iOS end also needs to configure Universe Link)
2. [Android Obtain AppID(opens new window)](https://developers.weixin.qq.com/doc/oplatform/Mobile_App/Access_Guide/Android.html)

After successfully obtaining the AppID, configure it in FinClip Studio:

1. Check the WeChat Login/Payment option, which will bring up the WeChat SDK configuration pop-up window.

2. Enter the AppID obtained from the above documentation into wxAppid, fill in the Userverse Link (iOS only), and click "Save."


![image.png](https://super-apps.ai/mop/document/assets/img/extend-3.5305e82f.png)

3. Save the App settings.

[Previous：App Store Submission Guide](https://super-apps.ai/mop/document/en/develop/developer/convert/appstore.html)[Next：Common Errors and Solutions](https://super-apps.ai/mop/document/en/develop/developer/convert/convert-log.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)