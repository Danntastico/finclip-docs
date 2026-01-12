<!--
Source URL: https://super-apps.ai/mop/document/en/develop/lowcode/action-event.html
Extracted: 2026-01-12T23:15:49.624Z (January 12, 2026)
Title: Navigate (navigateTo) | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
FinClip Studio](https://super-apps.ai/mop/document/en/develop/lowcode/action-event.html) [![](https://super-apps.ai/mop/document/images/arrow_open.svg)\\
Low-code Development](https://super-apps.ai/mop/document/en/develop/developer/low-code.html)

- [FinClip Studio Low-code Guide](https://super-apps.ai/mop/document/en/develop/developer/low-code.html)
- [Component List](https://super-apps.ai/mop/document/en/develop/lowcode/component-details.html)
- [Action & Event Binding](https://super-apps.ai/mop/document/en/develop/lowcode/action-event.html)
- [JS Usage](https://super-apps.ai/mop/document/en/develop/lowcode/js.html)
- [Troubleshooting](https://super-apps.ai/mop/document/en/develop/lowcode/error-check.html)

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
FinClip App](https://super-apps.ai/mop/document/en/develop/lowcode/action-event.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Generate App from Mini Program](https://super-apps.ai/mop/document/en/develop/lowcode/action-event.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Generate HarmonyOS App from Mini Program](https://super-apps.ai/mop/document/en/develop/lowcode/action-event.html)

## [\#](https://super-apps.ai/mop/document/en/develop/lowcode/action-event.html\#navigate-navigateto) Navigate (navigateTo)

This event allows users to navigate between internal pages of the application or to external URLs. It can be triggered on any widget action, such as a Button's onClick, a Dropdown's onOptionChange, etc. In the navigateTo function, enter the page name or external URL (triggered under actions like onClick), input Query parameters if needed, and select the destination for the new page (new window or same window).

**JS Format**

```text
navigateTo(pageName | Url: string, params?: {}, target: "SAME_WINDOW" | "NEW_WINDOW") -> Promise

        Code copied

```

**Parameters**

| Property | Description |
| --- | --- |
| pageName or Url | The page name or URL you wish to navigate to. PageName is case-sensitive. |
| params (Optional) | Query parameters passed via the URL, used to share information with the target page. |
| target (Optional) | Configures where to open the URL, defaults to the current window. |

**Corresponding Action Event**

![](https://super-apps.ai/mop/document/assets/img/navigateTo1.486b34d5.png)

**Example**

For example, if Page1 wants to share certain data with Page2:

- Select "Navigate to" for the onClick event of a button component.

- Select Page: Choose Page2.

- Enter the following code in the Query Parameters field.


![](https://super-apps.ai/mop/document/assets/img/navigateTo2.7f8d366b.png)

- After clicking to navigate, on Page2, the data can be retrieved via `global.URL.queryParams`.

![](https://super-apps.ai/mop/document/assets/img/navigateTo3.1142ead2.png)

If clicking navigates to a new window, the parameters will be obtained from the URL in the new window.

![](https://super-apps.ai/mop/document/assets/img/navigateTo4.eca8352f.png)

## [\#](https://super-apps.ai/mop/document/en/develop/lowcode/action-event.html\#show-message-alert-showalert) Show Message Alert (showAlert)

Displays a temporary message alert to the user, lasting for 5 seconds. The duration of the alert message cannot be modified.

**Format**

```text
showAlert(message: string, style: string)

        Code copied

```

**Parameters**

| Property | Description |
| --- | --- |
| Message | The message text you want to display. |
| Style (Alert Type) | The style of the alert message. Can be one of "info", "success", "error", or "warning". |

**Example**

- Select "Show Message Alert" for the onClick event of a button and fill in the alert message content.

- Info, success, error, and warning type alerts are shown in the figure below respectively.


![](https://super-apps.ai/mop/document/assets/img/toast.6d2ecf86.png)

## [\#](https://super-apps.ai/mop/document/en/develop/lowcode/action-event.html\#open-close-modal) Open/Close Modal

This function is used to open a modal when triggered.

**Format**

Open Modal

```text
showModal(modalName: string)

        Code copied

```

Close Modal

```text
closeModal(modalName: string)

        Code copied

```

| Property | Description |
| --- | --- |
| Modal Name | The name of the modal to display. |

**Example**

Please Note

Remember to create the modal before attempting to open it.

- Select "Open Modal" for the onClick event of a button.

- After clicking the button, the modal will be displayed.


![](https://super-apps.ai/mop/document/assets/img/popup.553a0e9f.png)

![](https://super-apps.ai/mop/document/assets/img/popup1.0901cac9.png)

- To close the modal, simply click the close (X) button in the top-right corner of the modal, or call `closeModal(modalName: string)` elsewhere.

## [\#](https://super-apps.ai/mop/document/en/develop/lowcode/action-event.html\#global-data) Global Data

The storeValue() function saves data in the browser as key-value pairs, accessible via the browser's localstorage, and can be accessed anywhere in the application later.

### [\#](https://super-apps.ai/mop/document/en/develop/lowcode/action-event.html\#storevalue) storeValue

- Store Data

**Format**

```text
storeValue(key: string, value: any, persist? = true)

        Code copied

```

If you wish to store the text from an input component, you can use storeValue():

```text
{{storeValue('email',input1.text)}}

        Code copied

```

- Read Data

> Values in the store can be accessed by referencing the key within the store object.

```text
 {{ global.store.key }}

        Code copied

```

- Modify Data

Values saved in the store can be updated by overwriting the data using its key.

For example, to update a boolean value from True to False using the key `isActive`, you can do the following:

```text
export default {
    updateStore: () => {
        if(global.store.isActive === true)
            storeValue("isActive", false)
    }
}

        Code copied

```

If you need to store many values, instead of calling the storeValue function multiple times, it is recommended to use an object format to store the values. All values can be assigned in a single storeValue() function, as shown below:

```text
storeValue("user", { "name": "Bar Crouch", "email": "bar@appsmith.com", "pin": "9984"})

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/lowcode/action-event.html\#removevalue) removeValue

This function clears the value for a specified key in the store.

```text
{{removeValue(key)}}

        Code copied

```

Refer to the code below, which uses a JSObject to delete the value for the key `isActive`:

```text
export default {
    deleteStore: () => {
        // Delete value for a particular key
        removeValue("isActive")
            }
}

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/lowcode/action-event.html\#clearstore) clearStore

This function clears all data in the application's store.

```text
{{clearStore()}}

        Code copied

```

- Corresponding Action Event

![](https://super-apps.ai/mop/document/assets/img/storevalue.821d5566.png)

## [\#](https://super-apps.ai/mop/document/en/develop/lowcode/action-event.html\#copy-to-clipboard) Copy to Clipboard

This function is used to copy text to the clipboard.

**Format**

```text
copyToClipboard(data: string, options: object)

        Code copied

```

![](https://super-apps.ai/mop/document/assets/img/copy.fea7ef7e.png)

**Example**

For example: Select to copy the content of an input component in a button component's action.

![](https://super-apps.ai/mop/document/assets/img/copy1.4846749a.png)

## [\#](https://super-apps.ai/mop/document/en/develop/lowcode/action-event.html\#timer) Timer

Timed events (timer functions in JavaScript) allow users to run APIs and DB queries periodically. You can configure these using the setInterval and clearInterval functions.

### [\#](https://super-apps.ai/mop/document/en/develop/lowcode/action-event.html\#setinterval) setInterval()

setInterval() executes a callback function at fixed time intervals.

```text
setInterval(callbackFunction: function, interval: number, id?: string)

        Code copied

```

**Parameters**

| Property | Description |
| --- | --- |
| callbackFunction | The function to be repeatedly called at the specified time interval. |
| interval | The time, in milliseconds, to wait between calls to the callbackFunction (i.e., the interval). |
| id | A unique identifier for the timer. This id is used with clearInterval to clear the timer. |

**Corresponding Action Event**

![](https://super-apps.ai/mop/document/assets/img/setinterval.438e990e.png)

**Example**

This timer will execute Query1.run() every 10 seconds:

```text
setInterval(() => { Query1.run() }, 10000, "myTimer");

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/lowcode/action-event.html\#clearinterval) clearInterval()

This function clears a timer, preventing it from consuming memory.

```text
clearInterval(id: string)

        Code copied

```

**Parameters**

| Property | Description |
| --- | --- |
| id | The id of the timer that needs to be cleared. |

**Corresponding Action Event**

![](https://super-apps.ai/mop/document/assets/img/clearInterval.a9fa6ffd.png)

[Previous：Component List](https://super-apps.ai/mop/document/en/develop/lowcode/component-details.html)[Next：JS Usage](https://super-apps.ai/mop/document/en/develop/lowcode/js.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)