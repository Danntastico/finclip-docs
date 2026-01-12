<!--
Source URL: https://super-apps.ai/mop/document/en/develop/frameInterface/api/component.html
Extracted: 2026-01-12T23:17:39.126Z (January 12, 2026)
Title: Custom Component | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Mini Program Configuration](https://super-apps.ai/mop/document/en/develop/frameInterface/api/component.html) [![](https://super-apps.ai/mop/document/images/arrow_open.svg)\\
Framework API](https://super-apps.ai/mop/document/en/develop/frameInterface/api/app.html)

- [APP](https://super-apps.ai/mop/document/en/develop/frameInterface/api/app.html)
- [Page](https://super-apps.ai/mop/document/en/develop/frameInterface/api/page.html)
- [Component](https://super-apps.ai/mop/document/en/develop/frameInterface/api/component.html)
- [Modernization](https://super-apps.ai/mop/document/en/develop/frameInterface/api/modern.html)

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
FXML Syntax](https://super-apps.ai/mop/document/en/develop/frameInterface/api/component.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
FTS Syntax](https://super-apps.ai/mop/document/en/develop/frameInterface/api/component.html)

# [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/api/component.html\#custom-component) Custom Component

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/api/component.html\#_1-component) 1\. Component

Creates a custom component and accepts an Object-type parameter.

Extension functionality: An xxx.ext.json file can be created. Configuration in xxx.ext.json

# [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/api/component.html\#)

| Definition Segment | Type | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- |
| properties | Object Map | No | The component's external properties, mapping property names to property settings |  |
| data | Object | No | The component's internal data, used together with properties for component template rendering |  |
| observers | Object | No | Component data field observers, used to monitor changes in properties and data | 2.0.11 |
| methods | Object | No | Component methods, including event handlers and arbitrary custom methods; regarding the use of event handlers |  |
| behaviors | String Array | No | Code reuse mechanism between components, similar to mixins and traits |  |
| created | Function | No | Component Lifecycle function - Executed when the component instance is first created. Note that setData cannot be called at this time |  |
| attached | Function | No | Component Lifecycle function - Executed when the component instance enters the page node tree |  |
| ready | Function | No | Component Lifecycle function - Executed after the component layout is completed |  |
| detached | Function | No | Component Lifecycle function - Executed when the component instance is removed from the page node tree |  |
| methods | Object | No | Component methods, including event handlers and arbitrary custom methods; regarding the use of event handlers |  |
| relations | Object | No | Definition of relationships between components, see Component Relations |  |
| options | Object Map | No | Some options (specific option settings will be introduced when discussing related features; not listed here) |  |
| externalClasses | String Array | No | External style classes accepted by the component |  |
| lifetimes | Object | No | Component lifecycle declaration object |  |
| pageLifetimes | Object | No | Lifecycle declaration object of the page where the component resides, see Component Lifecycle | 2.0.4 |

The generated component instance can be accessed via `this` within the component's methods, lifecycle functions, and property observers. The component includes some common properties and methods.

| Property Name | Type | Description | Minimum Version |
| --- | --- | --- | --- |
| is | String | The file path of the component | 2.1.5 |
| id | String | Node id | 2.1.5 |
| dataset | String | Node dataset | 2.1.5 |
| data | Object | Component data, including internal data and property values | 2.1.5 |
| properties | Object | Component data, including internal data and property values (consistent with data) | 2.1.5 |

| Method Name | Parameters | Description | Minimum Version |
| --- | --- | --- | --- |
| setData | Object newData | Sets data and executes View Layer rendering |  |
| triggerEvent | String name, Object detail, Object options | Triggers an event, see Component Communication and Events |  |
| createSelectorQuery |  | Creates a SelectorQuery object, with the selector scope limited to this component instance | 1.5.28 |
| createIntersectionObserver |  | Creates an IntersectionObserver object, with the selector scope limited to this component instance | 1.3.7 |
| selectComponent | String selector | Uses a selector to select component instance nodes, returns the first matched component instance object | 1.5.29 |
| selectAllComponents | String selector | Uses a selector to select component instance nodes, returns an array of all matched component instance objects | 1.5.29 |
| getRelationNodes | String relationKey | Gets all related nodes corresponding to this relationship, see Component Relations | 1.5.38 |
| hasBehavior | Object behavior | Checks if the component has the behavior (recursively checks all behaviors directly or indirectly introduced) | 2.1.5 |
| getPageId |  | Returns the page identifier (a string), which can be used to determine if several custom component instances are within the same page | 2.1.5 |

**Code Example**

```javascript
Component({

  behaviors: [],

  // Property definition (details below)
  properties: {
    myProperty: { // Property name
      type: String,
      value: ''
    },
    myProperty2: String // Simplified definition
  },

  data: {}, // Private data, usable for template rendering

  lifetimes: {
    // Lifecycle functions, can be functions or method names defined in the methods segment
    attached: function () { },
    detached: function () { },
  },

  // Lifecycle functions, can be functions or method names defined in the methods segment
  attached: function () { }, // This attached declaration will be overridden by the declaration in the lifetimes field
  ready: function() { },

  pageLifetimes: {
    // Lifecycle functions of the page where the component resides
    show: function () { },
    hide: function () { },
  },

  methods: {
    onMyButtonTap: function(){
      this.setData({
        // Methods for updating properties and data are similar to methods for updating page data
      })
    },
    // Internal methods are recommended to start with an underscore
    _myPrivateMethod: function(){
      // Set data.A[0].B to 'myPrivateData' here
      this.setData({
        'A[0].B': 'myPrivateData'
      })
    },
    _propertyChange: function(newVal, oldVal) {

    }
  }

})

        Code copied

```

Note

In the properties definition segment, property names use camelCase (propertyName); in FXML, when specifying property values, use kebab-case correspondingly (component-tag-name property-name="attr value"). When applying Data Binding, use camelCase (attr="").

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/api/component.html\#_2-properties) 2\. properties

| Definition Segment | Parameter | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- |
| type |  | Yes | The type of the property |  |
| value |  | No | The initial value of the property |  |
| observer | Function | No | Callback function when the property value changes |  |

**Code Example**

```javascript
Component({
  properties: {
    min: {
      type: Number,
      value: 0
    },
    min: {
      type: Number,
      value: 0,
      observer: function(newVal, oldVal) {
        // Executed when property value changes
      }
    },
    lastLeaf: {
      // This property can be one of three types: Number, String, Boolean
      type: Number,
      optionalTypes: [String, Object],
      value: 0
    }
  }
})

        Code copied

```

The property type can be one of String, Number, Boolean, Object, Array, or null indicating no type restriction.

In most cases, it's best to specify an exact type for a property. This way, when specifying property values literally in FTML, the value obtains a definite type, for example:

```html
<custom-comp min="1" max="5" />

        Code copied

```

At this point, because the corresponding properties of the custom component are defined as Number type, min and max will be assigned the values 1 and 5, not "1" and "5", meaning:

```javascript
this.data.min === 1 // true
this.data.max === 5 // true

        Code copied

```

Tips

- Use `this.data` to get internal data and property values; but modifying it directly will not apply changes to the interface, use `setData` for modifications.
- Property names should avoid starting with `data`, i.e., do not name them in the form `dataXyz`, because in FXML, `data-xyz=""` will be treated as node dataset, not as a component property.
- In the definition and usage of a component, the component's property names and data fields must not conflict with each other (even though they are in different definition segments).

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/api/component.html\#_3-behavior) 3\. Behavior

Registers a behavior and accepts an Object-type parameter.

​

**Parameter** **Object object**

| Definition Segment | Type | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- |
| properties | Object Map | No | Same as component properties |  |
| data | Object | No | Same as component data |  |
| methods | Object | No | Same as custom component methods |  |
| behaviors | String Array | No | Introduce other behaviors |  |
| created | Function | No | Lifecycle function |  |
| attached | Function | No | Lifecycle function |  |
| ready | Function | No | Lifecycle function |  |
| detached | Function | No | Lifecycle function |  |

**Code Example**

```javascript
// my-behavior.js
module.exports = Behavior({
  behaviors: [],
  properties: {
    myBehaviorProperty: {
      type: String
    }
  },
  data: {
    myBehaviorData: {}
  },
  attached: function(){},
  methods: {
    myBehaviorMethod: function(){}
  }
})

        Code copied

```

[Previous：Page](https://super-apps.ai/mop/document/en/develop/frameInterface/api/page.html)[Next：Modernization](https://super-apps.ai/mop/document/en/develop/frameInterface/api/modern.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)