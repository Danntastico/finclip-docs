<!--
Source URL: https://super-apps.ai/mop/document/en/develop/guide/ability/subpackages.html
Extracted: 2026-01-12T23:21:46.539Z (January 12, 2026)
Title: Subpackage Loading | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

# [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/subpackages.html\#subpackage-loading) Subpackage Loading

In certain scenarios, developers need to divide a Mini-Program into different subpackages, which are packaged into separate bundles during the build process and loaded on-demand when users interact with the application.

When building a Mini-Program project with subpackages, the build process outputs one or more subpackages. Every Mini-Program that uses subpackages must contain a **Main Package**. The Main Package contains the default startup page/TabBar page, as well as common resources/JS scripts required by all subpackages. **Subpackages** are divided according to the developer's configuration.

When the Mini-Program starts, the Main Package is downloaded by default and the pages within the Main Package are launched. When a user navigates to a page within a subpackage, the client downloads the corresponding subpackage and displays the page after the download is complete.

## [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/subpackages.html\#_1-using-subpackages) 1\. Using Subpackages

### [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/subpackages.html\#_1-1-configuration-method) 1.1 Configuration Method

Assume the directory structure of a Mini-Program supporting subpackages is as follows:

```text
├── app.js
├── app.json
├── app.ftss
├── packageA
│   └── pages
│       ├── cat
│       └── dog
├── packageB
│   └── pages
│       ├── apple
│       └── banana
├── pages
│   ├── index
│   └── logs
└── utils
```

Developers declare the project's subpackage structure in the `subpackages` field of `app.json`:

```javascript
{
  "pages":[\
    "pages/index",\
    "pages/logs"\
  ],
  "subpackages": [\
    {\
      "root": "packageA",\
      "pages": [\
        "pages/cat",\
        "pages/dog"\
      ]\
    }, {\
      "root": "packageB",\
      "name": "pack2",\
      "pages": [\
        "pages/apple",\
        "pages/banana"\
      ]\
    }\
  ]
}
```

In the `subpackages` array, each subpackage configuration has the following items:

| Field | Type | Description |
| --- | --- | --- |
| root | String | Subpackage root directory |
| name | String | Subpackage alias, usable for subpackage preloading |
| pages | StringArray | Subpackage page paths, relative to the subpackage root directory |
| independent | Boolean | Whether the subpackage is an independent subpackage |

### [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/subpackages.html\#_1-2-packaging-principles) 1.2 Packaging Principles

- After declaring `subpackages`, packaging will follow the paths configured in `subpackages`. Directories outside the `subpackages` configuration paths will be packaged into the Main Package.
- The Main Package can also have its own `pages`, specified in the top-level `pages` field.
- The root directory of a subpackage cannot be a subdirectory within another subpackage.
- TabBar pages must reside within the Main Package.

### [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/subpackages.html\#_1-3-referencing-principles) 1.3 Referencing Principles

- `packageA` cannot `require` JS files from `packageB`, but it can `require` JS files from the Main Package and within `packageA`.
- `packageA` cannot `import` templates from `packageB`, but it can `import` templates from the Main Package and within `packageA`.
- `packageA` cannot use resources from `packageB`, but it can use resources from the Main Package and within `packageA`.

## [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/subpackages.html\#_2-independent-subpackages) 2\. Independent Subpackages

An independent subpackage is a special type of subpackage within a Mini-Program that can operate independently of the Main Package and other subpackages. When entering the Mini-Program from a page within an independent subpackage, downloading the Main Package is not required. The Main Package is only downloaded when the user navigates to a page within a regular subpackage or the Main Package.

Developers can configure pages with a certain degree of functional independence into independent subpackages as needed. When a Mini-Program starts from a regular subpackage page, the Main Package needs to be downloaded first. However, independent subpackages can run without relying on the Main Package, significantly improving the startup speed of subpackage pages.

A single Mini-Program can contain multiple independent subpackages.

### [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/subpackages.html\#_2-1-configuration-method) 2.1 Configuration Method

Assume the Mini-Program directory structure is as follows:

```text
├── app.js
├── app.json
├── app.ftss
├── moduleA
│   └── pages
│       ├── rabbit
│       └── squirrel
├── moduleB
│   └── pages
│       ├── pear
│       └── pineapple
├── pages
│   ├── index
│   └── logs
└── utils
```

Developers declare a subpackage as an independent subpackage by defining the `independent` field within the corresponding subpackage configuration item in the `subpackages` field of `app.json`.

```javascript
{
  "pages": [\
    "pages/index",\
    "pages/logs"\
  ],
  "subpackages": [\
    {\
      "root": "moduleA",\
      "pages": [\
        "pages/rabbit",\
        "pages/squirrel"\
      ]\
    }, {\
      "root": "moduleB",\
      "pages": [\
        "pages/pear",\
        "pages/pineapple"\
      ],\
      "independent": true\
    }\
  ]
}
```

### [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/subpackages.html\#_2-2-limitations) 2.2 Limitations

Independent subpackages are a type of subpackage. All limitations that apply to regular subpackages also apply to independent subpackages. The handling of plugins and custom components within independent subpackages is the same as in regular subpackages.

Additionally, the following should be noted when using independent subpackages:

- Independent subpackages cannot depend on content from the Main Package or other subpackages, including JS files, templates, `.ftss` files, custom components, plugins, etc. (JS files, custom components, and plugins are exempt from this limitation when using Subpackage Asynchronization).
- The `app.ftss` from the Main Package is ineffective for independent subpackages. Avoid using styles from `app.ftss` on independent subpackage pages.
- `App` can only be defined within the Main Package. Defining `App` within an independent subpackage will lead to unpredictable behavior.
- The use of plugins is temporarily unsupported within independent subpackages.

### [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/subpackages.html\#_2-3-notes) 2.3 Notes

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/subpackages.html\#_2-3-1-regarding-getapp) 2.3.1 Regarding getApp()

Unlike regular subpackages, when an independent subpackage runs, the `App` object is not necessarily registered. Therefore, `getApp()` may not necessarily obtain the `App` object:

- When a user starts the Mini-Program from an independent subpackage page, the Main Package does not exist, and the `App` object does not exist. Calling `getApp()` at this point returns `undefined`. The Main Package is downloaded and the `App` object is registered only when the user navigates to a regular subpackage page or a Main Package page.
- When a user navigates to an independent subpackage page from a regular subpackage page or a Main Package page, the Main Package already exists. Calling `getApp()` at this point retrieves the actual `App` object.

Due to this limitation, developers cannot use the `App` object to implement global variable sharing between the independent subpackage and other parts of the Mini-Program.

A default implementation is returned when `App` is undefined. When the Main Package loads and `App` is registered, the properties defined in the default implementation are overwritten and merged into the actual `App` object.

**Example Code:**

- In the independent subpackage

```javascript
const app = getApp({allowDefault: true}) // {}
app.data = 456
app.global = {}
```

- In app.js

```javascript
App({
  data: 123,
  other: 'hello'
})

console.log(getApp()) // {global: {}, data: 456, other: 'hello'}
```

#### [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/subpackages.html\#_2-3-2-regarding-app-lifecycle) 2.3.2 Regarding App Lifecycle

When the Mini-Program is started from an independent subpackage, the `onLaunch` and the first `onShow` of the `App` in the Main Package are called when navigating from the independent subpackage page to the Main Package or another regular subpackage page for the first time.

Since `App` cannot be defined within an independent subpackage, listening for Mini-Program lifecycle events can be achieved using `ft.onAppShow` and `ft.onAppHide`. Other events on the `App` object can be listened for using `ft.onError` and `ft.onPageNotFound`.

## [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/subpackages.html\#_3-subpackage-preloading) 3\. Subpackage Preloading

Developers can configure the framework to automatically preload potentially required subpackages when entering a specific page of the Mini-Program, thereby improving the startup speed when navigating to subsequent subpackage pages. For independent subpackages, the Main Package can also be preloaded.

Subpackage preloading currently only supports configuration-based usage and does not yet support API calls.

### [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/subpackages.html\#_3-1-configuration-method) 3.1 Configuration Method

Preloading of subpackages is triggered upon entering a specific page and is controlled by adding the `preloadRule` configuration to `app.json`.

```javascript
{
  "pages": ["pages/index"],
  "subpackages": [\
    {\
      "root": "important",\
      "pages": ["index"],\
    },\
    {\
      "root": "sub1",\
      "pages": ["index"],\
    },\
    {\
      "name": "hello",\
      "root": "path/to",\
      "pages": ["index"]\
    },\
    {\
      "root": "sub3",\
      "pages": ["index"]\
    },\
    {\
      "root": "indep",\
      "pages": ["index"],\
      "independent": true\
    }\
  ],
  "preloadRule": {
    "pages/index": {
      "network": "all",
      "packages": ["important"]
    },
    "sub1/index": {
      "packages": ["hello", "sub3"]
    },
    "sub3/index": {
      "packages": ["path/to"]
    },
    "indep/index": {
      "packages": ["__APP__"]
    }
  }
}
```

In `preloadRule`, the `key` is the page path, and the `value` is the preloading configuration for entering that page. Each configuration has the following items:

| Field | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| packages | StringArray | Yes | None | The `root` or `name` of the subpackage(s) to preload after entering the page. `__APP__` represents the Main Package. |
| network | String | No | wifi | Preload under specified network conditions. Options are: all: any network, wifi: preload only under Wi-Fi. |