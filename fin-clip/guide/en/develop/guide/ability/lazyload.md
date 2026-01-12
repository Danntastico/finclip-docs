<!--
Source URL: https://super-apps.ai/mop/document/en/develop/guide/ability/lazyload.html
Extracted: 2026-01-12T23:22:17.307Z (January 12, 2026)
Title: Lazy Code Loading and On-Demand Injection | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

# [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/lazyload.html\#lazy-code-loading-and-on-demand-injection) Lazy Code Loading and On-Demand Injection

During Mini-Program startup, besides downloading the code package, code injection is another major time-consuming step. The amount of code injected is directly proportional to memory usage and injection time.

By utilizing the features of **Lazy Code Loading** and **On-Demand Injection**, you can optimize the time consumption and memory usage during the code injection phase.

## [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/lazyload.html\#_1-lazy-code-loading) 1\. Lazy Code Loading

> Supported in Base Library version 3.0.38 and above. Compatible with versions below 3.0.38 but without optimization effects. Use Developer Tools version 1.8.44 or above for debugging, and SDK version 2.41.0 or above.

Typically, when a Mini-Program starts, all JS code from all code packages (Main Package, Subpackage, Plugin Package, Extended Library, etc.) that the startup page depends on is merged and injected entirely. This includes other unvisited pages and unused custom components. Simultaneously, the JS code for all pages and custom components is executed immediately. This results in a lot of unused code being injected and executed in the Mini-Program runtime environment, affecting injection time and memory usage.

Starting from Base Library version 3.0.38, Mini-Programs support configuring selective injection of necessary code through settings to reduce startup time and runtime memory.

```json
{
  "lazyCodeLoading": "requiredComponents"
}
```

### [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/lazyload.html\#_1-1-precautions) 1.1 Precautions

- After enabling Lazy Code Loading, the Mini-Program only injects the custom components and page code required by the currently accessed page. Unvisited pages and custom components not declared on the current page will not be loaded or initialized, and their corresponding code files will not be executed. **Developers must verify that the Mini-Program behaves normally after modifying this configuration.**
- After enabling Lazy Code Loading, all components defined in the page's JSON configuration and global custom components configured in `usingComponents` within `app.json` are considered dependencies of the page and will be injected and loaded. It is recommended that developers **promptly remove declarations of unused custom components from JSON files** and **avoid globally declaring custom components with low usage rates**, as this may otherwise impact the effectiveness of Lazy Code Loading.
- Plugin Packages and Extended Libraries currently do not support Lazy Code Loading.

## [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/lazyload.html\#_2-on-demand-injection) 2\. On-Demand Injection

> Supported in Base Library version 3.0.38 and above. Compatible with versions below 3.0.38 but without optimization effects. Use Developer Tools version 1.8.44 or above for debugging, and SDK version 2.41.0 or above.

Under the premise that the "Lazy Code Loading" feature is enabled, "On-Demand Injection" allows specifying that certain custom components are not injected during Mini-Program startup, but are instead injected only when they are actually rendered.

When `lazyCodeLoading` is already set to `requiredComponents`, configuring a [Component Placeholder](https://super-apps.ai/mop/document/en/develop/guide/component.html#211-component-placeholder) for a custom component will automatically designate that component as an On-Demand Injection component:

1. Within each page, this component will not be injected before its first render.
2. Within each page, during its first render, the component will be rendered as its corresponding placeholder component. Injection begins after the rendering process for that instance finishes.
3. After injection is complete, the placeholder component is replaced by the actual component.