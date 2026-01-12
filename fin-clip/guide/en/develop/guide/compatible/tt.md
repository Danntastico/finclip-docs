<!--
Source URL: https://super-apps.ai/mop/document/en/develop/guide/compatible/tt.html
Extracted: 2026-01-12T23:22:41.712Z (January 12, 2026)
Title: ByteDance Mini-Program | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

# [\#](https://super-apps.ai/mop/document/en/develop/guide/compatible/tt.html\#bytedance-mini-program) ByteDance Mini-Program

## [\#](https://super-apps.ai/mop/document/en/develop/guide/compatible/tt.html\#bytedance-example-mini-program) ByteDance Example Mini-Program

### [\#](https://super-apps.ai/mop/document/en/develop/guide/compatible/tt.html\#creation-method) Creation Method

1. Open ByteDance's **Douyin Developer Tools**
2. Create a new Mini-Program
3. Select the **Mini-Program Capability Demo** template

### [\#](https://super-apps.ai/mop/document/en/develop/guide/compatible/tt.html\#compatibility-status) Compatibility Status

1. Libraries in `node_modules` need to be built first using [Build npm](https://super-apps.ai/mop/document/en/develop/developer/fide-detail.html#_2-1-help-build-npm)
2. For other compatibility details, refer to the detailed list below

## [\#](https://super-apps.ai/mop/document/en/develop/guide/compatible/tt.html\#known-issues) Known Issues

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/compatible/tt.html\#some-apis-are-not-implemented) Some APIs Are Not Implemented

- Solution: Use [canIUse](https://super-apps.ai/mop/document/en/develop/api/basic.html#caniuse) to check compatibility. For incompatible APIs, it is recommended to avoid using them or refer to the documentation to use the APIs provided by FinClip Mini-Program.

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/compatible/tt.html\#slot-scope-is-not-supported) slot-scope Is Not Supported

- Solution: Currently not supported, pending adaptation.

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/compatible/tt.html\#lifecycle-execution-timing-is-inconsistent) Lifecycle Execution Timing Is Inconsistent

Note

- ByteDance Mini-Program lifecycle trigger order: Page onLoad -> Component created -> Component attached -> Page onShow
- FinClip Mini-Program lifecycle trigger order: Component created -> Component attached -> Page onLoad -> Page onShow

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/compatible/tt.html\#lifecycle-execution-for-nested-components-may-be-inconsistent) Lifecycle Execution for Nested Components May Be Inconsistent

**Example Code**

```html
  <comp-a>
    <comp-b/>
  </comp-a>
```

Note

- For such a structure in a page, FinClip's approach considers comp-b as belonging to the page. Therefore, regardless of whether comp-a has slot nodes, comp-b will be created (triggering created and attached, but not ready), though it will not be rendered.
- ByteDance's approach creates comp-b only when rendering is required, meaning comp-b belongs to comp-a. If comp-a has no slot nodes, comp-b's lifecycle will not be executed.

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/compatible/tt.html\#ttml-attribute-format-differs) ttml Attribute Format Differs

```html
 <!-- Incorrect -->
 <video id="myVideo" src={{src}}></video>

 <!-- Correct -->
 <!-- Must use quotes -->
 <video id="myVideo" src="{{src}}"></video>
```

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/compatible/tt.html\#setdata-saving-canvas-or-canvascontext-will-cause-an-error) setData Saving canvas or canvasContext Will Cause an Error

- Since canvas or canvasContext is not related to rendering, you can directly save it to the instance using `this.canvas = canvas`.

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/compatible/tt.html\#style-files-do-not-support-id-selectors) Style Files Do Not Support ID Selectors

- Solution: Currently not supported, pending adaptation.

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/compatible/tt.html\#bytedance-mini-program-plugins-and-bytedance-mini-games-are-not-currently-supported) ByteDance Mini-Program Plugins and ByteDance Mini-Games Are Not Currently Supported

- Solution: Currently not supported, pending adaptation.