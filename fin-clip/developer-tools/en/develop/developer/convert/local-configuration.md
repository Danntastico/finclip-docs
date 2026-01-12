<!--
Source URL: https://super-apps.ai/mop/document/en/develop/developer/convert/local-configuration.html
Extracted: 2026-01-12T23:16:43.853Z (January 12, 2026)
Title: Local Project File Configuration | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

# [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/local-configuration.html\#local-project-file-configuration) Local Project File Configuration

## [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/local-configuration.html\#_1-ios-project-configuration) 1\. iOS Project Configuration

### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/local-configuration.html\#_1-1-prepare-project) 1.1 Prepare Project

- Install Xcode 12.1 or later
- [Install the latest version of FinClip Studio(opens new window)](https://super-apps.ai/downloads/?activeTab=ide)
- If you need to run and debug on a real device, you need an Apple Developer Account. If you don't have one temporarily, you can use the simulator for debugging

### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/local-configuration.html\#_1-2-configure-project) 1.2 Configure Project

> Open the exported folder from FinClip Studio - ios - project name - project name.xcworkspace, double-click to open
>
> ![WechatIMG1686](https://super-apps.ai/mop/document/assets/img/WechatIMG1686.67894e60.png)

#### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/local-configuration.html\#_1-2-1-basic-app-configuration) 1.2.1 Basic App Configuration

Configure the App's project name, version number, minimum supported Apple OS version, and supported device types.
![WechatIMG1673](https://super-apps.ai/mop/document/assets/img/WechatIMG1673.3a923622.png)

#### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/local-configuration.html\#_1-2-2-app-icon-and-splash-screen) 1.2.2 App Icon and Splash Screen

Configure the App's icon and splash screen images (can be ignored if configured when exporting the App from FinClip Studio. If not configured, the icon will be the system default white icon, and there will be no splash screen).

![WechatIMG1674](https://super-apps.ai/mop/document/assets/img/WechatIMG1674.d351ee7d.png)

![WechatIMG1675](https://super-apps.ai/mop/document/assets/img/WechatIMG1675.a6650b19.png)

![WechatIMG1676](https://super-apps.ai/mop/document/assets/img/WechatIMG1676.b9733695.png)

![WechatIMG1677](https://super-apps.ai/mop/document/assets/img/WechatIMG1677.3e9a10e1.png)

#### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/local-configuration.html\#_1-2-3-app-permissions) 1.2.3 App Permissions

Configure App permissions. Based on the functions used, you can configure the required permissions yourself. For API permissions correspondence, refer to our documentation [FinClip Permission Description](https://super-apps.ai/mop/document/runtime-sdk/ios/ios-integrate.html#_3-%E5%A2%9E%E5%8A%A0%E6%9D%83%E9%99%90%E6%8F%8F%E8%BF%B0)

#### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/local-configuration.html\#_1-2-4-generate-certificates) 1.2.4 Generate Certificates

- iOS Development: iOS development certificate (for real device debugging and testing)
- iOS Distribution: iOS distribution certificate (for App Store submission)

Prerequisites:

1. Must have Apple Developer Program membership to apply for, download, and use Apple-issued signing certificates.
2. Apple computer with macOS installed

##### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/local-configuration.html\#_1-2-4-1-generate-certificate-signing-request-file) 1.2.4.1 Generate Certificate Signing Request File

1. Open "Keychain Access" tool![iOS10.png](https://super-apps.ai/mop/document/assets/img/iOS10.e5ca82fb.jpg)
2. Open menu "Keychain Access"->"Certificate Assistant", select "Request a Certificate from a Certificate Authority...":![iOS11.png](https://super-apps.ai/mop/document/assets/img/iOS11.cd0752ee.jpg)
3. Open certificate request creation page, enter user email address, common name, select "Saved to disk", click "Continue":![iOS12.png](https://super-apps.ai/mop/document/assets/img/iOS12.e9c8f91f.jpg)
4. File name is "CertificateSigningRequest.certSigningRequest", select save location, click "Save" to save the certificate request file to specified path, which will be needed later when applying for Development certificate and Production certificate![iOS13.png](https://super-apps.ai/mop/document/assets/img/iOS13.eea920f8.jpg)
5. You can see the generated request certificate (CertificateSigningRequest.certSigningRequest) at the save location.

##### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/local-configuration.html\#_1-2-4-2-log-in-to-apple-developer-account) 1.2.4.2 Log in to Apple Developer Account

1. Open website [Apple Developer Portal(opens new window)](https://idmsa.apple.com/IDMSWebAuth/signin?appIdKey=891bd3417a7776362562d2197f89480a8547b108fd934911bcbea0110d07f757&path=%2Fdownload%2F&rv=1)
2. Log in to Apple Developer using Apple Developer account![iOS14.png](https://super-apps.ai/mop/document/assets/img/iOS14.d19ab5f4.jpg)
3. After successful login, select "Certificates,IDs & Profiles" on the page to enter certificate management page![iOS15.png](https://super-apps.ai/mop/document/assets/img/iOS15.ab872419.jpg)

##### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/local-configuration.html\#_1-2-4-3-apply-for-apple-app-id-app-s-unique-identifier) 1.2.4.3 Apply for Apple App ID (App's Unique Identifier)

1. Select "Identifiers" on the page to view all applied App identifiers, click the plus sign to create a new app identifier![iOS16.png](https://super-apps.ai/mop/document/assets/img/iOS16.de2d3f8c.jpg)
2. Select identifier type as "App IDs", then click "Continue"![iOS17.png](https://super-apps.ai/mop/document/assets/img/iOS17.6ac8109f.jpg)
3. Select identifier type as "App", then click "Continue" ![iOS18.png](https://super-apps.ai/mop/document/assets/img/iOS18.65cf5931.jpg)
4. Platform select "iOS, tvOS, watchOS", Bundle ID select "Explicit", fill in description in Description, then fill in Bundle ID. Bundle ID must be consistent with the Bundle id of the application applied for in the FinClip backend, otherwise opening Mini-Programs will fail, e.g.: "com.xxxxxxxxx.xxxx", then click "Continue"![iOS19.png](https://super-apps.ai/mop/document/assets/img/iOS19.fcdf88dc.jpg)![iOS20.png](https://super-apps.ai/mop/document/assets/img/iOS20.5b405a17.jpg)
5. After confirmation, select submit, return to identifiers page to see the newly created App ID:

##### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/local-configuration.html\#_1-2-4-3-generate-development-certificate) 1.2.4.3 Generate Development Certificate

> Development certificate and corresponding provisioning profile are used during development phase, allowing direct App installation to phones. One provisioning profile can bind up to 100 test devices (development certificate cannot be used for App Store submission).

###### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/local-configuration.html\#_1-2-4-3-1-apply-for-certificate) 1.2.4.3.1 Apply for Certificate

1. Select "Certificates" in certificate management page to view all applied certificates (TYPE: Development for development certificate, Distribution for distribution certificate), click plus sign to create new certificate:![iOS21.png](https://super-apps.ai/mop/document/assets/img/iOS21.a4bb29b9.jpg)
2. Under "Software" section, select "iOS App Development" then click "Continue":![iOS22.png](https://super-apps.ai/mop/document/assets/img/iOS22.8ca99e04.jpg)
3. Use the certificate request file generated earlier, click "Choose File...", select the locally saved "CertificateSigningRequest.certSigningRequest" file, click "Continue" to generate certificate file:![iOS23.png](https://super-apps.ai/mop/document/assets/img/iOS23.4639fc2e.jpg)
4. After certificate generation, select "Download" to download certificate locally (development.cer):![iOS24.png](https://super-apps.ai/mop/document/assets/img/iOS24.587c7fdb.jpg)
5. Double-click the locally saved development.cer file, will automatically open "Keychain Access" tool indicating successful certificate import. You can see the imported certificate in certificate list. Next need to export .p12 certificate file. Select imported certificate, right-click select "Export xxxxxx":
6. Enter file name, select path, click "Save", enter password and confirm password, click "OK":
7. At this point, we have completed development certificate creation (obtained xxx.p12 certificate file).

###### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/local-configuration.html\#_1-2-4-3-2-add-debug-device) 1.2.4.3.2 Add Debug Device

> Development provisioning profile must bind debug devices. Only authorized devices can directly install App. So before applying for development provisioning profile, first add debug devices. To get UUID, click link [Get Device UDID(opens new window)](https://www.pgyer.com/tools/udid), scan QR code, will prompt to install a profile. After clicking install, device information will display in browser. Long press to copy value under "Device Information UDID", which is the UDID.

1. Select "Devices" in certificate management page to view all added device information, click plus sign to add new device:![iOS25.png](https://super-apps.ai/mop/document/assets/img/iOS25.083c235c.jpg)
2. Fill in device name and UDID (device identifier):![iOS26.png](https://super-apps.ai/mop/document/assets/img/iOS26.c49b61b4.jpg)

###### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/local-configuration.html\#_1-2-4-3-3-apply-for-development-provisioning-profile) 1.2.4.3.3 Apply for Development Provisioning Profile

1. Select "Profiles" in certificate management page to view all applied provisioning profiles, click plus sign to add new provisioning profile:![iOS27.png](https://super-apps.ai/mop/document/assets/img/iOS27.2807545c.jpg)
2. Under "Development" section, select "iOS App Development", click "Continue" button:![iOS28.png](https://super-apps.ai/mop/document/assets/img/iOS28.a60e6847.jpg)
3. Select previously created "App ID", click "Continue":![iOS29.png](https://super-apps.ai/mop/document/assets/img/iOS29.dabbe41a.jpg)
4. Next select certificates to bind, click "Continue":![iOS30.png](https://super-apps.ai/mop/document/assets/img/iOS30.59bbc863.jpg)
5. Select authorized debug devices, recommended to directly check "Select All", click "Continue":![iOS31.png](https://super-apps.ai/mop/document/assets/img/iOS31.8c2b5756.jpg)
6. Enter provisioning profile name (e.g., "xxxxProfile"), click "Generate" to generate provisioning profile:![iOS32.png](https://super-apps.ai/mop/document/assets/img/iOS32.89c10c22.jpg)
7. Click "Download" to download and save development provisioning profile (file extension .mobileprovision)![iOS33.png](https://super-apps.ai/mop/document/assets/img/iOS33.32574024.jpg)
8. At this point, we have obtained development certificate (.p12) and corresponding provisioning profile (.mobileprovision)

##### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/local-configuration.html\#_1-2-4-4-generate-distribution-certificate) 1.2.4.4 Generate Distribution Certificate

> Production certificate is used in official release environment, for App Store submission and review. IPA packaged with distribution certificate cannot be directly installed on phones.

###### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/local-configuration.html\#_1-2-4-4-1-apply-for-distribution-certificate) 1.2.4.4.1 Apply for Distribution Certificate

1. Select "Certificates" in certificate management page to view all applied certificates (TYPE: Development for development certificate, Distribution for distribution certificate), click plus sign to create new certificate:![iOS21.png](https://super-apps.ai/mop/document/assets/img/iOS21.a4bb29b9.jpg)
2. Under "Software" section, select "iOS Distribution(App Store and Ad Hoc)", click "Continue":![iOS34.png](https://super-apps.ai/mop/document/assets/img/iOS34.bbba062c.jpg)
3. Next also need to use previously generated certificate request file, click "Choose File..." to select locally saved "CertificateSigningRequest.certSigningRequest" file, click "Continue" to generate certificate file:![iOS23.png](https://super-apps.ai/mop/document/assets/img/iOS23.4639fc2e.jpg)
4. Certificate generation successful, select "Download" to download certificate locally![iOS35.png](https://super-apps.ai/mop/document/assets/img/iOS35.d3b7d676.jpg)
5. Similarly double-click locally saved ios\_production.cer file to import certificate into "Keychain Access" tool. You can see imported certificate in certificate list. Next need to export .p12 certificate file. Select imported certificate, right-click select "Export
6. Enter file name, select path, click "Save":
7. Enter password and confirm password, click "OK":
8. If prompted for keychain login password, enter current device account password.
9. At this point, we have completed distribution certificate creation (obtained xxx.p12 certificate file). Next, continue to generate distribution provisioning profile.

###### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/local-configuration.html\#_1-2-4-4-2-apply-for-distribution-provisioning-profile) 1.2.4.4.2 Apply for Distribution Provisioning Profile

1. Select "Profiles" in certificate management page to view all applied provisioning profiles, click plus sign to add new provisioning profile:![iOS27.png](https://super-apps.ai/mop/document/assets/img/iOS27.2807545c.jpg)
2. Under "Distribution" section, select "App Store", click "Continue" button:![iOS36.png](https://super-apps.ai/mop/document/assets/img/iOS36.ea6d172b.jpg)
3. Select previously created "App ID", click "Continue":![iOS29.png](https://super-apps.ai/mop/document/assets/img/iOS29.dabbe41a.jpg)
4. Next select distribution certificate to bind (iOS Distribution), check the newly generated distribution certificate, click "Continue":![iOS37.png](https://super-apps.ai/mop/document/assets/img/iOS37.19f5a575.jpg)
5. Next enter provisioning profile name (e.g., "AppProfileDistribution"), click "Generate" to generate provisioning profile:![iOS38.png](https://super-apps.ai/mop/document/assets/img/iOS38.6aecc833.jpg)
6. Then click "Download" to download provisioning profile locally (file extension .mobileprovision)![iOS39.png](https://super-apps.ai/mop/document/assets/img/iOS39.fa2773d8.jpg)
7. At this point, we have obtained distribution certificate (.p12) and corresponding distribution provisioning profile (.mobileprovision).

### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/local-configuration.html\#_1-3-run-project) 1.3 Run Project

Open the exported folder from FinClip Studio - ios - project name - project name.xcworkspace, double-click to open. You can choose to run on simulator or real device.

For simulator run, directly select a simulator and press command+R to run.

![WechatIMG1682](https://super-apps.ai/mop/document/assets/img/WechatIMG1682.96ca6db8.png)

For real device run, configure certificate first then press command+R to run.

![WechatIMG1685](https://super-apps.ai/mop/document/assets/img/WechatIMG1685.d98767da.png)

### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/local-configuration.html\#_1-4-package-and-upload) 1.4 Package and Upload

#### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/local-configuration.html\#_1-4-1-local-ipa-build-and-upload-using-xcode) 1.4.1 Local IPA Build and Upload Using Xcode

After configuring application bundle id, Version, Build, AppIcon, splash screen, permissions, certificates, etc., you can package and upload. In Xcode top menu, click Product-Archive, wait for IPA package export or use Xcode to directly upload IPA package to App Store Connect. If IPA package is exported, need to use Transporter tool for upload.

![iOS1](https://super-apps.ai/mop/document/assets/img/iOS1.796fc05e.png)![iOS2](https://super-apps.ai/mop/document/assets/img/iOS2.fc90876a.png)![iOS3](https://super-apps.ai/mop/document/assets/img/iOS3.68d18531.png)

#### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/local-configuration.html\#_1-4-3-build-and-upload-using-cloud-packaging) 1.4.3 Build and Upload Using Cloud Packaging

When using cloud compilation function to build IPA package, after generating app -> view cloud packaging progress -> build successful, you can download the built IPA file and use Transporter tool for upload. Simply drag the generated IPA file to Transporter tool logged in with developer account.

![11.png](https://super-apps.ai/mop/document/assets/img/11.455da603.png)

## [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/local-configuration.html\#_2-android-project-configuration) 2\. Android Project Configuration

### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/local-configuration.html\#_2-1-prepare-project) 2.1 Prepare Project

- Install Android Studio, download address: [Android Studio Official Website(opens new window)](https://developer.android.google.cn/studio#downloads)

### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/local-configuration.html\#_2-2-configure-project) 2.2 Configure Project

Open exported Android project using Android Studio:

![Android-1](https://super-apps.ai/mop/document/assets/img/Android-1.5247a707.png)

Select open path as: `finclip_demo\android\finclip_demo`

![Android-2](<Base64-Image-Removed>)

First time opening project may take longer, need to wait for Android Studio to automatically download various Android libraries and dependency libraries.

#### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/local-configuration.html\#_2-2-1-app-build-gradle) 2.2.1 app/build.gradle

![Android-3](https://super-apps.ai/mop/document/assets/img/Android-3.08c6a853.png)

![Android-4](https://super-apps.ai/mop/document/assets/img/Android-4.6873e327.png)

#### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/local-configuration.html\#_2-2-2-app-src-main-androidmanifest-xml) 2.2.2 app\\src\\main\\AndroidManifest.xml

You can view the permissions declared by the app, and add or remove as needed.

![Android-5](https://super-apps.ai/mop/document/assets/img/Android-5.97024ed7.png)

#### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/local-configuration.html\#_2-2-3-splash-screen) 2.2.3 Splash Screen

Splash screen configuration images can be replaced with corresponding resolution images as needed.

> Note: If replacing, need to replace all resolution corresponding images.

![Android-6](https://super-apps.ai/mop/document/assets/img/Android-6.42365499.png)

#### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/local-configuration.html\#_2-2-4-app-icon) 2.2.4 App Icon

App icon files, replace with corresponding resolutions as needed.

> Note: If replacing, need to replace all resolution corresponding images.

![Android-7](https://super-apps.ai/mop/document/assets/img/Android-7.5d237888.png)

### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/local-configuration.html\#_2-3-run-project) 2.3 Run Project

#### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/local-configuration.html\#_2-3-1-enable-developer-mode-on-phone) 2.3.1 Enable Developer Mode on Phone

Different phone brands may have different methods, most require clicking version number 5 times consecutively in device details interface.

Then enter Developer Options interface, enable USB debugging. (If USB installation exists, also enable it)

![Android-8](https://super-apps.ai/mop/document/assets/img/Android-8.86eea6f5.png)

Connect phone to computer using USB, phone will pop up debugging authorization window, click Allow.

![Android-9](https://super-apps.ai/mop/document/assets/img/Android-9.36af1322.png)

#### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/local-configuration.html\#_2-3-2-run-application) 2.3.2 Run Application

Finally return to Android Studio, click run icon on top right to directly run debug version application on phone.

![Android-10](<Base64-Image-Removed>)

### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/local-configuration.html\#_2-4-build-release-application) 2.4 Build Release Application

#### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/local-configuration.html\#_2-4-1-build-generate-signed-bundle-apk) 2.4.1 Build -> Generate Signed Bundle/APK

![Android-11](https://super-apps.ai/mop/document/assets/img/Android-11.b4e461ab.png)

#### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/local-configuration.html\#_2-4-2-select-build-apk) 2.4.2 Select Build APK

![Android-12](https://super-apps.ai/mop/document/assets/img/Android-12.cf3c6fd3.png)

#### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/local-configuration.html\#_2-4-3-generate-certificate) 2.4.3 Generate Certificate

Can use AndroidStudio or JDK toolkit to generate certificate, choose one method as needed.

##### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/local-configuration.html\#_2-4-3-1-generate-certificate-using-androidstudio) 2.4.3.1 Generate Certificate Using AndroidStudio

In step 2.4.2 click **Next**, come to following interface, click Create new:

![Android-13](https://super-apps.ai/mop/document/assets/img/Android-13.08135f4c.png)

Fill in certificate related information:

![Android-14](https://super-apps.ai/mop/document/assets/img/Android-14.db86927e.png)

> Note: The PKCS12 keystore we need to generate currently does not support different **alias password** and **certificate password** (the two sets of passwords in above screenshot), so please set these two passwords the same, otherwise will receive error warning.

After filling in, click **OK** button to generate certificate.

##### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/local-configuration.html\#_2-4-3-2-generate-certificate-using-jdk-toolkit) 2.4.3.2 Generate Certificate Using JDK Toolkit

Install JDK environment according to your operating system.

Please choose OpenJDK8 or OpenJDK11, otherwise may cause build failure.

Generate certificate using keytool tool, located in bin directory of your JDK installation directory, e.g.: `D:\jdk-11\bin`.

Following is example generation command:

```sh
D:\jdk-11\bin\keytool -genkey -keyalg RSA -keysize 2048 -dname "cn=名字与姓氏,ou=组织单位名称,o=组织名称,l=城市或区域名称,st=州或省份名称,c=两字母国家代码" -alias 证书别名 -keypass 别名密码 -storepass 证书密码 -validity 36500 -keystore 证书文件路径及名字
```

The certificate information segment `cn=名字与姓氏,ou=组织单位名称,o=组织名称,l=城市或区域名称,st=州或省份名称,c=两字母国家代码` please try to fill at least one, remaining can leave values empty.

> Note: The PKCS12 keystore we need to generate currently does not support different **alias password** and **certificate password**, so please set these two passwords the same, otherwise will receive keytool error warning.

Following is complete generation example:

```sh
D:\jdk-11\bin\keytool -genkey -keyalg RSA -keysize 2048 -dname "cn=,ou=,o=finogeeks,l=,st=,c=" -alias finogeeks -keypass 123456 -storepass 123456 -validity 36500 -keystore D:\keystore.jks
```

Note

- Please keep the generated certificate file safe and remember the password.

- If you cannot install AndroidStudio or JDK toolkit, consider using other third-party online certificate generation websites like [Banana Cloud Compile(opens new window)](https://www.yunedit.com/). We do not provide security guarantee for certificates generated by above third-party websites.


#### [\#](https://super-apps.ai/mop/document/en/develop/developer/convert/local-configuration.html\#_2-4-4-build-application) 2.4.4 Build Application

Return to build window, select certificate and fill in password.

![Android-15](https://super-apps.ai/mop/document/assets/img/Android-15.745568fd.png)

Click Next, select specified APK file output path, select release version, finally click Finish, start building APK.

![Android-16](https://super-apps.ai/mop/document/assets/img/Android-16.1ec5c393.png)

After Android Studio prompts build successful, you can find APK file at location specified in previous step.

![Android-6](<Base64-Image-Removed>)

> Note: The debug application directly run by clicking Android Studio uses default built-in certificate file, which is different from release application, so cannot overwrite install. Need to manually uninstall debug application before installing release application.