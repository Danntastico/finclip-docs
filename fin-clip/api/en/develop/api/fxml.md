<!--
Source URL: https://super-apps.ai/mop/document/en/develop/api/fxml.html
Extracted: 2026-01-12T23:12:50.348Z (January 12, 2026)
Title: FXML | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
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

# [\#](https://super-apps.ai/mop/document/en/develop/api/fxml.html\#fxml) FXML

## [\#](https://super-apps.ai/mop/document/en/develop/api/fxml.html\#createselectorquery) createSelectorQuery

**SelectorQuery ft.createSelectorQuery()**

Returns a SelectorQuery object instance. In custom components or pages containing custom components, use `this.createSelectorQuery()` instead.

**Return Value**

**SelectorQuery**

**Sample Code**

```javascript
const query = ft.createSelectorQuery()
query.select('#the-id').boundingClientRect()
query.selectViewport().scrollOffset()
query.exec(function(res){
  res[0].top       // Top boundary coordinate of the #the-id node
  res[1].scrollTop // Vertical scroll position of the display area
})

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/api/fxml.html\#createintersectionobserver) createIntersectionObserver

**IntersectionObserver ft.createIntersectionObserver(Object component, Object options)**

Creates and returns an IntersectionObserver object instance. In custom components or pages containing custom components, use `this.createIntersectionObserver([options])` instead.

​

**Parameters**

**Object component**

**Custom component instance**

**Object options**

**Options**

| Property | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| thresholds | Array.<number> | \[0\] | No | A numeric array containing all thresholds. |  |
| initialRatio | number | 0 | No | Initial intersection ratio. If the detected intersection ratio does not equal this value and reaches the threshold, the listener's callback function will be triggered. |  |
| observeAll | boolean | false | No | Whether to observe multiple target nodes simultaneously (instead of one). If set to true, the targetSelector in observe will select multiple nodes (Note: selecting too many nodes simultaneously will impact rendering performance). | 2.0.0 |

**Return Value**

**IntersectionObserver**

## [\#](https://super-apps.ai/mop/document/en/develop/api/fxml.html\#intersectionobserver) IntersectionObserver

The IntersectionObserver object is used to infer whether certain nodes are visible to the user and what proportion is visible.

### [\#](https://super-apps.ai/mop/document/en/develop/api/fxml.html\#intersectionobserver-relativeto) IntersectionObserver.relativeTo

**IntersectionObserver IntersectionObserver.relativeTo(string selector, Object margins)**
Uses a selector to specify a node as one of the reference areas.

**Parameters**

**string selector**

Selector

**Object margins**

Used to expand (or shrink) the boundaries of the reference node's layout area.

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| left | number |  | No | Left boundary of the node's layout area |
| right | number |  | No | Right boundary of the node's layout area |
| top | number |  | No | Top boundary of the node's layout area |
| bottom | number |  | No | Bottom boundary of the node's layout area |

**Return Value**

**IntersectionObserver**

### [\#](https://super-apps.ai/mop/document/en/develop/api/fxml.html\#intersectionobserver-relativetoviewport) IntersectionObserver.relativeToViewport

**IntersectionObserver IntersectionObserver.relativeToViewport(Object margins)**
Specifies the page display area as one of the reference areas.

**Parameters**

**Object margins**

Used to expand (or shrink) the boundaries of the reference node's layout area.

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| left | number |  | No | Left boundary of the node's layout area |
| right | number |  | No | Right boundary of the node's layout area |
| top | number |  | No | Top boundary of the node's layout area |
| bottom | number |  | No | Bottom boundary of the node's layout area |

**Return Value**

**IntersectionObserver**

**Sample Code**

In the following sample code, if the target node (specified by the selector `.target-class`) enters 100px below the display area, the callback function will be triggered.

```javascript
Page({
  onLoad: function(){
    ft.createIntersectionObserver().relativeToViewport({bottom: 100}).observe('.target-class', (res) => {
      res.intersectionRatio // Ratio of the intersection area to the target node's layout area
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

### [\#](https://super-apps.ai/mop/document/en/develop/api/fxml.html\#intersectionobserver-observe) IntersectionObserver.observe

**IntersectionObserver.observe(string targetSelector, IntersectionObserver.observeCallback callback)**
Specifies the target node and starts listening for intersection state changes.

**Parameters**

**string targetSelector**

Selector

**function callback**

Callback function for listening to intersection state changes.

**Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| id | string | Node ID |
| dataset | Record.<string, any> | Node's custom data attributes |
| intersectionRatio | number | Intersection ratio |
| intersectionRect | Object | Boundaries of the intersection area |
| boundingClientRect | Object | Target boundaries |
| relativeRect | Object | Reference area boundaries |
| time | number | Timestamp when intersection detection occurred |

**Structure of res.intersectionRect**

| Property | Type | Description |
| --- | --- | --- |
| left | number | Left boundary |
| right | number | Right boundary |
| top | number | Top boundary |
| bottom | number | Bottom boundary |
| width | number | Width |
| height | number | Height |

**Structure of res.boundingClientRect**

| Property | Type | Description |
| --- | --- | --- |
| left | number | Left boundary |
| right | number | Right boundary |
| top | number | Top boundary |
| bottom | number | Bottom boundary |
| width | number | Width |
| height | number | Height |

**Structure of res.relativeRect**

| Property | Type | Description |
| --- | --- | --- |
| left | number | Left boundary |
| right | number | Right boundary |
| top | number | Top boundary |
| bottom | number | Bottom boundary |

### [\#](https://super-apps.ai/mop/document/en/develop/api/fxml.html\#intersectionobserver-disconnect) IntersectionObserver.disconnect

**IntersectionObserver.disconnect()**
Stops listening. The callback function will no longer be triggered.

## [\#](https://super-apps.ai/mop/document/en/develop/api/fxml.html\#mediaqueryobserver) MediaQueryObserver

### [\#](https://super-apps.ai/mop/document/en/develop/api/fxml.html\#mediaqueryobserver-disconnect) MediaQueryObserver.disconnect

**MediaQueryObserver.disconnect()**
Stops listening. The callback function will no longer be triggered.

### [\#](https://super-apps.ai/mop/document/en/develop/api/fxml.html\#mediaqueryobserver-observe) MediaQueryObserver.observe

**MediaQueryObserver.observe(Object descriptor, function callback)**

Starts listening for page media query changes.

**Parameters**

**Object descriptor**

Media query descriptor.

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| minWidth | number |  | Yes | Minimum page width (in px) |
| maxWidth | number |  | Yes | Maximum page width (in px) |
| width | number |  | Yes | Page width (in px) |
| minHeight | number |  | Yes | Minimum page height (in px) |
| maxHeight | number |  | Yes | Maximum page height (in px) |
| height | number |  | Yes | Page height (in px) |
| orientation | string |  | Yes | Screen orientation (`landscape` or `portrait`) |

**function callback**

Callback function for listening to media query state changes.

**Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| matches | boolean | Whether the page's current state satisfies the specified media query. |

## [\#](https://super-apps.ai/mop/document/en/develop/api/fxml.html\#nodesref) NodesRef

Object used to obtain FXML node information.

### [\#](https://super-apps.ai/mop/document/en/develop/api/fxml.html\#nodesref-boundingclientrect) NodesRef.boundingClientRect

**SelectorQuery NodesRef.boundingClientRect(function callback)**

Adds a query request for the node's layout position. Relative to the display area, in pixels. Its functionality is similar to DOM's `getBoundingClientRect`. Returns the `SelectorQuery` corresponding to `NodesRef`.

**Parameters**

**function callback**

Callback function. After executing the `SelectorQuery.exec` method, node information is returned in `callback`.

**Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| id | string | Node ID |
| dataset | Object | Node's dataset |
| left | number | Left boundary coordinate of the node |
| right | number | Right boundary coordinate of the node |
| top | number | Top boundary coordinate of the node |
| bottom | number | Bottom boundary coordinate of the node |
| width | number | Width of the node |
| height | number | Height of the node |

**Return Value**

**SelectorQuery**

**Sample Code**

```js
Page({
  getRect () {
    ft.createSelectorQuery().select('#the-id').boundingClientRect(function(rect){
      rect.id      // Node ID
      rect.dataset // Node's dataset
      rect.left    // Left boundary coordinate of the node
      rect.right   // Right boundary coordinate of the node
      rect.top     // Top boundary coordinate of the node
      rect.bottom  // Bottom boundary coordinate of the node
      rect.width   // Width of the node
      rect.height  // Height of the node
    }).exec()
  },
  getAllRects () {
    ft.createSelectorQuery().selectAll('.a-class').boundingClientRect(function(rects){
      rects.forEach(function(rect){
        rect.id      // Node ID
        rect.dataset // Node's dataset
        rect.left    // Left boundary coordinate of the node
        rect.right   // Right boundary coordinate of the node
        rect.top     // Top boundary coordinate of the node
        rect.bottom  // Bottom boundary coordinate of the node
        rect.width   // Width of the node
        rect.height  // Height of the node
      })
    }).exec()
  }
})

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/api/fxml.html\#nodesref-context) NodesRef.context

**SelectorQuery NodesRef.context(function callback)**

Adds a query request for the node's Context object. Currently supports obtaining VideoContext, CanvasContext, LivePlayerContext, EditorContext, and MapContext.

**Parameters**

**function callback**

Callback function. After executing the `SelectorQuery.exec` method, returns node information.

**Parameters**

**Object res**

| Property | Type | Description |
| --- | --- | --- |
| context | Object | Context object corresponding to the node. |

**Return Value**

**SelectorQuery**

**Sample Code**

```js
Page({
  getContext () {
    ft.createSelectorQuery().select('.the-video-class').context(function(res){
      console.log(res.context) // Context object corresponding to the node. For example: if the selected node is a <video> component, then the VideoContext object is returned here.
    }).exec()
  }
})

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/api/fxml.html\#nodesref-fields) NodesRef.fields

**SelectorQuery NodesRef.fields(Object fields, function callback)**

Obtains related information of the node. The fields to be obtained are specified in `fields`. The return value is the `selectorQuery` corresponding to `nodesRef`.

**Parameters**

**Object fields**

| Property | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| id | boolean | false | No | Whether to return the node ID. |  |
| dataset | boolean | false | No | Whether to return the node's dataset. |  |
| mark | boolean | false | No | Whether to return the node's mark. |  |
| rect | boolean | false | No | Whether to return the node's layout position (`left`, `right`, `top`, `bottom`). |  |
| size | boolean | false | No | Whether to return the node's dimensions (`width`, `height`). |  |
| scrollOffset | boolean | false | No | Whether to return the node's `scrollLeft` and `scrollTop`. The node must be a `scroll-view` or `viewport`. |  |
| properties | Array.<string> | \[\] | No | Specifies a list of property names. Returns the current property values of the node corresponding to the property names (only regular property values marked in the component documentation can be obtained; id, class, style, and event-bound property values cannot be obtained). |  |
| computedStyle | Array.<string> | \[\] | No | Specifies a list of style names. Returns the current values of the node corresponding to the style names. | \[2.1.0 |\
| context | boolean | false | No | Whether to return the Context object corresponding to the node. | 2.4.2 |\
| node | boolean | false | No | Whether to return the Node instance corresponding to the node. | 2.7.0 |\
\
**function callback**\
\
Callback function.\
\
**Parameters**\
\
**Object res**\
\
Related information of the node.\
\
**Return Value**\
\
**SelectorQuery**\
\
**Note**\
\
The priority of `computedStyle` is higher than `size`. If both `width`/`height` are specified in `computedStyle` and `size: true` is passed, the `width`/`height` obtained from `computedStyle` are returned first.\
\
**Sample Code**\
\
```js\
Page({\
  getFields () {\
    ft.createSelectorQuery().select('#the-id').fields({\
      dataset: true,\
      size: true,\
      scrollOffset: true,\
      properties: ['scrollX', 'scrollY'],\
      computedStyle: ['margin', 'backgroundColor'],\
      context: true,\
    }, function (res) {\
      res.dataset    // Node's dataset\
      res.width      // Node width\
      res.height     // Node height\
      res.scrollLeft // Node's horizontal scroll position\
      res.scrollTop  // Node's vertical scroll position\
      res.scrollX    // Current value of the node's scroll-x property\
      res.scrollY    // Current value of the node's scroll-y property\
      // Returns the specified style names here.\
      res.margin\
      res.backgroundColor\
      res.context    // Context object corresponding to the node\
    }).exec()\
  }\
})\
\
        Code copied\
\
```\
\
### [\#](https://super-apps.ai/mop/document/en/develop/api/fxml.html\#nodesref-scrolloffset) NodesRef.scrollOffset\
\
**SelectorQuery NodesRef.scrollOffset(function callback)**\
\
Adds a query request for the node's scroll position. In pixels. The node must be a `scroll-view` or `viewport`. Returns the `SelectorQuery` corresponding to `NodesRef`.\
\
**Parameters**\
\
**function callback**\
\
Callback function. After executing the `SelectorQuery.exec` method, node information is returned in `callback`.\
\
**Parameters**\
\
**Object res**\
\
| Property | Type | Description |\
| --- | --- | --- |\
| id | string | Node ID |\
| dataset | Object | Node's dataset |\
| scrollLeft | number | Node's horizontal scroll position |\
| scrollTop | number | Node's vertical scroll position |\
\
**Return Value**\
\
**SelectorQuery**\
\
**Sample Code**\
\
```js\
Page({\
  getScrollOffset () {\
    ft.createSelectorQuery().selectViewport().scrollOffset(function(res){\
      res.id      // Node ID\
      res.dataset // Node's dataset\
      res.scrollLeft // Node's horizontal scroll position\
      res.scrollTop  // Node's vertical scroll position\
    }).exec()\
  }\
})\
\
        Code copied\
\
```\
\
### [\#](https://super-apps.ai/mop/document/en/develop/api/fxml.html\#nodesref-node) NodesRef.node\
\
**SelectorQuery NodesRef.node(function callback)**\
\
Gets the Node instance.\
\
**Parameters**\
\
**function callback**\
\
Callback function. After executing the SelectorQuery.exec method, returns node information.\
\
**Parameters**\
\
**Object res**\
\
| Property | Type | Description |\
| --- | --- | --- |\
| node | Object | Node instance corresponding to the node. |\
\
**Return Value**\
\
**SelectorQuery**\
\
**Sample Code**\
\
```js\
Page({\
  getNode() {\
    ft.createSelectorQuery().select('.canvas').node(function(res){\
      console.log(res.node) // Canvas instance corresponding to the node.\
    }).exec()\
  }\
})\
\
        Code copied\
\
```\
\
## [\#](https://super-apps.ai/mop/document/en/develop/api/fxml.html\#selectorquery) SelectorQuery\
\
Object for querying node information.​\
\
### [\#](https://super-apps.ai/mop/document/en/develop/api/fxml.html\#selectorquery-exec) SelectorQuery.exec\
\
**NodesRef SelectorQuery.exec(function callback)**\
\
Executes all requests. The request results form an array in the order of the requests and are returned in the first parameter of the callback.\
\
**Parameters**\
\
**function callback**\
\
Callback function.\
\
**Return Value**\
\
**NodesRef**\
\
### [\#](https://super-apps.ai/mop/document/en/develop/api/fxml.html\#selectorquery-in) SelectorQuery.in\
\
**SelectorQuery SelectorQuery.in(Component component)**\
\
Changes the selector's scope to within the custom component `component`. (Initially, the selector only selects nodes within the page scope and does not select any nodes within custom components).\
\
**Parameters**\
\
**Component component**\
\
Custom component instance.\
\
**Return Value**\
\
**SelectorQuery**\
\
**Sample Code**\
\
```js\
Component({\
  queryMultipleNodes (){\
    const query = ft.createSelectorQuery().in(this)\
    query.select('#the-id').boundingClientRect(function(res){\
      res.top // Top boundary coordinate of the #the-id node within this component\
    }).exec()\
  }\
})\
\
        Code copied\
\
```\
\
### [\#](https://super-apps.ai/mop/document/en/develop/api/fxml.html\#selectorquery-select) SelectorQuery.select\
\
**NodesRef SelectorQuery.select(string selector)**\
\
Selects the first node matching the selector `selector` in the current page. Returns a `NodesRef` object instance, which can be used to obtain node information.\
\
**Parameters**\
\
**string selector**\
\
Selector.\
\
**Return Value**\
\
**NodesRef**\
\
**Selector Syntax**\
\
The selector is similar to CSS selectors but only supports the following syntax:\
\
- ID selector: `#the-id`\
- Class selector (multiple can be specified consecutively): `.a-class.another-class`\
- Child selector: `.the-parent > .the-child`\
- Descendant selector: `.the-ancestor .the-descendant`\
- Cross-custom-component descendant selector: `.the-ancestor >>> .the-descendant`\
- Union of multiple selectors: `#a-node, .some-other-nodes`\
\
### [\#](https://super-apps.ai/mop/document/en/develop/api/fxml.html\#selectorquery-selectall) SelectorQuery.selectAll\
\
**NodesRef SelectorQuery.selectAll(string selector)**\
\
Selects all nodes matching the selector `selector` in the current page.\
\
**Parameters**\
\
**string selector**\
\
Selector.\
\
**Return Value**\
\
**NodesRef**\
\
**Selector Syntax**\
\
The selector is similar to CSS selectors but only supports the following syntax:\
\
- ID selector: `#the-id`\
- Class selector (multiple can be specified consecutively): `.a-class.another-class`\
- Child selector: `.the-parent > .the-child`\
- Descendant selector: `.the-ancestor .the-descendant`\
- Cross-custom-component descendant selector: `.the-ancestor >>> .the-descendant`\
- Union of multiple selectors: `#a-node, .some-other-nodes`\
\
### [\#](https://super-apps.ai/mop/document/en/develop/api/fxml.html\#selectorquery-selectviewport) SelectorQuery.selectViewport\
\
**NodesRef SelectorQuery.selectViewport()**\
\
Selects the display area. Can be used to obtain information such as the dimensions and scroll position of the display area.\
\
**Return Value**\
\
**NodesRef**\
\
[Previous：Worker (Beta)](https://super-apps.ai/mop/document/en/develop/api/worker.html)[Next：Custom Menu](https://super-apps.ai/mop/document/en/develop/api/custom-menu.html)\
\
# ❤️Support for FinClip\
\
We need your support, please click the button below to help us add Github star\
![](https://img.shields.io/github/stars/finogeeks?style=social)