<!--
Source URL: https://super-apps.ai/mop/document/en/develop/component/form.html
Extracted: 2026-01-12T23:14:05.143Z (January 12, 2026)
Title: Form Components | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

# [\#](https://super-apps.ai/mop/document/en/develop/component/form.html\#form-components) Form Components

## [\#](https://super-apps.ai/mop/document/en/develop/component/form.html\#form-component-description) Form Component Description

| Component | Description | Minimum Version |
| --- | --- | --- |
| button | Button | 1.0.0 |
| checkbox-group | Multiple choice selector, composed of multiple checkboxes internally | 1.0.0 |
| checkbox | Multiple choice item | 1.0.0 |
| form | Form | 1.0.0 |
| input | Input box | 1.0.0 |
| label | Used to improve the usability of form components | 1.0.0 |
| picker | Scroll selector that pops up from the bottom, currently supports three types of selectors, distinguished by mode: ordinary selector, time selector, date selector; default is the ordinary selector | 1.0.0 |
| picker-view | Scroll selector embedded in the page | 1.0.0 |
| picker-view-column | Scroll selector sub-item | 1.0.0 |
| radio-group | Single choice selector, composed of multiple radios internally | 1.0.0 |
| radio | Single choice item | 1.0.0 |
| slider | Slider selector | 1.0.0 |
| switch | Switch selector | 1.0.0 |
| textarea | Multi-line input box | 1.0.0 |
| editor | Rich text editor | 2.5.2 |
| editor-portal | Custom block used to render the editor component | 3.10.1 |
| keyboard-accessory | Sets the toolbar view above the keyboard when input/textarea is focused (cover-view/cover-image) | 2.11.6 |

## [\#](https://super-apps.ai/mop/document/en/develop/component/form.html\#button) button

| Property | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| size | string | default | No | Button size | 1.0.0 |
| type | string | default | No | Button style type | 1.0.0 |
| plain | boolean | false | No | Whether the button is hollow with a transparent background color | 1.0.0 |
| disabled | boolean | false | No | Whether it is disabled | 1.0.0 |
| loading | boolean | false | No | Whether there is a loading icon before the name | 1.0.0 |
| form-type | string |  | No | Used for form components, clicking will trigger the submit/reset event of the form component respectively | 1.0.0 |
| open-type | string |  | No | Open capability | 2.12.11 |
| hover-class | string | button-hover | No | Specifies the style class when the button is pressed. When hover-class="none", there is no click effect | 2.11.4 |
| hover-stop-propagation | boolean | false | No | Specifies whether to prevent the ancestor nodes of this node from showing the click state | 2.11.4 |
| hover-start-time | number | 20 | No | How long after pressing does the click state appear, in milliseconds | 2.11.4 |
| hover-stay-time | number | 70 | No | How long the click state remains after releasing the finger, in milliseconds | 2.11.4 |
| lang | string | en | No | Specifies the language of the returned user information, zh\_CN Simplified Chinese, zh\_TW Traditional Chinese, en English. | Not supported |
| session-from | string |  | No | Session source, valid when open-type="contact" | 2.12.11 |
| send-message-title | string | Current title | No | Title of the message card within the session, valid when open-type="contact" | 2.12.11 |
| send-message-path | Current share path | default | No | Mini-Program path jumped to when clicking the message card within the session, valid when open-type="contact" | 2.12.11 |
| send-message-img | string | Screenshot | No | Image of the message card within the session, valid when open-type="contact" | 2.12.11 |
| app-parameter | string |  | No | Parameters passed to the APP when opening the APP, valid when open-type=launchApp | 2.12.11 |
| show-message-card | boolean | false | No | Whether to display the message card within the session, setting this parameter to true will show "Mini-Programs that may be sent" prompt in the lower right corner when the user enters customer service conversation, and the user can quickly send Mini-Program messages by clicking, valid when open-type="contact" | 2.12.11 |
| bindgetuserinfo | eventhandle |  | No | When the user clicks this button, the obtained user information will be returned, the callback detail data is consistent with ft.getUserInfo return, valid when open-type="getUserInfo" | 2.12.11 |
| bindcontact | eventhandle |  | No | Customer service message callback, valid when open-type="contact" | Not supported |
| bindgetphonenumber | eventhandle |  | No | Callback to get the user's phone number, valid when open-type=getPhoneNumber | 2.12.11 |
| binderror | eventhandle |  | No | Callback when an error occurs while using open capabilities, valid when open-type=launchApp | 2.12.11 |
| bindopensetting | eventhandle |  | No | Callback after opening the authorization settings page, valid when open-type=openSetting | 2.12.11 |
| bindlaunchapp | eventhandle |  | No | Callback when the APP is successfully opened, valid when open-type=launchApp | 2.12.11 |
| bindchooseavatar | eventhandle |  | No | Callback when the APP is successfully opened, valid when open-type=launchApp | 2.12.11 |

### [\#](https://super-apps.ai/mop/document/en/develop/component/form.html\#valid-values-for-size) Valid values for size

| Value | Description | Minimum Version |
| --- | --- | --- |
| default | Default size |  |
| mini | Small size |  |

### [\#](https://super-apps.ai/mop/document/en/develop/component/form.html\#valid-values-for-type) Valid values for type

| Value | Description | Minimum Version |
| --- | --- | --- |
| primary | Green |  |
| default | White |  |
| warn | Red |  |

### [\#](https://super-apps.ai/mop/document/en/develop/component/form.html\#valid-values-for-form-type) Valid values for form-type

| Value | Description | Minimum Version |
| --- | --- | --- |
| submit | Submit form |  |
| reset | Reset form |  |

### [\#](https://super-apps.ai/mop/document/en/develop/component/form.html\#valid-values-for-open-type) Valid values for open-type

| Value | Description | Minimum Version |
| --- | --- | --- |
| contact | Open customer conversation | 2.12.11 |
| share | Trigger user sharing | 2.12.11 |
| getPhoneNumber | Get user phone number, user information can be obtained in the bindgetphonenumber callback | 2.12.11 |
| getUserInfo | Get user information, user information can be obtained in the bindgetuserinfo callback | 2.12.11 |
| launchApp | Open APP, parameters can be set via the app-parameter attribute | 2.12.11 |
| openSetting | Open authorization settings page | 2.12.11 |
| feedback | Open feedback page | 2.12.11 |
| chooseAvatar | Get user avatar, avatar information can be obtained in the bindchooseavatar callback | 2.12.11 |

It should be noted that functions such as contact, getPhoneNumber, feedback, chooseAvatar are not implemented in the SDK. When calling these functions, the parameters will be passed through to the APP, and the APP needs to implement the related functions itself. For details, please refer to the APP documentation:

[ios](https://super-apps.ai/mop/document/runtime-sdk/ios/api/api-delegate.html)

[android](https://super-apps.ai/mop/document/runtime-sdk/android/api/api-custom.html)

### [\#](https://super-apps.ai/mop/document/en/develop/component/form.html\#valid-values-for-lang) Valid values for lang

| Value | Description | Minimum Version |
| --- | --- | --- |
| en | English |  |
| zh\_CN | Simplified Chinese |  |
| zh\_TW | Traditional Chinese |  |

## [\#](https://super-apps.ai/mop/document/en/develop/component/form.html\#checkbox) checkbox

| Property | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| color | string | #09BB07 | No | Checkbox color, same as CSS color | 1.0.0 |
| value | string |  | No | Checkbox identifier, triggers checkbox-group's change event when selected, carrying the checkbox's value | 2.11.4 |
| disabled | boolean | false | No | Whether it is disabled | 2.11.4 |
| checked | boolean | false | No | Whether it is currently selected, can be used to set the default selection | 2.11.4 |

## [\#](https://super-apps.ai/mop/document/en/develop/component/form.html\#checkbox-group) checkbox-group

| Property | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| bindchange | EventHandle |  | No | Triggers change event when the selected item in the checkbox-group changes, detail = {value:\[array of selected checkbox values\]} | 2.11.4 |

## [\#](https://super-apps.ai/mop/document/en/develop/component/form.html\#editor) editor

| Property | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| read-only | boolean | false | No | Set the editor to read-only | 2.7.0 |
| placeholder | string |  | No | Prompt information | 2.7.0 |
| show-img-size | boolean | false | No | Show image size control when clicking on the image | 2.7.0 |
| show-img-toolbar | boolean | false | No | Show toolbar control when clicking on the image | 2.7.0 |
| show-img-resize | boolean | false | No | Show resize control when clicking on the image | 2.7.0 |
| hold-keyboard | boolean | false | No | Do not retract the keyboard when clicking on the page while focused | 3.9.3 |
| bindready | eventhandle |  | No | Triggered when the editor initialization is complete | 2.7.0 |
| bindfocus | eventhandle |  | No | Triggered when the editor gains focus, event.detail = {html, text, delta} | 2.7.0 |
| bindblur | eventhandle |  | No | Triggered when the editor loses focus, detail = {html, text, delta} | 2.7.0 |
| bindinput | eventhandle |  | No | Triggered when the editor content changes, detail = {html, text, delta} | 2.7.0 |
| bindstatuschange | eventhandle |  | No | Triggered when changing styles inside the editor via Context methods, returns the styles set in the selection | 2.7.0 |

## [\#](https://super-apps.ai/mop/document/en/develop/component/form.html\#editor-portal) editor-portal

> Supported starting from Base Library 3.0.45, Android SDK 2.40.11

Custom block used to render the editor component, related interface [EditorContext.insertCustomBlock](https://super-apps.ai/mop/document/en/develop/api/media.html#editorcontext-insertcustomblock).

| Property | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| key | string |  | Yes | Custom block's blockId |  |

**Notes**

1. Use EditorContext.insertCustomBlock to insert a custom block (only placeholder at this time), obtain the returned blockId;
2. Render the  component, and specify the key property as blockId, the content of  will be inserted into the position of the custom block;
3. Due to the underlying rendering reasons of native components, it is not recommended to use native components as custom blocks, there will be exceptions when native components are non-same-layer components.

**Example Code**

```html
<editor id="editor">
  <block ft:for="{{customBlockList}}" ft:key="blockId">
    <editor-portal key="{{item.blockId}}">
      <view class="flex"></view>
    </editor-portal>
  </block>
</editor>
```

```js
Page({
  insertCustomBlock() {
    const { customBlockList } = this.data
    this.editorContext.insertCustomBlock({
      success:(res) => {
        customBlockList.push({
          blockId: res.blockId
        })
        this.setData({ customBlockList })
      }
    })
  }
})
```

## [\#](https://super-apps.ai/mop/document/en/develop/component/form.html\#form) form

| Property | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| report-submit | boolean | false | No | Whether to return formId for sending template messages | 1.0.0 |
| bindsubmit | eventhandle |  | No | Trigger submit event with form data, event.detail = {value : {'name': 'value'} , formId: ''} | 1.0.0 |
| bindreset | eventhandle |  | No | Trigger reset event when the form is reset | 1.0.0 |
| report-submit-timeout | number | 0 | No | Wait for a period of time (in milliseconds) to confirm if formId takes effect. If this parameter is not specified, there is a small probability that formId is invalid (such as encountering network failure). Specifying this parameter will detect if formId is valid, using this parameter's time as the timeout for this detection. If it fails, it will return formId starting with requestFormId:fail | Not supported |

## [\#](https://super-apps.ai/mop/document/en/develop/component/form.html\#label) label

| Property | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| for | string |  | No | ID of the bound control | 1.0.0 |

## [\#](https://super-apps.ai/mop/document/en/develop/component/form.html\#picker) picker

| Property | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| mode | string | selector | No | Selector type | 1.0.0 |
| disabled | boolean | false | No | Whether it is disabled | 1.0.0 |
| confirm-color | string | #586c94 | No | Confirm button text color | 1.0.0 |
| cancel-color | string | #586c94 | No | Cancel button text color | 1.0.0 |
| bindcancel | eventhandle |  | No | Triggered when selection is canceled |  |
| header-text | string |  | No | Title of the selector, only available on Android | Not supported |

### [\#](https://super-apps.ai/mop/document/en/develop/component/form.html\#valid-values-for-mode) Valid values for mode

| Value | Description | Minimum Version |
| --- | --- | --- |
| selector | Ordinary selector |  |
| multiSelector | Multi-column selector |  |
| time | Time selector |  |
| date | Date selector |  |
| region | Province-city-district selector |  |

In addition to the above common properties, the picker has different properties for different modes.

### [\#](https://super-apps.ai/mop/document/en/develop/component/form.html\#multi-column-selector-mode-multiselector) Multi-column selector: mode = multiSelector

| Property | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| range | array/object array | \[\] | No | Valid when mode is selector or multiSelector |  |
| range-key | string |  | No | Valid when mode is selector or multiSelector |  |
| value | array | \[\] | No | Indicates which one (index starts from 0) is selected in the range |  |
| bindchange | eventhandle |  | No | Trigger change event when value changes, event.detail = {value} |  |
| bindcolumnchange | eventhandle |  | No | Triggered when column changes |  |

### [\#](https://super-apps.ai/mop/document/en/develop/component/form.html\#multi-column-selector-mode-time) Multi-column selector: mode = time

| Property | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| value | string |  | No | Represents the selected time, format is "hh:mm" |  |
| start | string |  | No | Represents the start of the valid time range, string format is "hh:mm" |  |
| end | string |  | No | Represents the end of the valid time range, string format is "hh:mm" |  |
| bindchange | eventhandle |  | No | Trigger change event when value changes, event.detail = {value} |  |

### [\#](https://super-apps.ai/mop/document/en/develop/component/form.html\#multi-column-selector-mode-date) Multi-column selector: mode = date

| Property | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| value | string | Today | No | Represents the selected date, format is "YYYY-MM-DD" |  |
| start | string |  | No | Represents the start of the valid date range, string format is "YYYY-MM-DD" |  |
| end | string |  | No | Represents the end of the valid date range, string format is "YYYY-MM-DD" |  |
| fields | string | day | No | Valid values year, month, day, represent the granularity of the selector |  |
| bindchange | eventhandle |  | No | Trigger change event when value changes, event.detail = {value} |  |

### [\#](https://super-apps.ai/mop/document/en/develop/component/form.html\#valid-values-for-fields) Valid values for fields:

| Value | Description | Minimum Version |
| --- | --- | --- |
| year | Selector granularity is year |  |
| month | Selector granularity is month |  |
| day | Selector granularity is day |  |

### [\#](https://super-apps.ai/mop/document/en/develop/component/form.html\#multi-column-selector-mode-region) Multi-column selector: mode = region

| Property | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| value | array | \[\] | No | Represents the selected province-city-district, defaults to selecting the first value of each column |  |
| custom-item | string |  | No |  | Can add a custom item to the top of each column |
| level | string |  | No | region | Selector hierarchy |
| bindchange | eventhandle |  | No | Trigger change event when value changes, event.detail = {value, code, postcode}, where field code is the statistical division code, postcode is the postal code |  |

## [\#](https://super-apps.ai/mop/document/en/develop/component/form.html\#picker-view) picker-view

| Property | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| value | Array |  | No | The numbers in the array sequentially indicate which item (index starts from 0) is selected in the picker-view's picker-view-column. If the number is greater than the length of the picker-view-column options, the last option is selected. | 1.0.0 |
| indicator-style | string |  | No | Set the style of the middle selection box of the picker | 1.0.0 |
| indicator-class | string |  | No | Set the class name of the middle selection box of the picker | 2.11.4 |
| immediate-change | boolean | false | No | Whether to immediately trigger the change event when the finger is released. If not enabled, the change event will be triggered after the scrolling animation ends. | Not supported |
| mask-style | string |  | No | Set the style of the mask layer | 2.11.4 |
| mask-class | string |  | No | Set the class name of the mask layer | 2.11.4 |
| bindchange | eventhandle |  | No | Trigger change event when scrolling selection, event.detail = {value}; value is an array, indicating which item (index starts from 0) is currently selected in the picker-view's picker-view-column | 2.11.4 |
| bindpickstart | eventhandle |  | No | Triggered when scrolling selection begins | 2.11.4 |
| bindpickend | eventhandle |  | No | Triggered when scrolling selection ends | 2.11.4 |

### [\#](https://super-apps.ai/mop/document/en/develop/component/form.html\#picker-view-column) picker-view-column

Scroll selector sub-item. Can only be placed inside picker-view, the height of its child nodes will automatically be set to match the height of the picker-view's selection box.

## [\#](https://super-apps.ai/mop/document/en/develop/component/form.html\#radio) radio

| Property | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| color | string | #09BB07 | No | Radio color, same as CSS color | 1.0.0 |
| value | string |  | No | Radio identifier. When this radio is selected, the change event of radio-group will carry the radio's value | 2.11.4 |
| checked | boolean | false | No | Whether it is currently selected | 2.11.4 |
| disabled | boolean | false | No | Whether it is disabled | 2.11.4 |

## [\#](https://super-apps.ai/mop/document/en/develop/component/form.html\#radio-group) radio-group

| Property | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| bindchange | EventHandle |  | No | Trigger change event when the selected item in the radio-group changes, detail = {value:\[array of selected radio values\]} | 2.11.4 |

## [\#](https://super-apps.ai/mop/document/en/develop/component/form.html\#slider) slider

| Property | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| min | number | 0 | No | Minimum value | 1.0.0 |
| max | number | 100 | No | Maximum value | 1.0.0 |
| step | number | 1 | No | Step size, must be greater than 0 and divisible by (max - min) | 1.0.0 |
| disabled | boolean | false | No | Whether it is disabled | 1.0.0 |
| value | number | 0 | No | Current value | 1.0.0 |
| color | color | #e9e9e9 | No | Background bar color (please use backgroundColor) | 1.0.0 |
| selected-color | color | #1aad19 | No | Selected color (please use activeColor) | 1.0.0 |
| show-value | boolean | false | No | Whether to display the current value | 1.0.0 |
| bindchange | eventhandle |  | No | Triggered after completing a drag, event.detail = {value} | 1.0.0 |
| activeColor | color | #1aad19 | No | Selected color | 2.11.4 |
| backgroundColor | color | #e9e9e9 | No | Background bar color | 2.11.4 |
| block-size | number | 28 | No | Size of the slider block, range is 12 - 28 | 2.11.4 |
| block-color | color | #ffffff | No | Color of the slider block | 2.11.4 |
| bindchanging | eventhandle |  | No | Triggered during dragging, event.detail = {value} | 2.11.4 |

## [\#](https://super-apps.ai/mop/document/en/develop/component/form.html\#switch) switch

| Property | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| checked | boolean | false | No | Whether it is selected | 1.0.0 |
| disabled | boolean | false | No | Whether it is disabled | 1.0.0 |
| type | string | switch | No | Style, valid values: switch, checkbox | 1.0.0 |
| color | string | #04BE02 | No | Switch color, same as CSS color | 1.0.0 |
| bindchange | eventhandle |  | No | Trigger change event when checked changes, event.detail={ value} | 1.0.0 |

## [\#](https://super-apps.ai/mop/document/en/develop/component/form.html\#input) input

| Property | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| value | string |  | Yes | Initial content of the input box | 2.11.4 |
| type | string | text | No | Type of the input | 2.11.4 |
| password | boolean | false | No | Whether it is a password type | 2.11.4 |
| placeholder | string |  | Yes | Placeholder when the input box is empty | 2.11.4 |
| placeholder-style | string |  | Yes | Specifies the style of the placeholder | 2.11.4 |
| placeholder-class | string | input-placeholder | No | Specifies the style class of the placeholder | 2.11.4 |
| disabled | boolean | false | No | Whether to disable | 2.11.4 |
| maxlength | number | 140 | No | Maximum input length, setting to -1 means no maximum length limit | 2.11.4 |
| cursor-spacing | number | 0 | No | Specifies the distance between the cursor and the keyboard, taking the minimum value between the input's distance from the bottom and the specified cursor-spacing as the distance between the cursor and the keyboard |  |
| auto-focus | boolean | false | No | (Deprecated, please use focus directly) Automatically focuses and brings up the keyboard |  |
| focus | boolean | false | No | Get focus |  |
| confirm-type | string | done | No | Sets the text of the button at the bottom right of the keyboard, only effective when type='text' |  |
| cursor | number |  | Yes | Specifies the cursor position when focused |  |
| confirm-hold | boolean | false | No | Whether to keep the keyboard open when clicking the button at the bottom right of the keyboard |  |
| selection-start | number | -1 | No | Starting position of the cursor, valid when automatically focused, must be used with selection-end |  |
| selection-end | number | -1 | No | Ending position of the cursor, valid when automatically focused, must be used with selection-start |  |
| adjust-position | boolean | true | No | Whether to automatically push the page up when the keyboard pops up |  |
| hide-keyboard-when-scroll | boolean | false | No | By default, the input will have logic to dismiss the keyboard when the user scrolls the page, but some non-user-triggered scrolls won't dismiss it. This property controls whether the input should forcibly dismiss the keyboard during non-user-triggered scroll behaviors on the page | 3.5.1 |
| bindinput | eventhandle |  | Yes | Triggered when typing on the keyboard, event.detail = {value, cursor, keyCode}, keyCode is the key value, supported since version 2.1.0. The handler can directly return a string, which will replace the content of the input box. |  |
| bindfocus | eventhandle |  | Yes | Triggered when the input box gains focus, event.detail = { value, height }, height is the keyboard height |  |
| bindblur | eventhandle |  | Yes | Triggered when the input box loses focus, event.detail = {value: value} |  |
| bindconfirm | eventhandle |  | Yes | Triggered when the "Done" button is clicked, event.detail = {value: value} |  |
| bindkeyboardheightchange | eventhandle |  | Yes | Triggered when the keyboard height changes, event.detail = {height: height, duration: duration} |  |
| always-embed | boolean | false | No | Forces the input to remain in the same layer state; by default, the input switches to a non-same-layer state when focused (only effective on iOS) | Not Supported |
| hold-keyboard | boolean | false | No | When focused, clicking elsewhere on the page does not dismiss the keyboard |  |
| safe-password-cert-path | string |  | No | Path to the public key for secure keyboard encryption, only supports paths within the package | Not Supported |
| safe-password-length | number |  | No | Length of the password entered via the secure keyboard | Not Supported |
| safe-password-time-stamp | number |  | No | Timestamp for secure keyboard encryption | Not Supported |
| safe-password-nonce | string |  | No | Salt value for secure keyboard encryption | Not Supported |
| safe-password-salt | string |  | No | Salt value for secure keyboard hash calculation; if custom-hash is specified, this is invalid | Not Supported |
| safe-password-custom-hash | string |  | No | Algorithm expression for calculating the hash of the secure keyboard, e.g., `md5(sha1('foo' + sha256(sm3(password + 'bar'))))` | Not Supported |

### [\#](https://super-apps.ai/mop/document/en/develop/component/form.html\#legal-values-for-type) Legal values for type

| Value | Description | Minimum Version |
| --- | --- | --- |
| text | Text input keyboard |  |
| number | Number input keyboard |  |
| idcard | ID card input keyboard |  |
| digit | Numeric keypad with decimal point |  |

### [\#](https://super-apps.ai/mop/document/en/develop/component/form.html\#legal-values-for-confirm-type) Legal values for confirm-type

| Value | Description | Minimum Version |
| --- | --- | --- |
| send | Bottom-right button is "Send" |  |
| search | Bottom-right button is "Search" |  |
| next | Bottom-right button is "Next" |  |
| go | Bottom-right button is "Go" |  |
| done | Bottom-right button is "Done" |  |

## [\#](https://super-apps.ai/mop/document/en/develop/component/form.html\#textarea) textarea

| Property | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| value | string |  | No | Content of the input box |  |
| placeholder | string |  | No | Placeholder when the input box is empty |  |
| placeholder-style | string |  | No | Specifies the style of the placeholder, currently only supports color, font-size, and font-weight |  |
| placeholder-class | string | textarea-placeholder | No | Specifies the style class of the placeholder |  |
| disabled | boolean | false | No | Whether to disable |  |
| maxlength | number | 140 | No | Maximum input length, setting to -1 means no maximum length limit |  |
| auto-focus | boolean | false | No | Automatically focuses and brings up the keyboard. |  |
| focus | boolean | false | No | Get focus |  |
| auto-height | boolean | false | No | Whether to automatically increase height, when auto-height is set, style.height does not take effect |  |
| cursor-spacing | number | 0 | No | Specifies the distance between the cursor and the keyboard. Takes the minimum value between the textarea's distance from the bottom and the specified cursor-spacing as the distance between the cursor and the keyboard |  |
| cursor | number | -1 | No | Specifies the cursor position when focused |  |
| show-confirm-bar | boolean | true | No | Whether to display the bar above the keyboard with the "Done" button |  |
| selection-start | number | -1 | No | Starting position of the cursor, valid when automatically focused, must be used with selection-end |  |
| selection-end | number | -1 | No | Ending position of the cursor, valid when automatically focused, must be used with selection-start |  |
| adjust-position | boolean | true | No | Whether to automatically push the page up when the keyboard pops up |  |
| hold-keyboard | boolean | false | No | When focused, clicking elsewhere on the page does not dismiss the keyboard |  |
| disable-default-padding | boolean | false | No | Whether to remove the default padding on iOS |  |
| bindfocus | eventhandle |  | No | Triggered when the input box gains focus, event.detail = { value, height }, height is the keyboard height, supported since base library version 1.9.90 |  |
| bindblur | eventhandle |  | No | Triggered when the input box loses focus, event.detail = {value, cursor} |  |
| bindlinechange | eventhandle |  | No | Called when the number of lines in the input box changes, event.detail = {height: 0, heightRpx: 0, lineCount: 0} |  |
| bindinput | eventhandle |  | No | Triggered when typing on the keyboard, event.detail = {value, cursor, keyCode}, keyCode is the key value, currently the tool does not support returning the keyCode parameter. The return value of the bindinput handler will not reflect on the textarea |  |
| bindconfirm | eventhandle |  | No | Triggered when the "Done" button is clicked, event.detail = {value: value} |  |
| bindkeyboardheightchange | eventhandle |  | No | Triggered when the keyboard height changes, event.detail = {height: height, duration: duration} |  |

## [\#](https://super-apps.ai/mop/document/en/develop/component/form.html\#keyboard-accessory) keyboard-accessory

> tip: Maximum view height is 200px

Example code

```text
<textarea hold-keyboard="{{true}}">
  <keyboard-accessory class="container" style="height: 50px;">
    <cover-view bindtap="tap" style="flex: 1; background: green;">1</cover-view>
    <cover-view bindtap="tap" style="flex: 1; background: red;">2</cover-view>
  </keyboard-accessory>
</textarea>
```