<!--
Source URL: https://super-apps.ai/mop/document/en/develop/api/canvas.html
Extracted: 2026-01-12T23:12:43.371Z (January 12, 2026)
Title: Canvas | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
API Overview](https://super-apps.ai/mop/document/en/develop/api/overview.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Basic](https://super-apps.ai/mop/document/en/develop/api/basic.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Routing](https://super-apps.ai/mop/document/en/develop/api/route.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Navigation](https://super-apps.ai/mop/document/en/develop/api/navigate.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Forwarding](https://super-apps.ai/mop/document/en/develop/api/forward.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Interface](https://super-apps.ai/mop/document/en/develop/api/interface.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Network](https://super-apps.ai/mop/document/en/develop/api/network.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Data Cache](https://super-apps.ai/mop/document/en/develop/api/storage.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Media](https://super-apps.ai/mop/document/en/develop/api/media.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Map](https://super-apps.ai/mop/document/en/develop/api/map.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Location](https://super-apps.ai/mop/document/en/develop/api/location.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
File](https://super-apps.ai/mop/document/en/develop/api/file.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Device](https://super-apps.ai/mop/document/en/develop/api/device.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Canvas](https://super-apps.ai/mop/document/en/develop/api/canvas.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Worker (Beta)](https://super-apps.ai/mop/document/en/develop/api/worker.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
FXML](https://super-apps.ai/mop/document/en/develop/api/fxml.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Custom Menu](https://super-apps.ai/mop/document/en/develop/api/custom-menu.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Other](https://super-apps.ai/mop/document/en/develop/api/other.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Cloud Development](https://super-apps.ai/mop/document/en/develop/api/cloud.html)

# [\#](https://super-apps.ai/mop/document/en/develop/api/canvas.html\#canvas) Canvas

## [\#](https://super-apps.ai/mop/document/en/develop/api/canvas.html\#createcanvascontext) createCanvasContext

**CanvasContext ft.createCanvasContext(string canvasId, Object this)**

Creates a CanvasContext drawing context object for the canvas.

This API is deprecated

It is recommended to use ft.selectorQuery to obtain the canvas node.

**Parameters**

**string canvasId**

The canvas-id attribute of the canvas component for which to obtain the context.

**Object this**

In custom components, the this of the current component instance, indicating to search for the canvas with the canvas-id within this custom component. If omitted, the search will not be limited to any custom component.

**Return Value**

**CanvasContext**

## [\#](https://super-apps.ai/mop/document/en/develop/api/canvas.html\#canvastotempfilepath) canvasToTempFilePath

**CanvasContext ft.canvasToTempFilePath(Object object, Object this)**
Exports the content of the specified area of the current canvas to generate an image of the specified size. This method must be called within the draw() callback to ensure successful image export.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| x | number | 0 | No | The x-coordinate of the top-left corner of the specified canvas area. |  |
| y | number | 0 | No | The y-coordinate of the top-left corner of the specified canvas area. |  |
| width | number | canvas width - x | No | The width of the specified canvas area. |  |
| height | number | canvas height - y | No | The height of the specified canvas area. |  |
| destWidth | number | width \* pixel density of the screen | No | The width of the output image. |  |
| destHeight | number | height \* pixel density of the screen | No | The height of the output image. |  |
| canvasId | string |  | No | Canvas identifier, pass the canvas-id of the canvas component. |  |
| canvas | Object |  | No | Canvas identifier, pass the canvas component instance (used when canvas type="2d"). |  |
| fileType | string | png | No | The type of the target file. | Valid values are jpg and png. |
| quality | number |  | No | The quality of the image, currently only effective for jpg. Value range is (0, 1\], values outside this range are treated as 1.0. | Not supported. |
| success | function |  | No | Callback function for successful API call. |  |
| fail | function |  | No | Callback function for failed API call. |  |
| complete | function |  | No | Callback function for the end of the API call (executed regardless of success or failure). |  |

**Valid Values for object.fileType**

| Value | Description | Minimum Version |
| --- | --- | --- |
| jpg | jpg image |  |
| png | png image |  |

**object.success Callback Function**

**Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| tempFilePath | string | Temporary file path of the generated file (local path). |

**Object this**

In custom components, the this of the current component instance, to operate the canvas component within the component.

**Example Code**

```javascript
ft.canvasToTempFilePath({
  x: 100,
  y: 200,
  width: 50,
  height: 50,
 destWidth: 100,
 destHeight: 100,
  canvasId: 'myCanvas',
  success(res) {
    console.log(res.tempFilePath)
  }
})

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/api/canvas.html\#canvasputimagedata) canvasPutImageData

**CanvasContext ft.canvasPutImageData(Object object, Object this)**
Draws pixel data onto the canvas. In custom components, pass the custom component instance this as the second parameter to operate the canvas component within the component.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| canvasId | string |  | Yes | Canvas identifier, pass the canvas-id attribute of the canvas component. |
| data | Uint8ClampedArray |  | Yes | Image pixel data, a one-dimensional array where every four items represent the rgba of a pixel. |
| x | number |  | Yes | The offset of the source image data on the target canvas (offset in the x-axis direction). |
| y | number |  | Yes | The offset of the source image data on the target canvas (offset in the y-axis direction). |
| width | number |  | Yes | The width of the rectangular area of the source image data. |
| height | number |  | Yes | The height of the rectangular area of the source image data. |
| success | function |  | No | Callback function for successful API call. |
| fail | function |  | No | Callback function for failed API call. |
| complete | function |  | No | Callback function for the end of the API call (executed regardless of success or failure). |

**Object this**

In custom components, the this of the current component instance, to operate the canvas component within the component.

**Example Code**

```javascript
const data = new Uint8ClampedArray([255, 0, 0, 1])
ft.canvasPutImageData({
  canvasId: 'myCanvas',
  x: 0,
  y: 0,
  width: 1,
  height: 1,
  data: data,
  success (res) {}
})

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/api/canvas.html\#canvasgetimagedata) canvasGetImageData

**CanvasContext ft.canvasGetImageData(Object object, Object this)**
Gets the implicit pixel data of the canvas area.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| canvasId | string |  | Yes | Canvas identifier, pass the canvas-id attribute of the canvas component. |
| x | number |  | Yes | The x-coordinate of the top-left corner of the rectangular area of image data to be extracted. |
| y | number |  | Yes | The y-coordinate of the top-left corner of the rectangular area of image data to be extracted. |
| width | number |  | Yes | The width of the rectangular area of image data to be extracted. |
| height | number |  | Yes | The height of the rectangular area of image data to be extracted. |
| success | function |  | No | Callback function for successful API call. |
| fail | function |  | No | Callback function for failed API call. |
| complete | function |  | No | Callback function for the end of the API call (executed regardless of success or failure). |

**object.success Callback Function**

**Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| width | number | The width of the image data rectangle. |
| height | number | The height of the image data rectangle. |
| data | Uint8ClampedArray | Image pixel data, a one-dimensional array where every four items represent the rgba of a pixel. |

**Object this**

In custom components, the this of the current component instance, to operate the canvas component within the component.

**Example Code**

```javascript
ft.canvasGetImageData({
  canvasId: 'myCanvas',
  x: 0,
  y: 0,
  width: 100,
  height: 100,
  success(res) {
    console.log(res.width) // 100
    console.log(res.height) // 100
    console.log(res.data instanceof Uint8ClampedArray) // true
    console.log(res.data.length) // 100 * 100 * 4
  }
})

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/api/canvas.html\#canvascontext) CanvasContext

The drawing context of the canvas component. CanvasContext is the legacy interface; the new Canvas 2D interface is consistent with the Web standard.

**Properties**

- **string\|CanvasGradient fillStyle**


Fill color. Usage is the same as CanvasContext.setFillStyle().

- **string\|CanvasGradient strokeStyle**


Border color. Usage is the same as CanvasContext.setStrokeStyle().

- **number shadowOffsetX**


The horizontal offset of the shadow relative to the shape.

- **number shadowOffsetY**


The vertical offset of the shadow relative to the shape.

- **number shadowColor**


The color of the shadow.

- **number shadowBlur**


The blur level of the shadow.

- **number lineWidth**


The width of the line. Usage is the same as CanvasContext.setLineWidth().

- **string lineCap**


The end cap style of the line. Usage is the same as CanvasContext.setLineCap().

- **string lineJoin**


The join style of the line. Usage is the same as CanvasContext.setLineJoin().


**Valid Values for lineJoin**

| Value | Description | Minimum Version |
| --- | --- | --- |
| bevel | Bevel |  |
| round | Round |  |
| miter | Miter |  |

- **number miterLimit**


The maximum miter length. Usage is the same as CanvasContext.setMiterLimit().

- **number lineDashOffset**


The dash pattern offset, initial value is 0.

- **string font**


The properties of the current font style. A DOMString that conforms to CSS font syntax, requiring at least the font size and font family. Default value is 10px sans-serif.

- **number globalAlpha**


Global brush transparency. Range 0-1, where 0 means completely transparent and 1 means completely opaque.

- **string globalCompositeOperation**


The type of compositing operation to apply when drawing new shapes. Currently, the Android version only supports compositing for fill blocks; the compositing effect for stroke lines is always source-over.


Currently supported operations include:

**Methods**

- **CanvasContext.arc(number x, number y, number r, number sAngle, number eAngle, boolean counterclockwise)**


Creates an arc.

- **CanvasContext.arcTo(number x1, number y1, number x2, number y2, number radius)**


Draws an arc path based on control points and radius.

- **CanvasContext.beginPath()**


Starts creating a path. Must call fill or stroke to fill or stroke the path.

- **CanvasContext.bezierCurveTo(number cp1x, number cp1y, number cp2x, number cp2y, number x, number y)**


Creates a cubic Bézier curve path. The starting point of the curve is the previous point in the path.

- **CanvasContext.clearRect(number x, number y, number width, number height)**


Clears the content within the specified rectangular area on the canvas.

- **CanvasContext.clip()**


Clips a region of any shape and size from the original canvas. Once a region is clipped, all subsequent drawing will be restricted to the clipped region (cannot access other areas of the canvas). You can save the current canvas region using the save method before using clip, and restore it at any time using the restore method.

- **CanvasContext.closePath()**


Closes a path. Connects the start and end points. If a new path is started after closing without calling fill or stroke, the previous path will not be rendered.

- **CanvasGradient CanvasContext.createLinearGradient(number x0, number y0, number x1, number y1)**


Creates a linear gradient color. The returned CanvasGradient object must use CanvasGradient.addColorStop() to specify gradient stops; at least two are required.

- **CanvasGradient CanvasContext.createCircularGradient(number x, number y, number r)**


Creates a circular gradient color. The starting point is the center, and the ending point is the circumference. The returned CanvasGradient object must use CanvasGradient.addColorStop() to specify gradient stops; at least two are required.

- **CanvasContext.createPattern(string image, string repetition)**


Creates a pattern using the specified image, repeating the source image in the specified direction.

- **CanvasContext.draw(boolean reserve, function callback)**


Draws the previously described paths, transformations, and styles from the drawing context onto the canvas.

- **CanvasContext.drawImage(string imageResource, number sx, number sy, number sWidth, number sHeight, number dx, number dy, number dWidth, number dHeight)**


Draws an image onto the canvas.

- **CanvasContext.fillText(string text, number x, number y, number maxWidth)**


Draws filled text on the canvas.

- **CanvasContext.fill()**


Fills the current path. The default fill color is black.

- **CanvasContext.fillRect(number x, number y, number width, number height)**


Fills a rectangle. Use setFillStyle to set the fill color of the rectangle; if not set, the default is black.

- **CanvasContext.lineTo(number x, number y)**


Adds a new point and creates a line from the last specified point to the target point. Use stroke to draw the line.

- **Object CanvasContext.measureText(string text)**


Measures text dimension information. Currently only returns the text width. Synchronous interface.

- **CanvasContext.moveTo(number x, number y)**


Moves the path to the specified point on the canvas without creating a line. Use stroke to draw the line.

- **CanvasContext.quadraticCurveTo(number cpx, number cpy, number x, number y)**


Creates a quadratic Bézier curve path. The starting point of the curve is the previous point in the path.

- **CanvasContext.rect(number x, number y, number width, number height)**


Creates a rectangular path. Use fill or stroke to actually draw the rectangle onto the canvas.

- **CanvasContext.restore()**


Restores the previously saved drawing context.

- **CanvasContext.rotate(number rotate)**


Rotates the current coordinate system clockwise around the origin. Multiple calls will accumulate the rotation angle. The origin can be modified using the translate method.

- **CanvasContext.save()**


Saves the drawing context.

- **CanvasContext.strokeRect(number x, number y, number width, number height)**


Draws a rectangle (non-filled). Use setStrokeStyle to set the color of the rectangle's border; if not set, the default is black.

- **CanvasContext.stroke()**


Strokes the current path. The default color is black.

- **CanvasContext.scale(number scaleWidth, number scaleHeight)**


After calling, the coordinates of subsequently created paths will be scaled. Multiple calls will multiply the scaling factors.

- **CanvasContext.strokeText(string text, number x, number y, number maxWidth)**


Draws stroked text at the specified (x, y) position.

- **CanvasContext.setTransform(number scaleX, number skewX, number skewY, number scaleY, number translateX, number translateY)**


Resets (overwrites) the current transformation using a matrix.

- **CanvasContext.setFillStyle(string\|CanvasGradient color)**


Sets the fill color.

- **CanvasContext.setStrokeStyle(string\|CanvasGradient color)**


Sets the stroke color.

- **CanvasContext.setShadow(number offsetX, number offsetY, number blur, string color)**


Sets the shadow style.

- **CanvasContext.setGlobalAlpha(number alpha)**


Sets the global brush transparency.

- **CanvasContext.setLineWidth(number lineWidth)**


Sets the line width.

- **CanvasContext.setLineJoin(string lineJoin)**


Sets the line join style.

- **CanvasContext.setLineCap(string lineCap)**


Sets the line cap style.

- **CanvasContext.setLineDash(Array.<number> pattern, number offset)**


Sets the dash pattern style.

- **CanvasContext.setMiterLimit(number miterLimit)**


Sets the maximum miter length. The miter length is the distance between the inner and outer corners where two lines meet. Only effective when CanvasContext.setLineJoin() is set to miter. If exceeded, the join will be displayed as bevel.

- **CanvasContext.setFontSize(number fontSize)**


Sets the font size.

- **CanvasContext.setTextAlign(string align)**


Sets the text alignment.

- **CanvasContext.setTextBaseline(string textBaseline)**


Sets the vertical alignment of the text.

- **CanvasContext.transform(number scaleX, number skewX, number skewY, number scaleY, number translateX, number translateY)**

Applies multiple transformations to the current transformation using a matrix.

- **CanvasContext.translate(number x, number y)**


Transforms the origin (0, 0) of the current coordinate system. The default origin is the top-left corner of the page.


## [\#](https://super-apps.ai/mop/document/en/develop/api/canvas.html\#canvas-2) Canvas

Canvas instance, obtainable via SelectorQuery.

If the canvas is configured with the native prop, it will be processed using native rendering. Supported since Base Library 2.12.1, iOS/Android 2.35.1.

```html
<!-- canvas.fxml -->
<canvas type="2d" id="canvas"></canvas>

        Code copied

```

```js
// canvas.js
Page({
  onReady() {
    const query = ft.createSelectorQuery().select('#canvas')
      .fields({ node: true, size: true })
      .exec((res) => {
        const canvas = res[0].node
        const ctx = canvas.getContext('2d')
        const dpr = 2
        canvas.width = res[0].width * dpr
        canvas.height = res[0].height * dpr
        ctx.fillRect(0, 0, 100, 100)
      })
  }
})

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/api/canvas.html\#canvas-getcontext) Canvas.getContext()

This method returns the drawing context of the Canvas.

For canvas obtained via selector query, its context API is consistent with web canvas.

## [\#](https://super-apps.ai/mop/document/en/develop/api/canvas.html\#canvas-createimage) Canvas.createImage()

Creates an image object. Only available for canvas obtained via createSelectorQuery.

```js
const img = canvas.createImage()
img.onload = () => {
  const pat = context.createPattern(img, "repeat")
  context.fillStyle = pat
  context.rect(0, 0, 150, 100)
  context.fill()
}
// Image path
img.src = '../../../image/icon_cloud_HL.png'

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/api/canvas.html\#canvas-createimagedata) Canvas.createImageData()

Creates an ImageData object. Only supported in 2D Canvas.

## [\#](https://super-apps.ai/mop/document/en/develop/api/canvas.html\#canvas-todataurl) Canvas.toDataURL()

This API relies on the underlying synchronous mechanism. Currently supported on iOS, not supported on Android.

Returns a data URI containing the image display.

Use canvasToTempFilePath as an alternative to obtain images.

## [\#](https://super-apps.ai/mop/document/en/develop/api/canvas.html\#canvas-requestanimationframe-function-callback) Canvas.requestAnimationFrame(function callback)

Executes the callback during the next repaint.

## [\#](https://super-apps.ai/mop/document/en/develop/api/canvas.html\#canvas-cancelanimationframe) Canvas.cancelAnimationFrame()

Cancels the callback request added by requestAnimationFrame.

## [\#](https://super-apps.ai/mop/document/en/develop/api/canvas.html\#canvasgradient-addcolorstop) CanvasGradient.addColorStop

**CanvasGradient.addColorStop(number stop, string color)**

Adds a color stop to the gradient. Parts less than the minimum stop will be rendered with the color of the minimum stop; parts greater than the maximum stop will be rendered with the color of the maximum stop.

**Parameters**

| Property | Type | Description |
| --- | --- | --- |
| stop | number | Represents the position between the start and end of the gradient, range 0-1. |
| color | string | The color of the gradient stop. |

**Example Code**

```javascript
const ctx = ft.createCanvasContext('myCanvas')

// Create circular gradient
const grd = ctx.createLinearGradient(30, 10, 120, 10)
grd.addColorStop(0, 'red')
grd.addColorStop(0.16, 'orange')
grd.addColorStop(0.33, 'yellow')
grd.addColorStop(0.5, 'green')
grd.addColorStop(0.66, 'cyan')
grd.addColorStop(0.83, 'blue')
grd.addColorStop(1, 'purple')

// Fill with gradient
ctx.setFillStyle(grd)
ctx.fillRect(10, 10, 150, 80)
ctx.draw()
})

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/api/canvas.html\#color) Color

Color. Can be represented in the following ways for use in canvas:

RGB color: e.g., 'rgb(255, 0, 0)'

RGBA color: e.g., 'rgba(255, 0, 0, 0.3)'

Hexadecimal color: e.g., '#FF0000'

Predefined color: e.g., 'red'

## [\#](https://super-apps.ai/mop/document/en/develop/api/canvas.html\#image) Image

Image object.

**Properties**

**string src**

The URL of the image.

**number width**

The actual width of the image.

**number height**

The actual height of the image.

**string referrerPolicy**

origin: Sends the full referrer; no-referrer: Does not send. The format is fixed as https://servicewechat.com/{appid}/{version}/page-frame.html, where {appid} is the Mini-Program's appid, {version} is the Mini-Program's version number. Version number 0 indicates development version, trial version, and review version; version number devtools indicates developer tools; others are official versions.

**function onload**

Callback function triggered after the image loads successfully.

**function onerror**

Callback function triggered when an error occurs during image loading.

## [\#](https://super-apps.ai/mop/document/en/develop/api/canvas.html\#imagedata) ImageData

ImageData object.

**Properties**

**number width**

The actual width of the ImageData described in pixels.

**number height**

The actual height of the ImageData described in pixels.

**Uint8ClampedArray data**

A one-dimensional array containing data in RGBA order, with values represented as integers from 0 to 255 (inclusive).

## [\#](https://super-apps.ai/mop/document/en/develop/api/canvas.html\#offscreencanvas) OffscreenCanvas

Offscreen canvas instance, creatable via ft.createOffscreenCanvas. Currently, some canvas functions and APIs are not supported for offscreen canvas; it is recommended to use regular canvas instead.

**Properties**

**number width**

Canvas width.

**number height**

Canvas height.

### [\#](https://super-apps.ai/mop/document/en/develop/api/canvas.html\#offscreencanvas-createimage) OffscreenCanvas.createImage()

Creates an image object.

**Return Value**

Image

Note: Do not mix image objects created by webgl and 2d canvases. Please try to use the canvas's own createImage to create image objects.

### [\#](https://super-apps.ai/mop/document/en/develop/api/canvas.html\#offscreencanvas-getcontext) OffscreenCanvas.getContext()

This method returns the drawing context of the OffscreenCanvas.

**Parameters**

**string contextType**

The type of drawing context, must be consistent with the type passed when creating the OffscreenCanvas.

**Valid Values for contextType**

| Value | Description | Minimum Version |
| --- | --- | --- |
| 2d | 2D type context. |  |

**Return Value**

**RenderingContext**

[Previous：Device](https://super-apps.ai/mop/document/en/develop/api/device.html)[Next：Worker (Beta)](https://super-apps.ai/mop/document/en/develop/api/worker.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)