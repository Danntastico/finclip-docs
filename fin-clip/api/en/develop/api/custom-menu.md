<!--
Source URL: https://super-apps.ai/mop/document/en/develop/api/custom-menu.html
Extracted: 2026-01-12T23:13:08.527Z (January 12, 2026)
Title: Custom Menu | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

# [\#](https://super-apps.ai/mop/document/en/develop/api/custom-menu.html\#custom-menu) Custom Menu

## [\#](https://super-apps.ai/mop/document/en/develop/api/custom-menu.html\#_1-mini-program-more-menu-feature-description) 1\. Mini-Program More Menu Feature Description

To support different business requirements within the App, such as supporting sharing to different platforms, the current SDK supports custom menus within the more panel. Custom menus are categorized into two types based on their behavior: `onMiniProgram` and `common`.

- `common`: This type does not require additional handling by the Mini-Program.
- `onMiniProgram`: When this type of menu is clicked, it will request data from the Mini-Program to provide to the App's business logic.

Detailed description of menu types:

1. For `common` type custom menus, when a user clicks the menu, a delegate event is triggered directly to the Host-App. The current page of the Mini-Program does not need to add any logic.


Note

The `common` type has two fixed IDs: `WXShareAPPFriends` and `WXShareAPPMoments`. The Mini-Program page's .js file must declare an `onShareAppMessage` function.

2. For `onMiniProgram` type custom menus, when a user clicks the menu, the current Mini-Program page's `on{MenuId}ButtonHandler` event is called first. After obtaining the page data from the Mini-Program, a delegate event is then triggered to the Host-App. Its behavior flow is somewhat similar to the Page API `onShareAppMessage`. Therefore, if the corresponding event handler is not implemented on the current Mini-Program page for an `onMiniProgram` type custom menu, that menu will not be displayed.


Note

Custom more menu items require joint implementation by the App and the Mini-Program. For details regarding the App-side work, please refer to [UI Customization - Setting Mini-Program More Menu](https://super-apps.ai/mop/document/en/runtime-sdk/custom-ui/set-more-menu.html#_8-%E8%87%AA%E8%A1%8C%E6%B3%A8%E5%85%A5%E6%9B%B4%E5%A4%9A%E9%9D%A2%E6%9D%BF%E9%87%8C%E7%9A%84%E8%8F%9C%E5%8D%95%E9%A1%B9).

## [\#](https://super-apps.ai/mop/document/en/develop/api/custom-menu.html\#_2-mini-program-more-menu-example) 2\. Mini-Program More Menu Example

For example: To implement the `onMiniProgram` type menu items \["Share to DingTalk"\] and \["Share to Sina Weibo"\] within the App's more menu (This section only explains the processing required within the Mini-Program).

### [\#](https://super-apps.ai/mop/document/en/develop/api/custom-menu.html\#_2-1-share-ids) 2.1 Share IDs

- The Management Console configures the "Share to DingTalk" menu ID as `ShareDingDing`.
- The Management Console configures the "Share to Sina Weibo" menu ID as `ShareSinaWeibo`.

### [\#](https://super-apps.ai/mop/document/en/develop/api/custom-menu.html\#_2-2-share-configuration) 2.2 Share Configuration

Within the corresponding Mini-Program page, configure the `onShareDingDingButtonHandler` and `onShareSinaWeiboButtonHandler` functions (If the corresponding function is not configured, the SDK will not display the corresponding menu).

**Mini-Program Configuration Method**:

`on{id}ButtonHandler` (id is capitalized)

The function must return information such as `title`, `appInfo`, etc., which will be passed through to the SDK for processing.

**Complete Flow**:

When the \["Share to DingTalk"\] menu item is clicked, the `onShareDingDingButtonHandler` function is called, its returned data is passed through to the SDK for processing.

Note

In the Mini-Program code, to maintain naming consistency and standardization with `onShareAppMessage`, the ID will be uniformly converted to have its first letter capitalized during processing.

**More Examples**

- If the ID is `shareWeibo`, the Mini-Program needs to configure `onShareWeiboButtonHandler`;
- If the ID is `shareDingDing`, the Mini-Program needs to configure `onShareDingDingButtonHandler`;
- If the ID is `doSomething`, the Mini-Program needs to configure `onDoSomethingButtonHandler`;
- If the ID is `ShareQQ`, the Mini-Program needs to configure `onShareQQButtonHandler`.

```javascript
Page({
  // ...

  // Custom handler
  onShareDingDingButtonHandler(e) {
    return {
      title: "onShareDingDingButtonHandler custom title",
      appInfo: {
        // Other additional information
      },
      success(res) {
        console.log('share success callback', res)
      },
      fail(res) {
        console.log('share fail callback', res)
      }
    }
  },

  // Custom handler
  onShareSinaWeiboButtonHandler(e) {
    return {
      title: "onShareSinaWeiboButtonHandler custom title",
      appInfo: {
        // Other additional information
      },
      success(res) {
        console.log('share success callback', res)
      },
      fail(res) {
        console.log('share fail callback', res)
      }
    }
  },

  onShareAppMessage(res) {
    return {
      title: 'onShareAppMessage custom title',
      appInfo: {
        // Other additional information
      },
      success(res) {
        console.log('share success', res)
      },
      fail(res) {
        console.log('share fail', res)
      }
    }
  }
})
```