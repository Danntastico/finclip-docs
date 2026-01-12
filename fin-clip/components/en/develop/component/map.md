<!--
Source URL: https://super-apps.ai/mop/document/en/develop/component/map.html
Extracted: 2026-01-12T23:14:25.664Z (January 12, 2026)
Title: Map Component | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

# [\#](https://super-apps.ai/mop/document/en/develop/component/map.html\#map-component) Map Component

Using the map component on iOS requires integrating the Extension SDK/MapSDK (System maps use the Extension SDK, third-party maps use MapSDK)

For iOS integration of Extension SDK/MapSDK, please refer to [「Mini-Program SDK-iOS SDK-iOS Integration」](https://super-apps.ai/mop/document/runtime-sdk/ios/ios-integrate.html)

Using the map component on Android requires integrating MapSDK

For Android integration of MapSDK, please refer to [「Mini-Program SDK-Android SDK-Android Integration-6. MapSDK」](https://super-apps.ai/mop/document/runtime-sdk/android/android-integrate.html#_6-mapsdk)

## [\#](https://super-apps.ai/mop/document/en/develop/component/map.html\#system-map-ios-and-harmony-only) System Map (iOS and Harmony Only)

| Property | Type | Default Value | Required | Description | Support |
| --- | --- | --- | --- | --- | --- |
| longitude | number | 116.46 | Yes | Center longitude | iOS:✅<br> Harmony:✅ |
| latitude | number | 39.92 | Yes | Center latitude | iOS:✅<br> Harmony:✅ |
| scale | number | 16 | No | Zoom level, range is 3-20 | iOS:✅<br> Harmony:✅ |
| min-scale | number | 3 | No | Minimum zoom level (not controlled by this property when zooming with gestures) | iOS:✅<br> Harmony:✅ |
| max-scale | number | 20 | No | Maximum zoom level (not controlled by this property when zooming with gestures) | iOS:✅<br> Harmony:✅ |
| markers | Array.marker |  | No | Markers | iOS:✅<br> Harmony:✅ |
| polyline | Array.polyline |  | No | Routes | iOS:✅<br> Harmony:✅ |
| circles | Array.circle |  | No | Circles | iOS:✅<br> Harmony:✅ |
| controls | Array.control |  | No | Controls (to be deprecated, recommended to use cover-view instead) | iOS:❌ <br> Harmony:❌ |
| include-points | Array.point |  | No | Zoom to include all given coordinate points | iOS:✅<br> Harmony:✅ |
| show-location | boolean | false | No | Show current location point with direction | iOS:✅<br> Harmony:✅ |
| polygons | Array.polygon |  | No | Polygons | iOS:✅<br> Harmony:✅ |
| subkey | - |  | No | Custom map not supported yet | iOS:❌ <br> Harmony:❌ |
| layer-style | - |  | No | Custom map not supported yet | iOS:❌ <br> Harmony:❌ |
| rotate | number | 0 | No | Rotation angle, range 0 ~ 360, angle between map north and device y-axis | iOS:❌ <br> Harmony:✅ |
| skew | number | 0 | No | Tilt angle, range 0 ~ 40, tilt around z-axis | iOS:❌ <br> Harmony:✅ |
| enable-3D | boolean | false | No | Display 3D buildings | iOS:❌<br> Harmony:✅ |
| show-compass | boolean | false | No | Show compass | iOS:✅<br> Harmony:✅ |
| show-scale | boolean | false | No | Show scale bar | iOS:✅<br> Harmony:✅ |
| enable-overlooking | boolean | false | No | Enable bird's eye view | iOS:✅ <br> Harmony:✅ |
| enable-zoom | boolean | true | No | Whether zooming is supported | iOS:✅<br> Harmony:✅ |
| enable-scroll | boolean | true | No | Whether dragging is supported | iOS:✅<br> Harmony:✅ |
| enable-rotate | boolean | false | No | Whether rotation is supported | iOS:✅<br> Harmony:✅ |
| enable-satellite | boolean | false | No | Whether satellite view is enabled | iOS:✅<br> Harmony:❌ |
| enable-traffic | boolean | false | No | Whether real-time traffic is enabled | iOS:✅<br> Harmony:✅ |
| enable-poi | boolean | true | No | Whether POI points are displayed | iOS:✅<br> Harmony:❌ |
| enable-building | boolean |  | No | Whether buildings are displayed | iOS:✅<br> Harmony:❌ |
| setting | object |  | No | Configuration item; if setting conflicts with property configuration, setting takes precedence | iOS:✅<br> Harmony:✅ |
| bindtap | eventhandle |  | No | Triggered when the map is clicked, returns latitude and longitude information | iOS:❌ <br> Harmony:✅ |
| bindmarkertap | eventhandle |  | No | Triggered when a marker is clicked, e.detail = {markerId} | iOS:❌ <br> Harmony:✅ |
| bindlabeltap | eventhandle |  | No | Triggered when label is clicked, e.detail = {markerId} | iOS:❌ <br> Harmony:❌ |
| bindcontroltap | eventhandle |  | No | Triggered when control is clicked, e.detail = {controlId} | iOS:❌ <br> Harmony:❌ |
| bindcallouttap | eventhandle |  | No | Triggered when the bubble corresponding to the marker is clicked, e.detail = {markerId} | iOS:❌ <br> Harmony:❌ |
| bindupdated | eventhandle |  | No | Triggered when map rendering update is completed. (Harmony: triggered only once when map loading is completed) | iOS:❌ <br> Harmony:✅ |
| bindregionchange | eventhandle |  | No | Triggered when the field of view changes (Harmony: causeBy may not be accurate) | iOS:❌ <br> Harmony:✅ |
| bindpoitap | eventhandle |  | No | Triggered when a map POI point is clicked, e.detail = {name, longitude, latitude} | iOS:❌ <br> Harmony:✅ |
| bindpolylinetap | eventhandle |  | No | Triggered when a map route is clicked, e.detail = {longitude, latitude} (Harmony: returns the first point's coordinates) | iOS:❌ <br> Harmony:✅ |
| bindanchorpointtap | eventhandle |  | No | Triggered when the positioning marker is clicked, e.detail = {longitude, latitude} | iOS:❌ <br> Harmony:✅ |

### [\#](https://super-apps.ai/mop/document/en/develop/component/map.html\#marker) marker

| Property | Description | Type | Required | Remarks | Support |
| --- | --- | --- | --- | --- | --- |
| id | Marker ID | number | No | This ID will be returned in the marker click event callback. | iOS:✅<br> Harmony:✅ |
| clusterId | Cluster ID | number | No | Used for custom point clustering effect | iOS:✅<br> Harmony:❌ |
| joinCluster | Whether to participate in point clustering | Boolean | No | Defaults to not participating in point clustering | iOS:❌ <br> Harmony:❌ |
| latitude | Latitude | number | Yes | Floating-point number, range -90 ~ 90 | iOS:✅<br> Harmony:✅ |
| longitude | Longitude | number | Yes | Floating-point number, range -180 ~ 180 | iOS:✅<br> Harmony:✅ |
| title | Annotation name | string | No | Displayed on click, ignored if callout exists | iOS:✅<br> Harmony:✅ |
| zIndex | Display level | number | No |  | iOS:❌ <br> Harmony:✅ |
| iconPath | Displayed icon | string | Yes | Image path under project directory, supports network paths, local paths, code package paths | iOS:✅<br> Harmony:✅ |
| rotate | Rotation angle | number | No | Clockwise rotation angle, range 0 ~ 360, default is 0 | iOS:❌ <br> Harmony:✅ |
| alpha | Marker transparency | number | No | Default 1, no transparency, range 0 ~ 1 | iOS:❌ <br> Harmony:✅ |
| width | Marker icon width | number/string | No | Default is actual image width | iOS:❌ <br> Harmony:❌ |
| height | Marker point | number | No | Default is actual image height | iOS:❌ <br> Harmony:❌ |
| callout | Bubble window above the marker | Object | No | Supported properties see table below, recognizes line breaks. | iOS:✅<br> Harmony:✅ |
| customCallout | Marker point | object | No |  | iOS:❌ <br> Harmony:✅ |
| label | Add label next to the marker | Object | No | Supported properties see table below, recognizes line breaks. | iOS:❌ <br> Harmony:✅ |
| anchor | Anchor point of latitude and longitude on the annotation icon, default bottom center | Object | No | {x, y}, x represents horizontal (0-1), y represents vertical (0-1). {x: .5, y: 1} indicates bottom center | iOS:❌ <br> Harmony:✅ |
| aria-label | Accessibility description (property) additional description of the element | string | No |  | iOS:❌ <br> Harmony:❌ |

### [\#](https://super-apps.ai/mop/document/en/develop/component/map.html\#bubble-callout-on-marker) Bubble callout on marker

| Property | Description | Type | Remarks | Support |
| --- | --- | --- | --- | --- |
| content | Text | string |  | iOS:✅<br> Harmony:✅ |
| color | Text color | string |  | iOS:❌ <br> Harmony:✅ |
| fontSize | Font size | number |  | iOS:❌ <br> Harmony:✅ |
| borderRadius | Border radius | number |  | iOS:❌ <br> Harmony:✅ |
| borderWidth | Border width | string |  | iOS:❌ <br> Harmony:✅ |
| borderColor | Border color | string |  | iOS:❌ <br> Harmony:✅ |
| bgColor | Background color | string |  | iOS:❌ <br> Harmony:✅ |
| padding | Text margin | number |  | iOS:❌ <br> Harmony:✅ |
| display | 'BYCLICK': Click to display; 'ALWAYS': Always visible | string |  | iOS:❌ <br> Harmony:❌ |
| textAlign | Text alignment. Valid values: left, right, center | string |  | iOS:❌ <br> Harmony:✅ |
| anchorX | Horizontal offset, positive to the right | number |  | iOS:❌ <br> Harmony:✅ |
| anchorY | Vertical offset, positive downwards | number |  | iOS:❌ <br> Harmony:✅ |

### [\#](https://super-apps.ai/mop/document/en/develop/component/map.html\#bubble-customcallout-on-marker) Bubble customCallout on marker

When customCallout exists, it will ignore the callout and title attributes. Custom bubbles use cover-view customization, offering higher flexibility.

| Property | Description | Type | Remarks | Support |
| --- | --- | --- | --- | --- |
| display | 'BYCLICK': Click to display; 'ALWAYS': Always visible | string |  | iOS:❌ <br> Harmony:❌ |
| anchorX | Horizontal offset, positive to the right | number |  | iOS:❌ <br> Harmony:✅ |
| anchorY | Vertical offset, positive downwards | number |  | iOS:❌ <br> Harmony:✅ |

Usage is as follows, add a slot node named callout under the map component, and its internal cover-view binds to the marker through the marker-id attribute. When the marker is created, the content displayed by this cover-view will appear as a callout above the marker point.

```js
<map>
  <cover-view slot="callout">
    <cover-view marker-id="1"></cover-view>
    <cover-view marker-id="2"></cover-view>
    <cover-view marker-id="3"></cover-view>
  </cover-view>
</map>
```

### [\#](https://super-apps.ai/mop/document/en/develop/component/map.html\#bubble-label-on-marker) Bubble label on marker

| Property | Description | Type | Remarks | Support |
| --- | --- | --- | --- | --- |
| content | Text | string |  | iOS:✅<br> Harmony:✅ |
| color | Text color | string |  | iOS:❌ <br> Harmony:✅ |
| fontSize | Font size | number |  | iOS:❌ <br> Harmony:✅ |
| anchorX | Label coordinates, origin is the marker's latitude and longitude | number |  | iOS:❌ <br> Harmony:❌ |
| anchorY | Label coordinates, origin is the marker's latitude and longitude | number |  | iOS:❌ <br> Harmony:❌ |
| borderWidth | Border width | number |  | iOS:❌ <br> Harmony:❌ |
| borderColor | Border color | string |  | iOS:❌ <br> Harmony:❌ |
| borderRadius | Border radius | number |  | iOS:❌ <br> Harmony:❌ |
| bgColor | Background color | string |  | iOS:❌ <br> Harmony:❌ |
| padding | Text margin | number |  | iOS:❌ <br> Harmony:❌ |
| textAlign | Text alignment. Valid values: left, right, center | string |  | iOS:❌ <br> Harmony:❌ |

### [\#](https://super-apps.ai/mop/document/en/develop/component/map.html\#polyline) polyline

| Property | Description | Type | Required | Remarks | Support |
| --- | --- | --- | --- | --- | --- |
| points | Array of latitude and longitude | array | Yes | \[{latitude: 0, longitude: 0}\] | iOS:✅<br> Harmony:✅ |
| color | Line color | string | No | Hexadecimal | iOS:✅<br> Harmony:✅ |
| colorList | Rainbow line | array | No | If present, ignores color value | iOS:❌ <br> Harmony:✅ |
| width | Line width | number | No |  | iOS:✅<br> Harmony:✅ |
| dottedLine | Whether dashed line | boolean | No | Default false | iOS:❌ <br> Harmony:✅ |
| arrowLine | Arrowed line | boolean | No | Default false | iOS:❌ <br> Harmony:❌ |
| arrowIconPath | Change arrow icon | string | No | Effective when arrowLine is true | iOS:❌ <br> Harmony:❌ |
| borderColor | Line border color | string | No |  | iOS:❌ <br> Harmony:❌ |
| borderWidth | Line thickness | number | No |  | iOS:❌ <br> Harmony:❌ |
| level | Overlap relationship | string | No | Default is abovelabels | iOS:❌ <br> Harmony:❌ |

### [\#](https://super-apps.ai/mop/document/en/develop/component/map.html\#polygon) polygon

| Property | Description | Type | Required | Remarks | Support |
| --- | --- | --- | --- | --- | --- |
| points | Array of latitude and longitude | array | Yes | \[{latitude: 0, longitude: 0}\] | iOS:✅<br> Harmony:✅ |
| strokeWidth | Stroke width | number | No |  | iOS:✅<br> Harmony:✅ |
| strokeColor | Stroke color | string | No | Hexadecimal | iOS:✅<br> Harmony:✅ |
| fillColor | Fill color | string | No | Hexadecimal | iOS:✅<br> Harmony:✅ |
| dashArray | Dashed line | `Array<number>` | No | Default value \[0, 0\] for solid line, \[10, 10\] indicates ten pixels of solid line and ten pixels of blank space (repeatedly) forming a dashed line | iOS:❌ <br> Harmony:✅ |
| zIndex | Set Z-axis value for polygon | number | No |  | iOS:✅<br> Harmony:✅ |
| level | Overlap relationship | string | No | Default is abovelabels | iOS:❌ <br> Harmony:❌ |

### [\#](https://super-apps.ai/mop/document/en/develop/component/map.html\#circle) circle

| Property | Description | Type | Required | Remarks | Other |
| --- | --- | --- | --- | --- | --- |
| latitude | Latitude | number | Yes | Floating-point number, range -90 ~ 90 | iOS:✅<br> Harmony:✅ |
| longitude | Longitude | number | Yes | Floating-point number, range -180 ~ 180 | iOS:✅<br> Harmony:✅ |
| color | Stroke color | string | No | Hexadecimal | iOS:✅<br> Harmony:✅ |
| fillColor | Fill color | string | No | Hexadecimal | iOS:✅<br> Harmony:✅ |
| radius | Radius | number | Yes |  | iOS:✅<br> Harmony:✅ |
| strokeWidth | Stroke width | number | No |  | iOS:✅<br> Harmony:✅ |
| level | Overlap relationship | string | No | Default is abovelabels | iOS:❌ <br> Harmony:❌ |

### [\#](https://super-apps.ai/mop/document/en/develop/component/map.html\#control) control

| Property | Description | Type | Required | Remarks | Support |
| --- | --- | --- | --- | --- | --- |
| id | Control ID | number | No | This ID will be returned in the control click event callback | ❌ |
| position | Control position on the map | object | Yes | Relative position to the map | ❌ |
| iconPath | Displayed icon | string | Yes | Image path under project directory, supports local paths, code package paths | ❌ |
| clickable | Whether clickable | boolean | No | Default not clickable | ❌ |

### [\#](https://super-apps.ai/mop/document/en/develop/component/map.html\#position) position

| Property | Description | Type | Required | Remarks | Support |
| --- | --- | --- | --- | --- | --- |
| left | Distance from the left boundary of the map | number | No | Default is 0 | ❌ |
| top | Distance from the top boundary of the map | number | No | Default is 0 | ❌ |
| width | Control width | number | No | Default is 0 | ❌ |
| height | Control height | number | No | Default is 0 | ❌ |

## [\#](https://super-apps.ai/mop/document/en/develop/component/map.html\#amap) AMap

AMap allows up to 10 map objects

If there are more than 10 map objects, the map content will display a black screen. Therefore, when using AMap to implement the map component (i.e., relying on the AMap Extension SDK), the Mini-Program needs to remove and destroy the map in the onHide() method of the page, then create the map and add map content in the onShow().

| Property | Type | Default Value | Required | Description | Support |
| --- | --- | --- | --- | --- | --- |
| longitude | number | 116.46 | Yes | Center longitude | iOS:✅<br> Android:✅<br> IDE:✅ |
| latitude | number | 39.92 | Yes | Center latitude | iOS:✅<br> Android:✅<br> IDE:✅ |
| scale | number | 16 | No | Zoom level, range is 3-20 | iOS:✅<br> Android:✅<br> IDE:✅ |
| min-scale | number | 3 | No | Minimum zoom level | iOS:✅<br> Android:✅<br> IDE:✅ Not supporting dynamic modification |
| max-scale | number | 20 | No | Maximum zoom level | iOS:✅<br> Android:✅<br> IDE:✅ Not supporting dynamic modification |
| markers | Array.marker |  | No | Markers | iOS:✅<br> Android:✅<br> IDE:✅ |
| polyline | Array.polyline |  | No | Routes | iOS:✅<br> Android:✅<br> IDE:✅ |
| circles | Array.circle |  | No | Circles | iOS:✅<br> Android:✅<br> IDE:✅ |
| controls | Array.control |  | No | Controls (to be deprecated, recommended to use cover-view instead) | iOS:❌ <br> Android:❌<br> IDE:✅ |
| include-points | Array.point |  | No | Zoom to include all given coordinate points | iOS:✅<br> Android:✅<br> IDE:❌ |
| show-location | boolean | false | No | Show current location point with direction | iOS:✅<br> Android:✅<br> IDE:❌ |
| polygons | Array.polygon |  | No | Polygons | iOS:✅<br> Android:✅<br> IDE:✅ |
| subkey | - |  | No | Custom map not supported yet | iOS:❌ <br> Android:❌<br> IDE:❌ |
| layer-style | - |  | No | Custom map not supported yet | iOS:❌ <br> Android:❌<br> IDE:❌ |
| rotate | number | 0 | No | Rotation angle, range 0 ~ 360, angle between map north and device y-axis | iOS:✅<br> Android:✅<br> IDE:✅ |
| skew | number | 0 | No | Tilt angle, range 0 ~ 40, tilt around z-axis | iOS:✅<br> Android:✅<br> IDE:✅ |
| enable-3D | boolean | false | No | Display 3D buildings | iOS:❌ <br> Android:❌<br> IDE:❌ |
| show-compass | boolean | false | No | Show compass | iOS:✅<br> Android:✅<br> IDE:❌ |
| show-scale | boolean | false | No | Show scale bar | iOS:✅<br> Android:✅<br> IDE:✅ |
| enable-overlooking | boolean | false | No | Enable bird's eye view | iOS:✅<br> Android:✅<br> IDE:❌ |
| enable-zoom | boolean | true | No | Whether zooming is supported | iOS:✅<br> Android:✅<br> IDE:✅ |
| enable-scroll | boolean | true | No | Whether dragging is supported | iOS:✅<br> Android:✅<br> IDE:✅ |
| enable-rotate | boolean | false | No | Whether rotation is supported | iOS:✅<br> Android:✅<br> IDE:✅ |
| enable-satellite | boolean | false | No | Whether satellite view is enabled | iOS:✅<br> Android:✅<br> IDE:✅ |
| enable-traffic | boolean | false | No | Whether real-time traffic is enabled | iOS:✅<br> Android:✅<br> IDE:✅ |
| enable-poi | boolean | true | No | Whether POI points are displayed | iOS:❌<br> Android:✅<br> IDE:✅ |
| enable-building | boolean |  | No | Whether buildings are displayed | iOS:✅<br> Android:✅<br> IDE:✅ |
| setting | object |  | No | Configuration item; if setting conflicts with property configuration, setting takes precedence | iOS:✅<br> Android:✅<br> IDE:✅ |
| bindtap | eventhandle |  | No | Triggered when the map is clicked, returns latitude and longitude information | iOS:✅<br> Android:✅<br> IDE:✅ |
| bindmarkertap | eventhandle |  | No | Triggered when a marker is clicked, e.detail = {markerId} | iOS:✅<br> Android:✅<br> IDE:✅ |
| bindlabeltap | eventhandle |  | No | Triggered when label is clicked, e.detail = {markerId} | iOS:❌ <br> Android:❌<br> IDE:❌ |
| bindcontroltap | eventhandle |  | No | Triggered when control is clicked, e.detail = {controlId} | iOS:❌ <br> Android:❌<br> IDE:✅ |
| bindcallouttap | eventhandle |  | No | Triggered when the bubble corresponding to the marker is clicked, e.detail = {markerId} | iOS:✅<br> Android:✅<br> IDE:❌ |
| bindupdated | eventhandle |  | No | Triggered when map rendering update is completed | iOS:✅<br> Triggered only when map loading is completed Android:✅<br> Triggered only when map loading is completed IDE:❌ |
| bindregionchange | eventhandle |  | No | Triggered when the field of view changes | iOS:✅<br> Android:✅<br> IDE:✅ |
| bindpoitap | eventhandle |  | No | Triggered when a map POI point is clicked, e.detail = {name, longitude, latitude} | iOS:✅<br> Android:✅<br> IDE:❌ |
| bindanchorpointtap | eventhandle |  | No | Triggered when the positioning marker is clicked, e.detail = {longitude, latitude} | iOS:✅<br> Android:✅<br> IDE:❌ |

### [\#](https://super-apps.ai/mop/document/en/develop/component/map.html\#marker-2) marker

| Property | Description | Type | Required | Remarks | Support |
| --- | --- | --- | --- | --- | --- |
| id | Marker ID | number | No | This ID will be returned in the marker click event callback. | iOS:✅<br> Android:✅<br> IDE:✅ |
| clusterId | Cluster ID | number | No | Used for custom point clustering effect | iOS:❌ <br> Android:✅<br> IDE:❌ |
| joinCluster | Whether to participate in point clustering | Boolean | No | Defaults to not participating in point clustering | iOS:❌ <br> Android:✅<br> IDE:❌ |
| latitude | Latitude | number | Yes | Floating-point number, range -90 ~ 90 | iOS:✅<br> Android:✅<br> IDE:✅ |
| longitude | Longitude | number | Yes | Floating-point number, range -180 ~ 180 | iOS:✅<br> Android:✅<br> IDE:✅ |
| title | Annotation name | string | No | Displayed on click, ignored if callout exists | iOS:✅<br> Android:✅<br> IDE:✅ |
| zIndex | Display level | number | No |  | iOS:✅<br>Android:✅<br> IDE:✅ |
| iconPath | Displayed icon | string | Yes | Image path under project directory, supports network paths, local paths, code package paths | iOS:✅<br> Android:✅<br> IDE:✅ |
| rotate | Rotation angle | number | No | Clockwise rotation angle, range 0 ~ 360, default is 0 | iOS:❌ <br> Android:✅<br> IDE:✅ |
| alpha | Marker transparency | number | No | Default 1, no transparency, range 0 ~ 1 | iOS:❌ <br> Android:✅<br> IDE:✅ |
| width | Marker icon width | number/string | No | Default is actual image width | iOS:✅<br> Android:✅<br> IDE:✅ |
| height | Marker point | number | No | Default is actual image height | iOS:✅<br> Android:✅<br> IDE:✅ |
| callout | Bubble window above the marker | Object | No | Supported properties see table below, recognizes line breaks. | iOS:✅<br> Android:✅<br> IDE:✅ |
| customCallout | Marker point | number | No |  | iOS:✅<br> Android:✅<br> IDE:❌ |
| label | Add label next to the marker | Object | No | Supported properties see table below, recognizes line breaks. | iOS:❌ <br> Android:❌<br> IDE:✅ |
| anchor | Anchor point of latitude and longitude on the annotation icon, default bottom center | Object | No | {x, y}, x represents horizontal (0-1), y represents vertical (0-1). {x: .5, y: 1} indicates bottom center | iOS:❌ <br> Android:✅<br> IDE:✅ |
| aria-label | Accessibility description (property) additional description of the element | string | No |  | iOS:❌ <br> Android:❌<br> IDE:❌ |
| displayWithCallout | Whether to display callout/customCallout/title as marker icon | Boolean | No | Display callout/customCallout/title as marker icon so that callout/customCallout/title can always be visible | iOS:✅<br> Android:✅<br> IDE:❌ |

### [\#](https://super-apps.ai/mop/document/en/develop/component/map.html\#bubble-callout-on-marker-2) Bubble callout on marker

| Attribute | Description | Type | Remarks | Support |
| --- | --- | --- | --- | --- |
| content | Text | string |  | iOS:✅<br> Android:✅<br> IDE:✅ |
| color | Text color | string |  | iOS:✅<br> Android:✅<br> IDE:❌ |
| fontSize | Font size | number |  | iOS:✅<br> Android:✅<br> IDE:❌ |
| borderRadius | Border radius | number |  | iOS:✅<br> Android:✅<br> IDE:✅ |
| borderWidth | Border width | string |  | iOS:✅<br> Android:✅<br> IDE:❌ |
| borderColor | Border color | string |  | iOS:✅<br> Android:✅<br> IDE:❌ |
| bgColor | Background color | string |  | iOS:✅<br> Android:✅<br> IDE:❌ |
| padding | Text padding | number |  | iOS:✅ <br> Android:✅<br> IDE:❌ |
| display | 'BYCLICK': Show on click; 'ALWAYS': Always visible | string |  | iOS:✅<br> Android:(does not support ALWAYS)✅ IDE:❌ |
| textAlign | Text alignment. Valid values: left, right, center | string |  | iOS:✅<br> Android:✅<br> IDE:❌ |
| anchorX | Horizontal offset, positive to the right | number |  | iOS:✅<br> Android:✅<br> IDE:❌ |
| anchorY | Vertical offset, positive downwards | number |  | iOS:✅<br> Android:✅<br> IDE:❌ |

### [\#](https://super-apps.ai/mop/document/en/develop/component/map.html\#custom-callout-bubble-on-marker) Custom Callout Bubble on Marker

When `customCallout` exists, it will ignore the `callout` and `title` attributes. The custom callout uses `cover-view` for customization, offering higher flexibility.

| Attribute | Description | Type | Remarks | Support |
| --- | --- | --- | --- | --- |
| display | 'BYCLICK': Show on click; 'ALWAYS': Always visible | string |  | iOS:✅<br> Android:✅<br> IDE:❌ |
| anchorX | Horizontal offset, positive to the right | number |  | iOS:✅<br> Android:✅<br> IDE:❌ |
| anchorY | Vertical offset, positive downwards | number |  | iOS:✅<br> Android:✅<br> IDE:❌ |

Usage is as follows: Add a slot node named `callout` under the `map` component. The internal `cover-view` binds with the marker via the `marker-id` attribute. When the marker is created, the content displayed by this `cover-view` will appear as the callout above the marker point.

```js
<map>
  <cover-view slot="callout">
    <cover-view marker-id="1"></cover-view>
    <cover-view marker-id="2"></cover-view>
    <cover-view marker-id="3"></cover-view>
  </cover-view>
</map>
```

### [\#](https://super-apps.ai/mop/document/en/develop/component/map.html\#label-bubble-on-marker) Label Bubble on Marker

| Attribute | Description | Type | Remarks | Support |
| --- | --- | --- | --- | --- |
| content | Text | string |  | iOS:❌ <br> Android:❌<br> IDE:✅ |
| color | Text color | string |  | iOS:❌ <br> Android:❌<br> IDE:❌ |
| fontSize | Font size | number |  | iOS:❌ <br> Android:❌<br> IDE:❌ |
| anchorX | Label's coordinate, origin is the latitude and longitude corresponding to the marker | number |  | iOS:❌ <br> Android:❌<br> IDE:❌ |
| anchorY | Label's coordinate, origin is the latitude and longitude corresponding to the marker | number |  | iOS:❌ <br> Android:❌<br> IDE:❌ |
| borderWidth | Border width | number |  | iOS:❌ <br> Android:❌<br> IDE:❌ |
| borderColor | Border color | string |  | iOS:❌ <br> Android:❌<br> IDE:❌ |
| borderRadius | Border radius | number |  | iOS:❌ <br> Android:❌<br> IDE:❌ |
| bgColor | Background color | string |  | iOS:❌ <br> Android:❌<br> IDE:❌ |
| padding | Text padding | number |  | iOS:❌ <br> Android:❌<br> IDE:❌ |
| textAlign | Text alignment. Valid values: left, right, center | string |  | iOS:❌ <br> Android:❌<br> IDE:❌ |

### [\#](https://super-apps.ai/mop/document/en/develop/component/map.html\#polyline-2) Polyline

| Attribute | Description | Type | Required | Remarks | Support |
| --- | --- | --- | --- | --- | --- |
| points | Array of latitude and longitude | array | Yes | \[{latitude: 0, longitude: 0}\] | iOS:✅<br> Android:✅<br> IDE:✅ |
| color | Line color | string | No | Hexadecimal | iOS:✅<br> Android:✅<br> IDE:✅ |
| colorList | Rainbow line | array | No | If present, ignores the `color` value | iOS:❌ <br> Android:✅<br> IDE:❌ |
| width | Line width | number | No |  | iOS:✅<br> Android:✅<br> IDE:✅ |
| dottedLine | Whether dashed line | boolean | No | Default false | iOS:❌ <br> Android:✅<br> IDE:✅ |
| arrowLine | Line with arrow | boolean | No | Default false | iOS:❌ <br> Android:✅<br> IDE:✅ |
| arrowIconPath | Change arrow icon | string | No | Effective when `arrowLine` is true | iOS:✅<br> Android:✅<br> IDE:✅ |
| borderColor | Line border color | string | No |  | iOS:❌ <br> Android:❌<br> IDE:✅ |
| borderWidth | Line thickness | number | No |  | iOS:❌ <br> Android:❌<br> IDE:✅ |
| level | Overlay relationship | string | No | Default is abovelabels | iOS:❌ <br>Android:✅<br> aboveroads equivalent to abovebuildings<br>IDE:✅ |

### [\#](https://super-apps.ai/mop/document/en/develop/component/map.html\#polygon-2) Polygon

| Attribute | Description | Type | Required | Remarks | Support |
| --- | --- | --- | --- | --- | --- |
| points | Array of latitude and longitude | array | Yes | \[{latitude: 0, longitude: 0}\] | iOS:✅<br> Android:✅<br> IDE:✅ |
| strokeWidth | Stroke width | number | No |  | iOS:✅<br> Android:✅<br> IDE:✅ |
| strokeColor | Stroke color | string | No | Hexadecimal | iOS:✅<br> Android:✅<br> IDE:✅ |
| fillColor | Fill color | string | No | Hexadecimal | iOS:✅<br> Android:✅<br> IDE:✅ |
| zIndex | Set Z-axis value for polygon | number | No |  | iOS:✅<br> Android:✅<br> IDE:✅ |
| level | Overlay relationship | string | No | Default is abovelabels | iOS:❌ <br>Android:✅<br> aboveroads equivalent to abovebuildings<br>IDE:✅ |

### [\#](https://super-apps.ai/mop/document/en/develop/component/map.html\#circle-2) Circle

| Attribute | Description | Type | Required | Remarks | Support |
| --- | --- | --- | --- | --- | --- |
| latitude | Latitude | number | Yes | Floating-point number, range -90 ~ 90 | iOS:✅<br> Android:✅<br> IDE:✅ |
| longitude | Longitude | number | Yes | Floating-point number, range -180 ~ 180 | iOS:✅<br> Android:✅<br> IDE:✅ |
| color | Stroke color | string | No | Hexadecimal | iOS:✅<br> Android:✅<br> IDE:✅ |
| fillColor | Fill color | string | No | Hexadecimal | iOS:✅<br> Android:✅<br> IDE:✅ |
| radius | Radius | number | Yes |  | iOS:✅<br> Android:✅<br> IDE:✅ |
| strokeWidth | Stroke width | number | No |  | iOS:✅<br> Android:✅<br> IDE:✅ |
| level | Overlay relationship | string | No | Default is abovelabels | iOS:❌ <br>Android:✅<br> aboveroads equivalent to abovebuildings<br>IDE:✅ |

### [\#](https://super-apps.ai/mop/document/en/develop/component/map.html\#control-2) Control

| Attribute | Description | Type | Required | Remarks | Support |
| --- | --- | --- | --- | --- | --- |
| id | Control ID | number | No | This ID will be returned in the control click event callback | iOS:❌ <br> Android:❌<br> IDE:✅ |
| position | Position of the control on the map | object | Yes | Relative position of the control on the map | iOS:❌ <br> Android:❌<br> IDE:✅ |
| iconPath | Displayed icon | string | Yes | Image path in the project directory, supports local path, code package path | iOS:❌ <br> Android:❌<br> IDE:✅ |
| clickable | Whether clickable | boolean | No | Default is not clickable | iOS:❌ <br> Android:❌<br> IDE:✅ |

### [\#](https://super-apps.ai/mop/document/en/develop/component/map.html\#position-2) Position

| Attribute | Description | Type | Required | Remarks | Support |
| --- | --- | --- | --- | --- | --- |
| left | Distance from the left boundary of the map | number | No | Default is 0 | iOS:❌ <br> Android:❌<br> IDE:✅ |
| top | Distance from the top boundary of the map | number | No | Default is 0 | iOS:❌ <br> Android:❌<br> IDE:✅ |
| width | Control width | number | No | Default is 0 | iOS:❌ <br> Android:❌<br> IDE:✅ |
| height | Control height | number | No | Default is 0 | iOS:❌ <br> Android:❌<br> IDE:✅ |

## [\#](https://super-apps.ai/mop/document/en/develop/component/map.html\#baidu-map-only-supported-on-ios-android-harmony) Baidu Map (Only supported on iOS, Android, Harmony)

| Attribute | Type | Default Value | Required | Description | Support |
| --- | --- | --- | --- | --- | --- |
| longitude | number | 116.46 | Yes | Center longitude | iOS:✅<br> Android:✅<br> Harmony:✅ |
| latitude | number | 39.92 | Yes | Center latitude | iOS:✅<br> Android:✅<br> Harmony:✅ |
| scale | number | 16 | No | Zoom level, range is 3-20 | iOS:✅<br> Android:✅<br> Harmony:✅ |
| min-scale | number | 3 | No | Minimum zoom level | iOS:✅<br>Android:✅<br> Harmony:✅ |
| max-scale | number | 20 | No | Maximum zoom level | iOS:✅<br>Android:✅<br> Harmony:✅ |
| markers | Array.marker |  | No | Markers | iOS:✅<br> Android:✅<br> Harmony:✅ |
| polyline | Array.polyline |  | No | Routes | iOS:✅<br> Android:✅<br> Harmony:✅ |
| circles | Array.circle |  | No | Circles | iOS:✅<br> Android:✅<br> Harmony:✅ |
| controls | Array.control |  | No | Controls (to be deprecated, recommended to use cover-view instead) | iOS:❌ <br> Android:❌<br> Harmony:❌ |
| include-points | Array.point |  | No | Zoom to include all given coordinates | iOS:✅<br> Android:✅<br> Harmony:✅ |
| show-location | boolean | false | No | Show current location with direction | iOS:✅<br> Android:✅<br> Harmony:✅ |
| polygons | Array.polygon |  | No | Polygons | iOS:✅<br> Android:✅<br> Harmony:✅ |
| subkey | - |  | No | Custom map not supported yet | iOS:❌ <br> Android:❌<br> Harmony:❌ |
| layer-style | - |  | No | Custom map not supported yet | iOS:❌ <br> Android:❌<br> Harmony:❌ |
| rotate | number | 0 | No | Rotation angle, range 0 ~ 360, angle between map north and device y-axis | iOS:✅<br> Android:✅<br> Harmony:✅ |
| skew | number | 0 | No | Tilt angle, range 0 ~ 40, tilt around z-axis | iOS:✅<br> Android:✅<br> Harmony:✅ |
| enable-3D | boolean | false | No | Show 3D buildings | iOS:✅<br> Android:✅<br> Harmony:❌ |
| show-compass | boolean | false | No | Show compass (iOS default enabled, cannot be disabled) | iOS:✅<br> Android:✅<br> Harmony:✅ |
| show-scale | boolean | false | No | Show scale bar | iOS:✅<br> Android:✅<br> Harmony:✅ |
| enable-overlooking | boolean | false | No | Enable bird's eye view | iOS:✅<br> Android:✅<br> Harmony:✅ |
| enable-zoom | boolean | true | No | Whether zooming is supported | iOS:✅<br> Android:✅<br> Harmony:✅ |
| enable-scroll | boolean | true | No | Whether dragging is supported | iOS:✅<br> Android:✅<br> Harmony:✅ |
| enable-rotate | boolean | false | No | Whether rotation is supported | iOS:✅<br> Android:✅<br> Harmony:✅ |
| enable-satellite | boolean | false | No | Whether satellite view is enabled | iOS:✅<br> Android:✅<br> Harmony:✅ |
| enable-traffic | boolean | false | No | Whether real-time traffic is enabled | iOS:✅<br> Android:✅<br> Harmony:❌ |
| enable-poi | boolean | true | No | Whether POI points are displayed | iOS:✅<br> Android:✅<br> Harmony:✅ |
| enable-building | boolean |  | No | Whether buildings are displayed | iOS:❌ <br> Android:❌<br> Harmony:❌ |
| setting | object |  | No | Configuration item. When setting conflicts with property configuration, setting takes precedence | iOS:✅<br> Android:✅<br> Harmony:✅ |
| bindtap | eventhandle |  | No | Triggered when the map is clicked, returns latitude and longitude information | iOS:✅<br> Android:✅<br> Harmony:✅ |
| bindmarkertap | eventhandle |  | No | Triggered when a marker is clicked, e.detail = {markerId} | iOS:✅<br> Android:✅<br> Harmony:✅ |
| bindlabeltap | eventhandle |  | No | Triggered when label is clicked, e.detail = {markerId} | iOS:❌ <br> Android:❌<br> Harmony:❌ |
| bindcontroltap | eventhandle |  | No | Triggered when a control is clicked, e.detail = {controlId} | iOS:❌ <br> Android:❌<br> Harmony:❌ |
| bindcallouttap | eventhandle |  | No | Triggered when the bubble corresponding to the marker is clicked, e.detail = {markerId} | iOS:✅<br> Android:✅<br> Harmony:✅ |
| bindupdated | eventhandle |  | No | Triggered when the map rendering update is completed | iOS:✅<br> Only triggered when the map loading is completed<br> Android:✅<br> Only triggered when the map loading is completed<br> Harmony:✅<br> Only triggered when the map loading is completed |
| bindregionchange | eventhandle |  | No | Triggered when the field of view changes | iOS:✅<br> Android:✅<br> Harmony:✅ |
| bindpoitap | eventhandle |  | No | Triggered when a POI point on the map is clicked, e.detail = {name, longitude, latitude} | iOS:✅<br> Android:✅<br> Harmony:❌ |
| bindanchorpointtap | eventhandle |  | No | Triggered when the positioning mark is clicked, e.detail = {longitude, latitude} | iOS:✅<br> Android:✅<br> Harmony:❌ |

### [\#](https://super-apps.ai/mop/document/en/develop/component/map.html\#marker-3) Marker

| Attribute | Description | Type | Required | Remarks | Support |
| --- | --- | --- | --- | --- | --- |
| id | Marker ID | number | No | This ID will be returned in the marker click event callback. | iOS:✅<br> Android:✅<br> Harmony:✅ |
| clusterId | Cluster ID | number | No | Used for custom point clustering effect | iOS:✅<br> Android:✅<br> Harmony:❌ |
| joinCluster | Whether to participate in point clustering | Boolean | No | Default does not participate in point clustering | iOS:❌ <br> Android:✅<br> Harmony:❌ |
| latitude | Latitude | number | Yes | Floating-point number, range -90 ~ 90 | iOS:✅<br> Android:✅<br> Harmony:✅ |
| longitude | Longitude | number | Yes | Floating-point number, range -180 ~ 180 | iOS:✅<br> Android:✅<br> Harmony:✅ |
| title | Annotation name | string | No | Displayed on click, ignored if callout exists | iOS:✅<br> Android:✅<br> Harmony:✅ |
| zIndex | Display level | number | No |  | iOS:✅<br> Android:✅<br> Harmony:✅ |
| iconPath | Displayed icon | string | Yes | Image path in the project directory, supports network path, local path, code package path | iOS:✅<br> Android:✅<br> Harmony:✅ |
| rotate | Rotation angle | number | No | Clockwise rotation angle, range 0 ~ 360, default is 0 | iOS:❌ <br> Android:✅<br> Harmony:✅ |
| alpha | Marker transparency | number | No | Default 1, no transparency, range 0 ~ 1 | iOS:❌ <br> Android:✅<br> Harmony:✅ |
| width | Marker icon width | number/string | No | Default is the actual width of the image | iOS:✅<br> Android:✅<br> Harmony:✅ |
| height | Marker icon height | number | No | Default is the actual height of the image | iOS:✅<br> Android:✅<br> Harmony:✅ |
| callout | Bubble window above the marker | Object | No | Supported attributes see table below, recognizes newline characters. | iOS:✅<br> Android:✅<br> Harmony:✅ |
| customCallout | Marker | object | No |  | iOS:✅<br> Android:✅<br> Harmony:✅ |
| label | Adds a label next to the marker | Object | No | Supported attributes see table below, recognizes newline characters. | iOS:❌ <br> Android:❌<br> Harmony:❌ |
| anchor | Anchor point of latitude and longitude on the annotation icon, default is bottom center | Object | No | {x, y}, x represents horizontal (0-1), y represents vertical (0-1). {x: .5, y: 1} means bottom center | iOS:✅<br> Android:✅<br> Harmony:❌ |
| aria-label | Accessibility description | string | No |  | iOS:❌ <br> Android:❌<br> Harmony:❌ |
| displayWithCallout | Whether to display callout/customCallout/title as marker icon | Boolean | No | Displays callout/customCallout/title as marker icon, making callout/customCallout/title always visible | iOS:✅<br> Android:✅<br> Harmony:✅ |

### [\#](https://super-apps.ai/mop/document/en/develop/component/map.html\#callout-bubble-on-marker) Callout Bubble on Marker

| Attribute | Description | Type | Remarks | Support |
| --- | --- | --- | --- | --- |
| content | Text | string |  | iOS:✅<br> Android:✅<br> Harmony:✅ |
| color | Text color | string |  | iOS:✅<br> Android:✅<br> Harmony:✅ |
| fontSize | Font size | number |  | iOS:✅<br> Android:✅<br> Harmony:✅ |
| borderRadius | Border radius | number |  | iOS:✅<br> Android:✅<br> Harmony:✅ |
| borderWidth | Border width | string |  | iOS:✅<br> Android:✅<br> Harmony:✅ |
| borderColor | Border color | string |  | iOS:✅<br> Android:✅<br> Harmony:✅ |
| bgColor | Background color | string |  | iOS:✅<br> Android:✅<br> Harmony:✅ |
| padding | Text padding | number |  | iOS:✅<br> Android:✅<br> Harmony:✅ |
| display | 'BYCLICK': Show on click; 'ALWAYS': Always visible | string |  | iOS:✅<br> Android:✅<br> Harmony:✅ |
| textAlign | Text alignment. Valid values: left, right, center | string |  | iOS:✅<br> Android:✅<br> Harmony:✅ |
| anchorX | Horizontal offset, positive to the right | number |  | iOS:✅<br> Android:❌<br> Harmony:✅ |
| anchorY | Vertical offset, positive downwards | number |  | iOS:✅<br> Android:✅<br> Harmony:✅ |

### [\#](https://super-apps.ai/mop/document/en/develop/component/map.html\#custom-callout-bubble-on-marker-2) Custom Callout Bubble on Marker

When `customCallout` exists, it will ignore the `callout` and `title` attributes. The custom callout uses `cover-view` for customization, offering higher flexibility.

| Attribute | Description | Type | Remarks | Support |
| --- | --- | --- | --- | --- |
| display | 'BYCLICK': Show on click; 'ALWAYS': Always visible | string |  | iOS:✅<br> Android:✅<br>Harmony:✅ |
| anchorX | Horizontal offset, positive to the right | number |  | iOS:✅<br> Android:❌<br> Harmony:✅ |
| anchorY | Vertical offset, positive downwards | number |  | iOS:✅<br> Android:✅<br> Harmony:✅ |

Usage is as follows: Add a slot node named `callout` under the `map` component. The internal `cover-view` binds with the marker via the `marker-id` attribute. When the marker is created, the content displayed by this `cover-view` will appear as the callout above the marker point.

```js
<map>
  <cover-view slot="callout">
    <cover-view marker-id="1"></cover-view>
    <cover-view marker-id="2"></cover-view>
    <cover-view marker-id="3"></cover-view>
  </cover-view>
</map>
```

### [\#](https://super-apps.ai/mop/document/en/develop/component/map.html\#label-bubble-on-marker-2) Label Bubble on Marker

| Attribute | Description | Type | Remarks | Support |
| --- | --- | --- | --- | --- |
| content | Text | string |  | iOS:❌ <br> Android:❌<br> Harmony:❌ |
| color | Text color | string |  | iOS:❌ <br> Android:❌<br> Harmony:❌ |
| fontSize | Font size | number |  | iOS:❌ <br> Android:❌<br> Harmony:❌ |
| anchorX | Label's coordinate, origin is the latitude and longitude corresponding to the marker | number |  | iOS:❌ <br> Android:❌<br> Harmony:❌ |
| anchorY | Label's coordinate, origin is the latitude and longitude corresponding to the marker | number |  | iOS:❌ <br> Android:❌<br> Harmony:❌ |
| borderWidth | Border width | number |  | iOS:❌ <br> Android:❌<br> Harmony:❌ |
| borderColor | Border color | string |  | iOS:❌ <br> Android:❌<br> Harmony:❌ |
| borderRadius | Border radius | number |  | iOS:❌ <br> Android:❌<br> Harmony:❌ |
| bgColor | Background color | string |  | iOS:❌ <br> Android:❌<br> Harmony:❌ |
| padding | Text padding | number |  | iOS:❌ <br> Android:❌<br> Harmony:❌ |
| textAlign | Text alignment. Valid values: left, right, center | string |  | iOS:❌ <br> Android:❌<br> Harmony:❌ |

### [\#](https://super-apps.ai/mop/document/en/develop/component/map.html\#polyline-3) Polyline

| Attribute | Description | Type | Required | Remarks | Support |
| --- | --- | --- | --- | --- | --- |
| points | Array of latitude and longitude | array | Yes | \[{latitude: 0, longitude: 0}\] | iOS:✅<br> Android:✅<br> Harmony:✅ |
| color | Line color | string | No | Hexadecimal | iOS:✅<br> Android:✅<br> Harmony:✅ |
| colorList | Rainbow line | array | No | If present, ignores the `color` value | iOS:✅<br> Android:✅<br> Harmony:✅ |
| width | Line width | number | No |  | iOS:✅<br> Android:✅<br> Harmony:✅ |
| dottedLine | Whether dashed line | boolean | No | Default false | iOS:❌ <br> Android:✅<br> Harmony:✅ |
| arrowLine | Line with arrow | boolean | No | Default false | iOS:❌ <br> Android:✅<br> Harmony:❌ |
| arrowIconPath | Change arrow icon | string | No | Effective when `arrowLine` is true | iOS:✅<br> Android:✅<br> Harmony:❌ |
| borderColor | Line border color | string | No |  | iOS:❌ <br> Android:❌<br> Harmony:✅ |
| borderWidth | Line thickness | number | No |  | iOS:❌ <br> Android:❌<br> Harmony:✅ |
| level | Overlay relationship | string | No | Default is abovelabels | iOS:❌ <br> Android:❌<br> Harmony:❌ |

### [\#](https://super-apps.ai/mop/document/en/develop/component/map.html\#polygon-3) Polygon

| Attribute | Description | Type | Required | Remarks | Support |
| --- | --- | --- | --- | --- | --- |
| points | Array of latitude and longitude | array | Yes | \[{latitude: 0, longitude: 0}\] | iOS:✅<br> Android:✅<br> Harmony:✅ |
| strokeWidth | Stroke width | number | No |  | iOS:✅<br> Android:✅<br> Harmony:✅ |
| strokeColor | Stroke color | string | No | Hexadecimal | iOS:✅<br> Android:✅<br> Harmony:✅ |
| fillColor | Fill color | string | No | Hexadecimal | iOS:✅<br> Android:✅<br> Harmony:✅ |
| zIndex | Z-axis value for the polygon | number | No |  | iOS:✅<br> Android:✅<br> Harmony:✅ |
| level | Overlay relationship | string | No | Default is abovelabels | iOS:❌ <br> Android:❌<br> Harmony:❌ |

### [\#](https://super-apps.ai/mop/document/en/develop/component/map.html\#circle-3) circle

| Attribute | Description | Type | Required | Remarks | Support |
| --- | --- | --- | --- | --- | --- |
| latitude | Latitude | number | Yes | Floating point number, range -90 ~ 90 | iOS:✅<br> Android:✅<br> Harmony:✅ |
| longitude | Longitude | number | Yes | Floating point number, range -180 ~ 180 | iOS:✅<br> Android:✅<br> Harmony:✅ |
| color | Stroke color | string | No | Hexadecimal | iOS:✅<br> Android:✅<br> Harmony:✅ |
| fillColor | Fill color | string | No | Hexadecimal | iOS:✅<br> Android:✅<br> Harmony:✅ |
| radius | Radius | number | Yes |  | iOS:✅<br> Android:✅<br> Harmony:✅ |
| strokeWidth | Stroke width | number | No |  | iOS:✅<br> Android:✅<br> Harmony:✅ |
| level | Overlay relationship | string | No | Default is abovelabels | iOS:❌ <br> Android:❌<br> Harmony:❌ |

### [\#](https://super-apps.ai/mop/document/en/develop/component/map.html\#control-3) control

| Attribute | Description | Type | Required | Remarks | Support |
| --- | --- | --- | --- | --- | --- |
| id | Control ID | number | No | This ID will be returned in the control click event callback | iOS:❌ <br> Android:❌<br> Harmony:❌ |
| position | Position of the control on the map | object | Yes | Relative position to the map | iOS:❌ <br> Android:❌<br> Harmony:❌ |
| iconPath | Displayed icon | string | Yes | Image path in the project directory, supports local path, code package path | iOS:❌ <br> Android:❌<br> Harmony:❌ |
| clickable | Whether it's clickable | boolean | No | Default is not clickable | iOS:❌ <br> Android:❌<br> Harmony:❌ |

### [\#](https://super-apps.ai/mop/document/en/develop/component/map.html\#position-3) position

| Attribute | Description | Type | Required | Remarks | Support |
| --- | --- | --- | --- | --- | --- |
| left | Distance from the left boundary of the map | number | No | Default is 0 | iOS:❌ <br> Android:❌<br> Harmony:❌ |
| top | Distance from the top boundary of the map | number | No | Default is 0 | iOS:❌ <br> Android:❌<br> Harmony:❌ |
| width | Control width | number | No | Default is 0 | iOS:❌ <br> Android:❌<br> Harmony:❌ |
| height | Control height | number | No | Default is 0 | iOS:❌ <br> Android:❌<br> Harmony:❌ |

## [\#](https://super-apps.ai/mop/document/en/develop/component/map.html\#tencent-map-only-supported-on-ios-and-android) Tencent Map (Only supported on iOS and Android)

| Attribute | Type | Default Value | Required | Description | Support |
| --- | --- | --- | --- | --- | --- |
| longitude | number | 116.46 | Yes | Center longitude | iOS:✅<br> Android:✅ |
| latitude | number | 39.92 | Yes | Center latitude | iOS:✅<br> Android:✅ |
| scale | number | 16 | No | Zoom level, range is 3-20 | iOS:✅<br> Android:✅ |
| min-scale | number | 3 | No | Minimum zoom level | iOS:✅<br>Android:✅ |
| max-scale | number | 20 | No | Maximum zoom level | iOS:✅<br>Android:✅ |
| markers | Array.marker |  | No | Markers | iOS:✅<br> Android:✅ |
| polyline | Array.polyline |  | No | Routes | iOS:✅<br> Android:✅ |
| circles | Array.circle |  | No | Circles | iOS:✅<br> Android:✅ |
| controls | Array.control |  | No | Controls (to be deprecated, recommend using cover-view instead) | iOS:❌ <br> Android:❌ |
| include-points | Array.point |  | No | Zoom to include all given coordinate points | iOS:✅<br> Android:✅ |
| show-location | boolean | false | No | Show current location with direction | iOS:✅<br> Android:✅ |
| polygons | Array.polygon |  | No | Polygons | iOS:✅<br> Android:✅ |
| subkey | - |  | No | Custom map not supported yet | iOS:❌ <br> Android:❌ |
| layer-style | - |  | No | Custom map not supported yet | iOS:❌ <br> Android:❌ |
| rotate | number | 0 | No | Rotation angle, range 0 ~ 360, angle between map north and device y-axis | iOS:✅<br> Android:✅ |
| skew | number | 0 | No | Tilt angle, range 0 ~ 40, tilt around z-axis | iOS:✅<br> Android:✅ |
| enable-3D | boolean | false | No | Display 3D buildings | iOS:✅<br> Android:✅ |
| show-compass | boolean | false | No | Show compass (iOS default enabled, cannot be disabled) | iOS:✅<br> Android:✅ |
| show-scale | boolean | false | No | Show scale bar | iOS:✅<br> Android:✅ |
| enable-overlooking | boolean | false | No | Enable bird's eye view | iOS:✅<br> Android:✅ |
| enable-zoom | boolean | true | No | Whether zooming is supported | iOS:✅<br> Android:✅ |
| enable-scroll | boolean | true | No | Whether dragging is supported | iOS:✅<br> Android:✅ |
| enable-rotate | boolean | false | No | Whether rotation is supported | iOS:✅<br> Android:✅ |
| enable-satellite | boolean | false | No | Whether satellite view is enabled | iOS:✅<br> Android:✅ |
| enable-traffic | boolean | false | No | Whether real-time traffic is enabled | iOS:✅<br> Android:✅ |
| enable-poi | boolean | true | No | Whether POI points are displayed | iOS:✅<br> Android:✅ |
| enable-building | boolean |  | No | Whether buildings are displayed | iOS:✅<br> Android:✅ |
| setting | object |  | No | Configuration item; when setting content conflicts with property configuration, setting takes precedence | iOS:✅<br> Android:✅ |
| bindtap | eventhandle |  | No | Triggered when the map is clicked, returns latitude and longitude information | iOS:✅<br> Android:✅ |
| bindmarkertap | eventhandle |  | No | Triggered when a marker is clicked, e.detail = {markerId} | iOS:✅<br> Android:✅ |
| bindlabeltap | eventhandle |  | No | Triggered when a label is clicked, e.detail = {markerId} | iOS:❌ <br> Android:❌ |
| bindcontroltap | eventhandle |  | No | Triggered when a control is clicked, e.detail = {controlId} | iOS:❌ <br> Android:❌ |
| bindcallouttap | eventhandle |  | No | Triggered when the bubble corresponding to a marker is clicked, e.detail = {markerId} (iOS only triggers on first click) | iOS:✅<br> Android:✅ |
| bindupdated | eventhandle |  | No | Triggered when map rendering update is completed | iOS:✅<br> Only triggered when map loading is completed Android:✅<br> Only triggered when map loading is completed |
| bindregionchange | eventhandle |  | No | Triggered when the field of view changes | iOS:✅<br> Android:✅ |
| bindpoitap | eventhandle |  | No | Triggered when a POI point on the map is clicked, e.detail = {name, longitude, latitude} | iOS:✅<br> Android:✅ |
| bindanchorpointtap | eventhandle |  | No | Triggered when the positioning marker is clicked, e.detail = {longitude, latitude} | iOS:✅<br> Android:✅ |

### [\#](https://super-apps.ai/mop/document/en/develop/component/map.html\#marker-4) marker

| Attribute | Description | Type | Required | Remarks | Support |
| --- | --- | --- | --- | --- | --- |
| id | Marker ID | number | No | This ID will be returned in the marker click event callback. | iOS:✅<br> Android:✅ |
| clusterId | Cluster ID | number | No | Used for custom point clustering effect | iOS:✅<br> Android:✅ |
| joinCluster | Whether to participate in point clustering | Boolean | No | Default does not participate in point clustering | iOS:❌ <br> Android:✅ |
| latitude | Latitude | number | Yes | Floating point number, range -90 ~ 90 | iOS:✅<br> Android:✅ |
| longitude | Longitude | number | Yes | Floating point number, range -180 ~ 180 | iOS:✅<br> Android:✅ |
| title | Annotation name | string | No | Displayed on click, ignored if callout exists | iOS:✅<br> Android:✅ |
| zIndex | Display level | number | No |  | iOS:✅<br> Android:✅ |
| iconPath | Displayed icon | string | Yes | Image path in the project directory, supports network path, local path, code package path | iOS:✅<br> Android:✅ |
| rotate | Rotation angle | number | No | Clockwise rotation angle, range 0 ~ 360, default is 0 | iOS:✅<br> Android:✅ |
| alpha | Transparency of the annotation | number | No | Default is 1, no transparency, range 0 ~ 1 | iOS:✅<br> Android:✅ |
| width | Width of the annotation icon | number/string | No | Default is the actual width of the image | iOS:✅<br> Android:✅ |
| height | Height of the marker | number | No | Default is the actual height of the image | iOS:✅<br> Android:✅ |
| callout | Bubble window above the marker | Object | No | Supported attributes see table below, recognizes line breaks. | iOS:✅<br> Android:✅ |
| customCallout | Marker | object | No |  | iOS:✅<br> Android:✅ |
| label | Add a label next to the marker | Object | No | Supported attributes see table below, recognizes line breaks. | iOS:❌ <br> Android:❌ |
| anchor | Anchor point of latitude and longitude on the annotation icon, default is bottom center | Object | No | {x, y}, x represents horizontal (0-1), y represents vertical (0-1). {x: .5, y: 1} means bottom center | iOS:✅<br> Android:✅ |
| aria-label | Accessibility description | string | No |  | iOS:❌ <br> Android:❌ |
| displayWithCallout | Whether to display callout/customCallout/title as marker icon | Boolean | No | Display callout/customCallout/title as marker icon, making callout/customCallout/title always visible | iOS:✅<br> Android:✅<br> IDE:❌ |

### [\#](https://super-apps.ai/mop/document/en/develop/component/map.html\#bubble-callout-on-marker-3) Bubble callout on marker

| Attribute | Description | Type | Remarks | Support |
| --- | --- | --- | --- | --- |
| content | Text | string |  | iOS:✅<br> Android:✅ |
| color | Text color | string |  | iOS:✅<br> Android:✅ |
| fontSize | Font size | number |  | iOS:✅<br> Android:✅ |
| borderRadius | Border radius | number |  | iOS:✅<br> Android:✅ |
| borderWidth | Border width | string |  | iOS:✅<br> Android:✅ |
| borderColor | Border color | string |  | iOS:✅<br> Android:✅ |
| bgColor | Background color | string |  | iOS:✅<br> Android:✅ |
| padding | Padding around text | number |  | iOS:✅<br> Android:✅ |
| display | 'BYCLICK': Click to display; 'ALWAYS': Always display | string |  | iOS:✅<br> Android:✅ |
| textAlign | Text alignment. Valid values: left, right, center | string |  | iOS:✅<br> Android:✅ |
| anchorX | Horizontal offset, positive to the right | number |  | iOS:✅<br> Android:✅ |
| anchorY | Vertical offset, positive downwards | number |  | iOS:✅<br> Android:✅ |

### [\#](https://super-apps.ai/mop/document/en/develop/component/map.html\#custom-bubble-customcallout-on-marker) Custom bubble customCallout on marker

When customCallout exists, the callout and title attributes will be ignored. The custom bubble uses cover-view for customization, offering higher flexibility.

| Attribute | Description | Type | Remarks | Support |
| --- | --- | --- | --- | --- |
| display | 'BYCLICK': Click to display; 'ALWAYS': Always display | string |  | iOS:✅<br> Android:✅ |
| anchorX | Horizontal offset, positive to the right | number |  | iOS:✅<br> Android:✅ |
| anchorY | Vertical offset, positive downwards | number |  | iOS:✅<br> Android:✅ |

Usage is as follows: add a slot node named callout under the map component, and its internal cover-view binds to the marker through the marker-id attribute. When the marker is created, the content displayed by this cover-view will appear as a callout above the marker.

```js
<map>
  <cover-view slot="callout">
    <cover-view marker-id="1"></cover-view>
    <cover-view marker-id="2"></cover-view>
    <cover-view marker-id="3"></cover-view>
  </cover-view>
</map>
```

### [\#](https://super-apps.ai/mop/document/en/develop/component/map.html\#label-bubble-on-marker-3) Label bubble on marker

| Attribute | Description | Type | Remarks | Support |
| --- | --- | --- | --- | --- |
| content | Text | string |  | iOS:❌ <br> Android:❌ |
| color | Text color | string |  | iOS:❌ <br> Android:❌ |
| fontSize | Font size | number |  | iOS:❌ <br> Android:❌ |
| anchorX | Coordinates of the label, origin is the latitude and longitude corresponding to the marker | number |  | iOS:❌ <br> Android:❌ |
| anchorY | Coordinates of the label, origin is the latitude and longitude corresponding to the marker | number |  | iOS:❌ <br> Android:❌ |
| borderWidth | Border width | number |  | iOS:❌ <br> Android:❌ |
| borderColor | Border color | string |  | iOS:❌ <br> Android:❌ |
| borderRadius | Border radius | number |  | iOS:❌ <br> Android:❌ |
| bgColor | Background color | string |  | iOS:❌ <br> Android:❌ |
| padding | Padding around text | number |  | iOS:❌ <br> Android:❌ |
| textAlign | Text alignment. Valid values: left, right, center | string |  | iOS:❌ <br> Android:❌ |

### [\#](https://super-apps.ai/mop/document/en/develop/component/map.html\#polyline-4) polyline

| Attribute | Description | Type | Required | Remarks | Support |
| --- | --- | --- | --- | --- | --- |
| points | Array of latitude and longitude | array | Yes | \[{latitude: 0, longitude: 0}\] | iOS:✅<br> Android:✅ |
| color | Line color | string | No | Hexadecimal | iOS:✅<br> Android:✅ |
| colorList | Rainbow line | array | No | If present, ignores color value | iOS:✅<br> Android:✅ |
| width | Line width | number | No |  | iOS:✅<br> Android:✅ |
| dottedLine | Whether dashed line | boolean | No | Default false | iOS:✅<br> Android:✅ |
| arrowLine | Line with arrow | boolean | No | Default false | iOS:✅<br> Android:✅ |
| arrowIconPath | Change arrow icon | string | No | Effective when arrowLine is true | iOS:✅<br> Android:✅ |
| borderColor | Line border color | string | No |  | iOS:✅<br> Android:✅ |
| borderWidth | Line thickness | number | No |  | iOS:✅<br> Android:✅ |
| level | Overlay relationship | string | No | Default is abovelabels | iOS:✅<br> Android:✅ |

### [\#](https://super-apps.ai/mop/document/en/develop/component/map.html\#polygon-4) polygon

| Attribute | Description | Type | Required | Remarks | Support |
| --- | --- | --- | --- | --- | --- |
| points | Array of latitude and longitude | array | Yes | \[{latitude: 0, longitude: 0}\] | iOS:✅<br> Android:✅ |
| strokeWidth | Stroke width | number | No |  | iOS:✅<br> Android:✅ |
| strokeColor | Stroke color | string | No | Hexadecimal | iOS:✅<br> Android:✅ |
| fillColor | Fill color | string | No | Hexadecimal | iOS:✅<br> Android:✅ |
| zIndex | Z-axis value for the polygon | number | No |  | iOS:✅<br> Android:✅ |
| level | Overlay relationship | string | No | Default is abovelabels | iOS:✅<br> Android:✅ |

### [\#](https://super-apps.ai/mop/document/en/develop/component/map.html\#circle-4) circle

| Attribute | Description | Type | Required | Remarks | Support |
| --- | --- | --- | --- | --- | --- |
| latitude | Latitude | number | Yes | Floating point number, range -90 ~ 90 | iOS:✅<br> Android:✅ |
| longitude | Longitude | number | Yes | Floating point number, range -180 ~ 180 | iOS:✅<br> Android:✅ |
| color | Stroke color | string | No | Hexadecimal | iOS:✅<br> Android:✅ |
| fillColor | Fill color | string | No | Hexadecimal | iOS:✅<br> Android:✅ |
| radius | Radius | number | Yes |  | iOS:✅<br> Android:✅ |
| strokeWidth | Stroke width | number | No |  | iOS:✅<br> Android:✅ |
| level | Overlay relationship | string | No | Default is abovelabels | iOS:✅<br> Android:✅ |

### [\#](https://super-apps.ai/mop/document/en/develop/component/map.html\#control-4) control

| Attribute | Description | Type | Required | Remarks | Support |
| --- | --- | --- | --- | --- | --- |
| id | Control ID | number | No | This ID will be returned in the control click event callback | iOS:❌ <br> Android:❌ |
| position | Position of the control on the map | object | Yes | Relative position to the map | iOS:❌ <br> Android:❌ |
| iconPath | Displayed icon | string | Yes | Image path in the project directory, supports local path, code package path | iOS:❌ <br> Android:❌ |
| clickable | Whether it's clickable | boolean | No | Default is not clickable | iOS:❌ <br> Android:❌ |

### [\#](https://super-apps.ai/mop/document/en/develop/component/map.html\#position-4) position

| Attribute | Description | Type | Required | Remarks | Support |
| --- | --- | --- | --- | --- | --- |
| left | Distance from the left boundary of the map | number | No | Default is 0 | iOS:❌ <br> Android:❌ |
| top | Distance from the top boundary of the map | number | No | Default is 0 | iOS:❌ <br> Android:❌ |
| width | Control width | number | No | Default is 0 | iOS:❌ <br> Android:❌ |
| height | Control height | number | No | Default is 0 | iOS:❌ <br> Android:❌ |

## [\#](https://super-apps.ai/mop/document/en/develop/component/map.html\#google-maps-only-supported-on-android) Google Maps (Only supported on Android)

| Attribute | Type | Default Value | Required | Description | Support |
| --- | --- | --- | --- | --- | --- |
| longitude | number | 116.46 | Yes | Center longitude | ✅ |
| latitude | number | 39.92 | Yes | Center latitude | ✅ |
| scale | number | 16 | No | Zoom level, range is 3-20 | ✅ |
| min-scale | number | 3 | No | Minimum zoom level | ✅ |
| max-scale | number | 20 | No | Maximum zoom level | ✅ |
| markers | Array.marker |  | No | Markers | ✅ |
| polyline | Array.polyline |  | No | Routes | ✅ |
| circles | Array.circle |  | No | Circles | ✅ |
| controls | Array.control |  | No | Controls (to be deprecated, recommend using cover-view instead) | ❌ |
| include-points | Array.point |  | No | Zoom to include all given coordinate points | ✅ |
| show-location | boolean | false | No | Show current location with direction | ✅ |
| polygons | Array.polygon |  | No | Polygons | ✅ |
| subkey | - |  | No | Custom map not supported yet | ❌ |
| layer-style | - |  | No | Custom map not supported yet | ❌ |
| rotate | number | 0 | No | Rotation angle, range 0 ~ 360, angle between map north and device y-axis | ✅ |
| skew | number | 0 | No | Tilt angle, range 0 ~ 40, tilt around z-axis | ✅ |
| enable-3D | boolean | false | No | Display 3D buildings | ❌ |
| show-compass | boolean | false | No | Show compass | ✅ |
| show-scale | boolean | false | No | Show scale bar | ❌ |
| enable-overlooking | boolean | false | No | Enable bird's eye view | ✅ |
| enable-zoom | boolean | true | No | Whether zooming is supported | ✅ |
| enable-scroll | boolean | true | No | Whether dragging is supported | ✅ |
| enable-rotate | boolean | false | No | Whether rotation is supported | ✅ |
| enable-satellite | boolean | false | No | Whether satellite view is enabled | ✅ |
| enable-traffic | boolean | false | No | Whether real-time traffic is enabled | ✅ |
| enable-poi | boolean | true | No | Whether POI points are displayed | ✅ |
| enable-building | boolean |  | No | Whether buildings are displayed | ✅ |
| setting | object |  | No | Configuration item; when setting content conflicts with property configuration, setting takes precedence | ✅ |
| bindtap | eventhandle |  | No | Triggered when the map is clicked, returns latitude and longitude information | ✅ |
| bindmarkertap | eventhandle |  | No | Triggered when a marker is clicked, e.detail = {markerId} | ✅ |
| bindlabeltap | eventhandle |  | No | Triggered when a label is clicked, e.detail = {markerId} | ❌ |
| bindcontroltap | eventhandle |  | No | Triggered when a control is clicked, e.detail = {controlId} | ❌ |
| bindcallouttap | eventhandle |  | No | Triggered when the bubble corresponding to a marker is clicked, e.detail = {markerId} | ✅ |
| bindupdated | eventhandle |  | No | Triggered when map rendering update is completed | ✅ Only triggered when map loading is completed |
| bindregionchange | eventhandle |  | No | Triggered when the field of view changes | ✅ |
| bindpoitap | eventhandle |  | No | Triggered when a POI point on the map is clicked, e.detail = {name, longitude, latitude} | ✅ |
| bindanchorpointtap | eventhandle |  | No | Triggered when the positioning marker is clicked, e.detail = {longitude, latitude} | ✅ |

### [\#](https://super-apps.ai/mop/document/en/develop/component/map.html\#marker-5) marker

| Attribute | Description | Type | Required | Remarks | Support |
| --- | --- | --- | --- | --- | --- |
| id | Marker point ID | number | No | The marker's click event callback will return this ID. | ✅ |
| clusterId | Cluster ID | number | No | Used for custom point clustering effects | ✅ |
| joinCluster | Whether to participate in point clustering | Boolean | No | Defaults to not participating in point clustering | ✅ |
| latitude | Latitude | number | Yes | Floating-point number, range -90 ~ 90 | ✅ |
| longitude | Longitude | number | Yes | Floating-point number, range -180 ~ 180 | ✅ |
| title | Annotation point name | string | No | Displayed when clicked; ignored if callout exists | ✅ |
| zIndex | Display level | number | No |  | ✅ |
| iconPath | Displayed icon | string | Yes | Image path under the project directory, supports network paths, local paths, and code package paths | ✅ |
| rotate | Rotation angle | number | No | Clockwise rotation angle, range 0 ~ 360, default is 0 | ✅ |
| alpha | Transparency of the annotation | number | No | Default is 1 (no transparency), range 0 ~ 1 | ✅ |
| width | Width of the annotation icon | number/string | No | Defaults to the actual width of the image | ✅ |
| height | Marker point | number | No | Defaults to the actual height of the image | ✅ |
| callout | Bubble window above the marker point | Object | No | Supported attributes are shown in the table below; recognizes line breaks. | ✅ |
| customCallout | Marker point | object | No |  | ✅ |
| label | Adds a label next to the marker point | Object | No | Supported attributes are shown in the table below; recognizes line breaks. | ❌ |
| anchor | Anchor point of latitude and longitude on the annotation icon, defaults to the midpoint of the bottom edge | Object | No | {x, y}, where x represents horizontal (0-1) and y represents vertical (0-1). {x: .5, y: 1} indicates the midpoint of the bottom edge | ✅ |
| aria-label | Accessibility description (additional description of the element) | string | No |  | ❌ |

### [\#](https://super-apps.ai/mop/document/en/develop/component/map.html\#bubble-callout-on-marker-4) Bubble callout on marker

| Attribute | Description | Type | Remarks | Support |
| --- | --- | --- | --- | --- |
| content | Text | string |  | ✅ |
| color | Text color | string |  | ✅ |
| fontSize | Font size | number |  | ✅ |
| borderRadius | Border radius | number |  | ✅ |
| borderWidth | Border width | string |  | ✅ |
| borderColor | Border color | string |  | ✅ |
| bgColor | Background color | string |  | ✅ |
| padding | Text margin | number |  | ✅ |
| display | 'BYCLICK': show on click; 'ALWAYS': always visible | string |  | ❌ |
| textAlign | Text alignment. Valid values: left, right, center | string |  | ✅ |
| anchorX | Horizontal offset, positive to the right | number |  | ✅ |
| anchorY | Vertical offset, positive downward | number |  | ✅ |

### [\#](https://super-apps.ai/mop/document/en/develop/component/map.html\#custom-bubble-customcallout-on-marker-2) Custom bubble customCallout on marker

When customCallout exists, the callout and title attributes will be ignored. Custom bubbles use cover-view for customization, offering higher flexibility.

| Attribute | Description | Type | Remarks | Support |
| --- | --- | --- | --- | --- |
| display | 'BYCLICK': show on click; 'ALWAYS': always visible | string |  | ❌ |
| anchorX | Horizontal offset, positive to the right | number |  | ✅ |
| anchorY | Vertical offset, positive downward | number |  | ✅ |

Usage is as follows: Add a slot node named callout under the map component. The internal cover-view is bound to the marker via the marker-id attribute. When the marker is created, the content displayed by this cover-view will appear as the callout above the marker point.

```js
<map>
  <cover-view slot="callout">
    <cover-view marker-id="1"></cover-view>
    <cover-view marker-id="2"></cover-view>
    <cover-view marker-id="3"></cover-view>
  </cover-view>
</map>
```

### [\#](https://super-apps.ai/mop/document/en/develop/component/map.html\#label-bubble-on-marker-4) Label bubble on marker

| Attribute | Description | Type | Remarks | Support |
| --- | --- | --- | --- | --- |
| content | Text | string |  | ❌ |
| color | Text color | string |  | ❌ |
| fontSize | Font size | number |  | ❌ |
| anchorX | Label coordinates, origin is the latitude and longitude corresponding to the marker | number |  | ❌ |
| anchorY | Label coordinates, origin is the latitude and longitude corresponding to the marker | number |  | ❌ |
| borderWidth | Border width | number |  | ❌ |
| borderColor | Border color | string |  | ❌ |
| borderRadius | Border radius | number |  | ❌ |
| bgColor | Background color | string |  | ❌ |
| padding | Text margin | number |  | ❌ |
| textAlign | Text alignment. Valid values: left, right, center | string |  | ❌ |

### [\#](https://super-apps.ai/mop/document/en/develop/component/map.html\#polyline-5) polyline

| Attribute | Description | Type | Required | Remarks | Support |
| --- | --- | --- | --- | --- | --- |
| points | Array of latitude and longitude | array | Yes | \[{latitude: 0, longitude: 0}\] | ✅ |
| color | Line color | string | No | Hexadecimal | ✅ |
| colorList | Rainbow line | array | No | If present, the color value is ignored | ❌ |
| width | Line width | number | No |  | ✅ |
| dottedLine | Whether it is a dashed line | boolean | No | Defaults to false | ❌ |
| arrowLine | Line with an arrow | boolean | No | Defaults to false | ❌ |
| arrowIconPath | Change arrow icon | string | No | Takes effect when arrowLine is true | ❌ |
| borderColor | Line border color | string | No |  | ❌ |
| borderWidth | Line thickness | number | No |  | ❌ |
| level | Overlap relationship | string | No | Defaults to abovelabels | ❌ |

### [\#](https://super-apps.ai/mop/document/en/develop/component/map.html\#polygon-5) polygon

| Attribute | Description | Type | Required | Remarks | Support |
| --- | --- | --- | --- | --- | --- |
| points | Array of latitude and longitude | array | Yes | \[{latitude: 0, longitude: 0}\] | ✅ |
| strokeWidth | Stroke width | number | No |  | ✅ |
| strokeColor | Stroke color | string | No | Hexadecimal | ✅ |
| fillColor | Fill color | string | No | Hexadecimal | ✅ |
| zIndex | Set Z-axis value for the polygon | number | No |  | ✅ |
| level | Overlap relationship | string | No | Defaults to abovelabels | ❌ |

### [\#](https://super-apps.ai/mop/document/en/develop/component/map.html\#circle-5) circle

| Attribute | Description | Type | Required | Remarks | Other |
| --- | --- | --- | --- | --- | --- |
| latitude | Latitude | number | Yes | Floating-point number, range -90 ~ 90 | ✅ |
| longitude | Longitude | number | Yes | Floating-point number, range -180 ~ 180 | ✅ |
| color | Stroke color | string | No | Hexadecimal | ✅ |
| fillColor | Fill color | string | No | Hexadecimal | ✅ |
| radius | Radius | number | Yes |  | ✅ |
| strokeWidth | Stroke width | number | No |  | ✅ |
| level | Overlap relationship | string | No | Defaults to abovelabels | ❌ |

### [\#](https://super-apps.ai/mop/document/en/develop/component/map.html\#control-5) control

| Attribute | Description | Type | Required | Remarks | Support |
| --- | --- | --- | --- | --- | --- |
| id | Control ID | number | No | The control's click event callback will return this ID | ❌ |
| position | Position of the control on the map | object | Yes | Relative position of the control on the map | ❌ |
| iconPath | Displayed icon | string | Yes | Image path under the project directory, supports local paths and code package paths | ❌ |
| clickable | Whether it is clickable | boolean | No | Defaults to not clickable | ❌ |

### [\#](https://super-apps.ai/mop/document/en/develop/component/map.html\#position-5) position

| Attribute | Description | Type | Required | Remarks | Support |
| --- | --- | --- | --- | --- | --- |
| left | Distance from the left boundary of the map | number | No | Defaults to 0 | ❌ |
| top | Distance from the top boundary of the map | number | No | Defaults to 0 | ❌ |
| width | Control width | number | No | Defaults to 0 | ❌ |
| height | Control height | number | No | Defaults to 0 | ❌ |