<!--
Source URL: https://super-apps.ai/mop/document/en/develop/frameInterface/api/page.html
Extracted: 2026-01-12T23:17:35.477Z (January 12, 2026)
Title: Page | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Mini Program Configuration](https://super-apps.ai/mop/document/en/develop/frameInterface/api/page.html) [![](https://super-apps.ai/mop/document/images/arrow_open.svg)\\
Framework API](https://super-apps.ai/mop/document/en/develop/frameInterface/api/app.html)

- [APP](https://super-apps.ai/mop/document/en/develop/frameInterface/api/app.html)
- [Page](https://super-apps.ai/mop/document/en/develop/frameInterface/api/page.html)
- [Component](https://super-apps.ai/mop/document/en/develop/frameInterface/api/component.html)
- [Modernization](https://super-apps.ai/mop/document/en/develop/frameInterface/api/modern.html)

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
FXML Syntax](https://super-apps.ai/mop/document/en/develop/frameInterface/api/page.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
FTS Syntax](https://super-apps.ai/mop/document/en/develop/frameInterface/api/page.html)

# [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/api/page.html\#page) Page

Registers a page in a Mini-Program. Accepts an Object type parameter, which specifies the page's initial data, lifecycle callbacks, event handlers, etc.

Extension functionality: You can create an xxx.ext.json file. This file will be merged with the page's json file, with the configuration in xxx.ext.json taking priority (same applies to components).

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/api/page.html\#_1-parameters) 1\. Parameters

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| data | Object |  |  | The initial data of the page |
| onLoad | function |  |  | Lifecycle callback—listens for page load |
| onShow | function |  |  | Lifecycle callback—listens for page display |
| onReady | function |  |  | Lifecycle callback—listens for page's initial rendering completion |
| onHide | function |  |  | Lifecycle callback—listens for page hide |
| onUnload | function |  |  | Lifecycle callback—listens for page unload |
| onPullDownRefresh | function |  |  | Listens for user pull-down action |
| onReachBottom | function |  |  | Event handler function for when the page is pulled up and reaches the bottom |
| onTabItemTap | function |  |  | Triggered when the tab is clicked, if the current page is a tab page |
| onShareAppMessage | function |  |  | User clicks the share button in the upper right corner |
| onPageScroll | function |  |  | Event handler function for page scrolling |
| Others | any |  |  | Developers can add any functions or data to the Object parameter, accessible via `this` in the page's functions |

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/api/page.html\#onshareappmessage) onShareAppMessage

Listens for the user clicking the "Share" button in the upper right corner menu and customizes the share content.

**Parameters**

| Parameter | Type | Description | Minimum Version |
| --- | --- | --- | --- |
| title | String |  | 1.0.0 |
| desc | String |  | 1.0.0 |
| imageUrl | String |  | 1.0.0 |
| path | String |  | 1.0.0 |
| from | String | Currently only the value 'menu' | 1.0.0 |
| webViewUrl | String | When the page contains a WebView component, returns the current WebView's URL | 1.0.0 |

This event handler function needs to return an Object to customize the share content. The returned data is ultimately passed through to the Host-App.

```javascript
Page({
  onShareAppMessage: function (res) {
    console.log(res);
    // {
    //     title: 'Original Title',
    //     desc: 'Original Description'
    //     imageUrl: ***,
    //     path: 'Original Path',
    //     from: 'menu',
    //     webViewUrl: ***
    // }

    return {
        title: 'Developer Custom Share Title', // For example, if title is returned, this value is passed to the app. If title is not returned, the title value from the parameters is passed to the app.
        /*
            If the Host-App has features like sharing to WeChat Mini-Programs, you can return the WeChat Mini-Program appid, etc., in the appInfo field.
        */
        appInfo: {
            appId: 'gh_*******' // WeChat Mini-Program appid
        }
    }
  }
})

        Code copied

```

After the developer returns the above data via onShareAppMessage, the data format received by the Host-App is as follows:

```json
{
    "appTitle": "Mini-Program Title",
    "appAvatar": "Mini-Program Icon",
    "appId": "Mini-Program ID within the Host-App",
    "userId": "User Information",
    "params": { // params is the data returned by the Mini-Program developer, passed through here
        "title": "Developer Custom Share Title",
        "desc": "Original Description",
        "imageUrl": "",
        "path": "Original Path",
        "appinfo": {
            "appId": "gh_*******"
        }
    }
}

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/api/page.html\#_2-data) 2\. data

data is the initial data used for the first rendering of the page.

When the page loads, data will be passed from the Logic Layer to the Rendering Layer in the form of a JSON string. Therefore, the data in data must be types that can be converted to JSON: strings, numbers, booleans, objects, arrays.

The Rendering Layer can bind the data via WXML.

**Example Code**

```html
<view>{{text}}</view>
<view>{{array[0].msg}}</view>

        Code copied

```

```javascript
Page({
  data: {
    text: 'init data',
    array: [{msg: '1'}, {msg: '2'}]
  }
})

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/api/page.html\#_3-lifecycle-callback-functions) 3\. Lifecycle Callback Functions

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/api/page.html\#onload-object-query) onLoad(Object query)

Triggered when the page loads. Called only once per page. Parameters for opening the current page can be obtained from the onLoad parameters.

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/api/page.html\#onshow) onShow()

Triggered when the page is displayed/enters the foreground.

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/api/page.html\#onready) onReady()

Triggered when the page's initial rendering is complete. Called only once per page, indicating the page is ready and can interact with the View Layer.

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/api/page.html\#onhide) onHide()

Triggered when the page is hidden/enters the background. For example, when navigating to another page via navigateTo, switching to another page via the bottom tab, or when the Mini-Program enters the background.

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/api/page.html\#onunload) onUnload()

Triggered when the page is unloaded. For example, when redirecting to or navigating back to another page via redirectTo or navigateBack.

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/api/page.html\#_4-page-event-handler-functions) 4\. Page Event Handler Functions

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/api/page.html\#onpulldownrefresh) onPullDownRefresh()

Listens for the user's pull-down refresh event.

- Requires enabling enablePullDownRefresh in the window option of app.json or in the page configuration.
- Pull-down refresh can be triggered via ft.startPullDownRefresh. After calling, it triggers the pull-down refresh animation, with the same effect as a manual user pull-down refresh.
- After processing the data refresh, ft.stopPullDownRefresh can stop the current page's pull-down refresh.

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/api/page.html\#onreachbottom) onReachBottom()

Listens for the user's pull-up reach bottom event.

- The trigger distance onReachBottomDistance can be set in the window option of app.json or in the page configuration.
- During sliding within the trigger distance, this event will only be triggered once.

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/api/page.html\#onpagescroll-object-object) onPageScroll(Object object)

Listens for the user's page scroll event.

**Parameter** **Object object**

| Property | Type | Description |
| --- | --- | --- |
| scrollTop | Number | The distance the page has scrolled vertically (unit: px) |

Note

- Define this method in the page only when necessary; do not define empty methods. This reduces the impact of unnecessary event dispatching on Logic Layer-Rendering Layer communication.
- Avoid performing operations that cause Logic Layer-Rendering Layer communication, such as setData, too frequently within onPageScroll. Especially transmitting large amounts of data each time can affect communication latency.

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/api/page.html\#_5-component-event-handler-functions) 5\. Component Event Handler Functions

Event handler functions for components can also be defined in the Page. Add event bindings to components in the Rendering Layer; when an event is triggered, the event handler function defined in the Page will be executed.

**Example Code**

```html
<view bindtap="viewTap"> click me </view>

        Code copied

```

```javascript
Page({
  viewTap: function() {
    console.log('view tap')
  }
})

        Code copied

```

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/api/page.html\#page-route) Page.route

The path to the current page, of type String.

```javascript
Page({
  onShow: function() {
    console.log(this.route)
  }
})

        Code copied

```

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/api/page.html\#page-prototype-setdata-object-data-function-callback) Page.prototype.setData(Object data, Function callback)

The setData function is used to send data from the Logic Layer to the View Layer (asynchronously), while simultaneously changing the corresponding value in this.data (synchronously).

**Parameter Description**

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| data | Object | Yes | The data to be changed this time |
| callback | Function | No | Callback function after the interface update rendering caused by setData is complete |

The Object is represented in the form key: value, changing the value corresponding to the key in this.data to value.

The key can be given in the form of a data path, supporting changing an item in an array or a property of an object, such as array\[2\].message, a.b.c.d, and it does not need to be pre-defined in this.data.

Note

1. Directly modifying this.data without calling this.setData cannot change the page's state and will cause data inconsistency.
2. Only data that can be JSONized is supported.
3. The data set in a single operation cannot exceed 1024kB; please avoid setting too much data at once.
4. Do not set the value of any item in data to undefined, otherwise, this item will not be set and may leave some potential issues.

**Example Code**

```html
<!--index.fxml-->
<view>{{text}}</view>
<button bindtap="changeText"> Change normal data </button>
<view>{{num}}</view>
<button bindtap="changeNum"> Change normal num </button>
<view>{{array[0].text}}</view>
<button bindtap="changeItemInArray"> Change Array data </button>
<view>{{object.text}}</view>
<button bindtap="changeItemInObject"> Change Object data </button>
<view>{{newField.text}}</view>
<button bindtap="addNewField"> Add new data </button>


        Code copied

```

```javascript
// index.js
Page({
  data: {
    text: 'init data',
    num: 0,
    array: [{text: 'init data'}],
    object: {
      text: 'init data'
    }
  },
  changeText: function() {
    // this.data.text = 'changed data' // Do not modify this.data directly
    // Use setData instead
    this.setData({
      text: 'changed data'
    })
  },
  changeNum: function() {
    // Alternatively, you can modify this.data and then immediately use setData to set the modified field
    this.data.num = 1
    this.setData({
      num: this.data.num
    })
  },
  changeItemInArray: function() {
    // For object or array fields, you can directly modify a sub-field under them; this is usually better than modifying the entire object or array
    this.setData({
      'array[0].text':'changed data'
    })
  },
  changeItemInObject: function(){
    this.SetData({
      'object.text': 'changed data'
    });
  },
  addNewField: function() {
    this.setData({
      'newField.text': 'new data'
    })
  }
})

        Code copied

```

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/api/page.html\#pageobject-getcurrentpages) PageObject\[\] getCurrentPages()

Gets the current page stack. The first element in the array is the homepage, and the last element is the current page.

Note

1. Do not attempt to modify the page stack, as it will cause routing and page state errors.
2. Do not call getCurrentPages() during App.onLaunch, as the page has not been generated at that time.

[Previous：APP](https://super-apps.ai/mop/document/en/develop/frameInterface/api/app.html)[Next：Component](https://super-apps.ai/mop/document/en/develop/frameInterface/api/component.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)