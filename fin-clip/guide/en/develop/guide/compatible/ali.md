<!--
Source URL: https://super-apps.ai/mop/document/en/develop/guide/compatible/ali.html
Extracted: 2026-01-12T23:22:38.735Z (January 12, 2026)
Title: Alipay Mini-Program | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

# [\#](https://super-apps.ai/mop/document/en/develop/guide/compatible/ali.html\#alipay-mini-program) Alipay Mini-Program

## [\#](https://super-apps.ai/mop/document/en/develop/guide/compatible/ali.html\#alipay-sample-mini-program) Alipay Sample Mini-Program

### [\#](https://super-apps.ai/mop/document/en/develop/guide/compatible/ali.html\#creation-method) Creation Method

1. Open the Alipay **Mini-Program Developer Tools**
2. Create a new Mini-Program
3. Select the **Alipay** platform
4. Select the **Mini-Program Sample** template
5. Fill in the project name and project path

### [\#](https://super-apps.ai/mop/document/en/develop/guide/compatible/ali.html\#compatibility-status) Compatibility Status

1. Libraries in `node_modules` need to be processed using [Build npm](https://super-apps.ai/mop/document/en/develop/developer/fide-detail.html#_2-1-help-build-npm) first
2. Extension Components are under development for compatibility
3. For other compatibility details, refer to the detailed list below

## [\#](https://super-apps.ai/mop/document/en/develop/guide/compatible/ali.html\#known-issues) Known Issues

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/compatible/ali.html\#some-apis-not-implemented) Some APIs Not Implemented

- Solution: Use [canIUse](https://super-apps.ai/mop/document/en/develop/api/basic.html#caniuse) to check compatibility. For incompatible APIs, it is recommended to avoid using them or consult the documentation to use the APIs provided by the FinClip Mini-Program.

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/compatible/ali.html\#lottie-component-not-supported) Lottie Component Not Supported

- Solution: Currently not supported, pending adaptation.

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/compatible/ali.html\#slot-usage-inconsistency) Slot Usage Inconsistency

1. slot-scope and $slots are not supported.

- Solution: Currently not supported, pending adaptation.

2. Elements inside the `<slot></slot>` tag will not be rendered under any circumstances.

- Solution: Currently not supported, pending adaptation.

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/compatible/ali.html\#page-events-and-component-rootevents-not-supported) Page events and Component rootEvents Not Supported

- Solution: Currently not supported, pending adaptation.

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/compatible/ali.html\#page-configuration-options-onoptionmenuclick-and-ontitleclick-not-supported) Page Configuration Options onOptionMenuClick and onTitleClick Not Supported

- Solution: Currently not supported, pending adaptation.

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/compatible/ali.html\#component-s-page-not-supported) Component's $page Not Supported

- Solution: Currently not supported, pending adaptation.

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/compatible/ali.html\#component-s-derivedatafromprops-differs-from-alipay) Component's deriveDataFromProps Differs from Alipay

Note

1. The value during the initial trigger is the default value, not the value passed from the parent component.
2. It will also trigger when `setData` is called but the `data` or `props` values remain unchanged.

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/compatible/ali.html\#component-s-didupdate-differs-from-alipay) Component's didUpdate Differs from Alipay

Note

The parameters are not the data before modification, and the trigger timing might be incorrect.

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/compatible/ali.html\#inconsistent-lifecycle-execution-for-nested-components) Inconsistent Lifecycle Execution for Nested Components

**Sample Code**

```html
  <comp-a>
    <comp-b/>
  </comp-a>
```

Note

- For a structure like this in a page, the FinClip approach considers `comp-b` as belonging to the page. Therefore, regardless of whether `comp-a` has a slot node, `comp-b` will be created (triggering `created` and `attached` but not `ready`), though it will not be rendered on the page.
- The Alipay approach creates components only if they need to be rendered, meaning `comp-b` belongs to `comp-a`. If `comp-a` has no slot node, `comp-b`'s lifecycle will not be executed.

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/compatible/ali.html\#axml-attribute-format-differs) axml Attribute Format Differs

```html
 <!-- Incorrect -->
<video id="myVideo" src={{src}}></video>

 <!-- Correct -->
 <!-- Quotes must be used -->
 <video id="myVideo" src="{{src}}"></video>
```

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/compatible/ali.html\#data-binding-parsing-differs) Data Binding Parsing Differs

1. Non-expressions are not supported.



```html
<!-- Incorrect -->
<view style="{{ height: activeTab === 1 ? 'auto' : 0 }}"></view>

<!-- Correct -->
<view style="height:{{ activeTab === 1 ? 'auto' : 0 }}"></view>
```

2. Template strings are not supported.



```html
<!-- Incorrect -->
<view style="{{`width: ${size}; height: ${size};`}}"></view>

<!-- Correct -->
<view style="width: {{size}};height: {{size}}"></view>

<!-- Incorrect -->
<view style="{{(src ? `background-image: url('${src}'); background-color: transparent` : '')}}"></view>

<!-- Correct -->
<view style="{{src ? 'background-image: url('+ src +'); background-color: transparent' : ''}}"></view>
```

3. Objects are not supported for the `style` attribute.



```html
<!-- Incorrect -->
<view style="{{{width:size,heigth:size}}}"></view>

<!-- Correct -->
<view style="width: {{size}};height: {{size}}"></view>
```


#### [\#](https://super-apps.ai/mop/document/en/develop/guide/compatible/ali.html\#mixin-does-not-support-merging-alipay-lifecycles) Mixin Does Not Support Merging Alipay Lifecycles

Note

The Alipay lifecycles (`onInit`, `deriveDataFromProps`, `didMount`, `didUpdate`, `didUnmount`, `onError`) defined in a `Mixin` will not be merged with those defined in the custom component. The lifecycle methods defined in the custom component will be used directly. Lifecycles defined within `lifetimes` will follow the normal merging logic.

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/compatible/ali.html\#background-image-does-not-support-local-paths) background-image Does Not Support Local Paths

- Solution: Currently not supported, pending adaptation. Alternatively, use the `image` component.

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/compatible/ali.html\#dataset-does-not-support-setting-objects) dataset Does Not Support Setting Objects

- Solution: Currently not supported, pending adaptation. Alternatively, serialize the data using `JSON.stringify` and parse it using `JSON.parse` when needed.

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/compatible/ali.html\#inconsistent-behavior-when-passing-data-to-class-via-props) Inconsistent Behavior When Passing Data to class via props

Note

1. If data is passed to a `class` via `props`, this data might be affected by style isolation. For example, if the data passed via `props` is `hot`, the actual class rendered on the page might be something like `class-prefix--hot`.
2. It is recommended to use `externalClasses` instead.

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/compatible/ali.html\#createselectorquery-behavior-differs) createSelectorQuery Behavior Differs

Note

`my.createSelectorQuery()` does not support searching directly across the entire page and cannot penetrate components. It needs to be changed to `this.createSelectorQuery()`, or `.in(this)` needs to be called multiple times to restrict the search to the corresponding component. Alternatively, add a class to the parent level of the component and use the `>>>` selector in the selector query to find element nodes inside the component.

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/compatible/ali.html\#pickerview-component-requires-width-and-height-settings-for-proper-rendering) pickerview Component Requires Width and Height Settings for Proper Rendering

Note

In Alipay Mini-Programs, `pickerview` can render without setting width and height. In FinClip Mini-Programs, width and height must be set; otherwise, it will render with a width and height of `0`.

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/compatible/ali.html\#input-component-maxlength-default-value) input Component maxlength Default Value

Note

In FinClip Mini-Programs, if `maxlength` of the `input` component is bound to `undefined`, it will be converted to `0`, preventing input. If `maxlength` does not need to be set, do not set it to `undefined`.

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/compatible/ali.html\#scroll-view-component-flex-layout-usage-differs) scroll-view Component Flex Layout Usage Differs

Note

If `scroll-view` needs to control the layout of internal elements via `flex`, `enable-flex` must be enabled on the `scroll-view`.

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/compatible/ali.html\#canvas-creation-method-differs) canvas Creation Method Differs

Note

The canvas creation method used in Alipay Mini-Programs corresponds to the legacy version in FinClip Mini-Programs. It needs to be changed to the new version [Canvas API](https://super-apps.ai/mop/document/en/develop/api/canvas.html#createcanvascontext).

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/compatible/ali.html\#usage-of-third-party-libraries) Usage of Third-Party Libraries

Note

Alipay does not require `Build npm`, so files within `node_modules` can be directly referenced during development. In FinClip Mini-Programs, `Build npm` must be performed first, which means only the main file specified by the npm package can be referenced.

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/compatible/ali.html\#custom-component-rendering-method) Custom Component Rendering Method

- Because the actual method of creating node elements differs, Alipay custom components do not create a real DOM node as a wrapper. This allows flex layout to directly control elements inside and outside the component. FinClip Mini-Programs create a real DOM node, which isolates the component, preventing direct control of internal and external elements using flex layout.

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/compatible/ali.html\#alipay-mini-program-plugin-functionality-not-currently-supported) Alipay Mini-Program Plugin Functionality Not Currently Supported

- Solution: Currently not supported, pending adaptation.