<!--
Source URL: https://super-apps.ai/mop/document/en/develop/api/cloud.html
Extracted: 2026-01-12T23:13:12.564Z (January 12, 2026)
Title: Cloud Development | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
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

# [\#](https://super-apps.ai/mop/document/en/develop/api/cloud.html\#cloud-development) Cloud Development

## [\#](https://super-apps.ai/mop/document/en/develop/api/cloud.html\#prerequisites) Prerequisites

**Sample Code**

```javascript
// Add the following configuration in app.json
"plugins": {
  "cloud": {
    "version": "0.0.1",
    "provider": "641a62448a00310001441def"
  }
}
// Add the following content in app.js
ft.loadExtApi({
  name: 'cloud',
  fun: requirePlugin('cloud')
})

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/api/cloud.html\#init) init

> Supported since Base Library 3.0.35

**init(Object object)**

Initialization.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| env | string | object |  | Yes |

**Sample Code**

```javascript
ft.cloud.init({
  env: 'test-111',
  appid: 'xxx', // WeChat Mini-Program ID
  secret: 'xxx', // WeChat Mini-Program AppSecret
})

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/api/cloud.html\#database) database

> Supported since Base Library 3.0.35

**database(Object object)**

Database initialization.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| env | string | object |  | Yes |

**Sample Code**

```javascript
const testDB = ft.cloud.database({
  env: 'test'
})

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/api/cloud.html\#cloud-function) Cloud Function

> Supported since Base Library 3.0.35

**callFunction(Object object)**

Cloud Function.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| name | string |  | Yes | Function name |
| data | object |  |  |  |
| config | object |  |  |  |

**object.success Callback Function**

**Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| errMsg | string |  |
| result | any | Result returned by the cloud function |
| requestID | string | Cloud function execution ID, can be used for log query |

**Sample Code**

```javascript
ft.cloud.callFunction({
  // Cloud function name
  name: 'add',
  // Parameters passed to the cloud function
  data: {
    a: 1,
    b: 2,
  },
  success: function(res) {
  }
})

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/api/cloud.html\#add) add

> Supported since Base Library 3.0.35

**add(Object object)**

Insert data (Database).

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| data | object |  | Yes | Data to insert |

**object.success Callback Function**

**Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| errMsg | string |  |
| \_id | string |  |

**Sample Code**

```javascript
db.collection('xxx').add({
  data: {
    description: "learn cloud database",
  },
  success: function(res) {
    console.log(res)
  }
})

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/api/cloud.html\#get) get

> Supported since Base Library 3.0.35

**get(Object object)**

Query data (Database).

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| data | object |  | Yes | Data to insert |

**object.success Callback Function**

**Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| errMsg | string |  |
| data | object | Data |

**Sample Code**

```javascript
db.collection('xxx').doc('xxx').get({
  success: function(res) {
    console.log(res.data)
  }
})

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/api/cloud.html\#update) update

> Supported since Base Library 3.0.35

**update(Object object)**

Update data (Database).

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| data | object |  | Yes | Data to update |

**object.success Callback Function**

**Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| errMsg | string |  |
| data | object | Data |

**Sample Code**

```javascript
db.collection('xxx').doc('xxx').update({
  data: {
    done: true
  },
  success: function(res) {
    console.log(res.data)
  }
})

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/api/cloud.html\#remove) remove

> Supported since Base Library 3.0.35

**remove(Object object)**

Delete data (Database).

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| data | object |  | Yes |  |

**object.success Callback Function**

**Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| errMsg | string |  |
| data | object | Data |

**Sample Code**

```javascript
db.collection('xxx').doc('xxx').remove({
  success: function(res) {
    console.log(res.data)
  }
})

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/api/cloud.html\#querying-and-updating-arrays-nested-objects) Querying and Updating Arrays/Nested Objects

> Supported since Base Library 3.0.35

**Sample Code**

```javascript
// Simple matching
db.collection('xxx').where({
  progress: 50
}).get()

// Matching nested fields in records

db.collection('xxx').where({
  style: {
    color: 'red'
  }
}).get()

// Method 2
db.collection('xxx').where({
  'style.color': 'red'
}).get()

// Matching arrays
db.collection('xxx').where({
  numbers: [10, 20, 30]
}).get()

// Matching elements in arrays
db.collection('xxx').where({
  numbers: 20
}).get()

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/api/cloud.html\#building-query-conditions) Building Query Conditions

> Supported since Base Library 3.0.35

**Sample Code**

```javascript
// Specify the upper limit of the query result set
db.collection('todos').limit(10)
  .get()
  .then(console.log)
  .catch(console.error)

// Specify to start returning results from after a specified sequence when returning query results, commonly used for pagination
db.collection('todos').skip(10)
  .get()
  .then(console.log)
  .catch(console.error)

// Specify the fields that records need to return in the result set
db.collection('todos').field({
  description: true,
  done: true,
  progress: true,
}).get()
  .then(console.log)
  .catch(console.error)

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/api/cloud.html\#uploadfile) uploadFile

> Supported since Base Library 3.0.35

**uploadFile(Object object)**

Upload file (Storage).

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| cloudPath | string |  | Yes | Cloud storage path |
| filePath | string |  | Yes | Path of the file resource to upload |
| config | Object |  |  | Configuration |
| success | string |  |  | Success callback |
| fail | string |  |  | Failure callback |
| complete | string |  |  | Completion callback |

**object.success Callback Function**

**Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| errMsg | string | File ID |
| fileID | object | Data |
| statusCode | number | HTTP status code returned by the server |

**Sample Code**

```javascript
ft.cloud.uploadFile({
  cloudPath: 'xxx.png',
  filePath: '',
  success: res => {
    console.log(res.fileID)
  },
  fail: err => {
  }
})

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/api/cloud.html\#downloadfile) downloadFile

> Supported since Base Library 3.0.35

**downloadFile(Object object)**

Download file from cloud storage space (Storage).

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| fileID | string |  | Yes |  |
| config | Object |  |  | Configuration |
| success | string |  |  | Success callback |
| fail | string |  |  | Failure callback |
| complete | string |  |  | Completion callback |

**object.success Callback Function**

**Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| errMsg | string | File ID |
| tempFilePath | object | Temporary file path |
| statusCode | number | HTTP status code returned by the server |

**Sample Code**

```javascript
ft.cloud.downloadFile({
  fileID: 'xxx',
  success: res => {
    console.log(res.tempFilePath)
  },
  fail: err => {
  }
})

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/api/cloud.html\#deletefile) deleteFile

> Supported since Base Library 3.0.35

**deleteFile(Object object)**

Delete files from cloud storage space, up to 50 files at a time (Storage).

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| fileList | Object |  | Yes | File list |
| success | string |  |  | Success callback |
| fail | string |  |  | Failure callback |
| complete | string |  |  | Completion callback |

**object.success Callback Function**

**Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| errMsg | string | File ID |
| fileList | object | File list |

**Sample Code**

```javascript
ft.cloud.deleteFile({
  fileList: ['xxx'],
  success: res => {
    console.log(res.fileList)
  },
  fail: err => {
  },
  complete: res => {
  }
})

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/api/cloud.html\#gettempfileurl) getTempFileURL

> Supported since Base Library 3.0.35

**getTempFileURL(Object object)**

Exchange cloud file ID for a real URL. Links obtained for publicly readable files do not expire, while links for private files are valid for ten minutes. Up to 50 files can be processed at a time (Storage).

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| fileList | Object |  | Yes | File list |
| success | string |  |  | Success callback |
| fail | string |  |  | Failure callback |
| complete | string |  |  | Completion callback |

**object.success Callback Function**

**Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| errMsg | string | File ID |
| fileList | object | File list |

**Sample Code**

```javascript
ft.cloud.getTempFileURL({
  fileList: ['cloud://xxx', 'cloud://yyy'],
  success: res => {
    console.log(res.fileList)
  },
  fail: err => {
  }
})

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/api/cloud.html\#unimplemented-features) Unimplemented Features

1. Query Commands
2. Aggregate Queries
3. Real-time Data Push
4. Geolocation
5. traceUser
6. serverDate
7. Constructing Regular Expressions
8. Creating Collections
9. Support for passing cloud file IDs in components like image, audio, etc.

::: tips Note

Alternative solutions for unimplemented features:

Can be implemented through cloud function calls, as follows:

Import the wx-server-sdk library in the cloud function, for example:

```javascript
const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

exports.main = async (event) => {
  const { ENV, OPENID, APPID } = cloud.getWXContext()
  const db = cloud.database()
  cosnt _ = db.command
  const dbResult = await db.collection('test').where({ progress: _gt(10) }).get()
  return {
    dbResult,
    ENV,
    OPENID,
    APPID,
  }
}

        Code copied

```

:::

[Previous：Other](https://super-apps.ai/mop/document/en/develop/api/other.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)