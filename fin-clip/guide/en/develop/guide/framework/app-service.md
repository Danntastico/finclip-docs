<!--
Source URL: https://super-apps.ai/mop/document/en/develop/guide/framework/app-service.html
Extracted: 2026-01-12T23:20:49.893Z (January 12, 2026)
Title: App Service / Logic Layer | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Overview](https://super-apps.ai/mop/document/en/develop/guide/feature.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Understand Mini Program](https://super-apps.ai/mop/document/en/develop/guide/framework/app-service.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Configure Mini Program](https://super-apps.ai/mop/document/en/develop/guide/framework/app-service.html) [![](https://super-apps.ai/mop/document/images/arrow_open.svg)\\
Mini Program Framework](https://super-apps.ai/mop/document/en/develop/guide/framework/intro.html)

- [Introduction](https://super-apps.ai/mop/document/en/develop/guide/framework/intro.html)
- [Logic Layer](https://super-apps.ai/mop/document/en/develop/guide/framework/app-service.html)
- [View Layer](https://super-apps.ai/mop/document/en/develop/guide/framework/view.html)

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Custom Component](https://super-apps.ai/mop/document/en/develop/guide/component.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Mini Program Plugin](https://super-apps.ai/mop/document/en/develop/guide/plugin.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Basic Abilities](https://super-apps.ai/mop/document/en/develop/guide/framework/app-service.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Import from 3rd-party (beta)](https://super-apps.ai/mop/document/en/develop/guide/framework/app-service.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
SSO Login Guide](https://super-apps.ai/mop/document/en/develop/guide/ssoLogin.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Traceability (beta)](https://super-apps.ai/mop/document/en/develop/guide/trace.html)

# [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/app-service.html\#app-service-logic-layer) App Service / Logic Layer

## [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/app-service.html\#_1-introduction-to-the-logic-layer) 1\. Introduction to the Logic Layer

The Mini-Program development framework uses a `JavaScript` engine for its Logic Layer, providing a runtime environment for the developer's `JavaScript` code along with specific functionalities of FinClip Mini-Programs.

The Logic Layer processes data and sends it to the View Layer, while also receiving event feedback from the View Layer.

All code written by the developer will eventually be packaged into a single `JavaScript` file, which runs when the Mini-Program starts and continues until the Mini-Program is destroyed. This behavior is similar to `ServiceWorker`, hence the Logic Layer is also referred to as the `App Service`.

Building upon `JavaScript`, we have added several features to facilitate Mini-Program development:

- Added `App` and `Page` methods for program registration and page registration.
- Added `getApp` and `getCurrentPages` methods to retrieve the App instance and the current page stack, respectively.
- Provided `modularization` capabilities, with each page having its own independent scope.

## [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/app-service.html\#_2-registering-a-mini-program) 2\. Registering a Mini-Program

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/app-service.html\#app-object) App(Object)

The App() function is used to register a Mini-Program. It accepts an Object parameter.

App() must be called in app.js and can only be called once.

**Object Parameter Description**

| Property | Type | Description | Trigger Timing |
| --- | --- | --- | --- |
| onLaunch | Function | Lifecycle callback—listens for Mini-Program initialization | Triggered when Mini-Program initialization is complete (triggered globally only once) |
| onShow | Function | Lifecycle callback—listens for Mini-Program display | Triggered when the Mini-Program starts or comes to the foreground from the background |
| onHide | Function | Lifecycle callback—listens for Mini-Program hide | Triggered when the Mini-Program moves from the foreground to the background |
| onError | Function | Error listener function | Triggered when a script error occurs in the Mini-Program or an API call fails, includes error information |
| onPageNotFound | Function | Page not found listener function | Triggered when the page the Mini-Program attempts to open does not exist, includes page information callback |
| Others | Not restricted | Developers can freely add any functions or data to the Object parameter, accessible via `this` |  |

**Foreground and Background Definitions**

After the Mini-Program starts, if the user can see the current interface, the Mini-Program is in the foreground state. When the user closes the Mini-Program via the ellipse button in the upper right corner or leaves the Host-App, the Mini-Program does not terminate immediately but enters the background state, triggering the onHide callback event.

When the user re-enters the Host-App or re-opens the Mini-Program, the Mini-Program switches from the background to the foreground, triggering the onShow callback event. If the user does not open the Mini-Program for a long time or if system resources are tight, the Mini-Program may be destroyed, exiting completely.

**Example Code**

```bash
App({
  onLaunch: function(options) {
    console.log("launch parameters",options)
  },
  onShow: function(options) {
     console.log("onShow parameters",options)
  },
  onHide: function() {
  },
  onError: function(error) {
    console.log("Error information:",error)
  },
  globalData: ''
})

        Code copied

```

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/app-service.html\#onlaunch-object) onLaunch(Object)

Triggered when Mini-Program initialization is complete. Triggered globally only once.

**Object Parameter Description**

| Field | Type | Description |
| --- | --- | --- |
| path | String | The path used to open the Mini-Program |
| query | Object | The query field when opening the Mini-Program, configurable via sharing or invocation protocol |
| referrerInfo | Object | Returned when entering the Mini-Program from another Mini-Program or App |
| referrerInfo.appId | String | The appId of the source Mini-Program, see details below |
| referrerInfo.extraData | Object | Data passed from other sources |

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/app-service.html\#onshow-object) onShow(Object)

Triggered when the Mini-Program starts or comes to the foreground from the background. Triggered every time it switches to the foreground.

**Object Parameter Description**

Same as onLaunch.

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/app-service.html\#onhide) onHide()

Triggered when the Mini-Program moves from the foreground to the background. Triggered every time it switches to the background.

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/app-service.html\#onerror-string-error) onError(String error)

Triggered when a script error occurs in the Mini-Program or an API call fails.

**Parameter Description**

| Name | Type | Description |
| --- | --- | --- |
| error | String | Error information including stack trace |

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/app-service.html\#onpagenotfound-object) onPageNotFound(Object)

Triggered when the target page to be opened does not exist. Often used to catch situations where the target page of a route jump does not exist.

**Parameter Description**

| Name | Type | Description |
| --- | --- | --- |
| path | String | The path of the non-existent page |
| query | Object | The query parameters of the non-existent page |
| isEntryPage | Boolean | Whether it is the first page of this startup (e.g., entering from a share entry, the first page is the share page configured by the developer) |

Developers can perform redirection handling in the onPageNotFound callback, but it must be handled synchronously within the callback; asynchronous handling is invalid.

**Example Code**

```bash
App({
  onPageNotFound(res) {
    jd.redirectTo({
      url: 'pages/index/index.fxml'
    })
  }
})

        Code copied

```

Note

1. If the developer does not add an onPageNotFound listener, when the target page of a jump does not exist, it will be handled by the Host-App.
2. Ensure that the target page redirected to in the onPageNotFound callback exists; otherwise, it will be handled by the Host-App, and onPageNotFound will not be called again to avoid infinite loops.

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/app-service.html\#getapp-object) getApp(Object)

Global method. The getApp() function can be used to obtain the Mini-Program App instance, commonly used in pages to access global data and methods of the APP instance. Note that within the APP() method in app.js, it can be obtained directly via `this`; in other pages, use the getApp() method.

**Object Parameter Description**

| Field | Type | Description |
| --- | --- | --- |
| allowDefault | Boolean | Returns a default implementation when the App is not defined. When the App is called, properties defined in the default implementation will be merged into the App. |

**Example Code**

```bash
const APP = getApp();
console.log(APP.globalData) // Output global data

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/app-service.html\#_3-registering-pages) 3\. Registering Pages

### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/app-service.html\#_3-1-using-the-page-constructor-to-register-pages) 3.1 Using the Page Constructor to Register Pages

The Page(Object) function is used to register a page. It accepts an Object type parameter, specifying the page's initial data, lifecycle callbacks, event handlers, etc.

| Property | Type | Description |
| --- | --- | --- |
| data | Object | The initial data of the page |
| onLoad | Function | Lifecycle callback—triggered when the page loads |
| onShow | Function | Lifecycle callback—listens for page display |
| onReady | Function | Lifecycle callback—listens for the completion of the page's initial rendering |
| onHide | Function | Lifecycle callback—listens for page hide |
| onUnload | Function | Lifecycle callback—listens for page unload |
| onPullDownRefresh | Function | Executed when pull-down refresh is triggered |
| onReachBottom | Function | Executed when the page reaches the bottom |
| onShareAppMessage | Function | Forward / Share |
| onPageScroll | Function | Handler function for page scroll events |
| onTabItemTap | Function | Triggered when a tab is clicked, if the current page is a tab page |
| Others | Any | Developers can add any functions or data to the Object parameter, accessible via `this` within the page's functions |

**Example Code**

```javascript
//index.js
Page({
  data: {
    userName: ""
  },
  onLoad: function(e) {
    this.getName();
  },
  onReady: function() {

  },
  onShow: function() {

  },
  onHide: function() {

  },
  onUnload: function() {

  },
  onPullDownRefresh: function() {

  },
  onReachBottom: function() {

  },
  onShareAppMessage: function () {

  },
  onPageScroll: function() {

  },
  onTabItemTap(item) {
    console.log("Currently clicked:",JSON.stringify(item))

  },
  // Event handler.
  getName: function() {
    this.setData({
      userName:"cortana"
    })
  },
  customData: {
    dName: 'cortana'
  }
})

        Code copied

```

For detailed parameter meanings and usage, please refer to the Page reference documentation.

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/app-service.html\#_3-1-1-initial-data) 3.1.1 Initial Data

data is the initial data used for the first rendering of the page.

Data in data must be of the following types: string, number, boolean, object, array.

The rendering layer can bind data via FXML.

**Example Code**

```html
<view>{{userName}}</view>
<view>{{cover[0].url}}</view>

        Code copied

```

```javascript
Page({
  data: {
    userName: 'cortana',
    cover: [{url: 'http://xxxxx.jpg',title:"avatar"}, {url: 'http://xxxxx.jpg',title:"detail"}]
  }
})

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/app-service.html\#_3-2-lifecycle-callback-functions) 3.2 Lifecycle Callback Functions

For lifecycle triggers and page routing methods, please refer to the detailed documentation.

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/app-service.html\#onload-object-query) onLoad(Object query)

Triggered when the page loads. Called only once per page. Parameters from the path used to open the current page can be obtained in the onLoad parameters.

**Parameter Description**

| Name | Type | Description |
| --- | --- | --- |
| query | Object | Parameters from the path used to open the current page |

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/app-service.html\#onshow) onShow()

Triggered when the page is displayed/comes to the foreground.

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/app-service.html\#onready) onReady()

Triggered when the page's initial rendering is complete. Called only once per page, indicating the page is ready and can interact with the View Layer.

Note

APIs that set interface content, such as jd.setNavigationBarTitle, should be called after onReady.

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/app-service.html\#onhide-2) onHide()

Triggered when the page is hidden/moves to the background. Examples: navigating to another page via navigateTo, switching to another page via bottom tab, Mini-Program moving to background, etc.

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/app-service.html\#onunload) onUnload()

Triggered when the page is unloaded. Examples: redirectTo or navigateBack to another page.

### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/app-service.html\#_3-3-page-event-handler-functions) 3.3 Page Event Handler Functions

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/app-service.html\#onpulldownrefresh) onPullDownRefresh()

Listens for the user's pull-down refresh event.

####onReachBottom()
Listens for the user's reach bottom event.

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/app-service.html\#onpagescroll-object) onPageScroll(Object)

Listens for the user's page scroll event.

**Parameter Description**

| Property | Type | Description |
| --- | --- | --- |
| scrollTop | Number | The distance the page has scrolled vertically (in px) |

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/app-service.html\#onshareappmessage-object) onShareAppMessage(Object)

Listens for user clicks on the share button within the page (`<button>` component with open-type="share") or the "Recommend to Friends" button in the upper right corner menu. Supports custom sharing content. This event requires returning an Object to configure the sharing content. See "Sharing Content Configuration" for details.

**Object** **Parameter Description**

| Property | Type | Description |
| --- | --- | --- |
| from | String | Source of the share event. button: in-page share button; menu: "Recommend to Friends" menu in the upper right corner |
| target | Object | If from is button, then target is the button that triggered this share event; otherwise undefined |
| webViewUrl | String | When the page contains a <web-view> component, returns the current <web-view>'s url |

**Sharing Content Configuration**

| Property | Type | Required | Description |
| --- | --- | --- | --- |
| mpId | string | No | WeChat Mini-Program ID. Used when sharing to WeChat; after the user clicks the share card, they enter the WeChat Mini-Program corresponding to this appid, directing traffic to the WeChat Mini-Program. |
| title | string | No | Share title |
| type | number | No | Share type (0 - WeChat Mini-Program release version; 1 - WeChat Mini-Program development version; 2 - WeChat Mini-Program trial version) |
| path | string | No | Mini-Program path |
| mpPath | string | No | WeChat Mini-Program path |
| imageUrl | string | Yes | Image address (Mini-Program cover image or H5 page cover) |
| channel | string | No | Channel (defaults to WeChat Friends, WeChat Moments if not specified) |
| url | string | No | H5 link address (for H5 sharing, defaults to intermediate page if not filled) |
| desc | string | No | Share content summary |

**Example Code**

```bash
Page({
  onShareAppMessage: function (res) {
    console.log(res.target);
    return {
     mpId: 'Shared WeChat Mini-Program appid',
     title: 'Shared title',
     type: 0,
     desc: 'Shared description, summary, etc.',
     imageUrl: 'http://pic30.finogeeks.com/20130619/9885883_210838271000_2.jpg',
     path: 'page/component/index',
     mpPath:'Shared WeChat Mini-Program path',
     channel:'Wxfriends,Wxmoments',
     url: 'https://super-apps.ai/develop/index/ao00f99475552b3131',
    }
  }
})

        Code copied

```

After sharing the example code to WeChat Friends, the corresponding release version WeChat Mini-Program will open; sharing to Moments will open the H5 page corresponding to the url.

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/app-service.html\#ontabitemtap-object) onTabItemTap(Object)

Triggered when a top or bottom tab is clicked.

**Object Parameter Description**

| Parameter | Type | Description |
| --- | --- | --- |
| index | String | The index of the clicked tabItem, starting from 0 |
| pagePath | String | The page path of the clicked tabItem |
| text | String | The button text of the clicked tabItem |

**Example Code**

```bash
Page({
  onTabItemTap(item) {
    console.log("Tab bar click:",item);
  }
})

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/app-service.html\#_3-4-component-event-handler-functions) 3.4 Component Event Handler Functions

Event handler functions for components can also be defined in Page. In the .fxml file, add event bindings to components. When an event is triggered, the corresponding event handler function defined in Page will execute.

**Example Code**

```html
<view bindtap="getUsername">Get Username</view>
Page({
  getUsername: function() {
    console.log("Clicked get username")
  }
})

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/app-service.html\#_3-5-using-the-component-constructor-to-construct-pages) 3.5 Using the Component Constructor to Construct Pages

> Supported since Base Library 1.6.3

The Page constructor is suitable for simple pages. However, for complex pages, the Page constructor might not be ideal.

In such cases, the Component constructor can be used to construct pages. The main difference with the Component constructor is that methods need to be placed inside `methods: { }`.

**Code Example**

```javascript
Component({
  data: {
    text: "This is page data."
  },
  methods: {
    onLoad: function(options) {
      // Executed when the page is created
    },
    onPullDownRefresh: function() {
      // Executed during pull-down refresh
    },
    // Event response function
    viewTap: function() {
      // ...
    }
  }
})

        Code copied

```

This creation method is very similar to Custom Components and allows the use of advanced features like behaviors. Please refer to the Component Constructor chapter for specific details.

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/app-service.html\#page-route) Page.route

The path to the current page, type is String.

**Example Code**

```javascript
<view bindtap="getCurrentRoute"> Click to view current page route </view>
Page({
  getCurrentRoute: function() {
    console.log("Current page route:",this.route)
  }
})

        Code copied

```

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/app-service.html\#page-prototype-setdata-object-data-function-callback) Page.prototype.setData(Object data, Function callback)

The setData function is used to send data asynchronously from the Logic Layer to the View Layer, while also changing the corresponding value in `this.data` (synchronously).

**Object** **Parameter Description**

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| data | Object | Yes | The data to be changed this time |
| callback | Function | No | Callback function after the interface update rendering caused by setData is complete |

Object is represented in key: value form, changing the value corresponding to the key in `this.data` to value.

Note

1. Directly modifying `this.data` cannot change the page's state.
2. Only supports setting data that can be JSON serialized.
3. The amount of data set in a single call should not be too large; cannot exceed 1024KB.
4. Please do not manually set the value of any item in data to undefined.

**Example Code**

```html
<!--index.fxml-->
<view>{{title}}</view>
<button bindtap="changeTitle"> Change String Type </button>
<view>{{num}}</view>
<button bindtap="changeNum"> Change Number Type</button>
<view>{{array[0].name}}</view>
<button bindtap="changeArray">Change Array Type </button>
<view>{{object.name}}</view>
<button bindtap="changeObject">Change Object Type </button>

        Code copied

```

```javascript
//index.js
Page({
  data: {
    title: 'I am title',
    num: 0,
    array: [{name: 'cortana'}],
    object: {
      text: 'init data'
    }
  },
  changeText: function() {
    this.setData({
      title: 'New Title'
    })
  },
  changeNum: function() {

    this.setData({
      num: this.data.num +1
    })
  },
  changeArray: function() {
    this.setData({
      'array[0].name':'Mary'
    })
  },
  changeObject: function(){
    this.setData({
      'object.name': 'Mary'
    });
  }
})

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/app-service.html\#_4-page-configuration) 4\. Page Configuration

Each Mini-Program page can also use a .json file to configure the window presentation for that page.

Page configuration can only set part of the window configuration items found in app.json. Configuration items in the page will override identical items in app.json's window. Configurable options are as follows:

| Property | Type | Default Value | Description |
| --- | --- | --- | --- |
| navigationBarBackgroundColor | HexColor | #000000 | Navigation bar background color, e.g., #000000 |
| navigationBarTextStyle | String | white | Navigation bar title color, only supports black, white |
| navigationBarTitleText | String |  | Navigation bar title text content |
| navigationBarTitleFixed | Boolean | false | Whether the title is fixed. If set to true, the title does not change with the H5 title when loading H5; if set to false, it changes with the H5 title |
| backgroundColor | HexColor | #ffffff | Window background color |
| backgroundColorContent | HexColor |  | Page container background color, supported since SDK 2.46.13 |
| backgroundTextStyle | String | dark | Pull-down loading style, only supports dark, light |

Example my.json:

```json
{
  "navigationBarBackgroundColor": "#ffffff",
  "navigationBarTextStyle": "black",
  "navigationBarTitleText": "Personal Center",
  "backgroundColor": "#eeeeee",
  "backgroundTextStyle": "light"
}

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/app-service.html\#_4-1-modularization) 4.1 Modularization

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/app-service.html\#_4-1-1-file-scope) 4.1.1 File Scope

Variables and methods declared in a .js file are only valid within that file; different files can declare variables and methods with the same name.

The global application instance can be obtained via the global function getApp(). If global data is needed, it can be set in App(), for example:

```javascript
// app.js
App({
  globalData: "cortana"
})

        Code copied

```

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/app-service.html\#_4-1-2-modularization) 4.1.2 Modularization

Common code can be extracted into a separate js file as a module. A module can only expose interfaces through module.exports or exports.

Mini-Programs currently do not support "directly importing node\_modules". They need to be introduced via [Building npm](https://super-apps.ai/mop/document/develop/developer/fide-guide.html#_2-3-npm-%E6%94%AF%E6%8C%81). If needed, code can also be copied directly into the Mini-Program directory for use.

```javascript
// util.js
function getDate() {
  return new Date().toLocaleTimeString()
}

module.exports.getDate =getDate
exports.getDate = getDate

        Code copied

```

In files that need to use these modules, use require(path) to import the common code.

```javascript
var util = require('util.js');
Page({
  getDate: function() {
    let d = util.getDate();
    console.log(d);
  }
})

        Code copied

```

Hint

Note that when using require to import a module, a relative path must be used.

## [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/app-service.html\#_5-api) 5 API

The Mini-Program development framework provides rich native WeChat-style APIs to conveniently invoke capabilities provided by the platform, such as obtaining user information, local storage, payment functions, etc. For detailed introductions, please refer to the [API Documentation](https://super-apps.ai/mop/document/develop/api/overview.html).

Typically, Mini-Program APIs can be categorized into the following types:

### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/app-service.html\#_5-1-event-listening-apis) 5.1 Event Listening APIs

By convention, APIs starting with `on` are used to listen for the triggering of certain events, e.g., ft.onSocketOpen, ft.onCompassChange, etc.

These APIs accept a callback function as a parameter. When the event is triggered, this callback function is called, and relevant data is passed in as parameters.

```javascript
ft.onCompassChange(function (res) {
  console.log(res.direction)
})

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/app-service.html\#_5-2-synchronous-apis) 5.2 Synchronous APIs

By convention, APIs ending with `Sync` are synchronous APIs, e.g., ft.setStorageSync, ft.getSystemInfoSync, etc. Additionally, there are some other synchronous APIs, such as ft.createWorker, ft.getBackgroundAudioManager, etc. For details, refer to the descriptions in the API documentation.

The execution result of a synchronous API can be directly obtained via the function's return value. If an error occurs during execution, an exception is thrown.

```javascript
try {
  ft.setStorageSync('key', 'value')
} catch (e) {
  console.error(e)
}


        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/app-service.html\#_5-3-asynchronous-apis) 5.3 Asynchronous APIs

Most APIs are asynchronous APIs, e.g., ft.request, ft.getNetworkType, etc. These API interfaces typically accept an Object type parameter. This parameter supports optionally specifying the following fields to receive the interface call results:

**Object Parameter Description**

| Parameter Name | Type | Required | Description |
| --- | --- | --- | --- |
| success | Function | No | Callback function for successful API call |
| fail | Function | No | Callback function for failed API call |
| complete | Function | No | Callback function for API call completion (called regardless of success or failure) |
| Others | Any | - | Other parameters defined by the API |

The execution result of an asynchronous API needs to be obtained through the corresponding callback function passed in the Object parameter. Some asynchronous APIs also have return values, which can be used to implement richer functionalities, such as ft.request, ft.connectSocket, etc.

```javascript
ft.setStorage({
  key: "key",
  data: "value",
  success() {
    console.log('setStorage succeed');
  }
})

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/app-service.html\#_5-4-asynchronous-apis-returning-promise) 5.4 Asynchronous APIs Returning Promise

Starting from Base Library version 3.0.25, asynchronous APIs support both callback & promise calling methods. When the interface's Object parameter does not contain success/fail/complete, it will return a promise by default. Otherwise, it will still execute in callback mode and return no value.

Hints

1. Some interfaces like downloadFile, request, uploadFile, connectSocket inherently have return values. Their promisify needs to be encapsulated by the developer.
2. When there are no callback parameters, the asynchronous interface returns a promise. If the function call fails and enters the fail logic, it will report an error `Uncaught (in promise)`, which developers can catch using `.catch`.
3. ft.onUnhandledRejection can listen for unhandled Promise rejection events.
4. On some Android devices due to system reasons, when using the promisify method to call an API, if `then`, `catch`, or `finally` is not subsequently called, the onUnhandledRejection listener will not be triggered when that API reports an error.

```javascript
// callback form call
ft.chooseImage({
  success(res) {
    console.log('res:', res)
  }
})

// promise form call
ft.chooseImage().then(res => console.log('res: ', res))

        Code copied

```

[Previous：Introduction](https://super-apps.ai/mop/document/en/develop/guide/framework/intro.html)[Next：View Layer](https://super-apps.ai/mop/document/en/develop/guide/framework/view.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)