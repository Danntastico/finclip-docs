<!--
Source URL: https://super-apps.ai/mop/document/en/develop/api/interface.html
Extracted: 2026-01-12T23:12:09.258Z (January 12, 2026)
Title: Interface | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

# [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#interface) Interface

## [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#interaction) Interaction

### [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#showtoast) showToast

> Supported from Base Library 1.3.9, iOS SDK 2.1.23, Android SDK 2.1.38 onwards

**showToast(Object object)**

Displays a message prompt box.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| title | string |  | Yes | Content of the prompt |
| icon | string | 'success' | No | Icon |
| image | string |  | No | Local path of a custom icon; image takes precedence over icon |
| duration | number | 1500 | No | Display duration of the prompt |
| mask | boolean | false | No | Whether to display a transparent overlay |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function when API call ends (executed on both success and failure) |

**Valid values for object.icon**

| Value | Description |
| --- | --- |
| success | Displays success icon; at this time, the title text can display up to two lines |
| loading | Displays loading icon; at this time, the title text can display up to two lines |
| error | Displays failure icon; at this time, the title text can display up to two lines |
| none | Does not display an icon; at this time, the title text can display up to two lines |

**Sample Code**

```javascript
ft.showToast({
  title: 'Success',
  icon: 'success',
  duration: 2000
})
```

Note

- Only one of `ft.showLoading` and `ft.showToast` can be displayed at the same time.
- `ft.showToast` should be used in conjunction with `ft.hideToast`.

### [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#showmodal) showModal

> Supported from Base Library 1.3.9, iOS SDK 2.1.23, Android SDK 2.1.38 onwards

**showModal(Object object)**

Displays a modal dialog box.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| title | string |  | No | Title of the prompt |
| content | string |  | No | Content of the prompt |
| showCancel | boolean | true | No | Whether to display the cancel button |
| cancelText | string | 'Cancel' | No | Text for the cancel button |
| cancelColor | string | Light theme #191919; Dark theme #A5A5A5 | No | Text color for the cancel button, must be a hexadecimal color string |
| confirmText | string | 'Confirm' | No | Text for the confirm button |
| confirmColor | string | Light theme #409EFF; Dark theme #368CE4 | No | Text color for the confirm button, must be a hexadecimal color string |
| editable | boolean | false | No | Whether to display an input field |
| placeholderText | string |  | No | Placeholder text when displaying an input field |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function when API call ends (executed on both success and failure) |

**object.success callback function**

**Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| content | string | When editable is true, represents the user's input text |
| confirm | boolean | When true, indicates the user clicked the confirm button |
| cancel | boolean | When true, indicates the user clicked the cancel button (used to differentiate between closing by clicking the overlay or the cancel button on Android systems) |

**Sample Code**

```javascript
ft.showModal({
  title: 'Prompt',
  content: 'This is a modal popup',
  success(res) {
    if (res.confirm) {
      console.log('User clicked Confirm')
    } else if (res.cancel) {
      console.log('User clicked Cancel')
    }
  }
})
```

### [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#showloading) showLoading

> Supported from Base Library 1.3.9, iOS SDK 2.1.23, Android SDK 2.1.38 onwards

**showLoading(Object object)**

Displays a loading prompt box. You need to actively call `ft.hideLoading` to close the prompt box.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| title | string |  | Yes | Content of the prompt |
| mask | boolean | false | No | Whether to display a transparent overlay |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function when API call ends (executed on both success and failure) |

**Sample Code**

```javascript
ft.showLoading({
  title: 'Loading',
})

setTimeout(function () {
  ft.hideLoading()
}, 2000)
```

Note

- Only one of `ft.showLoading` and `ft.showToast` can be displayed at the same time.
- `ft.showLoading` should be used in conjunction with `ft.hideLoading`.

### [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#showactionsheet) showActionSheet

> Supported from Base Library 1.3.9, iOS SDK 2.1.23, Android SDK 2.1.38 onwards

**showActionSheet(Object object)**

Displays an action menu.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| alertText | string |  | No | Warning text |
| itemList | Array. |  | Yes | Array of button texts, maximum array length is 6 |
| itemColor | string | #000000 | No | Button text color |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function when API call ends (executed on both success and failure) |

**object.success callback function**

**Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| tapIndex | number | Index of the button clicked by the user, in top-down order starting from 0 |

**Sample Code**

```javascript
ft.showActionSheet({
  itemList: ['A', 'B', 'C'],
  success(res) {
    console.log(res.tapIndex)
  },
  fail(res) {
    console.log(res.errMsg)
  }
})
```

### [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#hidetoast) hideToast

> Supported from Base Library 1.3.9, iOS SDK 2.1.23, Android SDK 2.1.38 onwards

**hideToast(Object object)**

Hides the message prompt box.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| noConflict | boolean | false | No | Currently, toast and loading-related interfaces can be mixed; this parameter can be used to disable the mixing feature |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function when API call ends (executed on both success and failure) |

### [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#hideloading) hideLoading

> Supported from Base Library 1.3.9, iOS SDK 2.1.23, Android SDK 2.1.38 onwards

**hideLoading(Object object)**

Hides the loading prompt box.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| noConflict | boolean | false | No | Currently, toast and loading-related interfaces can be mixed; this parameter can be used to disable the mixing feature |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function when API call ends (executed on both success and failure) |

### [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#enablealertbeforeunload) enableAlertBeforeUnload

> Supported from Base Library 2.11.5, iOS SDK 2.35.1, Android SDK 2.35.1 onwards

**enableAlertBeforeUnload(Object object)**

Enables the confirmation dialog before leaving the Mini-Program page.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| message | string |  | Yes | Content of the confirmation dialog |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function when API call ends (executed on both success and failure) |

### [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#disablealertbeforeunload) disableAlertBeforeUnload

> Supported from Base Library 2.11.5, iOS SDK 2.35.1, Android SDK 2.35.1 onwards

**disableAlertBeforeUnload(Object object)**

Disables the confirmation dialog before leaving the Mini-Program page.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function when API call ends (executed on both success and failure) |

## [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#navigation-bar) Navigation Bar

### [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#shownavigationbarloading) showNavigationBarLoading

> Supported from Base Library 1.3.9, iOS SDK 2.1.23, Android SDK 2.1.38 onwards

**showNavigationBarLoading(Object object)**

Displays the navigation bar loading animation on the current page.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function when the API call ends (executed whether successful or failed) |

### [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#setnavigationbartitle) setNavigationBarTitle

> Supported from Base Library 1.3.9, iOS SDK 2.1.23, Android SDK 2.1.38 onwards

**setNavigationBarTitle(Object object)**

Dynamically sets the title of the current page.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| title | string |  | Yes | Page title |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function when the API call ends (executed whether successful or failed) |

Example code

```javascript
ft.setNavigationBarTitle({
  title: 'Page Title'
})
```

### [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#setnavigationbarcolor) setNavigationBarColor

> Supported from Base Library 1.3.9, iOS SDK 2.1.23, Android SDK 2.1.38 onwards

**setNavigationBarColor(Object object)**

Sets the color of the page navigation bar.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| frontColor | string |  | Yes | Foreground color value, including buttons, title, and status bar colors; only supports #ffffff and #000000 |
| backgroundColor | string |  | Yes | Background color value, valid as a hexadecimal color |
| animation | Object |  | No | Animation effect |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function when the API call ends (executed whether successful or failed) |

**Structure of object.animation**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| duration | number | 0 | No | Animation transition time in ms |
| timingFunc | string | 'linear' | No | Animation transition method |

**Valid values for object.animation.timingFunc**

| Value | Description |
| --- | --- |
| 'linear' | The animation speed is consistent from start to finish |
| 'easeIn' | The animation starts slowly |
| 'easeOut' | The animation ends slowly |
| 'easeInOut' | The animation starts and ends slowly |

**Example Code**

```javascript
ft.setNavigationBarColor({
  frontColor: '#ffffff',
  backgroundColor: '#ff0000',
  animation: {
    duration: 400,
    timingFunc: 'easeIn'
  }
})
```

### [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#hidenavigationbarloading) hideNavigationBarLoading

> Supported from Base Library 1.3.9, iOS SDK 2.1.23, Android SDK 2.1.38 onwards

**hideNavigationBarLoading(Object object)**

Hides the navigation bar loading animation on the current page.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function when the API call ends (executed whether successful or failed) |

### [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#hidehomebutton) hideHomeButton

**ft.hideHomeButton(Object object)**

Hides the "Back to Home" button.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function when the API call ends (executed whether successful or failed) |

## [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#background) Background

### [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#setbackgroundtextstyle) setBackgroundTextStyle

> Supported from Base Library 1.3.9, iOS SDK 2.1.23, Android SDK 2.1.38 onwards

**ft.setBackgroundTextStyle(Object object)**

Dynamically sets the style of the pull-down background text and loading icon.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| textStyle | string |  | Yes | Style of the pull-down background text and loading icon. |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function when the API call ends (executed whether successful or failed) |

**Valid values for object.textStyle**

| Value | Description |
| --- | --- |
| dark | Dark style |
| light | Light style |

**Example Code**

```javascript
ft.setBackgroundTextStyle({
  textStyle: 'dark' // The style of the pull-down background text and loading icon is dark
})
```

### [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#setbackgroundcolor) setBackgroundColor

> Supported from Base Library 1.3.9, iOS SDK 2.1.23, Android SDK 2.1.38 onwards

**ft.setBackgroundColor(Object object)**

Dynamically sets the background color of the window.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| backgroundColor | string |  | No | Background color of the window, must be a hexadecimal color value |
| backgroundColorTop | string |  | No | Background color of the top window, must be a hexadecimal color value, supported only on iOS |
| backgroundColorBottom | string |  | No | Background color of the bottom window, must be a hexadecimal color value, supported only on iOS |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function when the API call ends (executed whether successful or failed) |

**Example Code**

```javascript
ft.setBackgroundColor({
  backgroundColor: '#ffffff', // The background color of the window is white
})

ft.setBackgroundColor({
  backgroundColorTop: '#ffffff', // The background color of the top window is white
  backgroundColorBottom: '#ffffff', // The background color of the bottom window is white
})
```

## [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#tab-bar) Tab Bar

### [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#showtabbarreddot) showTabBarRedDot

**ft.showTabBarRedDot(Object object)**

Displays a red dot at the top-right corner of a specific item in the tabBar.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| index | number |  | Yes | Which item of the tabBar, counted from the left |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function when the API call ends (executed whether successful or failed) |

### [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#showtabbar) showTabBar

**ft.showTabBar(Object object)**

Displays the tabBar.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| animation | boolean | false | No | Whether animation effects are needed |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function when the API call ends (executed whether successful or failed) |

### [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#settabbarstyle) setTabBarStyle

**ft.setTabBarStyle(Object object)**

Dynamically sets the overall style of the tabBar.

**Parameters** **Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| color | string |  | No | Default text color on the tab, HexColor |
| selectedColor | string |  | No | Text color when the tab is selected, HexColor |
| backgroundColor | string |  | No | Background color of the tab, HexColor |
| borderStyle | string |  | No | Color of the top border of the tabBar, only supports black/white |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function when the API call ends (executed whether successful or failed) |

**Sample Code**

```js
ft.setTabBarStyle({
  color: '#FF0000',
  selectedColor: '#00FF00',
  backgroundColor: '#0000FF',
  borderStyle: 'white'
})
```

### [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#settabbaritem) setTabBarItem

**ft.setTabBarItem(Object object)**

Dynamically set the content of a specific item in the tabBar. Starting from version `2.7.0`, images support temporary files and network files.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| index | number |  | Yes | Which item in the tabBar, counted from the left |
| text | string |  | No | Button text on the tab |
| iconPath | string |  | No | Image path, icon size limited to 40kb, recommended size 81px \* 81px, this parameter is invalid when position is top |
| selectedIconPath | string |  | No | Selected image path, icon size limited to 40kb, recommended size 81px \* 81px, this parameter is invalid when position is top |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function when the API call ends (executed whether successful or failed) |

**Sample Code**

```js
ft.setTabBarItem({
  index: 0,
  text: 'text',
  iconPath: '/path/to/iconPath',
  selectedIconPath: '/path/to/selectedIconPath'
})
```

### [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#settabbarbadge) setTabBarBadge

> Supported starting from Base Library 1.3.9, iOS SDK 2.1.23, Android SDK 2.1.38

Add text to the upper-right corner of a specific item in the tabBar

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| index | number |  | No | Which item in the tabBar, counted from the left |
| text | string |  | No | Displayed text, if over 4 characters, it will display as ... |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function when the API call ends (executed whether successful or failed) |

**Sample Code**

```javascript
ft.setTabBarBadge({
  index: 0,
  text: '1'
})
```

### [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#removetabbarbadge) removeTabBarBadge

> Supported starting from Base Library 1.3.9, iOS SDK 2.1.23, Android SDK 2.1.38

Remove the text from the upper-right corner of a specific item in the tabBar

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| index | number |  | No | Which item in the tabBar, counted from the left |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function when the API call ends (executed whether successful or failed) |

### [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#hidetabbarreddot) hideTabBarRedDot

**ft.hideTabBarRedDot(Object object)**

Hide the red dot at the upper-right corner of a specific item in the tabBar

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| index | number |  | Yes | Which item in the tabBar, counted from the left |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function when the API call ends (executed whether successful or failed) |

### [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#hidetabbar) hideTabBar

**ft.hideTabBar(Object object)**

Hide the tabBar

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| animation | boolean | false | No | Whether to enable animation effect |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function when the API call ends (executed whether successful or failed) |

## [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#fonts) Fonts

### [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#loadfontface) loadFontFace

**ft.loadFontFace(Object object)**

Dynamically load web fonts, file address must be of download type. Global effectiveness supported starting from version '2.10.0', needs to be called in `app.js`.

Note:

1. The content-type returned by the font file should refer to [font(opens new window)](https://www.iana.org/assignments/media-types/media-types.xhtml#font), incorrect format may cause parsing failure.
2. Font links must be https (http not supported on iOS).
3. Font links must have CORS enabled.
4. Tool tips indicating Failed to load font can be ignored.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| global | boolean | false | No | Whether to take global effect | 2.10.0 |
| family | string |  | Yes | Defined font name |  |
| source | string |  | Yes | Font resource address. Recommended formats are TTF and WOFF, WOFF2 may not be compatible with lower versions of iOS. |  |
| desc | Object |  | No | Optional font descriptor |  |
| scopes | Array |  | No | Font scope, optional values are webview / native, default is webview, setting to native allows use in Canvas 2D |  |
| success | function |  | No | Callback function for successful API call |  |
| fail | function |  | No | Callback function for failed API call |  |
| complete | function |  | No | Callback function when the API call ends (executed whether successful or failed) |  |

**object.desc structure**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| style | string | 'normal' | No | Font style, optional values are normal / italic / oblique |
| weight | string | 'normal' | No | Font weight, optional values are normal / bold / 100 / 200../ 900 |
| variant | string | 'normal' | No | Set small caps font display text, optional values are normal / small-caps / inherit |

**object.success callback function**

**Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| status | string | Font loading result |

**object.fail callback function**

**Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| status | string | Font loading result |

**object.complete callback function**

**Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| status | string | Font loading result |

**Sample Code**

```js
ft.loadFontFace({
  family: 'Bitstream Vera Serif Bold',
  source: 'url("https://sungd.github.io/Pacifico.ttf")',
  success: console.log
})
```

## [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#pull-down-refresh) Pull-down Refresh

### [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#startpulldownrefresh) startPullDownRefresh

> Supported starting from Base Library 1.3.9, iOS SDK 2.1.23, Android SDK 2.1.38

startPullDownRefresh(Object object)

Start pull-down refresh. After calling, triggers the pull-down refresh animation, effect is consistent with user manually pulling down to refresh.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function when the API call ends (executed whether successful or failed) |

**Sample Code**

```javascript
ft.startPullDownRefresh()
```

### [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#stoppulldownrefresh) stopPullDownRefresh

> Supported starting from Base Library 1.3.9, iOS SDK 2.1.23, Android SDK 2.1.38

**stopPullDownRefresh(Object object)**

Stop the current page's pull-down refresh.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function when the API call ends (executed whether successful or failed) |

**Sample Code**

```javascript
Page({
  onPullDownRefresh() {
    ft.stopPullDownRefresh()
  }
})
```

## [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#scrolling) Scrolling

### [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#pagescrollto) pageScrollTo

**ft.pageScrollTo(Object object)**

Scroll the page to the target position, supports both selector and scroll distance positioning.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| scrollTop | number |  | No | Scroll to the target position on the page, unit px |  |
| duration | number | 300 | No | Duration of the scroll animation, unit ms |  |
| selector | string |  | No | Selector | 2.7.3 |
| offsetTop | number |  | No | Offset distance, needs to be used with the selector parameter, can scroll to the position of selector plus offset distance, unit px | 3.0.8 |
| success | function |  | No | Callback function for successful API call |  |
| fail | function |  | No | Callback function for failed API call |  |
| complete | function |  | No | Callback function when the API call ends (executed whether successful or failed) |  |

**Selector syntax**

Selector is similar to CSS selectors, but only supports the following syntax.

- ID selector: #the-id
- Class selector (can specify multiple consecutively): .a-class.another-class
- Child element selector: .the-parent > .the-child
- Descendant selector: .the-ancestor .the-descendant
- Cross custom component descendant selector: .the-ancestor >>> .the-descendant
- Union of multiple selectors: #a-node, .some-other-nodes

**Sample Code**

```js
ft.pageScrollTo({
  scrollTop: 0,
  duration: 300
})
```

### [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#scrollviewcontext) ScrollViewContext

> Supported from Base Library 3.0.45

Enhanced instance of scroll-view

**Sample Code**

```javascript
// Get ScrollViewContext
ft.createSelectorQuery()
  .select('#scroll-view')
  .node()
  .exec((res) => {
    const scrollViewContext = res[0].node;
  })
```

### [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#scrollviewcontext-properties) ScrollViewContext Properties

| Property | Type | Description | Minimum Version |
| --- | --- | --- | --- |
| scrollEnabled | boolean | Scroll switch | 3.0.45 |

**Sample Code**

```javascript
ft.createSelectorQuery()
  .select('#scroll-view')
  .node()
  .exec((res) => {
    const scrollViewContext = res[0].node;
    scrollViewContext.scrollEnabled = false
  })
```

### [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#scrollviewcontext-methods) ScrollViewContext Methods

### [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#scrollintoview) scrollIntoView

**scrollIntoView(String selector)**

Scroll to the specified position

**Parameters**

**String selector**

| Property | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| selector | string |  | Yes | Element selector, target element must be a child of scroll-view | 3.0.45 |

**Sample Code**

```javascript
ft.createSelectorQuery()
  .select('#scroll-view')
  .node()
  .exec((res) => {
    const scrollViewContext = res[0].node;
    scrollViewContext.scrollIntoView('.some-class');
  })
```

### [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#scrollto) scrollTo

**scrollTo(Object object)**

Scroll to the specified position

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| top | number |  | No | Top distance | 3.0.45 |
| left | number |  | No | Left boundary distance | 3.0.45 |
| velocity | number |  | No | Initial speed (not supported) | 3.0.45 |
| duration | number | 300 | No | Scroll animation duration | 3.0.45 |
| animated | boolean | false | No | Whether to enable scroll animation | 3.0.45 |

**Sample Code**

```javascript
ft.createSelectorQuery()
  .select('#scroll-view')
  .node()
  .exec((res) => {
    const scrollViewContext = res[0].node;
    scrollViewContext.scrollTo({
      top: 0,
      duration: 400,
      animated: false
    });
  })
```

### [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#triggerrefresh) triggerRefresh

**triggerRefresh(Object object)**

Trigger pull-down refresh

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| duration | number | 300 | No | Animation duration from trigger to completion | 3.8.3 |

**Sample Code**

```javascript
ft.createSelectorQuery()
  .select('#scroll-view')
  .node()
  .exec((res) => {
    const scrollViewContext = res[0].node;
    scrollViewContext.triggerRefresh({
      duration: 400
    });
  })
```

### [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#closerefresh) closeRefresh

**closeRefresh(Object object)**

Close pull-down refresh

**Sample Code**

```javascript
ft.createSelectorQuery()
  .select('#scroll-view')
  .node()
  .exec((res) => {
    const scrollViewContext = res[0].node;
    scrollViewContext.closeRefresh();
  })
```

## [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#animation) Animation

### [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#createanimation) createAnimation

**Animation ft.createAnimation(Object object)**

Create an animation instance animation. Call methods on the instance to describe the animation. Finally, export the animation data via the export method of the animation instance and pass it to the animation property of the component.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| duration | number | 400 | No | Animation duration in ms |
| timingFunction | string | 'linear' | No | Animation effect |
| delay | number | 0 | No | Animation delay time in ms |
| transformOrigin | string | '50% 50% 0' | No |  |

Valid values for timingFunction

| Value | Description | Minimum Version |
| --- | --- | --- |
| 'linear' | The animation has the same speed from start to end |  |
| 'ease' | The animation starts slowly, speeds up, and slows down before ending |  |
| 'ease-in' | The animation starts slowly |  |
| 'ease-in-out' | The animation starts and ends slowly |  |
| 'ease-out' | The animation ends slowly |  |
| 'step-start' | The animation jumps to the end state in the first frame until the end |  |
| 'step-end' | The animation stays in the start state until the last frame jumps to the end state |  |

**Return Value**

**Animation**

### [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#animation-2) Animation

Animation object

**Methods**

- **Array. Animation.export()**

​
Export the animation queue. Each call to the export method clears previous animation operations.

- **Animation Animation.step(Object object)**


Indicates the completion of a set of animations. You can call any number of animation methods within a set of animations, all animations in a group will start simultaneously, and the next set of animations will only proceed after the current set is completed.

- **Animation Animation.matrix()**


Same as transform-function matrix

- **Animation Animation.matrix3d()**


Same as transform-function matrix3d

- **Animation Animation.rotate(number angle)**


Rotate clockwise from the origin by an angle

- **Animation Animation.rotate3d(number x, number y, number z, number angle)**


Rotate clockwise from a fixed axis by an angle

- **Animation Animation.rotateX(number angle)**


Rotate clockwise from the X-axis by an angle

- **Animation Animation.rotateY(number angle)**


Rotate clockwise from the Y-axis by an angle

- **Animation Animation.rotateZ(number angle)**


Rotate clockwise from the Z-axis by an angle

- **Animation Animation.scale(number sx, number sy)**


Scale

- **Animation Animation.scale3d(number sx, number sy, number sz)**


Scale

- **Animation Animation.scaleX(number scale)**


Scale the X-axis

- **Animation Animation.scaleY(number scale)**


Scale the Y-axis

- **Animation Animation.scaleZ(number scale)**


Scale the Z-axis

- **Animation Animation.skew(number ax, number ay)**


Skew the X and Y-axis coordinates

- **Animation Animation.skewX(number angle)**


Skew the X-axis coordinate

- **Animation Animation.skewY(number angle)**


Skew the Y-axis coordinate

- **Animation Animation.translate(number tx, number ty)**


Translation transformation

- **Animation Animation.translate3d(number tx, number ty, number tz)**


Translate xyz coordinates

- **Animation Animation.translateX(number translation)**


Translate the X-axis

- **Animation Animation.translateY(number translation)**


Translate the Y-axis

- **Animation Animation.translateZ(number translation)**


Translate the Z-axis

- **Animation Animation.opacity(number value)**


Set opacity

- **Animation Animation.backgroundColor(string value)**


Set background color

- **Animation Animation.width(number\|string value)**


Set width

- **Animation Animation.height(number\|string value)**


Set height

- **Animation Animation.left(number\|string value)**


Set left value

- **Animation Animation.right(number\|string value)**


Set right value

- **Animation Animation.top(number\|string value)**


Set top value

- **Animation Animation.bottom(number\|string value)**


Set bottom value


## [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#custom-components) Custom Components

### [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#nexttick) nextTick

**ft.nextTick(function callback)**

Delay some operations to the next timeslice for execution (similar to setTimeout).

**Parameters**

**function callback**

**Description**

Since interfaces such as setData and triggerEvent in custom components are inherently synchronous operations, when these interfaces are called consecutively, they are executed within the same synchronous process. Therefore, improper logic may lead to errors.

An extreme case: When the parent component's setData triggers the child component's triggerEvent, which in turn causes the parent component to perform another setData, and if there is an ft:if statement unloading the child component during this period, it might cause strange errors. Hence, for logic that does not need to be completed within a single synchronous process, this interface can be used to delay execution to the next timeslice.

**Sample Code**

```js
Component({
  doSth() {
    this.setData({ number: 1 }) // Executed directly in the current synchronous process

    ft.nextTick(() => {
      this.setData({ number: 3 }) // Executed in the next timeslice after the current synchronous process ends
    })

    this.setData({ number: 2 }) // Executed directly in the current synchronous process
  }
})
```

## [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#menu) Menu

### [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#getmenubuttonboundingclientrect) getMenuButtonBoundingClientRect

> Supported from Base Library 1.3.9, iOS SDK 2.1.23, Android SDK 2.1.38

Get the layout position information of the menu button (the capsule button in the upper right corner). Coordinate information uses the upper-left corner of the screen as the origin.

| Property | Type | Description |
| --- | --- | --- |
| width | number | Width, unit: px |
| height | number | Height, unit: px |
| top | number | Upper boundary coordinate, unit: px |
| right | number | Right boundary coordinate, unit: px |
| bottom | number | Lower boundary coordinate, unit: px |
| left | number | Left boundary coordinate, unit: px |

## [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#window) Window

### [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#onwindowresize) onWindowResize

Listen for window size change events

**Parameters**

**function listener**

The listener function for window size change events
**Return Value Object res**

| Property | Type | Description |
| --- | --- | --- |
| size | Object |  |

**size**

| Property | Type | Description |
| --- | --- | --- |
| windowWidth | number | Changed window width, in px |
| windowHeight | number | Changed window height, in px |

### [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#offwindowresize) offWindowResize

Removes the listener function for window size change events.

**Parameters** **function listener**

The listener function passed into onWindowResize. If this parameter is not provided, all listener functions will be removed.

### [\#](https://super-apps.ai/mop/document/en/develop/api/interface.html\#setwindowsize) setWindowSize

> Supported from Base Library 3.5.2 and SDK 2.46.3 onwards

Sets the size of the widget window on mobile devices. Only effective for widget types.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| width | number | - | Yes | Width |
| height | number | - | Yes | Height |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function for when the API call ends (executed whether the call succeeds or fails) |

**Sample Code**

```js
ft.setWindowSize({
  width: 300,
  height: 900
})
```