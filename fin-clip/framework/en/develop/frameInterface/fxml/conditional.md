<!--
Source URL: https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/conditional.html
Extracted: 2026-01-12T23:18:23.026Z (January 12, 2026)
Title: Conditional Rendering | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Mini Program Configuration](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/conditional.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Framework API](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/conditional.html) [![](https://super-apps.ai/mop/document/images/arrow_open.svg)\\
FXML Syntax](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/intro.html)

- [Introduction](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/intro.html)
- [Data Binding](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/data.html)
- [List Rendering](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/list.html)
- [Conditional Rendering](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/conditional.html)
- [Templates](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/template.html)
- [Reference](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/import.html)

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
FTS Syntax](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/conditional.html)

# [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/conditional.html\#conditional-rendering) Conditional Rendering

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/conditional.html\#_1-wx-if) 1\. wx:if

In the framework, use `wx:if=""` to determine whether to render the code block:

```html
<view wx:if="{{condition}}"> True </view>

        Code copied

```

You can also use `wx:elif` and `wx:else` to add an else block:

```html
<view wx:if="{{length > 5}}"> 1 </view>
<view wx:elif="{{length > 2}}"> 2 </view>
<view wx:else> 3 </view>

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/conditional.html\#_2-block-wx-if) 2\. block wx:if

Since `wx:if` is a control attribute, it needs to be added to a tag. If you need to conditionally render multiple component tags at once, you can wrap them with a `<block/>` tag and apply the `wx:if` control attribute on it.

```html
<block wx:if="{{true}}">
  <view> view1 </view>
  <view> view2 </view>
</block>

        Code copied

```

Note

`<block/>` is not a component; it is merely a wrapper element that does not render anything on the page and only accepts control attributes.

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/conditional.html\#_3-wx-if-vs-hidden) 3\. wx:if vs hidden

Since templates within `wx:if` may contain data bindings, when the condition value of `wx:if` changes, the framework performs a partial rendering process to ensure the conditional block is destroyed or re-rendered upon switching.

Additionally, `wx:if` is lazy. If the initial rendering condition is `false`, the framework does nothing. It only starts partial rendering when the condition becomes true for the first time.

In contrast, `hidden` is much simpler. The component is always rendered, and `hidden` merely controls its visibility.

Generally, `wx:if` has higher switching costs, while `hidden` has higher initial rendering costs. Therefore, `hidden` is preferable for scenarios requiring frequent toggling, whereas `wx:if` is better if the condition is unlikely to change at runtime.

[Previous：List Rendering](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/list.html)[Next：Templates](https://super-apps.ai/mop/document/en/develop/frameInterface/fxml/template.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)