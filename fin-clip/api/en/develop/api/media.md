<!--
Source URL: https://super-apps.ai/mop/document/en/develop/api/media.html
Extracted: 2026-01-12T23:12:20.640Z (January 12, 2026)
Title: Media | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

# [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#media) Media

## [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#image) Image

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#saveimagetophotosalbum) saveImageToPhotosAlbum

> Supported from Base Library 2.0.7, iOS SDK 2.10.7, Android SDK 2.11.43

**saveImageToPhotosAlbum(Object object)**

Save an image to the system photo album.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| filePath | string |  | Yes | Image file path, can be a temporary file path or a permanent file path, network image paths are not supported |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call (When authorization fails, it returns error message: fail unauthorized user has not granted read external storage, read-write external storage permissions) |
| complete | function |  | No | Callback function when the API call ends (executed whether the call succeeds or fails) |

**Sample Code**

```javascript
ft.saveImageToPhotosAlbum({
  filePath: 'finfile://xxxx',
  success(res) { }
})
```

Note

- Interface Authorization Failure (iOS):

1. User denies authorization, returns error message: unauthorized, user has not granted photo album permission
2. Host-App prohibits Mini-Program from actively requesting permissions, returns error message: unauthorized disableauthorized, SDK is prohibited from requesting photo album permissions

- Interface Authorization Failure (Android):

1. User denies authorization, returns error message: unauthorized user has not granted read external storage, read-write external storage permissions
2. Host-App prohibits Mini-Program from actively requesting permissions, returns error message: unauthorized disableauthorized SDK is prohibited from initiating permission requests

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#previewmedia) previewMedia

Preview images and videos.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| sources | Array.<Object> |  | Yes | List of resources to preview |
| current | number | 0 | No | Index of the currently displayed resource |
| showmenu | boolean | true | No | Whether to display the long-press menu, long-pressing the image displays menus like send to friends, favorite, save image, search, open business card/goto group chat/open Mini-Program (if the image contains corresponding QR code or Mini-Program code) |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function when the API call ends (executed whether the call succeeds or fails) |

**Structure of object.sources**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| url | String |  | Yes | URL of the image or video |
| type | String | image | No | Type of the resource, default is image |
| poster | string |  | No | Cover image of the video |

**Valid values for type**

| Value | Description | Minimum Version |
| --- | --- | --- |
| image | Image |  |
| video | Video |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#previewimage) previewImage

> Supported from Base Library 1.3.9, iOS SDK 2.1.23, Android SDK 2.1.38

**previewImage(Object object)**

Preview images in full screen on a new page.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| urls | Array.<string> |  | Yes | List of image URLs to preview |
| current | string | First item in urls | No | URL of the currently displayed image |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function when the API call ends (executed whether the call succeeds or fails) |

**Sample Code**

```javascript
ft.previewImage({
  current: '', // Current HTTP link of the displayed image
  urls: [] // List of HTTP links of images to preview
})
```

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#getimageinfo) getImageInfo

> Supported from Base Library 1.3.9, iOS SDK 2.1.23, Android SDK 2.1.38

**getImageInfo(Object object)**

Get image information.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| src | string |  | Yes | Path of the image, can be a relative path, temporary file path, storage file path, or network image path |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function when the API call ends (executed whether the call succeeds or fails) |

**object.success callback function**

**Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| width | number | Original width of the image, in px. |
| height | number | Original height of the image, in px. |
| path | string | Local path of the image |
| type | string | Image format |
| orientation | string | Device orientation when the photo was taken |

**Sample Code**

```javascript
ft.getImageInfo({
  src: 'images/a.jpg',
  success(res) {
    console.log(res.width)
    console.log(res.height)
  }
})

ft.chooseImage({
  success(res) {
    ft.getImageInfo({
      src: res.tempFilePaths[0],
      success(res) {
        console.log(res.width)
        console.log(res.height)
      }
    })
  }
})
```

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#compressimage) compressImage

ft.compressImage(Object object)

> Supported from Base Library 2.0.5, iOS SDK 2.10.4, Android SDK 2.11.39

Compress image interface, optional compression quality​

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| src | string |  | Yes | Image path, supports local path, code package path |
| quality | number | 80 | No | Compression quality, range 0～100, lower value means lower quality, higher compression rate (only effective for jpg). |
| compressedWidth | number |  | No | Width of the compressed image, in px, if not filled, defaults to proportional scaling based on compressedHeight. |
| compressedHeight | number |  | No | Height of the compressed image, in px, if not filled, defaults to proportional scaling based on compressedWidth. |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function when the API call ends (executed whether the call succeeds or fails) |

##### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#object-success-callback-function) object.success callback function

##### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#parameters) Parameters

| Property | Type | Description |
| --- | --- | --- |
| tempFilePath | string | Temporary file path of the compressed image (local path) |

**Sample Code**

```javascript
ft.compressImage({
  src: '', // Image path
  quality: 80 // Compression quality
})
```

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#choosefile) chooseFile

Choose files from the file manager (can replace chooseMessageFile).

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| count | number |  | Yes | Maximum number of files that can be selected, can be 0～100 |
| type | string | 'all' | No | Type of the selected files |
| extension | Array.<string> |  | No | Filter by file extension, only valid when type==file. Each item cannot be an empty string. Default is no filtering. |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call (When authorization fails, it returns error message: fail unauthorized user has not granted read-write external storage permissions) |
| complete | function |  | No | Callback function when the API call ends (executed whether the call succeeds or fails) |

**Valid values for object.type**

| Value | Description |
| --- | --- |
| all | Choose from all files |
| video | Only video files can be chosen |
| image | Only image files can be chosen |
| file | Other files except images and videos can be chosen |

Note

- Interface Authorization Failure (Android):

1. User denies authorization, returns error message: unauthorized user has not granted read-write external storage permissions
2. Host-App prohibits Mini-Program from actively requesting permissions, returns error message: unauthorized disableauthorized SDK is prohibited from initiating permission requests

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#choosemessagefile) chooseMessageFile

> Supported from Base Library 1.3.9, requires custom API implementation

Choose files from client conversation

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| count | number | true | Yes | Maximum number of files that can be selected, can be 0～100 |
| type | string | 'all' | No | Type of the selected files |
| extension | Array.<string> |  | No | Filter by file extension, only valid when type==file. Each item cannot be an empty string. Default is no filtering. |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call (When authorization fails, it returns error message: fail unauthorized user has not granted read-write external storage permissions) |
| complete | function |  | No | Callback function when the API call ends (executed whether the call succeeds or fails) |

**Valid values for object.type**

| Value | Description |
| --- | --- |
| all | Choose from all files |
| video | Only video files can be chosen |
| image | Only image files can be chosen |
| file | Other files except images and videos can be chosen |

Note

- Interface Authorization Failure (Android):

1. User denies authorization, returns error message: unauthorized user has not granted read-write external storage permissions
2. Host-App prohibits Mini-Program from actively requesting permissions, returns error message: unauthorized disableauthorized SDK is prohibited from initiating permission requests

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#chooseimage) chooseImage

> Supported from Base Library 1.3.9, iOS SDK 2.1.23, Android SDK 2.1.38

**chooseImage(Object object)**

Choose images from the local photo album or use the camera to take photos.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| count | number | 9 | No | Maximum number of images that can be selected |
| sizeType | Array.<string> | \['original', 'compressed'\] | No | Size of the selected images |
| sourceType | Array.<string> | \['album', 'camera'\] | No | Source of the selected images |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call (When authorization fails, it returns error message: fail unauthorized user has not granted read external storage, read-write external storage permissions) |
| complete | function |  | No | Callback function when the API call ends (executed whether the call succeeds or fails) |

**Valid values for object.sizeType**

| Value | Description |
| --- | --- |
| original | Original image |
| compressed | Compressed image |

**Valid values for object.sourceType**

| Value | Description |
| --- | --- |
| album | Select from photo album |
| camera | Use camera |

**object.success callback function**

**Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| tempFilePaths | Array.<string> | List of local temporary file paths of the images |
| tempFiles | Array.<Object> | List of local temporary files of the images |

**Structure of res.tempFiles**

| Property | Type | Description |
| --- | --- | --- |
| path | string | Local temporary file path |
| size | number | Size of the local temporary file, in B |

**Sample Code**

```javascript
ft.chooseImage({
  count: 1,
  sizeType: ['original', 'compressed'],
  sourceType: ['album', 'camera'],
  success(res) {
    // tempFilePath can be used as the src attribute of an img tag to display the image
    const tempFilePaths = res.tempFilePaths
  }
})
```

Note

- Interface Authorization Failure (iOS):

1. User denies authorization, returns error message: unauthorized, user has not granted photo album permission
2. Host-App prohibits Mini-Program from actively requesting permissions, returns error message: unauthorized disableauthorized, SDK is prohibited from requesting photo album permissions

- Interface Authorization Failure (Android):

1. User denies authorization, returns error message: unauthorized user has not granted read external storage, read-write external storage permissions
2. Host-App prohibits Mini-Program from actively requesting permissions, returns error message: unauthorized disableauthorized SDK is prohibited from initiating permission requests

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#cropimage) cropImage

> Supported from Base Library 3.3.3, iOS SDK 2.44.7, Android SDK 2.44.7

**cropImage(Object object)**

Image cropping interface.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| src | string |  | Yes | Image path, supports local path and code package path |
| cropScale | string |  | Yes | Cropping ratio |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function when the API call ends (executed whether the call succeeds or fails) |

**Valid values for object.cropScale**

| Value | Description |
| --- | --- |
| 16:9 | Aspect ratio of 16:9 |
| 9:16 | Aspect ratio of 9:16 |
| 4:3 | Aspect ratio of 4:3 |
| 3:4 | Aspect ratio of 3:4 |
| 5:4 | Aspect ratio of 5:4 |
| 4:5 | Aspect ratio of 4:5 |
| 1:1 | Aspect ratio of 1:1 |

**object.success callback function**

**Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| tempFilePath | string | Temporary local file path of the cropped image |

**Example Code**

```javascript
ft.cropImage({
  src: 'path/to/image', // Image path
  cropScale: '1:1', // Cropping ratio
})
```

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#editimage) editImage

> Supported from Base Library 3.3.3, iOS SDK 2.44.7, Android SDK 2.44.7

**editImage(Object object)**

Image editing interface.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| src | string |  | Yes | Image path, supports local path and code package path |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function when the API call ends (executed whether the call succeeds or fails) |

**object.success callback function**

**Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| tempFilePath | string | Temporary local file path of the edited image |

**Example Code**

```javascript
ft.editImage({
  src: 'path/to/image' // Image path
})
```

## [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#video) Video

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#savevideotophotosalbum) saveVideoToPhotosAlbum

> Supported from Base Library 2.0.7, iOS SDK 2.10.7, Android SDK 2.11.43

**saveVideoToPhotosAlbum(Object object)**

Saves a video to the system album. Supports MP4 video format.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| filePath | string |  | Yes | Video file path, can be a temporary file path or a permanent file path (local path) |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call (when authorization fails, returns error message: fail unauthorized user did not grant read external storage, read/write external storage permission) |
| complete | function |  | No | Callback function when the API call ends (executed whether the call succeeds or fails) |

**Example Code**

```javascript
ft.saveVideoToPhotosAlbum({
  filePath: 'finfile://xxx',
  success (res) {
    console.log(res.errMsg)
  }
})
```

Note

- API Authorization Failure (iOS):

1. If the user denies authorization, it will return an error message: unauthorized, the user has not granted album permissions.
2. If the Host-App prohibits Mini-Programs from actively requesting permissions, it will return an error message: unauthorized disableauthorized, the SDK is prohibited from requesting album permissions.

- API Authorization Failure (Android):

1. If the user denies authorization, it will return an error message: unauthorized, the user has not granted read external storage, read/write external storage permissions.
2. If the Host-App prohibits Mini-Programs from actively requesting permissions, it will return an error message: unauthorized disableauthorized, the SDK is prohibited from initiating permission requests.

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#createvideocontext) createVideoContext

> Supported from Base Library 2.11.2, iOS version 2.34.1, Android version 2.34.1
> **VideoContext ft.createVideoContext(string id, Object this)**

Creates a video context VideoContext object.

**Parameters**

**string id**

The id of the video component.

**Object this**

In custom components, the `this` of the current component instance to operate on the video component within the component.

**Return Value**

VideoContext

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#videocontext-methods) VideoContext Methods

**VideoContext.play()**

Plays the video.

**VideoContext.pause()**

Pauses the video.

**VideoContext.stop()**

Stops the video.

**VideoContext.seek(number position)**

Jumps to the specified position.

Position in seconds.

**VideoContext.sendDanmu(Object data)**

Sends a bullet screen comment.

**Parameters**

**Object data**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| text | string |  | Yes | Bullet screen text |
| color | string |  | No | Bullet screen color |

**VideoContext.playbackRate(number rate)**

Sets playback speed.

Speed rate, valid values: 0.5/0.8/1.0/1.25/1.5/2.

**VideoContext.requestFullScreen(Object object)**

Enters full screen (not supported in IDE).

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| direction | number |  | No | Sets the video orientation in full screen, if not specified, it will automatically determine based on aspect ratio. Valid values: 0, 90, -90 |

**VideoContext.exitFullScreen()**

Exits full screen (not supported in IDE).

**VideoContext.showStatusBar()**

Displays the status bar, only effective in iOS full screen.

**VideoContext.hideStatusBar()**

Hides the status bar, only effective in iOS full screen.

**VideoContext.requestBackgroundPlayback()**

Enters background audio playback mode (not supported in IDE).

**VideoContext.exitBackgroundPlayback()**

Exits background audio playback mode (not supported in IDE).

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#getvideoinfo) getVideoInfo

> Supported from Base Library 3.1.7, iOS SDK 2.42.13, Android SDK 2.42.13

**getVideoInfo(Object object)**

Gets detailed video information.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| src | string |  | Yes | Video file path, can be a temporary file path or a permanent file path |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function when the API call ends (executed whether the call succeeds or fails) |

**object.success callback function**

**Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| orientation | string | Video orientation |
| type | string | Video format |
| duration | number | Video length |
| size | number | Video size, unit kB |
| width | number | Video width, unit px |
| height | number | Video height, unit px |
| fps | number | Video frame rate |
| bitrate | number | Video bit rate, unit kbps |

**Example Code**

```javascript
ft.getVideoInfo({
  src: 'finfile://tmp_tmp_b118e2e5e2618d4d8bbbb7b0a3ad806a.mp4',
  success(res) {
    console.log(res)
  }
})
```

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#compressvideo) compressVideo

> Supported from Base Library 3.0.3, iOS SDK 2.38.1, Android SDK 2.38.1

**compressVideo(Object object)**

Video compression interface. Developers can specify the compression quality `quality` for compression. For finer control, you can specify `bitrate`, `fps`, and `resolution`. When `quality` is passed in, these three parameters will be ignored. The relevant information of the original video can be obtained through `getVideoInfo`.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| src | string |  | Yes | Video file path, can be a temporary file path or a permanent file path |
| quality | string |  | No | Compression quality |
| bitrate | number |  | Yes | Bitrate, unit kbps |
| fps | number |  | Yes | Frame rate |
| resolution | number |  | Yes | Resolution ratio relative to the original video, range (0, 1\] |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function when the API call ends (executed whether the call succeeds or fails) |

**object.success callback function**

**Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| tempFilePath | string | Temporary file path after compression |
| size | string | Size after compression, unit kB |

**Example Code**

```javascript
ft.compressVideo({
  src: 'finfile://tmp_tmp_b118e2e5e2618d4d8bbbb7b0a3ad806a.mp4',
  bitrate:'300',
  fps: '30',
  resolution: '0.8',
  success(res) {
    console.log(res)
  }
})
```

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#choosevideo) chooseVideo

> Supported from Base Library 1.3.9, iOS SDK 2.1.23, and Android SDK 2.1.38 onwards

**chooseVideo(Object object)**

Select a video from the local album or capture a video using the camera.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| sourceType | Array. | \['album', 'camera'\] | No | Source of the video selection |
| compressed | boolean | true | No | Whether to compress the selected video file |
| maxDuration | number | 60 | No | Maximum recording duration in seconds |
| camera | string | 'back' | No | Default front or rear camera to launch |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call (when authorization fails, returns error message: fail unauthorized user did not grant external storage read permission) |
| complete | function |  | No | Callback function when API call ends (executed on both success and failure) |

**Valid values for object.sourceType**

| Value | Description |
| --- | --- |
| album | Select video from the album |
| camera | Capture video using the camera |

**Valid values for object.camera**

| Value | Description |
| --- | --- |
| back | Launch with the rear camera by default |
| front | Launch with the front camera by default |

**object.success callback function**

**Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| coverImagePath | string | Path to the preview image of the selected video |
| duration | number | Duration of the selected video |
| tempFilePath | string | Temporary file path of the selected video |
| size | number | Size of the selected video data |
| width | number | Original width of the image, in px |
| height | number | Original height of the image, in px |

**Sample Code**

```javascript
ft.chooseVideo({
  sourceType: ['album', 'camera'],
  maxDuration: 60,
  camera: 'back',
  success(res) {
    console.log(res.tempFilePath)
  }
})
```

Note

- API Authorization Failure (iOS):

1. If the user denies authorization, it will return an error message: unauthorized, user did not grant album permission.
2. If the Host-App prohibits Mini-Programs from actively requesting permissions, it will return an error message: unauthorized disableauthorized, SDK is prohibited from requesting album permissions.

- API Authorization Failure (Android):

1. If the user denies authorization, it will return an error message: unauthorized, user did not grant external storage read permission.
2. If the Host-App prohibits Mini-Programs from actively requesting permissions, it will return an error message: unauthorized disableauthorized, SDK is prohibited from initiating permission requests.

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#choosemedia) chooseMedia

**chooseMedia(Object object)**
Capture or select images or videos from the phone's album.

**Parameters** **Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| count | number | 9 | No | Maximum number of files that can be selected |
| mediaType | Array. | \['image', 'video'\] | No | File type |
| sourceType | Array. | \['album', 'camera'\] | No | Source of image and video selection |
| maxDuration | number | 10 | No | Maximum recording duration in seconds. The range is between 3s and 60s. No restrictions for albums. |
| sizeType | Array. | \['original', 'compressed'\] | No | Only valid when mediaType is image, whether to compress the selected file |
| camera | string | 'back' | No | Only effective when sourceType is camera, use front or rear camera |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function when API call ends (executed on both success and failure) |

**Valid values for object.mediaType**

| Value | Description |
| --- | --- |
| image | Can only capture images or select images from the album |
| video | Can only capture videos or select videos from the album |

**Valid values for object.sourceType**

| Value | Description |
| --- | --- |
| album | Select from the album |
| camera | Capture using the camera |

**Valid values for object.camera**

| Value | Description |
| --- | --- |
| back | Use the rear camera |
| front | Use the front camera |

**object.success callback function**

**Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| tempFiles | Array. | List of local temporary files |
| type | string | File type, valid values are image, video |

**Structure of res.tempFiles**

| Property | Type | Description |
| --- | --- | --- |
| tempFilePath | string | Local temporary file path (local path) |
| size | number | Size of the local temporary file, in B |
| duration | number | Duration of the video |
| height | number | Height of the video |
| width | number | Width of the video |
| thumbTempFilePath | string | Temporary file path of the video thumbnail |
| type | string | File type |

**Sample Code**

```javascript
ft.chooseMedia({
  count: 9,
  mediaType: ['image','video'],
  sourceType: ['album', 'camera'],
  maxDuration: 30,
  camera: 'back',
  success(res) {
    console.log(res.tempFiles.tempFilePath)
    console.log(res.tempFiles.size)
  }
})
```

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#previewvideo) previewVideo

> Supported from Base Library 1.3.9, iOS SDK 2.1.23, and Android SDK 2.1.38 onwards

**previewVideo(Object object)**

Preview the video in full screen on a new page.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| url | string |  | Yes | Video resource URL, can be a temporary video path or network video path. |
| autoplay | boolean | false | No | Whether to automatically play the selected video file |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function when API call ends (executed on both success and failure) |

**Sample Code**

```javascript
ft.previewVideo({
  url: 'http://static.tripbe.com/videofiles/20121214/9533522808.f4v.mp4',
  autoplay: true,
  success(res) {
    console.log(res.tempFilePath)
  }
})
```

## [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#audio) Audio

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#stopvoice) stopVoice

> Supported from Base Library 1.3.9, iOS SDK 2.1.23, and Android SDK 2.1.38 onwards

**stopVoice(Object object)**

Stop playing the voice.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function when API call ends (executed on both success and failure) |

**Sample Code**

```javascript
ft.startRecord({
  success(res) {
    const tempFilePath = res.tempFilePath
    ft.playVoice({
      filePath: tempFilePath,
    })

    setTimeout(() => { ft.stopVoice() }, 5000)
  }
})
```

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#setinneraudiooption) setInnerAudioOption

**setInnerAudioOption(Object object)**
Set playback options for InnerAudioContext. After setting, it takes effect globally for the current Mini-Program.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| mixWithOther | boolean | true | No | Whether to mix with other audio, after setting to true, it won't terminate other music within the app |
| obeyMuteSwitch | boolean | true | No | (Only effective on iOS) Whether to follow the mute switch, after setting to false, sound can still be played even in silent mode |
| speakerOn | boolean | true | No | true means play through the speaker, false means play through the earpiece, default value is true. |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function when API call ends (executed on both success and failure) |

**Note**
To ensure overall experience, when speakerOn is true, the client will ignore the content of the mixWithOthers parameter and force mutual exclusion with other audio. Switching to speaker playback during audio playback is not supported. Developers who need to switch can first pause the currently playing audio and record the current pause time point, then switch and resume playback from the original pause time point.

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#playvoice) playVoice

> Supported from Base Library 1.3.9, iOS SDK 2.1.23, and Android SDK 2.1.38 onwards

**playVoice(Object object)**

Start playing the voice, only one voice file is allowed to play at the same time. If the previous voice file hasn't finished playing, it will interrupt the previous voice playback.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| filePath | string |  | Yes | File path of the voice file to be played |
| duration | number | 60 | No | Specify the playback duration, it will automatically stop playing after reaching the specified duration, unit: seconds |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function when API call ends (executed on both success and failure) |

**Sample Code**

```javascript
ft.startRecord({
  success(res) {
    const tempFilePath = res.tempFilePath
    ft.playVoice({
      filePath: tempFilePath,
      complete() { }
    })
  }
})
```

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#pausevoice) pauseVoice

> Supported from Base Library 1.3.9, iOS SDK 2.1.23, and Android SDK 2.1.38 onwards
> **pauseVoice(Object object)**

Pause the currently playing voice. When calling `ft.playVoice` again to play the same file, it will resume playback from where it was paused.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function when API call ends (executed whether the call succeeds or fails) |

**Sample Code**

```javascript
ft.startRecord({
  success(res) {
    const tempFilePath = res.tempFilePath
    ft.playVoice({
      filePath: tempFilePath
    })

    setTimeout(() => { ft.pauseVoice() }, 5000)
  }
})
```

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#getavailableaudiosources) getAvailableAudioSources

> Supported starting from Base Library 3.1.17, iOS SDK 2.42.13, and Android SDK 2.42.13

**getAvailableAudioSources(Object object)**

Get the currently supported audio input sources.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function when API call ends (executed whether the call succeeds or fails) |

**object.success callback function**

**Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| audioSources | Array. | List of supported audio input sources |

**Valid values for res.audioSources**

| Value | Description |
| --- | --- |
| auto | Automatically set; default uses phone microphone; switches to headset microphone when earphones are plugged in. Applicable to all platforms. |
| buildInMic | Phone microphone, iOS only. |
| headsetMic | Headset microphone, iOS only. |
| mic | Microphone (uses phone microphone when no headset is connected, and headset microphone when connected), Android only. |
| camcorder | Same as mic, suitable for recording audio/video content, Android only. |
| voice\_communication | Same as mic, suitable for real-time communication, Android only. |
| voice\_recognition | Same as mic, suitable for voice recognition, Android only. |

**Sample Code**

```javascript
ft.getAvailableAudioSources({
  success(res) {
    console.log(res.audioSources)
  }
})
```

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#createinneraudiocontext) createInnerAudioContext

**InnerAudioContext ft.createInnerAudioContext()**

Create an InnerAudioContext object for audio context.

**Return Value**

**InnerAudioContext**

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#createaudiocontext) createAudioContext

**AudioContext ft.createAudioContext(string id, Object this)**

Create an AudioContext object for audio context.

**Parameters**

**string id**

The ID of the audio component.

**Object this**

In custom components, the `this` instance of the current component to operate on the audio component within the component.

**Return Value**

AudioContext

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#audiocontext) AudioContext

**AudioContext instance, obtainable via ft.createAudioContext.**

AudioContext binds with an audio component through its ID and operates on the corresponding audio component.

**Methods**

- **AudioContext.setSrc(string src)**


Set the audio source URL.

- **AudioContext.play()**


Play the audio.

- **AudioContext.pause()**


Pause the audio.

- **AudioContext.seek(number position)**


Jump to a specified position.


**Sample Code**

```html
<!-- audio.FXML -->
<audio src="{{src}}" id="myAudio"></audio>

<button type="primary" bindtap="audioPlay">Play</button>
<button type="primary" bindtap="audioPause">Pause</button>
<button type="primary" bindtap="audio14">Set current playback time to 14 seconds</button>
<button type="primary" bindtap="audioStart">Go back to the beginning</button>
```

```javascript
// audio.js
Page({
  onReady(e) {
    // Use ft.createAudioContext to get the audio context
    this.audioCtx = ft.createAudioContext('myAudio')
    this.audioCtx.setSrc('http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46')
    this.audioCtx.play()
  },
  data: {
    src: ''
  },
  audioPlay() {
    this.audioCtx.play()
  },
  audioPause() {
    this.audioCtx.pause()
  },
  audio14() {
    this.audioCtx.seek(14)
  },
  audioStart() {
    this.audioCtx.seek(0)
  }
})
```

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#inneraudiocontext) InnerAudioContext

**InnerAudioContext instance, obtainable via ft.createInnerAudioContext.**

**Properties**

- **string src**


The URL of the audio resource for direct playback.

- **number startTime**


The start position for playback (in seconds), default is 0.

- **boolean autoplay**


Whether to automatically start playback, default is false.

- **boolean loop**


Whether to loop playback, default is false.

- **number volume**


Volume level. Range is 0~1. Default is 1.

- **number duration**


The length of the current audio (in seconds). Only returns when there is a valid src (read-only).

- **number currentTime**


The current playback position of the audio (in seconds). Only returns when there is a valid src (read-only).

- **number paused**


Whether the audio is currently paused or stopped (read-only).

- **number buffered**


The buffered time point of the audio, ensuring that content from the current playback time to this time point has been buffered (read-only).

- **number referrerPolicy**


Unsupported property, sets whether to send referrer and sending behavior.


**Methods**

- **InnerAudioContext.play()**


Play the audio.

- **InnerAudioContext.pause()**


Pause the audio. Resuming playback will continue from the paused position.

- **InnerAudioContext.stop()**


Stop the audio. Resuming playback will start from the beginning.

- **InnerAudioContext.seek(number position)**


Jump to a specified position.

- **InnerAudioContext.destroy()**


Destroy the current instance.

- **InnerAudioContext.onCanplay(function callback)**


Listen for the event when the audio enters a playable state. However, smooth playback is not guaranteed afterward.

- **InnerAudioContext.offCanplay(function callback)**


Cancel listening for the event when the audio enters a playable state.

- **InnerAudioContext.onPlay(function callback)**


Listen for the audio playback event.

- **InnerAudioContext.offPlay(function callback)**


Cancel listening for the audio playback event.

- **InnerAudioContext.onPause(function callback)**


Listen for the audio pause event.

- **InnerAudioContext.offPause(function callback)**


Cancel listening for the audio pause event.

- **InnerAudioContext.onStop(function callback)**


Listen for the audio stop event.

- **InnerAudioContext.offStop(function callback)**


Cancel listening for the audio stop event.

- **InnerAudioContext.onEnded(function callback)**


Listen for the event when the audio naturally finishes playing.

- **InnerAudioContext.offEnded(function callback)**


Cancel listening for the event when the audio naturally finishes playing.

- **InnerAudioContext.onTimeUpdate(function callback)**


Listen for the audio playback progress update event.

- **InnerAudioContext.offTimeUpdate(function callback)**


Cancel listening for the audio playback progress update event.

- **InnerAudioContext.onError(function callback)**


Listen for the audio playback error event.

- **InnerAudioContext.offError(function callback)**


Unlisten to the audio playback error event

- **InnerAudioContext.onWaiting(function callback)**


Listen for the audio loading event. Triggered when audio playback needs to pause and load due to insufficient data.

- **InnerAudioContext.offWaiting(function callback)**


Unlisten to the audio loading event

- **InnerAudioContext.onSeeking(function callback)**


Listen for the audio seeking operation event

- **InnerAudioContext.offSeeking(function callback)**


Unlisten to the audio seeking operation event

- **InnerAudioContext.onSeeked(function callback)**


Listen for the completion of the audio seeking operation event

- **InnerAudioContext.offSeeked(function callback)**


Unlisten to the completion of the audio seeking operation event


**Sample Code**

```javascript
// innerAudioContext.js
const innerAudioContext = ft.createInnerAudioContext()
innerAudioContext.autoplay = true
innerAudioContext.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'
innerAudioContext.onPlay(() => {
  console.log('Playback started')
})
innerAudioContext.onError((res) => {
  console.log(res.errMsg)
  console.log(res.errCode)
})
```

## [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#background-audio) Background Audio

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#stopbackgroundaudio) stopBackgroundAudio

Stop playing music.

**ft.stopBackgroundAudio(Object object)**

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function for when the API call ends (executed whether successful or failed) |

**Sample Code**

```javascript
ft.stopBackgroundAudio()
```

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#seekbackgroundaudio) seekBackgroundAudio

Control music playback progress

**ft.seekBackgroundAudio(Object object)**

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| position | number | \-\-\- | Yes | Music position, in seconds |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function for when the API call ends (executed whether successful or failed) |

**Sample Code**

```javascript
ft.seekBackgroundAudio({
  position: 30
})
```

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#playbackgroundaudio) playBackgroundAudio

Use the background player to play music

**ft.playBackgroundAudio(Object object)**

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| dataUrl | string |  | Yes | Music link, currently supports formats m4a, aac, mp3, wav |
| title | string |  | No | Music title |
| coverImgUrl | string |  | No | Cover URL |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function for when the API call ends (executed whether successful or failed) |

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#pausebackgroundaudio) pauseBackgroundAudio

Pause music playback

**ft.pauseBackgroundAudio(Object object)**

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function for when the API call ends (executed whether successful or failed) |

**Sample Code**

```javascript
ft.pauseBackgroundAudio()
```

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#onbackgroundaudiostop) onBackgroundAudioStop

Listen for music stop events

**ft.onBackgroundAudioStop(function callback)**

**Parameters**

**function callback**

Callback function for the music stop event

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#onbackgroundaudioplay) onBackgroundAudioPlay

Listen for music playback events

**ft.onBackgroundAudioPlay(function callback)**

**Parameters**

**function callback**

Callback function for the music playback event

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#onbackgroundaudiopause) onBackgroundAudioPause

Listen for music pause events

**ft.onBackgroundAudioPause(function callback)**

**Parameters**

**function callback**

Callback function for the music pause event

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#getbackgroundaudioplayerstate) getBackgroundAudioPlayerState

Get the state of background music playback

**ft.getBackgroundAudioPlayerState(Object object)**

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function for when the API call ends (executed whether successful or failed) |

**object.success callback function**

**Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| duration | number | Length of the selected audio (in seconds), returned only when music is playing |
| currentPosition | number | Playback position of the selected audio (in seconds), returned only when music is playing |
| status | number | Playback status |
| downloadPercent | number | Download progress percentage of the audio, returned only when music is playing |
| dataUrl | string | Song data link, returned only when music is playing |

**Valid values for status**

| Valid Value | Description |
| --- | --- |
| 0 | Paused |
| 1 | Playing |
| 2 | No music playing |

**Sample Code**

```javascript
ft.getBackgroundAudioPlayerState({
  success (res) {
    const status = res.status
    const dataUrl = res.dataUrl
    const currentPosition = res.currentPosition
    const duration = res.duration
    const downloadPercent = res.downloadPercent
  }
})
```

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#getbackgroundaudiomanager) getBackgroundAudioManager

Get the globally unique background audio manager. If the Mini-Program enters the background and the audio is playing, it can continue to play. However, the background state cannot manipulate the audio playback state via API calls.

**Return Value**

BackgroundAudioManager

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#backgroundaudiomanager) BackgroundAudioManager

**BackgroundAudioManager instance, can be obtained via ft.getBackgroundAudioManager.**

Note:
iOS BackgroundAudioManager's ability to play audio in the background requires users to manually add background Modes at target-capabilities and check audio, AirPlay, and Picture in Picture.

**Properties**

- **string src**

​
The data source of the audio. Defaults to an empty string; setting a new src will automatically start playback. Currently supported formats include m4a, aac, mp3, wav.

- **number startTime**

​
The starting position of the audio playback (in seconds).

- **string title**

​
Audio title, used for the native audio player's audio title (required). The share feature of the native audio player will also use this value as the card title.

- **string epname**

​
Album name. The share feature of the native audio player will also use this value as the card description.

- **string singer**

​
Singer name. The share feature of the native audio player will also use this value as the card description.

- **string coverImgUrl**

​
Cover image URL, used as the background image for the native audio player. The share feature of the native audio player will also use this image as the card image and background.

- **string webUrl**

​
Page link. The share feature of the native audio player will also use this value as the card description.

- **string protocol**

​
Audio protocol. Playable formats depend on the system's built-in player.

- **number playbackRate**

​
Playback speed. Range 0.5-2.0, default is 1. (Android requires version 6 and above)

- **number duration**

​
Current length of the audio (in seconds), returned only with a valid src. (Read-only)

- **number currentTime**

​
Current playback position of the audio (in seconds), returned only with a valid src. (Read-only)

- **boolean paused**

​
Whether the audio is currently paused or stopped. (Read-only)

- **number buffered**

​
Time the audio has been buffered, ensuring content from the current playback time to this time is buffered. (Read-only)

- **string referrerPolicy**

​
Not supported


**Methods**

- **BackgroundAudioManager.play()**


Play

- **BackgroundAudioManager.pause()**


Pause music

- **BackgroundAudioManager.seek(number currentTime)**


Jump to the specified position

- **BackgroundAudioManager.stop()**


Stop music

- **BackgroundAudioManager.onCanplay(function callback)**


Listen for the event when audio becomes playable. However, smooth playback is not guaranteed afterward.

​

- **BackgroundAudioManager.onPlay(function callback)**


Listen for the audio playback event

- **BackgroundAudioManager.onPause(function callback)**


Listen for the audio pause event

- **BackgroundAudioManager.onStop(function callback)**


Listen for the audio stop event

- **BackgroundAudioManager.onEnded(function callback)**


Listen for the event when audio naturally plays to the end

- **BackgroundAudioManager.onTimeUpdate(function callback)**


Listen for the audio playback progress update event

- **BackgroundAudioManager.onError(function callback)**


Listen for the audio playback error event

- **BackgroundAudioManager.onWaiting(function callback)**


Listen for the audio loading event. Triggered when audio playback needs to pause and load due to insufficient data.

- **BackgroundAudioManager.onSeeking(function callback)**


Listen for the audio seeking operation event

- **BackgroundAudioManager.onSeeked(function callback)**


Listen for the completion of the audio seeking operation event

- **BackgroundAudioManager.onNext(function callback)**


Listen for the user clicking the next track event on the system music playback panel (iOS only)

- **BackgroundAudioManager.onPrev(function callback)**


Listen for the user clicking the previous track event on the system music playback panel (iOS only)
**Sample Code**


```javascript
const backgroundAudioManager = ft.getBackgroundAudioManager()

backgroundAudioManager.title = 'This Moment'
backgroundAudioManager.epname = 'This Moment'
backgroundAudioManager.singer = 'Xu Wei'
backgroundAudioManager.coverImgUrl = 'http://xxx'
// It will start playing automatically after setting the src
backgroundAudioManager.src = 'http://xxx'
```

## [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#real-time-audio-and-video) Real-Time Audio and Video

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#createlivepushercontext) createLivePusherContext

**createLivePusherContext()**

Creates a LivePusherContext object for the live-pusher context.

**Return Value**

**LivePusherContext**

**Methods**

- **LivePusherContext.exitPictureInPicture(Object object)**


Exits picture-in-picture mode. This method can be called on any page.

- **LivePusherContext.start(Object object)**


Starts streaming and simultaneously enables camera preview.

- **LivePusherContext.stop(Object object)**


Stops streaming and simultaneously disables camera preview.

- **LivePusherContext.pause(Object object)**


Pauses streaming.

- **LivePusherContext.resume(Object object)**


Resumes streaming.

- **LivePusherContext.switchCamera(Object object)**


Switches between front and rear cameras.

- **LivePusherContext.startPreview(Object object)**


Enables camera preview.

- **LivePusherContext.stopPreview(Object object)**


Disables camera preview.


### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#createliveplayercontext) createLivePlayerContext

**createLivePlayerContext()**

Creates a LivePlayerContext object for the live-player context. It is recommended to use ft.createSelectorQuery to obtain the context object.

**Parameters**

**string id**

The ID of the live-player component.

**Object this**

In custom components, the `this` of the current component instance to operate the live-player component inside the component.

**Return Value**

**LivePlayerContext**

**Methods**

- **LivePlayerContext.play(Object object)**


Plays the stream.

- **LivePlayerContext.stop(Object object)**


Stops the stream.

- **LivePlayerContext.mute(Object object)**


Mutes the stream.

- **LivePlayerContext.pause(Object object)**


Pauses the stream.

- **LivePlayerContext.resume(Object object)**


Resumes the stream.

- **LivePlayerContext.exitPictureInPicture(Object object)**


Exits picture-in-picture mode. This method can be called on any page.


## [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#recording) Recording

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#stoprecord) stopRecord

> Supported from Base Library 1.3.9, iOS SDK 2.1.23, Android SDK 2.1.38 onwards; requires Extension SDK

**stopRecord(Object object)**

Stops recording.

**Sample Code**

```javascript
ft.startRecord({
  success(res) {
    const tempFilePath = res.tempFilePath
  }
})
setTimeout(function () {
  ft.stopRecord() // Ends recording
}, 10000)
```

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#startrecord) startRecord

> Supported from Base Library 1.3.9, iOS SDK 2.1.23, Android SDK 2.1.38 onwards; requires Extension SDK

**startRecord(Object object)**

Starts recording. When ft.stopRecord is actively called or recording exceeds 1 minute, it automatically ends. This API cannot be invoked when the user leaves the Mini-Program.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| success | function |  | No | Callback function for successful API invocation |
| fail | function |  | No | Callback function for failed API invocation (when authorization fails, returns error message: fail unauthorized User has not granted camera or audio recording permissions) |
| complete | function |  | No | Callback function for API invocation completion (executed regardless of success or failure) |

**object.success Callback Function**

**Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| tempFilePath | string | Temporary path of the recorded file |

**Sample Code**

```javascript
ft.startRecord({
  success(res) {
    const tempFilePath = res.tempFilePath
  }
})
setTimeout(function () {
  ft.stopRecord() // Ends recording
}, 10000)
```

Note

- API Authorization Failure (iOS):

1. If the user denies authorization, it returns an error message: unauthorized, User has not granted microphone permission.
2. If the Host-App prohibits the Mini-Program from actively requesting permissions, it returns an error message: unauthorized disableauthorized, SDK is prohibited from requesting microphone permissions.

- API Authorization Failure (Android):

1. If the user denies authorization, it returns an error message: unauthorized User has not granted camera or audio recording permissions.
2. If the Host-App prohibits the Mini-Program from actively requesting permissions, it returns an error message: unauthorized disableauthorized SDK is prohibited from initiating permission requests.

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#getrecordermanager) getRecorderManager

**RecorderManager ft.getRecorderManager()**

Gets the globally unique RecorderManager.

**Return Value**

**RecorderManager**

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#recordermanager) RecorderManager

Globally unique recorder manager.

**Methods**

- **RecorderManager.start(Object object)**


Starts recording.

**Parameters**

**Object object**



| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| duration | number | 60000 | No | Duration of recording in ms, maximum value 600000 (10 minutes) |
| sampleRate | number | 8000 | No | Sample rate (not supported on PC) |
| numberOfChannels | number | 2 | No | Number of recording channels |
| encodeBitRate | number | 48000 | No | Encoding bitrate, see valid values in the table below |
| format | string | aac | No | Audio format, note: due to encoding restrictions on the development tool, format will not take effect, recording will always generate a webm file |
| frameSize | number |  | No | Specifies frame size in KB. After passing frameSize, every time a specified frame size of content is recorded, it will callback the recorded file content. If not specified, no callback will occur. iOS only supports mp3, aac, pcm formats. |
| audioSource | string | auto | No | Specifies the audio input source for recording, can be obtained via ft.getAvailableAudioSources |


**Sample Rate and Encoding Bitrate Restrictions**

**Each sample rate has a corresponding range of valid encoding bitrates. Setting invalid sample rates or encoding bitrates will cause recording to fail. The specific correspondence is shown in the table below.**



| Sample Rate | Encoding Bitrate |
| --- | --- |
| 8000 | 16000 ~ 48000 |
| 11025 | 16000 ~ 48000 |
| 12000 | 24000 ~ 64000 |
| 16000 | 24000 ~ 96000 |
| 22050 | 32000 ~ 128000 |
| 24000 | 32000 ~ 128000 |
| 32000 | 48000 ~ 192000 |
| 44100 | 64000 ~ 320000 |
| 48000 | 64000 ~ 320000 |


**sampleRate**



| Valid Values | Description |
| --- | --- |
| 8000 | 8000 sample rate |
| 11025 | 11025 sample rate |
| 16000 | 16000 sample rate |
| 22050 | 22050 sample rate |
| 24000 | 24000 sample rate |
| 32000 | 32000 sample rate |
| 44100 | 44100 sample rate |
| 48000 | 48000 sample rate |


**numberOfChannels**



| Valid Values | Description |
| --- | --- |
| 1 | 1 channel |
| 2 | 2 channels |


**format**



| Valid Values | Description |
| --- | --- |
| mp3 | mp3 format |
| aac | aac format |
| wav | wav format |
| PCM | pcm format |


**audioSource**



| Valid Values | Description |
| --- | --- |
| auto | Automatically set, default uses phone microphone, switches to headset microphone when earphones are plugged in, applicable to all platforms |
| buildInMic | Phone microphone, iOS only |
| headsetMic | Wired headset microphone, iOS only |
| mic | Microphone (uses phone microphone when no earphones are plugged in, switches to headset microphone when earphones are plugged in), Android only |
| camcorder | Same as mic, suitable for recording audio and video content, Android only |
| voice\_communication | Same as mic, suitable for real-time communication, Android only |
| voice\_recognition | Same as mic, suitable for voice recognition, Android only |

- **RecorderManager.pause()**


Pauses recording

- **RecorderManager.resume()**


Resume recording

- **RecorderManager.stop()**


Stop recording

**Parameters**

**Object object**



| Property | Type | Description |
| --- | --- | --- |
| tempFilePath | string | Temporary path of the recording file (local path) |
| duration | number | Total recording duration, in ms |
| fileSize | number | Size of the recording file, in Bytes |

- **RecorderManager.onStart(function callback)**


Listen for the recording start event

- **RecorderManager.onResume(function callback)**


Listen for the recording resume event

- **RecorderManager.onPause(function callback)**


Listen for the recording pause event

- **RecorderManager.onStop(function callback)**


Listen for the recording stop event

- **RecorderManager.onFrameRecorded(function callback)**


Listen for the event when a specified frame size has been recorded. If `frameSize` is set, this event will be triggered.

- **RecorderManager.onError(function callback)**


Listen for the recording error event

- **RecorderManager.onInterruptionBegin(function callback)**


Listen for the event when recording is interrupted due to system occupation. The `pause` event will be triggered after this event.

- **RecorderManager.onInterruptionEnd(function callback)**


Listen for the end of the recording interruption event. After receiving the `interruptionBegin` event, all recordings within the Mini-Program will pause, and only after receiving this event can recording succeed again.


**Sample Code**

```javascript
const recorderManager = ft.getRecorderManager()

recorderManager.onStart(() => {
  console.log('recorder start')
})
recorderManager.onPause(() => {
  console.log('recorder pause')
})
recorderManager.onStop((res) => {
  console.log('recorder stop', res)
  const { tempFilePath } = res
})
recorderManager.onFrameRecorded((res) => {
  const { frameBuffer } = res
  console.log('frameBuffer.byteLength', frameBuffer.byteLength)
})

const options = {
  duration: 10000,
  sampleRate: 44100,
  numberOfChannels: 1,
  encodeBitRate: 192000,
  format: 'aac',
  frameSize: 50
}

recorderManager.start(options)
```

Note

- Interface authorization failure (iOS):

1. If the user denies authorization, an error message will be returned: `unauthorized`, indicating that microphone permission was not granted.
2. If the Host-App prohibits the Mini-Program from actively requesting permissions, an error message will be returned: `unauthorized disableauthorized`, indicating that the SDK is prohibited from requesting microphone permissions.

## [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#camera) Camera

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#createcameracontext) createCameraContext

**createCameraContext()**

Create a camera context `CameraContext` object.

**Return Value**

**CameraContext**

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#cameracontext-oncameraframe) CameraContext.onCameraFrame

CameraFrameListener CameraContext.onCameraFrame(function callback)

Get real-time frame data from the Camera.

#### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#parameters-2) Parameters

#### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#function-callback) function callback

Callback function

#### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#parameters-3) Parameters

#### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#object-res) Object res

| Property | Type | Description |
| --- | --- | --- |
| width | number | Width of the image data rectangle |
| height | number | Height of the image data rectangle |
| data | ArrayBuffer | Image pixel data, one-dimensional array where every four items represent the rgba of a pixel |

#### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#return-value) Return Value

#### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#cameraframelistener) CameraFrameListener

Note: To use this interface, you must specify `frame-size` in the camera component properties.

#### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#sample-code) Sample Code

```javascript
const context = ft.createCameraContext()
const listener = context.onCameraFrame((frame) => {
  console.log(frame.data instanceof ArrayBuffer, frame.width, frame.height)
})
listener.start()
```

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#cameracontext-setzoom) CameraContext.setZoom

CameraContext.setZoom(Object object)

Set the zoom level

#### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#parameters-4) Parameters

#### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#object-object) Object object

| Property | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| zoom | number |  | Yes | Zoom level, range \[1, maxZoom\]. `zoom` can take decimal values, accurate to one decimal place. `maxZoom` can be obtained from the return value of `bindinitdone`. |
| success | function |  | No | Callback function for successful interface call |
| fail | function |  | No | Callback function for failed interface call |
| complete | function |  | No | Callback function for interface call completion (executed whether the call succeeds or fails) |

#### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#object-success-callback-function-2) object.success Callback Function

#### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#parameters-5) Parameters

| Property | Type | Description |
| --- | --- | --- |
| zoom | number | The actual zoom level set. Due to system limitations, some devices may not be able to set the exact specified value and will use the closest possible value instead. |

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#cameracontext-startrecord) CameraContext.startRecord

CameraContext.startRecord(Object object)

Start video recording

#### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#parameters-6) Parameters

#### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#object-object-2) Object object

| Property | Type | Default | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| timeout | number | 30 | No | Maximum recording duration, in seconds, cannot exceed 5 minutes (300 seconds) |  |
| timeoutCallback | function |  | No | Triggered when exceeding `timeout` or when the page onHide occurs |  |
| success | function |  | No | Callback function for successful interface call |  |
| fail | function |  | No | Callback function for failed interface call |  |
| complete | function |  | No | Callback function for interface call completion (executed whether the call succeeds or fails) |  |

#### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#object-timeoutcallback-callback-function) object.timeoutCallback Callback Function

#### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#parameters-7) Parameters

| Property | Type | Description |
| --- | --- | --- |
| tempThumbPath | string | Temporary path of the cover image file (local path) |
| tempVideoPath | string | Temporary path of the video file (local path) |

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#cameracontext-stoprecord) CameraContext.stopRecord

CameraContext.stopRecord(Object object)

Stop video recording

#### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#parameters-8) Parameters

#### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#object-object-3) Object object

| Property | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| compressed | boolean | false | No | Enable video compression, with the same effect as `chooseVideo` |
| success | function |  | No | Callback function for successful interface call |
| fail | function |  | No | Callback function for failed interface call |
| complete | function |  | No | Callback function for interface call completion (executed whether the call succeeds or fails) |

#### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#object-success-callback-function-3) object.success Callback Function

#### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#parameters-9) Parameters

| Property | Type | Description |
| --- | --- | --- |
| tempThumbPath | string | Temporary path of the cover image file (local path) |
| tempVideoPath | string | Temporary path of the video file (local path) |

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#cameracontext-takephoto) CameraContext.takePhoto

CameraContext.takePhoto(Object object)

Take a photo

#### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#parameters-10) Parameters

#### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#object-object-4) Object object

| Property | Type | Default | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| quality | string | normal | No | Image quality, high/normal/low |  |
| success | function |  | No | Callback function for successful interface call |  |
| fail | function |  | No | Callback function for failed interface call |  |
| complete | function |  | No | Callback function for interface call completion (executed whether the call succeeds or fails) |  |

#### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#object-success-callback-function-4) object.success Callback Function

#### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#parameters-11) Parameters

| Property | Type | Description |
| --- | --- | --- |
| tempImagePath | string | Temporary path of the photo file (local path), Android uses jpg format, iOS uses png |

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#cameraframelistener-start) CameraFrameListener.start

CameraFrameListener.start(Object object)

Start listening to frame data

#### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#parameters-12) Parameters

#### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#object-object-5) Object object

| Property | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| success | function |  | No | Callback function for successful interface call |
| fail | function |  | No | Callback function for failed interface call |
| complete | function |  | No | Callback function for interface call completion (executed whether the call succeeds or fails) |

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#cameraframelistener-stop) CameraFrameListener.stop

CameraFrameListener.stop(Object object)

Stop listening to frame data

#### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#parameters-13) Parameters

#### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#object-object-6) Object object

| Property | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| success | function |  | No | Callback function for successful interface call |
| fail | function |  | No | Callback function for failed interface call |
| complete | function |  | No | Callback function for interface call completion (executed whether the call succeeds or fails) |

## [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#rich-text) Rich Text

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#editorcontext-focus) EditorContext.focus

**EditorContext.focus(Object object)**

Focus the editor.

Note: Due to system limitations on iOS, the focus method cannot be used normally.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function for when the API call ends (executed whether successful or failed) |

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#editorcontext-blur) EditorContext.blur

**EditorContext.blur(Object object)**

Defocus the editor and simultaneously hide the keyboard.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function for when the API call ends (executed whether successful or failed) |

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#editorcontext-clear) EditorContext.clear

**EditorContext.clear(Object object)**

Clear the editor's content.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function for when the API call ends (executed whether successful or failed) |

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#editorcontext-format) EditorContext.format

**EditorContext.format(string name, string value)**

Modify styles.

**Parameters**

**string name**

Property

**string value**

Value

**Supported Style List**

| Property | Value |
| --- | --- |
| bold |  |
| italic |  |
| underline |  |
| strike |  |
| ins |  |
| script | sub / super |
| header | H1 / H2 / h3 / H4 / h5 / H6 |
| align | left / center / right / justify |
| direction | rtl |
| indent | -1 / +1 |
| list | ordered / bullet / check |
| color | hex color |
| backgroundColor | hex color |
| margin/marginTop/marginBottom/marginLeft/marginRight | css style |
| padding/paddingTop/paddingBottom/paddingLeft/paddingRight | css style |
| font/fontSize/fontStyle/fontVariant/fontWeight | css style |
| lineHeight | css style |
| letterSpacing | css style |
| textDecoration | css style |
| textIndent | css style |
| wordWrap | css style |
| wordBreak | css style |
| whiteSpace | css style |

Applying a style to a selected area that already has the style will cancel it. "css style" refers to the allowed values specified in CSS.

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#editorcontext-getcontents) EditorContext.getContents

**EditorContext.getContents(Object object)**

Get the editor's content.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function for when the API call ends (executed whether successful or failed) |

**object.success callback function**

**Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| html | string | HTML content with tags |
| text | string | Plain text content |
| delta | Object | Delta object representing the content |

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#editorcontext-getselectiontext) EditorContext.getSelectionText

**EditorContext.getSelectionText(Object object)**

Get the plain text content of the selected region within the editor. If the editor is defocused or no range is selected, the returned content will be empty.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function for when the API call ends (executed whether successful or failed) |

**object.success callback function**

**Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| text | string | Plain text content |

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#editorcontext-insertdivider) EditorContext.insertDivider

**EditorContext.insertDivider(Object object)**

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function for when the API call ends (executed whether successful or failed) |

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#editorcontext-insertimage) EditorContext.insertImage

**EditorContext.insertImage(Object object)**

Insert an image.

When the address is a temporary file, the <img> tag in the obtained HTML format content of the editor will have the attribute data-local added, and the delta format content will add the data-local field to the image attributes property, which will hold the passed temporary file address.

Developers can choose to upload images to the server during the submission phase and replace them with network addresses after obtaining them. When replacing, for HTML content, the src value of the <img> tag should be replaced, and for delta content, the insert { image: abc } value should be replaced.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| src | string |  | Yes | Image address, only supports http(s), base64, cloud images (2.8.0), temporary files (2.8.3). |
| alt | string |  | No | Alternative text when the image cannot be displayed |
| width | string |  | No | Image width (pixels/percentage) |
| height | string |  | No | Image height (pixels/percentage) |
| extClass | string |  | No | Class name added to the img tag of the image, supported from Base Library 3.8.5 onwards |
| nowrap | boolean | false | No | Whether to wrap, supported from Base Library 3.8.5 onwards |
| data | Object |  | No | Data serialized into name=value;name1=value2 format attached to the data-custom attribute |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function for when the API call ends (executed whether successful or failed) |

**Sample Code**

```javascript
this.editorCtx.insertImage({
  src: 'xx',
  width: '100px',
  height: '50px',
  extClass: className
})
```

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#editorcontext-inserttext) EditorContext.insertText

**EditorContext.insertText(Object object)**

Overwrite the current selection and set a piece of text.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| text | string |  | No | Text content |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function for when the API call ends (executed whether successful or failed) |

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#editorcontext-redo) EditorContext.redo

**EditorContext.redo(Object object)**

Redo.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function for when the API call ends (executed whether successful or failed) |

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#editorcontext-removeformat) EditorContext.removeFormat

**EditorContext.removeFormat(Object object)**

Clear the styles of the current selection.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function for when the API call ends (executed whether successful or failed) |

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#editorcontext-scrollintoview) EditorContext.scrollIntoView

**EditorContext.scrollIntoView()**

Scrolls the editor's cursor into the visible area of the window.

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#editorcontext-setcontents) EditorContext.setContents

**EditorContext.setContents(Object object)**

Initialize the editor's content. When both HTML and delta are present, only delta takes effect.

**Parameters** **Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| html | string |  | No | HTML content with tags |
| delta | Object |  | No | Delta object representing the content |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function for when the API call ends (executed whether successful or failed) |

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#editorcontext-undo) EditorContext.undo

**EditorContext.undo(Object object)**

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function for when the API call ends (executed whether successful or failed) |

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#editorcontext-getselection) EditorContext.getSelection

**EditorContext.getSelection(Object object)**

Get the current selection

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function for when the API call ends (executed whether successful or failed) |

**object.success callback function**

**Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| range | Object | Selection position, index is the start position, length is the selection length |

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#editorcontext-deletetext) EditorContext.deleteText

**EditorContext.deleteText(Object object)**

Delete the content of the specified selection area

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| index | number |  | Yes | Start position of the selection |
| length | number |  | No | Length of the selection |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function for when the API call ends (executed whether successful or failed) |

### [\#](https://super-apps.ai/mop/document/en/develop/api/media.html\#editorcontext-insertcustomblock) EditorContext.insertCustomBlock

> Supported from Base Library 3.10.1

**EditorContext.insertCustomBlock(Object object)**

Insert a custom block.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| nowrap | boolean | false | No | Whether to automatically wrap after inserting the custom block, default is to wrap |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function for when the API call ends (executed whether successful or failed) |

**object.success callback function**

**Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| blockId | Object | Custom block identifier, must be used together with the [editor-portal](https://super-apps.ai/mop/document/en/develop/component/form.html#editor-portal) component. |