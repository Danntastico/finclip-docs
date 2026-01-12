<!--
Source URL: https://super-apps.ai/mop/document/en/develop/developer/convert/convert-app.html
Extracted: 2026-01-12T23:16:39.011Z (January 12, 2026)
Title: Mini-Program to App Generation | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
FinClip Studio](https://super-apps.ai/mop/document/en/develop/developer/convert/convert-app.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Low-code Development](https://super-apps.ai/mop/document/en/develop/developer/convert/convert-app.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
FinClip App](https://super-apps.ai/mop/document/en/develop/developer/convert/convert-app.html) [![](https://super-apps.ai/mop/document/images/arrow_open.svg)\\
Generate App from Mini Program](https://super-apps.ai/mop/document/en/develop/developer/convert/convert-app.html)

- [Introduction and Guide](https://super-apps.ai/mop/document/en/develop/developer/convert/convert-app.html)
- [Local Build Guide](https://super-apps.ai/mop/document/en/develop/developer/convert/local-configuration.html)
- [App Store Submission Guide](https://super-apps.ai/mop/document/en/develop/developer/convert/appstore.html)
- [Extend SDK Configuration](https://super-apps.ai/mop/document/en/develop/developer/convert/extend-sdk-config.html)
- [Common Errors and Solutions](https://super-apps.ai/mop/document/en/develop/developer/convert/convert-log.html)

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Generate HarmonyOS App from Mini Program](https://super-apps.ai/mop/document/en/develop/developer/convert/convert-app.html)

# [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/convert-app.html\#mini-program-to-app-generation) Mini-Program to App Generation

Feature Background

The Mini-Program to App generation feature is an additional function within the Developer Tools, designed to help Mini-Program developers quickly convert existing Mini-Programs into mobile Apps that can be published to app stores or run locally. This significantly reduces development costs and improves development efficiency.

## [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/convert-app.html\#_1-feature-introduction) 1\. Feature Introduction

The Mini-Program to App generation feature assists developers in exporting existing Mini-Program code into installable files (or project files) usable on iOS and Android. Developers no longer need comprehensive mobile application development and packaging skills. By focusing their main efforts on product design and feature implementation within the Mini-Program, they can obtain Apps that are ready for app store submission or direct installation on smartphones and other smart devices.

> Here, the exported iOS and Android applications serve merely as "shell apps" hosting the Mini-Program. The actual business logic and related requests are handled by the Mini-Program. Updates and upgrades for the App can also be managed through the Mini-Program.

Furthermore, users can customize the App's icon, launch splash screen, URL Scheme, permissions, and other elements to meet more diverse usage requirements.

## [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/convert-app.html\#_2-operation-instructions) 2\. Operation Instructions

Users can generate an App from a Mini-Program by following these steps:

1. Configure App-related settings
2. Generate the App package

### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/convert-app.html\#_2-1-configure-app-related-settings) 2.1 Configure App-Related Settings

You can access the relevant functions via the "Generate App" menu in the upper right corner of the interface.

Please Note

Due to packaging and compilation constraints, all items configured in the "App Configuration" section can only be generated in "Cloud Packaging" projects. If you ultimately use the "Local Compilation" type, you will need to configure these settings yourself.

![image.png](https://super-apps.ai/mop/document/assets/img/app-configuration.5f56b9a1.png)
Click Developer Tools Menu Bar -> Generate App -> Generate App Configuration to configure the relevant content.

#### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/convert-app.html\#_2-1-1-app-basic-configuration) 2.1.1 App Basic Configuration

App Basic Configuration: Configure the application name, application App version number, and application build version number for the app to be packaged.

- The App version number should follow the x.y.z format.

- The application build version number is generated automatically.


![image.png](https://super-apps.ai/mop/document/assets/img/app-info.519230b3.png)

#### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/convert-app.html\#_2-1-2-app-icon-configuration) 2.1.2 App Icon Configuration

App Icon Configuration is divided into two modes: Simple Mode and Custom Mode.
![image.png](https://super-apps.ai/mop/document/assets/img/app-imgConfiguration.2e53abb5.png)

- **Simple Mode**, as shown above, requires the developer to configure only one icon image (1024 \* 1024, PNG format). The Developer Tools will automatically generate the required images for both iOS and Android platforms.

![image.png](https://super-apps.ai/mop/document/assets/img/app-imgConfiguration2.2ef74c72.png)

- **Custom Mode**, as shown above, requires the developer to configure multiple images according to their needs:

  - iOS requires configuring icon images for both iPhone and iPad (1024×1024, PNG format).
  - Android requires configuring icon images of sizes 48×48, 72×72, 96×96, 144×144, and 192×192 (PNG format).

#### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/convert-app.html\#_2-1-3-launch-splash-screen-configuration) 2.1.3 Launch Splash Screen Configuration

The launch splash screen is the loading image displayed when opening the App. Developers need to upload images of the appropriate dimensions for the iOS and Android platforms.
![image.png](https://super-apps.ai/mop/document/assets/img/startup-splash.63e18ea7.png)

#### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/convert-app.html\#_2-1-4-url-scheme-configuration) 2.1.4 URL Scheme Configuration

The App URL Scheme serves as identification information for inter-app invocation, allowing you to open the App via channels like push notifications. Currently, both iOS and Android support configuration of only one URL Scheme.
![image.png](https://super-apps.ai/mop/document/assets/img/url-scheme.c8b37798.png)

#### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/convert-app.html\#_2-1-5-permission-configuration) 2.1.5 Permission Configuration

This section includes two parts: User Privacy Agreement Configuration and Permission Configuration:

**User Privacy Configuration:**

When checked, the privacy configuration will be displayed upon the first launch of the App. The corresponding settings need to be configured in "Management Console - Mini-Program Details - Privacy Settings".

**Permission Configuration:**

When publishing the App to an app store, it is necessary to configure the required usage permissions beforehand. The currently supported configurable permissions are as follows:

![image.png](https://super-apps.ai/mop/document/assets/img/permission.4bfe9cea.png)

TIP

For the iOS side, users need to fill in descriptions explaining the purpose/usage of each permission. Due to review requirements, descriptions are mandatory for Photo Library Access, Camera Usage, Location Access, and Microphone Usage. Descriptions for other non-mandatory items are optional; if left blank, the permission will not be enabled by default.

- **iOS Side:**
  - Photo Library Access
  - Camera Usage
  - Location Access
  - Microphone Usage
  - Bluetooth Usage (This permission is only required when using the extended Bluetooth SDK)
- **Android Side:**
  - Location-related permissions:
    - ACCESS\_COARSE\_LOCATION
    - ACCESS\_FINE\_LOCATION
  - Camera-related permissions:
    - CAMERA
  - I/O related permissions:
    - READ\_EXTERNAL\_STORAGE
    - WRITE\_EXTERNAL\_STORAGE
  - Microphone-related permissions:
    - RECORD\_AUDIO

#### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/convert-app.html\#_2-1-6-third-party-sdk-configuration) 2.1.6 Third-party SDK Configuration

Refer to [Extension SDK Parameter Configuration](https://super-apps.ai/mop/document/develop/developer/convert/extend-sdk-config.html)

### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/convert-app.html\#_2-2-generate-app-package) 2.2 Generate App Package

The Developer Tools currently provide two methods for generating Apps:

1. Cloud Packaging (Recommended option, uses FinClip service to convert Mini-Program to App, no local compilation required)
2. Local Compilation (Recommended for users with development experience, requires local compilation)

If you do not have experience in mobile App development, please select the "Cloud Packaging" option. This feature requires logging in to use.

#### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/convert-app.html\#_2-2-1-preparation) 2.2.1 Preparation

Before packaging the App, some preparatory work is needed, as detailed below:

- The user needs to have a Mini-Program package ready for packaging and a FinClip SaaS account. If not, refer to: [Platform Registration](https://super-apps.ai/mop/document/introduce/cloud/accessguide_zh/shiyongzhiyin/cloudshiyong_saas.html#_2-%E6%96%B0%E7%94%A8%E6%88%B7%E6%B3%A8%E5%86%8C).
- Create a Mini-Program on the SaaS platform and upload the Mini-Program via the Developer Tools. Refer to: [Creating a Mini-Program](https://super-apps.ai/mop/document/introduce/cloud/accessguide_zh/shiyongzhiyin/cloudshiyong_saas.html#_4-%E5%88%9B%E5%BB%BA%E5%B0%8F%E7%A8%8B%E5%BA%8F).
- After uploading the Mini-Program code package, submit the Mini-Program for review and publishing. Refer to: [Mini-Program Review and Publishing](https://super-apps.ai/mop/document/introduce/cloud/accessguide_zh/shiyongzhiyin/cloudshiyong_saas.html#_6-%E5%B0%8F%E7%A8%8B%E5%BA%8F%E5%AE%A1%E6%A0%B8%E4%B8%8E%E4%B8%8A%E4%B8%8B%E6%9E%B6). At this point, you have a published Mini-Program. Remember the AppId of this Mini-Program, as it will be used later.
- Configure the associated application, add a bundleId, and associate the Mini-Program. Refer to [Associating Applications and bundleId](https://super-apps.ai/mop/document/introduce/cloud/accessguide_zh/shiyongzhiyincloudshiyong_saas.html#_7-%E5%85%B3%E8%81%94%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%B8%8E%E5%AE%BF%E4%B8%BB%E5%BA%94%E7%94%A8). In the step for associating the Mini-Program, associate the published Mini-Program mentioned above. Remember the newly added bundleId, as it will be useful later.

With this, the preparation work is complete. Now proceed with App packaging.

#### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/convert-app.html\#_2-2-2-cloud-packaging) 2.2.2 Cloud Packaging

Cloud Packaging requires completing the following steps sequentially:
**Step 1: Configure Mini-Program Information**![image.png](https://super-apps.ai/mop/document/assets/img/applet-information.18ba617e.png) **Step 2: Select Associated Application and BundleID**![image.png](https://super-apps.ai/mop/document/assets/img/application-bundleID.8d7b0a58.png) **Step 3: Upload Packaging Certificates**
Since there is a one-to-one correspondence between certificates and BundleIDs, the required certificates need to be uploaded.
![image.png](https://super-apps.ai/mop/document/assets/img/upload.9792b1e5.png)

| iOS Certificates | Android Certificates |
| --- | --- |
| Refer to [iOS Certificate Configuration](https://super-apps.ai/mop/document/develop/developer/convert/local-configuration.html#_1-2-4-%E7%94%9F%E6%88%90%E8%AF%81%E4%B9%A6) to configure, export, and upload certificates for Production and Development environments, along with certificate passwords and provisioning profiles. | Refer to [Building Android Applications](https://super-apps.ai/mop/document/develop/developer/convert/local-configuration.html#_2-4-%E6%9E%84%E5%BB%BA%E6%AD%A3%E5%BC%8F%E5%BA%94%E7%94%A8), certificate private key (Key password), and file private key (Key store password). |

Note

If errors like `Algorithm HmacPBESHA256 not available` occur when packaging an Android application, it is usually due to a high JDK version used to generate the certificate. Please use OpenJDK8 or OpenJDK11 to generate the certificates used for building the Android application.

**Step 4: Submit Cloud Packaging Task**![image.png](https://super-apps.ai/mop/document/assets/img/submit-service.2bc98869.png) **Step 5: Check Packaging Task Progress and Download Installation Package**
Click "Download Installation Package" on the right to obtain the corresponding installation file.
![image.png](https://super-apps.ai/mop/document/assets/img/download.b38c3247.png)

#### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/convert-app.html\#_2-2-3-local-compilation-export-project-files) 2.2.3 Local Compilation (Export Project Files)

**Step 1: Configure Mini-Program Information**![image.png](https://super-apps.ai/mop/document/assets/img/config-info.18ba617e.png)

**Step 2: Select Associated Application and BundleID**![image.png](https://super-apps.ai/mop/document/assets/img/select.8d7b0a58.png)

**Step 3: Configure Export Directory**![image.png](https://super-apps.ai/mop/document/assets/img/export-catalog.4f080906.png)

**Step 4: Export Successful**![image.png](https://super-apps.ai/mop/document/assets/img/export-success.50107289.png)

### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/convert-app.html\#_2-3-local-project-configuration) 2.3 Local Project Configuration

For local project file configuration, see [Local Project File Configuration](https://super-apps.ai/mop/document/develop/developer/convert/local-configuration.html)

[Previous：FinClip App Changelog](https://super-apps.ai/mop/document/en/introduce/update/fino-update-log.html)[Next：Local Build Guide](https://super-apps.ai/mop/document/en/develop/developer/convert/local-configuration.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)