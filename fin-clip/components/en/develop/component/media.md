<!--
Source URL: https://super-apps.ai/mop/document/en/develop/component/media.html
Extracted: 2026-01-12T23:14:20.671Z (January 12, 2026)
Title: Media Components | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
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
Canvas](https://super-apps.ai/mop/document/en/develop/component/canvas.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Open Abilities](https://super-apps.ai/mop/document/en/develop/component/media.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Native Component Intro](https://super-apps.ai/mop/document/en/develop/component/original.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Navigation Bar](https://super-apps.ai/mop/document/en/develop/component/navigation-bar.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Page Meta](https://super-apps.ai/mop/document/en/develop/component/meta.html)

# [\#](https://super-apps.ai/mop/document/en/develop/component/media.html\#media-components) Media Components

## [\#](https://super-apps.ai/mop/document/en/develop/component/media.html\#media-component-description) Media Component Description

| Component | Description | Minimum Version | Remarks |
| --- | --- | --- | --- |
| audio | Audio | 1.0.0 |  |
| image | Image | 1.0.0 |  |
| video | Video | 1.0.0 |  |
| camera | Camera | 2.9.3 |  |
| live-player | Real-time Audio Player | 2.10.1 |  |
| live-pusher | Real-time Audio Recorder | 2.10.1 |  |
| voip-room | Multi-person Audio/Video Chat | Not Supported |  |

## [\#](https://super-apps.ai/mop/document/en/develop/component/media.html\#audio) audio

Please Note

The audio component is no longer maintained. Please use the wx.createInnerAudio API to handle audio playback.

| Property | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| id | string |  | No | Unique identifier for the audio component | 1.0.0 |
| src | string |  | No | Resource address of the audio to be played | 1.0.0 |
| loop | boolean | false | No | Whether to loop playback | 1.0.0 |
| controls | boolean | false | No | Whether to display default controls | 1.0.0 |
| poster | string |  | No | Image resource address of the audio cover on the default controls. Setting poster is invalid if the controls attribute value is false | 1.0.0 |
| name | string | Unknown Audio | No | Audio name on the default controls. Setting name is invalid if the controls attribute value is false | 1.0.0 |
| author | string | Unknown Author | No | Author name on the default controls. Setting author is invalid if the controls attribute value is false | 1.0.0 |
| binderror | eventhandle |  | No | Triggered when an error occurs, detail = {errMsg:MediaError.code} | 1.0.0 |
| bindplay | eventhandle |  | No | Triggered when playback starts/resumes, detail = {} | 1.0.0 |
| bindpause | eventhandle |  | No | Triggered when playback is paused | 1.0.0 |
| bindtimeupdate | eventhandle |  | No | Triggered when playback progress changes, detail = {currentTime, duration} | 1.0.0 |
| bindended | eventhandle |  | No | Triggered when playback reaches the end | 1.0.0 |

## [\#](https://super-apps.ai/mop/document/en/develop/component/media.html\#image) image

| Property | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| src | string |  | No | Image resource address | 2.11.4 |
| mode | string | scaleToFill | No | Image cropping and scaling mode | 2.11.4 |
| binderror | eventhandle |  | No | Triggered when an error occurs, event.detail = {errMsg} | 2.11.4 |
| bindload | eventhandle |  | No | Triggered when the image finishes loading, event.detail = {height, width} | 2.11.4 |
| webp | boolean | false | No | By default, WebP format is not parsed, only network resources are supported | Not Supported |
| lazy-load | boolean | false | No | Lazy load images, start loading when about to enter a certain range (three screens up and down) | 2.12.2 |
| show-menu-by-longpress | boolean | false | No | Enable long-press image to show Mini-Program code recognition menu | Not Supported |

### [\#](https://super-apps.ai/mop/document/en/develop/component/media.html\#valid-values-for-mode) Valid values for mode

| Value | Description | Minimum Version |
| --- | --- | --- |
| scaleToFill | Scaling mode, scales the image without maintaining aspect ratio, making the image's width and height fully stretch to fill the image element |  |
| aspectFit | Scaling mode, scales the image while maintaining aspect ratio, ensuring the longer side of the image is fully visible. This means the entire image will be displayed. |  |
| aspectFill | Scaling mode, scales the image while maintaining aspect ratio, ensuring only the shorter side of the image is fully visible. This means the image is usually complete in either horizontal or vertical direction, with the other direction being cropped. |  |
| widthFix | Scaling mode, width remains unchanged, height adjusts automatically, maintaining the original aspect ratio |  |
| heightFix | Scaling mode, height remains unchanged, width adjusts automatically, maintaining the original aspect ratio |  |
| top | Cropping mode, does not scale the image, only displays the top region of the image |  |
| bottom | Cropping mode, does not scale the image, only displays the bottom region of the image |  |
| center | Cropping mode, does not scale the image, only displays the middle region of the image |  |
| left | Cropping mode, does not scale the image, only displays the left region of the image |  |
| right | Cropping mode, does not scale the image, only displays the right region of the image |  |
| top left | Cropping mode, does not scale the image, only displays the top-left region of the image |  |
| top right | Cropping mode, does not scale the image, only displays the top-right region of the image |  |
| bottom left | Cropping mode, does not scale the image, only displays the bottom-left region of the image |  |
| bottom right | Cropping mode, does not scale the image, only displays the bottom-right region of the image |  |

## [\#](https://super-apps.ai/mop/document/en/develop/component/media.html\#live-player) live-player

Using the live-player component on iOS requires integrating the Live SDK

For iOS integration of the Extended SDK/Live SDK, please refer to [「Mini-Program SDK-iOS SDK-iOS Integration-Live SDK」](https://super-apps.ai/mop/document/runtime-sdk/ios/ios-integrate.html#_10-9-live-sdk)

Using the live-player component on Android requires integrating LiveSDK

For Android integration of LiveSDK, please refer to [「Mini-Program SDK-Android SDK-Android Integration-LiveSDK」](https://super-apps.ai/mop/document/runtime-sdk/android/android-integrate.html#_16-livesdk)

Using the live-player component on Harmony requires integrating LiveSDK

For Harmony integration of LiveSDK, please refer to [「Mini-Program SDK-Harmony SDK-Harmony Integration-LiveSDK」](https://super-apps.ai/mop/document/runtime-sdk/harmony/harmony-integrate.html#_6-6-live-sdk)

| Property | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| src | string |  | No | Audio/video address. Currently supports flv, rtmp formats; webrtc format depends on oem parameter to enable | 3.0.50 |
| oem | string |  | No | "srs" // Open-source service, "zlmedia" // ZLmedia, "nginx" // Nginx, "anyrtc" // Anyrtc, "aliyun" // AliCloud, "tencent" // Tencent, "huawei" // Huawei, "qiniu" // Qiniu, "aws" // Aws, "max" | 3.4.4 <br> harmony: Not Supported |
| mode | string | live | No | Mode | Not Supported |
| autoplay | boolean | false | No | Auto-play | 3.0.50 |
| muted | boolean | false | No | Whether to mute | 3.0.50 |
| orientation | string | vertical | No | Screen orientation | Not Supported |
| object-fit | string | contain | No | Fill mode, possible values are contain, fillCrop | 3.0.50 |
| background-mute | boolean | false | No | Whether to mute when entering the background (deprecated, default is to mute when entering the background) | Not Supported |
| min-cache | number | 1 | No | Minimum buffer, in seconds (RTC mode recommends 0.2s) | Not Supported |
| max-cache | number | 3 | No | Maximum buffer, in seconds (RTC mode recommends 0.8s). Buffer is used to resist network fluctuations; more buffered data means better network resistance but higher latency. | Not Supported |
| sound-mode | string | speaker | No | Sound output method | Not Supported |
| auto-pause-if-navigate | boolean | true | No | Whether to automatically pause real-time audio/video playback when navigating to another page within this Mini-Program | 3.3.1<br>SDK:2.44.1 |
| auto-pause-if-open-native | boolean | true | No | Whether to automatically pause real-time audio/video playback when opening another native page | 3.3.1<br>SDK:2.44.1 |
| picture-in-picture-mode | string/Array |  | No | Set Picture-in-Picture mode: push, pop, empty string, or set multiple modes via array (e.g., \["push", "pop"\]) | 3.3.1<br>SDK:2.44.1 |
| bindstatechange | eventhandle |  | No | Playback state change event, detail = {code} | 3.0.50 |
| bindfullscreenchange | eventhandle |  | No | Fullscreen change event, detail = {direction, fullScreen} | Not Supported |
| bindnetstatus | eventhandle |  | No | Network status notification, detail = {info} | 3.0.50 |
| bindaudiovolumenotify | eventhandler |  | No | Playback volume size notification, detail = {} | 3.0.50 |
| bindenterpictureinpicture | eventhandler |  | No | Player enters Picture-in-Picture mode | android, harmony: Not Supported |
| bindleavepictureinpicture | eventhandler |  | No | Player exits Picture-in-Picture mode | android, harmony: Not Supported |

### [\#](https://super-apps.ai/mop/document/en/develop/component/media.html\#valid-values-for-mode-2) Valid values for mode

| Value | Description | Minimum Version |
| --- | --- | --- |
| live | Live broadcast |  |
| RTC | Real-time communication, lower latency in this mode |  |

### [\#](https://super-apps.ai/mop/document/en/develop/component/media.html\#valid-values-for-orientation) Valid values for orientation

| Value | Description | Minimum Version |
| --- | --- | --- |
| vertical | Vertical |  |
| horizontal | Horizontal |  |

### [\#](https://super-apps.ai/mop/document/en/develop/component/media.html\#valid-values-for-object-fit) Valid values for object-fit

| Value | Description | Minimum Version |
| --- | --- | --- |
| contain | The longer side of the image fills the screen, shorter side area will be filled with black |  |
| fillCrop | The image fills the screen, parts exceeding the display area will be cropped |  |

### [\#](https://super-apps.ai/mop/document/en/develop/component/media.html\#valid-values-for-sound-mode) Valid values for sound-mode

| Value | Description | Minimum Version |
| --- | --- | --- |
| speaker | Speaker |  |
| ear | Earpiece |  |

### [\#](https://super-apps.ai/mop/document/en/develop/component/media.html\#valid-values-for-picture-in-picture-mode) Valid values for picture-in-picture-mode

| Value | Description | Minimum Version |
| --- | --- | --- |
| \[\] | Cancel Picture-in-Picture |  |
| push | Trigger Picture-in-Picture on route push |  |
| pop | Trigger Picture-in-Picture on route pop |  |

## [\#](https://super-apps.ai/mop/document/en/develop/component/media.html\#live-pusher) live-pusher

Using the live-pusher component on iOS requires integrating the Live SDK

For iOS integration of the Extended SDK or Live SDK, please refer to [「Mini-Program SDK-iOS SDK-iOS Integration-Live SDK」](https://super-apps.ai/mop/document/runtime-sdk/ios/ios-integrate.html#_10-9-live-sdk)

Using the live-pusher component on Android requires integrating LiveSDK

For Android integration of LiveSDK, please refer to [「Mini-Program SDK-Android SDK-Android Integration-LiveSDK」](https://super-apps.ai/mop/document/runtime-sdk/android/android-integrate.html#_16-livesdk)

Using the live-pusher component on Harmony requires integrating LiveSDK

For Harmony integration of LiveSDK, please refer to [「Mini-Program SDK-Harmony SDK-Harmony Integration-LiveSDK」](https://super-apps.ai/mop/document/runtime-sdk/harmony/harmony-integrate.html#_6-6-live-sdk)

| Property | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| url | string |  | No | Push stream address. Currently only supports rtmp format | 3.0.50 |
| mode | string | RTC | No | SD (Standard Definition), HD (High Definition), FHD (Full High Definition), RTC (Real-Time Communication) | Not Supported |
| autopush | boolean | false | No | Auto-push | 3.0.50 |
| muted | boolean | false | No | Whether to mute. Deprecated, use enable-mic instead | 3.0.50 |
| enable-camera | boolean | true | No | Enable camera | 3.0.50 |
| auto-focus | boolean | true | No | Auto-focus | Not Supported |
| orientation | string | vertical | No | Screen orientation | Not Supported |
| beauty | number | 0 | No | Beauty effect, range 0-9, 0 means off | Not Supported |
| whiteness | number | 0 | No | Whitening effect, range 0-9, 0 means off | Not Supported |
| aspect | string | 9:16 | No | Aspect ratio, possible values are 3:4, 9:16 | Not Supported |
| min-bitrate | number | 200 | No | Minimum bitrate | Not Supported |
| max-bitrate | number | 1000 | No | Maximum bitrate | Not Supported |
| audio-quality | string | high | No | High audio quality (48KHz) or low audio quality (16KHz), values are high, low | Not Supported |
| waiting-image | string |  | No | Waiting image when entering the background | Not Supported |
| waiting-image-hash | string |  | No | MD5 hash of the waiting image resource | Not Supported |
| zoom | boolean | false | No | Adjust focus | Not Supported |
| device-position | string | front | No | Front or back, values are front, back | 3.0.50 |
| background-mute | boolean | false | No | Whether to mute when entering the background (deprecated, default is to mute when entering the background) | Not Supported |
| mirror | boolean | false | No | Whether to mirror the push stream, effect will be reflected in live-player | Not Supported |
| remote-mirror | boolean | false | No | Same as mirror property, mirror will be deprecated later | Not Supported |
| local-mirror | string | auto | No | Control whether the local preview image is mirrored | Not Supported |
| audio-reverb-type | number | 0 | No | Audio reverb type | Not Supported |
| enable-mic | boolean | true | No | Enable or disable microphone | 3.0.50 |
| enable-agc | boolean | false | No | Whether to enable automatic audio gain control | Not Supported |
| enable-ans | boolean | false | No | Whether to enable audio noise suppression | Not Supported |
| audio-volume-type | string | auto | No | Volume type | Not Supported |
| video-width | number | 360 | No | Resolution width of the pushed video stream | Not Supported |
| video-height | number | 640 | No | Resolution height of the pushed video stream | Not Supported |
| beauty-style | string | smooth | No | Set beauty type | Not Supported |
| pictureInPictureMode | string/Array |  | No | Set Picture-in-Picture mode: push, pop, empty string, or set multiple modes via array (e.g., \["push", "pop"\]) | 3.0.0 <br> harmony: Not Supported |
| custom-effect | string | standard | No | Whether to enable custom effects | Not Supported |
| voice-changer-type | number | 0 | No | Voice-changing effect | Not Supported |
| skin-whiteness | number | 0 | No | Custom effect whitening | Not Supported |
| skin-smoothness | number | 0 | No | Custom effect smoothing | Not Supported |
| face-thinness | number | 0 | No | Custom effect face thinning | Not Supported |
| eye-bigness | number | 0 | No | Custom effect big eyes | Not Supported |
| fps | number | 15 | No | Frame rate | Not Supported |
| filter | string | standard | No | Set color filter | Not Supported |
| bindstatechange | eventhandle |  | No | State change event, detail = {code} | 3.0.50 |
| bindnetstatus | eventhandle |  | No | Network status notification, detail = {info} | 3.0.50 |
| binderror | eventhandle |  | No | Rendering error event, detail = {errMsg, errCode} | 3.0.50 |
| bindbgmstart | eventhandle |  | No | Triggered when background music starts playing | Not Supported |
| bindbgmprogress | eventhandle |  | No | Triggered when background music progress changes, detail = {progress, duration} | Not Supported |
| bindbgmcomplete | eventhandle |  | No | Triggered when background music playback completes | Not Supported |
| bindaudiovolumenotify | eventhandle |  | No | Returns the volume level captured by the microphone | Not Supported |
| bindenterpictureinpicture | eventhandle |  | No | Callback when entering Picture-in-Picture mode | 3.4.1 <br> harmony: Not Supported |
| bindleavepictureinpicture | eventhandle |  | No | Callback when exiting Picture-in-Picture mode | 3.4.1 <br> harmony: Not Supported |

### [\#](https://super-apps.ai/mop/document/en/develop/component/media.html\#valid-values-for-orientation-2) Valid values for orientation

| Value | Description | Minimum Version |
| --- | --- | --- |
| vertical | Vertical |  |
| horizontal | Horizontal |  |

### [\#](https://super-apps.ai/mop/document/en/develop/component/media.html\#valid-values-for-local-mirror) Valid values for local-mirror

| Value | Description | Minimum Version |
| --- | --- | --- |
| auto | Front camera mirrored, rear camera not mirrored |  |
| enable | Both front and rear cameras mirrored |  |
| disable | Neither front nor rear camera mirrored |  |

### [\#](https://super-apps.ai/mop/document/en/develop/component/media.html\#valid-values-for-audio-reverb-type) Valid values for audio-reverb-type

| Value | Description | Minimum Version |
| --- | --- | --- |
| 0 | Off |  |
| 1 | KTV |  |
| 2 | Small Room |  |
| 3 | Large Hall |  |
| 4 | Muffled |  |
| 5 | Resonant |  |
| 6 | Metallic |  |
| 7 | Magnetic |  |

### [\#](https://super-apps.ai/mop/document/en/develop/component/media.html\#valid-values-for-audio-volume-type) Valid values for audio-volume-type

| Value | Description | Minimum Version |
| --- | --- | --- |
| auto | Automatic |  |
| media | Media Volume |  |
| voicecall | Call Volume |  |

### [\#](https://super-apps.ai/mop/document/en/develop/component/media.html\#valid-values-for-beauty-style) Valid values for beauty-style

| Value | Description | Minimum Version |
| --- | --- | --- |
| smooth | Smooth Beautification |  |
| nature | Natural Beautification |  |

### [\#](https://super-apps.ai/mop/document/en/develop/component/media.html\#valid-values-for-filter) Valid values for filter

| Value | Description | Minimum Version |
| --- | --- | --- |
| standard | Standard |  |
| pink | Pink |  |
| nostalgia | Nostalgic |  |
| blues | Blues |  |
| romantic | Romantic |  |
| cool | Cool |  |
| fresher | Fresh |  |
| solor | Japanese Style |  |
| aestheticism | Aesthetic |  |
| whitening | Whitening |  |
| cerisered | Cherry Red |  |

## [\#](https://super-apps.ai/mop/document/en/develop/component/media.html\#video) video

| Property | Type | Default Value | Required | Description | Support |
| --- | --- | --- | --- | --- | --- |
| src | string |  | Yes | Resource address of the video to be played, supports network paths and local temporary paths | iOS:✅<br> Android:✅<br> Harmony:✅ |
| duration | number |  | No | Specifies the video duration | iOS:✅<br> Android:✅<br> Harmony:✅ |
| controls | boolean | true | No | Whether to display default playback controls (play/pause button, playback progress, time) | iOS:✅<br> Android:✅<br> Harmony:✅ |
| danmu-list | Array |  | No | Danmu list | iOS:✅<br> Android:✅<br> Harmony:✅ |
| danmu-btn | boolean | false | No | Whether to show the danmu button, only effective during initialization, cannot be dynamically changed | iOS:✅<br> Android:✅<br> Harmony:✅ |
| enable-danmu | boolean | false | No | Whether to display danmu, only effective during initialization, cannot be dynamically changed | iOS:✅<br> Android:✅<br> Harmony:✅ |
| enable-view-danmu | boolean | false | No | Whether to display danmu, only valid under the same-layer video. When using this configuration, the setting of enable-danmu will no longer take effect, supported from Base Library 3.5.9 | iOS:✅<br> Android:✅<br> Harmony:✅ |
| autoplay | boolean | false | No | Whether to autoplay | iOS:✅<br> Android:✅<br> Harmony:✅ |
| loop | boolean | false | No | Whether to loop playback | iOS:✅<br> Android:✅<br> Harmony:✅ |
| muted | boolean | false | No | Whether to play muted | iOS:✅<br> Android:✅<br> Harmony:✅ |
| initial-time | number | 0 | No | Specifies the initial playback position of the video | iOS:✅<br> Android:✅<br> Harmony:✅ |
| direction | number |  | No | Sets the video orientation in full screen, if not specified, it will be automatically determined based on the aspect ratio | iOS:✅<br> Android:✅<br> Harmony:✅ |
| show-progress | boolean | true | No | If not set, it will only display when the width is greater than 240 | iOS:✅<br> Android:✅<br> Harmony:✅ |
| show-fullscreen-btn | boolean | true | No | Whether to show the full-screen button | iOS:✅<br> Android:✅<br> Harmony:✅ |
| show-play-btn | boolean | true | No | Whether to show the play button at the bottom control bar of the video | iOS:✅<br> Android:✅<br> Harmony:✅ |
| show-center-play-btn | boolean | true | No | Whether to show the play button in the center of the video | iOS:✅<br> Android:✅<br> Harmony:✅ |
| enable-progress-gesture | boolean | true | No | Whether to enable the gesture to control progress | iOS:✅<br> Android:✅<br> Harmony:✅ |
| object-fit | string | contain | No | The presentation form of the video when its size does not match the video container size | iOS:✅<br> Android:✅<br> Harmony:✅ |
| poster | string |  | No | Network resource address or cloud file ID of the video cover image (2.3.0). Setting poster is invalid if the controls attribute value is false | iOS:✅<br> Android:✅<br> Harmony:✅ |
| show-mute-btn | boolean | false | No | Whether to show the mute button | iOS:✅<br> Android:✅<br> Harmony:✅ |
| title | string |  | No | Title of the video, displayed at the top in full screen | iOS:✅<br> Android:✅<br> Harmony:✅ |
| play-btn-position | string | bottom | No | Position of the play button | iOS:✅<br> Android:✅<br> Harmony:✅ |
| enable-play-gesture | boolean | false | No | Whether to enable the play gesture, i.e., double-click to toggle play/pause | iOS:✅<br> Android:✅<br> Harmony:✅ |
| auto-pause-if-navigate | boolean | true | No | Whether to automatically pause the video playback on this page when navigating to another page within the Mini-Program | iOS:✅<br> Android:✅<br> Harmony:✅ |
| auto-pause-if-open-native | boolean | true | No | Whether to automatically pause the video on this page when navigating to another native app page | iOS:✅<br> Android:✅<br> Harmony:✅ |
| vslide-gesture | boolean | false | No | Whether to enable brightness and volume adjustment gestures in non-fullscreen mode (same as page-gesture) | iOS:✅<br> Android:✅<br> Harmony:❌ |
| vslide-gesture-in-fullscreen | boolean | true | No | Whether to enable brightness and volume adjustment gestures in fullscreen mode | iOS:✅<br> Android:✅<br> Harmony:❌ |
| poster-for-crawler | string |  | Yes | Used as the video cover for search scenarios, it is recommended to use a video cover without a play icon, only supports network addresses | iOS:❌ <br> Android:❌<br> Harmony:❌ |
| show-casting-button | boolean | false | No | Display the casting button. Effective in Android under the same-layer rendering, supports DLNA protocol; iOS supports AirPlay and DLNA protocols | iOS:✅<br> Android:✅<br> Harmony:❌ |
| picture-in-picture-mode | string/Array |  | No | Set the picture-in-picture mode: push, pop, empty string, or multiple modes via array (e.g., \["push", "pop"\]) | iOS:✅<br> Android:✅<br> Harmony:1.3.6 |
| picture-in-picture-show-progress | boolean | false | No | Whether to show playback progress in picture-in-picture mode | iOS:✅<br> Android:✅<br> Harmony:❌ |
| enable-auto-rotation | boolean | false | No | Whether to enable automatic full screen when the phone is in landscape mode, effective when the system setting for auto-rotate is enabled | iOS:✅<br> Android:✅<br> Harmony:❌ |
| show-screen-lock-button | boolean | false | No | Whether to show the screen lock button, only displayed in full screen, operations on the control bar after locking | iOS:✅<br> Android:✅<br> Harmony:❌ |
| show-snapshot-button | boolean | false | No | Whether to show the screenshot button, only displayed in full screen | iOS:✅<br> Android:✅<br> Harmony:❌ |
| show-background-playback-button | boolean | false | No | Whether to display the background audio playback button | iOS:❌ <br> Android:✅<br> Harmony:❌ |
| background-poster | string |  | No | Notification bar icon after entering background audio playback | iOS:✅<br> Android:✅<br> Harmony:✅ |
| bindplay | eventhandle |  | No | Triggered when starting/continuing playback, triggers play event | iOS:✅<br> Android:✅<br> Harmony:✅ |
| bindpause | eventhandle |  | No | Triggered when pausing playback, triggers pause event | iOS:✅<br> Android:✅<br> Harmony:✅ |
| bindended | eventhandle |  | No | Triggered when playback reaches the end, triggers ended event | iOS:✅<br> Android:✅<br> Harmony:✅ |
| bindtimeupdate | eventhandle |  | No | Triggered when playback progress changes, event.detail = { currentTime, duration } | iOS:✅<br> Android:✅<br> Harmony:✅ |
| bindfullscreenchange | eventhandle |  | No | Triggered when video enters or exits full screen, event.detail = { fullScreen, direction }, valid values for direction are vertical or horizontal | iOS:✅<br> Android:✅<br> Harmony:✅ |
| bindwaiting | eventhandle |  | No | Triggered when video buffering occurs | iOS:✅<br> Android:✅<br> Harmony:❌ |
| binderror | eventhandle |  | No | Triggered when video playback encounters an error | iOS:✅<br> Android:✅<br> Harmony:✅ |
| bindprogress | eventhandle |  | No | Triggered when loading progress changes, only supports one segment loading. event.detail = { buffered }, percentage | iOS:✅<br> Android:✅<br> Harmony:❌ |
| bindloadedmetadata | eventhandle |  | No | Triggered when video metadata loading is complete. event.detail = { width, height, duration } | iOS:✅<br> Android:✅<br> Harmony:❌ |
| bindcontrolstoggle | eventhandle |  | No | Triggered when switching controls visibility. event.detail = { show } | iOS:✅<br> Android:✅<br> Harmony:✅ |
| bindseekcomplete | eventhandler |  | No | Triggered when seek completes | iOS:✅<br> Android:✅<br> Harmony:✅ |
| bindenterpictureinpicture | eventhandler |  | No | Triggered when player enters picture-in-picture mode | iOS:❌ <br> Android:❌<br> Harmony:1.3.6 |
| bindleavepictureinpicture | eventhandler |  | No | Triggered when player leaves picture-in-picture mode | iOS:❌ <br> Android:❌<br> Harmony:1.3.6 |

Note:

- Base library version 2.11.2 requires SDK version 2.34.1
- Some properties related to full screen, gestures, and picture-in-picture mode are not supported in the IDE. It is recommended to check on a real device.

## [\#](https://super-apps.ai/mop/document/en/develop/component/media.html\#native-view) native-view

Native view container

| Property | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| type | string | camera | Yes | Native container type, setting is immutable |  |
| options | string | {} | No | Custom parameters passed to the native component, formatted as JSON data string |  |
| bindontask | eventhandle |  | No | Receive events sent by the native component |  |

Example code

```javascript
<native-view
  type="{{type}}"
  options="{{options}}"
  bindready="bindonready"
></native-view>

        Code copied

```

Note: To globally listen for native-view events, refer to `onCustomEvent` API

Please note

On the HarmonyOS side, the implementation of native-view uses [xComponent proxy](https://super-apps.ai/mop/document/runtime-sdk/harmony/api/harmony-api-delegate.html#_14-xcomponenthandler)

## [\#](https://super-apps.ai/mop/document/en/develop/component/media.html\#camera) camera

| Property | Type | Default Value | Required | Description | Support |
| --- | --- | --- | --- | --- | --- |
| mode | string | normal | No | Application mode, only effective during initialization, cannot be dynamically changed | iOS:✅<br> Android:✅<br> Harmony:✅ |
| resolution | string | medium | No | Resolution, dynamic modification not supported | iOS:✅<br> Android:✅<br> Harmony:✅ |
| device-position | string | back | No | Camera direction | iOS:✅<br> Android:✅<br> Harmony:✅ |
| flash | string | auto | No | Flashlight, values are auto, on, off | iOS:✅<br> Android:✅<br> Harmony:✅ |
| frame-size | string | medium | No | Specifies the desired camera frame data size | iOS:✅<br> Android:✅<br> Harmony:✅ |
| bindstop | eventhandle |  | No | Triggered when the camera is abnormally terminated, such as exiting to the background | iOS:✅<br> Android:✅<br> Harmony:✅ |
| binderror | eventhandle |  | No | Triggered when the user denies camera access | iOS:✅<br> Android:✅<br> Harmony:✅ |
| bindinitdone | eventhandle |  | No | Triggered when camera initialization is complete, e.detail = {maxZoom} | iOS:✅<br> Android:✅<br> Harmony:✅ |
| bindscancode | eventhandle |  | No | Triggered when scan code recognition is successful, only effective when mode="scanCode" | iOS:✅<br> Android:✅<br> Harmony:✅ |

## [\#](https://super-apps.ai/mop/document/en/develop/component/media.html\#x-component) x-component

Custom native component

| Property | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| tag | string |  | No | Component type identifier | 3.7.3 |
| data | object | {} | No | Custom parameters passed to the native component | 3.7.3 |

Example code

```html
<x-component id='XComponent' tag='button' data="{{xData}}" style="width:400px;height:300px;"/>
<button bindtap='bindTap'>tap</button>

        Code copied

```

```js
Page({
  data:{
    xData:{
      name: 'abc',
      age: 123,
      ad: {
          a: 'b',
          list: [1, 2, 3]
      }
    }
  },
  onLoad() {
    // Get context through x-component's id
    this.xContext = wx.createXComponentContext('XComponent')
    // Listen for events sent to this x-component by the native component
    this.xContext.on('onTestEvent', res => {
        console.log('onTestEvent', res)
    })
  },
  bindTap(){
    // Send event to the native component
    this.xContext.publish('appletEvent',{foo:'bar'})
  }
})

        Code copied

```

[Previous：Navigation](https://super-apps.ai/mop/document/en/develop/component/navigation.html)[Next：Map Components](https://super-apps.ai/mop/document/en/develop/component/map.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)