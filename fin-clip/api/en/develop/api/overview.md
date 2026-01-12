<!--
Source URL: https://super-apps.ai/mop/document/en/develop/api/overview.html
Extracted: 2026-01-12T23:09:13.027Z (January 12, 2026)
Title: API Overview | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
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

# [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#api-overview) API Overview

## [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_1-basic) 1\. Basic

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.env](https://super-apps.ai/mop/document/en/develop/api/basic.html#env) | Environment Variables | 1.0.0 |  |
| [ft.canIUse](https://super-apps.ai/mop/document/en/develop/api/basic.html#caniuse) | Check if the Mini-Program's API, callback, parameters, components, etc., are available in the current version | 1.0.0 |  |
| [ft.base64ToArrayBuffer](https://super-apps.ai/mop/document/en/develop/api/basic.html#base64toarraybuffer) | Convert a Base64 string to an ArrayBuffer object | 1.0.0 |  |
| [ft.arrayBufferToBase64](https://super-apps.ai/mop/document/en/develop/api/basic.html#arraybuffertobase64) | Convert an ArrayBuffer object to a Base64 string | 1.0.0 |  |
| [ft.base64ToTempFilePath](https://super-apps.ai/mop/document/en/develop/api/basic.html#base64totempfilepath) | Save the base64 data of an image to the local sandbox and return the local cache path | 1.0.0 |  |
| [ft.fileToBase64](https://super-apps.ai/mop/document/en/develop/api/basic.html#filetobase64) | Convert a file to a Base64 string | 1.0.0 |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_1-1-system) 1.1 System

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.getSystemInfoSync](https://super-apps.ai/mop/document/en/develop/api/basic.html#getsysteminfosync) | Synchronous version of ft.getSystemInfo | 1.0.0 |  |
| [ft.getSystemInfoAsync](https://super-apps.ai/mop/document/en/develop/api/basic.html#getsysteminfoasync) | Asynchronously get system information | 1.0.0 |  |
| [ft.getSystemInfo](https://super-apps.ai/mop/document/en/develop/api/basic.html#getsysteminfo) | Get system information | 1.0.0 |  |
| [ft.openSystemBluetoothSetting](https://super-apps.ai/mop/document/en/develop/api/basic.html#opensystembluetoothsetting) | Jump to the system Bluetooth settings page | 3.0.45 |  |
| [ft.openAppAuthorizeSetting](https://super-apps.ai/mop/document/en/develop/api/basic.html#openappauthorizesetting) | Jump to the system authorization management page | 3.0.45 |  |
| [ft.getWindowInfo](https://super-apps.ai/mop/document/en/develop/api/basic.html#getwindowinfo) | Get window information | 3.0.45 |  |
| [ft.getSystemSetting](https://super-apps.ai/mop/document/en/develop/api/basic.html#getsystemsetting) | Get device settings | 3.0.45 |  |
| [ft.getRendererUserAgent](https://super-apps.ai/mop/document/en/develop/api/basic.html#getrendereruseragent) | Get the UserAgent for Webview Mini-Programs | 3.0.45 |  |
| [ft.getDeviceInfo](https://super-apps.ai/mop/document/en/develop/api/basic.html#getdeviceinfo) | Get basic device information | 3.0.45 |  |
| [ft.getAppBaseInfo](https://super-apps.ai/mop/document/en/develop/api/basic.html#getappbaseinfo) | Get basic APP information | 3.0.45 |  |
| [ft.getAppAuthorizeSetting](https://super-apps.ai/mop/document/en/develop/api/basic.html#getappauthorizesetting) | Get APP authorization settings | 3.0.45 |  |

Please Note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| ft.getSkylineInfoSync | Synchronous version of ft.getSkylineInfo |
| ft.getSkylineInfo | Get support status for the Skyline rendering engine in the current runtime environment |
| ft.getDeviceBenchmarkInfo | Get device performance scores and model tier data |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_1-2-update) 1.2 Update

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.getUpdateManager](https://super-apps.ai/mop/document/en/develop/api/basic.html#getupdatemanager) | Get a globally unique version update manager for managing Mini-Program updates | 1.0.0 |  |

Please Note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| ft.updateWeChatApp | Update client version |

#### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_1-2-1-updatemanager) 1.2.1 UpdateManager

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [UpdateManager.applyUpdate](https://super-apps.ai/mop/document/en/develop/api/basic.html#getupdatemanager) | Force the Mini-Program to restart and use the new version | 1.0.0 |  |
| [UpdateManager.onCheckForUpdate](https://super-apps.ai/mop/document/en/develop/api/basic.html#getupdatemanager) | Listen for events when checking for updates from the FinClip backend | 1.0.0 |  |
| [UpdateManager.onUpdateFailed](https://super-apps.ai/mop/document/en/develop/api/basic.html#getupdatemanager) | Listen for Mini-Program update failure events | 1.0.0 |  |
| [UpdateManager.onUpdateReady](https://super-apps.ai/mop/document/en/develop/api/basic.html#getupdatemanager) | Listen for Mini-Program version update events | 1.0.0 |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_1-3-mini-program) 1.3 Mini-Program

#### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_1-3-1-lifecycle) 1.3.1 Lifecycle

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.getLaunchOptionsSync](https://super-apps.ai/mop/document/en/develop/api/basic.html#getlaunchoptionssync) | Get the parameters when the Mini-Program starts | 1.0.0 |  |
| [ft.getEnterOptionsSync](https://super-apps.ai/mop/document/en/develop/api/basic.html#getenteroptionssync) | Get the parameters for this Mini-Program startup | 1.0.0 |  |

Please Note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| ft.onApiCategoryChange | Listen for API category change events |
| ft.offApiCategoryChange | Cancel listening for API category change events |
| ft.getApiCategory | Get the current API category |

#### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_1-3-2-app-level-events) 1.3.2 App-Level Events

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.onPageNotFound](https://super-apps.ai/mop/document/en/develop/api/basic.html#onpagenotfound) | Listen for events when the Mini-Program tries to open a non-existent page | 1.0.0 |  |
| [ft.onError](https://super-apps.ai/mop/document/en/develop/api/basic.html#onerror) | Listen for Mini-Program error events | 1.0.0 |  |
| [ft.onAppShow](https://super-apps.ai/mop/document/en/develop/api/basic.html#onappshow) | Listen for Mini-Program foreground events | 1.0.0 |  |
| [ft.onAppHide](https://super-apps.ai/mop/document/en/develop/api/basic.html#onapphide) | Listen for Mini-Program background events | 1.0.0 |  |
| [ft.offPageNotFound](https://super-apps.ai/mop/document/en/develop/api/basic.html#offpagenotfound) | Cancel listening for events when the Mini-Program tries to open a non-existent page | 1.0.0 |  |
| [ft.offError](https://super-apps.ai/mop/document/en/develop/api/basic.html#offerror) | Cancel listening for Mini-Program error events | 1.0.0 |  |
| [ft.offAppShow](https://super-apps.ai/mop/document/en/develop/api/basic.html#offappshow) | Cancel listening for Mini-Program foreground events | 1.0.0 |  |
| [ft.offAppHide](https://super-apps.ai/mop/document/en/develop/api/basic.html#offapphide) | Cancel listening for Mini-Program background events | 1.0.0 |  |
| [ft.onThemeChange](https://super-apps.ai/mop/document/en/develop/api/basic.html#onthemechange) | Listen for system theme change events | 1.0.0 |  |
| [ft.onUnhandledRejection](https://super-apps.ai/mop/document/en/develop/api/basic.html#onunhandledrejection) | Listen for unhandled Promise rejection events | 1.0.0 |  |
| [ft.offUnhandledRejection](https://super-apps.ai/mop/document/en/develop/api/basic.html#offunhandledrejection) | Cancel listening for unhandled Promise rejection events | 1.0.0 |  |
| [ft.offThemeChange](https://super-apps.ai/mop/document/en/develop/api/basic.html#offthemechange) | Cancel listening for system theme change events | 1.0.0 |  |

Please Note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| ft.postMessageToReferrerPage | Send messages to the source page of the jump |
| ft.postMessageToReferrerMiniProgram | Send messages to the source Mini-Program of the jump |
| ft.onAudioInterruptionEnd | Listen for audio interruption end events |
| ft.onAudioInterruptionBegin | Listen for audio interruption start events due to system occupation |
| ft.offAudioInterruptionEnd | Cancel listening for audio interruption end events |
| ft.offAudioInterruptionBegin | Cancel listening for audio interruption start events due to system occupation |
| ft.onLazyLoadError | Listen for application asynchronous component loading failure callbacks |
| ft.offLazyLoadError | Cancel listening for application asynchronous component loading failure callbacks |

#### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_1-3-3-routing-events) 1.3.3 Routing Events

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.onAppRoute](https://super-apps.ai/mop/document/en/develop/api/route-event.html#onapproute) | Listen for routing events after they are issued and execute routing logic | 1.0.0 |  |
| [ft.offAppRoute](https://super-apps.ai/mop/document/en/develop/api/route-event.html#offapproute) | Cancel event listening | 1.0.0 |  |
| [ft.onAppRouteDone](https://super-apps.ai/mop/document/en/develop/api/route-event.html#onapproutedone) | Listen for events after the current routing animation is completed | 1.0.0 |  |
| [ft.offAppRouteDone](https://super-apps.ai/mop/document/en/develop/api/route-event.html#offapproutedone) | Cancel event listening | 1.0.0 |  |

Please Note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| ft.onBeforePageUnload | Listen for events before the existing page instance is destroyed due to routing events |
| ft.onBeforePageLoad | Listen for events before a new page instance is created due to routing events |
| ft.onBeforeAppRoute | Listen for events before executing routing logic after routing events are issued |
| ft.onAfterPageUnload | Listen for events after the existing page instance is destroyed due to routing events |
| ft.onAfterPageLoad | Listen for events after a new page instance is created due to routing events |
| ft.offBeforePageUnload | Remove the event listener function for routing events |
| ft.offBeforePageLoad | Remove the event listener function for routing events |
| ft.offBeforeAppRoute | Remove the event listener function for routing events |
| ft.offAfterPageUnload | Remove the event listener function for routing events |
| ft.offAfterPageLoad | Remove the event listener function for routing events |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_1-4-debugging) 1.4 Debugging

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.setEnableDebug](https://super-apps.ai/mop/document/en/develop/api/basic.html#setenabledebug) | Set whether to turn on the debugging switch | 1.0.0 |  |

Please Note

The following APIs can be called but have no reporting functionality

| Name | Function Description |
| --- | --- |
| ft.getRealtimeLogManager | Get the real-time log manager object |
| ft.getLogManager | Get the log manager object |

#### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_1-4-1-console) 1.4.1 console

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [console.debug](https://super-apps.ai/mop/document/en/develop/api/basic.html#console) | Print debug logs to the debugging panel | 1.0.0 |  |
| [console.error](https://super-apps.ai/mop/document/en/develop/api/basic.html#console) | Print error logs to the debugging panel | 1.0.0 |  |
| [console.group](https://super-apps.ai/mop/document/en/develop/api/basic.html#console) | Create a new group in the debugging panel | 1.0.0 |  |
| [console.groupEnd](https://super-apps.ai/mop/document/en/develop/api/basic.html#console) | End the group created by console.group | 1.0.0 |  |
| [console.info](https://super-apps.ai/mop/document/en/develop/api/basic.html#console) | Print info logs to the debugging panel | 1.0.0 |  |
| [console.log](https://super-apps.ai/mop/document/en/develop/api/basic.html#console) | Print log logs to the debugging panel | 1.0.0 |  |
| [console.warn](https://super-apps.ai/mop/document/en/develop/api/basic.html#console) | Print warn logs to the debugging panel | 1.0.0 |  |

#### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_1-4-2-logmanager) 1.4.2 LogManager

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [LogManager.debug](https://super-apps.ai/mop/document/en/develop/api/basic.html#logmanager) | Write debug logs | Yes, but logs only appear in the local console | 3.0.36 |
| [LogManager.info](https://super-apps.ai/mop/document/en/develop/api/basic.html#logmanager) | Write info logs | Yes, but logs only appear in the local console | 3.0.36 |
| [LogManager.log](https://super-apps.ai/mop/document/en/develop/api/basic.html#logmanager) | Write log logs | Yes, but logs only appear in the local console | 3.0.36 |
| [LogManager.warn](https://super-apps.ai/mop/document/en/develop/api/basic.html#logmanager) | Write warn logs | Yes, but logs only appear in the local console | 3.0.36 |

#### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_1-4-3-realtimelogmanager) 1.4.3 RealtimeLogManager

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [RealtimeLogManager.error](https://super-apps.ai/mop/document/en/develop/api/basic.html#realtimelogmanager) | Write error logs | Yes, but logs only appear in the local console | 3.0.36 |
| [RealtimeLogManager.info](https://super-apps.ai/mop/document/en/develop/api/basic.html#realtimelogmanager) | Write info logs | Yes, but logs only appear in the local console | 3.0.36 |
| [RealtimeLogManager.warn](https://super-apps.ai/mop/document/en/develop/api/basic.html#realtimelogmanager) | Write warn logs | Yes, but logs only appear in the local console | 3.0.36 |
| [RealtimeLogManager.setFilterMsg](https://super-apps.ai/mop/document/en/develop/api/basic.html#realtimelogmanager) | Set filter keywords | Yes, but logs only appear in the local console | 3.0.36 |
| [RealtimeLogManager.addFilterMsg](https://super-apps.ai/mop/document/en/develop/api/basic.html#realtimelogmanager) | Add filter keywords | Yes, but logs only appear in the local console | 3.0.36 |

Please Note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| RealtimeLogManager.getCurrentState | Real-time logs will aggregate and report cached logs within a certain time interval; if the cached content exceeds the limit during this time, it will be discarded |
| RealtimeLogManager.in | Set the page where the real-time log page parameter is located |
| RealtimeLogManager.tag | Get the log manager instance for the given tag |

#### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_1-4-4-realtimetaglogmanager) 1.4.4 RealtimeTagLogManager

Please Note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| RealtimeTagLogManager.info | Write info logs |
| RealtimeTagLogManager.warn | Write warn logs |
| RealtimeTagLogManager.error | Write error logs |
| RealtimeTagLogManager.insetFilterMsgfo | Set filter keywords |
| RealtimeTagLogManager.addFilterMsg | Add filter keywords |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_1-5-performance) 1.5 Performance

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.getPerformance](https://super-apps.ai/mop/document/en/develop/api/performance.html#getperformance) | Get performance-related information for the current Mini-Program | Supported from Base Library 3.5.5, SDK version 2.46.9 onwards |  |
| [ft.preloadWebview](https://super-apps.ai/mop/document/en/develop/api/performance.html#preloadwebview) | Preload the WebView for the next page | Supported from Base Library 3.5.5, SDK version 2.46.9 onwards |  |

Please Note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| ft.reportPerformance | Mini-Program speed measurement reporting |
| ft.preloadSkylineView | Preload the Skyline runtime environment required for the next page |
| ft.preloadAssets | Preload media resource files for the view layer |

#### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_1-5-1-entrylist) 1.5.1 EntryList

Please Note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| EntryList.getEntries | This method returns all performance data in the current list |
| EntryList.getEntriesByType | Get all performance data of type \[entryType\] in the current list |
| EntryList.getEntriesByName | Get all performance data with name \[name\] and type \[entryType\] in the current list |

#### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_1-5-2-performance) 1.5.2 Performance

Please Note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| Performance.getEntries | This method returns all performance data in the current buffer |
| Performance.getEntriesByType | Get all performance data of type \[entryType\] in the current buffer |
| Performance.getEntriesByName | Get all performance data with name \[name\] and type \[entryType\] in the current buffer |
| Performance.createObserver | Create a global performance event listener |
| Performance.setBufferSize | Set buffer size, defaulting to buffering 30 performance data entries |
| PerformanceEntry | Single performance data entry |

#### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_1-5-3-performanceobserver) 1.5.3 PerformanceObserver

Please Note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| PerformanceObserver.disconnect | Stop observing |
| PerformanceObserver.observe | Start observing |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_1-6-subpackage-loading) 1.6 Subpackage Loading

Please Note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| ft.preDownloadSubpackage | Trigger subpackage preload |

#### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_1-6-1-predownloadsubpackagetask) 1.6.1 PreDownloadSubpackageTask

Please Note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| PreDownloadSubpackageTask.onProgressUpdate | Listen for subpackage loading progress change events |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_1-7-encryption) 1.7 Encryption

| Name | Function Description | Version |
| --- | --- | --- |
| [ft.getUserCryptoManager](https://super-apps.ai/mop/document/en/develop/api/basic.html#getusercryptomanager) | Get user encryption module | 3.2.2 |

#### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_1-7-1-usercryptomanager) 1.7.1 UserCryptoManager

| Name | Function Description | Version |
| --- | --- | --- |
| [UserCryptoManager.getLatestUserKey](https://super-apps.ai/mop/document/en/develop/api/basic.html#usercryptomanager-getlatestuserkey) | Get the latest user encryption key | 3.2.2 |
| [UserCryptoManager.getRandomValues](https://super-apps.ai/mop/document/en/develop/api/basic.html#usercryptomanager-getrandomvalues) | Get cryptographically secure random numbers | 3.2.2 |

## [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_2-routing) 2\. Routing

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.switchTab](https://super-apps.ai/mop/document/en/develop/api/route.html#switchtab) | Jump to a tabBar page and close all other non-tabBar pages | 1.0.0 |  |
| [ft.reLaunch](https://super-apps.ai/mop/document/en/develop/api/route.html#relaunch) | Close all pages and open a specific page within the app | 1.0.0 |  |
| [ft.redirectTo](https://super-apps.ai/mop/document/en/develop/api/route.html#redirectto) | Close the current page and jump to a specific page within the app | 1.0.0 |  |
| [ft.navigateTo](https://super-apps.ai/mop/document/en/develop/api/route.html#navigateto) | Retain the current page and jump to a specific page within the app | 1.0.0 |  |
| [ft.navigateBack](https://super-apps.ai/mop/document/en/develop/api/route.html#navigateback) | Close the current page and return to the previous page or multiple levels of pages | 1.0.0 |  |

Please Note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| ft.router | Custom routing object |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_2-1-eventchannel) 2.1 EventChannel

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [EventChannel.emit](https://super-apps.ai/mop/document/en/develop/api/route.html#eventchannel-emit) | Trigger an event | 1.0.0 |  |
| [EventChannel.off](https://super-apps.ai/mop/document/en/develop/api/route.html#eventchannel-off) | Cancel listening to an event | 1.0.0 |  |
| [EventChannel.on](https://super-apps.ai/mop/document/en/develop/api/route.html#eventchannel-on) | Continuously listen to an event | 1.0.0 |  |
| [EventChannel.once](https://super-apps.ai/mop/document/en/develop/api/route.html#eventchannel-once) | Listen to an event once, becomes invalid after triggering | 1.0.0 |  |

## [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_3-navigation) 3\. Navigation

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.navigateToMiniProgram](https://super-apps.ai/mop/document/en/develop/api/navigate.html#navigatetominiprogram) | Open another Mini-Program | 1.0.0 |  |
| [ft.navigateBackMiniProgram](https://super-apps.ai/mop/document/en/develop/api/navigate.html#navigatebackminiprogram) | Return to the previous Mini-Program | 1.0.0 |  |
| [ft.exitMiniProgram](https://super-apps.ai/mop/document/en/develop/api/navigate.html#exitminiprogram) | Exit the current Mini-Program | 1.0.0 |  |
| [ft.navigateToWechatMiniProgram](https://super-apps.ai/mop/document/en/develop/api/navigate.html#navigatetowechatminiprogram) | Jump to open a WeChat Mini-Program | 1.0.0 |  |
| [ft.restartMiniProgram](https://super-apps.ai/mop/document/en/develop/api/navigate.html#restartminiprogram) | Restart the Mini-Program | 3.1.17 |  |

Please Note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| ft.openOfficialAccountArticle | Open official account articles via Mini-Program |
| ft.openEmbeddedMiniProgram | Open a half-screen Mini-Program |
| ft.onEmbeddedMiniProgramHeightChange | Listen for changes in the visible height of a half-screen Mini-Program |
| ft.offEmbeddedMiniProgramHeightChange | Cancel listening for changes in the visible height of a half-screen Mini-Program |

## [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_4-forwarding) 4\. Forwarding

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.showShareMenu](https://super-apps.ai/mop/document/en/develop/api/forward.html#showsharemenu) | Display the share button on the current page | 1.0.0 |  |
| [ft.hideShareMenu](https://super-apps.ai/mop/document/en/develop/api/forward.html#hidesharemenu) | Hide the share button on the current page | 1.0.0 |  |

Please Note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| ft.updateShareMenu | Update sharing attributes |
| ft.showShareImageMenu | Open a share image popup, allowing images to be sent to friends, favorited, or downloaded |
| ft.shareVideoMessage | Share videos to chat |
| ft.shareFileMessage | Share files to chat |
| ft.onCopyUrl | Listen for events triggered when users click the "Copy Link" button in the upper right corner menu |
| ft.offCopyUrl | Cancel listening for events triggered when users click the "Copy Link" button in the upper right corner menu |
| ft.getShareInfo | Get detailed sharing information |
| ft.authPrivateMessage | Verify private messages |

## [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_5-interface) 5\. Interface

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_5-1-interaction) 5.1 Interaction

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.showToast](https://super-apps.ai/mop/document/en/develop/api/interface.html#showtoast) | Show a message prompt box | 1.0.0 |  |
| [ft.showModal](https://super-apps.ai/mop/document/en/develop/api/interface.html#showmodal) | Show a modal dialog box | 1.0.0 |  |
| [ft.showLoading](https://super-apps.ai/mop/document/en/develop/api/interface.html#showloading) | Show a loading prompt box | 1.0.0 |  |
| [ft.showActionSheet](https://super-apps.ai/mop/document/en/develop/api/interface.html#showactionsheet) | Show an action menu | 1.0.0 |  |
| [ft.hideToast](https://super-apps.ai/mop/document/en/develop/api/interface.html#hidetoast) | Hide the message prompt box | 1.0.0 |  |
| [ft.hideLoading](https://super-apps.ai/mop/document/en/develop/api/interface.html#hideloading) | Hide the loading prompt box | 1.0.0 |  |
| [ft.enableAlertBeforeUnload](https://super-apps.ai/mop/document/en/develop/api/interface.html#enablealertbeforeunload) | Enable a confirmation dialog before leaving the Mini-Program page | 2.11.5 |  |
| [ft.disableAlertBeforeUnload](https://super-apps.ai/mop/document/en/develop/api/interface.html#disablealertbeforeunload) | Disable the confirmation dialog before leaving the Mini-Program page | 2.11.5 |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_5-2-navigation-bar) 5.2 Navigation Bar

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.showNavigationBarLoading](https://super-apps.ai/mop/document/en/develop/api/interface.html#shownavigationbarloading) | Show the navigation bar loading animation on the current page | 1.0.0 |  |
| [ft.setNavigationBarTitle](https://super-apps.ai/mop/document/en/develop/api/interface.html#setnavigationbartitle) | Dynamically set the title of the current page | 1.0.0 |  |
| [ft.setNavigationBarColor](https://super-apps.ai/mop/document/en/develop/api/interface.html#setnavigationbarcolor) | Set the color of the page navigation bar | 1.0.0 |  |
| [ft.hideNavigationBarLoading](https://super-apps.ai/mop/document/en/develop/api/interface.html#hidenavigationbarloading) | Hide the navigation bar loading animation on the current page | 1.0.0 |  |
| [ft.hideHomeButton](https://super-apps.ai/mop/document/en/develop/api/interface.html#hideHomeButton) | Hide the home button | 1.0.0 |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_5-3-background) 5.3 Background

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.setBackgroundTextStyle](https://super-apps.ai/mop/document/en/develop/api/interface.html#setbackgroundtextstyle) | Dynamically set the font style and loading image style for the pull-down background | 1.0.0 |  |
| [ft.setBackgroundColor](https://super-apps.ai/mop/document/en/develop/api/interface.html#setbackgroundcolor) | Dynamically set the background color of the window | 1.0.0 |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_5-4-tab-bar) 5.4 Tab Bar

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.showTabBarRedDot](https://super-apps.ai/mop/document/en/develop/api/interface.html#showtabbarreddot) | Show a red dot at the top-right corner of a specific TabBar item | 1.0.0 |  |
| [ft.showTabBar](https://super-apps.ai/mop/document/en/develop/api/interface.html#showtabbar) | Show the TabBar | 1.0.0 |  |
| [ft.setTabBarStyle](https://super-apps.ai/mop/document/en/develop/api/interface.html#settabbarstyle) | Dynamically set the overall style of the TabBar | 1.0.0 |  |
| [ft.setTabBarItem](https://super-apps.ai/mop/document/en/develop/api/interface.html#settabbaritem) | Dynamically set the content of a specific TabBar item; starting from version 2.7.0, images support temporary files and network files | 1.0.0 |  |
| [ft.setTabBarBadge](https://super-apps.ai/mop/document/en/develop/api/interface.html#settabbarbadge) | Add text to the top-right corner of a specific TabBar item | 1.0.0 |  |
| [ft.removeTabBarBadge](https://super-apps.ai/mop/document/en/develop/api/interface.html#removetabbarbadge) | Remove the text from the top-right corner of a specific TabBar item | 1.0.0 |  |
| [ft.hideTabBarRedDot](https://super-apps.ai/mop/document/en/develop/api/interface.html#hidetabbarreddot) | Hide the red dot at the top-right corner of a specific TabBar item | 1.0.0 |  |
| [ft.hideTabBar](https://super-apps.ai/mop/document/en/develop/api/interface.html#hidetabbar) | Hide the TabBar | 1.0.0 |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_5-5-fonts) 5.5 Fonts

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.loadFontFace](https://super-apps.ai/mop/document/en/develop/api/interface.html#loadfontface) | Dynamically load web fonts; file addresses must be of the downloadable type | 1.0.0 |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_5-6-pull-down-refresh) 5.6 Pull-Down Refresh

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.stopPullDownRefresh](https://super-apps.ai/mop/document/en/develop/api/interface.html#stoppulldownrefresh) | Stop the pull-down refresh on the current page | 1.0.0 |  |
| [ft.startPullDownRefresh](https://super-apps.ai/mop/document/en/develop/api/interface.html#startpulldownrefresh) | Start pull-down refresh | 1.0.0 |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_5-7-scrolling) 5.7 Scrolling

#### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_5-7-1-ft-pagescrollto) 5.7.1 ft.pageScrollTo

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.pageScrollTo](https://super-apps.ai/mop/document/en/develop/api/interface.html#pagescrollto) | Scroll the page to the target position, supporting both selector and scroll distance positioning methods | 1.0.0 |  |

#### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_5-7-2-scrollviewcontext) 5.7.2 ScrollViewContext

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ScrollViewContext](https://super-apps.ai/mop/document/en/develop/api/interface.html#scrollviewcontext) | ScrollView operation instance, can be obtained through the NodesRef.node method of ft.createSelectorQuery. | 3.0.45 |  |
| [ScrollViewContext.scrollIntoView](https://super-apps.ai/mop/document/en/develop/api/interface.html#scrollintoview) | Scroll to a specified position | 3.0.45 |  |
| [ScrollViewContext.scrollTo](https://super-apps.ai/mop/document/en/develop/api/interface.html#scrollto) | Scroll to a specified position | 3.0.45 |  |
| [ScrollViewContext.triggerRefresh](https://super-apps.ai/mop/document/en/develop/api/interface.html#triggerrefresh) | Trigger pull-down refresh | 3.8.3 |  |
| [ScrollViewContext.closeRefresh](https://super-apps.ai/mop/document/en/develop/api/interface.html#closerefresh) | Close pull-down refresh | 3.8.3 |  |

Please Note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| ScrollViewContext.closeTwoLevel | Close second-level pull-down |
| ScrollViewContext.triggerTwoLevel | Trigger second-level pull-down |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_5-8-animation) 5.8 Animation

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.createAnimation](https://super-apps.ai/mop/document/en/develop/api/interface.html#createanimation) | Create an animation instance animation | 1.0.0 |  |

#### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_5-8-1-animation) 5.8.1 Animation

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [Animation.export](https://super-apps.ai/mop/document/en/develop/api/interface.html#animation) | Export animation queue | 1.0.0 |  |
| [Animation.step](https://super-apps.ai/mop/document/en/develop/api/interface.html#animation) | Indicate that a group of animations is complete | 1.0.0 |  |
| [Animation.matrix](https://super-apps.ai/mop/document/en/develop/api/interface.html#animation) | Same as transform-function matrix | 1.0.0 |  |
| [Animation.matrix3d](https://super-apps.ai/mop/document/en/develop/api/interface.html#animation) | Same as transform-function matrix3d | 1.0.0 |  |
| [Animation.rotate](https://super-apps.ai/mop/document/en/develop/api/interface.html#animation) | Rotate clockwise from the origin by a certain angle | 1.0.0 |  |
| [Animation.rotate3d](https://super-apps.ai/mop/document/en/develop/api/interface.html#animation) | Rotate clockwise from a fixed axis by a certain angle | 1.0.0 |  |
| [Animation.rotateX](https://super-apps.ai/mop/document/en/develop/api/interface.html#animation) | Rotate clockwise from the X-axis by a certain angle | 1.0.0 |  |
| [Animation.rotateY](https://super-apps.ai/mop/document/en/develop/api/interface.html#animation) | Rotate clockwise from the Y-axis by a certain angle | 1.0.0 |  |
| [Animation.rotateZ](https://super-apps.ai/mop/document/en/develop/api/interface.html#animation) | Rotate clockwise from the Z-axis by a certain angle | 1.0.0 |  |
| [Animation.scale](https://super-apps.ai/mop/document/en/develop/api/interface.html#animation) | Scale | 1.0.0 |  |
| [Animation.scale3d](https://super-apps.ai/mop/document/en/develop/api/interface.html#animation) | Scale | 1.0.0 |  |
| [Animation.scaleX](https://super-apps.ai/mop/document/en/develop/api/interface.html#animation) | Scale along the X-axis | 1.0.0 |  |
| [Animation.scaleY](https://super-apps.ai/mop/document/en/develop/api/interface.html#animation) | Scale along the Y-axis | 1.0.0 |  |
| [Animation.scaleZ](https://super-apps.ai/mop/document/en/develop/api/interface.html#animation) | Scale along the Z-axis | 1.0.0 |  |
| [Animation.skew](https://super-apps.ai/mop/document/en/develop/api/interface.html#animation) | Skew the X and Y coordinates | 1.0.0 |  |
| [Animation.skewX](https://super-apps.ai/mop/document/en/develop/api/interface.html#animation) | Skew the X coordinate | 1.0.0 |  |
| [Animation.skewY](https://super-apps.ai/mop/document/en/develop/api/interface.html#animation) | Skew the Y coordinate | 1.0.0 |  |
| [Animation.translate](https://super-apps.ai/mop/document/en/develop/api/interface.html#animation) | Translate transformation | 1.0.0 |  |
| [Animation.translate3d](https://super-apps.ai/mop/document/en/develop/api/interface.html#animation) | Translate transformation for xyz coordinates | 1.0.0 |  |
| [Animation.translateX](https://super-apps.ai/mop/document/en/develop/api/interface.html#animation) | Translate along the X-axis | 1.0.0 |  |
| [Animation.translateY](https://super-apps.ai/mop/document/en/develop/api/interface.html#animation) | Translate along the Y-axis | 1.0.0 |  |
| [Animation.translateZ](https://super-apps.ai/mop/document/en/develop/api/interface.html#animation) | Translate along the Z-axis | 1.0.0 |  |
| [Animation.opacity](https://super-apps.ai/mop/document/en/develop/api/interface.html#animation) | Set opacity | 1.0.0 |  |
| [Animation.backgroundColor](https://super-apps.ai/mop/document/en/develop/api/interface.html#animation) | Set background color | 1.0.0 |  |
| [Animation.width](https://super-apps.ai/mop/document/en/develop/api/interface.html#animation) | Set width | 1.0.0 |  |
| [Animation.height](https://super-apps.ai/mop/document/en/develop/api/interface.html#animation) | Set height | 1.0.0 |  |
| [Animation.left](https://super-apps.ai/mop/document/en/develop/api/interface.html#animation) | Set left value | 1.0.0 |  |
| [Animation.right](https://super-apps.ai/mop/document/en/develop/api/interface.html#animation) | Set right value | 1.0.0 |  |
| [Animation.top](https://super-apps.ai/mop/document/en/develop/api/interface.html#animation) | Set top value | 1.0.0 |  |
| [Animation.bottom](https://super-apps.ai/mop/document/en/develop/api/interface.html#animation) | Set bottom value | 1.0.0 |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_5-9-pinning) 5.9 Pinning

Please Note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| ft.setTopBarText | Dynamically set the pinned bar text content |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_5-10-custom-components) 5.10 Custom Components

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.nextTick](https://super-apps.ai/mop/document/en/develop/api/interface.html#nexttick) | Delay some operations until the next tick | 1.0.0 |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_5-11-menu) 5.11 Menu

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.getMenuButtonBoundingClientRect](https://super-apps.ai/mop/document/en/develop/api/interface.html#getmenubuttonboundingclientrect) | Get the layout position information of the menu button (the capsule button in the upper right corner) | 1.0.0 |  |

Please Note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| ft.onMenuButtonBoundingClientRectWeightChange | Listen for changes in the layout position information of the capsule button in the upper right corner |
| ft.offMenuButtonBoundingClientRectWeightChange | Cancel listening for changes in the layout position information of the capsule button in the upper right corner |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_5-12-window) 5.12 Window

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.onWindowResize](https://super-apps.ai/mop/document/en/develop/api/interface.html#onwindowresize) | Listen for window size change events | 1.0.0 |  |
| [ft.offWindowResize](https://super-apps.ai/mop/document/en/develop/api/interface.html#offwindowresize) | Cancel listening for window size change events | 1.0.0 |  |
| [ft.setWindowSize](https://super-apps.ai/mop/document/en/develop/api/interface.html#setwindowsize) | Supported on iOS and Android, set the window size of the current Mini-Program, only effective for small widget types | Base Library 3.5.2, SDK 2.46.3 and above |  |

Please Note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| ft.checkIsPictureInPictureActive | Returns whether there is currently a picture-in-picture playback |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_5-13-worklet-animation) 5.13 Worklet Animation

Please Note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| ft.worklet | Get the worklet object |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_5-13-1-worklet) 5.13.1 worklet

Please Note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| worklet.cancelAnimation | Cancel animations driven by SharedValue |
| worklet.derived | Derived Value DerivedValue, can generate other shared variables based on existing SharedValue |
| worklet.Easing | Common animation easing functions |
| worklet.scrollViewContext | ScrollView instance, can operate scroll-view component within worklet functions |
| worklet.scrollViewContext.scrollTo | Scroll to specified position |
| worklet.shared | Create SharedValue, used for cross-thread data sharing and driving animations |
| worklet.cancelAnimation | Cancel animations driven by SharedValue |
| worklet.derived | Derived Value DerivedValue, can generate other shared variables based on existing SharedValue |
| worklet.shared | SharedValue, used for cross-thread data sharing and driving animations |
| worklet.decay | Scroll-based animation |
| worklet.spring | Physics-based animation |
| worklet.timing | Time-based animation |
| worklet.delay | Delayed execution of animation |
| worklet.repeat | Repeat execution of animation |
| worklet.sequence | Combine animation sequences, execute passed animations sequentially |
| worklet.runOnJS | When worklet function runs on UI thread, captured external functions may be of worklet type or regular functions. To clearly distinguish them, require using runOnJS to call back to JS thread's regular functions |
| worklet.runOnUI | Execute worklet function on UI thread |

## [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_6-network) 6\. Network

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_6-1-initiate-request) 6.1 Initiate Request

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.request](https://super-apps.ai/mop/document/en/develop/api/network.html#request) | Initiate HTTPS network request | 1.0.0 |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_6-2-requesttask) 6.2 RequestTask

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [RequestTask.abort](https://super-apps.ai/mop/document/en/develop/api/network.html#requesttask-abort) | Interrupt request task | 1.0.0 |  |
| [RequestTask.onHeadersReceived](https://super-apps.ai/mop/document/en/develop/api/network.html#requesttask-offheadersreceived) | Listen for HTTP Response Header event | 1.0.0 |  |
| [RequestTask.offHeadersReceived](https://super-apps.ai/mop/document/en/develop/api/network.html#requesttask-onheadersreceived) | Cancel listening for HTTP Response Header event | 1.0.0 |  |
| [RequestTask.onChunkReceived](https://super-apps.ai/mop/document/en/develop/api/network.html#requesttask-onchunkreceived) | Listen for Chunk Received event | 3.2.3 |  |
| [RequestTask.offChunkReceived](https://super-apps.ai/mop/document/en/develop/api/network.html#requesttask-offchunkreceived) | Cancel listening for Chunk Received event | 3.2.3 |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_6-3-download) 6.3 Download

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.downloadFile](https://super-apps.ai/mop/document/en/develop/api/network.html#downloadfile) | Download file resources to local | 1.0.0 |  |

#### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_6-3-1-downloadtask) 6.3.1 DownloadTask

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [DownloadTask.abort](https://super-apps.ai/mop/document/en/develop/api/network.html#downloadtask-abort) | Interrupt download task | 1.0.0 |  |
| [DownloadTask.offHeadersReceived](https://super-apps.ai/mop/document/en/develop/api/network.html#downloadtask-offheadersreceived) | Remove the listener function for HTTP Response Header event | 1.0.0 |  |
| [DownloadTask.onHeadersReceived](https://super-apps.ai/mop/document/en/develop/api/network.html#downloadtask-onheadersreceived) | Listen for HTTP Response Header event. Triggered earlier than request completion event | 1.0.0 |  |
| [DownloadTask.offProgressUpdate](https://super-apps.ai/mop/document/en/develop/api/network.html#downloadtask-offprogressupdate) | Remove the listener function for download progress change event | 1.0.0 |  |
| [DownloadTask.onProgressUpdate](https://super-apps.ai/mop/document/en/develop/api/network.html#downloadtask-onprogressupdate) | Listen for download progress change event | 1.0.0 |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_6-4-upload) 6.4 Upload

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.uploadFile](https://super-apps.ai/mop/document/en/develop/api/network.html#uploadfile) | Upload local resources to server | 1.0.0 |  |

#### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_6-4-1-uploadtask) 6.4.1 UploadTask

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [UploadTask.abort](https://super-apps.ai/mop/document/en/develop/api/network.html#uploadtask-abort) | Interrupt upload task | 1.0.0 |  |
| [UploadTask.offHeadersReceived](https://super-apps.ai/mop/document/en/develop/api/network.html#uploadtask-offheadersreceived) | Remove the listener function for HTTP Response Header event | 1.0.0 |  |
| [UploadTask.onHeadersReceived](https://super-apps.ai/mop/document/en/develop/api/network.html#uploadtask-onheadersreceived) | Listen for HTTP Response Header event. Triggered earlier than request completion event | 1.0.0 |  |
| [UploadTask.offProgressUpdate](https://super-apps.ai/mop/document/en/develop/api/network.html#uploadtask-offprogressupdate) | Remove the listener function for upload progress change event | 1.0.0 |  |
| [UploadTask.onProgressUpdate](https://super-apps.ai/mop/document/en/develop/api/network.html#uploadtask-onprogressupdate) | Listen for upload progress change event | 1.0.0 |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_6-5-websocket) 6.5 WebSocket

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.sendSocketMessage](https://super-apps.ai/mop/document/en/develop/api/network.html#sendsocketmessage) | Send data through WebSocket connection | 1.0.0 |  |
| [ft.onSocketOpen](https://super-apps.ai/mop/document/en/develop/api/network.html#onsocketopen) | Listen for WebSocket connection open event | 1.0.0 |  |
| [ft.onSocketMessage](https://super-apps.ai/mop/document/en/develop/api/network.html#onsocketmessage) | Listen for WebSocket receiving server message event | 1.0.0 |  |
| [ft.onSocketError](https://super-apps.ai/mop/document/en/develop/api/network.html#onsocketerror) | Listen for WebSocket error event | 1.0.0 |  |
| [ft.onSocketClose](https://super-apps.ai/mop/document/en/develop/api/network.html#onsocketclose) | Listen for WebSocket connection close event | 1.0.0 |  |
| [ft.connectSocket](https://super-apps.ai/mop/document/en/develop/api/network.html#connectsocket) | Create a WebSocket connection | 1.0.0 |  |
| [ft.closeSocket](https://super-apps.ai/mop/document/en/develop/api/network.html#closesocket) | Close WebSocket connection | 1.0.0 |  |

#### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_6-5-1-sockettask) 6.5.1 SocketTask

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [SocketTask.close](https://super-apps.ai/mop/document/en/develop/api/network.html#sockettask) | Close WebSocket connection | 1.0.0 |  |
| [SocketTask.onClose](https://super-apps.ai/mop/document/en/develop/api/network.html#sockettask) | Listen for WebSocket connection close event | 1.0.0 |  |
| [SocketTask.onError](https://super-apps.ai/mop/document/en/develop/api/network.html#sockettask) | Listen for WebSocket error event | 1.0.0 |  |
| [SocketTask.onMessage](https://super-apps.ai/mop/document/en/develop/api/network.html#sockettask) | Listen for WebSocket receiving server message event | 1.0.0 |  |
| [SocketTask.onOpen](https://super-apps.ai/mop/document/en/develop/api/network.html#sockettask) | Listen for WebSocket connection open event | 1.0.0 |  |
| [SocketTask.send](https://super-apps.ai/mop/document/en/develop/api/network.html#sockettask) | Send data through WebSocket connection | 1.0.0 |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_6-6-mdns) 6.6 mDNS

Please Note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| ft.stopLocalServiceDiscovery | Stop searching for mDNS services |
| ft.startLocalServiceDiscovery | Start searching for mDNS services in the local network |
| ft.onLocalServiceResolveFail | Listen for mDNS service resolution failure event |
| ft.onLocalServiceLost | Listen for mDNS service departure event |
| ft.onLocalServiceFound | Listen for mDNS service discovery event |
| ft.onLocalServiceDiscoveryStop | Listen for mDNS service search stop event |
| ft.offLocalServiceResolveFail | Cancel listening for mDNS service resolution failure event |
| ft.offLocalServiceLost | Cancel listening for mDNS service departure event |
| ft.offLocalServiceFound | Cancel listening for mDNS service discovery event |
| ft.offLocalServiceDiscoveryStop | Cancel listening for mDNS service search stop event |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_6-7-tcp-communication) 6.7 TCP Communication

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.createTCPSocket](https://super-apps.ai/mop/document/en/develop/api/network.html#ft-createtcpsocket) | Create a TCP Socket instance | 1.0.0 |  |

#### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_6-7-1-tcpsocket) 6.7.1 TCPSocket

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [TCPSocket.onMessage](https://super-apps.ai/mop/document/en/develop/api/network.html#tcpsocket) | Listen for when data is received | 1.0.0 |  |
| [TCPSocket.write](https://super-apps.ai/mop/document/en/develop/api/network.html#tcpsocket) | Send data on socket | 1.0.0 |  |
| [TCPSocket.close](https://super-apps.ai/mop/document/en/develop/api/network.html#tcpsocket) | Close connection | 1.0.0 |  |
| [TCPSocket.connect](https://super-apps.ai/mop/document/en/develop/api/network.html#tcpsocket) | Start connection on given socket | 1.0.0 |  |
| [TCPSocket.offConnect](https://super-apps.ai/mop/document/en/develop/api/network.html#tcpsocket) | Remove the listener function triggered when a socket connection is successfully established | 1.0.0 |  |
| [TCPSocket.offClose](https://super-apps.ai/mop/document/en/develop/api/network.html#tcpsocket) | Remove the listener function triggered once the socket is fully closed | 1.0.0 |  |
| [TCPSocket.offError](https://super-apps.ai/mop/document/en/develop/api/network.html#tcpsocket) | Remove the listener function triggered when an error occurs | 1.0.0 |  |
| [TCPSocket.offMessage](https://super-apps.ai/mop/document/en/develop/api/network.html#tcpsocket) | Remove the listener function triggered when data is received | 1.0.0 |  |
| [TCPSocket.onClose](https://super-apps.ai/mop/document/en/develop/api/network.html#tcpsocket) | Listen for when the socket is fully closed | 1.0.0 |  |
| [TCPSocket.onConnect](https://super-apps.ai/mop/document/en/develop/api/network.html#tcpsocket) | Listen for when a socket connection is successfully established | 1.0.0 |  |
| [TCPSocket.onError](https://super-apps.ai/mop/document/en/develop/api/network.html#tcpsocket) | Listen for when an error occurs | 1.0.0 |  |

Please Note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| TCPSocket.bindWifi | Bind TCP Socket to current wifi network, triggers onBindWifi event upon success (Android only) |
| TCPSocket.offBindWifi | Remove the listener function triggered when a socket successfully binds to the current wifi network |
| TCPSocket.onBindWifi | Listen for when a socket successfully binds to the current wifi network |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_6-8-udp-communication) 6.8 UDP Communication

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.createUDPSocket](https://super-apps.ai/mop/document/en/develop/api/network.html#ft-createudpsocket) | Create a UDP Socket instance | 1.0.0 |  |

#### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_6-8-1-udpsocket) 6.8.1 UDPSocket

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [UDPSocket.bind](https://super-apps.ai/mop/document/en/develop/api/network.html#udpsocket) | Bind to a system-assigned available port, or bind to a specified port number | 1.0.0 |  |
| [UDPSocket.close](https://super-apps.ai/mop/document/en/develop/api/network.html#udpsocket) | Close UDP Socket instance, equivalent to destruction | 1.0.0 |  |
| [UDPSocket.offClose](https://super-apps.ai/mop/document/en/develop/api/network.html#udpsocket) | Cancel listening for close event | 1.0.0 |  |
| [UDPSocket.offError](https://super-apps.ai/mop/document/en/develop/api/network.html#udpsocket) | Cancel listening for error event | 1.0.0 |  |
| [UDPSocket.offListening](https://super-apps.ai/mop/document/en/develop/api/network.html#udpsocket) | Cancel listening for start listening data packet message event | 1.0.0 |  |
| [UDPSocket.offMessage](https://super-apps.ai/mop/document/en/develop/api/network.html#udpsocket) | Cancel listening for received message event | 1.0.0 |  |
| [UDPSocket.onClose](https://super-apps.ai/mop/document/en/develop/api/network.html#udpsocket) | Listen for close event | 1.0.0 |  |
| [UDPSocket.onError](https://super-apps.ai/mop/document/en/develop/api/network.html#udpsocket) | Listen for error event | 1.0.0 |  |
| [UDPSocket.onListening](https://super-apps.ai/mop/document/en/develop/api/network.html#udpsocket) | Listen for start listening data packet message event | 1.0.0 |  |
| [UDPSocket.onMessage](https://super-apps.ai/mop/document/en/develop/api/network.html#udpsocket) | Listen for received message event | 1.0.0 |  |
| [UDPSocket.connect](https://super-apps.ai/mop/document/en/develop/api/network.html#udpsocket) | Pre-connect to specified IP and port, needs to be used together with write method | 1.0.0 |  |
| [UDPSocket.write](https://super-apps.ai/mop/document/en/develop/api/network.html#udpsocket) | Same usage as send method, no difference if connect is not called beforehand (note even if connect is called, address and port parameters need to be filled in this interface) | 1.0.0 |  |
| [UDPSocket.setTTL](https://super-apps.ai/mop/document/en/develop/api/network.html#udpsocket) | Set IP\_TTL socket option, used to set maximum hop count allowed for an IP packet transmission | 1.0.0 |  |
| [UDPSocket.send](https://super-apps.ai/mop/document/en/develop/api/network.html#udpsocket) | Send message to specified IP and port | 1.0.0 |  |

## [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_7-payment) 7\. Payment

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.requestPayment](https://super-apps.ai/mop/document/faq/app/payment-issue.html) | Initiate payment | 1.0.0 |  |

Please Note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| ft.requestVirtualPayment | Initiate virtual payment |
| ft.requestPluginPayment | Initiate payment in plugin |
| ft.requestMerchantTransfer | In merchant transfer user confirmation mode, pull up page in Mini-Program client to request user confirmation receipt |
| ft.requestCommonPayment | Initiate general payment |
| ft.openHKOfflinePayView | Pull up HK payment code |

## [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_8-data-cache) 8\. Data Cache

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.setStorageSync](https://super-apps.ai/mop/document/en/develop/api/storage.html#setstoragesync) | Synchronous version of ft.setStorage | 1.0.0 |  |
| [ft.setStorage](https://super-apps.ai/mop/document/en/develop/api/storage.html#setstorage) | Store data in local cache at specified key | 1.0.0 |  |
| [ft.removeStorageSync](https://super-apps.ai/mop/document/en/develop/api/storage.html#removestoragesync) | Synchronous version of ft.removeStorage | 1.0.0 |  |
| [ft.removeStorage](https://super-apps.ai/mop/document/en/develop/api/storage.html#removestorage) | Remove specified key from local cache | 1.0.0 |  |
| [ft.getStorageSync](https://super-apps.ai/mop/document/en/develop/api/storage.html#getstoragesync) | Synchronous version of ft.getStorage | 1.0.0 |  |
| [ft.getStorageInfoSync](https://super-apps.ai/mop/document/en/develop/api/storage.html#getstorageinfosync) | Synchronous version of ft.getStorageInfo | 1.0.0 |  |
| [ft.getStorageInfo](https://super-apps.ai/mop/document/en/develop/api/storage.html#getstorageinfo) | Asynchronously get current storage related information | 1.0.0 |  |
| [ft.getStorage](https://super-apps.ai/mop/document/en/develop/api/storage.html#getstorage) | Asynchronously get content of specified key from local cache | 1.0.0 |  |
| [ft.clearStorageSync](https://super-apps.ai/mop/document/en/develop/api/storage.html#clearstoragesync) | Synchronous version of ft.clearStorage | 1.0.0 |  |
| [ft.clearStorage](https://super-apps.ai/mop/document/en/develop/api/storage.html#clearstorage) | Clear local data cache | 1.0.0 |  |
| [ft.batchSetStorageSync](https://super-apps.ai/mop/document/en/develop/api/storage.html#batchsetstoragesync) | Batch store data in local cache at specified keys | 3.0.49 |  |
| [ft.batchSetStorage](https://super-apps.ai/mop/document/en/develop/api/storage.html#batchsetstorage) | Batch store data in local cache at specified keys | 3.0.49 |  |
| [ft.batchGetStorageSync](https://super-apps.ai/mop/document/en/develop/api/storage.html#batchgetstoragesync) | Synchronously batch get content of specified keys from local cache | 3.0.49 |  |
| [ft.batchGetStorage](https://super-apps.ai/mop/document/en/develop/api/storage.html#batchgetstorage) | Synchronously batch get content of specified keys from local cache | 3.0.49 |  |

Please Note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| ft.revokeBufferURL | Destroy data stored in memory based on URL |
| ft.createBufferURL | Create a unique URL stored in memory based on passed buffer |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_8-1-periodic-update) 8.1 Periodic Update

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.setBackgroundFetchToken](https://super-apps.ai/mop/document/en/develop/api/storage.html#setbackgroundfetchtoken) | Set custom login state, included during periodic data fetching, to facilitate third-party server validation of request legitimacy | Base Library 3.2.1 and above |  |
| [ft.onBackgroundFetchData](https://super-apps.ai/mop/document/en/develop/api/storage.html#onbackgroundfetchdata) | Listen for callback when backgroundFetch data is received | Base Library 3.2.1 and above |  |
| [ft.getBackgroundFetchToken](https://super-apps.ai/mop/document/en/develop/api/storage.html#getbackgroundfetchtoken) | Get set custom login state | Base Library 3.2.1 and above |  |
| [ft.getBackgroundFetchData](https://super-apps.ai/mop/document/en/develop/api/storage.html#getbackgroundfetchdata) | Fetch backgroundFetch client cached data | Base Library 3.2.1 and above |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_8-2-cache-manager) 8.2 Cache Manager

| Name | Function Description | Version Number |
| --- | --- | --- |
| [ft.createCacheManager](https://super-apps.ai/mop/document/en/develop/api/storage.html#ft-createcachemanager) | Create cache manager | 3.2.2 |

#### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_8-2-1-cachemanager) 8.2.1 CacheManager

| Name | Function Description | Version Number |
| --- | --- | --- |
| [CacheManager.addRule](https://super-apps.ai/mop/document/en/develop/api/storage.html#cachemanager-addrule) | Add rule | 3.2.2 |
| [CacheManager.addRules](https://super-apps.ai/mop/document/en/develop/api/storage.html#cachemanager-addrules) | Batch add rules, rule writing can refer to CacheManager.addRule | 3.2.2 |
| [CacheManager.clearCaches](https://super-apps.ai/mop/document/en/develop/api/storage.html#cachemanager-clearcaches) | Clear all caches | 3.2.2 |
| [CacheManager.clearRules](https://super-apps.ai/mop/document/en/develop/api/storage.html#cachemanager-clearrules) | Clear all rules, will also delete all caches under corresponding rules | 3.2.2 |
| [CacheManager.deleteCache](https://super-apps.ai/mop/document/en/develop/api/storage.html#cachemanager-deletecache) | Delete cache | 3.2.2 |
| [CacheManager.deleteCaches](https://super-apps.ai/mop/document/en/develop/api/storage.html#cachemanager-deletecaches) | Batch delete caches | 3.2.2 |
| [CacheManager.deleteRule](https://super-apps.ai/mop/document/en/develop/api/storage.html#cachemanager-deleterule) | Delete rule, will also delete all caches under corresponding rule | 3.2.2 |
| [CacheManager.deleteRules](https://super-apps.ai/mop/document/en/develop/api/storage.html#cachemanager-deleterules) | Delete rule, will also delete all caches under corresponding rule | 3.2.2 |
| [CacheManager.match](https://super-apps.ai/mop/document/en/develop/api/storage.html#cachemanager-match) | Match hit cache rule, generally needs to be used with request event | 3.2.2 |
| [CacheManager.off](https://super-apps.ai/mop/document/en/develop/api/storage.html#cachemanager-off) | Cancel event listening | 3.2.2 |
| [CacheManager.on](https://super-apps.ai/mop/document/en/develop/api/storage.html#cachemanager-on) | Listen for event | 3.2.2 |
| [CacheManager.start](https://super-apps.ai/mop/document/en/develop/api/storage.html#cachemanager-start) | Enable cache, only effective when mode is none, after calling cache manager's state will be set to 1 | 3.2.2 |
| [CacheManager.stop](https://super-apps.ai/mop/document/en/develop/api/storage.html#cachemanager-stop) | Disable cache, only effective when mode is none, after calling cache manager's state will be set to 0 | 3.2.2 |

## [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_9-data-analysis) 9\. Data Analysis

Please Note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| ft.reportMonitor | Custom business data monitoring reporting interface |
| ft.reportEvent | Event reporting |
| ft.reportAnalytics | Custom analysis data reporting interface |
| ft.getExptInfoSync | Given experiment parameter array, get corresponding experiment parameter values |
| ft.getCommonConfig | Given experiment parameter array, get corresponding experiment parameter values |

## [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_10-canvas) 10\. Canvas

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.createOffscreenCanvas](https://super-apps.ai/mop/document/en/develop/api/canvas.html#createcanvascontext) | Create offscreen canvas instance | 3.0.0 | API functionality not fully supported, recommend using regular canvas instead |
| [ft.createCanvasContext](https://super-apps.ai/mop/document/en/develop/api/canvas.html#createcanvascontext) | Create canvas drawing context CanvasContext object | 1.0.0 |  |
| [ft.canvasToTempFilePath](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvastotempfilepath) | Export content of specified area of current canvas to generate image of specified size | 1.0.0 | Does not support offscreen canvas |
| [ft.canvasPutImageData](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvasputimagedata) | Draw pixel data to canvas | 1.0.0 |  |
| [ft.canvasGetImageData](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvasgetimagedata) | Get pixel data implied in canvas area | 1.0.0 |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_10-1-canvas) 10.1 Canvas

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [Canvas.createImage](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvas-createImage) | Create an image object, only available for canvas obtained via createSelectorQuery | 1.0.0 |  |
| [Canvas.getContext](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvas) | This method returns Canvas's drawing context | 1.0.0 |  |
| [Canvas.createImageData](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvascreateimagedata) | Create an ImageData object | 1.0.0 | This API depends on underlying synchronous mechanism, currently only supported on iOS, use ft.canvasGetImageData instead if needing to get image data |
| [Canvas.toDataURL](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvas-todataurl) | Return a data URI containing image representation | 3.0.0 | This API depends on underlying synchronous mechanism, currently only supported on iOS, use canvasToTempFilePath instead if needing to get image data |
| [Canvas.requestAnimationFrame](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvas) | Execute during next repaint | 3.0.0 |  |
| [Canvas.cancalAnimationFrame](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvas) | Cancel animation frame request added to schedule by requestAnimationFrame | 3.0.0 |  |

Please Note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| Canvas.createPath2D | Create Path2D object |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_10-2-canvascontext) 10.2 CanvasContext

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [CanvasContext.arc](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvascontext) | Creates an arc | 1.0.0 |  |
| [CanvasContext.arcTo](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvascontext) | Draws an arc path based on control points and radius | 1.0.0 |  |
| [CanvasContext.beginPath](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvascontext) | Begins creating a path | 1.0.0 |  |
| [CanvasContext.bezierCurveTo](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvascontext) | Creates a cubic Bezier curve path | 1.0.0 |  |
| [CanvasContext.clearRect](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvascontext) | Clears the content within the specified rectangular area on the canvas | 1.0.0 |  |
| [CanvasContext.createCircularGradient](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvascontext) | Creates a circular gradient color | 1.0.0 |  |
| [CanvasContext.createLinearGradient](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvascontext) | Creates a linear gradient color | 1.0.0 |  |
| [CanvasContext.createPattern](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvascontext) | Creates a pattern from a specified image, which can repeat in a specified direction | 1.0.0 |  |
| [CanvasContext.clip](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvascontext) | Clips any shape and size from the original canvas | 1.0.0 |  |
| [CanvasContext.closePath](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvascontext) | Closes a path | 1.0.0 |  |
| [CanvasContext.drawImage](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvascontext) | Draws an image onto the canvas | 1.0.0 |  |
| [CanvasContext.draw](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvascontext) | Draws the previously described paths, transformations, and styles in the drawing context onto the canvas | 1.0.0 |  |
| [CanvasContext.fill](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvascontext) | Fills the current path content | 1.0.0 |  |
| [CanvasContext.fillRect](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvascontext) | Fills a rectangle | 1.0.0 |  |
| [CanvasContext.fillText](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvascontext) | Draws filled text on the canvas | 1.0.0 |  |
| [CanvasContext.lineTo](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvascontext) | Adds a new point and creates a line from the last specified point to the target point | 1.0.0 |  |
| [CanvasContext.measureText](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvascontext) | Measures text dimensions | 1.0.0 |  |
| [CanvasContext.moveTo](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvascontext) | Moves the path to a specified point on the canvas without creating a line | 1.0.0 |  |
| [CanvasContext.quadraticCurveTo](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvascontext) | Creates a quadratic Bezier curve path | 1.0.0 |  |
| [CanvasContext.rotate](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvascontext) | Rotates the current coordinate axis clockwise around the origin | 1.0.0 |  |
| [CanvasContext.restore](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvascontext) | Restores the previously saved drawing context | 1.0.0 |  |
| [CanvasContext.rect](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvascontext) | Creates a rectangular path | 1.0.0 |  |
| [CanvasContext.save](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvascontext) | Saves the drawing context | 1.0.0 |  |
| [CanvasContext.scale](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvascontext) | Scales the horizontal and vertical coordinates of subsequently created paths after invocation | 1.0.0 |  |
| [CanvasContext.setLineDash](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvascontext) | Sets the dashed line style | 1.0.0 |  |
| [CanvasContext.setLineCap](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvascontext) | Sets the line cap style | 1.0.0 |  |
| [CanvasContext.setGlobalAlpha](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvascontext) | Sets the global brush transparency | 1.0.0 |  |
| [CanvasContext.setFontSize](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvascontext) | Sets the font size | 1.0.0 |  |
| [CanvasContext.setFillStyle](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvascontext) | Sets the fill color | 1.0.0 |  |
| [CanvasContext.setStrokeStyle](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvascontext) | Sets the stroke color | 1.0.0 |  |
| [CanvasContext.setShadow](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvascontext) | Sets the shadow style | 1.0.0 |  |
| [CanvasContext.setMiterLimit](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvascontext) | Sets the maximum miter length | 1.0.0 |  |
| [CanvasContext.setLineWidth](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvascontext) | Sets the line width | 1.0.0 |  |
| [CanvasContext.setLineJoin](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvascontext) | Sets the line join style | 1.0.0 |  |
| [CanvasContext.setTransform](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvascontext) | Resets (overrides) the current transformation using a matrix | 1.0.0 |  |
| [CanvasContext.setTextBaseline](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvascontext) | Sets the vertical alignment of text | 1.0.0 |  |
| [CanvasContext.setTextAlign](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvascontext) | Sets the text alignment | 1.0.0 |  |
| [CanvasContext.strokeRect](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvascontext) | Draws a rectangle (non-filled) | 1.0.0 |  |
| [CanvasContext.strokeText](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvascontext) | Draws stroked text at the given (x, y) position | 1.0.0 |  |
| [CanvasContext.stroke](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvascontext) | Draws the border of the current path | 1.0.0 |  |
| [CanvasContext.transform](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvascontext) | Applies multiple transformations to the current transformation using a matrix | 1.0.0 |  |
| [CanvasContext.translate](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvascontext) | Transforms the origin (0, 0) of the current coordinate system | 1.0.0 |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_10-3-canvasgradient) 10.3 CanvasGradient

| Name | Function Description |
| --- | --- |
| [CanvasGradient.addColorStop](https://super-apps.ai/mop/document/en/develop/api/canvas.html#canvasgradient-addcolorstop) | Adds a color stop to the gradient |
| [Color](https://super-apps.ai/mop/document/en/develop/api/canvas.html#color) | Color |
| [Image](https://super-apps.ai/mop/document/en/develop/api/canvas.html#image) | Image |
| [ImageData](https://super-apps.ai/mop/document/en/develop/api/canvas.html#imagedata) | ImageData object |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_10-4-offscreencanvas) 10.4 OffscreenCanvas

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [OffscreenCanvas.createImage](https://super-apps.ai/mop/document/en/develop/api/canvas.html#offscreencanvas-createimage) | Creates an image object | 1.0.0 |  |
| [OffscreenCanvas.getContext](https://super-apps.ai/mop/document/en/develop/api/canvas.html#offscreencanvas-getcontext) | Returns the drawing context of the OffscreenCanvas | 1.0.0 |  |

## [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_11-media) 11\. Media

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_11-1-map) 11.1 Map

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.createMapContext](https://super-apps.ai/mop/document/en/develop/api/map.html) | Creates a MapContext object for the map | 1.0.0 |  |

#### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_11-1-1-mapcontext) 11.1.1 MapContext

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [MapContext.addArc](https://super-apps.ai/mop/document/en/develop/api/map.html#mapcontext-addarc) | Adds an arc; either waypoints or angle must be set | Not Supported |  |
| [MapContext.addCustomLayer](https://super-apps.ai/mop/document/en/develop/api/map.html#mapcontext-addcustomlayer) | Adds a custom layer | Not Supported |  |
| [MapContext.addGroundOverlay](https://super-apps.ai/mop/document/en/develop/api/map.html#mapcontext-addgroundoverlay) | Creates a custom image layer that scales with the map | Not Supported |  |
| [MapContext.addVisualLayer](https://super-apps.ai/mop/document/en/develop/api/map.html#mapcontext-addvisuallayer) | Adds a visual layer | Not Supported |  |
| [MapContext.addMarkers](https://super-apps.ai/mop/document/en/develop/api/map.html#mapcontext-addmarkers) | Adds markers | 1.0.0 |  |
| [MapContext.fromScreenLocation](https://super-apps.ai/mop/document/en/develop/api/map.html#mapcontext-fromscreenlocation) | Gets the latitude and longitude corresponding to a point on the screen; the origin is the top-left corner of the map | 1.0.0 |  |
| [MapContext.getCenterLocation](https://super-apps.ai/mop/document/en/develop/api/map.html#mapcontext-getcenterlocation) | Gets the latitude and longitude of the current map center | 1.0.0 |  |
| [MapContext.getRegion](https://super-apps.ai/mop/document/en/develop/api/map.html#mapcontext-getregion) | Gets the visible region of the current map | 1.0.0 |  |
| [MapContext.getRotate](https://super-apps.ai/mop/document/en/develop/api/map.html#mapcontext-getrotate) | Gets the rotation angle of the current map | 1.0.0 |  |
| [MapContext.getSkew](https://super-apps.ai/mop/document/en/develop/api/map.html#mapcontext-getskew) | Gets the tilt angle of the current map | 1.0.0 |  |
| [MapContext.getScale](https://super-apps.ai/mop/document/en/develop/api/map.html#mapcontext-getacale) | Gets the zoom level of the current map | 1.0.0 |  |
| [MapContext.includePoints](https://super-apps.ai/mop/document/en/develop/api/map.html#mapcontext-includepoints) | Zooms the view to display all latitudes and longitudes | 1.0.0 |  |
| [MapContext.initMarkerCluster](https://super-apps.ai/mop/document/en/develop/api/map.html#mapcontext-initmarkercluster) | Initializes marker clustering configuration; default configuration is used if not called | 1.0.0 |  |
| [MapContext.moveAlong](https://super-apps.ai/mop/document/en/develop/api/map.html#mapcontext-movealong) | Moves a marker along a specified path, useful for trajectory playback scenarios | 1.0.0 |  |
| [MapContext.moveToLocation](https://super-apps.ai/mop/document/en/develop/api/map.html#mapcontext-movetolocation) | Centers the map on the current location; requires setting `show-location` to true in the map component | 1.0.0 |  |
| [MapContext.openMapApp](https://super-apps.ai/mop/document/en/develop/api/map.html#mapcontext-openmapapp) | Launches the map app for navigation selection | 1.0.0 |  |
| [MapContext.removeCustomLayer](https://super-apps.ai/mop/document/en/develop/api/map.html#mapcontext-removecustomlayer) | Removes a custom layer | Not Supported |  |
| [MapContext.removeGroundOverlay](https://super-apps.ai/mop/document/en/develop/api/map.html#mapcontext-removegroundoverlay) | Removes a custom image layer | Not Supported |  |
| [MapContext.removeMarkers](https://super-apps.ai/mop/document/en/develop/api/map.html#mapcontext-removemarkers) | Removes markers | 1.0.0 |  |
| [MapContext.removeVisualLayer](https://super-apps.ai/mop/document/en/develop/api/map.html#mapcontext-removevisuallayer) | Removes a visual layer | Not Supported |  |
| [MapContext.setBoundary](https://super-apps.ai/mop/document/en/develop/api/map.html#mapcontext-setboundary) | Restricts the display range of the map | Not Supported |  |
| [MapContext.setCenterOffset](https://super-apps.ai/mop/document/en/develop/api/map.html#mapcontext-setcenteroffset) | Sets the map center offset; backward and downward are positive; screen ratio range (0.25~0.75); default offset is \[0.5, 0.5\] | 1.0.0 |  |
| [MapContext.setLocMarkerIcon](https://super-apps.ai/mop/document/en/develop/api/map.html#mapcontext-setlocmarkerIcon) | Sets the location marker icon; supports network paths, local paths, and code package paths | 1.0.0 |  |
| [MapContext.toScreenLocation](https://super-apps.ai/mop/document/en/develop/api/map.html#mapcontext-toscreenlocation) | Gets the screen coordinates corresponding to latitude and longitude; the origin is the top-left corner of the map | 1.0.0 |  |
| [MapContext.translateMarker](https://super-apps.ai/mop/document/en/develop/api/map.html#mapcontext-translatemarker) | Translates a marker with animation | 1.0.0 |  |
| [MapContext.updateGroundOverlay](https://super-apps.ai/mop/document/en/develop/api/map.html#mapcontext-updategroundoverlay) | Updates a custom image layer | Not Supported |  |
| [MapContext.on](https://super-apps.ai/mop/document/en/develop/api/map.html#mapcontext-on) | Listens for map events | 1.0.0 |  |

Please Note

The following APIs are currently unsupported

| Name | Function Description |
| --- | --- |
| MapContext.addVisualLayer | Adds a visual layer |
| MapContext.removeVisualLayer | Removes a visual layer |
| MapContext.removeArc | Deletes an arc |
| MapContext.eraseLines | Erases or grays out lines added to the map |
| MapContext.executeVisualLayerCommand | Executes a visual layer command, used in conjunction with `MapContext.on('visualLayerEvent')` event listener |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_11-2-images) 11.2 Images

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.saveImageToPhotosAlbum](https://super-apps.ai/mop/document/en/develop/api/media.html#saveimagetophotosalbum) | Saves an image to the system photo album | 1.0.0 |  |
| [ft.previewMedia](https://super-apps.ai/mop/document/en/develop/api/media.html#previewmedia) | Previews images and videos | 1.0.0 |  |
| [ft.previewImage](https://super-apps.ai/mop/document/en/develop/api/media.html#previewimage) | Displays an image preview in full-screen on a new page | 1.0.0 |  |
| [ft.getImageInfo](https://super-apps.ai/mop/document/en/develop/api/media.html#getimageinfo) | Retrieves image information | 1.0.0 |  |
| [ft.compressImage](https://super-apps.ai/mop/document/en/develop/api/media.html#compressimage) | Compresses an image with optional quality settings | 1.0.0 |  |
| [ft.chooseFile](https://super-apps.ai/mop/document/en/develop/api/media.html#choosefile) | Selects files from a file picker | 3.0.35 |  |
| [ft.chooseMessageFile](https://super-apps.ai/mop/document/en/develop/api/media.html#choosemessagefile) | Selects files from client conversations | 2.0.32 | Requires app-specific injection |
| [ft.chooseImage](https://super-apps.ai/mop/document/en/develop/api/media.html#chooseimage) | Selects images from the local album or takes a photo using the camera | 1.0.0 |  |
| [ft.cropImage](https://super-apps.ai/mop/document/en/develop/api/media.html#cropimage) | Edits an image | 3.3.3 |  |
| [ft.editImage](https://super-apps.ai/mop/document/en/develop/api/media.html#editimage) | Crops an image | 3.3.3 |  |

Please Note

The following API is currently unsupported

| Name | Function Description |
| --- | --- |
| ft.chooseMessageFile | Selects files from client conversations |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_11-3-video) 11.3 Video

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.saveVideoToPhotosAlbum](https://super-apps.ai/mop/document/en/develop/api/media.html#savevideotophotosalbum) | Saves a video to the system photo album | 1.0.0 |  |
| [ft.createVideoContext](https://super-apps.ai/mop/document/en/develop/api/media.html#createvideocontext) | Creates a VideoContext object for the video | 1.0.0 |  |
| [ft.compressVideo](https://super-apps.ai/mop/document/en/develop/api/media.html#compressVideo) | Compresses a video | 1.0.0 |  |
| [ft.chooseVideo](https://super-apps.ai/mop/document/en/develop/api/media.html#choosevideo) | Captures a video or selects one from the phone's album | 1.0.0 |  |
| [ft.chooseMedia](https://super-apps.ai/mop/document/en/develop/api/media.html#choosemedia) | Captures or selects images/videos from the phone's album | 1.0.0 |  |
| [ft.previewVideo](https://super-apps.ai/mop/document/en/develop/api/media.html#previewvideo) | Previews a video | 1.0.0 |  |
| [ft.getVideoInfo](https://super-apps.ai/mop/document/en/develop/api/media.html#getvideoinfo) | Retrieves detailed video information | 3.1.17 |  |

Please Note

The following APIs are currently unsupported

| Name | Function Description |
| --- | --- |
| ft.openVideoEditor | Opens the video editor |
| ft.checkDeviceSupportHevc | Queries whether the device supports H.265 encoding |

#### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_11-3-1-videocontext) 11.3.1 videoContext

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [videoContext.exitBackgroundPlayback](https://super-apps.ai/mop/document/en/develop/api/media.html#videocontext-methods) | Exits background audio playback mode | 1.0.0 |  |
| [videoContext.exitFullScreen](https://super-apps.ai/mop/document/en/develop/api/media.html#videocontext-methods) | Exits full-screen mode | 1.0.0 |  |
| [videoContext.exitPictureInPicture](https://super-apps.ai/mop/document/en/develop/api/media.html#videocontext-methods) | Exits picture-in-picture mode; this method can be called on any page | 1.0.0 |  |
| [videoContext.hideStatusBar](https://super-apps.ai/mop/document/en/develop/api/media.html#videocontext-methods) | Hides the status bar; effective only in iOS full-screen mode | 1.0.0 |  |
| [videoContext.pause](https://super-apps.ai/mop/document/en/develop/api/media.html#videocontext-methods) | Pauses the video | 1.0.0 |  |
| [videoContext.play](https://super-apps.ai/mop/document/en/develop/api/media.html#videocontext-methods) | Plays the video | 1.0.0 |  |
| [videoContext.playbackRate](https://super-apps.ai/mop/document/en/develop/api/media.html#videocontext-methods) | Sets the playback speed | 1.0.0 |  |
| [videoContext.requestBackgroundPlayback](https://super-apps.ai/mop/document/en/develop/api/media.html#videocontext-methods) | Enters background audio playback mode | 1.0.0 |  |
| [videoContext.requestFullScreen](https://super-apps.ai/mop/document/en/develop/api/media.html#videocontext-methods) | Enters full-screen mode | 1.0.0 |  |
| [videoContext.seek](https://super-apps.ai/mop/document/en/develop/api/media.html#videocontext-methods) | Jumps to a specified position | 1.0.0 |  |
| [videoContext.sendDanmu](https://super-apps.ai/mop/document/en/develop/api/media.html#videocontext-methods) | Sends a danmu (bullet comment) | 1.0.0 |  |
| [videoContext.showStatusBar](https://super-apps.ai/mop/document/en/develop/api/media.html#videocontext-methods) | Shows the status bar; effective only in iOS full-screen mode | 1.0.0 |  |
| [videoContext.stop](https://super-apps.ai/mop/document/en/develop/api/media.html#videocontext-methods) | Stops the video | 1.0.0 |  |

Please Note

The following APIs are currently unsupported

| Name | Function Description |
| --- | --- |
| VideoContext.exitCasting | Exits casting |
| VideoContext.reconnectCasting | Reconnects to a casting device |
| VideoContext.startCasting | Starts casting, bringing up a half-screen device search |
| VideoContext.switchCasting | Switches casting devices |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_11-4-audio) 11.4 Audio

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.stopVoice](https://super-apps.ai/mop/document/en/develop/api/media.html#stopvoice) | Stops voice playback | 1.0.0 |  |
| [ft.setInnerAudioOption](https://super-apps.ai/mop/document/en/develop/api/media.html#setinneraudiooption) | Sets playback options for InnerAudioContext | 1.0.0 |  |
| [ft.playVoice](https://super-apps.ai/mop/document/en/develop/api/media.html#playvoice) | Starts playing a voice | 1.0.0 |  |
| [ft.pauseVoice](https://super-apps.ai/mop/document/en/develop/api/media.html#pausevoice) | Pauses a playing voice | 1.0.0 |  |
| [ft.createInnerAudioContext](https://super-apps.ai/mop/document/en/develop/api/media.html#createinneraudiocontext) | Creates an InnerAudioContext object | 1.0.0 |  |
| [ft.createAudioContext](https://super-apps.ai/mop/document/en/develop/api/media.html#createaudiocontext) | Creates an AudioContext object | 1.0.0 |  |
| [ft.getAvailableAudioSources](https://super-apps.ai/mop/document/en/develop/api/media.html#getavailableaudiosources) | Retrieves the currently supported audio input sources | 3.1.7 | Returns a fixed value "auto" in development tools |

Please Note

The following APIs are currently unsupported

| Name | Function Description |
| --- | --- |
| ft.createWebAudioContext | Creates a WebAudio context |
| ft.createMediaAudioPlayer | Creates a MediaAudioPlayer object, which can be used to play audio output from VideoDecoder |

#### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_11-4-1-audiobuffer) 11.4.1 AudioBuffer

Please Note

The following APIs are currently unsupported

| Name | Function Description |
| --- | --- |
| AudioBuffer.copyFromChannel | Copies data from a specified channel of AudioBuffer to an array buffer |
| AudioBuffer.copyToChannel | Copies samples from a specified array to a specific channel of AudioBuffer |
| AudioBuffer.getChannelData | Returns a Float32Array containing PCM data for the specified channel (0 represents the first channel) |

#### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_11-4-2-audiocontext) 11.4.2 audiocontext

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [audiocontext.setSrc](https://super-apps.ai/mop/document/en/develop/api/media.html#audiocontext) | Sets the audio source URL | 1.0.0 |  |
| [audiocontext.play](https://super-apps.ai/mop/document/en/develop/api/media.html#audiocontext) | Plays the audio | 1.0.0 |  |
| [audiocontext.pause](https://super-apps.ai/mop/document/en/develop/api/media.html#audiocontext) | Pauses the audio | 1.0.0 |  |
| [audiocontext.seek](https://super-apps.ai/mop/document/en/develop/api/media.html#audiocontext) | Jumps to a specified position | 1.0.0 |  |

#### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_11-4-3-inneraudiocontext) 11.4.3 InnerAudioContext

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [InnerAudioContext.destroy](https://super-apps.ai/mop/document/en/develop/api/media.html#inneraudiocontext) | Destroys the current instance | 1.0.0 |  |
| [InnerAudioContext.offCanplay](https://super-apps.ai/mop/document/en/develop/api/media.html#inneraudiocontext) | Cancels listening for the event when audio becomes playable | 1.0.0 |  |
| [InnerAudioContext.offEnded](https://super-apps.ai/mop/document/en/develop/api/media.html#inneraudiocontext) | Cancels listening for the event when audio naturally ends | 1.0.0 |  |
| [InnerAudioContext.offError](https://super-apps.ai/mop/document/en/develop/api/media.html#inneraudiocontext) | Cancels listening for audio playback error events | 1.0.0 |  |
| [InnerAudioContext.offTimeUpdate](https://super-apps.ai/mop/document/en/develop/api/media.html#inneraudiocontext) | Cancels listening for audio playback progress update events | 1.0.0 |  |
| [InnerAudioContext.offSeeking](https://super-apps.ai/mop/document/en/develop/api/media.html#inneraudiocontext) | Cancels listening for audio seeking operation events | 1.0.0 |  |
| [InnerAudioContext.offWaiting](https://super-apps.ai/mop/document/en/develop/api/media.html#inneraudiocontext) | Cancels listening for audio loading events | 1.0.0 |  |
| [InnerAudioContext.onEnded](https://super-apps.ai/mop/document/en/develop/api/media.html#inneraudiocontext) | Listens for the event when audio naturally ends | 1.0.0 |  |
| [InnerAudioContext.offPlay](https://super-apps.ai/mop/document/en/develop/api/media.html#inneraudiocontext) | Cancels listening for audio playback events | 1.0.0 |  |
| [InnerAudioContext.onCanplay](https://super-apps.ai/mop/document/en/develop/api/media.html#inneraudiocontext) | Listens for the event when audio becomes playable | 1.0.0 |  |
| [InnerAudioContext.onPause](https://super-apps.ai/mop/document/en/develop/api/media.html#inneraudiocontext) | Listens for audio pause events | 1.0.0 |  |
| [InnerAudioContext.offPause](https://super-apps.ai/mop/document/en/develop/api/media.html#inneraudiocontext) | Cancels listening for audio pause events | 1.0.0 |  |
| [InnerAudioContext.offSeeked](https://super-apps.ai/mop/document/en/develop/api/media.html#inneraudiocontext) | Cancels listening for the event when audio completes seeking | 1.0.0 |  |
| [InnerAudioContext.offStop](https://super-apps.ai/mop/document/en/develop/api/media.html#inneraudiocontext) | Cancels listening for audio stop events | 1.0.0 |  |
| [InnerAudioContext.onError](https://super-apps.ai/mop/document/en/develop/api/media.html#inneraudiocontext) | Listens for audio playback error events | 1.0.0 |  |
| [InnerAudioContext.onPlay](https://super-apps.ai/mop/document/en/develop/api/media.html#inneraudiocontext) | Listens for audio playback events | 1.0.0 |  |
| [InnerAudioContext.onSeeked](https://super-apps.ai/mop/document/en/develop/api/media.html#inneraudiocontext) | Listens for the event when audio completes seeking | 1.0.0 |  |
| [InnerAudioContext.onSeeking](https://super-apps.ai/mop/document/en/develop/api/media.html#inneraudiocontext) | Listens for audio seeking operation events | 1.0.0 |  |
| [InnerAudioContext.onStop](https://super-apps.ai/mop/document/en/develop/api/media.html#inneraudiocontext) | Listens for audio stop events | 1.0.0 |  |
| [InnerAudioContext.onTimeUpdate](https://super-apps.ai/mop/document/en/develop/api/media.html#inneraudiocontext) | Listens for audio playback progress update events | 1.0.0 |  |
| [InnerAudioContext.onWaiting](https://super-apps.ai/mop/document/en/develop/api/media.html#inneraudiocontext) | Listens for audio loading events | 1.0.0 |  |
| [InnerAudioContext.pause](https://super-apps.ai/mop/document/en/develop/api/media.html#inneraudiocontext) | Pauses | 1.0.0 |  |
| [InnerAudioContext.play](https://super-apps.ai/mop/document/en/develop/api/media.html#inneraudiocontext) | Plays | 1.0.0 |  |
| [InnerAudioContext.seek](https://super-apps.ai/mop/document/en/develop/api/media.html#inneraudiocontext) | Jumps to a specified position | 1.0.0 |  |
| [InnerAudioContext.stop](https://super-apps.ai/mop/document/en/develop/api/media.html#inneraudiocontext) | Stops | 1.0.0 |  |

#### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_11-4-4-mediaaudioplayer) 11.4.4 MediaAudioPlayer

Please Note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| MediaAudioPlayer.addAudioSource | Add audio source |
| MediaAudioPlayer.destroy | Destroy player |
| MediaAudioPlayer.removeAudioSource | Remove audio source |
| MediaAudioPlayer.start | Start player |
| MediaAudioPlayer.stop | Stop player |

#### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_11-4-5-webaudiocontext) 11.4.5 WebAudioContext

Please Note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| WebAudioContext.close | Close WebAudioContext |
| WebAudioContext.createAnalyser | Create an AnalyserNode |
| WebAudioContext.createBiquadFilter | Create a BiquadFilterNode |
| WebAudioContext.createBuffer | Create an AudioBuffer, representing a short audio clip stored in memory |
| WebAudioContext.createBufferSource | Create a BufferSourceNode instance to play audio data through an AudioBuffer object |
| WebAudioContext.createChannelMerger | Create a ChannelMergerNode |
| WebAudioContext.createChannelSplitter | Create a ChannelSplitterNode |
| WebAudioContext.createConstantSource | Create a ConstantSourceNode |
| WebAudioContext.createDelay | Create a DelayNode |
| WebAudioContext.createDynamicsCompressor | Create a DynamicsCompressorNode |
| WebAudioContext.createGain | Create a GainNode |
| WebAudioContext.createIIRFilter | Create an IIRFilterNode |
| WebAudioContext.createOscillator | Create an OscillatorNode |
| WebAudioContext.createPanner | Create a PannerNode |
| WebAudioContext.createPeriodicWave | Create a PeriodicWaveNode |
| WebAudioContext.createScriptProcessor | Create a ScriptProcessorNode |
| WebAudioContext.createWaveShaper | Create a WaveShaperNode |
| WebAudioContext.decodeAudioData | Asynchronously decode a resource into an AudioBuffer |
| WebAudioContext.resume | Synchronously resume a paused WebAudioContext context |
| WebAudioContext.suspend | Synchronously pause the WebAudioContext context |
| WebAudioContextNode | A type of audio processing module; different Nodes have different functions, such as GainNode (volume adjustment), etc. |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_11-5-background-audio) 11.5 Background Audio

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.stopBackgroundAudio](https://super-apps.ai/mop/document/en/develop/api/media.html#stopbackgroundaudio) | Stop playing music | 1.0.0 |  |
| [ft.seekBackgroundAudio](https://super-apps.ai/mop/document/en/develop/api/media.html#seekbackgroundaudio) | Control music playback progress | 1.0.0 |  |
| [ft.playBackgroundAudio](https://super-apps.ai/mop/document/en/develop/api/media.html#playbackgroundaudio) | Play music using the background player | 1.0.0 |  |
| [ft.pauseBackgroundAudio](https://super-apps.ai/mop/document/en/develop/api/media.html#pausebackgroundaudio) | Pause music playback | 1.0.0 |  |
| [ft.onBackgroundAudioStop](https://super-apps.ai/mop/document/en/develop/api/media.html#onbackgroundaudiostop) | Listen for music stop events | 1.0.0 |  |
| [ft.onBackgroundAudioPlay](https://super-apps.ai/mop/document/en/develop/api/media.html#onbackgroundaudioplay) | Listen for music playback events | 1.0.0 |  |
| [ft.onBackgroundAudioPause](https://super-apps.ai/mop/document/en/develop/api/media.html#onbackgroundaudiopause) | Listen for music pause events | 1.0.0 |  |
| [ft.getBackgroundAudioPlayerState](https://super-apps.ai/mop/document/en/develop/api/media.html#getbackgroundaudioplayerstate) | Get the state of the background music player | 1.0.0 |  |
| [ft.getBackgroundAudioManager](https://super-apps.ai/mop/document/en/develop/api/media.html#getbackgroundaudiomanager) | Get the globally unique background audio manager. If the Mini-Program enters the background and the audio is playing, it can continue to play. However, the background state cannot manipulate the audio playback state via API calls. | 2.12.12 |  |

#### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_11-5-1-backgroundaudiomanager) 11.5.1 backgroundaudiomanager

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [backgroundaudiomanager.onCanplay](https://super-apps.ai/mop/document/en/develop/api/media.html#backgroundaudiomanager) | Listen for background audio entering the playable state event | 1.0.0 |  |
| [backgroundaudiomanager.onEnded](https://super-apps.ai/mop/document/en/develop/api/media.html#backgroundaudiomanager) | Listen for background audio natural end-of-playback event | 1.0.0 |  |
| [BackgroundAudioManager.onError](https://super-apps.ai/mop/document/en/develop/api/media.html#backgroundaudiomanager) | Listen for background audio playback error event | 1.0.0 |  |
| [backgroundaudiomanager.onNext](https://super-apps.ai/mop/document/en/develop/api/media.html#backgroundaudiomanager) | Listen for user clicking the next track event on the system music playback panel (iOS only) | 1.0.0 |  |
| [backgroundaudiomanager.onPause](https://super-apps.ai/mop/document/en/develop/api/media.html#backgroundaudiomanager) | Listen for background audio pause event | 1.0.0 |  |
| [backgroundaudiomanager.onPlay](https://super-apps.ai/mop/document/en/develop/api/media.html#backgroundaudiomanager) | Listen for background audio playback event | 1.0.0 |  |
| [backgroundaudiomanager.onPrev](https://super-apps.ai/mop/document/en/develop/api/media.html#backgroundaudiomanager) | Listen for user clicking the previous track event on the system music playback panel (iOS only) | 1.0.0 |  |
| [backgroundaudiomanager.onSeeked](https://super-apps.ai/mop/document/en/develop/api/media.html#backgroundaudiomanager) | Listen for background audio completion of seek operation event | 1.0.0 |  |
| [backgroundaudiomanager.onSeeking](https://super-apps.ai/mop/document/en/develop/api/media.html#backgroundaudiomanager) | Listen for background audio start of seek operation event | 1.0.0 |  |
| [backgroundaudiomanager.onStop](https://super-apps.ai/mop/document/en/develop/api/media.html#backgroundaudiomanager) | Listen for background audio stop event | 1.0.0 |  |
| [backgroundaudiomanager.onTimeUpdate](https://super-apps.ai/mop/document/en/develop/api/media.html#backgroundaudiomanager) | Listen for background audio playback progress update event; callbacks occur only when the Mini-Program is in the foreground | 1.0.0 |  |
| [backgroundaudiomanager.onWaiting](https://super-apps.ai/mop/document/en/develop/api/media.html#backgroundaudiomanager) | Listen for audio loading event | 1.0.0 |  |
| [backgroundaudiomanager.pause](https://super-apps.ai/mop/document/en/develop/api/media.html#backgroundaudiomanager) | Pause music | 1.0.0 |  |
| [backgroundaudiomanager.play](https://super-apps.ai/mop/document/en/develop/api/media.html#backgroundaudiomanager) | Play music | 1.0.0 |  |
| [backgroundaudiomanager.seek](https://super-apps.ai/mop/document/en/develop/api/media.html#backgroundaudiomanager) | Jump to a specified position | 1.0.0 |  |
| [backgroundaudiomanager.stop](https://super-apps.ai/mop/document/en/develop/api/media.html#backgroundaudiomanager) | Stop music | 1.0.0 |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_11-6-real-time-audio-and-video) 11.6 Real-Time Audio and Video

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.createLivePusherContext](https://super-apps.ai/mop/document/en/develop/api/media.html#createlivepushercontext) | Create a live-pusher context LivePusherContext object | 1.0.0 |  |
| [ft.createLivePlayerContext](https://super-apps.ai/mop/document/en/develop/api/media.html#createliveplayercontext) | Create a live-player context LivePlayerContext object | 1.0.0 |  |

#### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_11-6-1-liveplayercontext) 11.6.1 LivePlayerContext

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [LivePlayerContext.exitPictureInPicture](https://super-apps.ai/mop/document/en/develop/api/media.html#createliveplayercontext) | Exit picture-in-picture mode; this method can be called from any page | 1.0.0 |  |
| [LivePlayerContext.mute](https://super-apps.ai/mop/document/en/develop/api/media.html#createliveplayercontext) | Mute | 1.0.0 |  |
| [LivePlayerContext.pause](https://super-apps.ai/mop/document/en/develop/api/media.html#createliveplayercontext) | Pause | 1.0.0 |  |
| [LivePlayerContext.play](https://super-apps.ai/mop/document/en/develop/api/media.html#createliveplayercontext) | Play | 1.0.0 |  |
| [LivePlayerContext.resume](https://super-apps.ai/mop/document/en/develop/api/media.html#createliveplayercontext) | Resume | 1.0.0 |  |
| [LivePlayerContext.stop](https://super-apps.ai/mop/document/en/develop/api/media.html#createliveplayercontext) | Stop | 1.0.0 |  |

Please Note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| LivePlayerContext.exitFullScreen | Exit background audio playback mode |
| LivePlayerContext.requestFullScreen | Enter full screen |
| LivePlayerContext.snapshot | Take a screenshot |
| LivePlayerContext.requestPictureInPicture | Enter picture-in-picture mode |
| LivePlayerContext.exitCasting | Exit casting |
| LivePlayerContext.reconnectCasting | Reconnect to casting device |
| LivePlayerContext.startCasting | Start casting, pulling up a half-screen search for devices |
| LivePlayerContext.switchCasting | Switch casting device |
| LivePlayerContext.requestBackgroundPlayback | Enter background audio playback mode |
| LivePlayerContext.exitBackgroundPlayback | Exit background audio playback mode |

#### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_11-6-2-livepushercontext) 11.6.2 LivePusherContext

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [LivePusherContext.exitPictureInPicture](https://super-apps.ai/mop/document/en/develop/api/media.html#createlivepushercontext) | Exit picture-in-picture mode; this method can be called from any page | 1.0.0 |  |
| [LivePusherContext.pause](https://super-apps.ai/mop/document/en/develop/api/media.html#createlivepushercontext) | Pause streaming | 1.0.0 |  |
| [LivePusherContext.resume](https://super-apps.ai/mop/document/en/develop/api/media.html#createlivepushercontext) | Resume streaming | 1.0.0 |  |
| [LivePusherContext.start](https://super-apps.ai/mop/document/en/develop/api/media.html#createlivepushercontext) | Start streaming and enable camera preview simultaneously | 1.0.0 |  |
| [LivePusherContext.startPreview](https://super-apps.ai/mop/document/en/develop/api/media.html#createlivepushercontext) | Enable camera preview | 1.0.0 |  |
| [LivePusherContext.stop](https://super-apps.ai/mop/document/en/develop/api/media.html#createlivepushercontext) | Stop streaming and disable camera preview simultaneously | 1.0.0 |  |
| [LivePusherContext.stopPreview](https://super-apps.ai/mop/document/en/develop/api/media.html#createlivepushercontext) | Disable camera preview | 1.0.0 |  |
| [LivePusherContext.switchCamera](https://super-apps.ai/mop/document/en/develop/api/media.html#createlivepushercontext) | Switch between front and rear cameras | 1.0.0 |  |

Please Note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| LivePusherContext.pauseBGM | Pause background music |
| LivePusherContext.playBGM | Play background music |
| LivePusherContext.resumeBGM | Resume background music |
| LivePusherContext.sendMessage | Send SEI message |
| LivePusherContext.setBGMVolume | Set background music volume |
| LivePusherContext.setMICVolume | Set microphone volume |
| LivePusherContext.snapshot | Take a snapshot |
| LivePusherContext.toggleTorch | Toggle flashlight |
| LivePusherContext.stopBGM | Stop background music |
| LivePusherContext.applyBlusherStickMakeup | Apply blush makeup effect |
| LivePusherContext.applyEyeBrowMakeup | Apply eyebrow makeup effect |
| LivePusherContext.applyEyeShadowMakeup | Apply eyeshadow makeup effect |
| LivePusherContext.applyFaceContourMakeup | Apply contour makeup effect |
| LivePusherContext.applyFilter | Apply filter effect |
| LivePusherContext.applyLipStickMakeup | Apply lipstick makeup effect |
| LivePusherContext.applySticker | Apply sticker effect |
| LivePusherContext.clearFilters | Clear all filter effects |
| LivePusherContext.clearMakeups | Clear all makeup effects |
| LivePusherContext.clearStickers | Clear all sticker effects |
| LivePusherContext.createOffscreenCanvas | Create an offscreen Canvas that can receive LivePusher texture capture |
| LivePusherContext.getMaxZoom | Get maximum zoom level |
| LivePusherContext.onCustomRendererEvent | When custom rendering is enabled, developers can subscribe to related events via this method |
| LivePusherContext.setZoom | Set zoom level |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_11-7-recording) 11.7 Recording

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.stopRecord](https://super-apps.ai/mop/document/en/develop/api/media.html#stoprecord) | Stop recording | 1.0.0 |  |
| [ft.startRecord](https://super-apps.ai/mop/document/en/develop/api/media.html#startrecord) | Start recording | 1.0.0 |  |
| [ft.getRecorderManager](https://super-apps.ai/mop/document/en/develop/api/media.html#getrecordermanager) | Get the globally unique RecorderManager | 1.0.0 |  |

#### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_11-7-1-recordermanager) 11.7.1 RecorderManager

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [RecorderManager.onError](https://super-apps.ai/mop/document/en/develop/api/media.html#recordermanager) | Listen for recording error events | 1.0.0 |  |
| [RecorderManager.onFrameRecorded](https://super-apps.ai/mop/document/en/develop/api/media.html#recordermanager) | Listen for events indicating that a file with a specified frame size has been recorded | 1.0.0 |  |
| [RecorderManager.onInterruptionBegin](https://super-apps.ai/mop/document/en/develop/api/media.html#recordermanager) | Listen for events indicating that recording has been interrupted due to system occupation | 1.0.0 |  |
| [RecorderManager.onInterruptionEnd](https://super-apps.ai/mop/document/en/develop/api/media.html#recordermanager) | Listen for recording interruption end events | 1.0.0 |  |
| [RecorderManager.onPause](https://super-apps.ai/mop/document/en/develop/api/media.html#recordermanager) | Listen for recording pause events | 1.0.0 |  |
| [RecorderManager.onResume](https://super-apps.ai/mop/document/en/develop/api/media.html#recordermanager) | Listen for recording resume events | 1.0.0 |  |
| [RecorderManager.onStop](https://super-apps.ai/mop/document/en/develop/api/media.html#recordermanager) | Listen for recording stop events | 1.0.0 |  |
| [RecorderManager.pause](https://super-apps.ai/mop/document/en/develop/api/media.html#recordermanager) | Pause recording | 1.0.0 |  |
| [RecorderManager.resume](https://super-apps.ai/mop/document/en/develop/api/media.html#recordermanager) | Resume recording | 1.0.0 |  |
| [RecorderManager.onStart](https://super-apps.ai/mop/document/en/develop/api/media.html#recordermanager) | Listen for recording start events | 1.0.0 |  |
| [RecorderManager.stop](https://super-apps.ai/mop/document/en/develop/api/media.html#recordermanager) | Stop recording | 1.0.0 |  |
| [RecorderManager.start](https://super-apps.ai/mop/document/en/develop/api/media.html#recordermanager) | Start recording | 1.0.0 |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_11-8-camera) 11.8 Camera

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.createCameraContext](https://super-apps.ai/mop/document/en/develop/api/media.html#createcameracontext) | Create a camera context CameraContext object | 1.0.0 |  |

#### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_11-8-1-cameracontext) 11.8.1 CameraContext

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [CameraContext.onCameraFrame](https://super-apps.ai/mop/document/en/develop/api/media.html#cameracontext-oncameraframe) | Get real-time frame data from the Camera | 1.0.0 |  |
| [CameraContext.setZoom](https://super-apps.ai/mop/document/en/develop/api/media.html#cameracontext-setzoom) | Set zoom level | 1.0.0 |  |
| [CameraContext.startRecord](https://super-apps.ai/mop/document/en/develop/api/media.html#cameracontext-startrecord) | Start video recording | 1.0.0 |  |
| [CameraContext.stopRecord](https://super-apps.ai/mop/document/en/develop/api/media.html#cameracontext-stoprecord) | End video recording | 1.0.0 |  |
| [CameraContext.takePhoto](https://super-apps.ai/mop/document/en/develop/api/media.html#cameracontext-takephoto) | Take a photo | 1.0.0 |  |

#### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_11-8-2-cameraframelistener) 11.8.2 CameraFrameListener

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [CameraFrameListener.start](https://super-apps.ai/mop/document/en/develop/api/media.html#cameraframelistener-start) | Start listening for frame data | 1.0.0 |  |
| [CameraFrameListener.stop](https://super-apps.ai/mop/document/en/develop/api/media.html#cameraframelistener-stop) | Stop listening for frame data | 1.0.0 |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_11-9-rich-text) 11.9 Rich Text

#### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_11-9-1-editorcontext) 11.9.1 EditorContext

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [EditorContext.focus](https://super-apps.ai/mop/document/en/develop/api/media.html#editorcontext-focus) | Focus the editor; note that due to system limitations on iOS, the focus method cannot be used normally | 3.9.4 |  |
| [EditorContext.blur](https://super-apps.ai/mop/document/en/develop/api/media.html#editorcontext-blur) | Defocus the editor and hide the keyboard simultaneously | 1.0.0 |  |
| [EditorContext.clear](https://super-apps.ai/mop/document/en/develop/api/media.html#editorcontext-clear) | Clear the editor content | 1.0.0 |  |
| [EditorContext.format](https://super-apps.ai/mop/document/en/develop/api/media.html#editorcontext-format) | Modify styles | 1.0.0 |  |
| [EditorContext.getContents](https://super-apps.ai/mop/document/en/develop/api/media.html#editorcontext-getcontents) | Get editor content | 1.0.0 |  |
| [EditorContext.getSelectionText](https://super-apps.ai/mop/document/en/develop/api/media.html#editorcontext-getselectiontext) | Get plain text content within the selected area of the editor | 1.0.0 |  |
| [EditorContext.insertDivider](https://super-apps.ai/mop/document/en/develop/api/media.html#editorcontext-insertdivider) | Insert a divider | 1.0.0 |  |
| [EditorContext.insertImage](https://super-apps.ai/mop/document/en/develop/api/media.html#editorcontext-insertimage) | Insert an image | 1.0.0 |  |
| [EditorContext.insertText](https://super-apps.ai/mop/document/en/develop/api/media.html#editorcontext-inserttext) | Overwrite the current selection with a block of text | 1.0.0 |  |
| [EditorContext.redo](https://super-apps.ai/mop/document/en/develop/api/media.html#editorcontext-redo) | Redo | 1.0.0 |  |
| [EditorContext.removeFormat](https://super-apps.ai/mop/document/en/develop/api/media.html#editorcontext-removeformat) | Clear the style of the current selection | 1.0.0 |  |
| [EditorContext.scrollIntoView](https://super-apps.ai/mop/document/en/develop/api/media.html#editorcontext-scrollintoview) | Scroll the editor's cursor into the visible area of the window | 1.0.0 |  |
| [EditorContext.setContents](https://super-apps.ai/mop/document/en/develop/api/media.html#editorcontext-setcontents) | Initialize editor content; if both html and delta exist, only delta takes effect | 1.0.0 |  |
| [EditorContext.undo](https://super-apps.ai/mop/document/en/develop/api/media.html#editorcontext-undo) | Undo | 1.0.0 |  |
| [EditorContext.insertCustomBlock](https://super-apps.ai/mop/document/en/develop/api/media.html#editorcontext-insertcustomblock) | Insert a custom block | 3.10.1 |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_11-10-audio-and-video-composition) 11.10 Audio and Video Composition

Please Note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| ft.createMediaContainer | Create an audio and video processing container, which can ultimately synthesize the tracks in the container into a video |

#### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_11-10-1-mediacontainer) 11.10.1 MediaContainer

Please Note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| MediaContainer.addTrack | Add audio or video tracks to the container |
| MediaContainer.destroy | Destroy the container and release resources |
| MediaContainer.export | Merge and export video files from the tracks in the container |
| MediaContainer.extractDataSource | Separate tracks from the input video source |
| MediaContainer.removeTrack | Remove audio or video tracks from the container |
| MediaTrack | Can be returned by MediaContainer.extractDataSource |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_11-11-real-time-voice) 11.11 Real-Time Voice

Please Note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| ft.updateVoIPChatMuteConfig | Update real-time voice mute settings |
| ft.subscribeVoIPVideoMembers | Subscribe to video member streams |
| ft.setEnable1v1Chat | Enable one-on-one chat |
| ft.onVoIPVideoMembersChanged | Listen for changes in the video status of real-time voice call members |
| ft.onVoIPChatStateChanged | Listen for room state change events |
| ft.onVoIPChatSpeakersChanged | Listen for changes in the call status of real-time voice call members |
| ft.onVoIPChatMembersChanged | Listen for changes in the online status of real-time voice call members |
| ft.offVoIPChatSpeakersChanged | Remove the listener function for changes in the call status of real-time voice call members |
| ft.onVoIPChatInterrupted | Listen for events where real-time voice calls are passively disconnected |
| ft.offVoIPVideoMembersChanged | Stop listening for changes in the video status of real-time voice call members |
| ft.offVoIPChatStateChanged | Stop listening for room state change events |
| ft.offVoIPChatMembersChanged | Stop listening for changes in the online status of real-time voice call members |
| ft.offVoIPChatInterrupted | Stop listening for events where real-time voice calls are passively disconnected |
| ft.joinVoIPChat | Join (create) a real-time voice call, more information can be found in the Real-Time Voice Guide |
| ft.exitVoIPChat | Exit (destroy) a real-time voice call |
| ft.join1v1Chat | Join (create) a one-on-one chat |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_11-12-screen-recorder) 11.12 Screen Recorder

Please Note

The following APIs are not yet supported

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| ft.createMediaRecorder | Create a WebGL screen recorder that can record frames rendered on WebGL and export video files |  |  |

#### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_11-12-1-mediarecorder) 11.12.1 MediaRecorder

Please Note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| MediaRecorder.pause | Pause recording |
| MediaRecorder.resume | Resume recording |
| MediaRecorder.start | Start recording |
| MediaRecorder.stop | Stop recording |
| MediaRecorder.off | Remove event listeners for recording |
| MediaRecorder.on | Register callback functions to listen for recording events |
| MediaRecorder.requestFrame | Request the next frame for recording; after rendering one frame in the callback, start recording the current frame |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_11-13-video-decoder) 11.13 Video Decoder

Please Note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| ft.createVideoDecoder | Create a video decoder that can obtain decoded data frame by frame |

#### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_11-13-1-videodecoder) 11.13.1 VideoDecoder

Please Note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| VideoDecoder.getFrameData | Get the decoded data of the next frame |
| VideoDecoder.off | Remove event listeners for recording |
| VideoDecoder.on | Register callback functions to listen for recording events |
| VideoDecoder.remove | Remove the decoder |
| VideoDecoder.seek | Jump to a specific time point for decoding |
| VideoDecoder.start | Start decoding |
| VideoDecoder.stop | Stop decoding |

## [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_12-location) 12\. Location

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.openLocation](https://super-apps.ai/mop/document/en/develop/api/location.html#openlocation) | Use the built-in map to view location | 1.0.0 |  |
| [ft.startLocationUpdate](https://super-apps.ai/mop/document/en/develop/api/location.html#startLocationUpdate) | Enable receiving location messages when the Mini-Program enters the foreground | 1.0.0 |  |
| [ft.getLocation](https://super-apps.ai/mop/document/en/develop/api/location.html#getlocation) | Get the current geographical location and speed | 1.0.0 |  |
| [ft.choosePoi](https://super-apps.ai/mop/document/en/develop/api/location.html#choosepoi) | Open the POI list to select a location, supporting fuzzy positioning (accurate to the city) and precise positioning | 2.12.1 |  |
| [ft.chooseLocation](https://super-apps.ai/mop/document/en/develop/api/location.html#chooselocation) | Open the map to select a location | 1.0.0 |  |
| [ft.stopLocationUpdate](https://super-apps.ai/mop/document/en/develop/api/location.html#stoplocationupdate) | Disable monitoring of real-time location changes, stopping message reception both in the foreground and background | 3.0.18 |  |
| [ft.startLocationUpdateBackground](https://super-apps.ai/mop/document/en/develop/api/location.html#startlocationupdatebackground) | Enable receiving location messages when the Mini-Program enters the foreground or background, requiring user authorization | 3.0.18 |  |
| [ft.onLocationChange](https://super-apps.ai/mop/document/en/develop/api/location.html#onlocationchange) | Listen for real-time geographical location change events, used with ft.startLocationUpdateBackground and wx.startLocationUpdate | 3.0.18 |  |
| [ft.offLocationChange](https://super-apps.ai/mop/document/en/develop/api/location.html#offlocationchange) | Cancel listening for real-time geographical location change events | 3.0.18 |  |
| [ft.onLocationChangeError](https://super-apps.ai/mop/document/en/develop/api/location.html#onlocationchangeerror) | Listen for continuous location interface failure events | 3.0.18 |  |
| [ft.offLocationChangeError](https://super-apps.ai/mop/document/en/develop/api/location.html#offlocationchangeerror) | Remove continuous location interface failure events | 3.0.18 |  |

Please Note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| getFuzzyLocation | Get the current approximate geographical location |

## [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_13-file) 13\. File

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.saveFile](https://super-apps.ai/mop/document/en/develop/api/file.html#savefile) | Save a file locally | 1.0.0 |  |
| [ft.removeSavedFile](https://super-apps.ai/mop/document/en/develop/api/file.html#removesavedfile) | Delete a locally cached file | 1.0.0 |  |
| [ft.openDocument](https://super-apps.ai/mop/document/en/develop/api/file.html#opendocument) | Open a document in a new page | 1.0.0 |  |
| [ft.getSavedFileList](https://super-apps.ai/mop/document/en/develop/api/file.html#getsavedfilelist) | Get the list of locally cached files saved under this Mini-Program | 1.0.0 |  |
| [ft.getSavedFileInfo](https://super-apps.ai/mop/document/en/develop/api/file.html#getsavedfileinfo) | Get local file information | 1.0.0 |  |
| [ft.getFileSystemManager](https://super-apps.ai/mop/document/en/develop/api/file.html#getfilesystemmanager) | Get the globally unique file manager | 1.0.0 |  |
| [ft.getFileInfo](https://super-apps.ai/mop/document/en/develop/api/file.html#getfileinfo) | Get file information | 1.0.0 |  |
| [ft.saveFileToDisk](https://super-apps.ai/mop/document/en/develop/api/file.html#savefiletodisk) | Save a file system file to the user's disk, supported only on PC | 1.0.0 |  |

## [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_13-1-filesystemmanager) 13.1 FileSystemManager

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [FileSystemManager.accessSync](https://super-apps.ai/mop/document/en/develop/api/file.html#filesystemmanager-accesssync) | Check if a file/directory exists | 1.0.0 |  |
| [FileSystemManager.access](https://super-apps.ai/mop/document/en/develop/api/file.html#filesystemmanager-access) | Check if a file/directory exists | 1.0.0 |  |
| [FileSystemManager.appendFile](https://super-apps.ai/mop/document/en/develop/api/file.html#filesystemmanager-appendfile) | Append content to the end of a file | 1.0.0 |  |
| [FileSystemManager.appendFileSync](https://super-apps.ai/mop/document/en/develop/api/file.html#filesystemmanager-appendfilesync) | Synchronous version of FileSystemManager.appendFile | 1.0.0 |  |
| [FileSystemManager.close](https://super-apps.ai/mop/document/en/develop/api/file.html#filesystemmanager-close) | Close a file | 1.0.0 |  |
| [FileSystemManager.closeSync](https://super-apps.ai/mop/document/en/develop/api/file.html#filesystemmanager-closesync) | Synchronously close a file | 1.0.0 |  |
| [FileSystemManager.copyFile](https://super-apps.ai/mop/document/en/develop/api/file.html#filesystemmanager-copyfile) | Copy a file | 1.0.0 |  |
| [FileSystemManager.copyFileSync](https://super-apps.ai/mop/document/en/develop/api/file.html#filesystemmanager-copyfilesync) | Synchronous version of FileSystemManager.copyFile | 1.0.0 |  |
| [FileSystemManager.getFileInfo](https://super-apps.ai/mop/document/en/develop/api/file.html#filesystemmanager-getfileinfo) | Get information about local temporary files or locally cached files under this Mini-Program | 1.0.0 |  |
| [FileSystemManager.getSavedFileList](https://super-apps.ai/mop/document/en/develop/api/file.html#filesystemmanager-getsavedfileList) | Get the list of locally cached files saved under this Mini-Program | 1.0.0 |  |
| [FileSystemManager.mkdir](https://super-apps.ai/mop/document/en/develop/api/file.html#filesystemmanager-mkdir) | Create a directory | 1.0.0 |  |
| [FileSystemManager.mkdirSync](https://super-apps.ai/mop/document/en/develop/api/file.html#filesystemmanager-mkdirsync) | Synchronous version of FileSystemManager.mkdir | 1.0.0 |  |
| [FileSystemManager.readdir](https://super-apps.ai/mop/document/en/develop/api/file.html#filesystemmanager-readdir) | Read the list of files in a directory | 1.0.0 |  |
| [FileSystemManager.readdirSync](https://super-apps.ai/mop/document/en/develop/api/file.html#filesystemmanager-readdirsync) | Synchronous version of FileSystemManager.readdir | 1.0.0 |  |
| [FileSystemManager.readFile](https://super-apps.ai/mop/document/en/develop/api/file.html#filesystemmanager-readfile) | Read local file content | 1.0.0 |  |
| [FileSystemManager.readFileSync](https://super-apps.ai/mop/document/en/develop/api/file.html#filesystemmanager-readfilesync) | Synchronous version of FileSystemManager.readFile | 1.0.0 |  |
| [FileSystemManager.removeSavedFile](https://super-apps.ai/mop/document/en/develop/api/file.html#filesystemmanager-removesavedfile) | Delete a locally cached file saved under this Mini-Program | 1.0.0 |  |
| [FileSystemManager.rename](https://super-apps.ai/mop/document/en/develop/api/file.html#filesystemmanager-rename) | Rename a file | 1.0.0 |  |
| [FileSystemManager.renameSync](https://super-apps.ai/mop/document/en/develop/api/file.html#filesystemmanager-renamesync) | Synchronous version of FileSystemManager.rename | 1.0.0 |  |
| [FileSystemManager.rmdir](https://super-apps.ai/mop/document/en/develop/api/file.html#filesystemmanager-rmdir) | Delete a directory | 1.0.0 |  |
| [FileSystemManager.rmdirSync](https://super-apps.ai/mop/document/en/develop/api/file.html#filesystemmanager-rmdirsync) | Synchronous version of FileSystemManager.rmdir | 1.0.0 |  |
| [FileSystemManager.saveFile](https://super-apps.ai/mop/document/en/develop/api/file.html#filesystemmanager-savefile) | Save a temporary file locally | 1.0.0 |  |
| [FileSystemManager.saveFileSync](https://super-apps.ai/mop/document/en/develop/api/file.html#filesystemmanager-savefilesync) | Synchronous version of FileSystemManager.saveFile | 1.0.0 |  |
| [FileSystemManager.stat](https://super-apps.ai/mop/document/en/develop/api/file.html#filesystemmanager-stat) | Get a file Stats object | 1.0.0 |  |
| [FileSystemManager.statSync](https://super-apps.ai/mop/document/en/develop/api/file.html#filesystemmanager-statsync) | Synchronous version of FileSystemManager.stat | 1.0.0 |  |
| [FileSystemManager.unlink](https://super-apps.ai/mop/document/en/develop/api/file.html#filesystemmanager-unlink) | Delete a file | 1.0.0 |  |
| [FileSystemManager.unlinkSync](https://super-apps.ai/mop/document/en/develop/api/file.html#filesystemmanager-unlinksync) | Synchronous version of FileSystemManager.unlink | 1.0.0 |  |
| [FileSystemManager.unzip](https://super-apps.ai/mop/document/en/develop/api/file.html#filesystemmanager-unzip) | Unzip a file | 1.0.0 |  |
| [FileSystemManager.writeFile](https://super-apps.ai/mop/document/en/develop/api/file.html#filesystemmanager-writefile) | Write to a file | 1.0.0 |  |
| [FileSystemManager.writeFileSync](https://super-apps.ai/mop/document/en/develop/api/file.html#filesystemmanager-writefilesync) | Synchronous version of FileSystemManager.writeFile | 1.0.0 |  |
| [FileSystemManager.write](https://super-apps.ai/mop/document/en/develop/api/file.html#filesystemmanager-write) | Write to a file | 1.0.0 |  |
| [FileSystemManager.writeSync](https://super-apps.ai/mop/document/en/develop/api/file.html#filesystemmanager-writesync) | Synchronous version of FileSystemManager.write | 1.0.0 |  |
| [FileSystemManager.fstat](https://super-apps.ai/mop/document/en/develop/api/file.html#filesystemmanager-fstat) | Get file status information | 1.0.0 |  |
| [FileSystemManager.fstatSync](https://super-apps.ai/mop/document/en/develop/api/file.html#filesystemmanager-fstatsync) | Synchronously get file status information | 1.0.0 |  |
| [FileSystemManager.ftruncate](https://super-apps.ai/mop/document/en/develop/api/file.html#filesystemmanager-ftruncate) | Truncate file content | 1.0.0 |  |
| [FileSystemManager.ftruncateSync](https://super-apps.ai/mop/document/en/develop/api/file.html#filesystemmanager-ftruncatesync) | Truncate file content | 1.0.0 |  |
| [FileSystemManager.open](https://super-apps.ai/mop/document/en/develop/api/file.html#filesystemmanager-open) | Open a file, returning a file descriptor | 1.0.0 |  |
| [FileSystemManager.openSync](https://super-apps.ai/mop/document/en/develop/api/file.html#filesystemmanager-opensync) | Synchronously open a file, returning a file descriptor | 1.0.0 |  |
| [FileSystemManager.read](https://super-apps.ai/mop/document/en/develop/api/file.html#filesystemmanager-read) | Read a file | 1.0.0 |  |
| [FileSystemManager.readSync](https://super-apps.ai/mop/document/en/develop/api/file.html#filesystemmanager-readsync) | Read a file | 1.0.0 |  |
| [FileSystemManager.readZipEntry](https://super-apps.ai/mop/document/en/develop/api/file.html#filesystemmanager-readzipentry) | Read files within a compressed archive | 1.0.0 |  |
| [FileSystemManager.truncate](https://super-apps.ai/mop/document/en/develop/api/file.html#filesystemmanager-truncate) | Truncate file content | 1.0.0 |  |
| [FileSystemManager.truncateSync](https://super-apps.ai/mop/document/en/develop/api/file.html#filesystemmanager-truncatesync) | Truncate file content (synchronous version of truncate) | 1.0.0 |  |
| [FileSystemManager.readCompressedFile](https://super-apps.ai/mop/document/en/develop/api/file.html#filesystemmanager-readcompressedfile) | Synchronously read the contents of a local file of a specified compression type | 3.3.7 | Supported from SDK 2.45.1, requires adding the Extension SDK |
| [FileSystemManager.readCompressedFileSync](https://super-apps.ai/mop/document/en/develop/api/file.html#filesystemmanager-readcompressedfilesync) | Synchronously read the contents of a local file of a specified compression type | 3.3.7 | Supported from SDK 2.45.1, requires adding the Extension SDK, Android only supports synchronous operations |

## [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_13-2-stats) 13.2 Stats

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| Stats.isDirectory | Check if the current file is a directory | 1.0.0 |  |
| Stats.isFile | Check if the current file is a regular file | 1.0.0 |  |
| WriteResult | File write result | 1.0.0 |  |

## [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_14-open-interface) 14\. Open Interface

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_14-1-login) 14.1 Login

Please Note

- The following APIs require integrating the Extension SDK or implementing corresponding proxy methods in the App.
- You can click [here](https://super-apps.ai/mop/document/introduce/functionDescription/wx-login.html) to learn how to reuse WeChat login capabilities in Mini-Programs.

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| ft.login | Call the interface to obtain a login credential (code) | 1.0.0 |  |
| ft.checkSession | Check whether the login status has expired | 1.0.0 |  |

Please Note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| ft.pluginLogin | This interface can only be called in Mini-Program plugins to obtain a plugin user identifier (code) |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_14-2-account-information) 14.2 Account Information

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.getAccountInfoSync](https://super-apps.ai/mop/document/en/develop/api/basic.html#getaccountinfosync) | Get current account information | 1.0.0 |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_14-3-user-information) 14.3 User Information

Please Note

- The following APIs require integrating the Extension SDK or implementing corresponding proxy methods in the App.
- You can click [here](https://super-apps.ai/mop/document/introduce/functionDescription/wx-login.html) to learn how to reuse WeChat login capabilities in Mini-Programs.
- You can click [here](https://super-apps.ai/mop/document/en/runtime-sdk/ios/api/api-delegate.html#_2-2-getuserinfo) to learn how to implement the iOS proxy method for getUserInfo.
- You can click [here](https://super-apps.ai/mop/document/en/runtime-sdk/android/api/api-delegate.html#_1-iapplethandler) to learn how to implement the Android interface method for getUserInfo.

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| ft.getUserProfile | Get user information | 1.0.0 | Note: Using this API requires integrating the WeChat Extension SDK |
| ft.getUserInfo | Get user information | 1.0.0 | Note: Using this API requires the App to implement the proxy method |
| UserInfo | User information | 1.0.0 |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_14-4-authorization) 14.4 Authorization

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.authorize](https://super-apps.ai/mop/document/en/develop/api/open-api.html#authorize) | Request user authorization in advance | 1.0.0 |  |

Please Note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| ft.authorizeForMiniProgram | Only callable within Mini-Program plugins, usage same as ft.authorize |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_14-5-settings) 14.5 Settings

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.openSetting](https://super-apps.ai/mop/document/en/develop/api/open-api.html#opensetting) | Open the Mini-Program settings interface on the client side, returning the user's operation results | 1.0.0 |  |
| [ft.getSetting](https://super-apps.ai/mop/document/en/develop/api/open-api.html#getsetting) | Get the user's current settings | 1.0.0 |  |
| [AuthSetting](https://super-apps.ai/mop/document/en/develop/api/open-api.html#authsetting) | User authorization settings information, refer to permissions for details | 1.0.0 |  |

Please Note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| SubscriptionsSetting | Subscription message settings |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_14-6-shipping-address) 14.6 Shipping Address

Please Note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| ft.chooseAddress | Get the user's shipping address |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_14-7-coupons) 14.7 Coupons

Please note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| ft.openCard | View cards in WeChat Card Wallet |
| ft.addCard | Add multiple cards at once |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_14-8-invoices) 14.8 Invoices

Please note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| ft.chooseInvoiceTitle | Select the user's invoice title |
| ft.chooseInvoice | Select an existing invoice from the user |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_14-9-biometric-authentication) 14.9 Biometric Authentication

Please note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| ft.startSoterAuthentication | Start SOTER biometric authentication |
| ft.checkIsSupportSoterAuthentication | Get the SOTER biometric authentication methods supported by this device |
| ft.checkIsSoterEnrolledInDevice | Interface to check if biometric information such as fingerprints has been registered on the device |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_14-10-fitness) 14.10 Fitness

Please note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| ft.shareToWeRun | Share data to fitness |
| ft.getWeRunData | Get the user's step count for the past thirty days |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_14-11-subscription-messages) 14.11 Subscription Messages

Please note

The ft.requestSubscribeMessage message subscription API is now supported, refer to [Mini-Program Message Subscription Push Process](https://super-apps.ai/mop/document/introduce/functionDescription/message-delivery.html#%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E6%8E%A8%E9%80%81%E6%B5%81%E7%A8%8B)

Please note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| ft.requestSubscribeDeviceMessage | Subscribe to device messages interface, which triggers an authorization popup after invocation |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_14-12-wechat-red-envelopes) 14.12 WeChat Red Envelopes

Please note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| ft.showRedPackage | Pull up the H5 red envelope cover page |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_14-13-favorites) 14.13 Favorites

Please note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| ft.addVideoToFavorites | Favorite a video |
| ft.addFileToFavorites | Favorite a file |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_14-14-license-plates) 14.14 License Plates

Please note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| ft.chooseLicensePlate | Select a license plate number |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_14-15-channels) 14.15 Channels

Please note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| ft.reserveChannelsLive | Reserve a live stream for Channels |
| ft.openChannelsUserProfile | Open the Channels homepage |
| ft.openChannelsEvent | Open the Channels event page |
| ft.openChannelsLive | Open the Channels live stream |
| ft.getChannelsShareKey | Get the share source of the live stream card/video card for Channels |
| ft.openChannelsActivity | Open a Channels video |
| ft.getChannelsLiveNoticeInfo | Get the live stream preview information for Channels |
| ft.getChannelsLiveInfo | Get the live stream information for Channels |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_14-16-groups) 14.16 Groups

Please note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| ft.getGroupEnterInfo | Get the Mini-Program launch information in a group chat scenario |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_14-17-customer-service) 14.17 Customer Service

Please note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| ft.openCustomerServiceChat | Open the customer service chat window |

## [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_15-device) 15\. Device

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_15-1-bluetooth-general) 15.1 Bluetooth - General

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.stopBluetoothDevicesDiscovery](https://super-apps.ai/mop/document/en/develop/api/device.html#stopbluetoothdevicesdiscovery) | Stop searching for nearby Bluetooth peripheral devices | 1.0.0 |  |
| [ft.startBluetoothDevicesDiscovery](https://super-apps.ai/mop/document/en/develop/api/device.html#startbluetoothdevicesdiscovery) | Start searching for nearby Bluetooth peripheral devices | 1.0.0 |  |
| [ft.openBluetoothAdapter](https://super-apps.ai/mop/document/en/develop/api/device.html#openbluetoothadapter) | Initialize the Bluetooth module | 1.0.0 |  |
| [ft.onBluetoothDeviceFound](https://super-apps.ai/mop/document/en/develop/api/device.html#onbluetoothdevicefound) | Listen for events when new devices are found during search | 1.0.0 |  |
| [ft.onBluetoothAdapterStateChange](https://super-apps.ai/mop/document/en/develop/api/device.html#onbluetoothadapterstatechange) | Listen for changes in the Bluetooth adapter state | 1.0.0 |  |
| [ft.offBluetoothDeviceFound](https://super-apps.ai/mop/document/en/develop/api/device.html#offbluetoothdevicefound) | Cancel listening for newly discovered devices | 1.0.0 |  |
| [ft.offBluetoothAdapterStateChange](https://super-apps.ai/mop/document/en/develop/api/device.html#offbluetoothadapterstatechange) | Cancel listening for changes in the Bluetooth adapter state | 1.0.0 |  |
| [ft.makeBluetoothPair](https://super-apps.ai/mop/document/en/develop/api/device.html#makebluetoothpair) | Bluetooth pairing interface, Android only | 1.0.0 |  |
| [ft.getConnectedBluetoothDevices](https://super-apps.ai/mop/document/en/develop/api/device.html#getconnectedbluetoothdevices) | Get connected Bluetooth devices based on primary service UUID | 1.0.0 |  |
| [ft.getBluetoothDevices](https://super-apps.ai/mop/document/en/develop/api/device.html#getbluetoothdevices) | Get all Bluetooth devices discovered during the effective period of the Bluetooth module | 1.0.0 |  |
| [ft.getBluetoothAdapterState](https://super-apps.ai/mop/document/en/develop/api/device.html#getbluetoothadapterstate) | Get the status of the local Bluetooth adapter | 1.0.0 |  |
| [ft.closeBluetoothAdapter](https://super-apps.ai/mop/document/en/develop/api/device.html#closebluetoothadapter) | Close the Bluetooth module | 1.0.0 |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_15-2-bluetooth-low-energy-central-device) 15.2 Bluetooth - Low Energy Central Device

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.writeBLECharacteristicValue](https://super-apps.ai/mop/document/en/develop/api/device.html#writeblecharacteristicvalue) | Write binary data to the characteristic value of a Bluetooth low energy device | 1.0.0 |  |
| [ft.setBLEMTU](https://super-apps.ai/mop/document/en/develop/api/device.html#setblemtu) | Negotiate and set the Maximum Transmission Unit (MTU) for Bluetooth low energy | 1.0.0 |  |
| [ft.readBLECharacteristicValue](https://super-apps.ai/mop/document/en/develop/api/device.html#readblecharacteristicvalue) | Read binary data from the characteristic value of a Bluetooth low energy device | 1.0.0 |  |
| [ft.onBLEConnectionStateChange](https://super-apps.ai/mop/document/en/develop/api/device.html#onbleconnectionstatechange) | Listen for changes in the connection state of Bluetooth low energy | 1.0.0 |  |
| [ft.onBLECharacteristicValueChange](https://super-apps.ai/mop/document/en/develop/api/device.html#onblecharacteristicvaluechange) | Listen for changes in the characteristic value of a Bluetooth low energy device | 1.0.0 |  |
| [ft.offBLEConnectionStateChange](https://super-apps.ai/mop/document/en/develop/api/device.html#offbleconnectionstatechange) | Cancel listening for changes in the connection state of Bluetooth low energy | 1.0.0 |  |
| [ft.offBLECharacteristicValueChange](https://super-apps.ai/mop/document/en/develop/api/device.html#offblecharacteristicvaluechange) | Cancel listening for changes in the characteristic value of a Bluetooth low energy device | 1.0.0 |  |
| [ft.notifyBLECharacteristicValueChange](https://super-apps.ai/mop/document/en/develop/api/device.html#notifyblecharacteristicvaluechange) | Enable notify functionality for characteristic value changes in Bluetooth low energy devices, subscribe to characteristics | 1.0.0 |  |
| [ft.getBLEDeviceServices](https://super-apps.ai/mop/document/en/develop/api/device.html#getbledeviceservices) | Get all services (service) of a Bluetooth low energy device | 1.0.0 |  |
| [ft.getBLEDeviceRSSI](https://super-apps.ai/mop/document/en/develop/api/device.html#getbledevicerssi) | Get the signal strength (Received Signal Strength Indication, RSSI) of a Bluetooth low energy device | 1.0.0 |  |
| [ft.getBLEDeviceCharacteristics](https://super-apps.ai/mop/document/en/develop/api/device.html#getbledevicecharacteristics) | Get all characteristics (characteristic) of a specific service of a Bluetooth low energy device | 1.0.0 |  |
| [ft.createBLEConnection](https://super-apps.ai/mop/document/en/develop/api/device.html#createbleconnection) | Connect to a Bluetooth low energy device | 1.0.0 |  |
| [ft.closeBLEConnection](https://super-apps.ai/mop/document/en/develop/api/device.html#closebleconnection) | Disconnect from a Bluetooth low energy device | 1.0.0 |  |

Please note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| ft.isBluetoothDevicePaired | Query whether a Bluetooth device is paired, Android only |
| ft.onBLEMTUChange | Listen for changes in the maximum transmission unit of Bluetooth low energy (Android only trigger) |
| ft.offBLEMTUChange | Remove the listener function for changes in the maximum transmission unit of Bluetooth low energy |
| ft.getBLEMTU | Get the maximum transmission unit of Bluetooth low energy |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_15-3-bluetooth-low-energy-peripheral-device) 15.3 Bluetooth - Low Energy Peripheral Device

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.onBLEPeripheralConnectionStateChanged](https://super-apps.ai/mop/document/en/develop/api/device.html#onbleperipheralconnectionstatechanged) | Listen for events when the current peripheral device is connected or disconnected | 1.0.0 |  |
| [ft.offBLEPeripheralConnectionStateChanged](https://super-apps.ai/mop/document/en/develop/api/device.html#offbleperipheralconnectionstatechanged) | Cancel listening for events when the current peripheral device is connected or disconnected | 1.0.0 |  |
| [ft.createBLEPeripheralServer](https://super-apps.ai/mop/document/en/develop/api/device.html#createbleperipheralserver) | Establish a server for the local device acting as a Bluetooth low energy peripheral, multiple servers can be created | 1.0.0 |  |

#### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_15-3-1-bleperipheralserver) 15.3.1 BLEPeripheralServer

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [BLEPeripheralServer.addService](https://super-apps.ai/mop/document/en/develop/api/device.html#bleperipheralserver-addservice) | Add a service | 1.0.0 |  |
| [BLEPeripheralServer.close](https://super-apps.ai/mop/document/en/develop/api/device.html#bleperipheralserver-close) | Close the current server | 1.0.0 |  |
| [BLEPeripheralServer.offCharacteristicReadRequest](https://super-apps.ai/mop/document/en/develop/api/device.html#bleperipheralserver-offcharacteristicreadrequest) | Cancel listening for events where a connected device requests to read the characteristic value of the current peripheral device | 1.0.0 |  |
| [BLEPeripheralServer.offCharacteristicSubscribed](https://super-apps.ai/mop/document/en/develop/api/device.html#bleperipheralserver-offcharacteristicsubscribed) | Cancel listening for characteristic subscription events | 1.0.0 |  |
| [BLEPeripheralServer.offcharacteristicUnsubscribed](https://super-apps.ai/mop/document/en/develop/api/device.html#bleperipheralserver-offcharacteristicunsubscribed) | Cancel listening for unsubscribing from characteristic events | 1.0.0 |  |
| [BLEPeripheralServer.offCharacteristicWriteRequest](https://super-apps.ai/mop/document/en/develop/api/device.html#bleperipheralserver-offcharacteristicwriterequest) | Cancel listening for events where a connected device requests to write the characteristic value of the current peripheral device | 1.0.0 |  |
| [BLEPeripheralServer.onCharacteristicReadRequest](https://super-apps.ai/mop/document/en/develop/api/device.html#bleperipheralserver-oncharacteristicreadrequest) | Listen for events where a connected device requests to read the characteristic value of the current peripheral device | 1.0.0 |  |
| [BLEPeripheralServer.onCharacteristicSubscribed](https://super-apps.ai/mop/document/en/develop/api/device.html#bleperipheralserver-oncharacteristicsubscribed) | Listen for characteristic subscription events, iOS only | 1.0.0 |  |
| [BLEPeripheralServer.onCharacteristicUnsubscribed](https://super-apps.ai/mop/document/en/develop/api/device.html#bleperipheralserver-oncharacteristicunsubscribed) | Listen for unsubscribing from characteristic events, iOS only | 1.0.0 |  |
| [BLEPeripheralServer.onCharacteristicWriteRequest](https://super-apps.ai/mop/document/en/develop/api/device.html#bleperipheralserver-oncharacteristicwriterequest) | Listen for events where a connected device requests to write the characteristic value of the current peripheral device | 1.0.0 |  |
| [BLEPeripheralServer.removeService](https://super-apps.ai/mop/document/en/develop/api/device.html#bleperipheralserver-removeservice) | Remove a service | 1.0.0 |  |
| [BLEPeripheralServer.startAdvertising](https://super-apps.ai/mop/document/en/develop/api/device.html#bleperipheralserver-startadvertising) | Start broadcasting the locally created peripheral device | 1.0.0 |  |
| [BLEPeripheralServer.stopAdvertising](https://super-apps.ai/mop/document/en/develop/api/device.html#bleperipheralserver-stopadvertising) | Stop broadcasting | 1.0.0 |  |
| [BLEPeripheralServer.writeCharacteristicValue](https://super-apps.ai/mop/document/en/develop/api/device.html#bleperipheralserver-writecharacteristicvalue) | Write data to a specified characteristic value and notify the connected host that the characteristic value of the peripheral has changed; this interface handles whether to send a response or use subscription | 1.0.0 |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_15-4-bluetooth-beacon) 15.4 Bluetooth - Beacon

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.stopBeaconDiscovery](https://super-apps.ai/mop/document/en/develop/api/device.html#stopbeacondiscovery) | Stop searching for nearby Beacon devices | 1.0.0 |  |
| [ft.startBeaconDiscovery](https://super-apps.ai/mop/document/en/develop/api/device.html#startbeacondiscovery) | Start searching for nearby Beacon devices | 1.0.0 |  |
| [ft.onBeaconUpdate](https://super-apps.ai/mop/document/en/develop/api/device.html#onbeaconupdate) | Listen for Beacon device update events, only one listener can be registered | 1.0.0 |  |
| [ft.onBeaconServiceChange](https://super-apps.ai/mop/document/en/develop/api/device.html#onbeaconservicechange) | Listen for changes in the Beacon service status, only one listener can be registered | 1.0.0 |  |
| [ft.offBeaconUpdate](https://super-apps.ai/mop/document/en/develop/api/device.html#offbeaconupdate) | Cancel listening for Beacon device update events | 1.0.0 |  |
| [ft.offBeaconServiceChange](https://super-apps.ai/mop/document/en/develop/api/device.html#offbeaconservicechange) | Cancel listening for changes in the Beacon service status | 1.0.0 |  |
| [ft.getBeacons](https://super-apps.ai/mop/document/en/develop/api/device.html#getbeacons) | Get all discovered Beacon devices | 1.0.0 |  |
| [BeaconInfo](https://super-apps.ai/mop/document/en/develop/api/device.html#beaconinfo) | Beacon device | 1.0.0 |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_15-5-nfc) 15.5 NFC

| Name | Function Description | Version |
| --- | --- | --- |
| [ft.getNFCAdapter](https://super-apps.ai/mop/document/en/develop/api/device.html#getnfcadapter) | Get NFC instance | 3.2.2 |

Please note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| ft.stopHCE | Turn off NFC module |
| ft.startHCE | Initialize NFC module |
| ft.sendHCEMessage | Send NFC message |
| ft.onHCEMessage | Listen for receiving NFC device message events, only one listener can be registered |
| ft.offHCEMessage | Receive NFC device message events, cancel event listening |
| ft.getHCEState | Check if the current device supports HCE capability |

#### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_15-5-1-isodep) 15.5.1 IsoDep

| Name | Function Description | Version |
| --- | --- | --- |
| [IsoDep.close](https://super-apps.ai/mop/document/en/develop/api/device.html#isodep-close) | Disconnect | 3.2.2 |
| [IsoDep.connect](https://super-apps.ai/mop/document/en/develop/api/device.html#isodep-connect) | Connect to NFC tag | 3.2.2 |
| [IsoDep.getHistoricalBytes](https://super-apps.ai/mop/document/en/develop/api/device.html#isodep-gethistoricalbytes) | Get reset information | 3.2.2 |
| [IsoDep.getMaxTransceiveLength](https://super-apps.ai/mop/document/en/develop/api/device.html#isodep-getmaxtransceivelength) | Get maximum transmission length | 3.2.2 |
| [IsoDep.isConnected](https://super-apps.ai/mop/document/en/develop/api/device.html#isodep-isconnected) | Check if connected | 3.2.2 |
| [IsoDep.setTimeout](https://super-apps.ai/mop/document/en/develop/api/device.html#isodep-settimeout) | Set timeout | 3.2.2 |
| [IsoDep.transceive](https://super-apps.ai/mop/document/en/develop/api/device.html#isodep-transceive) | Send data | 3.2.2 |

#### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_15-5-2-mifareclassic) 15.5.2 MifareClassic

| Name | Function Description | Version |
| --- | --- | --- |
| [MifareClassic.close](https://super-apps.ai/mop/document/en/develop/api/device.html#mifareclassic-close) | Disconnect | 3.2.2 |
| [MifareClassic.connect](https://super-apps.ai/mop/document/en/develop/api/device.html#mifareclassic-connect) | Connect to NFC tag | 3.2.2 |
| [MifareClassic.getMaxTransceiveLength](https://super-apps.ai/mop/document/en/develop/api/device.html#mifareclassic-getmaxtransceivelength) | Get maximum transmission length | 3.2.2 |
| [MifareClassic.isConnected](https://super-apps.ai/mop/document/en/develop/api/device.html#mifareclassic-isconnected) | Check if connected | 3.2.2 |
| [MifareClassic.setTimeout](https://super-apps.ai/mop/document/en/develop/api/device.html#mifareclassic-settimeout) | Set timeout | 3.2.2 |
| [MifareClassic.transceive](https://super-apps.ai/mop/document/en/develop/api/device.html#mifareclassic-transceive) | Send data | 3.2.2 |

#### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_15-5-2-mifareultralight) 15.5.2 MifareUltralight

| Name | Function Description | Version |
| --- | --- | --- |
| [MifareUltralight.close](https://super-apps.ai/mop/document/en/develop/api/device.html#mifareultralight-close) | Disconnect | 3.2.2 |
| [MifareUltralight.connect](https://super-apps.ai/mop/document/en/develop/api/device.html#mifareultralight-connect) | Connect to NFC Tag | 3.2.2 |
| [MifareUltralight.getMaxTransceiveLength](https://super-apps.ai/mop/document/en/develop/api/device.html#mifareultralight-getmaxtransceivelength) | Get maximum transmission length | 3.2.2 |
| [MifareUltralight.isConnected](https://super-apps.ai/mop/document/en/develop/api/device.html#mifareultralight-isconnected) | Check if connected | 3.2.2 |
| [MifareUltralight.setTimeout](https://super-apps.ai/mop/document/en/develop/api/device.html#mifareultralight-settimeout) | Set timeout duration | 3.2.2 |
| [MifareUltralight.transceive](https://super-apps.ai/mop/document/en/develop/api/device.html#mifareultralight-transceive) | Send data | 3.2.2 |

#### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_15-5-3-ndef) 15.5.3 Ndef

| Name | Function Description | Version |
| --- | --- | --- |
| [Ndef.close](https://super-apps.ai/mop/document/en/develop/api/device.html#ndef-close) | Disconnect | 3.2.2 |
| [Ndef.connect](https://super-apps.ai/mop/document/en/develop/api/device.html#ndef-connect) | Connect to NFC Tag | 3.2.2 |
| [Ndef.isConnected](https://super-apps.ai/mop/document/en/develop/api/device.html#ndef-isconnected) | Check if connected | 3.2.2 |
| [Ndef.offNdefMessage](https://super-apps.ai/mop/document/en/develop/api/device.html#ndef-offndefmessage) | Stop listening for Ndef messages | 3.2.2 |
| [Ndef.onNdefMessage](https://super-apps.ai/mop/document/en/develop/api/device.html#ndef-onndefmessage) | Listen for Ndef messages | 3.2.2 |
| [Ndef.setTimeout](https://super-apps.ai/mop/document/en/develop/api/device.html#ndef-settimeout) | Set timeout duration | 3.2.2 |
| [Ndef.writeNdefMessage](https://super-apps.ai/mop/document/en/develop/api/device.html#ndef-writendefmessage) | Rewrite Ndef tag content | 3.2.2 |

#### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_15-5-4-nfca) 15.5.4 NfcA

| Name | Function Description | Version |
| --- | --- | --- |
| [NfcA.close](https://super-apps.ai/mop/document/en/develop/api/device.html#nfca-close) | Disconnect | 3.2.2 |
| [NfcA.connect](https://super-apps.ai/mop/document/en/develop/api/device.html#nfca-connect) | Connect to NFC Tag | 3.2.2 |
| [NfcA.getAtqa](https://super-apps.ai/mop/document/en/develop/api/device.html#nfca-getatqa) | Get ATQA information | 3.2.2 |
| [NfcA.getMaxTransceiveLength](https://super-apps.ai/mop/document/en/develop/api/device.html#nfca-getmaxtransceivelength) | Get maximum transmission length | 3.2.2 |
| [NfcA.getSak](https://super-apps.ai/mop/document/en/develop/api/device.html#nfca-getsak) | Get SAK information | 3.2.2 |
| [NfcA.isConnected](https://super-apps.ai/mop/document/en/develop/api/device.html#nfca-isconnected) | Check if connected | 3.2.2 |
| [NfcA.setTimeout](https://super-apps.ai/mop/document/en/develop/api/device.html#nfca-settimeout) | Set timeout duration | 3.2.2 |
| [NfcA.transceive](https://super-apps.ai/mop/document/en/develop/api/device.html#nfca-transceive) | Send data | 3.2.2 |

#### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_15-5-5-nfcadapter) 15.5.5 NFCAdapter

| Name | Function Description | Version |
| --- | --- | --- |
| [NFCAdapter.getIsoDep](https://super-apps.ai/mop/document/en/develop/api/device.html#nfcadapter-getisodep) | Get IsoDep instance, supports read/write operations conforming to ISO-DEP (ISO 14443-4) standard | 3.2.2 |
| [NFCAdapter.getMifareClassic](https://super-apps.ai/mop/document/en/develop/api/device.html#nfcadapter-getmifareclassic) | Get MifareClassic instance, supports read/write operations for MIFARE Classic tags | 3.2.2 |
| [NFCAdapter.getMifareUltralight](https://super-apps.ai/mop/document/en/develop/api/device.html#nfcadapter-getmifareultralight) | Get MifareUltralight instance, supports read/write operations for MIFARE Ultralight tags | 3.2.2 |
| [NFCAdapter.getNdef](https://super-apps.ai/mop/document/en/develop/api/device.html#nfcadapter-getndef) | Get Ndef instance, supports read/write operations of NDEF data on NDEF-formatted NFC tags | 3.2.2 |
| [NFCAdapter.getNfcA](https://super-apps.ai/mop/document/en/develop/api/device.html#nfcadapter-getnfca) | Get NfcA instance, supports read/write operations conforming to NFC-A (ISO 14443-3A) standard | 3.2.2 |
| [NFCAdapter.getNfcB](https://super-apps.ai/mop/document/en/develop/api/device.html#nfcadapter-getnfcb) | Get NfcB instance, supports read/write operations conforming to NFC-B (ISO 14443-3B) standard | 3.2.2 |
| [NFCAdapter.getNfcF](https://super-apps.ai/mop/document/en/develop/api/device.html#nfcadapter-getnfcf) | Get NfcF instance, supports read/write operations conforming to NFC-F (JIS 6319-4) standard | 3.2.2 |
| [NFCAdapter.getNfcV](https://super-apps.ai/mop/document/en/develop/api/device.html#nfcadapter-getnfcv) | Get NfcV instance, supports read/write operations conforming to NFC-V (ISO 15693) standard | 3.2.2 |
| [NFCAdapter.offDiscovered](https://super-apps.ai/mop/document/en/develop/api/device.html#nfcadapter-offdiscovered) | Stop listening for NFC Tags | 3.2.2 |
| [NFCAdapter.onDiscovered](https://super-apps.ai/mop/document/en/develop/api/device.html#nfcadapter-ondiscovered) | Listen for NFC Tags | 3.2.2 |
| [NFCAdapter.startDiscovery](https://super-apps.ai/mop/document/en/develop/api/device.html#nfcadapter-startdiscovery) | Start NFC discovery | 3.2.2 |
| [NFCAdapter.stopDiscovery](https://super-apps.ai/mop/document/en/develop/api/device.html#nfcadapter-stopdiscovery) | Stop NFC discovery | 3.2.2 |

#### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_15-5-6-nfcb) 15.5.6 NfcB

| Name | Function Description | Version |
| --- | --- | --- |
| [NfcB.close](https://super-apps.ai/mop/document/en/develop/api/device.html#nfcb-close) | Disconnect | 3.2.2 |
| [NfcB.connect](https://super-apps.ai/mop/document/en/develop/api/device.html#nfcb-connect) | Connect to NFC Tag | 3.2.2 |
| [NfcB.getMaxTransceiveLength](https://super-apps.ai/mop/document/en/develop/api/device.html#nfcb-getmaxtransceivelength) | Get maximum transmission length | 3.2.2 |
| [NfcB.isConnected](https://super-apps.ai/mop/document/en/develop/api/device.html#nfcb-isconnected) | Check if connected | 3.2.2 |
| [NfcB.setTimeout](https://super-apps.ai/mop/document/en/develop/api/device.html#nfcb-settimeout) | Set timeout duration | 3.2.2 |
| [NfcB.transceive](https://super-apps.ai/mop/document/en/develop/api/device.html#nfcb-transceive) | Send data | 3.2.2 |

#### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_15-5-7-nfcf) 15.5.7 NfcF

| Name | Function Description | Version |
| --- | --- | --- |
| [NfcF.close](https://super-apps.ai/mop/document/en/develop/api/device.html#nfcf-close) | Disconnect | 3.2.2 |
| [NfcF.connect](https://super-apps.ai/mop/document/en/develop/api/device.html#nfcf-connect) | Connect to NFC Tag | 3.2.2 |
| [NfcF.getMaxTransceiveLength](https://super-apps.ai/mop/document/en/develop/api/device.html#nfcf-getmaxtransceivelength) | Get maximum transmission length | 3.2.2 |
| [NfcF.isConnected](https://super-apps.ai/mop/document/en/develop/api/device.html#nfcf-isconnected) | Check if connected | 3.2.2 |
| [NfcF.setTimeout](https://super-apps.ai/mop/document/en/develop/api/device.html#nfcf-settimeout) | Set timeout duration | 3.2.2 |
| [NfcF.transceive](https://super-apps.ai/mop/document/en/develop/api/device.html#nfcf-transceive) | Send data | 3.2.2 |

#### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_15-5-7-nfcv) 15.5.7 NfcV

| Name | Function Description | Version |
| --- | --- | --- |
| [NfcV.close](https://super-apps.ai/mop/document/en/develop/api/device.html#nfcv-close) | Disconnect | 3.2.2 |
| [NfcV.connect](https://super-apps.ai/mop/document/en/develop/api/device.html#nfcv-connect) | Connect to NFC Tag | 3.2.2 |
| [NfcV.getMaxTransceiveLength](https://super-apps.ai/mop/document/en/develop/api/device.html#nfcv-getmaxtransceivelength) | Get maximum transmission length | 3.2.2 |
| [NfcV.isConnected](https://super-apps.ai/mop/document/en/develop/api/device.html#nfcv-isconnected) | Check if connected | 3.2.2 |
| [NfcV.setTimeout](https://super-apps.ai/mop/document/en/develop/api/device.html#nfcv-settimeout) | Set timeout duration | 3.2.2 |
| [NfcV.transceive](https://super-apps.ai/mop/document/en/develop/api/device.html#nfcv-transceive) | Send data | 3.2.2 |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_15-6-wi-fi) 15.6 Wi-Fi

Please Note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| ft.stopWifi | Turn off Wi-Fi module |
| ft.startWifi | Initialize Wi-Fi module |
| ft.setWifiList | Set AP-related information in wifiList |
| ft.onWifiConnected | Listen for Wi-Fi connection events |
| ft.onGetWifiList | Listen for Wi-Fi list data retrieval events |
| ft.getWifiList | Request to get Wi-Fi list |
| ft.getConnectedWifi | Get information about the currently connected Wi-Fi |
| ft.connectWifi | Connect to Wi-Fi |
| ft.onWifiConnectedWithPartialInfo | Listen for Wi-Fi connection events |
| ft.offWifiConnectedWithPartialInfo | Remove listener function for Wi-Fi connection events |
| ft.offWifiConnected | Stop listening for Wi-Fi connection events |
| ft.offGetWifiList | Stop listening for Wi-Fi list data retrieval events |
| WifiInfo | Wi-Fi Information |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_15-7-calendar) 15.7 Calendar

| Name | Function Description | Version | Notes |
| --- | --- | --- | --- |
| [ft.addPhoneRepeatCalendar](https://super-apps.ai/mop/document/en/develop/api/device.html#addphonerepeatcalendar) | Add a recurring event to the system calendar | 3.0.46 |  |
| [ft.addPhoneCalendar](https://super-apps.ai/mop/document/en/develop/api/device.html#addphonecalendar) | Add an event to the system calendar | 3.0.46 |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_15-8-contacts) 15.8 Contacts

| Name | Function Description | Version | Notes |
| --- | --- | --- | --- |
| [ft.addPhoneContact](https://super-apps.ai/mop/document/en/develop/api/device.html#addphonecontact) | Add a contact to the phone's address book | 1.0.0 |  |
| [ft.chooseContact](https://super-apps.ai/mop/document/en/develop/api/device.html#choosecontact) | Open the phone's address book and select a contact | 3.0.0 |  |

Please Note

The following API is not yet supported

| Name | Function Description |
| --- | --- |
| ft.searchContacts | Search contacts, matching similar phone numbers |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_15-9-accessibility) 15.9 Accessibility

| Name | Function Description | Version | Notes |
| --- | --- | --- | --- |
| [ft.checkIsOpenAccessibility](https://super-apps.ai/mop/document/en/develop/api/device.html#checkisopenaccessibility) | Check if visual accessibility features are enabled | 2.12.1 |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_15-10-battery) 15.10 Battery

Please Note

The following API is not yet supported

| Name | Function Description |
| --- | --- |
| ft.getBatteryInfoSync | Synchronous version of ft.getBatteryInfo |
| ft.getBatteryInfo | Get device battery level |
| ft.onBatteryInfoChange | Listen for battery information change events |
| ft.offBatteryInfoChange | Stop listening for battery information change events |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_15-11-clipboard) 15.11 Clipboard

| Name | Function Description | Version | Notes |
| --- | --- | --- | --- |
| [ft.setClipboardData](https://super-apps.ai/mop/document/en/develop/api/device.html#setclipboarddata) | Set the content of the system clipboard | 1.0.0 |  |
| [ft.getClipboardData](https://super-apps.ai/mop/document/en/develop/api/device.html#getclipboarddata) | Get the content of the system clipboard | 1.0.0 |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_15-12-network) 15.12 Network

| Name | Function Description | Version | Notes |
| --- | --- | --- | --- |
| [ft.onNetworkStatusChange](https://super-apps.ai/mop/document/en/develop/api/device.html#onnetworkstatuschange) | Listen for network status change events | 1.0.0 |  |
| [ft.offNetworkStatusChange](https://super-apps.ai/mop/document/en/develop/api/device.html#offnetworkstatuschange) | Stop listening for network status change events; if no parameter is provided, all event listeners will be removed | 1.0.0 |  |
| [ft.getNetworkType](https://super-apps.ai/mop/document/en/develop/api/device.html#getnetworktype) | Get network type | 1.0.0 |  |
| [ft.getLocalIPAddress](https://super-apps.ai/mop/document/en/develop/api/device.html#getlocalipaddress) | Get local IP address | 3.2.2 |  |

Please Note

The following API is not yet supported

| Name | Function Description |
| --- | --- |
| ft.onNetworkWeakChange | Listen for weak network status change events |
| ft.offNetworkWeakChange | Remove listener function for weak network status change events |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_15-13-encryption) 15.13 Encryption

| Name | Function Description | Version | Notes |
| --- | --- | --- | --- |
| [ft.getRandomValues](https://super-apps.ai/mop/document/en/develop/api/device.html#getrandomvalues) | Get cryptographically secure random numbers | 1.0.0 |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_15-14-screen) 15.14 Screen

| Name | Function Description | Version | Notes |
| --- | --- | --- | --- |
| [ft.setVisualEffectOnCapture](https://super-apps.ai/mop/document/en/develop/api/device.html#setVisualEffectOnCapture) | Set screen behavior during screenshot/recording, only supported on Android | 2.12.16 |  |
| [ft.setScreenBrightness](https://super-apps.ai/mop/document/en/develop/api/device.html#setscreenbrightness) | Set screen brightness | 1.0.0 |  |
| [ft.setKeepScreenOn](https://super-apps.ai/mop/document/en/develop/api/device.html#setkeepscreenon) | Set whether to keep the screen always on | 1.3.9 |  |
| [ft.onUserCaptureScreen](https://super-apps.ai/mop/document/en/develop/api/device.html#onusercapturescreen) | Listen for user-initiated screenshot events | 1.0.0 |  |
| [ft.onScreenRecordingStateChanged](https://super-apps.ai/mop/document/en/develop/api/device.html#onScreenRecordingStateChanged) | Listen for user recording events, only supported on iOS | 2.12.16 |  |
| [ft.offUserCaptureScreen](https://super-apps.ai/mop/document/en/develop/api/device.html#offusercapturescreen) | User-initiated screenshot event | 1.0.0 |  |
| [ft.offScreenRecordingStateChanged](https://super-apps.ai/mop/document/en/develop/api/device.html#offScreenRecordingStateChanged) | Remove listener function for user recording events | 2.12.16 |  |
| [ft.getScreenRecordingState](https://super-apps.ai/mop/document/en/develop/api/device.html#getscreenrecordingstate) | Query if the user is recording | 2.12.16 | Not supported on Android |
| [ft.getScreenBrightness](https://super-apps.ai/mop/document/en/develop/api/device.html#getscreenbrightness) | Get screen brightness | 1.0.0 |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_15-15-keyboard) 15.15 Keyboard

| Name | Function Description | Version | Notes |
| --- | --- | --- | --- |
| [ft.onKeyboardHeightChange](https://super-apps.ai/mop/document/en/develop/api/device.html#onkeyboardheightchange) | Listen for keyboard height changes | 1.0.0 |  |
| [ft.offKeyboardHeightChange](https://super-apps.ai/mop/document/en/develop/api/device.html#offkeyboardheightchange) | Stop listening for keyboard height change events | 1.0.0 |  |
| [ft.hideKeyboard](https://super-apps.ai/mop/document/en/develop/api/device.html#hidekeyboard) | Manually hide the keyboard after it has been triggered by input/textarea focus | 1.0.0 |  |
| [ft.getSelectedTextRange](https://super-apps.ai/mop/document/en/develop/api/device.html#getselectedtextrange) | Get the cursor position in input/textarea after focus | 1.0.0 |  |

Please Note

The following API is not yet supported

| Name | Function Description |
| --- | --- |
| ft.onKeyUp | Listen for global keyboard key release events |
| ft.onKeyDown | Listen for global keyboard key press events |
| ft.offKeyUp | Remove listener function for global keyboard key release events |
| ft.offKeyDown | Remove listener function for global keyboard key press events |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_15-16-phone) 15.16 Phone

| Name | Function Description | Version | Notes |
| --- | --- | --- | --- |
| [ft.makePhoneCall](https://super-apps.ai/mop/document/en/develop/api/device.html#makephonecall) | Make a phone call | 1.0.0 |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_15-17-accelerometer) 15.17 Accelerometer

| Name | Function Description | Version | Notes |
| --- | --- | --- | --- |
| [ft.stopAccelerometer](https://super-apps.ai/mop/document/en/develop/api/device.html#stopaccelerometer) | Stop listening for accelerometer data | 1.0.0 |  |
| [ft.startAccelerometer](https://super-apps.ai/mop/document/en/develop/api/device.html#startaccelerometer) | Start listening for accelerometer data | 1.0.0 |  |
| [ft.onAccelerometerChange](https://super-apps.ai/mop/document/en/develop/api/device.html#onaccelerometerchange) | Listen for accelerometer data events | 1.0.0 |  |
| [ft.offAccelerometerChange](https://super-apps.ai/mop/document/en/develop/api/device.html#offaccelerometerchange) | Stop listening for accelerometer data events; if no parameter is provided, all event listeners will be removed | 1.0.0 |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_15-18-compass) 15.18 Compass

| Name | Function Description | Version | Notes |
| --- | --- | --- | --- |
| [ft.stopCompass](https://super-apps.ai/mop/document/en/develop/api/device.html#stopcompass) | Stop listening for compass data | 1.0.0 |  |
| [ft.startCompass](https://super-apps.ai/mop/document/en/develop/api/device.html#startcompass) | Start listening for compass data | 1.0.0 |  |
| [ft.onCompassChange](https://super-apps.ai/mop/document/en/develop/api/device.html#oncompasschange) | Listen for compass data change events | 1.0.0 |  |
| [ft.offCompassChange](https://super-apps.ai/mop/document/en/develop/api/device.html#offcompasschange) | Stop listening for compass data change events; if no parameter is provided, all event listeners will be removed | 1.0.0 |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_15-19-device-orientation) 15.19 Device Orientation

| Name | Function Description | Version | Notes |
| --- | --- | --- | --- |
| [ft.stopDeviceMotionListening](https://super-apps.ai/mop/document/en/develop/api/device.html#stopdevicemotionlistening) | Stop listening for device orientation changes |  |  |
| [ft.startDeviceMotionListening](https://super-apps.ai/mop/document/en/develop/api/device.html#startdevicemotionlistening) | Start listening for device orientation changes |  |  |
| [ft.onDeviceMotionChange](https://super-apps.ai/mop/document/en/develop/api/device.html#ondevicemotionchange) | Listen for device orientation change events |  |  |
| [ft.offDeviceMotionChange](https://super-apps.ai/mop/document/en/develop/api/device.html#offdevicemotionchange) | Stop listening for device orientation change events; if no parameter is provided, all event listeners will be removed |  |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_15-20-gyroscope) 15.20 Gyroscope

| Name | Function Description | Version | Notes |
| --- | --- | --- | --- |
| [ft.stopGyroscope](https://super-apps.ai/mop/document/en/develop/api/device.html#stopgyroscope) | Stop listening for gyroscope data | 3.0.46 |  |
| [ft.startGyroscope](https://super-apps.ai/mop/document/en/develop/api/device.html#startgyroscope) | Start listening for gyroscope data | 3.0.46 |  |
| [ft.onGyroscopeChange](https://super-apps.ai/mop/document/en/develop/api/device.html#ongyroscopechange) | Listen for gyroscope data change events | 3.0.46 |  |
| [ft.offGyroscopeChange](https://super-apps.ai/mop/document/en/develop/api/device.html#offgyroscopechange) | Stop listening for gyroscope data change events | 3.0.46 |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_15-21-memory) 15.21 Memory

| Name | Function Description | Version | Notes |
| --- | --- | --- | --- |
| [ft.onMemoryWarning](https://super-apps.ai/mop/document/en/develop/api/device.html#onmemorywarning) | Listen for low memory warning events | 3.1.17 |  |
| [ft.offMemoryWarning](https://super-apps.ai/mop/document/en/develop/api/device.html#offmemorywarning) | Remove listener function for low memory warning events | 3.1.17 |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_15-22-scan-code) 15.22 Scan Code

| Name | Function Description | Version | Notes |
| --- | --- | --- | --- |
| [ft.scanCode](https://super-apps.ai/mop/document/en/develop/api/device.html#scancode) | Launch client scan interface for scanning | 1.0.0 |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_15-23-vibration) 15.23 Vibration

| Name | Function Description | Version | Notes |
| --- | --- | --- | --- |
| [ft.vibrateShort](https://super-apps.ai/mop/document/en/develop/api/device.html#vibrateshort) | Make the phone vibrate for a short period (15 ms) | 1.0.0 |  |
| [ft.vibrateLong](https://super-apps.ai/mop/document/en/develop/api/device.html#vibratelong) | Make the phone vibrate for a longer period (400 ms) | 1.0.0 |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_15-24-sms) 15.24 SMS

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.sendSms](https://super-apps.ai/mop/document/en/develop/api/device.html#sendsms) | Pull up the mobile SMS sending interface | 3.5.1 |  |

## [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_16-ai) 16\. AI

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_16-1-vision-algorithms) 16.1 Vision Algorithms

Note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| ft.isVKSupport | Check supported version |
| ft.createVKSession | Create a vision kit session object |
| VKBodyAnchor | Human body anchor |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_16-2-vkcamera) 16.2 VKCamera

Note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| VKCamera.getProjectionMatrix | Get projection matrix |
| VKFaceAnchor | Face anchor |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_16-3-vkframe) 16.3 VKFrame

Note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| VKFrame.getCameraBuffer | Get current frame rgba buffer |
| VKFrame.getCameraTexture | Get current frame texture, currently only YUV texture is supported |
| VKFrame.getDisplayTransform | Get texture adjustment matrix |
| VKMarkerAnchor | Marker anchor |
| VKOSDAnchor | OSD anchor |
| VKHandAnchor | Gesture anchor |
| VKPlaneAnchor | Plane anchor, only supported in v2 version |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_16-4-vksession) 16.4 VKSession

Note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| VKSession.addMarker | Add a marker, requires track.marker to be true when calling ft.createVKSession |
| VKSession.addOSDMarker | Add an OSD marker (one-shot detection marker), requires track.OSD to be true when calling ft.createVKSession |
| VKSession.cancelAnimationFrame | Cancel the animation frame request added by requestAnimationFrame |
| VKSession.destroy | Destroy the session |
| VKSession.detectFace | Static image face keypoint detection |
| VKSession.getAllMarker | Get all markers, requires track.marker to be true when calling ft.createVKSession |
| VKSession.getAllOSDMarker | Get all OSD markers, requires track.OSD to be true when calling ft.createVKSession |
| VKSession.getVKFrame | Get frame object, each call triggers a frame analysis process |
| VKSession.hitTest | Touch detection, v1 version only supports single plane (i.e., hitTest generates a plane once, subsequent hitTests will no longer generate planes but detect based on the previously generated plane) |
| VKSession.detectHand | Static image gesture keypoint detection. Available when {track: {hand: {mode: 2} } } is passed as a parameter to ft.createVKSession. |
| VKSession.detectBody | Static image human body keypoint detection. Available when {track: {body: {mode: 2} } } is passed as a parameter to ft.createVKSession. |
| VKSession.off | Unlisten to session events |
| VKSession.on | Listen to session events |
| VKSession.runOCR | Static image OCR detection. Available when {track: {OCR: {mode: 2} } } is passed as a parameter to ft.createVKSession. |
| VKSession.removeMarker | Remove a marker, requires track.marker to be true when calling ft.createVKSession |
| VKSession.removeOSDMarker | Remove an OSD marker, requires track.OSD to be true when calling ft.createVKSession |
| VKSession.requestAnimationFrame | Execute during the next redraw |
| VKSession.start | Start the session |
| VKSession.stop | Stop the session |
| VKSession.updateOSDThreshold | Update OSD recognition accuracy, requires track.OSD to be true when calling ft.createVKSession |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_16-5-face-recognition) 16.5 Face Recognition

Note

The following APIs are not yet supported, but you can view [FinClip Financial Scenario API](https://super-apps.ai/mop/document/develop/api/finacial.html) for corresponding information.

| Name | Function Description |
| --- | --- |
| ft.stopFaceDetect | Stop face recognition |
| ft.initFaceDetect | Initialize face recognition |
| ft.faceDetect | Face recognition, requires initialization via ft.initFaceDetect before use, it is recommended to use frame data returned by camera interfaces |

## [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_17-worker) 17\. Worker

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.createWorker](https://super-apps.ai/mop/document/en/develop/api/worker.html#createworker) | Create a Worker instance | 3.0.0 |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_17-1-worker) 17.1 Worker

\| [Worker.onMessage](https://super-apps.ai/mop/document/en/develop/api/worker.html#onmessage) \| Listen to messages sent from the main thread/Worker thread to the current thread \| 3.0.0 \| \|
\| [Worker.postMessage](https://super-apps.ai/mop/document/en/develop/api/worker.html#postmessage) \| Send messages to the main thread/Worker thread \| 3.0.0 \| \|
\| [Worker.terminate](https://super-apps.ai/mop/document/en/develop/api/worker.html#terminate) \| Terminate the current Worker thread \| 3.0.0 \| \|

Note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| Worker.getCameraFrameData | Get the current frame image of the camera, return ArrayBuffer data |
| Worker.onProcessKilled | Listen to the event where the worker thread is reclaimed by the system (when iOS system resources are tight, there is a possibility that the worker thread may be reclaimed by the system, developers can listen to this event and recreate a worker) |
| Worker.testOnProcessKilled | Used to simulate the event where the iOS ExperimentalWorker thread is reclaimed by the system for debugging purposes. This interface is only available within the worker thread. |

## [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_18-fxml) 18\. FXML

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.createSelectorQuery](https://super-apps.ai/mop/document/en/develop/api/fxml.html#createselectorquery) | Return a SelectorQuery object instance | 1.0.0 |  |
| [ft.createIntersectionObserver](https://super-apps.ai/mop/document/en/develop/api/fxml.html#createintersectionobserver) | Create and return an IntersectionObserver object instance | 1.0.0 |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_18-1-intersectionobserver) 18.1 IntersectionObserver

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [IntersectionObserver.disconnect](https://super-apps.ai/mop/document/en/develop/api/fxml.html#intersectionobserver-disconnect) | Stop listening | 1.0.0 |  |
| [IntersectionObserver.observe](https://super-apps.ai/mop/document/en/develop/api/fxml.html#intersectionobserver-observe) | Specify the target node and start listening to intersection state changes | 1.0.0 |  |
| [IntersectionObserver.relativeTo](https://super-apps.ai/mop/document/en/develop/api/fxml.html#intersectionobserver-relativeto) | Use a selector to specify a node as one of the reference areas | 1.0.0 |  |
| [IntersectionObserver.relativeToViewport](https://super-apps.ai/mop/document/en/develop/api/fxml.html#intersectionobserver-relativetoviewport) | Specify the page display area as one of the reference areas | 1.0.0 |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_18-2-mediaqueryobserver) 18.2 MediaQueryObserver

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [MediaQueryObserver.disconnect](https://super-apps.ai/mop/document/en/develop/api/fxml.html#mediaqueryobserver-disconnect) | Stop listening | 1.0.0 |  |
| [MediaQueryObserver.observe](https://super-apps.ai/mop/document/en/develop/api/fxml.html#mediaqueryobserver-observe) | Start listening to page media query changes | 1.0.0 |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_18-3-nodesref) 18.3 NodesRef

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [NodesRef.boundingClientRect](https://super-apps.ai/mop/document/en/develop/api/fxml.html#nodesref-boundingclientrect) | Add a query request for the layout position of the node | 1.0.0 |  |
| [NodesRef.context](https://super-apps.ai/mop/document/en/develop/api/fxml.html#nodesref-context) | Add a query request for the Context object of the node | 1.0.0 |  |
| [NodesRef.fields](https://super-apps.ai/mop/document/en/develop/api/fxml.html#nodesref-fields) | Get relevant information about the node | 1.0.0 |  |
| [NodesRef.scrollOffset](https://super-apps.ai/mop/document/en/develop/api/fxml.html#nodesref-scrolloffset) | Add a query request for the scroll position of the node | 1.0.0 |  |
| [NodesRef.node](https://super-apps.ai/mop/document/en/develop/api/fxml.html#nodesref-node) | Get Node instance | 2.12.12 |  |

Note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| NodesRef.ref | Get the Ref object of the Node, which can be used to operate nodes within worklet functions. Only supported under Skyline. |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_18-4-selectorquery) 18.4 SelectorQuery

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [SelectorQuery.exec](https://super-apps.ai/mop/document/en/develop/api/fxml.html#selectorquery-exec) | Execute all requests | 1.0.0 |  |
| [SelectorQuery.in](https://super-apps.ai/mop/document/en/develop/api/fxml.html#selectorquery-in) | Change the selection range of the selector to within the custom component | 1.0.0 |  |
| [SelectorQuery.select](https://super-apps.ai/mop/document/en/develop/api/fxml.html#selectorquery-select) | Select the first node matching the selector on the current page | 1.0.0 |  |
| [SelectorQuery.selectAll](https://super-apps.ai/mop/document/en/develop/api/fxml.html#selectorquery-selectall) | Select all nodes matching the selector on the current page | 1.0.0 |  |
| [SelectorQuery.selectViewport](https://super-apps.ai/mop/document/en/develop/api/fxml.html#selectorquery-selectviewport) | Select the display area | 1.0.0 |  |

## [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_19-third-party-platforms) 19\. Third-party Platforms

Note

The following APIs are not yet supported

| Name | Function Description |
| --- | --- |
| ft.getExtConfigSync | Synchronous version of ft.getExtConfig |
| ft.getExtConfig | Get custom data fields from third-party platforms |

## [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_20-advertising) 20\. Advertising

Note

Implementation of the following APIs requires APP support, [click here for details](https://super-apps.ai/mop/document/en/develop/api/ad.html)

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| [ft.createInterstitialAd](https://super-apps.ai/mop/document/en/develop/api/ad.html#createinterstitialad) | Create interstitial ad component | 3.5.4 |  |
| [ft.createRewardedVideoAd](https://super-apps.ai/mop/document/en/develop/api/ad.html#createrewardedvideoad) | Create rewarded video ad component | 3.5.4 |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_20-1-interstitialad) 20.1 InterstitialAd

| Name | Function Description | Version | Remarks |
| --- | --- | --- | --- |
| InterstitialAd.destroy | Destroy the interstitial ad instance | 3.5.4 |  |
| InterstitialAd.load | Load the interstitial ad | 3.5.4 |  |
| InterstitialAd.offClose | Remove the listener function for the interstitial ad close event | 3.5.4 |  |
| InterstitialAd.offError | Remove the listener function for the interstitial error event | 3.5.4 |  |
| InterstitialAd.offLoad | Remove the listener function for the interstitial ad load event | 3.5.4 |  |
| InterstitialAd.onClose | Listen to the interstitial ad close event | 3.5.4 |  |
| InterstitialAd.onError | Listen to the interstitial error event | 3.5.4 |  |
| InterstitialAd.onLoad | Listen to the interstitial ad load event | 3.5.4 |  |
| InterstitialAd.show | Display the interstitial ad | 3.5.4 |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_20-2-rewardedvideoad) 20.2 RewardedVideoAd

| Name | Function Description |
| --- | --- |
| RewardedVideoAd.destroy | Destroy the rewarded video ad instance |
| RewardedVideoAd.load | Load the rewarded video ad |
| RewardedVideoAd.offClose | Remove the listener function for the user clicking the close ad button event |
| RewardedVideoAd.offError | Remove the listener function for the rewarded video error event |
| RewardedVideoAd.offLoad | Remove the listener function for the rewarded video ad load event |
| RewardedVideoAd.onClose | Listen to the user clicking the close ad button event |
| RewardedVideoAd.onError | Listen to the rewarded video error event |
| RewardedVideoAd.onLoad | Listen to the rewarded video ad load event |
| RewardedVideoAd.show | Display the rewarded video ad |

## [\#](https://super-apps.ai/mop/document/en/develop/api/overview.html\#_21-others) 21\. Others

| Name | Function Description |
| --- | --- |
| [ft.onCustomEvent](https://super-apps.ai/mop/document/en/develop/api/other.html#oncustomevent) | Listen to the onCustomEvent event dispatched by native |
| [ft.offCustomEvent](https://super-apps.ai/mop/document/en/develop/api/other.html#offcustomevent) | Stop listening to the onCustomEvent event dispatched by native |
| [ft.addCustomEventListener](https://super-apps.ai/mop/document/en/develop/api/other.html#addcustomeventlistener) | Listen to events dispatched by native |
| [ft.removeCustomEventListener](https://super-apps.ai/mop/document/en/develop/api/other.html#removecustomeventlistener) | Stop listening to events dispatched by native |
| [ft.sendWebviewEvent](https://super-apps.ai/mop/document/en/develop/api/other.html#sendwebviewevent) | Mini-Program sends events to H5 |
| [ft.getSuperviseInfo](https://super-apps.ai/mop/document/en/develop/api/other.html#getsuperviseinfo) | Get monitoring information |
| [ft.reportEvent](https://super-apps.ai/mop/document/en/develop/api/other.html#reportevent) | Event reporting |
| [ft.loadExtApi](https://super-apps.ai/mop/document/en/develop/api/other.html#loadextapi) | Load custom API configuration |

[Next：Basic](https://super-apps.ai/mop/document/en/develop/api/basic.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)