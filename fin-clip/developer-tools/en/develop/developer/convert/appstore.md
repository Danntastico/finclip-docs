<!--
Source URL: https://super-apps.ai/mop/document/en/develop/developer/convert/appstore.html
Extracted: 2026-01-12T23:16:42.840Z (January 12, 2026)
Title: App Store Submission Guide | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
FinClip Studio](https://super-apps.ai/mop/document/en/develop/developer/convert/appstore.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Low-code Development](https://super-apps.ai/mop/document/en/develop/developer/convert/appstore.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
FinClip App](https://super-apps.ai/mop/document/en/develop/developer/convert/appstore.html) [![](https://super-apps.ai/mop/document/images/arrow_open.svg)\\
Generate App from Mini Program](https://super-apps.ai/mop/document/en/develop/developer/convert/convert-app.html)

- [Introduction and Guide](https://super-apps.ai/mop/document/en/develop/developer/convert/convert-app.html)
- [Local Build Guide](https://super-apps.ai/mop/document/en/develop/developer/convert/local-configuration.html)
- [App Store Submission Guide](https://super-apps.ai/mop/document/en/develop/developer/convert/appstore.html)
- [Extend SDK Configuration](https://super-apps.ai/mop/document/en/develop/developer/convert/extend-sdk-config.html)
- [Common Errors and Solutions](https://super-apps.ai/mop/document/en/develop/developer/convert/convert-log.html)

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Generate HarmonyOS App from Mini Program](https://super-apps.ai/mop/document/en/develop/developer/convert/appstore.html)

# [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/appstore.html\#app-store-submission-guide) App Store Submission Guide

## [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/appstore.html\#_1-ios-app-submission-process-for-apple) 1\. iOS App Submission Process for Apple

### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/appstore.html\#_1-log-in-to-apple-developer-center) 1\. Log in to Apple Developer Center

Open the Apple Developer Center website [(opens new window)](https://developer.apple.com/cn/) in a browser, click the account icon in the upper right corner (in English) to enter the login interface. Enter your developer account username and password on the login screen for verification. After successful verification, you will enter the Apple Developer Center as shown below.

### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/appstore.html\#_2-fill-in-app-information-in-app-store-connect) 2\. Fill in App Information in App Store Connect

#### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/appstore.html\#_2-1-log-in-to-app-store-connect) 2.1 Log in to App Store Connect

Click on App Store Connect to enter,
![iOS40.png](https://super-apps.ai/mop/document/assets/img/iOS40.5534744f.jpg)
Continue by clicking "Go to App Store Connect" to proceed
![iOS41.png](https://super-apps.ai/mop/document/assets/img/iOS41.7c71bed9.jpg)
You will enter the main interface of App Store Connect as follows
![iOS42.png](https://super-apps.ai/mop/document/assets/img/iOS42.0ffbdb93.jpg)

#### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/appstore.html\#_2-2-create-a-new-app) 2.2 Create a New App

Click the ➕ sign in the upper right corner of the above image, then click "New App". Configure the following information to create a new App, as shown below:
![iOS43.png](https://super-apps.ai/mop/document/assets/img/iOS43.e8aa399b.jpg)
After filling in the information, the App is successfully created!

#### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/appstore.html\#_2-3-fill-in-basic-app-information) 2.3 Fill in Basic App Information

After creating the new App, you need to fill in the basic information of the App, such as the App name, language, category, etc. Fill in according to the prompts.
![iOS44.png](https://super-apps.ai/mop/document/assets/img/iOS44.98e3264d.jpg)

#### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/appstore.html\#_2-4-fill-in-app-price-and-availability) 2.4 Fill in App Price and Availability

After filling in the basic App information, proceed to fill in the App price and availability. Generally, the App's selling price is set to free, and the available regions are selected as all countries and regions.

#### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/appstore.html\#_2-5-fill-in-app-version-information) 2.5 Fill in App Version Information

First, add App previews and screenshots by dragging the corresponding images to the designated area. Then, fill in the promotional text, description, and keywords for the App according to the prompts.
![iOS45.png](https://super-apps.ai/mop/document/assets/img/iOS45.0c4e64b9.jpg)

After completing the promotional text and keywords, the next step is to select the App package to upload. Upload the packaged App file (ipa) created earlier using Application Loader. After a successful upload, a ➕ will appear next to "Build Version" as shown below. Click it to select the corresponding version package.
![iOS46.png](https://super-apps.ai/mop/document/assets/img/iOS46.8520903c.jpg)
Next, fill in the general App information, such as the App Store icon, version, copyright, etc., according to the prompts.

Finally, fill in the App Review Information, including demo account credentials (if needed), contact information, etc., as shown below. After completing this, click the "Save" button in the upper right corner to save the information.
![iOS47.png](https://super-apps.ai/mop/document/assets/img/iOS47.02c169ee.jpg)

### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/appstore.html\#_3-upload-the-ipa-package-to-app-store-connect) 3 Upload the ipa Package to App Store Connect

![iOS1.png](https://super-apps.ai/mop/document/assets/img/iOS1.796fc05e.png)

1. The Transporter visual tool can be installed and run on macOS, Windows, and Linux operating systems. After downloading and installing, log in with your developer account to upload the ipa package. Specific usage instructions are omitted here.
2. After the package is uploaded, wait 15 to 30 minutes for it to appear in App Store Connect. If there are code issues with the package, you will receive an email notification during this process. A successful upload will also trigger a confirmation email.

### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/appstore.html\#_4-submit-for-review) 4 Submit for Review

1. After the ipa package is successfully uploaded, you can select the recently uploaded ipa package in the "Build Version" section within App Store Connect, then save the selection, as shown in the image below.
2. Click "Add for Review" to submit the App for review. The next step is to wait for the review process. You will receive email notifications if any issues arise during the review, and also upon successful approval.
3. If you selected manual release, you need to manually click the "Release" button in App Store Connect after the review is approved. If you selected automatic release, no further action is required.
![iOS47.png](https://super-apps.ai/mop/document/assets/img/iOS47.02c169ee.jpg)

[Previous：Local Build Guide](https://super-apps.ai/mop/document/en/develop/developer/convert/local-configuration.html)[Next：Extend SDK Configuration](https://super-apps.ai/mop/document/en/develop/developer/convert/extend-sdk-config.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)