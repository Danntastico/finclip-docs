<!--
Source URL: https://super-apps.ai/mop/document/en/develop/guide/framework/view.html
Extracted: 2026-01-12T23:20:54.004Z (January 12, 2026)
Title: View Layer | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Overview](https://super-apps.ai/mop/document/en/develop/guide/feature.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Understand Mini Program](https://super-apps.ai/mop/document/en/develop/guide/framework/view.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Configure Mini Program](https://super-apps.ai/mop/document/en/develop/guide/framework/view.html) [![](https://super-apps.ai/mop/document/images/arrow_open.svg)\\
Mini Program Framework](https://super-apps.ai/mop/document/en/develop/guide/framework/intro.html)

- [Introduction](https://super-apps.ai/mop/document/en/develop/guide/framework/intro.html)
- [Logic Layer](https://super-apps.ai/mop/document/en/develop/guide/framework/app-service.html)
- [View Layer](https://super-apps.ai/mop/document/en/develop/guide/framework/view.html)

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Custom Component](https://super-apps.ai/mop/document/en/develop/guide/component.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Mini Program Plugin](https://super-apps.ai/mop/document/en/develop/guide/plugin.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Basic Abilities](https://super-apps.ai/mop/document/en/develop/guide/framework/view.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Import from 3rd-party (beta)](https://super-apps.ai/mop/document/en/develop/guide/framework/view.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
SSO Login Guide](https://super-apps.ai/mop/document/en/develop/guide/ssoLogin.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Traceability (beta)](https://super-apps.ai/mop/document/en/develop/guide/trace.html)

# [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/view.html\#view-layer) View Layer

The view layer of the framework is written in FXML and FTSS, with components as the basic building blocks.

- FXML is used to describe the structure of the page, similar to HTML;
- FTSS is used to describe the styles of components and pages, and is a subset of CSS; fts is a scripting language for Mini-Programs, with basic syntax similar to JavaScript. Combined with FXML, it can be used to create the structure of the page.

A Component is the basic unit of the view, similar to various tags in HTML pages, such as div, span, img, etc.

## [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/view.html\#_1-fxml) 1\. FXML

FXML is a tag language designed by the framework. Combined with basic components and the event system, it can be used to build the structure of the page.

Here are some simple examples:

### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/view.html\#_1-1-data-binding) 1.1 Data Binding

```html
<!--fxml-->
<view> hello {{name}} </view>
// page.js
Page({
  data: {
    name: 'cortana'
  }
})

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/view.html\#_1-2-list-rendering) 1.2 List Rendering

```html
<!--fxml-->
<view ft:for="{{array}}"> {{item}} </view>
// page.js
Page({
  data: {
    array: ["Apple", "Banana", "Orange", "Watermelon"]
  }
})

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/view.html\#_1-3-conditional-rendering) 1.3 Conditional Rendering

```html
<!--fxml-->
<view ft:if="{{type == 1}}"> Type 1 </view>
<view ft:elif="{{view == 2'}}"> Type 2 </view>
<view ft:else="{{view == 3}}"> Type 3  </view>

        Code copied

```

```javascript
// page.js
Page({
  data: {
    type: 1
  }
})

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/view.html\#_1-4-templates) 1.4 Templates

```html
<!--fxml-->
<template name="cat">
  <view>
    age: {{name}}, age: {{age}}
  </view>
</template>

<template is="cat" data="{{...cat1}}"></template>

        Code copied

```

```javascript
// page.js
Page({
  data: {
    cat1: {name: 'blue', age: '2'},
  }
})

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/view.html\#_1-5-events) 1.5 Events

```html
<view bindtap="getDate"> {{date}} </view> // Click event bindtap

        Code copied

```

```javascript
Page({
  data: {
    date: ""
  },
  getDate: function(e) {
    this.setData({
      date: new Date()
    })
  }
})

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/view.html\#_2-ftss) 2\. FTSS

FTSS extends CSS with the following features:

- Dimension units
- Style imports

### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/view.html\#_2-1-dimension-units) 2.1 Dimension Units

rpx (responsive pixel): Can adapt based on screen width. The screen width is defined as 750rpx. For example, on an iPhone6, the screen width is 375px with 750 physical pixels, so 750rpx = 375px = 750 physical pixels, meaning 1rpx = 0.5px = 1 physical pixel.

| Device | rpx to px (screen width / 750) | px to rpx (750 / screen width) |
| --- | --- | --- |
| iPhone5 | 1rpx = 0.42px | 1px = 2.34rpx |
| iPhone6 | 1rpx = 0.5px | 1px = 2rpx |
| iPhone6 Plus | 1rpx = 0.552px | 1px = 1.81rpx |

Note

- When developing FinClip Mini-Programs, designers can use iPhone6 as the standard for visual drafts.
- On smaller screens, some jagged edges may be unavoidable. Please try to avoid this situation during development.

### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/view.html\#_2-2-style-imports) 2.2 Style Imports

Use the @import statement to import external style sheets. @import is followed by the relative path of the external style sheet to be imported, and ends with a semicolon (😉.

**Example Code**

```css
/** common.ftss **/
.small-p {
  padding:5px;
}
/** app.ftss **/
@import "common.ftss";
.middle-p {
  padding:15px;
}

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/view.html\#_2-3-inline-styles) 2.3 Inline Styles

Framework components support using the style and class attributes to control component styles.

style: Static styles should be written uniformly in class. style accepts dynamic styles, which will be parsed at runtime. Try to avoid writing static styles into style to prevent affecting rendering speed.

```html
<view style="color:{{color}};" />

        Code copied

```

class: Used to specify style rules. Its attribute value is a collection of class selector names (style class names) in the style rules. Style class names do not need to include ., and multiple style class names are separated by spaces.

```html
<view class="normal_view" />

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/view.html\#_2-4-selectors) 2.4 Selectors

Currently supported selectors include:

| Selector | Example | Description |
| --- | --- | --- |
| .class | .intro | Select all components with class="intro" |
| #id | #firstname | Select the component with id="firstname" |
| element | view | Select all view components |
| element, element | view, checkbox Select all view components and all checkbox components in the document |  |
| ::after | view::after | Insert content after the view component |
| ::before | view::before | Insert content before the view component |

### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/view.html\#_2-5-global-styles-vs-local-styles) 2.5 Global Styles vs Local Styles

Styles defined in app.ftss are global styles that apply to every page. Styles defined in the FTSS file of a page are local styles that only apply to the corresponding page and will override the same selectors in app.ftss.

## [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/view.html\#_3-fts) 3\. FTS

FTS (a scripting language for Mini-Programs, combined with FXML, can be used to build the structure of the page.)

Note

FTS does not depend on the base library version of the SDK and can run in all versions of Mini-Programs. FTS and JavaScript are different languages, each with its own syntax, and they are not consistent with JavaScript. The runtime environment of FTS is isolated from other JavaScript code. FTS cannot call functions defined in other JavaScript files, nor can it call APIs provided by Mini-Programs. FTS functions cannot be used as event callbacks for components.

Here are some simple examples of using FTS:

**Page Rendering**

```html
<!--fxml-->
<fts module="m1">
var msg = "hello world";
module.exports.message = msg;
</fts>

<view> {{m1.message}} </view>

        Code copied

```

**Page Output**

```bash
hello world

        Code copied

```

**Data Processing**

```javascript
// page.js
Page({
  data: {
    array: [1, 2, 3, 4, 5, 1, 2, 3, 4]
  }
})

        Code copied

```

```html
<!--fxml-->
<!-- The getMax function below accepts an array and returns the largest element in the array -->
<fts module="m1">
var getMax = function(array) {
  var max = undefined;
  for (var i = 0; i < array.length; ++i) {
    max = max === undefined ?
      array[i] :
      (max >= array[i] ? max : array[i]);
  }
  return max;
}

module.exports.getMax = getMax;
</fts>

<!-- Call the getMax function inside fts, passing the array from page.js as a parameter -->
<view> {{m1.getMax(array)}} </view>

        Code copied

```

**Page Output**

```bash
5

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/view.html\#_4-fts-event-responses) 4\. FTS Event Responses

### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/view.html\#_4-1-background) 4.1 Background

When a Mini-Program needs to implement effects with frequent user interactions, if using conventional methods, such as:

There are two elements A and B on the page. The user performs a touchmove gesture on A, requiring B to move accordingly. A typical example is movable-view. The response process for a single touchmove event is as follows:

i. The touchmove event is thrown from the View Layer to the Service Layer.

ii. The Service Layer processes the touchmove event and then uses setData to change the position of B.

A single touchmove response requires two communications between the Service Layer and the Rendering Layer, plus one rendering. The communication time is relatively high.

Additionally, setData rendering can block the execution of other scripts, causing delays in the entire user interaction animation process, resulting in less-than-ideal actual performance.

### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/view.html\#_4-2-solution) 4.2 Solution

Based on the above reasons, FTS functions can be used to respond to Mini-Program events, and then handle DOM styles in the View Layer to achieve better results.

Currently, only built-in component events are supported, custom component events are not supported.

In addition to pure logical operations, FTS functions can also access and set the class and styles of components through the encapsulated ComponentDescriptor instance. For interactive animations, setting style and class can meet the vast majority of requirements.

An example of an FTS function is as follows:

```js
var event = function(event, ownerInstance) {
    // Get the component instance
    var instance = ownerInstance.selectComponent('.some-component')
    instance.setStyle({
      color: 'red',
      "font-size": '18rpx'
    })
    instance.setClass('other-class')
    return false // Do not bubble up
}

        Code copied

```

The event parameter is the Mini-Program event object with an additional event.instance representing the ComponentDescriptor instance of the component that triggered the event.

ownerInstance represents the ComponentDescriptor instance of the component where the triggering component resides. If the triggering component is within a page, ownerInstance represents the page instance.
The `ComponentDescriptor` currently supports the following APIs:

| Method | Parameters | Description |
| --- | --- | --- |
| selectComponent | selector object | Returns the `ComponentDescriptor` instance of the component. |
| selectAllComponents | array of selector objects | Returns an array of `ComponentDescriptor` instances of the components. |
| setStyle | Object/string | Sets the component's style, supporting rpx. The priority of the set style is higher than the style defined in the component's `.fxml`. Cannot set the style of the top-level page. |
| addClass/removeClass/hasClass | string | Sets the component's class. The priority of the set class is higher than the class defined in the component's `.fxml`. Cannot set the class of the top-level page. |
| callMethod | (funcName:string, args:object) | Calls a function defined in the logic layer (App Service) for the current component/page. `funcName` represents the function name, and `args` represents the function's parameters. |
| getComputedStyle | Array <string> | Specifies a list of style names and returns the current values of the corresponding styles for the node. |
| getBoundingClientRect | None | Returns the size information of the node. |

### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/view.html\#_4-3-usage) 4.3 Usage

FXML defines events:

```html
<fts module="event" src="./event.fts"></fts>
<view bindtouchmove="{{event.touchmove}}" class="movable"></view>

        Code copied

```

Note: FTS functions must be enclosed in {{}}.

Define and export functions in the file `event.ftx`:

```js
module.exports = {
    touchmove: function(event, instance) {
        console.log('log event')
    },
    otherEvent: function(event, instance) {
        console.log('log event')
    }
}

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/view.html\#_5-simple-two-way-binding) 5\. Simple Two-Way Binding

In FXML, normal property binding is one-way. For example:

```html
<input value="{{value}}" />

        Code copied

```

If you use `this.setData({ value: 'leaf' })` to update `value`, both `this.data.value` and the displayed value in the input box will be updated to "leaf". However, if the user modifies the value in the input box, it will not simultaneously change `this.data.value`.

If you need to change `this.data.value` while the user is typing, you can use the simple two-way binding mechanism. In this case, you can add the prefix `model:` before the corresponding item:

```html
<input model:value="{{value}}" />

        Code copied

```

This way, if the value in the input box changes, `this.data.value` will also change simultaneously. Additionally, all locations in the FXML that are bound to `value` will be updated together, and the data listener will be triggered normally.

Preview the effect in the developer tools.

There are the following restrictions on expressions used for two-way binding:

```javascript
<input model:value="Value is {{value}}" />
<input model:value="{{ a + b }}" />

        Code copied

```

Both are invalid;

```javascript
<input model:value="{{ a.b }}" />

        Code copied

```

Such expressions are currently unsupported.

### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/view.html\#_5-1-passing-two-way-binding-in-custom-components) 5.1 Passing Two-Way Binding in Custom Components

Two-way binding can also be used on custom components. Consider the following custom component:

```javascript
// custom-component.js
Component({
  properties: {
    myValue: String
  }
})

        Code copied

```

```html
<!-- custom-component.FXML -->
<input model:value="{{myValue}}" />

        Code copied

```

This custom component binds its own `myValue` property to the `value` property of the input box inside the component. Thus, if the page uses this component as follows:

```html
<custom-component model:my-value="{{pageValue}}" />

        Code copied

```

When the value in the input box changes, the `myValue` property of the custom component will also change. Consequently, `this.data.pageValue` on the page will change simultaneously, and all locations in the page's FXML that are bound to `pageValue` will be updated together.

### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/view.html\#_5-2-triggering-two-way-binding-updates-in-custom-components) 5.2 Triggering Two-Way Binding Updates in Custom Components

Custom components can also trigger two-way binding updates themselves by using `setData` to set their own properties. For example:

```javascript
// custom-component.js
Component({
  properties: {
    myValue: String
  },
  methods: {
    update: function() {
      // Update myValue
      this.setData({
        myValue: 'leaf'
      })
    }
  }
})

        Code copied

```

If the page uses this component as follows:

```html
<custom-component model:my-value="{{pageValue}}" />

        Code copied

```

When the component uses `setData` to update `myValue`, `this.data.pageValue` on the page will also change simultaneously, and all locations in the page's FXML that are bound to `pageValue` will be updated together.

## [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/view.html\#_6-basic-components) 6\. Basic Components

The framework provides developers with a series of basic components, which can be quickly combined for rapid development. For more details, please refer to the component documentation.

### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/view.html\#_6-1-what-is-a-component) 6.1 What is a Component

- A component is the basic building block of the view layer.
- A component usually includes a start tag and an end tag, attributes to modify the component, and content between the two tags.

```html
<tagname property="value">
Content goes here ...
</tagname>

        Code copied

```

Note

All components and attributes are lowercase, connected by hyphens `-`.

**Attribute Types**

| Type | Description | Notes |
| --- | --- | --- |
| Boolean | Boolean value | If the component has this attribute, regardless of its value, it is treated as true; only when the component does not have this attribute is the value false. If the attribute value is a variable, the variable's value will be converted to the Boolean type. |
| Number | Number | 1, 2.5 |
| String | String | "string" |
| Array | Array | \[ 1, "string" \] |
| Object | Object | { key: value } |
| EventHandler | Event handler function name "handlerName" is the event handler function name defined in Page |  |
| Any | Any attribute |  |

**Common Attributes**

All components have the following attributes:

| Attribute Name | Type | Description | Notes |
| --- | --- | --- | --- |
| id | String | Unique identifier of the component | Must be unique across the entire page |
| class | String | Style class of the component | Defined in the corresponding FTSS |
| style | String | Inline style of the component | Dynamically settable inline style |
| hidden | Boolean | Whether the component is visible | All components are visible by default |
| data-\* | Any | Custom attribute | Sent to the event handler when an event is triggered on the component |
| bind\* / catch\* | EventHandler | Component events See Events for details |  |

**Special Attributes**

Almost all components have their own defined attributes, which can modify the functionality or style of the component. Please refer to the definitions of each component.

## [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/view.html\#_7-obtaining-node-information-on-the-interface) 7\. Obtaining Node Information on the Interface

### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/view.html\#_7-1-fxml-node-information) 7.1 FXML Node Information

Node information query APIs can be used to obtain node attributes, styles, positions on the interface, etc.

The most common usage is to use this interface to query the current position of a node and the scroll position of the interface.

**Example Code**

```javascript
const query = ft.createSelectorQuery()
query.select('#the-id').boundingClientRect(function(res){
  res.top // Top boundary coordinate of the #the-id node (relative to the display area)
})
query.selectViewport().scrollOffset(function(res){
  res.scrollTop // Vertical scroll position of the display area
})
query.exec()

        Code copied

```

In the above example, `#the-id` is a node selector, similar but slightly different from CSS selectors. Please refer to the relevant description of `SelectorQuery.select`.

In custom components or pages containing custom components, it is recommended to use `this.createSelectorQuery` instead of `ft.createSelectorQuery` to ensure nodes are selected within the correct scope.

### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/view.html\#_7-2-fxml-node-layout-intersection-status) 7.2 FXML Node Layout Intersection Status

The node layout intersection status API can be used to listen to the intersection status of two or more component nodes in layout positions. This set of APIs is often used to infer whether certain nodes are visible to users and how much of them are visible.

The main concepts involved in this set of APIs are as follows:

- Reference node: The reference node being listened to, whose layout area is taken as the reference area. If there are multiple reference nodes, the intersection of their layout areas is taken as the reference area. The page display area can also be one of the reference areas.
- Target node: The target being listened to, by default only one node (when using the `selectAll` option, multiple nodes can be listened to simultaneously).
- Intersection area: The intersection area of the target node's layout area and the reference area.
- Intersection ratio: The proportion of the intersection area to the reference area.
- Threshold: If the intersection ratio reaches the threshold, the callback function of the listener will be triggered. There can be multiple thresholds. The following example code triggers a callback function each time the target node (specified by the selector `.target-class`) enters or leaves the page display area.

**Example Code**

```javascript
Page({
  onLoad: function(){
    ft.createIntersectionObserver().relativeToViewport().observe('.target-class', (res) => {
      res.id // Target node id
      res.dataset // Target node dataset
      res.intersectionRatio // Proportion of the intersection area to the target node's layout area
      res.intersectionRect // Intersection area
      res.intersectionRect.left // Left boundary coordinate of the intersection area
      res.intersectionRect.top // Top boundary coordinate of the intersection area
      res.intersectionRect.width // Width of the intersection area
      res.intersectionRect.height // Height of the intersection area
    })
  }
})

        Code copied

```

The following example code triggers a callback function when the target node (specified by the selector `.target-class`) intersects or separates from the reference node (specified by the selector `.relative-class`) within the page display area, and the degree of intersection or separation reaches 20% and 50% of the target node's layout area.

**Example Code**

```javascript
Page({
  onLoad: function(){
    ft.createIntersectionObserver(this, {
      thresholds: [0.2, 0.5]
    }).relativeTo('.relative-class').relativeToViewport().observe('.target-class', (res) => {
      res.intersectionRatio // Proportion of the intersection area to the target node's layout area
      res.intersectionRect // Intersection area
      res.intersectionRect.left // Left boundary coordinate of the intersection area
      res.intersectionRect.top // Top boundary coordinate of the intersection area
      res.intersectionRect.width // Width of the intersection area
      res.intersectionRect.height // Height of the intersection area
    })
  }
})

        Code copied

```

Note

The intersection area with the page display area does not accurately represent the area visible to users because the area involved in the calculation is the "layout area," which may be clipped or hidden during rendering (e.g., due to ancestor nodes with `overflow` style set to `hidden`) or covered (e.g., due to fixed-positioned nodes).

In custom components or pages containing custom components, it is recommended to use `this.createIntersectionObserver` instead of `ft.createIntersectionObserver` to ensure nodes are selected within the correct scope.

## [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/view.html\#_8-responding-to-display-area-changes) 8\. Responding to Display Area Changes

### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/view.html\#_8-1-display-area-dimensions) 8.1 Display Area Dimensions

The display area refers to the region in the Mini-Program interface where free layout and presentation can occur. By default, the dimensions of the Mini-Program display area do not change after page initialization. However, the following two methods can alter this default behavior.

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/view.html\#_8-1-1-enable-screen-rotation-support-on-mobile-devices) 8.1.1 Enable Screen Rotation Support on Mobile Devices

Starting from Mini-Program Base Library version 1.5.33, Mini-Programs support screen rotation on mobile devices. To enable screen rotation for pages in a Mini-Program, set `"pageOrientation": "auto"` in the `window` section of `app.json`, or configure `"pageOrientation": "auto"` in the page's JSON file.

The following is an example of enabling screen rotation in a single page's JSON file:

**Code Example**

```json
{
  "pageOrientation": "auto"
}

        Code copied

```

If the above declaration is added to a page, the page will rotate along with the screen when the screen orientation changes, and the display area dimensions will also change accordingly.

Starting from Mini-Program Base Library version 1.5.33, `pageOrientation` can also be set to `landscape`, indicating a fixed landscape orientation.

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/view.html\#_8-1-2-enable-screen-rotation-support-on-ipad) 8.1.2 Enable Screen Rotation Support on iPad

Starting from Mini-Program Base Library version 1.5.33, Mini-Programs running on iPad can support screen rotation. To enable screen rotation support for iPads, add `"resizable": true` in `app.json`.

**Code Example**

```json
{
  "resizable": true
}

        Code copied

```

If the Mini-Program includes the above declaration, it will rotate along with the screen, and the display area dimensions will change accordingly when the screen orientation changes.

Note

Screen rotation cannot be configured individually for specific pages on iPad.

### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/view.html\#_8-2-media-query) 8.2 Media Query

Sometimes, the layout of a page may vary depending on the display area size. In such cases, media queries can be used to resolve most issues.

**Code Example**

```css
.my-class {
  width: 40px;
}

@media (min-width: 480px) {
  /* Styles that only apply on screens 480px or wider */
  .my-class {
    width: 200px;
  }
}

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/view.html\#_8-3-screen-rotation-events) 8.3 Screen Rotation Events

Sometimes, using media queries alone cannot control fine-grained layout changes. In such cases, JavaScript can be used as an auxiliary solution.

To read the display area dimensions of a page in JavaScript, you can use `selectorQuery.selectViewport`.

To listen for changes in page dimensions, you can use the `onResize` event of the page. For custom components, you can use the `resize` lifecycle method to listen. The callback function will return the display area dimensions. (Supported starting from Base Library version 1.5.33.)

**Code Example**

```javascript
Page({
  onResize(res) {
    res.size.windowWidth // New display area width
    res.size.windowHeight // New display area height
  }
})

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/view.html\#_9-page-routing) 9\. Page Routing

In Mini-Programs, all page routing is managed by the Mini-Program framework.

### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/view.html\#_9-1-page-stack) 9.1 Page Stack

The framework maintains the current pages in a stack. When a route switch occurs, the behavior of the page stack is as follows:

| Routing Method | Page Stack Behavior |
| --- | --- |
| Initialization | New page pushed onto the stack |
| Open New Page | New page pushed onto the stack |
| Page Redirection | Current page popped off, new page pushed onto the stack |
| Page Return | Pages continuously popped off until the target return page |
| Tab Switch | All pages popped off, only the new Tab page remains |
| Reload | All pages popped off, only the new page remains |

**getCurrentPages()**

The `getCurrentPages()` function retrieves the instance of the current page stack as an array in stack order, with the first element being the home page and the last element being the current page.

Note

1. Do not attempt to manually modify the page stack, as it will cause routing and page state errors.
2. Do not call `getCurrentPages()` during `App.onLaunch`, as the page has not yet been generated at this point.

**Routing Methods**

The triggering methods for routing and the corresponding page lifecycle functions are as follows:

| Routing Method | Trigger Timing | Pre-Routing Page | Post-Routing Page |
| --- | --- | --- | --- |
| Initialization | First page opened by the Mini-Program |  | `onLoad`, `onShow` |
| Open New Page | API `ft.navigateTo` called or `<navigator open-type="navigateTo"/>` component used | `onHide` | `onLoad`, `onShow` |
| Page Redirection | API `ft.redirectTo` called or `<navigator open-type="redirectTo"/>` component used | `onUnload` | `onLoad`, `onShow` |
| Page Return | API `ft.navigateBack` called, `<navigator open-type="navigateBack"/>` component used, or user presses the back button | `onUnload` | `onShow` |
| Tab Switch | API `ft.switchTab` called, `<navigator open-type="switchTab"/>` component used, or user switches Tabs |  | Refer to the table below for various scenarios |
| Reload | API `ft.reLaunch` called or `<navigator open-type="reLaunch"/>` component used | `onUnload` | `onLoad`, `onShow` |

Lifecycle events corresponding to Tab switching (assuming A and B are Tabbar pages, C is a page opened from A, and D is a page opened from C):

| Current Page | Routed Page | Triggered Lifecycle (in order) |
| --- | --- | --- |
| A | A | Nothing happens |
| A | B | `A.onHide()`, `B.onLoad()`, `B.onShow()` |
| A | B (opened again) | `A.onHide()`, `B.onShow()` |
| C | A | `C.onUnload()`, `A.onShow()` |
| C | B | `C.onUnload()`, `B.onLoad()`, `B.onShow()` |
| D | B | `D.onUnload()`, `C.onUnload()`, `B.onLoad()`, `B.onShow()` |
| D (entered via sharing) | A | `D.onUnload()`, `A.onLoad()`, `A.onShow()` |
| D (entered via sharing) | B | `D.onUnload()`, `B.onLoad()`, `B.onShow()` |

Tip

- `navigateTo` and `redirectTo` can only open non-tabBar pages.
- `switchTab` can only open tabBar pages.
- `reLaunch` can open any page.
- The TabBar at the bottom of the page is determined by the page itself; any page defined as a tabBar page will have a TabBar at the bottom.
- Parameters passed during page routing can be retrieved in the `onLoad` method of the target page.

## [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/view.html\#_10-animations) 10\. Animations

### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/view.html\#_10-1-common-methods-for-interface-animations) 10.1 Common Methods for Interface Animations

In Mini-Programs, CSS transitions and CSS animations are commonly used to create simple interface animations.

Preview the effect in the Developer Tools.

During animations, you can use `bindtransitionend`, `bindanimationstart`, `bindanimationiteration`, and `bindanimationend` to listen for animation events.

| Event Name | Meaning |
| --- | --- |
| `transitionend` | End of CSS transition or `wx.createAnimation` completing a phase |
| `animationstart` | Start of CSS animation |
| `animationiteration` | End of a CSS animation phase |
| `animationend` | End of CSS animation |

Note: These events are not bubbling events and must be bound to the node where the animation actually occurs to take effect.

Additionally, the `wx.createAnimation` interface can be used to dynamically create simple animation effects. (The new version of the Mini-Program Base Library recommends using the keyframe animation interface described below instead.)

### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/view.html\#_10-2-keyframe-animations) 10.2 Keyframe Animations

There is a more user-friendly way to create animations, replacing the old `wx.createAnimation`. It offers better performance and more controllable interfaces.

In a page or custom component, when keyframe animations are needed, you can use the `this.animate` interface:

```javascript
this.animate(selector, keyframes, duration, callback)

        Code copied

```

Parameter Description

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| `selector` | String |  | Yes | Selector (same format as `SelectorQuery.select`) |
| `keyframes` | Array |  | Yes | Keyframe information |
| `duration` | Number |  | Yes | Animation duration (in milliseconds) |
| `callback` | Function |  | No | Callback function after animation completes |

Structure of objects in `keyframes`

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| `offset` | Number |  | No | Keyframe offset, range \[0-1\] |
| `ease` | String | `linear` | No | Animation easing function |
| `transformOrigin` | String |  | No | Base point position, equivalent to CSS `transform-origin` |
| `backgroundColor` | String |  | No | Background color, equivalent to CSS `background-color` |
| `bottom` | Number/String |  | No | Bottom position, equivalent to CSS `bottom` |
| `height` | Number/String |  | No | Height, equivalent to CSS `height` |
| `left` | Number/String |  | No | Left position, equivalent to CSS `left` |
| `width` | Number/String |  | No | Width, equivalent to CSS `width` |
| `opacity` | Number |  | No | Opacity, equivalent to CSS `opacity` |
| `right` | Number |  | No | Right position, equivalent to CSS `right` |
| `top` | Number/String |  | No | Top position, equivalent to CSS `top` |
| `matrix` | Array |  | No | Transformation matrix, equivalent to CSS `transform matrix` |
| `matrix3d` | Array |  | No | 3D transformation matrix, equivalent to CSS `transform matrix3d` |
| `rotate` | Number |  | No | Rotation, equivalent to CSS `transform rotate` |
| `rotate3d` | Array |  | No | 3D rotation, equivalent to CSS `transform rotate3d` |
| `rotateX` | Number |  | No | X-axis rotation, equivalent to CSS `transform rotateX` |
| `rotateY` | Number |  | No | Y-axis rotation, equivalent to CSS `transform rotateY` |
| `rotateZ` | Number |  | No | Z-axis rotation, equivalent to CSS `transform rotateZ` |
| `scale` | Array |  | No | Scaling, equivalent to CSS `transform scale` |
| `scale3d` | Array |  | No | 3D scaling, equivalent to CSS `transform scale3d` |
| `scaleX` | Number |  | No | X-axis scaling, equivalent to CSS `transform scaleX` |
| `scaleY` | Number |  | No | Y-axis scaling, equivalent to CSS `transform scaleY` |
| `scaleZ` | Number |  | No | Z-axis scaling, equivalent to CSS `transform scaleZ` |
| `skew` | Array |  | No | Skewing, equivalent to CSS `transform skew` |
| `skewX` | Number |  | No | X-axis skewing, equivalent to CSS `transform skewX` |
| `skewY` | Number |  | No | Y-axis skewing, equivalent to CSS `transform skewY` |
| `translate` | Array |  | No | Translation, equivalent to CSS `transform translate` |
| `translate3d` | Array |  | No | 3D translation, equivalent to CSS `transform translate3d` |
| `translateX` | Number |  | No | X-axis translation, equivalent to CSS `transform translateX` |
| `translateY` | Number |  | No | Y-axis translation, equivalent to CSS `transform translateY` |
| `translateZ` | Number |  | No | Z-axis translation, equivalent to CSS `transform translateZ` |

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/view.html\#example-code) Example Code

```javascript
this.animate('#container', [\
  { opacity: 1.0, rotate: 0, backgroundColor: '#FF0000' },\
  { opacity: 0.5, rotate: 45, backgroundColor: '#00FF00' },\
  { opacity: 0.0, rotate: 90, backgroundColor: '#FF0000' },\
], 5000, function () {
  this.clearAnimation('#container', { opacity: true, rotate: true }, function () {
    console.log("Cleared opacity and rotate properties on #container")
  })
}.bind(this))

this.animate('.block', [\
  { scale: [1, 1], rotate: 0, ease: 'ease-out' },\
  { scale: [1.5, 1.5], rotate: 45, ease: 'ease-in', offset: 0.9 },\
  { scale: [2, 2], rotate: 90 },\
], 5000, function () {
  this.clearAnimation('.block', function () {
    console.log("Cleared all animation properties on .block")
  })
}.bind(this))

        Code copied

```

After calling the `animate` API, some style properties will be added to the node, overriding the original corresponding styles. If you need to clear these styles, you can use `this.clearAnimation` to remove these properties after all animations on the node have completed.

```javascript
this.clearAnimation(selector, options, callback)

        Code copied

```

Parameter Description

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| `selector` | String |  | Yes | Selector (same format as `SelectorQuery.select`) |
| `options` | Object |  | No | Properties to clear; if not specified, all properties will be cleared |
| `callback` | Function |  | No | Callback function after clearing is complete |

Preview the effect in the developer tools

````text
  this.animate('.avatar', [{\
    borderRadius: '0',\
    borderColor: 'red',\
    transform: 'scale(1) translateY(-20px)',\
    offset: 0,\
  }, {\
    borderRadius: '25%',\
    borderColor: 'blue',\
    transform: 'scale(.65) translateY(-20px)',\
    offset: .5,\
  }, {\
    borderRadius: '50%',\
    borderColor: 'blue',\
    transform: `scale(.3) translateY(-20px)`,\
    offset: 1\
  }], 2000, {
    scrollSource: '#scroller',
    timeRange: 2000,
    startScrollOffset: 0,
    endScrollOffset: 85,
  })

  this.animate('.search_input', [{\
    opacity: '0',\
    width: '0%',\
  }, {\
    opacity: '1',\
    width: '100%',\
  }], 1000, {
    scrollSource: '#scroller',
    timeRange: 1000,
    startScrollOffset: 120,
    endScrollOffset: 252
  })

``` -->
### 10.3 Advanced Animation Methods

In some complex scenarios, the aforementioned animation methods may not be applicable.

The method of **WXS responding to events** can dynamically adjust the `style` attribute of nodes by using WXS to respond to events. By continuously changing the value of the `style` attribute, animation effects can be achieved. At the same time, this method can also dynamically generate animations based on user touch events.

Continuously using `setData` to change the interface can also achieve animation effects. This allows for arbitrary changes to the interface, but it often results in significant delays or lag, and may even cause the Mini-Program to freeze. In such cases, performance can be improved by replacing `setData` at the page level with `setData` within a **Custom Component**.

## 11. Initial Rendering Cache
### 11.1 How Initial Rendering Cache Works
The initialization of a Mini-Program page is divided into two parts:

* **Logic Layer Initialization**: Load the necessary Mini-Program code, initialize the page's `this` object (including all `this` objects of custom components involved), and send relevant data to the View Layer.
* **View Layer Initialization**: Load the necessary Mini-Program code, wait for the Logic Layer to finish initialization and receive data sent from the Logic Layer, and finally render the page.

When launching a page—especially during a cold start of the Mini-Program or when entering the first page—the initialization of the Logic Layer takes a relatively long time. During the page initialization process, users will see the standard loading screen of the Mini-Program (during a cold start) or may experience slight white-screening (during page transitions).

Enabling the initial rendering cache allows the View Layer to display the rendering result of the page's initial `data` to users without waiting for the Logic Layer to finish initialization. This significantly reduces the time it takes for the page to become visible to users. The working principle is as follows:

* After the Mini-Program page is opened for the first time, the rendering result of the initial data is recorded and written into a persistent cache area (the cache can be retained for a long time but may be cleared due to reasons such as Mini-Program updates, Base Library updates, or storage space recovery).
* When this page is opened again, the system checks whether the rendering result of the initial data from the last time the page was opened still exists in the cache. If it does, the rendering result is displayed directly.
* If the cached rendering result is displayed, the page temporarily cannot respond to user events until the Logic Layer finishes initialization.

Using the initial rendering cache can:
* Quickly display static parts of the page that never change, such as the Navigation Bar;
* Pre-display a skeleton page to improve user experience;
* Display custom loading prompts;

#### 11.2 Supported Components

During the initial rendering cache phase, complex components cannot be displayed or respond to interactions.

Currently supported built-in components include:
* `<view />`
* `<text />`
* `<button />`
* `<image />`
* `<scroll-view />`
* `<rich-text />`

Custom components themselves can be displayed (but the built-in components they use are subject to the above limitations).

### 11.3 Static Initial Rendering Cache
To enable the initial rendering cache, the simplest method is to add the configuration item `"initialRenderingCache": "static"` in the page's `json` file:

```javascript
{
  "initialRenderingCache": "static"
}

        Code copied

````

If you want to enable it for all pages, you can add this configuration in the `window` section of `app.json`:

```javascript
{
  "window": {
    "initialRenderingCache": "static"
  }
}

        Code copied

```

After adding this configuration, preview the Mini-Program home page on your phone, then kill the Mini-Program and re-enter it. The home page will be rendered using the initial rendering cache.

Please Note

In this case, the initial rendering cache records the result of applying the page's `data` to the page's `FXML`, excluding any results from `setData`.

For example, if you want to display the text "Loading" on the page, controlled by the `loading` data field:

```html
<view wx:if="{{loading}}">Loading</view>

        Code copied

```

In this case, `loading` should be specified as `true` in `data`, like so:

```javascript
// Correct approach
Page({
  data: {
    loading: true
  }
})

        Code copied

```

It should not be set to `true` via `setData`:

```javascript
// Incorrect approach! Do not do this!
Page({
  data: {},
  onLoad: function() {
    this.setData({
      loading: true
    })
  }
})

        Code copied

```

In other words, this approach only includes the rendering result of the page's `data`, i.e., the purely static part of the page.

### [\#](https://super-apps.ai/mop/document/en/develop/guide/framework/view.html\#_11-4-adding-dynamic-content-to-the-initial-rendering-cache) 11.4 Adding Dynamic Content to the Initial Rendering Cache

In some scenarios, relying solely on the rendering result of the page's `data` may be limiting. You might want to display additional variable content, such as an advertisement image URL.

In this case, you can use the "dynamic" initial rendering cache method. First, configure `"initialRenderingCache": "dynamic"`:

```javascript
{
  "initialRenderingCache": "dynamic"
}

        Code copied

```

At this point, the initial rendering cache will not be automatically enabled. You also need to call `this.setInitialRenderingCache(dynamicData)` in the page to enable it. Here, `dynamicData` is a set of data that participates in the rendering of the page's FXML along with `data`.

```javascript
Page({
  data: {
    loading: true
  },
  onReady: function() {
    this.setInitialRenderingCache({
      loadingHint: 'Loading' // This part of the data will be applied to the interface, equivalent to performing an additional `setData` on top of the initial `data`
    })
  }
})

        Code copied

```

```html
<view wx:if="{{loading}}">{{loadingHint}}</view>

        Code copied

```

From a technical perspective, under the dynamic generation of the initial rendering cache, the page will re-render in the background using dynamic data, which incurs relatively higher overhead. Therefore, avoid frequently calling `this.setInitialRenderingCache`. If called multiple times within a page, only the last call will take effect.

**Note:**

- The timing of calling `this.setInitialRenderingCache` must not be earlier than the `onReady` lifecycle of `Page` or the `ready` lifecycle of `Component`; otherwise, it may negatively impact performance.
- To disable the initial rendering cache, call `this.setInitialRenderingCache(null)`.

[Previous：Logic Layer](https://super-apps.ai/mop/document/en/develop/guide/framework/app-service.html)[Next：Custom Component](https://super-apps.ai/mop/document/en/develop/guide/component.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)