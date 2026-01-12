<!--
Source URL: https://super-apps.ai/mop/document/en/develop/api/network.html
Extracted: 2026-01-12T23:11:52.582Z (January 12, 2026)
Title: Network | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
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

# [\#](https://super-apps.ai/mop/document/en/develop/api/network.html\#network) Network

## [\#](https://super-apps.ai/mop/document/en/develop/api/network.html\#making-requests) Making Requests

### [\#](https://super-apps.ai/mop/document/en/develop/api/network.html\#request) request

> Supported since Base Library 1.3.9, iOS SDK 2.1.23, Android SDK 2.1.38

**request(Object object)**

Initiates an HTTP network request using native APIs. Returns a RequestTask object after execution.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| url | string |  | Yes | Developer server interface address |
| data | string/object/ArrayBuffer |  | No | Request parameters |
| header | Object |  | No | Set request headers. Referer cannot be set in headers. content-type defaults to application/json |
| method | string | GET | No | HTTP request method |
| timeout | number |  | No | Timeout duration in milliseconds |
| dataType | string | json | No | Format of returned data |
| responseType | string | text | No | Data type of the response |
| enableProfile | boolean | true | No | Whether to enable profile. Default is enabled. After enabling, performance debugging information can be viewed in res.profile of the interface callback. (Supported since Base Library 3.5.2, Android & iOS 2.46.3) |
| enableChunked | boolean | false | No | Enable transfer-encoding chunked. (Supported since Android & iOS 2.43.5) |
| forceCellularNetwork | boolean | false | No | Use mobile network to send requests when connected to Wi-Fi (Android only) |
| success | function |  | No | Callback function for successful interface call |
| fail | function |  | No | Callback function for failed interface call |
| complete | function |  | No | Callback function for interface call completion (executed for both success and failure) |

**Valid values for object.method**

| Value | Description |
| --- | --- |
| OPTIONS | HTTP request OPTIONS |
| GET | HTTP request GET |
| HEAD | HTTP request HEAD |
| POST | HTTP request POST |
| PUT | HTTP request PUT |
| DELETE | HTTP request DELETE |
| TRACE | HTTP request TRACE |
| CONNECT | HTTP request CONNECT |

**Valid values for object.dataType**

| Value | Description |
| --- | --- |
| json | Returned data is JSON, which will be parsed with JSON.parse after return |
| Other | No JSON.parse will be performed on the returned content |

**Valid values for object.responseType**

| Value | Description |
| --- | --- |
| text | Response data is text |
| arraybuffer | Response data is ArrayBuffer |

**object.success callback function**

**Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| data | string/object/ArrayBuffer | Data returned by the developer server |
| statusCode | number | HTTP status code returned by the developer server |
| header | Object | HTTP Response Header returned by the developer server |
| profile | Object | Debugging information during the network request |

**profile**

| Property | Type | Description |
| --- | --- | --- |
| fetchStart | number | Time when the component is ready to fetch resources using HTTP request, occurs before checking local cache |
| domainLookUpStart | number | Time when DNS domain name query starts. If local cache is used (no DNS query) or persistent connection is used, equals fetchStart value |
| domainLookUpEnd | number | Time when DNS domain name query completes. If local cache is used (no DNS query) or persistent connection is used, equals fetchStart value |
| connectStart | number | Time when HTTP (TCP) connection establishment starts. For persistent connections, equals fetchStart value. Note: if a transport layer error occurs and connection is re-established, this shows the start time of the new connection |
| connectEnd | number | Time when HTTP (TCP) connection establishment completes (handshake complete). For persistent connections, equals fetchStart value. Note: if a transport layer error occurs and connection is re-established, this shows the completion time of the new connection. Note handshake completion includes secure connection establishment and SOCKS authorization |
| SSLconnectionStart | number | Time when SSL connection establishment starts. If not a secure connection, value is 0 |
| SSLconnectionEnd | number | Time when SSL connection establishment completes. If not a secure connection, value is 0 |
| requestStart | number | Time when HTTP request starts reading the actual document (after connection establishment), including reading from local cache. For connection error reconnection, this also shows the new connection establishment time |
| requestEnd | number | Time when HTTP request finishes reading the actual document |
| responseStart | number | Time when HTTP starts receiving response (first byte obtained), including reading from local cache |
| responseEnd | number | Time when HTTP response is fully received (last byte obtained), including reading from local cache |
| rtt | number | Real-time rtt during the current request connection process |
| estimate\_nettype | number | Estimated network status: unknown, offline, slow 2g, 2g, 3g, 4g, last/0, 1, 2, 3, 4, 5, 6 |
| httpRttEstimate | number | Protocol layer estimated current network rtt based on multiple requests (for reference only) |
| transportRttEstimate | number | Transport layer estimated current network rtt based on multiple requests (for reference only) |
| downstreamThroughputKbpsEstimate | number | Estimated current network download kbps |
| peerIP | string | IP address of the current request |
| port | number | Port of the current request |
| socketReused | boolean | Whether the connection is reused |
| sendBytesCount | number | Number of bytes sent |
| receivedBytedCount | number | Number of bytes received |
| protocol | string | Protocol type used, valid values: http/1.1, h2, quic, unknown |

**Example Code**

```javascript
ft.request({
  url: 'test.php', // Example only, not a real interface address
  data: {
    x: '',
    y: ''
  },
  header: {
    'content-type': 'application/json' // Default value
  },
  success(res) {
    console.log(res.data)
  }
})

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/api/network.html\#requesttask-abort) RequestTask.abort

> Supported since Base Library 2.4.2, iOS SDK 2.13.59, Android SDK 2.13.34

**RequestTask.abort()**

Aborts the request task.

**Example Code**

```javascript
const task = ft.request({
  // some params
})
// Abort the request
task.abort()

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/api/network.html\#requesttask-onheadersreceived) RequestTask.onHeadersReceived

> Supported since Base Library 2.4.2, iOS SDK 2.13.59, Android SDK 2.13.34

RequestTask.onHeadersReceived(function callback)

Listens for the HTTP Response Header event, which occurs earlier than the request completion event.

**Parameters**

**function callback**

Callback function for the Header Received event.

**Callback Function Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| header | Object | HTTP Response Header returned by the developer server |

### [\#](https://super-apps.ai/mop/document/en/develop/api/network.html\#requesttask-offheadersreceived) RequestTask.offHeadersReceived

> Supported since Base Library 2.4.2, iOS SDK 2.13.59, Android SDK 2.13.34

**RequestTask.offHeadersReceived(function callback)**

Cancels listening for the HTTP Response Header event.

**Parameters**

**function callback**

Callback function for the Header Received event.

### [\#](https://super-apps.ai/mop/document/en/develop/api/network.html\#requesttask-onchunkreceived) RequestTask.onChunkReceived

> Supported since Base Library 3.2.3, iOS SDK 2.43.7, Android SDK 2.43.7

RequestTask.onChunkReceived(function callback)

Listens for the Chunk Received event, triggered when a new chunk is received.

**Parameters**

**function callback**

Callback function for the Chunk Received event.

**Callback Function Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| data | ArrayBuffer | Chunk buffer returned by the request |

### [\#](https://super-apps.ai/mop/document/en/develop/api/network.html\#requesttask-offchunkreceived) RequestTask.offChunkReceived

> Supported since Base Library 3.2.3, iOS SDK 2.43.7, Android SDK 2.43.7

**RequestTask.offChunkReceived(function callback)**

Cancels listening for the Chunk Received event.

**Parameters**

**function callback**

Callback function for the Chunk Received event.

## [\#](https://super-apps.ai/mop/document/en/develop/api/network.html\#download) Download

### [\#](https://super-apps.ai/mop/document/en/develop/api/network.html\#downloadfile) downloadFile

> Supported since Base Library 1.3.9, iOS SDK 2.1.23, Android SDK 2.1.38

**downloadFile(Object object)**

Downloads file resources to local. The client directly initiates an HTTPS GET request and returns the local temporary path of the file.

Returns a DownloadTask after calling.

Note

Please specify a reasonable Content-Type field in the server response header to ensure the client correctly handles the file type.

​
**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| url | string |  | Yes | URL of the download resource |
| header | Object |  | No | Set request headers. Referer cannot be set in headers |
| timeout | number |  | No | Timeout duration in milliseconds |
| filePath | string |  | No | Specifies the path (local path) where the file is stored after download |
| enableProfile | boolean | true | No | Whether to enable profile. Default is enabled. After enabling, performance debugging information can be viewed in res.profile of the interface callback. (Supported since Base Library 3.5.2, Android & iOS 2.46.3) |
| success | function |  | No | Callback function for successful interface call |
| fail | function |  | No | Callback function for failed interface call |
| complete | function |  | No | Callback function for interface call completion (executed for both success and failure) |

**object.success callback function**

**Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| tempFilePath | string | Temporary file path. |
| filePath | string | User file path (local path). Returned when filePath is provided, same as the provided filePath |
| statusCode | number | HTTP status code returned by the developer server |
| profile | Object | Debugging information during the network request |

**profile**

| Property | Type | Description |
| --- | --- | --- |
| fetchStart | number | Time when the component is ready to fetch resources using HTTP request, occurs before checking local cache |
| domainLookUpStart | number | Time when DNS domain name query starts. If local cache is used (no DNS query) or persistent connection is used, equals fetchStart value |
| domainLookUpEnd | number | Time when DNS domain name query completes. If local cache is used (no DNS query) or persistent connection is used, equals fetchStart value |
| connectStart | number | Time when HTTP (TCP) connection establishment starts. For persistent connections, equals fetchStart value. Note: if a transport layer error occurs and connection is re-established, this shows the start time of the new connection |
| connectEnd | number | Time when HTTP (TCP) connection establishment completes (handshake complete). For persistent connections, equals fetchStart value. Note: if a transport layer error occurs and connection is re-established, this shows the completion time of the new connection. Note handshake completion includes secure connection establishment and SOCKS authorization |
| SSLconnectionStart | number | Time when SSL connection establishment starts. If not a secure connection, value is 0 |
| SSLconnectionEnd | number | Time when SSL connection establishment completes. If not a secure connection, value is 0 |
| requestStart | number | Time when HTTP request starts reading the actual document (after connection establishment), including reading from local cache. For connection error reconnection, this also shows the new connection establishment time |
| requestEnd | number | Time when HTTP request finishes reading the actual document |
| responseStart | number | Time when HTTP starts receiving response (first byte obtained), including reading from local cache |
| responseEnd | number | Time when HTTP response is fully received (last byte obtained), including reading from local cache |
| rtt | number | Real-time rtt during the current request connection process |
| estimate\_nettype | number | Estimated network status: unknown, offline, slow 2g, 2g, 3g, 4g, last/0, 1, 2, 3, 4, 5, 6 |
| httpRttEstimate | number | Protocol layer estimated current network rtt based on multiple requests (for reference only) |
| transportRttEstimate | number | Transport layer estimated current network rtt based on multiple requests (for reference only) |
| downstreamThroughputKbpsEstimate | number | Estimated current network download kbps |
| peerIP | string | IP address of the current request |
| port | number | Port of the current request |
| socketReused | boolean | Whether the connection is reused |
| sendBytesCount | number | Number of bytes sent |
| receivedBytedCount | number | Number of bytes received |
| protocol | string | Protocol type used, valid values: http/1.1, h2, quic, unknown |

**Example Code**

```javascript
ft.downloadFile({
  url: 'https://example.com/audio/123', // Example only, not a real resource
  success(res) {
    // As long as the server responds with data, the response content will be written to the file and the success callback will be entered. The business needs to determine whether the desired content has been downloaded.
    if (res.statusCode === 200) {
      ft.playVoice({
        filePath: res.tempFilePath
      })
    }
  }
})

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/api/network.html\#downloadtask-abort) DownloadTask.abort

> Supported since Base Library 2.4.2, iOS SDK 2.13.59, Android SDK 2.13.34

**DownloadTask.abort()**

Aborts the download task.

**Example Code**

```javascript
const task = ft.request({
  // some params
})
// Abort the request
task.abort()

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/api/network.html\#downloadtask-onheadersreceived) DownloadTask.onHeadersReceived

> Supported since Base Library 2.4.2, iOS SDK 2.13.59, Android SDK 2.13.34

**DownloadTask.onHeadersReceived(function callback)**

Listens for the HTTP Response Header event, which occurs earlier than the request completion event.

**Parameters**

**function callback**

Callback function for the Header Received event.​

**Callback Function Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| header | Object | HTTP Response Header returned by the developer server |

### [\#](https://super-apps.ai/mop/document/en/develop/api/network.html\#downloadtask-offheadersreceived) DownloadTask.offHeadersReceived

> Supported since Base Library 2.4.2, iOS SDK 2.13.59, Android SDK 2.13.34

**DownloadTask.offHeadersReceived(function callback)**

Cancels listening for the HTTP Response Header event.

**Parameters**

**function callback**

Callback function for the Header Received event.

### [\#](https://super-apps.ai/mop/document/en/develop/api/network.html\#downloadtask-onprogressupdate) DownloadTask.onProgressUpdate

> Supported since Base Library 2.4.2, iOS SDK 2.13.59, Android SDK 2.13.34

**DownloadTask.onProgressUpdate(function callback)**

Listens for the download progress change event.

**Parameters**

**function callback**

Callback function for the Progress Update event.

**Callback Function Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| progress | number | Download progress percentage |
| totalBytesWritten | number | Length of data already downloaded, in Bytes |
| totalBytesExpectedToWrite | number | Total expected length of data to download, in Bytes |

**Example Code**

```javascript
const task = ft.downloadFile({
  // some params
})
// Listen for progress changes
task.onProgressUpdate((res) => {
  this.setData({
    progress: res.progress
  })
})

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/api/network.html\#downloadtask-offprogressupdate) DownloadTask.offProgressUpdate

> Supported since Base Library 2.4.2, iOS SDK 2.13.59, Android SDK 2.13.34

**DownloadTask.offProgressUpdate(function callback)**

Cancels listening for download progress changes.

**Parameters**

**function callback**

Callback function for the Progress Update event.

## [\#](https://super-apps.ai/mop/document/en/develop/api/network.html\#upload) Upload

### [\#](https://super-apps.ai/mop/document/en/develop/api/network.html\#uploadfile) uploadFile

> Supported since Base Library 1.3.9, iOS SDK 2.1.23, Android SDK 2.1.38

**uploadFile(Object object)**

Uploads local resources to the server. The client initiates an HTTPS POST request with content-type as multipart/form-data.

Returns an UploadTask after calling.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| url | string |  | Yes | Developer server address |
| filePath | string |  | Yes | Path of the file resource to upload |
| name | string |  | Yes | Key corresponding to the file. The developer can obtain the binary content of the file through this key on the server side |
| header | Object |  | No | Set request headers. Referer cannot be set in headers |
| formData | Object |  | No | Additional form data in the HTTP request |
| timeout | number |  | No | Timeout duration in milliseconds |
| success | function |  | No | Callback function for successful interface call |
| fail | function |  | No | Callback function for failed interface call |
| complete | function |  | No | Callback function for interface call completion (executed for both success and failure) |

**object.success callback function**

**Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| data | string | Data returned by the developer server |
| statusCode | number | HTTP status code returned by the developer server |

**Example Code**

```javascript
ft.chooseImage({
  success(res) {
    const tempFilePaths = res.tempFilePaths
    ft.uploadFile({
      url: 'https://example.weixin.qq.com/upload', // Example only, not a real interface address
      filePath: tempFilePaths[0],
      name: 'file',
      formData: {
        user: 'test'
      },
      success(res) {
        const data = res.data
        // do something
      }
    })
  }
})

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/api/network.html\#uploadtask-abort) UploadTask.abort

> Supported since Base Library 2.4.2, iOS SDK 2.13.59, Android SDK 2.13.34

**UploadTask.abort()**

Aborts the upload task.

**Example Code**

```javascript
const task = ft.request({
  // some params
})
// Abort the request
task.abort()

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/api/network.html\#uploadtask-onheadersreceived) UploadTask.onHeadersReceived

> Supported since Base Library 2.4.2, iOS SDK 2.13.59, Android SDK 2.13.34

**UploadTask.onHeadersReceived(function callback)**

Listens for the HTTP Response Header event, which occurs earlier than the request completion event.

**Parameters**

**function callback**

Callback function for the Header Received event.

**Callback Function Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| header | Object | HTTP Response Header returned by the developer server |

### [\#](https://super-apps.ai/mop/document/en/develop/api/network.html\#uploadtask-offheadersreceived) UploadTask.offHeadersReceived

> Supported since Base Library 2.4.2, iOS SDK 2.13.59, Android SDK 2.13.34

**UploadTask.offHeadersReceived(function callback)**

Cancels listening for the HTTP Response Header event.

**Parameters**

**function callback**

Callback function for the Header Received event.

### [\#](https://super-apps.ai/mop/document/en/develop/api/network.html\#uploadtask-onprogressupdate) UploadTask.onProgressUpdate

> Supported since Base Library 2.4.2, iOS SDK 2.13.59, Android SDK 2.13.34

**UploadTask.onProgressUpdate(function callback)**

Listens for the upload progress change event.

**Parameters**

**function callback**

Callback function for the Progress Update event.

**Callback Function Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| progress | number | Upload progress percentage |
| totalBytesSent | number | Length of data already uploaded, in Bytes |
| totalBytesExpectedToSend | number | Total expected length of data to upload, in Bytes |

**Example Code**

```javascript
const task = ft.uploadFile({
  // some params
})
// Listen for progress changes
task.onProgressUpdate((res) => {
  this.setData({
    progress: res.progress
  })
})

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/api/network.html\#uploadtask-offprogressupdate) UploadTask.offProgressUpdate

> Supported since Base Library 2.4.2, iOS SDK 2.13.59, Android SDK 2.13.34

**UploadTask.offProgressUpdate(function callback)**

Cancels listening for upload progress changes.

**Parameters**

**function callback** Callback function for the Progress Update event.

## [\#](https://super-apps.ai/mop/document/en/develop/api/network.html\#websocket) Websocket

### [\#](https://super-apps.ai/mop/document/en/develop/api/network.html\#sendsocketmessage) sendSocketMessage

**ft.sendSocketMessage(Object object)**

Sends data through the WebSocket connection. Requires ft.connectSocket first and can only be sent after the ft.onSocketOpen callback.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| data | string/ArrayBuffer |  | Yes | Content to send |
| success | function |  | No | Callback function for successful interface call |
| fail | function |  | No | Callback function for failed interface call |
| complete | function |  | No | Callback function for interface call completion (executed for both success and failure) |

**Example Code**

```javascript
let socketOpen = false
let socketMsgQueue = []
ft.connectSocket({
  url: 'test.php'
})

ft.onSocketOpen(function(res) {
  socketOpen = true
  for (let i = 0; i < socketMsgQueue.length; i++){
    sendSocketMessage(socketMsgQueue[i])
  }
  socketMsgQueue = []
})

function sendSocketMessage(msg) {
  if (socketOpen) {
    ft.sendSocketMessage({
      data:msg
    })
  } else {
    socketMsgQueue.push(msg)
  }
}

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/api/network.html\#onsocketopen) onSocketOpen

**ft.onSocketOpen(function callback)**

Listens for the WebSocket connection open event.

**Parameters**

**function callback**

Callback function for the WebSocket connection open event.

**Parameters**

| Property | Type | Description |
| --- | --- | --- |
| header | object | HTTP response header upon successful connection |

### [\#](https://super-apps.ai/mop/document/en/develop/api/network.html\#onsocketmessage) onSocketMessage

**ft.onSocketMessage(function callback)**

Listens for the WebSocket message received from server event.

**Parameters**

**function callback**

Callback function for the WebSocket message received from server event.

**Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| data | string/ArrayBuffer | Message returned by the server |

### [\#](https://super-apps.ai/mop/document/en/develop/api/network.html\#onsocketerror) onSocketError

**ft.onSocketError(function callback)**

Listens for the WebSocket error event.

**Parameters**

**function callback**

Callback function for the WebSocket error event.

**Parameters**

##### [\#](https://super-apps.ai/mop/document/en/develop/api/network.html\#object-res) Object res

| Property | Type | Description |
| --- | --- | --- |
| errMsg | string | Error message |

### [\#](https://super-apps.ai/mop/document/en/develop/api/network.html\#onsocketclose) onSocketClose

**ft.onSocketClose(function callback)**

Listens for the WebSocket connection close event.

**Parameters**

**function callback**

Callback function for the WebSocket connection close event.

**Parameters**

##### [\#](https://super-apps.ai/mop/document/en/develop/api/network.html\#object-res-2) Object res

| Property | Type | Description |
| --- | --- | --- |
| code | number | A numeric value indicating the status code of the closed connection, representing the reason for closure. |
| reason | string | A human-readable string indicating the reason for closure. This string must be a UTF-8 text (not characters) no longer than 123 bytes. |

### [\#](https://super-apps.ai/mop/document/en/develop/api/network.html\#connectsocket) connectSocket

**SocketTask ft.connectSocket(Object object)**

Creates a WebSocket connection. Please read the relevant instructions before use.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| url | string |  | Yes | Developer server wss interface address |  |
| header | Object |  | No | HTTP Header. Referer cannot be set in Header |  |
| protocols | Array.<string> |  | No | Sub-protocol array | 1.4.0 |
| tcpNoDelay | boolean | false | No | TCP\_NODELAY setting when establishing TCP connection | 2.4.0 |
| perMessageDeflate | boolean | false | No | Whether to enable compression extension | 2.8.0 |
| timeout | number |  | No | Timeout duration in milliseconds | 2.10.0 |
| success | function |  | No | Callback function for successful interface call |  |
| fail | function |  | No | Callback function for failed interface call |  |
| complete | function |  | No | Callback function for interface call completion (executed for both success and failure) |  |

**Return Value**

**SocketTask**

WebSocket task.

**Example Code**

```javascript
ft.connectSocket({
  url: 'wss://example.qq.com',
  header:{
    'content-type': 'application/json'
  },
  protocols: ['protocol1']
})

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/api/network.html\#closesocket) closeSocket

**ft.closeSocket(Object object)**

Closes the WebSocket connection.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| code | number | 1000 (indicating normal closure) | No | A numeric value indicating the status code of the closed connection, representing the reason for closure. |
| reason | string |  | No | A human-readable string indicating the reason for closure. This string must be a UTF-8 text (not characters) no longer than 123 bytes. |
| success | function |  | No | Callback function for successful interface call |
| fail | function |  | No | Callback function for failed interface call |
| complete | function |  | No | Callback function for interface call completion (executed for both success and failure) |

**Example Code**

```javascript
ft.connectSocket({
  url: 'test.php'
})

// Note the timing issue here.
// If ft.connectSocket hasn't called back ft.onSocketOpen yet, but ft.closeSocket is called first, then the WebSocket cannot be closed.
// ft.closeSocket must be called during the WebSocket open period to close it.
ft.onSocketOpen(function() {
  ft.closeSocket()
})

ft.onSocketClose(function(res) {
  console.log('WebSocket closed!')
})

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/api/network.html\#sockettask) SocketTask

WebSocket task, which can be created and returned via the ft.connectSocket() interface.​

**Methods**

- **SocketTask.send(Object object)**


Sends data through the WebSocket connection.

- **SocketTask.close(Object object)**


Closes the WebSocket connection.

- **SocketTask.onOpen(function callback)**


Listens for the WebSocket connection open event.

- **SocketTask.onClose(function callback)**


Listens for the WebSocket connection close event.

- **SocketTask.onError(function callback)**


Listens for the WebSocket error event.

- **SocketTask.onMessage(function callback)**


Listens for the WebSocket message received from server event.


## [\#](https://super-apps.ai/mop/document/en/develop/api/network.html\#tcp-communication) TCP Communication

### [\#](https://super-apps.ai/mop/document/en/develop/api/network.html\#ft-createtcpsocket) ft.createTCPSocket

**ft.createTCPSocket()**

Creates a TCP Socket instance.

**Return Value**

**TCPSocket**

A TCP Socket instance.

**Connection Restrictions**

- Allows communication with non-local IPs within the LAN.
- Prohibits connections to the following port numbers: `Below 1024``1099``1433``1521``1719``1720``1723``2049``2375``3128``3306``3389``3659``4045``5060``5061``5432``5984``6379``6000``6566``7001``7002``8000-8100``8443``8888``9200``9300``10051``10080``11211``27017``27018``27019`.
- Maximum of 20 TCPSocket creations allowed per 5 minutes.

### [\#](https://super-apps.ai/mop/document/en/develop/api/network.html\#tcpsocket) TCPSocket

A TCP Socket instance, using IPv4 protocol by default.

### [\#](https://super-apps.ai/mop/document/en/develop/api/network.html\#tcpsocket-connect) TCPSocket.connect

**TCPSocket.connect(Object options)**

Initiates a connection on the given socket.

**Parameters**

**Object options**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| address | string |  | Yes | Address to which the socket connects |
| port | number |  | Yes | Port to which the socket connects |
| timeout | number | 2 | No | Connection timeout duration for the socket, defaults to 2s |

**Example Code**

```js
const tcp = ft.createTCPSocket()
tcp.connect({
  address: '192.168.114.514',
  port: 8080
})

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/api/network.html\#tcpsocket-write) TCPSocket.write

**TCPSocket.write(string\|ArrayBuffer data)**

Sends data on the socket.

**Parameters**

**string\|ArrayBuffer data**

Data to send, can be string or ArrayBuffer.

**Example Code**

```js
const tcp = ft.createTCPSocket()
tcp.write('Hello FinClip.')

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/api/network.html\#tcpsocket-close) TCPSocket.close

**TCPSocket.close()**

Closes the connection.

**Example Code**

```js
const tcp = ft.createTCPSocket()
tcp.close()

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/api/network.html\#tcpsocket-onclose) TCPSocket.onClose

**TCPSocket.onClose(function callback)**

Listens for the event triggered when the socket is completely closed.

**Parameters**

**function callback**

Listener function.

**Example Code**

```js
const tcp = ft.createTCPSocket()
const callback = () => {
  console.log('close')
}
tcp.onClose(callback)

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/api/network.html\#tcpsocket-offclose) TCPSocket.offClose

**TCPSocket.offClose(function callback)**

Cancels listening for the event when the socket is completely closed.

**Parameters**

**function callback**

Listener function.

**Example Code**

```js
const tcp = ft.createTCPSocket()
const callback = () => {
  console.log('close')
}
tcp.offClose(callback)

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/api/network.html\#tcpsocket-onconnect) TCPSocket.onConnect

**TCPSocket.onConnect(function callback)**

Listens for the event triggered when the socket connection is successfully established.

**Parameters**

**function callback**

Listener function.

**Example Code**

```js
const tcp = ft.createTCPSocket()
const callback = () => {
  console.log('connect')
}
tcp.onConnect(callback)

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/api/network.html\#tcpsocket-offconnect) TCPSocket.offConnect

**TCPSocket.offConnect(function callback)**

Cancels listening for the event when the socket connection is successfully established.

**Parameters**

**function callback**

Listener function.

**Example Code**

```js
const tcp = ft.createTCPSocket()
const callback = () => {
  console.log('connect')
}
tcp.offConnect(callback)

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/api/network.html\#tcpsocket-onerror) TCPSocket.onError

**TCPSocket.onError(function callback)**

Listens for the event triggered when an error occurs on the socket.

**Parameters**

**function callback**

Listener function.

**Example Code**

```js
const tcp = ft.createTCPSocket()
const callback = () => {
  console.log('error')
}
tcp.onError(callback)

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/api/network.html\#tcpsocket-offerror) TCPSocket.offError

**TCPSocket.offError(function callback)**

Cancels listening for the event triggered when an error occurs on the socket.

**Parameters**

**function callback**

Listener function.

**Example Code**

```js
const tcp = ft.createTCPSocket()
const callback = () => {
  console.log('error')
}
tcp.offError(callback)

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/api/network.html\#tcpsocket-onmessage) TCPSocket.onMessage

**TCPSocket.onMessage(function callback)**

Listens for the event triggered when the socket receives data.

**Parameters**

**function callback**

Listener function.

**Example Code**

```js
const tcp = ft.createTCPSocket()
const callback = (res) => {
  console.log('message', res)
}
tcp.onMessage(callback)

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/api/network.html\#tcpsocket-offmessage) TCPSocket.offMessage

**TCPSocket.offMessage(function callback)**

Cancels listening for the event triggered when the socket receives data.

**Parameters**

**function callback**

Listener function.

**Example Code**

```js
const tcp = ft.createTCPSocket()
const callback = (res) => {
  console.log('message', res)
}
tcp.offMessage(callback)

        Code copied

```

**Errors**

| Error Code | Description |
| --- | --- |
| -1 | System error |
| -2 | Socket interface error, refer to system socket error codes |
| -3 | Send failed, no interface permission |
| -4 | Connection failed |
| 1 | Send failed, parameter error, invalid address |
| 2 | Send failed, parameter error, invalid port |

## [\#](https://super-apps.ai/mop/document/en/develop/api/network.html\#udp-communication) UDP Communication

### [\#](https://super-apps.ai/mop/document/en/develop/api/network.html\#ft-createudpsocket) ft.createUDPSocket

**ft.createUDPSocket()**
Creates a UDP Socket instance.

**Return Value**

**UDPSocket**

A UDP Socket instance.

### [\#](https://super-apps.ai/mop/document/en/develop/api/network.html\#udpsocket) UDPSocket

A UDP Socket instance, using IPv4 protocol by default.

**Methods**

**number UDPSocket.bind(number port)**

Binds a system-randomly assigned available port, or binds a specified port number.

**UDPSocket.setTTL(number ttl)**

Sets the IP\_TTL socket option, used to set the maximum number of hops allowed for an IP datagram transmission.

**UDPSocket.send(Object object)**

Sends a message to the specified IP and port.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| address | string |  | Yes | Address to send the message to |
| port | number |  | Yes | Port number to send the message to |
| message | string/ArrayBuffer |  | Yes | Data to send |
| offset | number | 0 | No | Offset of the data to send, valid only when message is ArrayBuffer type |
| length | number | message.byteLength | No | Length of the data to send, valid only when message is ArrayBuffer type |
| setBroadcast | boolean | false | No | Whether to enable broadcast when sending messages to the specified address, not supported |

**UDPSocket.connect(Object object)**

Pre-connects to the specified IP and port, needs to be used together with the write method.

**UDPSocket.write()**

Usage is the same as the send method. If connect is not called beforehand, it is no different from send (Note: even if connect is called, the address and port parameters still need to be filled in this interface).

**UDPSocket.close()**

Closes the UDP Socket instance, equivalent to destruction.

After closing, the UDP Socket instance can no longer send messages. Each call to UDPSocket.send will trigger an error event, and the message event callback function will no longer be executed. After the UDPSocket instance is created, it will be strongly referenced by Native to ensure it is not GC'd. After UDPSocket.close, the strong reference will be removed, allowing the UDPSocket instance to be GC'd.

**UDPSocket.onClose(function callback)**

Listens for the close event.

**UDPSocket.offClose(function callback)**

Cancels listening for the close event.

**UDPSocket.onError(function callback)**

Listens for the error event.

**UDPSocket.offError(function callback)**

Cancels listening for the error event.

**UDPSocket.onListening(function callback)**

Listens for the event when starting to listen for datagram messages.

**UDPSocket.offListening(function callback)**

Cancels listening for the event when starting to listen for datagram messages.

**UDPSocket.onMessage(function callback)**

Listens for the message received event.

**UDPSocket.offMessage(function callback)**

Cancels listening for the message received event.

**Errors**

| Error Code | Error Message | Description |
| --- | --- | --- |
| -1 |  | System error |
| -2 |  | Socket interface error |
| -3 |  | Send failed, no interface permission |
| 1 |  | Send failed, parameter error, invalid address |
| 2 |  | Send failed, parameter error, invalid port |

[Previous：Interface](https://super-apps.ai/mop/document/en/develop/api/interface.html)[Next：Data Cache](https://super-apps.ai/mop/document/en/develop/api/storage.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)