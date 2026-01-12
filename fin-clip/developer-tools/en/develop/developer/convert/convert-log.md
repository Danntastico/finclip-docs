<!--
Source URL: https://super-apps.ai/mop/document/en/develop/developer/convert/convert-log.html
Extracted: 2026-01-12T23:16:47.911Z (January 12, 2026)
Title: Common Errors When Generating Apps from Mini-Programs | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
FinClip Studio](https://super-apps.ai/mop/document/en/develop/developer/convert/convert-log.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Low-code Development](https://super-apps.ai/mop/document/en/develop/developer/convert/convert-log.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
FinClip App](https://super-apps.ai/mop/document/en/develop/developer/convert/convert-log.html) [![](https://super-apps.ai/mop/document/images/arrow_open.svg)\\
Generate App from Mini Program](https://super-apps.ai/mop/document/en/develop/developer/convert/convert-app.html)

- [Introduction and Guide](https://super-apps.ai/mop/document/en/develop/developer/convert/convert-app.html)
- [Local Build Guide](https://super-apps.ai/mop/document/en/develop/developer/convert/local-configuration.html)
- [App Store Submission Guide](https://super-apps.ai/mop/document/en/develop/developer/convert/appstore.html)
- [Extend SDK Configuration](https://super-apps.ai/mop/document/en/develop/developer/convert/extend-sdk-config.html)
- [Common Errors and Solutions](https://super-apps.ai/mop/document/en/develop/developer/convert/convert-log.html)

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Generate HarmonyOS App from Mini Program](https://super-apps.ai/mop/document/en/develop/developer/convert/convert-log.html)

# [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/convert-log.html\#common-errors-when-generating-apps-from-mini-programs) Common Errors When Generating Apps from Mini-Programs

## [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/convert-log.html\#_1-common-errors-when-compiling-ios-projects) 1\. Common Errors When Compiling iOS Projects

### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/convert-log.html\#_1-1-error-no-signing-certificate-ios-development-found-no-ios-development-signing-certificate-matching-team-id-xxxxxxxxxx-with-a-private-key-was-found-in-target-finclip-demo-temp-from-project-finclip-demo-temp) 1.1 error: No signing certificate "iOS Development" found: No "iOS Development" signing certificate matching team ID "xxxxxxxxxx" with a private key was found. (in target 'finclip\_demo\_temp' from project 'finclip\_demo\_temp')

Answer: This may occur because a `development` type certificate was selected, but a production environment certificate was uploaded. Please confirm whether the certificate is of the iOS App Development type. If not, please re-upload the certificate.

### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/convert-log.html\#_1-2-error-provisioning-profile-provisioning-has-app-id-xxx-xxxxxxxx-xxxx-which-does-not-match-the-bundle-id-xxx-xxxxxxxx-xxxx-in-target-finclip-demo-temp-from-project-finclip-demo-temp) 1.2 error: Provisioning profile "Provisioning" has app ID "xxx.xxxxxxxx.xxxx", which does not match the bundle ID "xxx.xxxxxxxx.xxxx". (in target 'finclip\_demo\_temp' from project 'finclip\_demo\_temp')

Answer: This may be because the Bundle ID selected when generating the App does not match the one in the provisioning profile. Please recheck the Bundle ID corresponding to the provisioning profile.

### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/convert-log.html\#_1-3-package-upload-failed) 1.3 Package Upload Failed

Answer: This may be caused by network fluctuations during upload. Please try packaging again.

## [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/convert-log.html\#_2-common-errors-when-compiling-android-projects) 2\. Common Errors When Compiling Android Projects

### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/convert-log.html\#_2-1-algorithm-hmacpbesha256-not-available) 2.1 Algorithm HmacPBESHA256 not available

Answer: This is usually caused by using a JDK version that is too high to generate the certificate. Please use OpenJDK8 or OpenJDK11 to generate the certificate used for building the Android application.

### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/convert-log.html\#_2-2-keystore-password-was-incorrect) 2.2 keystore password was incorrect

Answer: Please confirm that the file's private key is correct.

### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/convert-log.html\#_2-3-given-final-block-not-properly-padded-such-issues-can-arise-if-a-bad-key-is-used-during-decryption) 2.3 Given final block not properly padded. Such issues can arise if a bad key is used during decryption

Answer: Please confirm that the certificate's private key is correct.

### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/convert-log.html\#_2-4-no-key-with-alias-xxxxxx-found-in-keystore) 2.4 No key with alias 'XXXXXX' found in keystore

Answer: Please confirm that the certificate alias is correct.

### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/convert-log.html\#_2-5-toderinputstream-rejects-tag-type) 2.5 toDerInputStream rejects tag type

Answer: Please confirm that the selected JKS certificate file is correct and whether the file is corrupted.

### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/convert-log.html\#_2-6-package-upload-failed) 2.6 Package Upload Failed

Answer: This may be caused by network fluctuations during upload. Please try packaging again later.

[Previous：Extend SDK Configuration](https://super-apps.ai/mop/document/en/develop/developer/convert/extend-sdk-config.html)[Next：Introduction and Guide](https://super-apps.ai/mop/document/en/develop/developer/convert/harmony-convert-app.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)