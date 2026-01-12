<!--
Source URL: https://super-apps.ai/mop/document/en/develop/api/route.html
Extracted: 2026-01-12T23:09:26.378Z (January 12, 2026)
Title: Routing | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

# [\#](https://super-apps.ai/mop/document/en/develop/api/route.html\#routing) Routing

## [\#](https://super-apps.ai/mop/document/en/develop/api/route.html\#switchtab) switchTab

**switchTab(Object object)**

Navigates to a tabBar page and closes all other non-tabBar pages.

**Parameters**

**Object object**

| Property | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| url | string |  | Yes | The path of the tabBar page to navigate to (must be a page defined in the tabBar field of app.json). Parameters cannot be appended to the path. |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function for the end of the API call (executed regardless of success or failure) |

**Sample Code**

```js
ft.switchTab({
  url: '/pages/other/other'
})
```

## [\#](https://super-apps.ai/mop/document/en/develop/api/route.html\#relaunch) reLaunch

**reLaunch(Object object)**

Closes all pages and opens a specified page within the application.

**Parameters**

**Object object**

| Property | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| url | string |  | Yes | The path of the application page to navigate to. Parameters can be appended to the path. Parameters are separated from the path using ?, parameter keys and values are connected with =, and different parameters are separated with &; e.g., 'path?key=value&key2=value2' |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function for the end of the API call (executed regardless of success or failure) |

**Sample Code**

```javascript
ft.reLaunch({
  url: '/pages/other/other'
})
```

## [\#](https://super-apps.ai/mop/document/en/develop/api/route.html\#redirectto) redirectTo

**redirectTo(Object object)**

Closes the current page and navigates to a specified page within the application.

**Parameters**

**Object object**

| Property | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| url | string |  | Yes | The path of a non-tabBar page within the application to navigate to. Parameters can be appended to the path. Parameters are separated from the path using ?, parameter keys and values are connected with =, and different parameters are separated with &; e.g., 'path?key=value&key2=value2' |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function for the end of the API call (executed regardless of success or failure) |

**Sample Code**

```javascript
ft.redirectTo({
  url: '/pages/other/other'
})
```

## [\#](https://super-apps.ai/mop/document/en/develop/api/route.html\#navigateto) navigateTo

**navigateTo(Object object)**

Keeps the current page and navigates to a specified page within the application. Use navigateBack to return to the original page.

**Parameters**

**Object object**

| Property | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| url | string |  | Yes | The path of a non-tabBar page within the application to navigate to (code package path). Parameters can be appended to the path. Parameters are separated from the path using ? , parameter keys and values are connected with = , and different parameters are separated with & ; e.g., 'path?key=value&key2=value2' |
| events | Object |  | No | Page communication interface, used to listen for data sent from the opened page to the current page. Supported starting from Base Library 2.7.3. |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function for the end of the API call (executed regardless of success or failure) |

**object.success Callback Function**

**Parameters**

| Property | Type | Description |
| --- | --- | --- |
| eventChannel | EventChannel | Communicates with the opened page |

**Sample Code**

```javascript
ft.navigateTo({
  url: 'test?id=1',
  events: {
    // Add a listener for a specified event to receive data transmitted from the opened page to the current page
    acceptDataFromOpenedPage: function(data) {
      console.log(data)
    },
    someEvent: function(data) {
      console.log(data)
    }
    ...
  },
  success: function(res) {
    // Transmit data to the opened page via eventChannel
    res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
  }
})
```

```javascript
//test.js
Page({
  onLoad: function(option){
    console.log(option.query)
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.emit('acceptDataFromOpenedPage', {data: 'test'});
    eventChannel.emit('someEvent', {data: 'test'});
    // Listen for the acceptDataFromOpenerPage event to receive data transmitted from the previous page to the current page via eventChannel
    eventChannel.on('acceptDataFromOpenerPage', function(data) {
      console.log(data)
    })
  }
})
```

## [\#](https://super-apps.ai/mop/document/en/develop/api/route.html\#navigateback) navigateBack

**navigateBack(Object object)**

Closes the current page and returns to the previous page or multiple levels of pages. Use getCurrentPages() to obtain the current page stack and determine how many levels to return.

**Parameters**

**Object object**

| Property | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| delta | number |  | No | The number of pages to return. If delta exceeds the number of existing pages, returns to the homepage. |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function for the end of the API call (executed regardless of success or failure) |

**Sample Code**

```javascript
// Note: When navigating using navigateTo, the calling page is added to the stack, whereas redirectTo does not. See sample code below.

// This is Page A
ft.navigateTo({
  url: 'B?id=1'
})

// This is Page B
ft.navigateTo({
  url: 'C?id=1'
})

// Navigating back from Page C will return to Page A
ft.navigateBack({
  delta: 2
})
```

## [\#](https://super-apps.ai/mop/document/en/develop/api/route.html\#eventchannel) EventChannel

Event communication channel between pages.

### [\#](https://super-apps.ai/mop/document/en/develop/api/route.html\#eventchannel-emit) EventChannel.emit

**EventChannel.emit(string eventName, any args)**

Triggers an event.

**Parameters**

**string eventName**

Event name.

**any args**

Event arguments.

### [\#](https://super-apps.ai/mop/document/en/develop/api/route.html\#eventchannel-off) EventChannel.off

**EventChannel.off(string eventName, function fn)**

Cancels listening for an event. If a second parameter is provided, only cancels the specified listener function; otherwise, cancels all listener functions.

**Parameters**

**string eventName**

Event name.

**function fn**

Event listener function.

### [\#](https://super-apps.ai/mop/document/en/develop/api/route.html\#eventchannel-on) EventChannel.on

**EventChannel.on(string eventName, function callback)**

Continuously listens for an event.

**Parameters**

**string eventName**

Event name.

**function callback**

Callback function for event listening.

### [\#](https://super-apps.ai/mop/document/en/develop/api/route.html\#eventchannel-once) EventChannel.once

**EventChannel.once(string eventName, function fn)**

Listens for an event once. The listener becomes invalid after being triggered.

**Parameters**

**string eventName**

Event name.

**function callback**

Callback function for event listening.