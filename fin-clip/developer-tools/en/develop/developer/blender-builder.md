<!--
Source URL: https://super-apps.ai/mop/document/en/develop/developer/blender-builder.html
Extracted: 2026-01-12T23:15:19.061Z (January 12, 2026)
Title: Compilation Library Changelog | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

[![](https://super-apps.ai/mop/document/images/arrow_open.svg)\\
FinClip Studio](https://super-apps.ai/mop/document/en/develop/developer/fide-detail.html)

- [FinClip Studio Guide](https://super-apps.ai/mop/document/en/develop/developer/fide-detail.html)
- [FinClip Studio AI Assistant](https://super-apps.ai/mop/document/en/develop/developer/ai-assistant.html)
- [FinClip Studio Changelog](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html)
- [Blender Builder Changelog](https://super-apps.ai/mop/document/en/develop/developer/blender-builder.html)
- [FinClip Studio FAQ](https://super-apps.ai/mop/document/en/develop/developer/fide-faq.html)

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Low-code Development](https://super-apps.ai/mop/document/en/develop/developer/blender-builder.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
FinClip App](https://super-apps.ai/mop/document/en/develop/developer/blender-builder.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Generate App from Mini Program](https://super-apps.ai/mop/document/en/develop/developer/blender-builder.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Generate HarmonyOS App from Mini Program](https://super-apps.ai/mop/document/en/develop/developer/blender-builder.html)

# [\#](https://super-apps.ai/mop/document/en/develop/developer/blender-builder.html\#compilation-library-changelog) Compilation Library Changelog

Switching Compilation Library Versions

On the FinClip Studio details page, you can select different compilation library versions.

## [\#](https://super-apps.ai/mop/document/en/develop/developer/blender-builder.html\#_1-0-60) 1.0.60

Update Date: December 26, 2025

1. Fixed an issue where `import.meta.url` would cause compilation errors
2. Fixed an issue where the `?.` syntax would cause errors during compilation and minification
3. Adjusted: Removed the `lang` configuration in the compilation library HTML template

## [\#](https://super-apps.ai/mop/document/en/develop/developer/blender-builder.html\#_1-0-58) 1.0.58

Update Date: September 26, 2025

1. Adjusted: Updated Babel version, replaced `read-package-tree` with `@npmcli/arborist`

## [\#](https://super-apps.ai/mop/document/en/develop/developer/blender-builder.html\#_1-0-57) 1.0.57

Update Date: April 29, 2025

1. Fixed an issue where missing `/` in the subpackage root caused incorrect entry page retrieval

## [\#](https://super-apps.ai/mop/document/en/develop/developer/blender-builder.html\#_1-0-56) 1.0.56

Update Date: April 2, 2025

1. Fixed an issue where the ByteDance Mini-Program DSL did not take effect

## [\#](https://super-apps.ai/mop/document/en/develop/developer/blender-builder.html\#_1-0-55) 1.0.55

Update Date: February 26, 2025

1. Added: Configurable option for Mini-Program traceability
2. Fixed an issue where using functions with the `worklet` directive in certain scenarios caused compilation failures

## [\#](https://super-apps.ai/mop/document/en/develop/developer/blender-builder.html\#_1-0-52) 1.0.52

Update Date: January 2, 2025

1. Fixed a memory leak issue with source maps
2. Fixed an issue where processing source maps for large files caused the process to hang
3. Adjusted: Added `backgroundContentColor` configuration to the window

## [\#](https://super-apps.ai/mop/document/en/develop/developer/blender-builder.html\#_1-0-51) 1.0.51

Update Date: November 8, 2024

1. Fixed an issue with incorrect subpackage content

## [\#](https://super-apps.ai/mop/document/en/develop/developer/blender-builder.html\#_1-0-50) 1.0.50

Update Date: October 25, 2024

1. Added: Compilation support for the game plugin
2. Fixed an issue where the \["Optimize Code Structure"\] prompt appeared during real-device debugging

## [\#](https://super-apps.ai/mop/document/en/develop/developer/blender-builder.html\#_1-0-49) 1.0.49

Update Date: October 11, 2024

1. Fixed an issue where `useExtendedLib` did not take effect
2. Fixed an issue where the compilation file whitelist did not include `webp`
3. Fixed an issue where the `__objectId__` field appeared in variables during remote debugging

## [\#](https://super-apps.ai/mop/document/en/develop/developer/blender-builder.html\#_1-0-48) 1.0.48

Update Date: September 6, 2024

1. Fixed an issue where setting `miniprogramRoot` to `/` caused a blank screen
2. Fixed an issue where using WeUI and on-demand loading on older Android versions caused a blank screen

## [\#](https://super-apps.ai/mop/document/en/develop/developer/blender-builder.html\#_1-0-47) 1.0.47

Update Date: August 23, 2024

1. Fixed source map issues with on-demand injection
2. Fixed an error when introducing plugin components in `app.json`

## [\#](https://super-apps.ai/mop/document/en/develop/developer/blender-builder.html\#_1-0-45) 1.0.45

Update Date: July 27, 2024

1. Fixed an issue where JSON parsing failures did not throw path information
2. Fixed an issue where incorrect `componentGenerics` settings caused compilation errors

## [\#](https://super-apps.ai/mop/document/en/develop/developer/blender-builder.html\#_1-0-44) 1.0.44

Update Date: July 12, 2024

1. Fixed an issue with incorrect subpackage page determination

## [\#](https://super-apps.ai/mop/document/en/develop/developer/blender-builder.html\#_1-0-43) 1.0.43

Update Date: July 12, 2024

1. Adjusted: Modified the maximum length restriction for `.js` files

## [\#](https://super-apps.ai/mop/document/en/develop/developer/blender-builder.html\#_1-0-42) 1.0.42

Update Date: May 31, 2024

1. Fixed an issue where enabling on-demand injection caused the extension library `index.json` to override the Mini-Program JSON

## [\#](https://super-apps.ai/mop/document/en/develop/developer/blender-builder.html\#_1-0-41) 1.0.41

Update Date: May 17, 2024

1. Fixed an issue where compiling the official Taro demo resulted in blank pages
2. Fixed an issue where navigating to subpackages had no response
3. Fixed an issue where the order of definitions in build output files was inconsistent
4. Optimized: Disabled certain global variables

## [\#](https://super-apps.ai/mop/document/en/develop/developer/blender-builder.html\#_1-0-40) 1.0.40

Update Date: April 12, 2024

1. Fixed an issue where on-demand injection did not support extension libraries
2. Fixed an issue where plugin code executed slower than `app.js`

## [\#](https://super-apps.ai/mop/document/en/develop/developer/blender-builder.html\#_1-0-39) 1.0.39

Update Date: March 29, 2024

1. Optimized: Disabled the use of the global variable `$window` in Mini-Programs

## [\#](https://super-apps.ai/mop/document/en/develop/developer/blender-builder.html\#_1-0-38) 1.0.38

Update Date: March 15, 2024

1. Fixed an issue with the mini-game root path

[Previous：FinClip Studio Changelog](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html)[Next：FinClip Studio FAQ](https://super-apps.ai/mop/document/en/develop/developer/fide-faq.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)