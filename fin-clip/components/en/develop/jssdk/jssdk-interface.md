<!--
Source URL: https://super-apps.ai/mop/document/en/develop/jssdk/jssdk-interface.html
Extracted: 2026-01-12T23:14:56.515Z (January 12, 2026)
Title: Interface Description | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Component Overview](https://super-apps.ai/mop/document/en/develop/component/overview.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
View Container](https://super-apps.ai/mop/document/en/develop/component/view.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Basic Content](https://super-apps.ai/mop/document/en/develop/component/basic.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Form Components](https://super-apps.ai/mop/document/en/develop/component/form.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Navigation](https://super-apps.ai/mop/document/en/develop/component/navigation.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Media Components](https://super-apps.ai/mop/document/en/develop/component/media.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Map Components](https://super-apps.ai/mop/document/en/develop/component/map.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Canvas](https://super-apps.ai/mop/document/en/develop/component/canvas.html) [![](https://super-apps.ai/mop/document/images/arrow_open.svg)\\
Open Abilities](https://super-apps.ai/mop/document/en/develop/jssdk/web-view.html)

- [web-view](https://super-apps.ai/mop/document/en/develop/jssdk/web-view.html)
- [Interface Specification](https://super-apps.ai/mop/document/en/develop/jssdk/jssdk-interface.html)
- [Changelog](https://super-apps.ai/mop/document/en/develop/jssdk/jssdk-update-log.html)

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Native Component Intro](https://super-apps.ai/mop/document/en/develop/component/original.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Navigation Bar](https://super-apps.ai/mop/document/en/develop/component/navigation-bar.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Page Meta](https://super-apps.ai/mop/document/en/develop/component/meta.html)

# [\#](https://super-apps.ai/mop/document/en/develop/jssdk/jssdk-interface.html\#interface-description) Interface Description

## [\#](https://super-apps.ai/mop/document/en/develop/jssdk/jssdk-interface.html\#_1-related-interfaces) 1\. Related Interfaces

The webpage loaded by the web-view component can use the interfaces provided by [JSSDK 1.4.20(opens new window)](https://public-1251849568.cos.ap-guangzhou.myqcloud.com/jssdk/finclip-jssdk-1.4.20.js), [JSSDK 1.4.20(ESM)(opens new window)](https://public-1251849568.cos.ap-guangzhou.myqcloud.com/jssdk/finclip-jssdk-1.4.20.esm.js) to call Mini-Program related capabilities.

Supported interfaces include:

| Interface Name | Description | Minimum Version |
| --- | --- | --- |
| ft.miniProgram.navigateTo | Retain the current page and navigate to a specific page within the application | 1.0.0 |
| ft.miniProgram.navigateBack | Close the current page and return to the previous page or multiple levels back | 1.0.0 |
| ft.miniProgram.switchTab | Navigate to a tabBar page and close all other non-tabBar pages | 1.0.0 |
| ft.miniProgram.redirectTo | Close the current page and navigate to a specific page within the application | 1.0.0 |
| ft.miniProgram.reLaunch | Close all pages and open a specific page within the application | 1.0.0 |
| ft.miniProgram.postMessage | Send a message to the Mini-Program, which triggers the component's message event at specific times (Mini-Program back, component destruction, sharing) | 1.0.0 |
| ft.miniProgram.getEnv | Get the current environment and JSSDK version number | 1.0.0 |
| ft.miniProgram.close | Close the Mini-Program | 1.0.3 |
| ft.miniProgram.navigateToMiniProgram | Navigate to another Mini-Program | 1.0.4 |
| ft.miniProgram.navigateBackMiniProgram | Return to the previous Mini-Program | 1.0.4 |
| ft.miniProgram.onShow | Register a callback for the Mini-Program onShow event | 1.0.6 |
| ft.miniProgram.onHide | Register a callback for the Mini-Program onHide event | 1.0.8 |
| ft.miniProgram.onUnload | Register a callback for the Mini-Program onUnload event | 1.0.8 |
| ft.miniProgram.onWebviewEvent | Listen for events sent by the Mini-Program, supports binding multiple functions | 1.4.1 |
| ft.miniProgram.offWebviewEvent | Remove the listener for events sent by the Mini-Program, if no parameters are passed, all bindings will be canceled | 1.4.1 |
| ft.miniProgram.sendWebviewEvent | Trigger the bindevent method bound to the webview tag | 1.4.1 |
| ft.downloadFile | Download file | 1.0.0 |
| ft.getAppletInfo | Return basic information about the current Mini-Program | 1.0.0 |
| ft.openDocument | Open file | 1.0.0 |
| ft.chooseImage | Take a photo or select an image from the phone album | 1.0.1 |
| ft.getLocalImgData | Get base64 encoding of the image | 1.0.9 |
| ft.chooseLocation | Open the map to select a location | 1.0.9 |
| ft.getLocation | Get the current geographic location information | 1.0.9 |
| ft.getStorage | Get local cache data | 1.0.9 |
| ft.setStorage | Set local cache data | 1.0.9 |
| ft.removeStorage | Remove local cache data | 1.0.9 |
| ft.clearStorage | Clear local data cache | 1.0.9 |
| ft.getStorageInfo | Get local cache information | 1.0.9 |
| ft.canGoBack | Whether the current H5 page can return to the previous page | 1.2.0 |
| ft.canNavigateBack | Whether the current Mini-Program page can return to the previous page | 1.2.0 |
| ft.setNavigationBarTitle | Set the title of the current Mini-Program page | 1.2.0 |
| ft.request | Initiate a network request | 1.3.9 |
| ft.callNativeAPI | H5 calls native methods | 1.4.1 |
| ft.registNativeAPIHandler | Register H5 methods for native calls (not recommended) | Supported from 1.4.1, this method can only register one callback and cannot be canceled. It is recommended to use onNativeAPIHandler and offNativeAPIHandler |
| ft.complete | Send a load completion event to the Mini-Program | 1.4.11 |
| ft.onNativeAPIHandler | Register H5 methods for native calls | 1.4.20 |
| ft.offNativeAPIHandler | Unregister methods | 1.4.20 |

### [\#](https://super-apps.ai/mop/document/en/develop/jssdk/jssdk-interface.html\#api-parameter-description) API Parameter Description

#### [\#](https://super-apps.ai/mop/document/en/develop/jssdk/jssdk-interface.html\#callback-function-parameter-description) Callback Function Parameter Description

Most APIs are asynchronous APIs, and when calling them, you need to pass in `success`, `fail`, and `complete` callback functions.

The input parameters of the callback function will uniformly contain the `errMsg` field, indicating the result of the call. For example:

When the call is successful, it will sequentially invoke the success and complete callbacks, returning:

```js
{
  errMsg: 'invokeMiniProgramAPI:ok'
}

        Code copied

```

When the call fails, it will sequentially invoke the fail and complete callbacks, returning:

```js
{
  errMsg: 'invokeMiniProgramAPI:fail'
}

        Code copied

```

Unless otherwise specified, API callbacks return in this format. Some API return values may include additional data; please refer to the subsequent API parameter documentation.

#### [\#](https://super-apps.ai/mop/document/en/develop/jssdk/jssdk-interface.html\#api-parameter-documentation) API Parameter Documentation

**ft.miniProgram.navigateTo(object)**

Retain the current page and navigate to a specific page within the application. You can return to the original page via navigateBack.

- object parameters:
  - `url`: String - Required parameter, the path of the page within the application to navigate to.
  - `success`: Function - Callback function for successful interface invocation.
  - `fail`: Function - Callback function for failed interface invocation.
  - `complete`: Function - Callback function for the end of interface invocation.

**ft.miniProgram.navigateBack(object)**

Close the current page and return to the previous page or multiple levels back. You can specify the number of levels to return.

- object parameters:
  - `delta`: Number - Optional, the number of pages to return. If delta is greater than the number of existing pages, it returns to the home page. The default value is 1.
  - `success`: Function - Callback function for successful interface invocation.
  - `fail`: Function - Callback function for failed interface invocation.
  - `complete`: Function - Callback function for the end of interface invocation.

**ft.miniProgram.switchTab(object)**

Navigate to a tabBar page and close all other non-tabBar pages. Only tabBar pages can be navigated to.

- object parameters:
  - `url`: String - Required parameter, the path of the tabBar page to navigate to.
  - `success`: Function - Callback function for successful interface invocation.
  - `fail`: Function - Callback function for failed interface invocation.
  - `complete`: Function - Callback function for the end of interface invocation.

**ft.miniProgram.redirectTo(object)**

Close the current page and navigate to a specific page within the application without retaining the history of the current page.

- object parameters:
  - `url`: String - Required parameter, the path of the page within the application to navigate to.
  - `success`: Function - Callback function for successful interface invocation.
  - `fail`: Function - Callback function for failed interface invocation.
  - `complete`: Function - Callback function for the end of interface invocation.

**ft.miniProgram.reLaunch(object)**

Close all pages and open a specific page within the application, clearing all page stacks.

- object parameters:
  - `url`: String - Required parameter, the path of the page within the application to navigate to.
  - `success`: Function - Callback function for successful interface invocation.
  - `fail`: Function - Callback function for failed interface invocation.
  - `complete`: Function - Callback function for the end of interface invocation.

**ft.miniProgram.postMessage(object)**

Send a message to the Mini-Program, which triggers the component's message event at specific times (Mini-Program back, component destruction, sharing).

Function input parameters are of Object type, for example:

```js
ft.miniProgram.postMessage({
  someKey: 'foo'
})

ft.miniProgram.postMessage({
  otherKey: 'boo'
})

        Code copied

```

**ft.miniProgram.getEnv(callback)**

Get the current environment and JSSDK version number, used to determine whether the current runtime environment is a Mini-Program.

- Parameters:

  - `callback`: Function - Callback function to receive results.
- Return Values:

  - `env`: String - Environment type. When opened in a Mini-Program, the value is the string 'miniprogram'; in non-Mini-Program environments, the value is an empty object.
  - `version`: String - JSSDK version number.
  - `errMsg`: String - Call result.

**ft.miniProgram.close()**

Close the current Mini-Program.

**ft.miniProgram.navigateToMiniProgram(object)**

Navigate from the current Mini-Program to another Mini-Program, specifying the page to jump to and passing data.

- object parameters:
  - `appId`: String - Required parameter, the appId of the Mini-Program to navigate to.
  - `path`: String - Optional, the path of the page to open. If empty, it opens the home page.
  - `extraData`: Object - Optional, data to be passed to the target Mini-Program.
  - `success`: Function - Callback function for successful interface invocation.
  - `fail`: Function - Callback function for failed interface invocation.
  - `complete`: Function - Callback function for the end of interface invocation.

**ft.miniProgram.navigateBackMiniProgram(object)**

Return to the previous Mini-Program, passing data back to the previous Mini-Program.

- object parameters:
  - `extraData`: Object - Optional, data to be returned to the previous Mini-Program.
  - `success`: Function - Callback function for successful interface invocation.
  - `fail`: Function - Callback function for failed interface invocation.
  - `complete`: Function - Callback function for the end of interface invocation.

For example, navigating from Mini-Program A to Mini-Program B, and then B returning to A via navigateBackMiniProgram with extraData parameters, A can obtain the navigation parameters carried by Mini-Program B through the wx.getEnterOptionsSync API.

```js
const data = wx.getEnterOptionsSync()
console.log(data)

        Code copied

```

Or retrieve it in the onShow lifecycle of the Mini-Program App:

```js
App({
  onShow(data) {
    console.log(data)
  }
})

        Code copied

```

**ft.miniProgram.onShow(callback)**

Listen for the Mini-Program display event, triggered when the Mini-Program comes to the foreground from the background.

- Parameters:
  - `callback`: Function - Callback function when the Mini-Program is displayed, with the callback parameter containing the data field representing the current Mini-Program route query.

**ft.miniProgram.onHide(callback)**

Listen for the Mini-Program hide event, triggered when the Mini-Program goes to the background from the foreground.

- Parameters:
  - `callback`: Function - Callback function when the Mini-Program is hidden.

**ft.miniProgram.onUnload(callback)**

Listen for the Mini-Program page close event, triggered when the Mini-Program page is closed.

- Parameters:
  - `callback`: Function - Callback function when the Mini-Program is closed.

**ft.miniProgram.onWebviewEvent(callback)**

Listen for events sent by the Mini-Program, triggered when the Mini-Program sends an event via sendWebviewEvent.

- Parameters:
  - `callback`: Function - Callback function to receive Mini-Program events.

**ft.miniProgram.offWebviewEvent(callback)**

Remove the listener for events sent by the Mini-Program, canceling previously registered event listeners via onWebviewEvent.

- Parameters:
  - `callback`: Function - Event callback function to be removed.

**ft.miniProgram.sendWebviewEvent(object)**

Trigger the bindevent method bound to the webview tag, sending data from the H5 page to the Mini-Program.

Function input parameters are of Object type, for example:

```js
ft.miniProgram.sendWebviewEvent({
  someKey: 'foo'
})

ft.miniProgram.sendWebviewEvent({
  otherKey: 'boo'
})

        Code copied

```

**ft.downloadFile(object)**

Download file resources to the local device, allowing you to specify the download path and request parameters.

- object parameters:

  - `url`: String - The URL of the resource to download
  - `header`: Object - HTTP request headers
  - `timeout`: Number - Timeout duration in milliseconds
  - `filePath`: String - Specifies the storage path for the downloaded file
  - `success`: Function - Callback function for a successful API call
  - `fail`: Function - Callback function for a failed API call
  - `complete`: Function - Callback function when the API call ends
- Return values:

  - `tempFilePath`: String - Temporary file path (local path). Returned if no `filePath` is provided; the downloaded file will be stored in a temporary file.
  - `filePath`: String - Local path of the downloaded file, consistent with the provided `filePath`.
  - `errMsg`: String - Call result

**ft.openDocument(object)**

Open files, supporting multiple formats such as doc, xls, ppt, pdf, etc.

- object parameters:
  - `filePath`: String - File path
  - `fileType`: String - File type, possible values: doc, xls, ppt, pdf, docx, xlsx, pptx
  - `success`: Function - Callback function for a successful API call
  - `fail`: Function - Callback function for a failed API call
  - `complete`: Function - Callback function when the API call ends

**ft.getAppletInfo(object)**

Retrieve basic information about the current Mini-Program, including its ID, name, icon, description, etc.

- object parameters:

  - `success`: Function - Callback function for a successful API call, returning basic Mini-Program information such as `appId`, `appTitle`, `appAvatar`, `appDescription`, `appThumbnail`, `path`, `userId`, etc.
  - `fail`: Function - Callback function for a failed API call
  - `complete`: Function - Callback function when the API call ends
- Return values:

  - `appId`: String - Mini-Program ID
  - `appTitle`: String - Mini-Program name
  - `appAvatar`: String - Mini-Program icon
  - `appDescription`: String - Mini-Program description
  - `appThumbnail`: String - Mini-Program cover image
  - `path`: String - Mini-Program path
  - `userId`: String - Developer ID of the Mini-Program
  - `errMsg`: String - Call result

**ft.chooseImage(object)**

Select images from the album or take photos using the camera. You can specify the maximum number of selections, image size, and source type.

- object parameters:

  - `count`: Number - Maximum number of images that can be selected, default is 9
  - `sizeType`: Array - Size of the selected images, possible values: original (original image) and compressed (compressed image), default includes both
  - `sourceType`: Array - Source of the images, possible values: album (photo album) and camera (camera), default includes both
  - `success`: Function - Callback function for a successful API call, returning a list of local file paths for the selected images (`tempFilePaths`)
  - `fail`: Function - Callback function for a failed API call
  - `complete`: Function - Callback function when the API call ends
- Return values:

  - `tempFilePaths`: Array<string> - List of local file paths for the selected images
  - `errMsg`: String - Call result

**ft.getLocalImgData(object)**

Get the base64-encoded data of an image, converting a local image into a format usable directly on web pages.

- object parameters:

  - `path`: String - Local path of the image
  - `success`: Function - Callback function for a successful API call, returning the base64-encoded image data
  - `fail`: Function - Callback function for a failed API call
  - `complete`: Function - Callback function when the API call ends
- Return values:

  - `localData`: String - Base64-encoded image data
  - `errMsg`: String - Call result

**ft.chooseLocation(object)**

Open the map to select a location, returning the user-selected location information, including latitude, longitude, location name, etc.

- object parameters:

  - `latitude`: Number - Latitude
  - `longitude`: Number - Longitude
  - `success`: Function - Callback function for a successful API call, returning location information including latitude, longitude, location name, and detailed address
  - `fail`: Function - Callback function for a failed API call
  - `complete`: Function - Callback function when the API call ends
- Return values:

  - `longitude`: Number - Longitude
  - `latitude`: Number - Latitude
  - `name`: String - Location name
  - `address`: String - Detailed address
  - `errMsg`: String - Call result

**ft.getLocation(object)**

Get the current geographic location information, allowing you to specify the coordinate system type. Returns latitude, longitude, speed, accuracy, etc.

- object parameters:

  - `type`: String - Coordinate type, possible values: wgs84, gcj02, default is wgs84
  - `success`: Function - Callback function for a successful API call, returning location information including latitude, longitude, speed, accuracy, etc.
  - `fail`: Function - Callback function for a failed API call
  - `complete`: Function - Callback function when the API call ends
- Return values:

  - `longitude`: Number - Longitude
  - `latitude`: Number - Latitude
  - `speed`: Number - Speed
  - `accuracy`: Number - Accuracy of the location
  - `errMsg`: String - Call result

**ft.getStorage(object)**

Asynchronously retrieve the content corresponding to the specified key from the local cache.

- object parameters:

  - `key`: String - Specified key in the local cache
  - `success`: Function - Callback function for a successful API call, returning the content corresponding to the key
  - `fail`: Function - Callback function for a failed API call
  - `complete`: Function - Callback function when the API call ends
- Return values:

  - `data`: Object/String - Content corresponding to the key
  - `errMsg`: String - Call result

**ft.setStorage(object)**

Asynchronously store data in the local cache under the specified key.

- object parameters:
  - `key`: String - Specified key in the local cache
  - `data`: Object/String - Content to be stored, supports only native JS types, Date, and objects serializable via JSON.stringify
  - `success`: Function - Callback function for a successful API call
  - `fail`: Function - Callback function for a failed API call
  - `complete`: Function - Callback function when the API call ends

**ft.removeStorage(object)**

Asynchronously delete the content corresponding to the specified key from the local cache.

- object parameters:
  - `key`: String - Specified key in the local cache
  - `success`: Function - Callback function for a successful API call
  - `fail`: Function - Callback function for a failed API call
  - `complete`: Function - Callback function when the API call ends

**ft.clearStorage(object)**

Clear the local data cache, deleting all stored data.

- object parameters:
  - `success`: Function - Callback function for a successful API call
  - `fail`: Function - Callback function for a failed API call
  - `complete`: Function - Callback function when the API call ends

**ft.getStorageInfo(object)**

Asynchronously retrieve current storage information, including used space size, total capacity, and a list of all keys.

- object parameters:

  - `success`: Function - Callback function for a successful API call, returning information including `keys` (all keys in the current storage) and `currentSize` (currently occupied space size in KB)
  - `fail`: Function - Callback function for a failed API call
  - `complete`: Function - Callback function when the API call ends
- Return values:

  - `keys`: Array - All keys in the current storage
  - `currentSize`: Number - Currently occupied space size in KB
  - `errMsg`: String - Call result

**ft.canGoBack(object)**

Check whether the current H5 page can return to the previous page, used to determine the navigation history state of the current page.

- object parameters:

  - `success`: Function - Callback function for a successful API call, returning `{ canGoBack: true // or false }`
  - `fail`: Function - Callback function for a failed API call
  - `complete`: Function - Callback function when the API call ends
- Return values:

  - `canGoBack`: Boolean - Indicates whether it is possible to return to the previous page
  - `errMsg`: String - Call result

**ft.canNavigateBack(object)**

Check whether the current Mini-Program page can return to the previous page, used to determine the page stack state of the Mini-Program.

- object parameters:

  - `success`: Function - Callback function for a successful API call, returning `{ canNavigateBack: true // or false }`
  - `fail`: Function - Callback function for a failed API call
  - `complete`: Function - Callback function when the API call ends
- Return values:

  - `canNavigateBack`: Boolean - Indicates whether it is possible to return to the previous page
  - `errMsg`: String - Call result

**ft.setNavigationBarTitle(object)**

Dynamically set the title of the current Mini-Program page, allowing updates based on page content.

- object parameters:
  - `title`: String - Page title
  - `success`: Function - Callback function for a successful API call
  - `fail`: Function - Callback function for a failed API call
  - `complete`: Function - Callback function when the API call ends

Changes to the H5 page's `document.title` will override the API settings, taking the latest updated title value.

**ft.request(object)**

Initiate a network request to fetch data from a remote server, supporting various HTTP methods and parameter settings.

- object parameters:

  - `url`: String - Developer server interface address
  - `data`: Object/String/ArrayBuffer - Request parameters
  - `header`: Object - Request headers; `Referer` cannot be set in the header
  - `method`: String - HTTP request method, default is GET
  - `dataType`: String - Format of the returned data, default is json
  - `success`: Function - Callback function for a successful API call
  - `fail`: Function - Callback function for a failed API call
  - `complete`: Function - Callback function when the API call ends
- Return values:

  - `data`: Object - Data returned by the server
  - `statusCode`: Number - HTTP status code
  - `header`: Object - Headers returned by the server
  - `errMsg`: String - Call result

**ft.callNativeAPI(name, data, callback)**

Call native methods from an H5 page to enable interaction between the H5 page and the native application, accessing native functionalities and capabilities.

- Parameters:
  - `name`: String - Name of the registered native API
  - `data`: Object - Parameters passed to the native method
  - `callback`: Function - Callback function executed after the native method completes

**ft.registNativeAPIHandler(name, callback)**

Register an H5 method for native calls (not recommended), enabling the native application to send messages and call H5 methods.

- Parameters:
  - `name`: String - Registered method name
  - `callback`: Function - Callback function executed when called by the native application

**ft.complete()**

Send a loading completion event to the Mini-Program, notifying it that the H5 page has finished loading.
When the Mini-Program is configured with a `timeout`, H5 needs to notify when loading is completed; otherwise, the `bindtimeout` event will be triggered after the `timeout` duration.

The `timeout` is in milliseconds.

```html
<web-view src="" timeout="12000" bindtimeout="timeout" />

        Code copied

```

**ft.onNativeAPIHandler(name, callback)**

Registers an H5 method for native invocation, allowing the native application to call methods within the H5 page. Multiple callback functions can be registered.

- Parameters:
  - `name`: String - The name of the method to register
  - `callback`: Function - The callback function executed when invoked by the native side

**ft.offNativeAPIHandler(name, callback)**

Unregisters the H5 method, removing the previously registered callback function via `onNativeAPIHandler`.

- Parameters:
  - `name`: String - The name of the method to unregister
  - `callback`: Function - The callback function to remove

#### [\#](https://super-apps.ai/mop/document/en/develop/jssdk/jssdk-interface.html\#example-code-for-some-api-calls) Example Code for Some API Calls

```js
ft.miniProgram.navigateTo({ url: '/path/to/page' })
ft.miniProgram.reLaunch({ url: '/path/to/page' })
ft.miniProgram.postMessage({ data: 'foo' })
ft.miniProgram.postMessage({ data: { foo: 'bar' } })
ft.miniProgram.getEnv(function(res) {
  console.log(res.env)
  console.log(res.version) // Supported from version 1.4.18 onwards
}) // miniprogram

// Synchronously determine the current H5 runtime environment
console.log(window.__fcjs_environment) // miniprogram
// Close the Mini-Program
ft.miniProgram.close()

ft.miniProgram.navigateBackMiniProgram({
  extraData: {},
  success: function(res) {
    console.log('navigateBackMiniProgram success callback:')
    console.log(res)
  }
})

ft.miniProgram.navigateToMiniProgram({
  appId: '',
  success: function(res) {
    console.log('navigateToMiniProgram success callback:')
    console.log(res)
  }
})

ft.miniProgram.onShow(res => {
  console.log(res)
  // res.data represents the query parameters of the current Mini-Program route
})

ft.miniProgram.onHide(res => {
  // Do Something
})

ft.miniProgram.onUnload(res => {
  // Do Something
})

ft.downloadFile({
  url,
  header,
  timeout,
  filePath
})

ft.openDocument({
  filePath,
  fileType
})

ft.chooseImage({
  count: 1, // Default is 9
  sizeType: ['original', 'compressed'], // Can specify whether it's the original or compressed image; default includes both
  sourceType: ['album', 'camera'], // Can specify whether the source is the album or camera; default includes both
  success: res => {
    console.log(res)
  }
})

ft.getAppletInfo({
  success: res => {
    console.log('getAppletInfo', res)
    // {
    //     appAvatar = "Mini-Program icon URL";
    //     appDescription = "Mini-Program description";
    //     appId = "Mini-Program ID";
    //     path = "Mini-Program page path when clicked for sharing";
    //     appThumbnail = "Path to the Mini-Program cover image, which may be a network or local path, with an aspect ratio of 5:4";
    //     appTitle = "Mini-Program name";
    //     userId = "Mini-Program developer ID";
    // }
  }
})
ft.chooseImage({
  count: 1, // Default is 9
  sizeType: ['original', 'compressed'], // Can specify whether it's the original or compressed image; default includes both
  sourceType: ['album', 'camera'], // Can specify whether the source is the album or camera; default includes both
  success: res => {
    console.log(res)
    window.ft.miniProgram.getLocalImgData({
      path: res.tempFilePaths[0],
      success: res => {
        console.log(res)
      }
    })
  }
})

// Check if the current H5 page can navigate back to the previous page
ft.canGoBack({
  success: function(res) {
    console.log(res)
  }
})

// Check if the Mini-Program can navigate back to the previous page
ft.canNavigateBack({
  success: function(res) {
    console.log(res)
  }
})

// Set the title of the Mini-Program page
ft.setNavigationBarTitle({
  title: 'page title'
})

ft.request({
  url: 'https://some.url',
  method: 'GET',
  data: {
    param1: 'test'
  },
  success: function(res) {
    console.log('success', res)
  },
  fail: function(res) {
    console.log('fail', res)
  },
  complete: function(res) {
    console.log('complete', res)
  }
})

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/jssdk/jssdk-interface.html\#_2-specific-interfaces) 2\. Specific Interfaces

| Interface Name | Description | Minimum Version |
| --- | --- | --- |
| ft.miniProgram.onWebviewEvent | Listen for events sent by the Mini-Program | 1.4.1 |
| ft.miniProgram.offWebviewEvent | Remove the listener for events sent by the Mini-Program | 1.4.1 |
| ft.miniProgram.sendWebviewEvent | Trigger the `bindevent` method bound to the webview tag | 1.4.1 |
| ft.callNativeAPI | H5 page calls Native API | 1.4.1 |
| ft.onNativeAPIHandler | Register Native calling APIs in H5 | 1.4.20 |
| ft.offNativeAPIHandler | Unregister Native calling APIs in H5 | 1.4.20 |

### [\#](https://super-apps.ai/mop/document/en/develop/jssdk/jssdk-interface.html\#_2-1-h5-page-calling-native-api) 2.1 H5 Page Calling Native API

Example interface name: js2AppFunction

#### [\#](https://super-apps.ai/mop/document/en/develop/jssdk/jssdk-interface.html\#_2-1-1-ios-example) 2.1.1 iOS Example

```objectivec
[[FATClient sharedClient] fat_registerWebApi:@"js2AppFunction" handler:^(FATAppletInfo *appletInfo, id param, FATExtensionApiCallback callback) {\
        NSString *name = param[@"name"];\
//        id params = param[@"data"];\
        if ([name isEqualToString:@"getLocation"]) {\
            // Execute location logic\
\
            // Return result to HTML\
            NSDictionary *dict = @{@"errno":@"403", @"errmsg":@"No Permission", @"result": @{@"address":@"Guangdong Province, Shenzhen City, Nanshan District, Aerospace Science and Technology Plaza"}};\
            callback(FATExtensionCodeSuccess, dict);\
        } else if ([name isEqualToString:@"getColor"]) {\
            // Execute other logic\
\
            // Return result to HTML\
            NSDictionary *dict = @{@"r":@"110",@"g":@"150",@"b":@"150"};\
            callback(FATExtensionCodeSuccess, dict);\
        }\
}];

        Code copied

```

#### [\#](https://super-apps.ai/mop/document/en/develop/jssdk/jssdk-interface.html\#_2-1-2-android-example) 2.1.2 Android Example

**API Example**

```java
public class WebApi extends BaseApi {

    public WebApi(Context context) {
        super(context);
    }

    @Override
    public String[] apis() {
        return new String[]{"js2AppFunction"}; // API name
    }

    @Override
    public void invoke(String event, JSONObject param, ICallback callback) {
        // Operations performed when the method is called by the native side
    }
}

        Code copied

```

Kotlin

```java
FinAppClient.extensionWebApiManager.registerApi(WebApi(this))

        Code copied

```

Java

```java
FinAppClient.INSTANCE.getExtensionWebApiManager().registerApi(new WebApi(this));

        Code copied

```

#### [\#](https://super-apps.ai/mop/document/en/develop/jssdk/jssdk-interface.html\#_2-1-3-harmonyos-example) 2.1.3 HarmonyOS Example

**API Example**

```js
  const client = FinAppClient.init(
    finAppConfig, // Parameter definitions can refer to the HarmonyOS SDK initialization documentation
    context,
    entryInfo,
    startMode
  )

  client.registerCustomApi('js2AppFunction', (args: IApiManager.IInvokeArgs) => {
      const params = args.params
      const callback = args.callback
      console.log('customApi params', JSON.stringify(params))
      callback.onSuccess({ data: 'customApi success' })
  })

        Code copied

```

#### [\#](https://super-apps.ai/mop/document/en/develop/jssdk/jssdk-interface.html\#_2-1-4-html-example) 2.1.4 HTML Example

By referencing our bridging JSSDK file in the HTML, you can call the registered methods mentioned above.

Example of calling a registered method within the HTML:

```js
// Full parameter description
// name: The API name registered natively
// data: Parameters passed to the native method
// callback: Callback function after the native method execution is completed
ft.callNativeAPI('js2AppFunction', { name: 'getLocation' }, result => {
  console.log(result)
})

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/jssdk/jssdk-interface.html\#_2-2-native-calling-methods-in-html) 2.2 Native Calling Methods in HTML

Example interface name: app2jsFunction

#### [\#](https://super-apps.ai/mop/document/en/develop/jssdk/jssdk-interface.html\#_2-2-1-ios-api) 2.2.1 iOS API

The native side calls the following API to invoke JS functions in the HTML:

```objectivec
NSString *jsonParams = @""; // This should be a JSON string converted from a parameter dictionary.
NSNumber *pageId = @(1234); // This is the pageId passed from the HTML
[[FATClient sharedClient] fat_callWebApi:@"app2jsFunction" paramString:jsonParams pageId:pageId handler:^(id result, NSError *error) {\
\
}];

        Code copied

```

#### [\#](https://super-apps.ai/mop/document/en/develop/jssdk/jssdk-interface.html\#_2-2-2-android-api) 2.2.2 Android API

```kotlin
/**
 * Native invoking JS function
 *
 * @param appId Mini-Program ID
 * @param funcName JS function name
 * @param funcParams JS function parameters
 * @param webViewId WebView's ID
 * @param callback Callback
 */
fun callJS(appId: String, funcName: String?, funcParams: String?, webViewId: Int, callback: FinCallback<String?>)


        Code copied

```

**Invocation Example**

Kotlin

```kotlin
FinAppClient.appletApiManager.callJS("appId", "app2jsFunction", "funParams", 1, object : FinCallback<String?> {
    override fun onSuccess(result: String?) {
        Toast.makeText(context, "JS invocation successful: $result", Toast.LENGTH_SHORT).show()
    }

    override fun onError(code: Int, error: String) {
        Log.d(TAG, "JS invocation failed: Error code=$code, Error message=$error")
    }

    override fun onProgress(status: Int, info: String) {
        Log.d(TAG, "JS invocation in progress: Status code=$status, Info=$info")
    }
})

        Code copied

```

Java

```java
FinAppClient.INSTANCE.getAppletApiManager().callJS("appId", "app2jsFunction", "funParams", 1, new FinCallback<String>() {
    @Override
    public void onSuccess(String result) {
        Toast.makeText(context, "JS invocation successful: " + result, Toast.LENGTH_SHORT).show();
    }

    @Override
    public void onError(int code, String error) {
        Toast.makeText(context, "JS invocation failed: Error code=" + code + ", Error message=" + error, Toast.LENGTH_SHORT).show();
    }

    @Override
    public void onProgress(int status, String info) {
        Log.d(TAG, "JS invocation in progress: Status code=" + status + ", Info=" + info);
    }
});

        Code copied

```

#### [\#](https://super-apps.ai/mop/document/en/develop/jssdk/jssdk-interface.html\#_2-2-3-html-api) 2.2.3 HTML API

Similarly, reference the bridging JSSDK file in the HTML, then register the method in the HTML, for example, the method name is app2jsFunction.

```js
// Full parameter description
// name: Registered method name
// callback: Callback function executed when invoked by the native side, receiving parameters passed from the native side
const callback = function(res) {
  // app2jsFunction callback
  // res contains data passed from the native side
  console.log(res)
  return { success: true } // Can return data to the native side
}

// Add listener
ft.onNativeAPIHandler('app2jsFunction', callback)

// Remove listener
ft.offNativeAPIHandler('app2jsFunction', callback)

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/jssdk/jssdk-interface.html\#_2-3-h5-page-sending-events-to-mini-program) 2.3 H5 Page Sending Events to Mini-Program

#### [\#](https://super-apps.ai/mop/document/en/develop/jssdk/jssdk-interface.html\#_2-3-1-h5-code-example) 2.3.1 H5 Code Example

```js
// H5 Page
// Input parameter object
// Data will be passed through to the e.detail.data of the bindevent callback function in the Mini-Program
ft.miniProgram.sendWebviewEvent({
  test: 123
})

        Code copied

```

#### [\#](https://super-apps.ai/mop/document/en/develop/jssdk/jssdk-interface.html\#_2-3-2-mini-program-code-example) 2.3.2 Mini-Program Code Example

Logic Layer

```js
// Mini-Program /pages/index/index.js
Page({
  onEvent(e) {
    console.log(e.detail.data.test) // 123
  }
})

        Code copied

```

View Layer

```html
<!-- Mini-Program /pages/index/index.fxml -->
<web-view src="https://xxx.xxx" bindevent="onEvent"></web-view>

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/jssdk/jssdk-interface.html\#_2-4-mini-program-sending-events-to-h5-page) 2.4 Mini-Program Sending Events to H5 Page

#### [\#](https://super-apps.ai/mop/document/en/develop/jssdk/jssdk-interface.html\#_2-4-1-h5-code-example) 2.4.1 H5 Code Example

```js
// Input parameter is callback: A callback function that receives events from the Mini-Program, with parameter e containing data passed from the Mini-Program
function onEvent(e) {
  console.log(e.test) // 123
}
// Register listener
ft.miniProgram.onWebviewEvent(onEvent)
// Remove listener
ft.miniProgram.offWebviewEvent(onEvent)

        Code copied

```

#### [\#](https://super-apps.ai/mop/document/en/develop/jssdk/jssdk-interface.html\#_2-4-2-mini-program-code-example) 2.4.2 Mini-Program Code Example

```js
// Input parameter object, representing data to be sent to the H5 page
ft.sendWebviewEvent({ test: 123 })

        Code copied

```

[Previous：web-view](https://super-apps.ai/mop/document/en/develop/jssdk/web-view.html)[Next：Changelog](https://super-apps.ai/mop/document/en/develop/jssdk/jssdk-update-log.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)