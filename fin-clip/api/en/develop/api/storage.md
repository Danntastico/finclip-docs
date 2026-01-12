<!--
Source URL: https://super-apps.ai/mop/document/en/develop/api/storage.html
Extracted: 2026-01-12T23:11:56.696Z (January 12, 2026)
Title: Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
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

# [\#](https://super-apps.ai/mop/document/en/develop/api/storage.html\#data-cache-storage) Data Cache / Storage

## [\#](https://super-apps.ai/mop/document/en/develop/api/storage.html\#setstoragesync) setStorageSync

**setStorageSync(string key, any data)**

Synchronous version of ft.setStorage. Stores data in the local cache specified by the key. It will overwrite the original content corresponding to that key. The data remains available unless manually deleted by the user or cleared by the system due to storage space limitations. The maximum data length allowed for a single key is 1MB, and the total storage limit for all data is 10MB.

**Parameters**

**string key**

The specified key in the local cache.

**any data**

The content to be stored. Only supports primitive types, Date, and objects that can be serialized via JSON.stringify.

**Example Code**

```javascript
ft.setStorage({
  key: 'key',
  data: 'value'
})

try {
  ft.setStorageSync('key', 'value')
} catch (e) { }

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/api/storage.html\#setstorage) setStorage

**setStorage(Object object)**

Stores data in the local cache specified by the key. It will overwrite the original content corresponding to that key. The data remains available unless manually deleted by the user or cleared by the system due to storage space limitations. The maximum data length allowed for a single key is 1MB, and the total storage limit for all data is 10MB.

**Parameters**

**Object object**

| Property | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| key | string |  | Yes | The specified key in the local cache. |
| data | any |  | Yes | The content to be stored. Only supports primitive types, Date, and objects that can be serialized via JSON.stringify. |
| success | function |  | No | Callback function for successful API call. |
| fail | function |  | No | Callback function for failed API call. |
| complete | function |  | No | Callback function for API call completion (executed regardless of success or failure). |

Example Code

```javascript
ft.setStorage({
  key: 'key',
  data: 'value'
})

try {
  ft.setStorageSync('key', 'value')
} catch (e) { }

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/api/storage.html\#removestoragesync) removeStorageSync

**removeStorageSync(string key)**

Synchronous version of ft.removeStorage.

**Parameters**

**string key**

The specified key in the local cache.

**Example Code**

```javascript
ft.removeStorage({
  key: 'key',
  success(res) {
    console.log(res)
  }
})

try {
  ft.removeStorageSync('key')
} catch (e) {
  // Do something when catch error
}

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/api/storage.html\#removestorage) removeStorage

**removeStorage(Object object)**

Asynchronously removes the content corresponding to the specified key from the local cache.

**Parameters**

**Object object**

| Property | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| key | string |  | Yes | The specified key in the local cache. |
| success | function |  | No | Callback function for successful API call. |
| fail | function |  | No | Callback function for failed API call. |
| complete | function |  | No | Callback function for API call completion (executed regardless of success or failure). |

**Example Code**

```javascript
ft.removeStorage({
  key: 'key',
  success(res) {
    console.log(res)
  }
})

try {
  ft.removeStorageSync('key')
} catch (e) {
  // Do something when catch error
}

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/api/storage.html\#getstoragesync) getStorageSync

**getStorageSync(string key)**

Synchronous version of ft.getStorage.

**Parameters**

**string key**

The specified key in the local cache.

**Return Value**

**any**

The locally stored content corresponding to the key.

**Example Code**

```javascript
ft.getStorage({
  key: 'key',
success(res) {
    console.log(res.data)
  }
})

try {
  const value = ft.getStorageSync('key')
  if (value) {
    // Do something with return value
  }
} catch (e) {
  // Do something when catch error
}

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/api/storage.html\#getstorageinfosync) getStorageInfoSync

**getStorageInfoSync(Object object)**

Synchronous version of ft.getStorageInfo.

**Return Value**

**Object object**

| Property | Type | Description |
| --- | --- | --- |
| keys | Array.<string> | All keys in the current storage. |
| currentSize | number | Current occupied space size, in KB. |
| limitSize | number | Limited space size, in KB. |

**Example Code**

```javascript
ft.getStorageInfoSync({
  success(res) {
    console.log(res.keys)
    console.log(res.currentSize)
    console.log(res.limitSize)
  }
})

try {
  const res = ft.getStorageInfoSync()
  console.log(res.keys)
  console.log(res.currentSize)
  console.log(res.limitSize)
} catch (e) {
  // Do something when catch error
}

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/api/storage.html\#getstorageinfo) getStorageInfo

**getStorageInfo(Object object)**

Gets relevant information about the current storage.

**Parameters**

**Object object**

| Property | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| success | function |  | No | Callback function for successful API call. |
| fail | function |  | No | Callback function for failed API call. |
| complete | function |  | No | Callback function for API call completion (executed regardless of success or failure). |

**object.success Callback Function**

**Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| keys | Array.<string> | All keys in the current storage. |
| currentSize | number | Current occupied space size, in KB. |
| limitSize | number | Limited space size, in KB. |

**Example Code**

```javascript
ft.getStorageInfo({
  success(res) {
    console.log(res.keys)
    console.log(res.currentSize)
    console.log(res.limitSize)
  }
})

try {
  const res = ft.getStorageInfoSync()
  console.log(res.keys)
  console.log(res.currentSize)
  console.log(res.limitSize)
} catch (e) {
  // Do something when catch error
}

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/api/storage.html\#getstorage) getStorage

**getStorage(Object object)**

Gets the content corresponding to the specified key from the local cache.

**Parameters**

**Object object**

| Property | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| key | string |  | Yes | The specified key in the local cache. |
| success | function |  | No | Callback function for successful API call. |
| fail | function |  | No | Callback function for failed API call. |
| complete | function |  | No | Callback function for API call completion (executed regardless of success or failure). |

**object.success Callback Function**

**Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| data | any | The content corresponding to the key. |

**Example Code**

```javascript
ft.getStorage({
  key: 'key',
  success(res) {
    console.log(res.data)
  }
})

try {
  const value = ft.getStorageSync('key')
  if (value) {
    // Do something with return value
  }
} catch (e) {
  // Do something when catch error
}

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/api/storage.html\#clearstoragesync) clearStorageSync

**clearStorageSync(Object object)**

Synchronous version of ft.clearStorage.

**Example Code**

```javascript
ft.clearStorage()

try {
  ft.clearStorageSync()
} catch (e) {
  // Do something when catch error
}

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/api/storage.html\#clearstorage) clearStorage

**clearStorage(Object object)**

Clears the local data cache.

**Parameters**

**Object object**

| Property | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| success | function |  | No | Callback function for successful API call. |
| fail | function |  | No | Callback function for failed API call. |
| complete | function |  | No | Callback function for API call completion (executed regardless of success or failure). |

**Example Code**

```javascript
ft.clearStorage()

try {
  ft.clearStorageSync()
} catch (e) {
  // Do something when catch error
}

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/api/storage.html\#batchsetstoragesync) batchSetStorageSync

> Supported since Base Library 3.0.49

**batchSetStorageSync(Array kvList)**

Synchronous version of ft.batchSetStorage. Stores data batch-wise in the local cache specified by the keys. It will overwrite the original content corresponding to those keys. The data remains available unless manually deleted by the user or cleared by the system due to storage space limitations. The maximum data length allowed for a single key is 1MB, and the total storage limit for all data is 10MB.

**Parameters**

**Object object**

| Property | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| kvList | Array |  | Yes | Key-value array: \[{ key, value }\], the specified keyList in the local cache. |

**Example Code**

```javascript
try {
  ft.batchSetStorageSync([{key: 'key', value: 'value'}])
} catch (e) { }

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/api/storage.html\#batchsetstorage) batchSetStorage

> Supported since Base Library 3.0.49

**batchSetStorage(Object object)**

Stores data batch-wise in the local cache specified by the keys. It will overwrite the original content corresponding to those keys. The data remains available unless manually deleted by the user or cleared by the system due to storage space limitations. The maximum data length allowed for a single key is 1MB, and the total storage limit for all data is 10MB.

**Parameters**

**Object object**

| Property | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| kvList | Array |  | Yes | Key-value array: \[{ key, value }\] |
| success | function |  | No | Callback function for successful API call. |
| fail | function |  | No | Callback function for failed API call. |
| complete | function |  | No | Callback function for API call completion (executed regardless of success or failure). |

**Example Code**

```javascript
wx.batchSetStorage({
  kvList: [{\
    key: 'key',\
    value: 'value',\
  }],
})

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/api/storage.html\#batchgetstoragesync) batchGetStorageSync

> Supported since Base Library 3.0.49

**batchGetStorageSync(Array keyList)**

Synchronous version of ft.batchGetStorage.

**Parameters**

**Object object**

| Property | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| keyList | Array |  | Yes | Key-value array: \[{ key, value }\], the specified keyList in the local cache. |

**Example Code**

```javascript
try {
  var valueList = ft.batchGetStorageSync(['key'])
} catch (e) {
}

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/api/storage.html\#batchgetstorage) batchGetStorage

> Supported since Base Library 3.0.49

**batchGetStorage(Object object)**

Asynchronously retrieves the content corresponding to the specified keys batch-wise from the local cache.

**Parameters**

**Object object**

| Property | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| kvList | Array |  | Yes | Key-value array: \[{ key, value }\], the specified keyList in the local cache. |
| success | function |  | No | Callback function for successful API call. |
| fail | function |  | No | Callback function for failed API call. |
| complete | function |  | No | Callback function for API call completion (executed regardless of success or failure). |

**Example Code**

```javascript
ft.batchGetStorage({
  keyList: ['key'],
  success (res) {
    console.log(res)
  }
})

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/api/storage.html\#data-preload-and-periodic-update) Data Preload and Periodic Update

Note

To enable this feature, configuration is required in the Management Console. The entry point is 【My Mini-Program】-【Details】-【Others】, enable Periodic Data Update or Data Preload.

For more information, refer to the [Data Preload and Periodic Update Usage Guide](https://super-apps.ai/mop/document/develop/guide/ability/background-data.html)

### [\#](https://super-apps.ai/mop/document/en/develop/api/storage.html\#setbackgroundfetchtoken) setBackgroundFetchToken

> Supported since Base Library 3.2.1, SDK 2.43.1

**setBackgroundFetchToken(Object object)**

Sets a custom login token. The token will be included during periodic data pulls and is used by the developer's third-party server to verify the legitimacy of the request.

**Parameters**

**Object object**

| Property | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| token | string |  | Yes | Request token. |
| success | function |  | No | Callback function for successful API call. |
| fail | function |  | No | Callback function for failed API call. |
| complete | function |  | No | Callback function for API call completion (executed regardless of success or failure). |

Example Code

```javascript
ft.setBackgroundFetchToken({
  token: 'some token'
})

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/api/storage.html\#getbackgroundfetchtoken) getBackgroundFetchToken

> Supported since Base Library 3.2.1, SDK 2.43.1

**getBackgroundFetchToken(Object object)**

Gets the previously set custom login state. Returns fail if none exists.

**Parameters**

**Object object**

| Property | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| success | function |  | No | Callback function for successful API call. |
| fail | function |  | No | Callback function for failed API call. |
| complete | function |  | No | Callback function for API call completion (executed regardless of success or failure). |

**Parameters**

**Object object**

| Property | Type | Description |
| --- | --- | --- |
| token | string | Custom request token. |
| errMsg | string | API call result message. |

Example Code

```javascript
ft.getBackgroundFetchToken({
  success(res) {
    console.log(res.token)
  }
})

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/api/storage.html\#getbackgroundfetchdata) getBackgroundFetchData

> Supported since Base Library 3.2.1, SDK 2.43cover.1

**getBackgroundFetchData(Object object)**

Fetches the periodically updated and preloaded data cached on the client.

When calling this interface, if the current request has not finished, the local old data (requested when the Mini-Program was previously opened) will be returned first.

If there is no local old data, neither platform will wait for the request to complete. Android will return fail; iOS will return success but with an empty fetchedData.

**Parameters**

**Object object**

| Property | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| fetchType | string |  | Yes | Cache data category, values are 'periodic' or 'pre'. |
| success | function |  | No | Callback function for successful API call. |
| fail | function |  | No | Callback function for failed API call. |
| complete | function |  | No | Callback function for API call completion (executed regardless of success or failure). |

**object.success Callback Function**

**Parameters**

**Object object**

| Property | Type | Description |
| --- | --- | --- |
| fetchedData | string | Cached data. |
| timeStamp | number | Timestamp when the client obtained the cached data, in ms. |
| path | string | Mini-Program page path. |
| query | string | Query parameters passed to the page. |
| scene | number | Scene value when entering the Mini-Program. |

Example Code

```javascript
ft.getBackgroundFetchToken({
  success(res) {
    console.log(res.token)
  }
})

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/api/storage.html\#onbackgroundfetchdata) onBackgroundFetchData

> Supported since Base Library 3.2.1, SDK 2.43.1

**onBackgroundFetchData(function callback)**

Listens for the event of receiving periodic update and data preload data. If the request has already completed when the listener is added, the event will not trigger. It is recommended to use this in conjunction with ft.getBackgroundFetchData.

**Parameters**

**function callback**

The listener function for the periodic update and data preload data event.

**Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| fetchType | string | Category of the cached data, values are 'periodic' or 'pre'. |
| fetchedData | string | Cached data. |
| timeStamp | number | Timestamp when the client obtained the cached data, in ms. |
| path | string | Mini-Program page path. |
| query | string | Query parameters passed to the page. |
| scene | number | Scene value when entering the Mini-Program. |

Example Code

```javascript
ft.onBackgroundFetchData(function (res) {
  console.log(res.fetchType)
  console.log(res.fetchedData)
  console.log(res.timeStamp)
  console.log(res.path)
  console.log(res.query)
  console.log(res.scene)
})

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/api/storage.html\#cache-manager) Cache Manager

### [\#](https://super-apps.ai/mop/document/en/develop/api/storage.html\#ft-createcachemanager) ft.createCacheManager

Creates a cache manager.

**Parameters**

**Object object**

| Property | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| origin | string |  | No | Global origin. |
| mode | string | weakNetwork | No | Cache mode.<br> Options: weakNetwork, always, none. |
| maxAge | number |  | No | Global cache validity period, in milliseconds. Default is 7 days, maximum cannot exceed 30 days. |
| extra | object |  | No | Extra cache handling. |

**extra**

| Property | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| apiList | Array |  | No | wx API interfaces that require caching. If not provided, all cache-supported interfaces will be cached. If the returned data is cached, developers can distinguish it via the fromCache marker.<br>Options: wx.login, wx.checkSession, wx.getSetting. |

**Return Value**

**CacheManager**

The cache manager instance.

Example Code

```javascript
const cacheManager = ft.createCacheManager()
cacheManager.addRule(/https:\/\/(?:.*)/ig) // Indicates that all HTTPS requests match.

cacheManager.on('request', evt => {
 // Receives wx.request request during weak network.
 return new Promise((resolve, reject) => {
   const matchRes = cacheManager.match(evt)
   if (matchRes && matchRes.data) {
     // Has cache, return it.
     resolve(matchRes.data)
   } else {
     // No cache, throw error.
     reject({ errMsg: 'no cache' })
   }
 })
})

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/api/storage.html\#cachemanager) CacheManager

Cache Manager. There is only one global instance. Once created, it indicates that the cache manager is integrated. It has the following capabilities:

- When the network is normal, user network requests that meet certain rules (currently only regular wx.request requests) will be cached.
- When the network is normal, certain wx API calls will be cached.
- When entering a weak network/offline state, events are provided to the user, who can decide whether to use cached returns.
- Provides events for entering and exiting weak network/offline states.

### [\#](https://super-apps.ai/mop/document/en/develop/api/storage.html\#cachemanager-addrule) CacheManager.addRule

Adds a rule.

**Parameters** **Object rule**

The rule.

**Return Value**

**string**

The rule ID.

**Rule Description**

Supported rule formats are string, regular expression, and object:

**String Format**

- `addRule('/abc')`: Pure URI string.
- `addRule('GET /abc')`: URI string with method. Besides matching the URI, it also matches the request method. In the example, only GET method requests will be matched.
- `addRule('/abc/:id')`: URI string with variable part. 'id' can be any valid string, indicating this segment can change dynamically. For example, `/abc/123` and `/abc/321` will be matched, while `/abc/123/xxx` will not because it has an extra segment.
- `addRule('/abc?aa')`: URI string with query parameter. Includes parameter 'aa', value can be arbitrary. For example, `/abc?aa=haha` will be matched, but `/abc` will not because it lacks the declared 'aa' parameter; however, if the request is `/abc?aa=haha&bb=123`, it will be matched because it includes the 'aa' parameter, even with an extra 'bb'.
- `addRule('/abc?dd=haha')`: URI string with query parameter. Includes parameter 'dd' with value 'haha'. For example, `/abc?dd=haha` and `/abc?dd=haha&bb=123` will be matched, while `/abc?dd=123` will not because the rule requires the value for 'dd'.

> For the URI strings above, if only the path part is provided, the global origin will be used for completion. For example, if the global origin is `https://weixin.qq.com` and the rule is `/abc`, it will be completed to `https://weixin.qq.com/abc`. Therefore, in the previous examples, `addRule('/abc')` and `addRule('https://weixin.qq.com/abc')` have the same effect. So generally, if the request origin to be matched is the same as the global origin, the origin can be omitted in the rule.

**Regular Expression Format**

- `addRule(/\/(abc|cba)$/ig)`: Directly matches the request URI using the regex, and also checks if the request origin matches the global origin.
- `addRule(/^https:\/\/weixin.qq.com\/(abc|cba)$/ig)`: Regular expression including the origin part. Only matches the URI and does not check the origin.

**Object Format**

Using a rule object allows for a more detailed description of the rule content. (Generally, rule objects are used to match request parameters.)

**Rule Object:**

| Property | Type | Default | Remarks |
| --- | --- | --- | --- |
| id | string |  | Rule ID. If not provided, it will be generated by the base library. |
| method | string |  | Request method. Options: GET, POST, PATCH, PUT, DELETE. If empty, all mentioned methods can be matched. |
| url | any | Required | URI matching rule. Can refer to the string and regular expression formats described above. |
| maxAge | number | 7 \* 24 \* 60 \* 60 \* 1000 | Cache validity period, in ms. If not provided, uses the global cache validity period of the cache manager. |
| dataSchema | Array<DataRule> |  | Matches request parameters. |

Among these, `dataSchema` is used to match request parameters of object type (e.g., the `data` in a wx.request). By default, it can be left empty, meaning no parameter matching is performed.

The type of `dataSchema` is an array of `DataRule` objects. One `DataRule` object describes one parameter. For example, if the `data` of a wx.request is `{a: 123, b: 'haha', c: true}`, and you want to use a rule to match parameters 'a' and 'b', requiring that 'a' is a number and 'b' is a string to hit the rule, then you need to add two `DataRule` objects to `dataSchema`, i.e., `[{name: 'a', schema: {type: 'number'}}, {name: 'b', schema: {type: 'string'}}]`.

**DataRule Object:**

| Property | Type | Default | Remarks |
| --- | --- | --- | --- |
| name | string |  | The parameter name to match. |
| schema | DataSchema/Array<DataSchema> |  | The parameter pattern to match. Supports arrays, indicating the parameter value can have multiple patterns. |

`name` indicates the parameter name to match. `schema` is a `DataSchema` object describing the type and value of the parameter.

A `DataRule` object can also match parameters that might have multiple types, so `schema` also supports being an array of `DataSchema` objects. For example, in the case above, if you want the matched parameter 'a' to be either a number or a string, you can write: `{name: 'a', schema: [{type: 'number'}, {type: 'string'}]}`.

**DataSchema Object:**

| Property | Type | Default | Remarks |
| --- | --- | --- | --- |
| type | string |  | The parameter type of the data object to match. Supports string, number, boolean, null, object, any (meaning any type), and also array modes (add \[\] after the type, e.g., string\[\] means string array). |
| value | string/regexp/function/Array<DataRule> |  | The parameter value of the data object to match. When type is a primitive type, string/regexp can be used to match fixed values, or a function can determine if the value matches. If the passed type is object, it indicates nested value matching is needed, and an Array of DataRules can be passed. |

**Additional Notes**
Users can add multiple rules. Each rule will parse network requests and determine if it hits. If multiple rules hit, the first rule that hits is taken.

The `type` parameter indicates the parameter type to match. The `value` indicates the parameter value to match. The `value` supports multiple formats, with different matching methods:

- String format: Directly checks if the string representation of the value is exactly equal to the given string. For example, a `value` of '123' requires the parameter value to be exactly 123 to match.
- Regular expression format: Directly checks if the string representation of the value matches the regular expression. For example, a `value` of `/\d+/ig` requires the parameter value to be a number; if the parameter value is 'abc', it will not match.
- Function format: Calls the user-provided function during matching, letting the user determine if it matches.
- DataRule array format: When the parameter type is an object, string and regex formats cannot be used. A DataRule array needs to be passed for matching, i.e., using nested DataRule arrays to match nested objects.

**Example Code**

```javascript
const ruleId = cacheManager.addRule({
  id: 'haha-rule',
  method: 'GET',
  url: '/haha',
  maxAge: 123455,
  dataSchema: [\
    // Matching for the data field, empty by default means no matching.\
    // Types can be: string, number, boolean, null, object, any (meaning any type is acceptable), and array representations of these types.\
    {name: 'aaa', schema: {type: 'string'}}, // Type is string.\
    {name: 'bbb', schema: [{type: 'number'}, {type: 'string'}]}, // Type is number or string.\
    {name: 'ccc', schema: {type: 'string', value: 'abc'}}, // Value is 'abc'.\
    {name: 'ddd', schema: {type: 'string', value: /(abc|cba)/ig}}, // Value matches this regex. If the value is not a string, it will be attempted to be converted to a string before comparison.\
    {name: 'ddd', schema: {type: 'string', value: val => val === '123'}}, // Pass a function to validate the value.\
    {name: 'eee', schema: {type: 'object', value: [{ // Type is object, validate layer by layer using nesting.\
      name: 'aaa', schema: {type: 'string'},\
      // ...\
      // Nested dataSchema, matching nested objects in the same way as above.\
    }]}},\
    {name: 'fff', schema: {type: 'string[]'}}, // Type is string array.\
    {name: 'ggg', schema: {type: 'any'}}, // Type is any type.\
    {name: 'hhh', schema: {type: 'any[]'}}, // Type is array of any type.\
  ],
})

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/api/storage.html\#cachemanager-addrules) CacheManager.addRules

Adds rules in batch. Rule format可以参考 CacheManager.addRule.

**Parameters** **Object rules**

List of rules.

**Return Value** **Array**

List of rule IDs.

### [\#](https://super-apps.ai/mop/document/en/develop/api/storage.html\#cachemanager-clearcaches) CacheManager.clearCaches

Clears all caches.

### [\#](https://super-apps.ai/mop/document/en/develop/api/storage.html\#cachemanager-clearrules) CacheManager.clearRules

Clears all rules, and simultaneously deletes all caches under the corresponding rules.

### [\#](https://super-apps.ai/mop/document/en/develop/api/storage.html\#cachemanager-deletecache) CacheManager.deleteCache

Deletes a cache.

**Parameters** **string id**

Cache ID.

### [\#](https://super-apps.ai/mop/document/en/develop/api/storage.html\#cachemanager-deletecaches) CacheManager.deleteCaches

Deletes caches in batch.

**Parameters** **Array**

List of cache IDs.

### [\#](https://super-apps.ai/mop/document/en/develop/api/storage.html\#cachemanager-deleterule) CacheManager.deleteRule

Deletes a rule, and simultaneously deletes all caches under the corresponding rule.

**Parameters** **string id**

Rule ID.

### [\#](https://super-apps.ai/mop/document/en/develop/api/storage.html\#cachemanager-deleterules) CacheManager.deleteRules

Deletes rules in batch, and simultaneously deletes all caches under the corresponding rules.

**Parameters** **Array ids**

List of rule IDs.

### [\#](https://super-apps.ai/mop/document/en/develop/api/storage.html\#cachemanager-match) CacheManager.match

Matches the hit cache rule. Generally needs to be used with the 'request' event.

**Parameters** **Object evt**

The 'request' event object.

**Return Value** **Object**

The matched cache.

| Property | Type | Description |
| --- | --- | --- |
| ruleId | string | The ID of the hit rule. |
| cacheId | string | Cache ID. |
| data | any | Cache content. Will include a fromCache marker for developers to distinguish if the content is from the cache. |
| createTime | number | Cache creation time. |
| maxAge | number | Cache validity period. |

**Example Code**

```javascript
function handler(evt) {
  const cache = cacheManager.match(evt)
  // If there are duplicate listeners, take the promise returned by the first handler.
  return new Promise((resolve, reject) => {
    if (cache.data) {
      resolve(cache.data)
    } else {
      reject('no cache')
    }
  })
}
cacheManager.on('request', handler)

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/api/storage.html\#cachemanager-off) CacheManager.off

Removes an event listener.

**Parameters** **string eventName**

Event name.

**function handler**

Event handler function.

### [\#](https://super-apps.ai/mop/document/en/develop/api/storage.html\#cachemanager-on) CacheManager.on

Listens for an event.

**Parameters** **string eventName**

Event name.

**Valid values for eventName**

| Value | Description | Minimum Version |
| --- | --- | --- |
| request | Occurs when a wx.request is made. Only triggered during the active phase of the cache manager. |  |
| enterWeakNetwork | Entering weak network/offline state. |  |
| exitWeakNetwork | Leaving weak network/offline state. |  |

**function handler**

Event handler function.

The 'request' event provides a request event object for subsequent processing; within the 'request' event handler, a promise must be returned, which is used to generate the return content for the wx.request call.

**Example Code**

```javascript
async function handler(evt) {
  // evt.url - Request URL.
  // evt.data - Request parameters.
  // evt.method - Request method.
  // evt.request - Original request method, returns a promise.

  // if (evt.url === '/xxx') {
  //   // If some requests are still desired to go through the network, handle as follows.
  //   const res = await evt.request()
  //   // res is the network request response.
  // }

  return new Promsie((resolve, reject) => {
    // do sth
    if (data) {
      // The data resolved here will be returned as the success callback result of wx.request.
      resolve(data)
    } else {
      // The error message rejected here will be returned as the fail callback result of wx.request.
      reject('no data')
    }
  })
}
cacheManager.on('request', handler)

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/api/storage.html\#cachemanager-start) CacheManager.start

Starts caching. Only effective when mode is 'none'. After calling, the cache manager's state is set to 1.

### [\#](https://super-apps.ai/mop/document/en/develop/api/storage.html\#cachemanager-stop) CacheManager.stop

Stops caching. Only effective when mode is 'none'. After calling, the cache manager's state is set to 0.

[Previous：Network](https://super-apps.ai/mop/document/en/develop/api/network.html)[Next：Media](https://super-apps.ai/mop/document/en/develop/api/media.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)