<!--
Source URL: https://super-apps.ai/mop/document/en/develop/api/other.html
Extracted: 2026-01-12T23:13:32.034Z (January 12, 2026)
Title: Other | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

# [\#](https://super-apps.ai/mop/document/en/develop/api/other.html\#other) Other

## [\#](https://super-apps.ai/mop/document/en/develop/api/other.html\#oncustomevent) onCustomEvent

**onCustomEvent(callback)**

Listens for the "onCustomEvent" event sent by the native side.

[iOS Invocation Method](https://super-apps.ai/mop/document/runtime-sdk/ios/api/api-custom.html#_3-3-%E5%8E%9F%E7%94%9F%E7%BB%99%E5%B0%8F%E7%A8%8B%E5%BA%8F%E5%8F%91%E9%80%81%E5%85%A8%E5%B1%80%E6%B6%88%E6%81%AF)

[Android Invocation Method](https://super-apps.ai/mop/document/runtime-sdk/android/api/api-other.html#_2-%E5%8E%9F%E7%94%9F%E5%8F%91%E9%80%81%E4%BA%8B%E4%BB%B6%E7%BB%99%E5%B0%8F%E7%A8%8B%E5%BA%8F)

[Harmony Invocation Method](https://super-apps.ai/mop/document/runtime-sdk/harmony/api/harmony-api-custom.html)

**Sample Code**

```javascript
const callback = (res) => {
    console.log(res) // Get the parameters passed from the native side
}
ft.onCustomEvent(callback)
```

## [\#](https://super-apps.ai/mop/document/en/develop/api/other.html\#offcustomevent) offCustomEvent

**offCustomEvent(callback)**

Cancels listening for the onCustomEvent event. When the callback is empty, clears all callbacks.

**Sample Code**

```javascript
const callback = (res) => {}
ft.onCustomEvent(callback)

// Clear the specified callback
ft.offCustomEvent(callback)
// Clear all callbacks
ft.offCustomEvent()
```

## [\#](https://super-apps.ai/mop/document/en/develop/api/other.html\#addcustomeventlistener) addCustomEventListener

**addCustomEventListener(eventName, callback)**

This event is a wrapper based on onCustomEvent, which can effectively reduce the boilerplate code inside onCustomEvent.

**Note**
When using this event, for it to trigger normally, the data body when the SDK calls the event must have a name field indicating which eventName is being triggered.

For example:

```javascript
{
  name: 'someMethod', // Required field
  data: {
    a: 'data-1',
    b: 'data-2',
    c: 1001
  },
  errMsg: 'some error msg'
}
```

The entire data will be passed through to the callback.

**Sample Code**

```javascript
const callback = (res) => {
    console.log(res) // Get the parameters passed from the native side
}
ft.addCustomEventListener('someMethod', callback)
```

## [\#](https://super-apps.ai/mop/document/en/develop/api/other.html\#removecustomeventlistener) removeCustomEventListener

**removeCustomEventListener(eventName, callback)**

Removes the listener added by addCustomEventListener.

**Sample Code**

```javascript
const callback = (res) => {
    console.log(res) // Get the parameters passed from the native side
}
ft.removeCustomEventListener('someMethod', callback)
```

## [\#](https://super-apps.ai/mop/document/en/develop/api/other.html\#sendwebviewevent) sendWebviewEvent

**ft.sendWebviewEvent(Object object, Object pageInstance)**

The Mini-Program sends an event to H5. pageInstance represents the `this` instance of the current webview page.

**Sample Code**

```javascript
 ft.sendWebviewEvent({ data: '456' }) // Send data to the webview of the current page
 ft.sendWebviewEvent({ data: '456' }, getCurrentPages()[0]) // Send data to the webview of the corresponding page
```

## [\#](https://super-apps.ai/mop/document/en/develop/api/other.html\#reportevent) reportEvent

Event reporting.

**ft.reportEvent(string eventId, object data)**

**Parameters**

| Property | Type | Description |
| --- | --- | --- |
| eventId | string | The unique event name set |
| data | object | An object that can be processed by JSON.stringify, which will be reported to the system together |

## [\#](https://super-apps.ai/mop/document/en/develop/api/other.html\#loadextapi) loadExtApi

**loadExtApi(Object object)**

Loads custom API configurations, equivalent to the configuration in FinClipConf.js.

For SDK-side configuration documentation, refer to:

[iOS Custom API Configuration Documentation(opens new window)](https://super-apps.ai/mop/document/runtime-sdk/ios/api/api-custom.html#_1-%E6%B3%A8%E5%86%8C%E8%87%AA%E5%AE%9A%E4%B9%89api)

[Android Custom API Configuration Documentation(opens new window)](https://super-apps.ai/mop/document/runtime-sdk/android/api/api-custom.html#_1-%E8%87%AA%E5%AE%9A%E4%B9%89%E5%B0%8F%E7%A8%8B%E5%BA%8Fapi)

There are two methods to configure custom APIs:

1. By creating a `FinClipConf.js` file in the root directory.

2. By using the ft.loadExtApi API.


The parameters used by both methods are the same.

**Parameters**

The parameters for a single API item are as follows:

| Property | Type | Required | Description |
| --- | --- | --- | --- |
| name | string | Yes | Custom API name |
| sync | boolean | No | Whether it is a synchronous API |
| overwrite | boolean | No | Whether to overwrite an API with the same name |
| pluginId | array or string | No | This parameter is only effective when loadExtApi is called within a Mini-Program, indicating that plugins whose IDs are in the list are allowed to use this custom API |
| scope | string | No | Supported from Base Library 3.5.6 onwards. Only effective when loadExtApi is called within a plugin. Optional values are default, self, all. The default value is default. |
| params | object | No | Parameter format. Only required properties can be listed. If there are no restrictions, an empty object can be used directly. |

**Valid values for object.scope**

| Value | Description |
| --- | --- |
| default | Indicates the API is registered to the Mini-Program's ft and the plugin's own ft. |
| self | Indicates the API is only registered to its own ft and can only be called internally by itself. |
| all | Indicates the API is registered to the Mini-Program's ft and all plugin ft instances. Other plugins can call the API registered by this plugin. |

**Sample Code**

```js
// FinClipConf.js
module.exports = {
  extApi:[\
    {\
      name: 'finclipLogin',\
      sync: false,\
      params: {\
        url: ''\
      }\
    }\
  ]
}
```

**Sample Code**

```javascript
// loadExtApi parameters are the same as FinClipConf.js
ft.loadExtApi([\
    {\
      name: 'finclipLogin',\
      sync: false,\
      params: {\
        url: ''\
      }\
    },\
    {\
      name: 'finclipTestSync',\
      sync: true,\
      params: {\
          name:'',\
          title:''\
      }\
    }\
  ])

// Asynchronous call example
ft.finclipLogin({
  url: 'some url'
  success: (res) => { console.log(res) },
  fail: (res) => { console.log(res) },
})

// Synchronous call example
const res = ft.finclipTestSync({ name: '', title: ''})
console.log(res)
```