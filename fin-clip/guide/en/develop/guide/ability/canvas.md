<!--
Source URL: https://super-apps.ai/mop/document/en/develop/guide/ability/canvas.html
Extracted: 2026-01-12T23:21:50.847Z (January 12, 2026)
Title: Canvas | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Overview](https://super-apps.ai/mop/document/en/develop/guide/feature.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Understand Mini Program](https://super-apps.ai/mop/document/en/develop/guide/ability/canvas.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Configure Mini Program](https://super-apps.ai/mop/document/en/develop/guide/ability/canvas.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Mini Program Framework](https://super-apps.ai/mop/document/en/develop/guide/ability/canvas.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Custom Component](https://super-apps.ai/mop/document/en/develop/guide/component.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Mini Program Plugin](https://super-apps.ai/mop/document/en/develop/guide/plugin.html) [![](https://super-apps.ai/mop/document/images/arrow_open.svg)\\
Basic Abilities](https://super-apps.ai/mop/document/en/develop/guide/ability/storage.html)

- [Storage](https://super-apps.ai/mop/document/en/develop/guide/ability/storage.html)
- [File System](https://super-apps.ai/mop/document/en/develop/guide/ability/file-system.html)
- [Subpackages](https://super-apps.ai/mop/document/en/develop/guide/ability/subpackages.html)
- [Canvas](https://super-apps.ai/mop/document/en/develop/guide/ability/canvas.html)
- [Custom TabBar](https://super-apps.ai/mop/document/en/develop/guide/ability/custom-tabbar.html)
- [Lazy Load](https://super-apps.ai/mop/document/en/develop/guide/ability/lazyload.html)
- [Worker (Beta)](https://super-apps.ai/mop/document/en/develop/guide/ability/worker.html)
- [DarkMode Guide](https://super-apps.ai/mop/document/en/develop/guide/ability/dark-mode.html)
- [Background Data Fetch](https://super-apps.ai/mop/document/en/develop/guide/ability/background-data.html)

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Import from 3rd-party (beta)](https://super-apps.ai/mop/document/en/develop/guide/ability/canvas.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
SSO Login Guide](https://super-apps.ai/mop/document/en/develop/guide/ssoLogin.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Traceability (beta)](https://super-apps.ai/mop/document/en/develop/guide/trace.html)

# [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/canvas.html\#canvas) Canvas

The Canvas component provides a drawing interface that allows arbitrary drawing operations. All drawing within Canvas must be completed using `JavaScript`.

```html
<canvas canvas-id="myCanvas" style="border: 1px solid;"/>

        Code copied

```

```javascript
const ctx = ft.createCanvasContext('myCanvas')
ctx.setFillStyle('red')
ctx.fillRect(10, 10, 150, 75)
ctx.draw()

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/canvas.html\#_1-using-canvas) 1\. Using Canvas

### [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/canvas.html\#_1-1-creating-a-canvas-drawing-context) 1.1 Creating a Canvas Drawing Context

First, we need to create a Canvas drawing context CanvasContext.

CanvasContext is a built-in object in Mini-Programs that provides various drawing methods:

```javascript
const ctx = ft.createCanvasContext('myCanvas')

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/canvas.html\#_1-2-using-canvas-context-for-drawing-description) 1.2 Using Canvas Context for Drawing Description

Next, we describe what content to draw within the Canvas.

Set the fill color of the drawing context to red:

```javascript
ctx.setFillStyle('red')

        Code copied

```

Draw a rectangle using the fillRect(x, y, width, height) method, filled with the previously set red color:

```javascript
ctx.fillRect(10, 10, 150, 75)

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/canvas.html\#_1-3-drawing) 1.3 Drawing

Instruct the canvas component to render the previously described drawing:

```javascript
ctx.draw()

        Code copied

```

[Previous：Subpackages](https://super-apps.ai/mop/document/en/develop/guide/ability/subpackages.html)[Next：Custom TabBar](https://super-apps.ai/mop/document/en/develop/guide/ability/custom-tabbar.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)