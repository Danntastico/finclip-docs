<!--
Source URL: https://super-apps.ai/mop/document/en/develop/api/basic.html
Extracted: 2026-01-12T23:11:38.185Z (January 12, 2026)
Title: Basic | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
API Overview](https://super-apps.ai/mop/document/en/develop/api/overview.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Basic](https://super-apps.ai/mop/document/en/develop/api/basic.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Routing](https://super-apps.ai/mop/document/en/develop/api/route.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Navigation](https://super-apps.ai/mop/document/en/develop/api/navigate.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Forwarding](https://super-apps.ai/mop/document/en/develop/api/forward.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Interface](https://super-apps.ai/mop/document/en/develop/api/interface.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Network](https://super-apps.ai/mop/document/en/develop/api/network.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Data Cache](https://super-apps.ai/mop/document/en/develop/api/storage.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Media](https://super-apps.ai/mop/document/en/develop/api/media.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Map](https://super-apps.ai/mop/document/en/develop/api/map.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Location](https://super-apps.ai/mop/document/en/develop/api/location.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
File](https://super-apps.ai/mop/document/en/develop/api/file.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Device](https://super-apps.ai/mop/document/en/develop/api/device.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Canvas](https://super-apps.ai/mop/document/en/develop/api/canvas.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Worker (Beta)](https://super-apps.ai/mop/document/en/develop/api/worker.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
FXML](https://super-apps.ai/mop/document/en/develop/api/fxml.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Custom Menu](https://super-apps.ai/mop/document/en/develop/api/custom-menu.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Other](https://super-apps.ai/mop/document/en/develop/api/other.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Cloud Development](https://super-apps.ai/mop/document/en/develop/api/cloud.html)

# [\#](https://super-apps.ai/mop/document/en/develop/api/basic.html\#basic) Basic

## [\#](https://super-apps.ai/mop/document/en/develop/api/basic.html\#env) env

**ft.env**

Environment variables

**Properties**

**string USER\_DATA\_PATH**

User directory path in the file system (local path)

## [\#](https://super-apps.ai/mop/document/en/develop/api/basic.html\#caniuse) canIUse

**boolean ft.canIUse(string schema)**

Determines whether the Mini-Program's APIs, callbacks, parameters, components, etc., are available in the current version.

**Parameters**

**string schema**

Use `${API}.${method}.${param}.${option}` or `${component}.${attribute}.${option}` format to make the call.

**Return Value**

**boolean**

Whether it is available in the current version.

**Parameter Description**

- `${API}` represents the API name
- `${method}` represents the invocation method, valid values are return, success, object, callback
- `${param}` represents the parameter or return value
- `${option}` represents the optional value of the parameter or the property of the return value
- `${component}` represents the component name
- `${attribute}` represents the component attribute
- `${option}` represents the optional value of the component attribute

**Sample Code**

```js
// Properties or methods of objects
ft.canIUse('console.log')
ft.canIUse('CameraContext.onCameraFrame')
ft.canIUse('CameraFrameListener.start')
ft.canIUse('Image.src')

// ft interface parameters, callbacks, or return values
ft.canIUse('openBluetoothAdapter')
ft.canIUse('getSystemInfoSync.return.safeArea.left')
ft.canIUse('getSystemInfo.success.screenWidth')
ft.canIUse('showToast.object.image')
ft.canIUse('onCompassChange.callback.direction')
ft.canIUse('request.object.method.GET')

// Component properties
ft.canIUse('live-player')
ft.canIUse('text.selectable')
ft.canIUse('button.open-type.contact')

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/api/basic.html\#base64toarraybuffer) base64ToArrayBuffer

**ArrayBuffer ft.base64ToArrayBuffer(string base64)**

Converts a Base64 string into an ArrayBuffer object.

**Parameters**

**string base64**

The Base64 string to be converted into an ArrayBuffer object.

**Return Value**

**ArrayBuffer**

ArrayBuffer object.

**Sample Code**

```javascript
const base64 = 'CxYh'
const arrayBuffer = ft.base64ToArrayBuffer(base64)

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/api/basic.html\#arraybuffertobase64) arrayBufferToBase64

**string ft.arrayBufferToBase64(ArrayBuffer arrayBuffer)**

Converts an ArrayBuffer object into a Base64 string.

**Parameters**

**ArrayBuffer arrayBuffer**

The ArrayBuffer object to be converted into a Base64 string.

**Return Value**

**string**

Base64 string.

**Sample Code**

```javascript
const arrayBuffer = new Uint8Array([11, 22, 33])
const base64 = ft.arrayBufferToBase64(arrayBuffer)

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/api/basic.html\#base64totempfilepath) base64ToTempFilePath

**base64ToTempFilePath(Object object)**

Saves the base64 data of an image to the local sandbox and returns the local cache path.

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| x | number | 0 | No | The x-coordinate of the top-left corner of the area to be cropped |
| y | number | 0 | No | The y-coordinate of the top-left corner of the area to be cropped |
| width | number | canvas width - x | No | The width of the area to be cropped |
| height | number | canvas height - y | No | The height of the area to be cropped |
| destWidth | number | width x screen pixel density | No | The width of the output image |
| destHeight | number | height x screen pixel density | No | The height of the output image |
| base64Data | string |  | Yes | The Base64 type string that the image has been converted into |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function for when the API call ends (executed regardless of success or failure) |

**object.success Callback Function**

**Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| tempFilePath | string | Local address of the image |

## [\#](https://super-apps.ai/mop/document/en/develop/api/basic.html\#filetobase64) fileToBase64

**fileToBase64(Object object)**

Converts a file into a Base64 string.

**Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| url | string | File address |
| success | function |  |
| fail | function |  |
| complete | function |  |

**object.success Callback Function**

**Parameters**

| Property | Type | Description |
| --- | --- | --- |
| data | string | Converted Base64 data |

**Sample Code**

```javascript
ft.fileToBase64({
  url: '', // Image path
  success(res) {
    console.log(res)
  }
})

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/api/basic.html\#system) System

### [\#](https://super-apps.ai/mop/document/en/develop/api/basic.html\#getsysteminfosync) getSystemInfoSync

**getSystemInfoSync()**

The synchronous version of getSystemInfo.

### [\#](https://super-apps.ai/mop/document/en/develop/api/basic.html\#getsysteminfoasync) getSystemInfoAsync

**ft.getSystemInfoAsync(Object object)**

Asynchronously retrieves system information.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function for when the API call ends (executed regardless of success or failure) |

**object.success Callback Function**

**Parameters**

**Object res**

| Property | Type | Description | Minimum Version |
| --- | --- | --- | --- |
| brand | string | Device brand | 1.5.0 |
| model | string | Device model; new models may display as unknown for some time after release, with subsequent adaptation |  |
| pixelRatio | number | Device pixel ratio |  |
| screenWidth | number | Screen width, in px | 1.1.0 |
| screenHeight | number | Screen height, in px | 1.1.0 |
| windowWidth | number | Usable window width, in px |  |
| windowHeight | number | Usable window height, in px |  |
| statusBarHeight | number | Status bar height, in px | 1.9.0 |
| fontSizeSetting | number | Font setting, in px | 3.0.0 |
| navBarHeight | number | Navigation bar height, in px; not present in development tools | 3.0.0 |
| tabBarHeight | number | TabBar height, in px; not present in development tools | 3.0.0 |
| language | string | Language set in the device system |  |
| version | string | WeChat version 8.0.28 or declaration in app.json |  |
| system | string | Operating system and version |  |
| platform | string | Client platform |  |
| SDKVersion | string | WeChat Base Library version 2.26.0 or declaration in app.json | 1.1.0 |
| safeArea | Object | Safe area in portrait orientation | 2.7.0 |
| theme | string | Current system theme, values are `light` or `dark`; only accessible if "darkmode":true is globally configured, otherwise undefined (not supported in mini-games) | 2.11.0 |
| enableDebug | boolean | Whether debugging is enabled. Can be enabled via the top-right menu or ft.setEnableDebug | 2.15.0 |
| deviceOrientation | string | Device orientation |  |
| appVersion | string | Host-App version number |  |
| runtimeSDKVersion | string | Host-App integrated SDK version number |  |
| bundleId | string | Host-App's bundleId |  |
| deviceId | string | Unique identifier of the device |  |
| inFinChat | string | Whether it is a FinClip environment |  |
| frameworkVersion | string | Actual Base Library version |  |

**safeArea Structure**

| Property | Type | Description |
| --- | --- | --- |
| left | number | X-coordinate of the top-left corner of the safe area |
| right | number | X-coordinate of the bottom-right corner of the safe area |
| top | number | Y-coordinate of the top-left corner of the safe area |
| bottom | number | Y-coordinate of the bottom-right corner of the safe area |
| width | number | Width of the safe area, in logical pixels |
| height | number | Height of the safe area, in logical pixels |

**Valid Values for theme**

| Value | Description | Minimum Version |
| --- | --- | --- |
| dark | Dark Theme |  |
| light | Light Theme |  |

**Valid Values for deviceOrientation**

| Value | Description | Minimum Version |
| --- | --- | --- |
| portrait | Portrait |  |
| landscape | Landscape |  |

**Sample Code**

Preview the effect in the Developer Tools

```js
ft.getSystemInfoAsync({
  success(res) {
    console.log(res.model)
    console.log(res.pixelRatio)
    console.log(res.windowWidth)
    console.log(res.windowHeight)
    console.log(res.language)
    console.log(res.version)
    console.log(res.platform)
  }
})
// Add a new field configuration in app.json
// compatibility: {
//   systemInfo: {
//     SDKVersion: xxxx, The parameters returned by this interface correspond to this SDKVersion
//     version: xxxx  The parameters returned by this interface correspond to this version
//   }
// }

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/api/basic.html\#getsysteminfo) getSystemInfo

**getSystemInfo(Object object)**

Get system information.

**Parameters**

Object object

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function when API call ends (executed on both success and failure) |

**Callback Function for object.success**
​
**Parameters**

**Object res**

| Property | Type | Description | Minimum Version |
| --- | --- | --- | --- |
| brand | string | Device brand | 1.5.0 |
| model | string | Device model; new models may display as unknown for a period before being adapted |  |
| pixelRatio | number | Device pixel ratio |  |
| screenWidth | number | Screen width, in px | 1.1.0 |
| screenHeight | number | Screen height, in px | 1.1.0 |
| windowWidth | number | Usable window width, in px |  |
| windowHeight | number | Usable window height, in px |  |
| statusBarHeight | number | Status bar height, in px | 1.9.0 |
| fontSizeSetting | number | Font size setting, in px | 3.0.0 |
| navBarHeight | number | Navigation bar height, in px; not available in developer tools | 3.0.0 |
| tabBarHeight | number | TabBar height, in px; not available in developer tools | 3.0.0 |
| language | string | System language |  |
| version | string | WeChat version 8.0.28 or declaration in app.json |  |
| system | string | Operating system and version |  |
| platform | string | Client platform |  |
| SDKVersion | string | WeChat Base Library version 2.26.0 or declaration in app.json | 1.1.0 |
| safeArea | Object | Safe area in portrait orientation | 2.7.0 |
| theme | string | Current system theme, values are `light` or `dark`; only available if "darkmode":true is globally configured, otherwise undefined (not supported in Mini-Games) | 2.11.0 |
| enableDebug | boolean | Whether debugging is enabled; can be enabled via top-right menu or ft.setEnableDebug | 2.15.0 |
| deviceOrientation | string | Device orientation |  |
| appVersion | string | Host-App version |  |
| runtimeSDKVersion | string | SDK version integrated into Host-App |  |
| bundleId | string | Host-App's bundleId |  |
| deviceId | string | Unique device identifier |  |
| inFinChat | string | Whether it is a FinClip environment |  |
| frameworkVersion | string | Actual Base Library version |  |

**Sample Code**

```javascript
ft.getSystemInfo({
  success(res) {
    console.log(res.model)
    console.log(res.pixelRatio)
    console.log(res.windowWidth)
    console.log(res.windowHeight)
    console.log(res.language)
    console.log(res.version)
    console.log(res.platform)
  }
})
// Add a new field configuration in app.json
// compatibility: {
//   systemInfo: {
//     SDKVersion: xxxx, The parameters returned by this interface correspond to this SDKVersion
//     version: xxxx  The parameters returned by this interface correspond to this version
//   }
// }

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/api/basic.html\#opensystembluetoothsetting) openSystemBluetoothSetting

> Supported from Base Library 3.0.45, Android SDK 2.40.11 onwards

**openSystemBluetoothSetting(Object object)**

Jump to the system Bluetooth settings page. Only supports Android.

**Parameters**

Object object

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function when API call ends (executed on both success and failure) |

**Sample Code**

```javascript
ft.openSystemBluetoothSetting({
  success (res) {
    console.log(res)
  }
})

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/api/basic.html\#openappauthorizesetting) openAppAuthorizeSetting

> Supported from Base Library 3.0.45, iOS SDK 2.40.11, Android SDK 2.40.11 onwards

**openAppAuthorizeSetting(Object object)**

Jump to the system authorization management page.

**Parameters**

Object object

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function when API call ends (executed on both success and failure) |

**Sample Code**

```javascript
ft.openAppAuthorizeSetting({
  success (res) {
    console.log(res)
  }
})

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/api/basic.html\#getwindowinfo) getWindowInfo

> Supported from Base Library 3.0.45, iOS SDK 2.40.11, Android SDK 2.40.11 onwards

**getWindowInfo(Object object)**

Get window information.

**Parameters**

**Object res**

| Property | Type | Description | Minimum Version |
| --- | --- | --- | --- |
| pixelRatio | number | Device pixel ratio |  |
| screenWidth | number | Screen width, in px |  |
| screenHeight | number | Screen height, in px |  |
| windowWidth | number | Usable window width, in px |  |
| windowHeight | number | Usable window height, in px |  |
| statusBarHeight | number | Status bar height, in px |  |
| safeArea | Object | Safe area in portrait orientation |  |
| screenTop | number | Y-coordinate of the top edge of the window |  |

**Sample Code**

```javascript
const windowInfo = ft.getWindowInfo()

console.log(windowInfo.pixelRatio)
console.log(windowInfo.screenWidth)
console.log(windowInfo.screenHeight)
console.log(windowInfo.windowWidth)
console.log(windowInfo.windowHeight)
console.log(windowInfo.statusBarHeight)
console.log(windowInfo.safeArea)
console.log(windowInfo.screenTop)

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/api/basic.html\#getsystemsetting) getSystemSetting

> Supported from Base Library 3.0.45, iOS SDK 2.40.11, Android SDK 2.40.11 onwards

**getSystemSetting(Object object)**

Get device settings.

**Parameters**

**Object res**

| Property | Type | Description | Minimum Version |
| --- | --- | --- | --- |
| locationEnabled | boolean | System switch for location services |  |
| wifiEnabled | boolean | System switch for Wi-Fi |  |
| deviceOrientation | string | Device orientation |  |
| bluetoothEnabled | boolean | System switch for Bluetooth (iOS requires integration of FinAppletBLE SDK to take effect) | iOS >= 13.1; SDK >= 2.41.13 |

**Sample Code**

```javascript
const systemSetting = ft.getSystemSetting()

console.log(systemSetting.bluetoothEnabled)
console.log(systemSetting.deviceOrientation)
console.log(systemSetting.locationEnabled)
console.log(systemSetting.wifiEnabled)

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/api/basic.html\#getrendereruseragent) getRendererUserAgent

> Supported from Base Library 3.0.45, iOS SDK 2.40.11, Android SDK 2.40.11 onwards

**getRendererUserAgent()**

Get the UserAgent for Webview Mini-Programs.

**Parameters**

**string userAgent**

**Sample Code**

```javascript
ft.getRendererUserAgent({
  success(res) { console.log(res) }
})

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/api/basic.html\#getdeviceinfo) getDeviceInfo

> Supported from Base Library 3.0.45, iOS SDK 2.40.11, and Android SDK 2.40.11 onwards.

**getDeviceInfo()**

Retrieves basic device information.

**Parameters**

**Object res**

| Property | Type | Description | Minimum Version |
| --- | --- | --- | --- |
| abi | string | Application Binary Interface (ABI) type (Android only) |  |
| deviceAbi | string | Device Binary Interface (ABI) type (Android only) |  |
| benchmarkLevel | number | Device performance level (Android only). Possible values: -2 or 0 (device cannot run mini-games), -1 (performance unknown), >=1 (performance value; higher values indicate better performance, currently not exceeding 50) | Not supported |
| brand | string | Device brand |  |
| model | string | Device model. New models may display as "unknown" for a period of time after release |  |
| system | string | Operating system and version |  |
| platform | string | Client platform |  |
| cpuType | string | Device CPU model (Android only) (Tip: GPU model can be retrieved using WebGLRenderingContext.getExtension('WEBGL\_debug\_renderer\_info')) |  |
| memorySize | string | Device memory size in MB |  |

**Sample Code**

```javascript
const deviceInfo = ft.getDeviceInfo()

console.log(deviceInfo.abi)
console.log(deviceInfo.benchmarkLevel)
console.log(deviceInfo.brand)
console.log(deviceInfo.model)
console.log(deviceInfo.platform)
console.log(deviceInfo.system)

        Code copied

```

Please Note

The following parameters are currently unsupported:

| Name | Functionality Description |
| --- | --- |
| benchmarkLevel | Device performance level (Android only). Possible values: -2 or 0 (device cannot run mini-games), -1 (performance unknown), >=1 (performance value; higher values indicate better performance, currently not exceeding 50) |

### [\#](https://super-apps.ai/mop/document/en/develop/api/basic.html\#getappbaseinfo) getAppBaseInfo

> Supported from Base Library 3.0.45, iOS SDK 2.40.11, and Android SDK 2.40.11 onwards.

**getAppBaseInfo()**

Retrieves basic APP information.

**Parameters**

**Object res**

| Property | Type | Description | Minimum Version |
| --- | --- | --- | --- |
| SDKVersion | string | WeChat Base Library version number 2.26.0 or the declaration in app.json |  |
| enableDebug | boolean | Whether debugging is enabled. Can be enabled via the top-right menu or ft.setEnableDebug. |  |
| host | Object | The Host Environment where the Mini-Program is currently running | Not supported |
| language | string | System language setting |  |
| version | string | WeChat version number 8.0.28 or the declaration in app.json |  |
| theme | string | Current system theme, either `light` or `dark`. Only available when `"darkmode":true` is set globally in configuration; otherwise, it will be undefined (not supported in mini-games). |  |

**Sample Code**

```javascript
const appBaseInfo = ft.getAppBaseInfo()

console.log(appBaseInfo.SDKVersion)
console.log(appBaseInfo.enableDebug)
console.log(appBaseInfo.host)
console.log(appBaseInfo.language)
console.log(appBaseInfo.version)
console.log(appBaseInfo.theme)

// Add a new field configuration to app.json
// compatibility: {
//   systemInfo: {
//     SDKVersion: xxxx,  The parameter returned by this API corresponds to this SDKVersion
//     version: xxxx      The parameter returned by this API corresponds to this version
//   }
// }

        Code copied

```

Please Note

The following parameters are currently unsupported:

| Name | Functionality Description |
| --- | --- |
| host | The Host Environment where the Mini-Program is currently running |

### [\#](https://super-apps.ai/mop/document/en/develop/api/basic.html\#getappauthorizesetting) getAppAuthorizeSetting

> Supported from Base Library 3.0.45, iOS SDK 2.40.11, and Android SDK 2.40.11 onwards.

**getAppAuthorizeSetting()**

Retrieves APP authorization settings.

**Parameters**

**Object res**

| Property | Type | Description | Minimum Version |
| --- | --- | --- | --- |
| albumAuthorized | 'authorized'/'denied'/'not determined' | Switch to allow access to the photo album (iOS only) |  |
| cameraAuthorized | 'authorized'/'denied'/'not determined' | Switch to allow access to the camera |  |
| locationAuthorized | 'authorized'/'denied'/'not determined' | Switch to allow access to location services |  |
| locationReducedAccuracy | boolean | Location accuracy. `true` indicates reduced accuracy, `false` indicates precise accuracy (iOS only) |  |
| microphoneAuthorized | 'authorized'/'denied'/'not determined' | Switch to allow access to the microphone |  |
| notificationAuthorized | 'authorized'/'denied'/'not determined' | Switch to allow notifications |  |
| notificationAlertAuthorized | 'authorized'/'denied'/'not determined' | Switch to allow notifications with alerts (iOS only) |  |
| notificationBadgeAuthorized | 'authorized'/'denied'/'not determined' | Switch to allow notifications with badges (iOS only) |  |
| notificationSoundAuthorized | 'authorized'/'denied'/'not determined' | Switch to allow notifications with sound (iOS only) |  |
| phoneCalendarAuthorized | 'authorized'/'denied'/'not determined' | Switch to allow reading and writing to the calendar |  |
| bluetoothAuthorized | 'authorized'/'denied'/'not determined' | Switch to allow Bluetooth usage (iOS only, requires integration of FinAppletBLE SDK) | iOS >= 13.1; SDK >= 2.41.13 |

**Sample Code**

```javascript
const appAuthorizeSetting = ft.getAppAuthorizeSetting()

console.log(appAuthorizeSetting.albumAuthorized)
console.log(appAuthorizeSetting.cameraAuthorized)
console.log(appAuthorizeSetting.locationAuthorized)
console.log(appAuthorizeSetting.locationReducedAccuracy)
console.log(appAuthorizeSetting.microphoneAuthorized)
console.log(appAuthorizeSetting.notificationAlertAuthorized)
console.log(appAuthorizeSetting.notificationAuthorized)
console.log(appAuthorizeSetting.notificationBadgeAuthorized)
console.log(appAuthorizeSetting.notificationSoundAuthorized)
console.log(appAuthorizeSetting.phoneCalendarAuthorized)
console.log(appAuthorizeSetting.bluetoothAuthorized)

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/api/basic.html\#updates) Updates

### [\#](https://super-apps.ai/mop/document/en/develop/api/basic.html\#getupdatemanager) getUpdateManager

Retrieves the globally unique update manager for managing Mini-Program updates. Returns UpdateManager.

**UpdateManager Methods**

UpdateManager.applyUpdate() Forces the Mini-Program to restart and use the new version. Call this after the new version has been downloaded (i.e., after receiving the onUpdateReady callback).

UpdateManager.onCheckForUpdate(function callback) Listens for events that check for updates from the backend. The SDK automatically checks for updates when the Mini-Program cold starts, so no developer action is required.

UpdateManager.onUpdateReady(function callback) Listens for events indicating that a new version of the Mini-Program is available. The client triggers the download automatically (no developer action needed), and the callback is invoked upon successful download.

UpdateManager.onUpdateFailed(function callback) Listens for events indicating that the Mini-Program update failed. If a new version is available, the client triggers the download automatically (no developer action needed), and the callback is invoked if the download fails (e.g., due to network issues).

**Sample Code**

```javascript
const updateManager = ft.getUpdateManager()

updateManager.onCheckForUpdate(function(res) {
  // Callback after checking for new version information
  console.log(res.hasUpdate)
})

updateManager.onUpdateReady(function() {
  ft.showModal({
    title: 'Update Prompt',
    content: 'A new version is ready. Restart the application?',
    success: function(res) {
      if (res.confirm) {
        // The new version has been downloaded. Call applyUpdate to apply the new version and restart.
        updateManager.applyUpdate()
      }
    }
  })
})

updateManager.onUpdateFailed(function() {
  // New version download failed
})

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/api/basic.html\#mini-program) Mini-Program

### [\#](https://super-apps.ai/mop/document/en/develop/api/basic.html\#getlaunchoptionssync) getLaunchOptionsSync

**Object ft.getLaunchOptionsSync()**

Retrieves the parameters used when launching the Mini-Program. These parameters are consistent with the callback parameters of `App.onLaunch`.

**Return Value**

**Object**

Launch parameters

| Property | Type | Description |
| --- | --- | --- |
| path | string | Path used to launch the Mini-Program (code package path) |
| query | Object | Query parameters used to launch the Mini-Program |
| referrerInfo | Object | Referrer information |

**Structure of referrerInfo**

| Property | Type | Description |
| --- | --- | --- |
| appId | string | AppId of the Mini-Program |
| extraData | Object | Data passed from the source Mini-Program |

### [\#](https://super-apps.ai/mop/document/en/develop/api/basic.html\#getenteroptionssync) getEnterOptionsSync

**Object ft.getEnterOptionsSync()**

Retrieves the parameters used during this Mini-Program launch. If it's a cold start, the return value is consistent with the callback parameters of `App.onLaunch`; if it's a hot start, the return value is consistent with `App.onShow`.

**Return Value**

**Object**

Launch parameters

| Property | Type | Description |
| --- | --- | --- |
| path | string | Path used to launch the Mini-Program (code package path) |
| query | Object | Query parameters used to launch the Mini-Program |
| referrerInfo | Object | Referrer information |

**Structure of referrerInfo**

| Property | Type | Description |
| --- | --- | --- |
| appId | string | The appId of the Mini-Program |
| extraData | Object | Data passed from the source Mini-Program |

### [\#](https://super-apps.ai/mop/document/en/develop/api/basic.html\#onpagenotfound) onPageNotFound

**ft.onPageNotFound(function callback)**

Listens for the event when a non-existent page in the Mini-Program is attempted to be opened. This event has the same callback timing as `App.onPageNotFound`.

**Parameters**

**function callback**

Callback function for the event when a non-existent page in the Mini-Program is attempted to be opened.

**Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| path | string | Path of the non-existent page (code package path) |
| query | Object | Query parameters used to open the non-existent page |
| isEntryPage | boolean | Whether this is the first page of the current launch (e.g., from a shared entry point, the first page is the share page configured by the developer) |

**Note**

- Developers can perform page redirection in the callback, but it must be handled **synchronously** within the callback. Asynchronous handling (e.g., using `setTimeout` for asynchronous execution) will not work.
- If the developer does not bind a listener using `ft.onPageNotFound` or declare `App.onPageNotFound`, when navigating to a non-existent page, the native "page not found" prompt page will be pushed.
- If the redirection in the callback leads to another non-existent page, the native "page not found" prompt page will be pushed, and no second callback will occur.

### [\#](https://super-apps.ai/mop/document/en/develop/api/basic.html\#onerror) onError

**ft.onError(function callback)**

Listens for Mini-Program error events, such as script errors or API call errors. This event has the same callback timing and parameters as `App.onError`.

**Parameters**

**function callback**

Callback function for Mini-Program error events.

**Parameters**

**string error**

Error message, including stack trace.

### [\#](https://super-apps.ai/mop/document/en/develop/api/basic.html\#onappshow) onAppShow

**ft.onAppShow(function callback)**

Listens for the event when the Mini-Program comes to the foreground. This event has the same callback parameters as `App.onShow`.

**Parameters**

**function callback**

Callback function for the event when the Mini-Program comes to the foreground.

**Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| path | string | Path of the Mini-Program when brought to the foreground (code package path) |
| query | Object | Query parameters when the Mini-Program is brought to the foreground |
| referrerInfo | Object | Referrer information. Returned when entering the Mini-Program from another Mini-Program, Official Account, or App. Otherwise, returns `{}`. (See note below) |

**Structure of referrerInfo**

| Property | Type | Description |
| --- | --- | --- |
| appId | string | The appId of the Mini-Program |
| extraData | Object | Data passed from the source Mini-Program |

### [\#](https://super-apps.ai/mop/document/en/develop/api/basic.html\#onapphide) onAppHide

**ft.onAppHide(function callback)**

Listens for the event when the Mini-Program goes to the background. This event has the same callback timing as `App.onHide`.

**Parameters**

**function callback**

Callback function for the event when the Mini-Program goes to the background.

### [\#](https://super-apps.ai/mop/document/en/develop/api/basic.html\#offpagenotfound) offPageNotFound

**ft.offPageNotFound(function callback)**

Cancels listening for the event when a non-existent page in the Mini-Program is attempted to be opened.

**Parameters**

**function callback**

Callback function for the event when a non-existent page in the Mini-Program is attempted to be opened.

### [\#](https://super-apps.ai/mop/document/en/develop/api/basic.html\#offerror) offError

**ft.offError(function callback)**

Cancels listening for Mini-Program error events.

**Parameters**

**function callback**

Callback function for Mini-Program error events.

### [\#](https://super-apps.ai/mop/document/en/develop/api/basic.html\#offappshow) offAppShow

**ft.offAppShow(function callback)**

Cancels listening for the event when the Mini-Program comes to the foreground.

**Parameters**

**function callback**

Callback function for the event when the Mini-Program comes to the foreground.

### [\#](https://super-apps.ai/mop/document/en/develop/api/basic.html\#offapphide) offAppHide

**ft.offAppHide(function callback)**

Cancels listening for the event when the Mini-Program goes to the background.

**Parameters**

**function callback**

Callback function for the event when the Mini-Program goes to the background.

### [\#](https://super-apps.ai/mop/document/en/develop/api/basic.html\#onthemechange) onThemeChange

**ft.onThemeChange(function callback)**

Listens for system theme change events.

**Parameters**

**function callback**

Callback function for system theme change events.

### [\#](https://super-apps.ai/mop/document/en/develop/api/basic.html\#onunhandledrejection) onUnhandledRejection

**ft.onUnhandledRejection(function callback)**

Listens for unhandled Promise rejection events.

**Parameters**

**function callback**

Callback function for unhandled Promise rejection events.

### [\#](https://super-apps.ai/mop/document/en/develop/api/basic.html\#offunhandledrejection) offUnhandledRejection

**ft.offUnhandledRejection(function callback)**

Cancels listening for unhandled Promise rejection events.

**Parameters**

**function callback**

The callback function passed to onUnhandledRejection. If this parameter is not provided, all listener functions will be removed.

### [\#](https://super-apps.ai/mop/document/en/develop/api/basic.html\#offthemechange) offThemeChange

**ft.offThemeChange(function callback)**

Cancels listening for system theme change events.

**Parameters**

**function callback**

The callback function passed to onThemeChange. If this parameter is not provided, all listener functions will be removed.

## [\#](https://super-apps.ai/mop/document/en/develop/api/basic.html\#debugging) Debugging

### [\#](https://super-apps.ai/mop/document/en/develop/api/basic.html\#setenabledebug) setEnableDebug

**ft.setEnableDebug(Object object)**

Sets whether to enable the debug switch. This switch works even in the official version.

**Parameters**

**Object object**

| Property | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| enableDebug | boolean |  | Yes | Whether to enable debugging |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function for API call completion (executed regardless of success or failure) |

**Sample Code**

```javascript
// Enable debugging
ft.setEnableDebug({
  enableDebug: true
})

// Disable debugging
ft.setEnableDebug({
  enableDebug: false
})

        Code copied

```

**Tips**

- Another way to enable debugging in the official version is to first enable debugging in the development or trial version, then switch to the official version to see vConsole.

### [\#](https://super-apps.ai/mop/document/en/develop/api/basic.html\#console) console

Prints logs to the debugging panel. `console` is a global object that can be accessed directly.

**console.debug()**

Prints debug logs to the debugging panel.

**console.error()**

Prints error logs to the debugging panel.

**console.group()**

Creates a new group in the debugging panel.

**console.groupEnd()**

Ends the group created by `console.group`.

**console.info()**

Prints info logs to the debugging panel.

**console.log()**

Prints log messages to the debugging panel.

**console.warn()**

Prints warn logs to the debugging panel.

### [\#](https://super-apps.ai/mop/document/en/develop/api/basic.html\#logmanager) LogManager

Log manager instance.

**LogManager.debug()**

Writes debug logs.

**LogManager.info()**

Writes info logs.

**LogManager.log()**

Writes log messages.

**LogManager.warn()**

Writes warn logs.

### [\#](https://super-apps.ai/mop/document/en/develop/api/basic.html\#realtimelogmanager) RealtimeLogManager

Real-time log manager instance.

**RealtimeLogManager.info()**

Writes info logs. Not currently supported in plugins.

**RealtimeLogManager.warn()**

Writes warn logs. Not currently supported in plugins.

**RealtimeLogManager.error()**

Writes error logs. Not currently supported in plugins.

**RealtimeLogManager.setFilterMsg(string msg)**

Sets filter keywords. Not currently supported in plugins.

**RealtimeLogManager.addFilterMsg(string msg)**

Adds filter keywords. Not currently supported in plugins.

## [\#](https://super-apps.ai/mop/document/en/develop/api/basic.html\#version-information) Version Information

 -->

### [\#](https://super-apps.ai/mop/document/en/develop/api/basic.html\#getaccountinfosync) getAccountInfoSync

**ft.getAccountInfoSync()**

**Function Description**
Retrieve the current account information. The online Mini-Program version number can only be obtained in the official version of the Mini-Program and is unavailable in the development or trial versions.

**Return Value**

**Object**

Account information

| Property | Type | Description |
| --- | --- | --- |
| miniProgram | Object | Mini-Program account information |
| plugin | Object | Plugin account information (only included when called within a plugin) |

**Object miniProgram**

| Property | Type | Description |
| --- | --- | --- |
| appId | string | Mini-Program appId |
| envVersion | string | Mini-Program version develop: Development trial: Trial release: Release review: Review |
| version | string | Online Mini-Program version number |

**Object plugin**

| Property | Type | Description |
| --- | --- | --- |
| appId | string | Plugin appId |
| version | string | Plugin version number |

**Sample Code**

```javascript
const accountInfo = ft.getAccountInfoSync()
console.log(accountInfo.miniProgram.appId) // Mini-Program appId
// console.log(accountInfo.plugin.appId) // Plugin appId
// console.log(accountInfo.plugin.version) // Plugin version number, in the format 'a.b.c'

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/api/basic.html\#getuserprofile) getUserProfile

Get user information.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| lang | string | en | No | Language for displaying user information |
| desc | string |  | Yes | Declaration of the purpose after obtaining user personal information, no more than 30 characters |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function for API call completion (executed whether the call succeeds or fails) |

**object.success Callback Function**

**Parameters**

**Object res**

| Property | Type | Description | Minimum Version |
| --- | --- | --- | --- |
| userInfo | UserInfo | User information object | 2.10.4 |
| rawData | string | Raw data string excluding sensitive information, used for signature calculation | 2.10.4 |
| signature | string | String obtained using sha1( rawData + sessionkey ), used to verify user information, see User Data Signature Verification and Encryption/Decryption for details | 2.10.4 |
| encryptedData | string | Complete user information encryption data including sensitive data, see User Data Signature Verification and Encryption/Decryption for details | 2.10.4 |
| iv | string | Initial vector for encryption algorithm, see User Data Signature Verification and Encryption/Decryption for details | 2.10.4 |
| cloudID | string | Cloud ID corresponding to sensitive data, returned only for Mini-Programs with cloud development enabled, can be directly obtained via cloud invocation, see Direct Access to Open Data via Cloud Invocation for details | 2.10.4 |

### [\#](https://super-apps.ai/mop/document/en/develop/api/basic.html\#getuserinfo) getUserInfo

Get user information.

**Parameters**

**Object res**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| withCredentials | boolean |  | No | Display language for user information |
| lang | string | en | Yes | Declaration of the purpose after obtaining user personal information, no more than 30 characters |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function for API call completion (executed whether the call succeeds or fails) |

**object.success Callback Function**

**Parameters**

**Object res**

| Property | Type | Description | Minimum Version |
| --- | --- | --- | --- |
| userInfo | UserInfo | User information object |  |
| rawData | string | Raw data string excluding sensitive information, used for signature calculation |  |
| signature | string | String obtained using sha1( rawData + sessionkey ), used to verify user information, see User Data Signature Verification and Encryption/Decryption for details |  |
| encryptedData | string | Complete user information encryption data including sensitive data, see User Data Signature Verification and Encryption/Decryption for details |  |
| iv | string | Initial vector for encryption algorithm, see User Data Signature Verification and Encryption/Decryption for details |  |
| cloudID | string | Cloud ID corresponding to sensitive data, returned only for Mini-Programs with cloud development enabled, can be directly obtained via cloud invocation, see Direct Access to Open Data via Cloud Invocation for details | 2.7.0 |

### [\#](https://super-apps.ai/mop/document/en/develop/api/basic.html\#userinfo) UserInfo

User information

**Properties** **string nickName**
User nickname

**string avatarUrl**
URL of the user's profile picture. The last numerical value in the URL represents the size of the square profile picture (options include 0, 46, 64, 96, 132; 0 represents a 640x640 square profile picture, 46 represents a 46x46 square profile picture, and so on. Default is 132). This field is empty if the user has no profile picture. If the user changes their profile picture, the original URL will become invalid.

**number gender**
User gender. No longer returned, refer to relevant announcements.

**Valid values for gender**

| Value | Description | Minimum Version |
| --- | --- | --- |
| 0 | Unknown |  |
| 1 | Male |  |
| 2 | Female |  |

**string country**
User's country. No longer returned, refer to relevant announcements.

**string province**
User's province. No longer returned, refer to relevant announcements.

**string city**
User's city. No longer returned, refer to relevant announcements.

**string language**
Language used to display country, province, and city. Forced to return "zh\_CN", refer to relevant announcements.

**Valid values for language**

| Value | Description | Minimum Version |
| --- | --- | --- |
| en | English |  |
| zh\_CN | Simplified Chinese |  |
| zh\_TW | Traditional Chinese |  |

## [\#](https://super-apps.ai/mop/document/en/develop/api/basic.html\#encryption) Encryption

### [\#](https://super-apps.ai/mop/document/en/develop/api/basic.html\#getusercryptomanager) getUserCryptoManager

Get user encryption module

**Return Value**

**UserCryptoManager**

User encryption module

### [\#](https://super-apps.ai/mop/document/en/develop/api/basic.html\#usercryptomanager-getlatestuserkey) UserCryptoManager.getLatestUserKey

Get the latest user encryption key

**Parameters** **Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function for API call completion (executed whether the call succeeds or fails) |

**object.success Callback Function**

**Parameters**

**Object object**

| Property | Type | Description |
| --- | --- | --- |
| encryptKey | string | User encryption key |
| iv | string | Initial vector for key |
| version | number | Key version |
| expireTime | number | Key expiration time |

**Sample Code**

```javascript
const userCryptoManager = ft.getUserCryptoManager()
userCryptoManager.getLatestUserKey({
  success: res => {
    console.log(res)
  }
})

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/api/basic.html\#usercryptomanager-getrandomvalues) UserCryptoManager.getRandomValues

Get cryptographically secure random numbers

**Parameters** **Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| length | number |  | Yes | Integer, number of bytes for generating random numbers, maximum 1048576 |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function for API call completion (executed whether the call succeeds or fails) |

**object.success Callback Function**

**Parameters**

**Object object**

| Property | Type | Description |
| --- | --- | --- |
| randomValues | ArrayBuffer | Random number content, length equals to the number of bytes passed in |

**Sample Code**

```javascript
ft.getRandomValues({
  length: 6 // Generate a random number with a length of 6 bytes,
  success: res => {
    console.log(ft.arrayBufferToBase64(res.randomValues)) // Convert to base64 string and print
  }
})

        Code copied

```

[Previous：API Overview](https://super-apps.ai/mop/document/en/develop/api/overview.html)[Next：Routing](https://super-apps.ai/mop/document/en/develop/api/route.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)