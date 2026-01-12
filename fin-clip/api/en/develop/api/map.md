<!--
Source URL: https://super-apps.ai/mop/document/en/develop/api/map.html
Extracted: 2026-01-12T23:12:32.764Z (January 12, 2026)
Title: Map | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

# [\#](https://super-apps.ai/mop/document/en/develop/api/map.html\#map) Map

## [\#](https://super-apps.ai/mop/document/en/develop/api/map.html\#createmapcontext) createMapContext

**createMapContext(string mapId)**

Creates a map context MapContext object.

**Parameters**

Parameter
string mapId
The id of the map component

**Return Value**

MapContext

## [\#](https://super-apps.ai/mop/document/en/develop/api/map.html\#mapcontext) MapContext

### [\#](https://super-apps.ai/mop/document/en/develop/api/map.html\#mapcontext-addarc) MapContext.addArc

> Support:
>
> System Map (Only iOS, Harmony Supported)
>
> iOS:❌
>
> Harmony:✅
>
> AMap
>
> iOS:❌
>
> Android:❌
>
> IDE:❌
>
> Baidu Map (Only iOS, Android, Harmony Supported)
>
> iOS:❌
>
> Android:❌
>
> Harmony:❌
>
> Tencent Map (Only iOS, Android Supported)
>
> iOS:❌
>
> Android:❌
>
> Google Map (Only Android Supported)
>
> ❌

Adds an arc. Either the pass point or the angle must be set.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| id | number |  | Yes | Arc id |
| start | Object |  | Yes | Starting point |
| end | Object |  | Yes | End point |
| pass | Object |  | No (Harmony: Yes) | Pass point |
| angle | number | 0 | No | Included angle (Harmony: Not Supported) |
| width | number | 5 | No | Line width |
| color | number | #000000 | No | Line color |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function for API call completion (executed regardless of success or failure) |

**Structure Properties of object.start**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| longitude | number |  | Yes | Longitude |
| latitude | number |  | Yes | Latitude |

**Structure Properties of object.end**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| longitude | number |  | Yes | Longitude |
| latitude | number |  | Yes | Latitude |

**Structure Properties of object.pass**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| longitude | number |  | Yes | Longitude |
| latitude | number |  | Yes | Latitude |

### [\#](https://super-apps.ai/mop/document/en/develop/api/map.html\#mapcontext-addcustomlayer) MapContext.addCustomLayer

> Not Supported

Adds a custom layer.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| layerId | string |  | Yes | Custom layer id |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function for API call completion (executed regardless of success or failure) |

### [\#](https://super-apps.ai/mop/document/en/develop/api/map.html\#mapcontext-addgroundoverlay) MapContext.addGroundOverlay

> Support:
>
> System Map (Only iOS, Harmony Supported)
>
> iOS:❌
>
> Harmony:✅
>
> AMap
>
> iOS:❌
>
> Android:❌
>
> IDE:❌
>
> Baidu Map (Only iOS, Android, Harmony Supported)
>
> iOS:❌
>
> Android:❌
>
> Harmony:✅
>
> Tencent Map (Only iOS, Android Supported)
>
> iOS:❌
>
> Android:❌
>
> Google Map (Only Android Supported)
>
> ❌

Creates a custom image overlay layer. The image scales with the map.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| id | String |  | Yes | Image overlay layer id |
| src | String |  | Yes | Image path, supports network images, temporary paths, code package paths |
| bounds | Object |  | Yes | Latitude and longitude range covered by the image |
| visible | Boolean | true | No | Whether visible |
| zIndex | Number | 1 | No | Layer drawing order |
| opacity | Number | 1 | No | Layer opacity |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function for API call completion (executed regardless of success or failure) |

**Structure Properties of object.bounds**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| southwest | Object |  | Yes | Southwest corner latitude and longitude |
| northeast | Object |  | Yes | Northeast corner latitude and longitude |

**Structure Properties of bounds.southwest**

| Structure Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| longitude | number |  | Yes | Longitude |
| latitude | number |  | Yes | Latitude |

**Structure Properties of bounds.northeast**

| Structure Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| longitude | number |  | Yes | Longitude |
| latitude | number |  | Yes | Latitude |

### [\#](https://super-apps.ai/mop/document/en/develop/api/map.html\#mapcontext-addmarkers) MapContext.addMarkers

> Support:
>
> System Map (Only iOS, Harmony Supported)
>
> iOS:✅
>
> Harmony:✅
>
> AMap
>
> iOS:✅
>
> Android:✅
>
> IDE:✅
>
> Baidu Map (Only iOS, Android, Harmony Supported)
>
> iOS:✅
>
> Android:✅
>
> Harmony:✅
>
> Tencent Map (Only iOS, Android Supported)
>
> iOS:✅
>
> Android:✅
>
> Google Map (Only Android Supported)
>
> ✅

Adds markers.

#### [\#](https://super-apps.ai/mop/document/en/develop/api/map.html\#parameters) Parameters

| Property | Type | Default Value | Required | Remarks | Others |
| --- | --- | --- | --- | --- | --- |
| markers | Array |  | Yes | Same as the marker property passed to the map component |  |
| clear | boolean | false | No | Whether to clear all markers on the map first | iOS Not Supported |
| success | function |  | No | Callback function for successful API call |  |
| fail | function |  | No | Callback function for failed API call |  |
| complete | function |  | No | Callback function for API call completion (executed regardless of success or failure) |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/map.html\#mapcontext-addvisuallayer) MapContext.addVisualLayer

> Not Supported

addVisualLayer

### [\#](https://super-apps.ai/mop/document/en/develop/api/map.html\#mapcontext-fromscreenlocation) MapContext.fromScreenLocation

> Support:
>
> System Map (Only iOS, Harmony Supported)
>
> iOS:✅
>
> Harmony:✅
>
> AMap
>
> iOS:✅
>
> Android:✅
>
> IDE:✅
>
> Baidu Map (Only iOS, Android Harmony Supported)
>
> iOS:✅
>
> Android:✅
>
> Harmony:❌
>
> Tencent Map (Only iOS, Android Supported)
>
> iOS:✅
>
> Android:✅
>
> Google Map (Only Android Supported)
>
> ✅

Returns the latitude and longitude of the top-left corner of the map.

#### [\#](https://super-apps.ai/mop/document/en/develop/api/map.html\#parameters-2) Parameters

| Property | Type | Default Value | Required | Remarks | Others |
| --- | --- | --- | --- | --- | --- |
| success | function |  | No | Callback function for successful API call |  |
| fail | function |  | No | Callback function for failed API call |  |
| complete | function |  | No | Callback function for API call completion (executed regardless of success or failure) |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/map.html\#mapcontext-getcenterlocation) MapContext.getCenterLocation

> Support:
>
> System Map (Only iOS, Harmony Supported)
>
> iOS:✅
>
> Harmony:✅
>
> AMap
>
> iOS:✅
>
> Android:✅
>
> IDE:✅
>
> Baidu Map (Only iOS, Android, Harmony Supported)
>
> iOS:✅
>
> Android:✅
>
> Harmony:✅
>
> Tencent Map (Only iOS, Android Supported)
>
> iOS:✅
>
> Android:✅
>
> Google Map (Only Android Supported)
>
> ✅

Gets the latitude and longitude of the current map center.

#### [\#](https://super-apps.ai/mop/document/en/develop/api/map.html\#parameters-3) Parameters

| Property | Type | Default Value | Required | Remarks | Others |
| --- | --- | --- | --- | --- | --- |
| iconPath | string |  | No | Icon path, supports network paths, local paths, code package paths | iOS Not Supported |
| success | function |  | No | Callback function for successful API call |  |
| fail | function |  | No | Callback function for failed API call |  |
| complete | function |  | No | Callback function for API call completion (executed regardless of success or failure) |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/map.html\#mapcontext-getregion) MapContext.getRegion

> Support:
>
> System Map (Only iOS, Harmony Supported)
>
> iOS:✅
>
> Harmony:✅
>
> AMap
>
> iOS:✅
>
> Android:✅
>
> IDE:✅
>
> Baidu Map (Only iOS, Android, Harmony Supported)
>
> iOS:✅
>
> Android:✅
>
> Harmony:✅
>
> Tencent Map (Only iOS, Android Supported)
>
> iOS:✅
>
> Android:✅
>
> Google Map (Only Android Supported)
>
> ✅

Gets the current map's viewing region.

#### [\#](https://super-apps.ai/mop/document/en/develop/api/map.html\#parameters-4) Parameters

| Property | Type | Default Value | Required | Remarks | Others |
| --- | --- | --- | --- | --- | --- |
| success | function |  | No | Callback function for successful API call |  |
| fail | function |  | No | Callback function for failed API call |  |
| complete | function |  | No | Callback function for API call completion (executed regardless of success or failure) |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/map.html\#mapcontext-getrotate) MapContext.getRotate

> Support:
>
> System Map (Only iOS, Harmony Supported)
>
> iOS:❌
>
> Harmony:✅
>
> AMap
>
> iOS:✅
>
> Android:✅
>
> IDE:✅
>
> Baidu Map (Only iOS, Android, Harmony Supported)
>
> iOS:✅
>
> Android:✅
>
> Harmony:✅
>
> Tencent Map (Only iOS, Android Supported)
>
> iOS:✅
>
> Android:✅
>
> Google Map (Only Android Supported)
>
> ✅

Gets the current map's rotation angle.

#### [\#](https://super-apps.ai/mop/document/en/develop/api/map.html\#parameters-5) Parameters

| Property | Typecover | Default Value | Required | Remarks | Others |
| --- | --- | --- | --- | --- | --- |
| success | function |  | No | Callback function for successful API call |  |
| fail | function |  | No | Callback function for failed API call |  |
| complete | function |  | No | Callback function for API call completion (executed regardless of success or failure) |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/map.html\#mapcontext-getscale) MapContext.getScale

> Support:
>
> System Map (Only iOS, Harmony Supported)
>
> iOS:✅
>
> Harmony:✅
>
> AMap
>
> iOS:✅
>
> Android:✅
>
> IDEcover:✅
>
> Baidu Map (Only iOS, Android, Harmony Supported)
>
> iOS:✅
>
> Android:✅
>
> Harmony:✅
>
> Tencent Map (Only iOS, Android Supported)
>
> iOS:✅
>
> Android:✅
>
> Google Map (Only Android Supported)
>
> ✅

Gets the current map's zoom level.

#### [\#](https://super-apps.ai/mop/document/en/develop/api/map.html\#parameters-6) Parameters

| Property | Type | Default Value | Required | Remarks | Others |
| --- | --- | --- | --- | --- | --- |
| success | function |  | No | Callback function for successful API call |  |
| fail | function |  | No | Callback function for failed API call |  |
| complete | function |  | No | Callback function for API call completion (executed regardless of success or failure) |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/map.html\#mapcontext-getskew) MapContext.getSkew

> Support:
>
> System Map (Only iOS, Harmony Supported)
>
> iOS:❌
>
> Harmony:✅
>
> AMap
>
> iOS:✅
>
> Android:✅
>
> IDE:✅
>
> Baidu Map (Only iOS, Android, Harmony Supported)
>
> iOS:✅
>
> Android:✅
>
> Harmony:✅
>
> Tencent Map (Only iOS, Android Supported)
>
> iOS:✅
>
> Android:✅
>
> Google Map (Only Android Supported)
>
> ✅

Gets the current map's tilt angle.

#### [\#](https://super-apps.ai/mop/document/en/develop/api/map.html\#parameters-7) Parameters

| Property | Type | Default Value | Required | Remarks | Others |
| --- | --- | --- | --- | --- | --- |
| success | function |  | No | Callback function for successful API call |  |
| fail | function |  | No | Callback function for failed API call |  |
| complete | function |  | No | Callback function for API call completion (executed regardless of success or failure) |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/map.html\#mapcontext-includepoints) MapContext.includePoints

> Support:
>
> System Map (Only iOS, Harmony Supported)
>
> iOS:✅
>
> Harmony:✅
>
> AMap
>
> iOS:✅
>
> Android:✅
>
> IDE:❌
>
> Baidu Map (Only iOS, Android, Harmony Supported)
>
> iOS:✅
>
> Android:✅
>
> Harmony:✅
>
> Tencent Map (Only iOS, Android Supported)
>
> iOS:✅
>
> Android:✅
>
> Google Map (Only Android Supported)
>
> ✅

Zooms and pans the view to show all specified latitude and longitude points.

#### [\#](https://super-apps.ai/mop/document/en/develop/api/map.html\#parameters-8) Parameters

| Property | Type | Default Value | Required | Remarks | Others |
| --- | --- | --- | --- | --- | --- |
| points | Array.Object> |  | Yes | List of coordinate points to be displayed in the visible region |  |
| padding | Array.number> |  | No | The distance from the edges of the rectangle formed by the coordinate points to the edges of the map, in pixels. Format is \[top, right, bottom, left\]. | On Android Google Maps, only the first item of the array is recognized, and the padding is uniform on all sides.<br>IDE Not Supported<br>Harmony does not support individual adjustments; it uses the first item of the array. |
| success | function |  | No | Callback function for successful API call |  |
| fail | function |  | No | Callback function for failed API call |  |
| complete | function |  | No | Callback function for API call completion (executed regardless of success or failure) |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/map.html\#mapcontext-initmarkercluster) MapContext.initMarkerCluster

> Support:
>
> System Map (Only iOS, Harmony Supported)
>
> iOS:❌
>
> Harmony:❌
>
> AMap
>
> iOS:✅
>
> Android:✅
>
> IDE:❌
>
> Baidu Map (Only iOS, Android, Harmony)
>
> iOS:❌
>
> Android(Not Support enableDefaultStyle):✅
>
> Harmony:❌
>
> Tencent Map (Only iOS, Android)
>
> iOS:✅
>
> Android:✅
>
> Google Map (Only Android)
>
> ✅ Not Support enableDefaultStyle

Initializes the configuration for marker clustering. Uses default configuration if not called.

#### [\#](https://super-apps.ai/mop/document/en/develop/api/map.html\#parameters-9) Parameters

| Property | Type | Default Value | Required | Remarks | Others |
| --- | --- | --- | --- | --- | --- |
| enableDefaultStyle | boolean | true | No | Enable default clustering style |  |
| zoomOnClick | boolean | true | No | Whether to implement cluster separation when clicking on an already clustered marker point |  |
| gridSize | number | 60 | No | The clusterable distance for the clustering algorithm, i.e., points with a distance less than this value will cluster together, in pixels |  |
| success | function |  | No | Callback function for successful API call |  |
| fail | function |  | No | Callback function for failed API call |  |
| complete | function |  | No | Callback function for API call completion (executed regardless of success or failure) |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/map.html\#mapcontext-movealong) MapContext.moveAlong

> Support:
>
> System Map (Only iOS, Harmony Supported)
>
> iOS:✅
>
> Harmony:✅
>
> AMap
>
> iOS:✅
>
> Android:✅
>
> IDE:✅
>
> Baidu Map (Only iOS, Android, Harmony Supported)
>
> iOS:✅
>
> Android:✅
>
> Harmony:✅
>
> Tencent Map (Only iOS, Android Supported)
>
> iOS:✅
>
> Android:✅
>
> Google Map (Only Android Supported)
>
> ✅

Moves a marker along a specified path, used for scenarios like track playback. Triggers a callback event when the animation completes. If the animation is in progress and moveAlong is called again for the same marker, the previous animation will be interrupted.

#### [\#](https://super-apps.ai/mop/document/en/develop/api/map.html\#parameters-10) Parameters

| Property | Type | Default Value | Required | Remarks | Others |
| --- | --- | --- | --- | --- | --- |
| markerId | number |  | Yes | Specified marker |  |
| path | Array |  | Yes | Coordinate string of the movement path, coordinate point format {longitude, latitude} |  |
| autoRotate | boolean | true | No | Automatically change the marker's rotation angle based on the path direction | iOS Not Supported<br>Harmony Not Supported<br>IDE Not Supported, default is not to change marker rotation angle |
| duration | number |  | Yes | Duration of the smooth movement |  |
| success | function |  | No | Callback function for successful API call |  |
| fail | function |  | No | Callback function for failed API call |  |
| complete | function |  | No | Callback function for API call completion (executed regardless of success or failure) |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/map.html\#mapcontext-movetolocation) MapContext.moveToLocation

> Support:
>
> System Map (Only iOS, Harmony Supported)
>
> iOS:✅
>
> Harmony:✅
>
> AMap
>
> iOS:✅
>
> Android:✅
>
> IDE:✅
>
> Baidu Map (Only iOS, Android, Harmony Supported)
>
> iOS:✅
>
> Android cover:✅
>
> Harmony:✅
>
> Tencent Map (Only iOS, Android Supported)
>
> iOS:✅
>
> Android:✅
>
> Google Map (Only Android Supported)
>
> ✅

Moves the map center to the current location point.

#### [\#](https://super-apps.ai/mop/document/en/develop/api/map.html\#parameters-11) Parameters

| Property | Type | Default Value | Required | Remarks | Others |
| --- | --- | --- | --- | --- | --- |
| longitude | number |  | No | Longitude |  |
| latitude | number |  | No | Latitude |  |
| success | function |  | No | Callback function for successful API call |  |
| fail | function |  | No | Callback function for failed API call |  |
| complete | function |  | No | Callback function for API call completion (executed regardless of success or failure) |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/map.html\#mapcontext-on) MapContext.on

> Support:
>
> System Map (Only iOS, Harmony Supported)
>
> iOS:❌
>
> Harmony:❌
>
> AMap
>
> iOS:✅
>
> Android:✅
>
> IDE:❌
>
> Baidu Map (Only iOS, Android, Harmony Supported)
>
> iOS:❌
>
> Android:✅
>
> Not Support markerClusterCreate
>
> Harmony:❌
>
> Tencent Map (Only iOS, Android Supported)
>
> iOS:✅
>
> Android:✅
>
> Google Map (Only Android Supported)
>
> ✅ Not Support markerClusterCreate

Listens for map events: 'markerClusterCreate' is triggered when zooming or dragging causes new clusters to form, only returns information about newly created clusters;

'markerClusterClick' is the click event for clusters.

#### [\#](https://super-apps.ai/mop/document/en/develop/api/map.html\#sample-code) Sample Code

```javascript
  MapContext.on('markerClusterCreate', (res) => {})
  MapContext.on('markerClusterClick', (res) => {})
```

### [\#](https://super-apps.ai/mop/document/en/develop/api/map.html\#mapcontext-openmapapp) MapContext.openMapApp

> Support:
>
> System Map (Only iOS, Harmony Supported)
>
> iOS:✅
>
> Harmony:✅
>
> AMap
>
> iOS:✅
>
> Android:✅
>
> IDE:❌
>
> Baidu Map (Only iOS, Android, Harmony Supported)
>
> iOS:✅
>
> Android:✅
>
> Harmony:✅
>
> Tencent Map (Only iOS, Android Supported)
>
> iOS:✅
>
> Android:✅
>
> Google Map (Only Android Supported)
>
> ✅

Launches a map APP to choose navigation.

#### [\#](https://super-apps.ai/mop/document/en/develop/api/map.html\#parameters-12) Parameters

| Property | Type | Default Value | Required | Remarks | Others |
| --- | --- | --- | --- | --- | --- |
| longitude | Number |  | Yes | Destination longitude |  |
| latitude | Number |  | Yes | Destination latitude |  |
| destination | String |  | Yes | Destination name |  |
| success | function |  | No | Callback function for successful API call |  |
| fail | function |  | No | Callback function for failed API call |  |
| complete | function |  | No | Callback function for API call completion (executed regardless of success or failure) |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/map.html\#mapcontext-removecustomlayer) MapContext.removeCustomLayer

> Not Supported

Removes a custom layer.

#### [\#](https://super-apps.ai/mop/document/en/develop/api/map.html\#parameters-13) Parameters

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| layerId | string |  | Yes | Custom layer id |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function for API call completion (executed regardless of success or failure) |

### [\#](https://super-apps.ai/mop/document/en/develop/api/map.html\#mapcontext-removegroundoverlay) MapContext.removeGroundOverlay

> Support:
>
> System Map (Only iOS, Harmony Supported)
>
> iOS:❌
>
> Harmony:✅
>
> AMap
>
> iOS:❌
>
> Android:❌
>
> IDE:❌
>
> Baidu Map (Only iOS, Android, Harmony Supported)
>
> iOS:❌
>
> Android:❌
>
> Harmony:✅
>
> Tencent Map (Only iOS, Android Supported)
>
> iOS:❌
>
> Android:❌
>
> Google Map (Only Android Supported)
>
> ❌

Removes a custom image overlay layer.

#### [\#](https://super-apps.ai/mop/document/en/develop/api/map.html\#parameters-14) Parameters

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| id | string |  | Yes | Image overlay layer id |
| success | function | cover | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function for API call completion (executed regardless of success or failure) |

### [\#](https://super-apps.ai/mop/document/en/develop/api/map.html\#mapcontext-removemarkers) MapContext.removeMarkers

> Support:
>
> System Map (Only iOS, Harmony Supported)
>
> iOS:✅
>
> Harmony:✅
>
> AMap
>
> iOS:✅
>
> Android:✅
>
> IDE:✅
>
> Baidu Map (Only iOS, Android, Harmony Supported)
>
> iOS:✅
>
> Android:✅
>
> Harmony:✅
>
> Tencent Map (Only iOS, Android Supported)
>
> iOS:✅
>
> Android:✅
>
> Google Map (Only Android Supported)
>
> ✅

Removes markers.

#### [\#](https://super-apps.ai/mop/document/en/develop/api/map.html\#parameters-15) Parameters

**Object object**

| Property | Type | Default Value | Required | Remarks |
| --- | --- | --- | --- | --- |
| markerIds | Array |  | Yes | Collection of marker ids. |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function for API call completion (executed regardless of success or failure) |

### [\#](https://super-apps.ai/mop/document/en/develop/api/map.html\#mapcontext-setboundary) MapContext.setBoundary

> Support:
>
> System Map (Only iOS, Harmony Supported)
>
> iOS:❌
>
> Harmony:✅
>
> AMap
>
> iOS:❌
>
> Android:❌
>
> IDE:❌
>
> Baidu Map (Only iOS, Android, Harmony Supported)
>
> iOS:❌
>
> Android:❌
>
> Harmony:✅
>
> Tencent Map (Only iOS, Android Supported)
>
> iOS:❌
>
> Android:❌
>
> Google Map (Only Android Supported)
>
> ❌

Restricts the display range of the map.

#### [\#](https://super-apps.ai/mop/document/en/develop/api/map.html\#parameters-16) Parameters

**Object object**

| Property | Type | Default Value | Required | Remarks |
| --- | --- | --- | --- | --- |
| southwest | Object |  | Yes | Southwest corner latitude and longitude |
| northeast | Object |  | Yes | Northeast corner latitude and longitude |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function for API call completion (executed regardless of success or failure) |

**Structure Properties of bounds.southwest**

| Structure Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| longitude | number |  | Yes | Longitude |
| latitude | number |  | Yes | Latitude |

**Structure Properties of bounds.northeast**

| Structure Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| longitude | number |  | Yes | Longitude |
| latitude | number |  | Yes | Latitude |

### [\#](https://super-apps.ai/mop/document/en/develop/api/map.html\#mapcontext-removevisuallayer) MapContext.removeVisualLayer

> Not Supported

Removes a visual layer.

### [\#](https://super-apps.ai/mop/document/en/develop/api/map.html\#mapcontext-setcenteroffset) MapContext.setCenterOffset

> Support:
>
> System Map (Only iOS, Harmony Supported)
>
> iOS:❌
>
> Harmony:❌
>
> AMap
>
> iOS:✅
>
> Android:✅
>
> IDE:❌
>
> Baidu Map (Only iOS, Android, Harmony Supported)
>
> iOS:❌
>
> Android:❌
>
> Harmony:✅
>
> Tencent Map (Only iOS, Android Supported)
>
> iOS:✅
>
> Android:✅
>
> Google Map (Only Android Supported)
>
> ❌

Sets the map center point offset. Downwards and rightwards is positive growth. Screen ratio range (0.25~0.75). Default offset is \[0.5, 0.5\].

#### [\#](https://super-apps.ai/mop/document/en/develop/api/map.html\#parameters-17) Parameters

| Property | Type | Default Value | Required | Remarks | Others |
| --- | --- | --- | --- | --- | --- |
| offset | Array.number> |  | Yes | Offset, a two-element array |  |
| success | function |  | No | Callback function for successful API call |  |
| fail | function |  | No | Callback function for failed API call |  |
| complete | function |  | No | Callback function for API call completion (executed regardless of success or failure) |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/map.html\#mapcontext-setlocmarkericon) MapContext.setLocMarkerIcon

> Support:
>
> System Map (Only iOS, Harmony Supported)
>
> iOS:❌
>
> Harmony:✅
>
> AMap
>
> iOS:✅
>
> Android:✅
>
> IDE:❌
>
> Baidu Map (Only iOS, Android, Harmony Supported)
>
> iOS:✅
>
> Android:✅
>
> Harmony:❌
>
> Tencent Map (Only iOS, Android Supported)
>
> iOS:✅
>
> Android:✅
>
> Google Map (Only Android Supported)
>
> ❌

Sets the location point icon. Supports network paths, local paths, code package paths.

#### [\#](https://super-apps.ai/mop/document/en/develop/api/map.html\#parameters-18) Parameters

| Property | Type | Default Value | Required | Remarks | Others |
| --- | --- | --- | --- | --- | --- |
| iconPath | string |  | No | Icon path, supports network paths, local paths, code package paths |  |
| success | function |  | No | Callback function for successful API call |  |
| fail | function |  | No | Callback function for failed API call |  |
| complete | function |  | No | Callback function for API call completion (executed regardless of success or failure) |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/map.html\#mapcontext-toscreenlocation) MapContext.toScreenLocation

> Support:
>
> System Map (Only iOS, Harmony Supported)
>
> iOS:✅
>
> Harmony:✅
>
> AMap
>
> iOS:✅
>
> Android:✅
>
> IDE:❌
>
> Baidu Map (Only iOS, Android, Harmony Supported)
>
> iOS:✅
>
> Android:✅
>
> Harmony:❌
>
> Tencent Map (Only iOS, Android Supported)
>
> iOS:✅
>
> Android:✅
>
> Google Map (Only Android Supported)
>
> ✅

Gets the screen coordinates corresponding to the latitude and longitude. The coordinate origin is the top-left corner of the map.

#### [\#](https://super-apps.ai/mop/document/en/develop/api/map.html\#parameters-19) Parameters

| Property | Type | Default Value | Required | Remarks | Others |
| --- | --- | --- | --- | --- | --- |
| success | function |  | No | Callback function for successful API call |  |
| fail | function |  | No | Callback function for failed API call |  |
| complete | function |  | No | Callback function for API call completion (executed regardless of success or failure) |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/map.html\#mapcontext-translatemarker) MapContext.translateMarker

> Support:
>
> System Map (Only iOS, Harmony Supported)
>
> iOS:✅
>
> Harmony(label Not Support movement):✅
>
> AMap
>
> iOS:✅
>
> Android:✅
>
> IDE:✅
>
> Baidu Map (Only iOS, Android, Harmony Supported)
>
> iOS:✅
>
> Android:✅
>
> Harmony:✅
>
> Tencent Map (Only iOS, Android Supported)
>
> iOS:✅
>
> Android:✅
>
> Google Map (Only Android Supported)
>
> ✅

Translates a marker with animation.

#### [\#](https://super-apps.ai/mop/document/en/develop/api/map.html\#parameters-20) Parameters

| Property | Type | Default Value | Required | Remarks | Others |
| --- | --- | --- | --- | --- | --- |
| markerId | Number |  | Yes | Specified marker |  |
| destination | Object |  | Yes | Target point to which the specified marker moves |  |
| autoRotate | boolean |  | Yes | Whether to automatically rotate the marker during movement | iOS Not Supported<br>Harmony Not Supported<br>IDE Not Supported, default is not to change marker rotation angle |
| rotate | Number |  | Yes | Rotation angle of the marker | iOS Not Supported |
| moveWithRotate | boolean | false | No | Perform translation and rotation simultaneously | iOS Not Supported<br>IDE Not Supported |
| duration | Number | 1000 | No | Animation duration, calculated separately for translation and rotation |  |
| animationEnd | function |  | No | Animation end callback function |  |
| success | function |  | No | Callback function for successful API call |  |
| fail | function |  | No | Callback function for failed API call |  |
| complete | function |  | No | Callback function for API call completion (executed regardless of success or failure) |  |

### [\#](https://super-apps.ai/mop/document/en/develop/api/map.html\#mapcontext-updategroundoverlay) MapContext.updateGroundOverlay

> Support:
>
> System Map (Only iOS, Harmony Supported)
>
> iOS:❌
>
> Harmony:✅
>
> AMap
>
> iOS:❌
>
> Android:❌
>
> IDE:❌
>
> Baidu Map (Only iOS, Android, Harmony Supported)
>
> iOS:❌
>
> Android:❌
>
> Harmony:✅
>
> Tencent Map (Only iOS, Android Supported)
>
> iOS:❌
>
> Android:❌
>
> Google Map (Only Android Supported)
>
> ❌

Updates a custom image overlay layer.

**Parameters**

**Object object**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| id | String |  | Yes | Image overlay layer id |
| src | String |  | Yes | Image path, supports network images, temporary paths, code package paths |
| bounds | Object |  | Yes | Latitude and longitude range covered by the image |
| visible | Boolean | true | No | Whether visible |
| zIndex | Number | 1 | No | Layer drawing order |
| opacity | Number | 1 | No | Layer opacity |
| success | function |  | No | Callback function for successful API call |
| fail | function |  | No | Callback function for failed API call |
| complete | function |  | No | Callback function for API call completion (executed regardless of success or failure) |

**Structure Properties of object.bounds**

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| southwest | Object |  | Yes | Southwest corner latitude and longitude |
| northeast | Object |  | Yes | Northeast corner latitude and longitude |

**Structure Properties of bounds.southwest**

\| Structure Property \| Type \| Default Value \| Required \| Description \|
\| \-\-\-\-\-\-\-\- \| --------