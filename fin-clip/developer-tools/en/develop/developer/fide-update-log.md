<!--
Source URL: https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html
Extracted: 2026-01-12T23:15:15.061Z (January 12, 2026)
Title: Developer Tools Update Log | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
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
Low-code Development](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
FinClip App](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Generate App from Mini Program](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Generate HarmonyOS App from Mini Program](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html)

# [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#developer-tools-update-log) Developer Tools Update Log

Installation Notes

Developer Tools (English name: FinClip Studio) supports both Mac and Windows systems. It can be installed and run on macOS 10.0 or later, or Windows 7 or later.
You can click the links below corresponding to your system to get the installation package, and complete the installation following the prompts.

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-61) 2.0.61

Update Date: December 26, 2025

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.61.dmg)
- [Download for Mac ARM64(opens new window)](https://www-cdn.finclip.com/finclip-studio/arm64/FinClip%20Studio-2.0.61.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2point0.61.exe)

1. Fixed issue where the `web-view` component's `removeHTMLWebView` event had no callback.
2. Fixed compilation error issue when `fide.project.config.json` was modified.

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-60) 2.0.60

Update Date: December 12, 2025

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.60.dmg)
- \[Download for Mac ARM64\](https://www-cdn.finclip.com/finclip-studio/arm64 FinClip%20Studio-2.0.60.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2point0.60.exe)

1. Fixed issue where `getMenuButtonBoundingClientRect` returned incorrect data when `navigationStyle` was set to `hide`.
2. Fixed incorrect `windowHeight` value in `systemInfo` when `tabbar` exists.
3. Fixed some `webview` vulnerabilities.
4. Adjusted: Added compilation library debugging logs.
5. Adjusted: Changed the text for unimplemented APIs to "api not implemented".

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-59) 2.0.59

Update Date: November 14, 2025

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.59.dmg)
- [Download for Mac ARM64(opens new window)](https://www-cdn.finclip.com/finclip-studio/arm64/FinClip%20Studio-2.0.59.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2point0.59.exe)

1. Adjusted: Added i18n handling for buttons in the `showModal` and `showActionSheet` components.

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-58) 2.0.58

Update Date: October 31, 2025

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.58.dmg)
- [Download for Mac ARM64(opens new window)](https://www-cdn.finclip.com/finclip-studio/arm64/FinClip%20Studio-2.0.58.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2point0.58.exe)

1. Fixed validation for the `count` parameter in `chooseImage` and `chooseMedia`.
2. Fixed issue where the storage panel displayed errors when using `setStorage` with objects containing a `data` field.
3. Fixed issue where plugin requests could fail in certain scenarios.

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-57) 2.0.57

Update Date: October 17, 2025

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.57.dmg)
- [Download for Mac ARM64(opens new window)](https://www-cdn.finclip.com/finclip-studio/arm64/FinClip%20Studio-2.0.57.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2point0.57.exe)

1. New: Plugin download requests are now handled by the renderer process.
2. New: Added signing and notarization to Mac installation packages.
3. Fixed issue where default values were not handled when DSL was not configured for customized versions.

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-56) 2.0.56

Update Date: September 28, 2025

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.56.dmg)
- [Download for Mac ARM64(opens new window)](https://www-cdn.finclip.com/finclip-studio/arm64/FinClip%20Studio-2.0.56.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2point0.56.exe)

1. Fixed issue where the main interface could not open the SSO login redirect page.
2. Adjusted: Modified English text for login timeout.

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-54) 2.0.54

Update Date: August 15, 2025

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.54.dmg)
- [Download for Mac ARM64(opens new window)](https://www-cdn.finclip.com/finclip-studio/arm64/FinClip%20Studio-2.0.54.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2point0.54.exe)

1. New: Added SSO login configuration.

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-53) 2.0.53

Update Date: August 1, 2025

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.53.dmg)
- [Download for Mac ARM64(opens new window)](https://www-cdn.finclip.com/finclip-studio/arm64/FinClip%20Studio-2.0.53.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2point0.53.exe)

1. New: Added compatibility for OAuth redirect mode; supports configuring server address when OAuth directly jumps to login.
2. Fixed issue where `webview` could access local files via `file` paths.

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-52) 2.0.52

Update Date: July 18, 2025

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.52.dmg)
- [Download for Mac ARM64(opens new window)](https://www-cdn.finclip.com/finclip-studio/arm64/FinClip%20Studio-2.0.52.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2point0.52.exe)

1. Fixed issue where interfaces registered via `loadExtApi` could not respond to mock returns.

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-51) 2.0.51

Update Date: July 4, 2025

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.51.dmg)
- [Download for Mac ARM64(opens new window)](https://www-cdn.finclip.com/finclip-studio/arm64/FinClip%20Studio-2.0.51.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2point0.51.exe)

1. New: Added OAuth login.
2. Fixed: Modified return value fields for `chooseVideo`.
3. Fixed issue where `current` parameter did not take effect in some scenarios when `previewImage` had multiple code package paths.

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-50) 2.0.50

Update Date: June 20, 2025

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.50.dmg)
- [Download for Mac ARM64(opens new window)](https://www-cdn.finclip.com/finclip-studio/arm64/FinClip%20Studio-2.0.50.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2point0.50.exe)

1. New: Added general SSO functionality.

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-49) 2.0.49

Update Date: June 6, 2025

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.49.dmg)
- [Download for Mac ARM64(opens new window)](https://www-cdn.finclip.com/finclip-studio/arm64/FinClip%20Studio-2.0.49.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2point0.49.exe)

1. Code template updates.

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-48) 2.0.48

Update Date: March 21, 2025

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.48.dmg)
- [Download for Mac ARM64(opens new window)](https://www-cdn.finclip.com/finclip-studio/arm64/FinClip%20Studio-2.0.48.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2point0.48.exe)

1. New: Domain modification supports persistence.
2. Fixed issue where navigation styles did not switch when toggling between light and dark themes.
3. Adjusted: Modified data fields for `resource` in `performance`.

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-47) 2.0.47

Update Date: March 21, 2025

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.47.dmg)
- [Download for Mac ARM64(opens new window)](https://www-cdn.finclip.com/finclip-studio/arm64/FinClip%20Studio-2.0.47.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2point0.47.exe)

1. New: Added support for the `getSystemInfo` API in H5 applications.
2. Fixed issue where background audio could not dynamically switch playback rates (#RT-48195).
3. Adjusted: Updated blank game template.

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-46) 2.0.46

Update Date: March 21, 2025

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.46.dmg)
- [Download for Mac ARM64(opens new window)](https://www-cdn.finclip.com/finclip-studio/arm64/FinClip%20Studio-2.0.46.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2point0.46.exe)

1. Fixed issue where mouse simulation in the runtime simulator failed on some Apple M-series chip devices.
2. Fixed issue where `innerAudio playbackRate` did not take effect.

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-45) 2.0.45

Update Date: March 7, 2025

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.45.dmg)
- [Download for Mac ARM64(opens new window)](https://www-cdn.finclip.com/finclip-studio/arm64/FinClip%20Studio-2.0.45.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2point0.45.exe)

1. Adjusted: Templates for H5 applications.

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-44) 2.0.44

Update Date: February 8, 2025

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.44.dmg)
- [Download for Mac ARM64(opens new window)](https://www-cdn.finclip.com/finclip-studio/arm64/FinClip%20Studio-2.0.44.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2point0.44.exe)

1. Fixed issue where the callback for `base64ToTempFilePath` was not triggered.

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-43) 2.0.43

Update Date: January 17, 2025

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.43.dmg)
- [Download for Mac ARM64(opens new window)](https://www-cdn.finclip.com/finclip-studio/arm64/FinClip%20Studio-2.0.43.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2point0.43.exe)

1. New: Added functionality to modify `baseUrl` during real-device debugging.
2. New: `base64ToTempFile` now supports passing file types and image compression.
3. Fixed issue where pull-down refresh could still be triggered via `startPullDownRefresh` when `enablePullDownRefresh` was set to `false`.
4. Fixed issue where clicks were ineffective when running Cocos games in H5 applications.
5. Adjusted: Added signature parameters to internal interfaces and modified encryption fields.

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-42) 2.0.42

Update Date: January 3, 2025

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.42.dmg)
- [Download for Mac ARM64(opens new window)](https://www-cdn.finclip.com/finclip-studio/arm64/FinClip%20Studio-2.0.42.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2point0.42.exe)

1. Fixed issue where the `plugins` field in `app.ext.json` did not take effect.
2. Adjusted: Modified `errMsg` for `getSavedFileInfo`.

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-41) 2.0.41

Update Date: December 20, 2024

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.41.dmg)
- [Download for Mac ARM64(opens new window)](https://www-cdn.finclip.com/finclip-studio/arm64/FinClip%20Studio-2.0.41.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2point0.41.exe)

1. Adjusted: Modified parameter validation for the `playVoice` API.

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-40) 2.0.40

Update Date: December 6, 2024

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.40.dmg)
- [Download for Mac ARM64(opens new window)](https://www-cdn.finclip.com/finclip-studio/arm64/FinClip%20Studio-2.0.40.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2point0.40.exe)

1. New: Added support for the `getPerformance` API.
2. New: Supports opening multiple projects; adjusted startup page UI.
3. New: Video duration is now displayed below the play button in the video component.
4. Adjusted: Modified auto-update logic for AI plugins.

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-39) 2.0.39

Update Date: November 22, 2024

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.39.dmg)
- [Download for Mac ARM64(opens new window)](https://www-cdn.finclip.com/finclip-studio/arm64/FinClip%20Studio-2.0.39.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2point0.39.exe)

1. New: Added support for the `getLocalIPAddress` API.
2. Fixed issue where page focus was incorrect after `webview` redirected to a normal page, causing click abnormalities.

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-38) 2.0.38

Update Date: November 8, 2024

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.38.dmg)

- [Download for Mac ARM64(opens new window)](https://www-cdn.finclip.com/finclip-studio/arm64/FinClip%20Studio-2.0.38.dmg)

- [Download for Windows(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2point0.38.exe)

- New: Supports creating Mini-Programs when uploading code.

- Adjusted: Optimized internationalization translations.

- Fixed: Resolved issue where versions in `app.ext.json` could not be cleared.

- Fixed: Resolved caching issue for subpackage files during incremental compilation.


## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-37) 2.0.37

Update Date: October 25, 2024

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.37.dmg)

- [Download for Mac ARM64(opens new window)](https://www-cdn.finclip.com/finclip-studio/arm64/FinClip%20Studio-2.0.37.dmg)

- [Download for Windows(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2point0.37.exe)

- New: Supports downloading, updating, and logging in for the FinMuse plugin.

- Adjusted: Optimized internationalization translation experience text.

- Fixed: Resolved display issues caused by excessively long global field content.

- Fixed: Added missing permissions in the IDE permissions list; now supports `getPhoneNumber` and `userLocationBackground`.

- Fixed: Resolved issue where `readCompressedFile` did not throw errors when reading other file types.


## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-36) 2.0.36

Update Date: October 12, 2024

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.36.dmg)

- [Downloadbound Mac ARM64(opens new window)](https://www-cdn.finclip.com/finclip-studio/arm64/FinClip%20Studio-2.0.36.dmg)

- [Download for Windows(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2point0.36.exe)

- New: Added mock returns for the `authorize` and `getSetting` APIs.

- Fixed: Issue where compilation errors still displayed the results of the previous compilation.


## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-35) 2.0.35

Update Date: September 20, 2024

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.35.dmg)
- [Downloadbound Mac ARM64(opens new window)](https://www-cdn.finclip.com/finclip-studio/arm64/FinClip%20Studio-2.0.35.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2point0.35.exe)
- Adjusted path concatenation logic for obtaining subpackage configuration files
- Modified redirection URLs for creating Mini-Programs and Management Console
- Updated some documentation

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-34) 2.0.34

Release Date: September 6, 2024

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.34.dmg)

- \[Mac ARM64 Download\](https://www-cdn.finclip.com/finclip-studio/arm64 FinClip%20Studio-2.0.34.dmg)

- [Windows Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.34.exe)

- Added Mini-Program loadSubPackageTask support

- Optimized internationalization translation adjustments and improvements

- Fixed issue where the default loaded Base Library was not the latest version

- Fixed issue where some encrypted m3u8 videos would freeze halfway during playback

- Fixed issue with incorrect Main Package file retrieval when launching from Independent Subpackage

- Fixed issue where loadJsFiles only loaded files from the runtime directory

- Fixed incorrect internal state during service Logic Layer reload and destroy operations


## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-33) 2.0.33

Release Date: August 23, 2024

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.33.dmg)
- \[Mac ARM64 Download\](https://www-cdn.finclip.com/finclip-studio/arm64 FinClip%20Studio-2.0.33.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.33.exe)

1. Adjusted internal support for loading plugins via vsix files
2. Fixed error when uploading blank templates to WeChat Mini-Program

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-32) 2.0.32

Release Date: August 9, 2024

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.32.dmg)
- \[Mac ARM64 Download\](https://www-cdn.finclip.com/finclip-studio/arm64 FinClip%20Studio-2.0.32.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.32.exe)

1. Added custom injection variable functionality
2. Fixed issue with incorrect WeChat entry point judgment

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-31) 2.0.31

Release Date: July 26, 2024

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.31.dmg)
- \[Mac ARM64 Download\](https://www-cdn.finclip.com/finclip-studio/arm64 FinClip%20Studio-2.0.31.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.31.exe)

1. Adjusted WeChat Mini-Program upload entry point judgment logic
2. Fixed upload failure issues caused by oversized WeChat Mini-Program code and app.ext.json

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-30) 2.0.30

Release Date: July 12, 2024

Download Links:
-operations

- [Mac Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.30.dmg)
- \[Mac ARM64 Download\](https://www-cdn.finclip.com/finclip-studio/arm64 FinClip%20Studio-2.0.30.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.30.exe)

1. Fixed updating associated WeChat Mini-Program environment
2. Fixed issue where H5 applications did not validate web.json legality
3. Fixed issue where Mini-Game file modifications did not trigger refresh
4. Adjusted to allow readFile/readFileSync to read Code Package files

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-29) 2.0.29

Release Date: June 28, 2024

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.29.dmg)
- \[Mac ARM64 Download\](https://www-cdn.finclip.com/finclip-studio/arm64 FinClip%20Studio-2.0.29.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.29.exe)

1. Fixed login issues in some environments
2. Adjusted widget real-device debugging to be hidden

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-28) 2.0.28

Release Date: June 14, 2024

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.28.dmg)
- \[Mac ARM64 Download\](https://www-cdn.finclip.com/finclip-studio/arm64 FinClip%20Studio-2.0.28.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.28.exe)

1. Fixed issue where Studio didn't display compilation library version when not logged in
2. Fixed cloud compilation failure when generating App
3. Adjusted H5 application built-in Base Library download logic

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-27) 2.0.27

Release Date: May 31, 2024

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.%2027.dmg)
- \[Mac ARM64 Download\](https://www-cdn.finclip.com/finclip-studio/arm64 FinClip%20Studio-2.0.27.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.27.exe)

01. Added Cloud support for QR code login
02. Added HarmonyOS APP export optimization
03. Modified onChunkReceived implementation solution
04. Added H5 support for web.json configuration
05. Fixed adjusting Android project app name
06. Fixed handling and optimizing errors caused by rapid multiple compilation clicks
07. Fixed QR code not updating after switching environments
08. Fixed incomplete submission time display
09. Fixed appLogoStatus interface adaptation
10. Fixed Cloud environment Offline Package download error
11. Fixed Cloud support for APP generation
12. Fixed Cloud environment plugin download failure
13. Fixed issue where map SDK would remove customCallout nodes
14. Fixed issue where customCallout wouldn't display when used before cover-view completed rendering
15. Adjusted compatibility detection optimization
16. Adjusted IDE upload limit to 150M
17. Adjusted updated offline H5 project template
18. Adjusted picker component region data update
19. Optimized occasional white screen issue caused by saving files during compilation

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-26) 2.0.26

Release Date: May 17, 2024

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.26.dmg)
- \[Mac ARM64 Download\](https://www-cdn.finclip.com/finclip-studio/arm64 FinClip%20Studio-2.0.26.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.26.exe)

01. Added File readCompressedFile and readCompressedFileSync
02. Fixed QR code generation issue when preview errors occurred
03. Fixed compilation error when selecting non-PNG images for APP icon generation
04. Fixed incorrect app.ext.json reading
05. Fixed WeChat Mini-Program upload error
06. Adjusted WeChat Mini-Program Cloud environment adaptation configuration
07. Added HarmonyOS project export
08. Added originlUrl configuration for H5 applications
09. IDE map component supports customCallout
10. Updated ts and H5 application templates

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-25) 2.0.25

Release Date: April 26, 2024

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.25.dmg)
- \[Mac ARM64 Download\](https://www-cdn.finclip.com/finclip-studio/arm64 FinClip%20Studio-2.0.25.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.25.exe)

1. Added logic for loading independent Base Library based on app.ext.json
2. Fixed cached template path retrieval issue
3. Fixed cloud compilation APP generation issue

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-24) 2.0.24

Release Date: April 12, 2024

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.24.dmg)
- \[Mac ARM64 Download\](https://www-cdn.finclip.com/finclip-studio/arm64 FinClip%20Studio-2.0.24.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.24.exe)

1. Added offline H5 parameter configuration
2. Optimized i18n translations
3. Optimized offline web and web-view devtool display improvements
4. Fixed H5 application resource loading failure with paths containing spaces
5. Fixed Base Library retrieval issue when not logged in
6. Fixed notarization failure issue
7. Fixed project type creation error

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-23) 2.0.23

Release Date: April 1, 2024

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.23.dmg)
- \[Mac ARM64 Download\](https://www-cdn.finclip.com/finclip-studio/arm64 FinClip%20Studio-2.0.23.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.23.exe)

1. feat: Compatible with cloud version backend
2. feat: Low-code template update
3. fix: Fixed occasional cookie setting failure
4. fix: Mac notarization fix
5. fix: Fixed Base Library list retrieval issue when not logged in

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-22) 2.0.22

Release Date: March 18, 2024

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.22.dmg)
- \[Mac ARM64 Download\](https://www-cdn.finclip.com/finclip-studio/arm64 FinClip%20Studio-2.0.22.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.22.exe)

1. fix: projectName empty value handling
2. feat: Low-code template update
3. fix: Fixed login issue in certificate association environment
4. fix: Fixed APP export error

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-21) 2.0.21

Release Date: March 1, 2024

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.21.dmg)
- \[Mac ARM64 Download\](https://www-cdn.finclip.com/finclip-studio/arm64 FinClip%20Studio-2.0.21.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.21.exe)

1. fix: Fixed subpackage root with "/" navigation issue
2. feat: Fixed webview navigate potentially triggering did-fail-load issue
3. fix: Cloud interface adaptation
4. feat: onChunkReceived support
5. fix: Fixed white screen issue when independent Base Library enabled but view template path still pointing to framework
6. feat: Updated i18n English configuration
7. feat: Support for generating custom API templates
8. feat: Widget support

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-20) 2.0.20

Release Date: February 4, 2024

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.20.dmg)
- \[Mac ARM64 Download\](https://www-cdn.finclip.com/finclip-studio/arm64 FinClip%20Studio-2.0.20.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.20.exe)

1. Updated template ts configuration
2. Plugin projects default to exporting plugin packages
3. Fixed leftover process issue on Mac exit
4. Fixed removeSavedFile path error
5. Support for cacheManager API

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-19) 2.0.19

Release Date: January 22, 2024

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.19.dmg)
- \[Mac ARM64 Download\](https://www-cdn.finclip.com/finclip-studio/arm64 FinClip%20Studio-2.0.19.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.19.exe)

1. feat: Support for AudioContext
2. fix: Fixed low probability recorderManager not triggering stop issue
3. fix: Fixed incorrect path passed to stat issue
4. feat: getFileInfo supports sha256
5. fix: Fixed configuration modification issue when fide config is empty
6. feat: Added user encryption API
7. fix: connectSocket interface success callback timing
8. feat: Local region data

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-18) 2.0.18

Release Date: January 5, 2024

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.18.dmg)
- \[Mac ARM64 Download\](https://www-cdn.finclip.com/finclip-studio/arm64 FinClip%20Studio-2.0.18.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.18.exe)

1. feat: Periodic data and data pre-fetch functionality
2. fix: Taro template compilation configuration

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-17) 2.0.17

Release Date: December 25, 2023

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.17.dmg)
- \[Mac ARM64 Download\](https://www-cdn.finclip.com/finclip-studio/arm64 FinClip%20Studio-2.0.17.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.17.exe)

01. feat: Restored HTTP cache
02. fix: Replaced Mini-Game template
03. fix: Modified plugin prompt in page configuration settings
04. fix: Allowed window to shrink smaller to prevent interface overflow and interaction issues
05. fix: Fixed getVideoInfo data issue
06. feat: web-view page load failure prompt and title optimization
07. fix: Fixed incorrect duration due to recorder audio encoding issues
08. feat: Support for ManagerRecorder's frameSize
09. feat: Support for getVideoInfo API
10. fix: pulldown module optimization, fixed touch within view component not disabling pulldown issue
11. fix: Fixed camera frame callback still triggering after remove
12. fix: previewImage error when current is number
    13 fix: Fixed previewMedia previewImage related issues
13. feat: Removed connectTCPSocket address restriction
14. fix: Fixed preview/export compilation cross-talk issue in multi-instance scenarios
15. feat: Default request timeout set to 60 seconds
16. feat: SDK multi-instance ipc.handle logic optimization
17. fix: Resolved devtool initialization timing issue
18. fix: Optimized remote debugging service instance cleanup logic
19. fix: Fixed devtool scroll and other child nodes highlighting issue
20. fix: QR code login token refresh
21. fix: Taro template supports FinClipConf configuration

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-16) 2.0.16

Release Date: December 11, 2023

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.16.dmg)
- \[Mac ARM64 Download\](https://www-cdn.finclip.com/finclip-studio/arm64 FinClip%20Studio-2.0.16.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.16.exe)

01. fix: Fixed APP export generation script
02. Taro build task process optimization
03. Low-code template update
04. Fixed issue where setting custom API would overwrite FinClipConf.js content
05. Taro template mechanism optimization
06. Fixed appid retrieval issue
07. Fixed getFileSystemManager open method potentially showing permission denied issue
08. Fixed tabbar API execution success in non-tab pages issue
09. Fixed bgAudio repeatedly triggering onCanplay issue
10. Fixed bg audio repeatedly triggering seek issue
11. Fixed request cookie setting issue

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-15) 2.0.15

Release Date: November 24, 2023

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.15.dmg)
- \[Mac ARM64 Download\](https://www-cdn.finclip.com/finclip-studio/arm64 FinClip%20Studio-2.0.15.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.15.exe)

1. request cookie header setting issue
2. referer configuration synchronized with SDK
3. webview prevents window object from blocking require and module to avoid certain judgment errors
4. Support for setIndependentFramework API

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-14) 2.0.14

Release Date: November 13, 2023

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.14.dmg)
- \[Mac ARM64 Download\](https://www-cdn.finclip.com/finclip-studio/arm64 FinClip%20Studio-2.0.14.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.14.exe)

01. feat: Send build\_npm related events (compilation log display)
02. feat: Automatically save custom APIs to finclipConf (API mock settings synchronized to finclipConf.js when adding APIs)
03. feat: Auto-refresh preview (automatically refreshes preview after compilation restart if auto-preview is executable)
04. fix: Fixed extra space in invokecallback issue
05. fix: Fixed readZip API reading base64 invalid issue
06. fix: Fixed unzip failure for files in temp directory
07. fix: Fixed frame callback stopRecord returning success without calling start issue
08. fix: Added duration data to innerAudio Canplay and Play
09. fix: Optimized frame callback processing logic
10. fix: Taro project dist directory preview compilation failure

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-13) 2.0.13

Release Date: October 30, 2023

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.13.dmg)
- \[Mac ARM64 Download\](https://www-cdn.finclip.com/finclip-studio/arm64 FinClip%20Studio-2.0.13.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.13.exe)

1. Fixed shareMenu API global effect issue
2. Save compilation configuration to project configuration file
3. Added logic to SERVICE\_READY to set request whitelist to service process
4. Independent compilation process inherits initOption configuration
5. Adjusted configuration item text

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-12) 2.0.12

Release Date: October 16, 2023

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.12.dmg)
- \[Mac ARM64 Download\](https://www-cdn.finclip.com/finclip-studio/arm64 FinClip%20Studio-2.0.12.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.12.exe)

1. Taro export multi-platform Mini-Program
2. Fixed taro-react template dependency exception in Windows environment
3. Default env configuration for development mode
4. Import project type judgment filtering node\_modules directory files
5. Display Base Library import option during network exceptions
6. Fixed Mini-Game subpackage loading failure when passing custom paths
7. Fixed incomplete decompression issue with large files
8. Fixed previewMedia error
9. Optimized some UI API calls during onLaunch

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-11) 2.0.11

Update Date: September 25, 2023

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2atera0.11.dmg)
- [Mac ARM64 Version Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/arm64/FinClip%20Studio-2.0.11.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.11.exe)

01. Support for application-level proxy settings
02. Support for network request whitelist logic
03. Updated low-code templates
04. Set fide.project.config.json when importing projects
05. Real-device debugging for third-party platform Mini-Programs
06. Fixed interface jitter caused by pop-up windows
07. Mini-Program list caching mechanism
08. Filter application types in appId selection list
09. Clear current application settings when deleting application data
10. TypeScript type completion
11. Fixed issue where lazy loading update preview injection logic failed
12. Handled real-device debugging connection issues
13. Tooltip style optimization
14. Preview/upload build buildOption configuration
15. App ID list uses caching
16. Mac installer icon configuration, FinClip customization configuration
17. Import ByteDance/Alibaba Mini-Programs, project creation module refactoring
18. DropdownMenu and applet-selected component interactions
19. Updated compatibility checks
20. buildNpm supports build parameter configuration
21. Support for homeButton configuration
22. Support for code package path compatibility handling
23. Optimized base library loading failure event mechanism
24. Fixed issue where FileSystemManager.stat did not support local code package paths
25. Fixed judgment error when map markerId = 0
26. previewImage previewMedia supports Mini-Program package local paths
27. Fixed issue where FileSystemManager.access did not support code package paths

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-10) 2.0.10

Update Date: September 11, 2023

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.10.dmg)
- [Mac ARM64 Version Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/arm64/FinClip%20Studio-2.0.10.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.10.exe)

01. Preview supports auto-refresh
02. Fixed some real-device debugging issues
03. Optimized offline-related events
04. Optimized compilation message mechanism
05. Optimized Mini-Program screenshot logic
06. Fixed and optimized multi-organization popup logic
07. Fixed web-view loading failure issue
08. Support for navigationBarTitleFixed configuration
09. Improved camera-related event logic
10. Fixed issues related to hideHomeButton API

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-9) 2.0.9

Update Date: August 28, 2023

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.9.dmg)
- [Mac Compatible Version Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.9.old.dmg)
(Version 2.0.9 upgraded the built-in Chrome kernel version and does not support macOS versions below 11. The compatible version can run without upgrading the system.)
- [Mac ARM64 Version Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/arm64/FinClip%20Studio-2.0.9.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.9.exe)

01. Support for widgets
02. Support for WeChat Mini-Program management
03. Support for low-power Mini-Program preview and upload
04. Upgraded Electron version
05. Fixed Details UI issues
06. Optimized compilation log display logic
07. Updated low-code templates
08. Fixed Export App UI issues
09. Handled upload permission-related issues
10. Fixed service-console display issues
11. Fixed Check for Updates UI issues
12. Optimized Create Project interaction
13. Support for Mini-Game and H5 application thumbnail screenshots
14. Fixed getSuperviseInfo return value

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-8) 2.0.8

Update Date: August 11, 2023

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.8.dmg)
- [Mac ARM64 Version Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/arm64/FinClip%20Studio-2.0.8.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.8.exe)

01. Support for window preloading to improve startup speed
02. Support for recommended plugin features
03. Automatically clear storage after deleting projects
04. Optimized upload preview display when compilation fails
05. Optimized logic for updating compilation library and base library when updating IDE
06. Devtool display optimization
07. Support for quick creation of pages, components, and authorization pages
08. Fixed chunked upload parameter passing issue
09. Added arm64 version for Mac
10. Opened H5 application entry, modified demo

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-7) 2.0.7

Update Date: July 31, 2023

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.7.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.7.exe)

1. Updated low-code plugin
2. Support for creating Taro / TypeScript templates
3. Optimized devtool view display logic
4. Support for offline H5 mode Mini-Programs
5. Support for switching between Chinese and English

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-6) 2.0.6

Update Date: July 17, 2023

Download Links:

- \[Mac Download\](https://www-cdn.finclip.com/finclip-studio FinClip%20Studio-2.0.6.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip%20Studio-2.0.6.exe)

Update Content:

01. feat: Optimized compilation event queue logic
02. fix: Workspace path normalization
03. fix: Optimized project deletion logic
04. fix: Optimized login window interaction logic
05. fix: Update webviewSrc when low-code popup window opens
06. fix: Login exception message reminder
    7 fix: Disable mouse events during dropdownMenu interaction animation
07. feat: Updated Mini-Game templates
08. feat: Remote debug custom titlebar
09. fix: Removed cmd+R shortcut key
10. fix: Handled trailing slash issue in custom API address
11. fix: Mac titlebar full-screen logic handling
12. fix: Update setAppIdOptions state when re-logging in
13. fix: Remote debugging packageConfig parameter
14. fix: Fixed upload issue when app.zip is missing
15. fix: Handled upload issues
16. feat: Removed enableBlenderCompile check
17. feat: Removed checkIsSuportNetdisk compatibility logic for legacy FinClip backend
18. fix: Created templates adapted for low-code
19. fix: Disabled real-device debugging entry for Mini-Games
20. fix: Fixed Python packaging issue
21. feat: Support for offline H5 type loading
22. feat: Default project template configuration
23. fix: Changed Details panel input to React controlled component
24. fix: Open Mini-Program details by default on first startup
25. fix: Refresh image verification code after login failure
26. fix: Register popup window commands after low-code page is ready
27. fix: Trigger compilation task queue execution when simulator is displayed
28. fix: Toolbar component initialization
29. fix: Restore panel position after editor face collapse/expand
30. fix: Low-code popup window responds to publish popup simulator event
31. feat: Webview window custom titlebar
32. fix: Save lowCode identifier to project configuration fide.project.config.json
33. feat: Obtain ideSdk instance via getFinclipSDKServiceIns
34. fix: Login exception image QR code filling
35. fix: Optimized SMS login area code selection component interaction
36. fix: Simulator exception message style
37. feat: wx.login mock UUID support
38. feat: Added packageExtConfig parameter for upload and preview
39. feat: Added pre-login network check, jump to FAQ documentation link
40. feat: Include current Mini-Program's plugins during upload

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-5) 2.0.5

FinClip Studio, supports VSCode plugins, offering a development experience closer to VSCode. Welcome to try it out!
Update Date: July 3, 2023

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip-Studio-2.0.5.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip-Studio-2.0.5.exe)

Update Content:

01. feat: Low-code editing window popup
02. feat: Application protocol registration
03. feat: Preview and real-device debugging associated with appid
04. feat: Clear compilation library cache when switching compilation libraries
05. feat: Adapted remote compilation library parameter passing method
06. feat: Support for creating Mini-Games
07. feat: Added some guidance hints to the interface
08. feat: Custom version i18n configuration
09. fix: Devtool executeJavaScript exception handling
10. fix: Simulator geographic coordinate state reset
11. fix: Simulator font size editing validates input content
12. fix: Login/device information edit dialog supports ESC to close
13. fix: Application details login status judgment
14. fix: Frontend did not handle error information when repeated verification code sending caused API error, directly executed countdown
15. fix: Upload failure when version description is not filled during plugin upload
16. fix: Verification code acquisition error message display
17. fix: Fixed project startup issues
18. fix: Close low-code popup window
19. fix: Adapted git plugin \_open.mergeEditor command
20. fix: Check for updates uses custom titlebar
21. fix: Close low-code popup window when project window closes

The legacy IDE remains maintained, version 1.8.48

- [Mac Download(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.48.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.48.exe)

Update Content:

1. feat: SDK initialization supports DSL parameter passing
2. fix: Optimized display when confirm text is too long
3. fix: IDE navigation bar title too long causing ellipsis to overlap with capsule
4. fix: Fixed potential error issues caused by setTheme
5. fix: Fixed Mini-Game display issues
6. fix: Download file extension setting
7. fix: Support static method calls for getting projectConfig

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_2-0-4) 2.0.4

FinClip Studio, supports VSCode plugins, offering a development experience closer to VSCode. Welcome to try it out!
Update Date: June 19, 2023

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip-Studio-2.0.4.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip-Studio-2.0.4.exe)

01. Optimized compilation log switching logic
02. Mac titlebar full-screen interaction
03. Project management double-click to open, startup page aligned with legacy version effect
04. Optimized project startup interaction
05. Fixed issues caused by leading/trailing spaces in custom URLs
06. Low-code initialization appId timing
07. Optimized upload window interaction
08. Devtool supports theme switching
09. Updated built-in plugins
10. Default device changed back to iPhone 5
11. Fixed Mini-Program plugin download issue, SDK supports serverURL
12. Fixed issue where template Mini-Program might fail to open
13. Fixed issue where custom APIs added in demo disappeared after restart
14. Added compilation configuration
15. Handled UI size issue on startup page launch
16. Automatically save unsaved content when clicking compile
17. Real-device debugging - Support for configuring external network WebSocket service
18. Support for multi-organization login
19. Updated compatibility checks

The legacy IDE remains maintained, version 1.8.47

- [Mac Download(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.47.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.47.exe)

Update Content:

1. Fixed issue where IDE compilation mode setting specific pages resulted in inconsistent back navigation count compared to real device
2. Aligned onAppRoute return value with WeChat
3. Handled errors caused by unsupported cameraFrameListenerRemove
4. Optimized interface screenshot logic upon entry
5. Request interface supports localhost requests to local services
6. Handled video seek failure before loadedmetadata
7. Fixed additional scrollbar display issue caused by UI overflow
8. Added hints for calendar and gyroscope interfaces

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-8-46) 1.8.46

Update Date: June 5, 2023

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.46.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.46.exe)

1. Fixed inability to set network request UA to empty
2. Login page password/verification code switch login function when server configuration contains uppercase letters
3. Modified default service UA rules
4. Added support for some system interfaces #RT-26448
5. Fixed syncStorage synchronization issue
6. Compilation settings support minify set to false
7. Devtool storage operations synchronize with Mini-Program storage
8. Fixed Mini-Game FileReader override issue
9. Support for worker API

Simultaneously updated the new developer tool FinClip Studio, supports VSCode plugins, offering a development experience closer to VSCode. Welcome to try it out!

- [Mac Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip-Studio-2.0.3.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip-Studio-2.0.3.exe)

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-8-45) 1.8.45

Update Date: May 22, 2023

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.45.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.45.exe)

1. Devtool deleting localstorage synchronously clears wx storage
2. Handled base library loading failure conditions
3. Optimized base library switching logic
4. Optimized network offline functionality
5. WebSocket supports headers
6. Completed tcpsocket ports, aligned with documentation
7. Adjusted service referer
8. Service ready and reload clear timeout exception timers
9. Fixed white screen issue after switching compilation library

Simultaneously updated the new developer tool FinClip Studio, supports VSCode plugins, offering a development experience closer to VSCode. Welcome to try it out!

- [Mac Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip-Studio-2.0.2-mac.zip)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip-Studio-2.0.2.exe)

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-8-44) 1.8.44

Update Date: May 8, 2023

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.44.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.44.exe)

01. Added network settings functionality
02. Fixed issue where background music would not pause after switching base library
03. API mock panel display supports finclicpconfig watch
04. Optimized permission judgment logic
05. Fixed issue where compilation library could not be set after a failed compilation library setting attempt
06. Optimized watch toggle logic, supports turning off watch
07. Updated Export App template
08. Fixed issue where back button might not display
09. Fixed npm build-related issues
10. Fixed issue where devtool did not take effect
11. Support for lazy loading related configurations

Simultaneously updated the new developer tool FinClip Studio, supports VSCode plugins, offering a development experience closer to VSCode. Welcome to try it out!

- [Mac Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip-Studio-2.0.1-mac.zip)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/finclip-studio/FinClip-Studio-2.0.1.exe)

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-8-43) 1.8.43

Update Date: April 24, 2023

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.43.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.43.exe)

01. Optimized compilation watch logic
02. Fixed npm build-related issues
03. Updated Export App template
04. Optimized Mini-Game mouse click logic
05. Fixed issue where main package did not load when jumping from independent subpackage to regular subpackage
06. Fixed issue where Mini-Game devtool did not take effect
07. Support for lazyload lazy loading process
08. Remote debugging associated with existing appid
09. Optimized compatibility check interaction logic
10. Fixed logout loop getting appid 401 issue
11. Optimized server setting logic

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-8-42) 1.8.42

Update Date: April 10, 2023

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.42.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.42.exe)

1. Updated Export APP template
2. Adjusted startup process loading configuration logic
3. Fixed Details interaction issues
4. Optimized file watch strategy
5. Optimized compilation library initialization logic

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-8-41) 1.8.41

Update Date: March 28, 2023

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.41.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.41.exe)

1. feat: Optimized cache clearing logic
2. feat: Mini-Game mode startup does not support switching back to legacy compilation library
3. fix: Stop current Mini-Program execution when switching between old and new compilation libraries
4. fix: Modified chooseFile return value name
5. fix: Fixed wx applet interaction logic issues
6. fix: Adjusted audio play judgment logic

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-8-40) 1.8.40

Update Date: March 13, 2023

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.40.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.40.exe)

1. fix: Logic handling for when the current index exceeds bounds in the preview interface
2. fix: Optimized hideHomeButton logic
3. fix: Optimized watch conditions for the new compilation library
4. fix: Fixed incorrect current number display in the preview interface
5. feat: Added support for WeChat Mini-Program management related logic
6. fix: Fixed issue where wx.sendWebviewEvent could not be received inside webview

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-8-39) 1.8.39

Update Date: February 27, 2023

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.39.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.39.exe)

01. Added support for wx.login UUID configuration generation
02. fix: Fixed navigation bar not hiding when navigationStyle is set to custom
03. fix: Fixed bindregionchange event issue
04. Added support for base library query encoding changes
05. Default switch to the new compilation library
06. Fixed occasional cache clearing failure issue
07. fix: Fixed status display issue in real-device debugging interface
08. Fixed path issue when exporting plugins
09. #RT-23785 Fixed bindregionChange event, res.detail.rotate not converted
10. fix: Fixed issue where wx.sendWebviewEvent could not be received inside webview
11. Set default values for appStore serverInfo initialization

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-8-38) 1.8.38

Update Date: February 13, 2023

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.38.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.cover38.exe)

1. feat: Added startup parameters for remote debugging
2. feat: Added compatibility check updates
3. fix: Fixed navigationStyle animation not taking effect
4. fix: Fixed potential error when creating service.html
5. fix: Fixed subpackage naming validation logic
6. fix: Use default port when port acquisition fails
7. fix: Adjusted base64ToTempFilePath parameters

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-8-37) 1.8.37

Update Date: January 19, 2023

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.37.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/ide/releasecover/FinClip-IDE-1.8.37.exe)

01. 【Optimization】Optimized routing event queue logic
02. 【Optimization】Added UUID when exporting plugins to avoid scenarios where original directories are cleared due to duplicate names
03. 【Optimization】Added sitemap configuration support
04. 【Optimization】Added minimum value for image compression interface
05. 【Optimization】Enabled ES6 to ES5 conversion by default
06. 【Optimization】Handled occasional errors in compress interface
07. 【Optimization】Optimized interface interaction logic
08. 【Optimization】Optimized request header retrieval logic
09. 【Bug】Added encodeURIComponent processing for route query
10. 【Bug】Fixed display issue when setting empty values with setStorage
11. 【Bug】Fixed map component graphic not displaying when array-type properties contain data with ",,"
12. 【Bug】Fixed potential issue where markers set via methods in lifecycle might not display icons on maps
13. 【Bug】Synchronized map regionchange event with WeChat

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-8-36) 1.8.36

Update Date: January 6, 2023

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.36.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.36.exe)

01. 【Optimization】Write compilation configuration to fide.project.config.json
02. 【Optimization】Added third-party privacy link support when exporting apps
03. 【Optimization】Added independent subpackage support for mini-games
04. 【Optimization】Added compatibility check support for frameworks like uni and Taro
05. 【Optimization】Synchronized request API cookies return type with WeChat
06. 【Bug】Fixed video cover style issue, added support for object-fit="fill" attribute
07. 【Bug】Fixed potential compilation initialization freeze issue under specific conditions
08. 【Bug】Fixed new compilation library remote debugging error
09. 【Bug】Fixed local path not displaying issue with setTabBarItem
10. 【Bug】Fixed potential project plugin loading failure
11. QR code user prompts, webpage connection replacements
12. 【Bug】Fixed potential display anomaly with files having same names
13. 【Bug】Added check for current page being homepage when returning to homepage
14. 【Bug】Fixed theme color setting related issues
15. 【Bug】Fixed specific issues with setStorage and setStorageSync APIs

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-8-35) 1.8.35

Update Date: December 26, 2022

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.35.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.35.exe)

1. 【Optimization】Added logo state switching when exporting apps
2. 【Optimization】Increased Mini-Program quantity limit when exporting apps
3. 【Optimization】Optimized switching logic between old and new compilation libraries
4. 【Bug】Fixed compilation theme changing issue in Dark Mode
5. 【Bug】Fixed compilation error where pages added to subpackages were automatically added to main package in app.json, causing configuration item not found
6. 【Bug】Fixed display showing default color when tabbar's selectedColor in app.json is set to an unsupported value

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-8-34) 1.8.34

Update Date: December 9, 2022

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.34.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.34.exe)

01. 【Optimization】Optimized mini-game loading process
02. 【Optimization】Various optimizations for app export functionality
03. 【Feature】Added support for pageOrientation property configuration
04. 【Feature】Added support for new compilation library parameter configuration
05. 【Feature】Added buffer data transfer support for request interface
06. 【Feature】Added real-time version switching support for new compilation library
07. 【Bug】Fixed capsule button not displaying under specific conditions
08. 【Bug】Fixed scrollbar not displaying under specific conditions
09. 【Bug】Fixed auto-compilation failure under specific conditions
10. 【Bug】Fixed webviewError event triggering
11. 【Bug】Fixed incorrect focus issue in mini-games
12. 【Bug】Fixed theme being reset after switching

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-8-33) 1.8.33

Update Date: November 28, 2022

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.33.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.33.exe)

01. 【Feature】Added new compilation library code obfuscation configuration support
02. 【Feature】Adapted remote debugging for new compilation library
03. 【Feature】Write pluginID to fide.project.config.json when creating plugin projects
04. 【Feature】Added plugin upload support
05. 【Feature】Added CMS banner to Developer Tools #RT-21605
06. 【Feature】Added cover-view insertScrollView callback
07. 【Feature】Added webview mode mini-game ordinary subpackage support
08. 【Optimization】Adjusted subpackage loading logic
09. 【Optimization】Adjusted preview QR code generation logic
10. 【Optimization】Webview H5 gets ontouchstart as true, ontouchend as false
11. 【Optimization】Aligned interface styles and behaviors with mobile端
12. 【Optimization】Added noConflict parameter support for toast loading interface
13. 【Optimization】Optimized Mini-Program to App conversion functionality
14. 【Optimization】Optimized QR code baseurl setting logic
15. 【Optimization】Optimized upload logic, allowing upload without app.zip
16. 【Bug】Added objectFit support for video
17. 【Bug】Fixed Mini-Program white screen issue caused by multiple service instances

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-8-32) 1.8.32

Update Date: November 12, 2022

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.32.dmg)
- \[Windows Download\](https://www-cdn.finclip.com cover/ide/release/FinClip-IDE-1.8.32.exe)

01. 【Feature】New compilation library upgrade
02. 【Feature】Added baseurl configuration modification support for qrcode
03. 【Feature】Added plugin compilation support for new compilation library
04. 【Optimization】Updated mini-game loading logic
05. 【Optimization】Added opacity field to some map color parameters
06. 【Optimization】Adjusted download file extension retrieval rules
07. 【Optimization】Aligned setNavigationBarColor behavior in navigation bar onload lifecycle with WeChat
08. 【Optimization】Updated project creation example template demo
09. 【Optimization】Added network status prompts for upload errors
10. 【Optimization】Display network status in titlebar
11. 【Optimization】Optimized subpackage resource loading logic
12. 【Bug】Fixed upload icon anomaly in Android advanced mode
13. 【Bug】Fixed saveVideoToPhotosAlbum API error message

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-8-31) 1.8.31

Update Date: October 31, 2022

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.31.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.31.exe)

01. 【Feature】Added new compilation library beta test switch
02. 【Optimization】Optimized finfile protocol
03. 【Optimization】Optimized navigation bar styles
    cover4. 【Optimization】Optimized upload logic
04. 【Optimization】Optimized network return values
05. 【Optimization】Icon replacements
06. 【Optimization】Synchronized custom API return value logic
07. 【Bug】Fixed tabbar display error under specific conditions
08. 【Bug】Fixed routing issues under specific conditions
09. 【Bug】Fixed mini-game audio playback path issue
10. 【Bug】Fixed audio onStop event

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-8-30) 1.8.30

Update Date: October 17, 2022

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.30.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.30.exe)

1. 【Feature】Added breakpoint debugging support
2. 【Optimization】Stop current compilation step when closing cloud compilation window
3. 【Optimization】Adjusted getSystemInfo return values
4. 【Bug】Fixed navigationBarTextStyle default color
5. 【Bug】Modified appid pagesize retrieval
6. 【Bug】Fixed tabbar being covered under specific conditions

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-8-29) 1.8.29

Update Date: September 23, 2022

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.29.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.29.exe)

01. 【Bug】Adjusted audio interface callback order
02. 【Bug】Reset hideHomeButton state after routing events
03. 【Optimization】Modified tabbar default selected color
04. 【Bug】Fixed potential style disorder under specific conditions
05. 【Bug】Fixed UDPSocket.onListening triggering twice after creating UDP instance and binding port
06. 【Bug】Fixed simulator circle mode not releasing when switching mouse to simulator during compilation
07. 【Bug】Optimized download file to specified local behavior
08. 【Bug】Added timeout parameter support for network requests
09. 【Bug】Fixed potential crash when closing alert popup
10. 【Bug】Fixed compilation failure caused by mouse side button return
11. 【Bug】Optimized upload URL validation logic
12. 【Bug】Fixed UploadTask.onProgressUpdate return parameters
13. 【Bug】Fixed web-view event forwarding missing webviewId
14. 【Optimization】Iteratively optimized APP export
15. 【Feature】Added payment template
16. 【Optimization】Optimized stat and statSync behavior
17. 【Bug】Fixed inspect mode not reverting
18. 【Bug】Fixed focus switch issue when switching directly from webview to simulator
19. 【Feature】Added default mini-game template

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-8-28) 1.8.28

Update Date: September 9, 2022

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.28.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.28.exe)

01. 【Feature】Added BackgroundColor property support for page-meta
02. 【Requirement】Modified initial window size
03. 【Optimization】Added support for opening webpages from devtool console
04. 【Optimization】Destroy main process SDK when exiting app to resolve potential leftover processes
05. 【Bug】Fixed ft.getMenuButtonBoundingClientRect return values
06. 【Bug】Aligned stat, fstatSync interface return data with WeChat
07. 【Feature】Added partial open interface implementation support for SDK
08. 【Bug】Fixed CDN image resource loading failure caused by view layer refer
09. 【Optimization】Added click recovery when mouse ball mode doesn't revert
10. 【Bug】Fixed npm build related issues
11. 【Requirement】Added FinChatConf.js support for custom API auto-import
12. 【Requirement】Refactored plugin loading logic, added private environment plugin loading support
13. 【Optimization】Added Link opening support for compatibility checks
14. 【Optimization】Changed compilation afterStudio hook to subprocess form to reduce lag
15. 【Requirement】Synchronized websocket behavior with WeChat
16. 【Requirement】Optimized APP export behavior

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-8-27) 1.8.27

Update Date: August 26, 2022

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.27.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.27.exe)

1. 【Feature】Added enableAlertBeforeUnload related API support
2. 【Feature】Added mini-game trial run support (alpha version only, features under development)
3. 【Feature】Added navigation bar customV2 configuration support
4. 【Optimization】Updated APP export functionality
5. 【Optimization】Synchronized request refer behavior with WeChat
6. 【Optimization】Fixed cameralFrame interface high CPU usage
7. 【Bug】Fixed various map-related interface bugs

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-8-26) 1.8.26

Update Date: August 13, 2022

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.26.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.26.exe)

1. 【Feature】Added cloud compilation support, online APP generation and export
2. 【Bug】Fixed mouse pointer not reverting after route switch when inspect mode not exited
3. 【Bug】Fixed potential remote debugging failure
4. 【Bug】Fixed theme失效 issue when switching pages
5. 【Bug】Aligned webview routing behavior with normal routing
6. 【Bug】Added openwindow opening support for webview
7. 【Bug】Fixed compilation log output format for plugin compilation

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-8-25) 1.8.25

Update Date: August 1, 2022

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.25.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.25.exe)

1. 【Optimization】Routing event queue mechanism
2. 【Optimization】Compilation process state machine, optimized compilation process management logic
3. 【Optimization】Optimized multiple interface interaction logics
4. 【Feature】Added getAccountInfoSync API support
5. 【Bug】Added path permission verification for stat/unzip interfaces
6. 【Bug】Fixed audio stop interface behavior
7. 【Bug】Fixed theme失效 issue when switching pages
8. 【Bug】Aligned getSystemInfoSync behavior with WeChat
9. 【Bug】Fixed navigationStyle configuration position

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-8-24) 1.8.24

Update Date: July 15, 2022

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.24.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.24.exe)

01. 【Feature】Added compilation mode parameter passing support for preview
02. 【Feature���Added hideHomeButton API support
03. 【Feature】Window name changes according to title
04. 【Optimization】Moved base library switching network requests to rendering process
05. 【Optimization】Fixed potential errors when Mini-Program restarts & clicking homepage return before webview page loads
06. 【Optimization】Optimized compilation process destruction logic
07. 【Optimization】Handled an error in rendering process when opening Mini-Program
08. 【Optimization】Added crashDumps application crash log collection
09. 【Bug】Fixed inability to switch when multiple tabs point to same page
10. 【Bug】Fixed download file path error
11. 【Bug】Added version field to getSystemInfo
12. 【Bug】fix: #RT-17994 Aligned uploadFile return value behavior with WeChat
13. 【Bug】Fixed potential leftover background processes after upgrade
14. 【Bug】Fixed compilation errors under specific conditions

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-8-23) 1.8.23

Update Date: July 4, 2022

Download Links:

- [Mac Download(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.23.dmg)
- [Windows Download(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.23.exe)

1. 【Feature】Launched remote debugging beta version functionality
2. 【Optimization】Generate file extensions based on header/url matching for downloads
3. 【Optimization】Added guidance to some interface returns
4. 【Optimization】Adapted new version base library
5. 【Optimization】Added direct import support for plugins created by WeChat by default
6. 【BUG】Handled video issues
7. 【BUG】Optimized processing logic for连续 calling dowloadFile interface
8. 【BUG】Handled appid retrieval failure logic
9. 【BUG】Handled m3u8 format video playback issues

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-8-20) 1.8.20

Release Date: June 17, 2022

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.20.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.20.exe)

01. 【Optimization】Optimized server selection logic
02. 【Optimization】Optimized Subpackage loading logic
03. 【Optimization】Optimized support for some page configurations
04. 【Feature】Added authorization page creation template
05. 【BUG】Fixed file system related BUGs
06. 【BUG】Fixed issue where Tab Bar was not displayed when using switchTab
07. 【BUG】Fixed multi-map instance loading issue
08. 【BUG】Fixed specific fields in navigation-bar
09. 【bug】Optimized playVoice logic
10. 【bug】Fixed enablePullDownRefresh issue

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-8-19) 1.8.19

Release Date: June 6, 2022

Download Links:

- \[Download for Mac\](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1 extrem.8.19.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.19.exe)

1. 【Feature】Support for displaying set-cookie field in request
2. 【Feature】Updated QR code logic
3. 【Feature】saveImageToPhotosAlbum now supports local paths
4. 【BUG】Fixed issue where opening Subpackage pages might fail
5. 【BUG】Optimized scenario where multiple tabs point to the same page
6. 【BUG】#RT-15910 Optimized web-view page title display logic
7. 【BUG】Fixed specific fields in navigation-bar

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-8-17) 1.8.17

Release Date: May 20, 2022

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.17.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.17.exe)

1. 【Feature】Project creation now supports plugin mode
2. 【Feature】Compatibility check style optimization / content update
3. 【Feature】Devtool supports inspect DOM elements
4. 【Feature】Editor supports ftss reminders
5. 【BUG】Added usr validation for fileAPI rmdir
6. 【BUG】Fixed path returned by readdir
7. 【BUG】#RT-15910 Optimized web-view page title display logic
8. 【BUG】Fixed webview pageonload
9. 【BUG】Fixed routing issues under specific circumstances

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-8-16) 1.8.16

Release Date: April 29, 2022

Download Links:

- \[Download for Mac\](https://www-cdn.finclip.com/ide/release FinClip-IDE-1.8.16.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.16.exe)

1. 【Optimization】Optimized project list storage logic
2. 【Optimization】Added support for usr and store paths in readZipEntry
3. 【Optimization】Optimized local audio paths for audio
4. 【bug】Fixed issue where route back button displayed incorrectly under specific circumstances
5. 【bug】Fixed webview redirect jump issue
6. 【bug】Fixed issue where rendering might fail after route relaunch
7. 【bug】Fixed audio playback exception caused by caching

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-8-15) 1.8.15

Release Date: April 18, 2022

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.15.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.15.exe)

1. 【Optimization】Optimized project startup interaction flow
2. 【Optimization】Export Code Package now includes both Main Package and Subpackages
3. 【bug】Fixed jssdk related issues
4. 【bug】Fixed compilation failure issue under specific circumstances
5. 【bug】Compilation mode now supports path in Subpackages
6. 【bug】Fixed startup failure issue under specific circumstances
7. 【bug】Fixed styling issues caused by Windows scaling ratio
8. 【bug】navigationStyle now supports more properties
9. 【Other】Compatibility check updated

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-8-14) 1.8.14

Release Date: April 2, 2022

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.14.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.14.exe)

1. 【Feature】Custom API now supports synchronous calls
2. 【Feature】mediastream supports more APIs
3. 【Optimization】Compatibility check updated
4. 【Optimization】Optimized some interface interactions
5. 【Optimization】Improved pulldownrefresh effect
6. 【Optimization】Added devtools finclipide field to useragent by default
7. 【bug】Fixed issue where Windows menu might not open
8. 【bug】navigationStyle now supports more properties
9. 【bug】Fixed routing issues under specific circumstances

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-8-13) 1.8.13

Release Date: March 21, 2022

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.13.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.13.exe)

1. 【Feature】navigationStyle now supports hide field
2. 【Optimization】Optimized some interface styles
3. 【Optimization】Compilation watch now ignores .git and .DS\_Store related files
4. 【bug】Fixed routing logic
5. 【bug】Fixed issue where require might fail
6. 【bug】Compatibility fix for issues caused by XHR module references

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-8-12) 1.8.12

Release Date: March 4, 2022

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.12.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.12.exe)

1. 【Feature】Menu bar upgraded, supports keyboard shortcuts
2. 【Feature】Added shake, scan, location, and background functions
3. 【Feature】Supports TCP/IP related interfaces
4. 【Feature】Supports setting request useragent
5. 【Optimization】Optimized compilation loading error logic
6. 【Optimization】Optimized styles in Dark Mode
7. 【bug】Fixed process hang issue caused by calling non-existent sync api

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-8-11) 1.8.11

Release Date: February 18, 2022

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.11.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.11.exe)

1. 【Optimization】Optimized and upgraded multiple interface interactions
2. 【Feature】Supports template selection during creation
3. 【Feature】Details page supports project settings, displaying more information
4. 【Feature】map supports marker callout, title, and translate functions
5. 【Feature】recorderManager supports frameSize

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-8-10) 1.8.10

Release Date: January 28, 2022

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.10.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.10.exe)

1. 【Optimization】file api now supports position field
2. 【Optimization】modal supports gestures
3. 【bug】Optimized display when navigationBar title is too long
4. 【bug】Fixed issue where unzip might fail
5. 【bug】disableAlertBeforeUnload no longer directly closes the dialog box
6. 【bug】Fixed potential position issue with webrtc video
7. 【bug】Fixed issue caused by backgroundAudioManager startTime

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-8-9) 1.8.9

Release Date: January 14, 2022

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.9.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.9.exe)

01. 【bug】Fixed attribute override issue caused by theme calling updatePageConfig
02. 【Feature】Supports media recorder recording function
03. 【Feature】Supports camera frame callback
04. 【Feature】readFile supports position and length
05. 【Feature】socket send supports arraybuffer
06. 【bug】Fixed several file-related issues
07. 【bug】Fixed Mini-Program and log loading white screen issue caused by sync call timing being too early
08. 【bug】Fixed pulldownrefresh failure issue
09. 【Optimization】Disabled legacy compilation switch
10. 【bug】Fixed tabbar display issue
11. 【bug】Fixed video styling issue
12. 【bug】Fixed webview jump issue

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-8-8) 1.8.8

Release Date: December 31, 2021

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.8.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.8.exe)

1. 【Feature】Supports choosePoi interface
2. 【Optimization】Optimized readZipEntry mechanism for large files
3. 【bug】Fixed request parameter issue
4. 【bug】Fixed issue where onlaunch event was not triggered after reLaunch
5. 【bug】Fixed Offline Package encrypted export failure issue

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-8-7) 1.8.7

Release Date: December 17, 2021

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.7.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/ide/release/FinClip-IDE-1.8.7.exe)

1. 【Feature】Added Storage panel
2. 【Feature】Editor supports quick creation of pages and Components
3. 【Feature】Editor supports opening files in folder
4. 【Feature】Compatibility check tool UI interface
5. 【Optimization】Optimized compilation loading speed
6. 【bug】Fixed app launch option issue
7. 【bug】Fixed tabbar image loading issue

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-8-6) 1.8.6

Release Date: December 9, 2021

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/ide/FinClip-IDE-1.8.6.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/ide/FinClip-IDE-1.8.6.exe)

1. 【Other】Installation package signing notarization

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-8-5) 1.8.5

Release Date: December 3, 2021

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/ide/FinClip-IDE-1.8.5.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/ide/FinClip-IDE-1.8.5.exe)

1. 【Feature】Supports file search
2. 【Feature】Project startup page now includes avatar and directory
3. 【Feature】Supports setting themes
4. 【Optimization】Optimized page loading speed
5. 【Optimization】Reduced installation package size
6. 【Optimization】Optimized several interface interaction logics

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-8-4) 1.8.4

Release Date: November 22, 2021

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/ide/FinClip-IDE-1.8.4.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/ide/FinClip-IDE-1.8.4.exe)

1. 【Feature】Integrated vscode editor
2. 【Feature】Supports request api for webview
3. 【Optimization】Fixed issue with excessive preload opening
4. 【bug】Fixed issue where newly installed IDE devtool loaded abnormally
5. 【bug】Fixed wx.request API issue where parameter dataType was invalid (Base Library)
6. 【bug】Fixed issue where wx.request url code 400 did not trigger success
7. 【bug】Fixed issue where webview publish was not sent to the service layer

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-8%E6%A5%B53) 1.8極3

Release Date: November 9, 2021

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/ide/FinClip-IDE-1.8.3.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/ide/FinClip-IDE-1.8.3.exe)

1. 【Feature】Upgraded electron version
2. 【Feature】Added return to homepage state for non-homepage non-routing states
3. 【Feature】Supports Offline Package export
4. 【Optimization】Optimized preview QR code logic
5. 【Optimization】Optimized draggable area interaction
6. 【Optimization】download and upload now support setting request cookies
7. 【bug】Fixed relaunch routing issue
8. 【bug】Compatible with innerAudioContext path writing style
9. 【bug】Fixed issue where webview bindload and bindmessage did not trigger

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-8-2) 1.8.2

Release Date: October 22, 2021

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/ide/FinClip-IDE-1.8.2.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/ide/FinClip-IDE-1.8.2.exe)

1. 【Feature】map Component support
2. 【Feature】webrtc support
3. 【Optimization】Updated global theme styles
4. 【Optimization】Optimized Mini-Program opening speed
5. 【Optimization】Removed refer from request header
6. 【bug】Fixed request json parsing issue
7. 【bug】Fixed webview routing jump issue
8. 【bug】Fixed routing jump relaunch issue
9. 【bug】Fixed Subpackage loading failure issue

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-8-1) 1.8.1

Release Date: October 11, 2021

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/ide/FinClip-IDE-1.8.1.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/ide/FinClip-IDE-1.8.1.exe)

1. 【bug】Fixed Mini-Program loading issue

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-8-0) 1.8.0

Release Date: September 28, 2021

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/ide/FinClip-IDE-1.8.0.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/ide/FinClip-IDE-1.8.0.exe)

1. 【Feature】Uses new compilation library by default, supports Subpackage compilation
2. 【Feature】mockapi supports import/export
3. 【bug】Fixed wx.navigateBack not taking effect
4. 【bug】Adjusted video sendDanmu behavior
5. 【bug】Fixed Mac menu issue
6. 【bug】Synchronized getMenuButtonBoundingClientRect behavior with WeChat
7. 【bug】Added parameter validation for fileApi

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-7-12) 1.7.12

Release Date: September 13, 2021

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/ide/FinClip-IDE-1.7.12.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/ide/FinClip-IDE-1.7.12.exe)
Release Notes:

01. **\[SDK\]** Added support for the `page_container` Component
02. **\[Feature\]** Added support for Plugin loading
03. **\[Optimization\]** Added code hinting functionality to the editor
04. **\[Optimization\]** Updated documentation reference links
05. **\[Optimization\]** Editor now monitors external file changes
06. **\[Optimization\]** Added middle mouse button click to close tabs
07. **\[Optimization\]** Added notch screen styles for iPhone X series
08. **\[Optimization\]** Added a "Check for Updates" entry on the home page
09. **\[Optimization\]** Added support for displaying WebView DevTools
10. **\[Optimization\]** Added CAPTCHA validation logic to the login process
11. **\[Optimization\]** Improved compilation log interaction
12. **\[Bug Fix\]** Fixed issue where `video src` path without a file extension would cause an "unsupported media" error
13. **\[Bug Fix\]**`inneraudio` now supports relative paths for Mini-Program internal files
14. **\[Bug Fix\]** Improved compatibility for `request` request parameters

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-7-11) 1.7.11

Release Date: August 27, 2021

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/ide/FinClip-IDE-1.7.11.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/ide/FinClip-IDE-1.7.11.exe)
Release Notes:

1. **\[SDK\]** Added support for File System API
2. **\[SDK\]** Added support for the `video` Component
3. **\[Feature\]** Improved permission mechanism for login, upload, and preview functionalities
4. **\[Feature\]** Added display of the current Mini-Program page path
5. **\[Optimization\]** Preview functionality optimized
6. **\[Bug Fix\]** Improved error tolerance mechanism for Mini-Program loading logic
7. **\[Bug Fix\]** Optimized Mini-Program loading logic for Subpackages

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-7-10) 1.7.10

Release Date: August 13, 2021

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/ide/FinClip-IDE-1.7.10.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/ide/FinClip-IDE-1.7.10.exe)
Release Notes:

1. **\[API\]** Enhanced WebView related APIs
2. **\[API\]** Added File Manager
3. **\[Optimization\]** Optimized Base Library loading logic and improved related prompts
4. **\[Bug Fix\]** Added `query` parameter to `onServiceReadyDone`
5. **\[Bug Fix\]** Fixed field issues in `getSystemInfo`

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-7-11-2) 1.7.11

Release Date: August 27, 2021

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/ide/FinClip-IDE-1.7.11.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/ide/FinClip-IDE-1.711.exe)

**\[API\]** Added support for File System API
**\[API\]** Added support for the `video` Component
**\[Basic Feature\]** Improved permission mechanism for login, upload, and preview functionalities
**\[Basic Feature\]** Added display of the current Mini-Program page path
**\[Optimization\]** Preview functionality optimized
**\[Bug Fix\]** Improved error tolerance mechanism for Mini-Program loading logic
**\[Bug Fix\]** Optimized Mini-Program loading logic for Subpackages

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_17-10) 17.10

Release Date: August 15, 2021

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/ide/FinClip-IDE-1.7.10.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/ide/FinClip-IDE-1.7.10.exe)

**\[API\]** Enhanced WebView related APIs
**\[API\]** Added File Manager
**\[Optimization\]** Optimized Base Library loading logic and improved related prompts
**\[Bug Fix\]** Added `query` parameter to `onServiceReadyDone` **\[Bug Fix\]** Fixed field issues in `getSystemInfo`

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-7-9) 1.7.9

Release Date: July 30, 2021

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/ide/FinClip-IDE-1.7.9.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/ide/FinClip-IDE-1.7.9.exe)

Release Notes:

1. **\[Basic Feature\]** Added experimental Subpackage functionality
2. **\[Basic Feature\]** Added support for UDPSocket functionality
3. **\[Basic Feature\]**`request header` now supports setting cookies
4. **\[Basic Feature\]** Optimized Mini-Program simulation functionality
5. **\[Bug Fix\]** Fixed high CPU usage caused by `watch file`
6. **\[Bug Fix\]** Optimized popup interaction logic

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-7-8) 1.7.8

Release Date: July 16, 2021

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/ide/FinClip-IDE-1.7.8.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/ide/FinClip-IDE-1.7.8.exe)

Release Notes:

1. **\[Basic Feature\]** Added support for the `camera` Component
2. **\[Basic Feature\]** Added support for WebSocket interface
3. **\[Bug Fix\]** Fixed issue where using REM units in H5 caused oversized styles
4. **\[Bug Fix\]** Fixed `getMenuButtonBoundingClientRect`, resolving Taro nav-bar positioning errors
5. **\[Bug Fix\]** Fixed issue where simulated cursor could not be switched
6. **\[Bug Fix\]** Fixed issues with Mini-Program Page Route navigation

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-7-7) 1.7.7

Release Date: July 1, 2021

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/ide/FinClip-IDE-1.7.7.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/ide/FinClip-IDE-1.7.7.exe)

Release Notes:

1. **\[Basic Feature\]** Added support for `cover-image` & `cover-view`
2. **\[Basic Feature\]** Added support for `audio` related APIs
3. **\[Basic Feature\]** Added default return value for the `authorize` interface
4. **\[Optimization\]** Adjusted Mini-Program loading mechanism to optimize loading speed
5. **\[Bug Fix\]** Fixed network request parameter issues
6. **\[Bug Fix\]** Fixed focus issue with simulated status window
7. **\[Bug Fix\]** Fixed missing field issue in the `getSystemInfo` interface
8. **\[Bug Fix\]** Fixed `devicePixelRatio` value not matching the set DPR

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-7-6-alpha) 1.7.6-alpha

Release Date: June 18, 2021

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/ide/FinClip-IDE-1.7.6-alpha.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.comide/FinClip-IDE-1.7.6-alpha.exe)

Release Notes:

1. **\[Basic Feature\]** Added Network Debugging Panel
2. **\[Optimization\]** Refactored network request module, added support for upload progress
3. **\[Optimization\]** Reworked simulation mechanism
4. **\[Bug Fix\]** Fixed white screen issue during Mini-Program loading
5. **\[Optimization\]** Optimized memory usage, fixed several memory leak issues
6. **\[Bug Fix\]** Projects are now distinguished by ID, fixing issues with duplicate project names and special characters

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-7-5-alpha) 1.7.5-alpha

Release Date: June 8, 2021

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/ide/FinClip-IDE-1.7.5-alpha.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/ide/FinClip-IDE-1.7.5-alpha.exe)

Release Notes:

01. **\[Basic Feature\]** Added Build npm functionality
02. **\[Basic Feature\]** Optimized underlying inter-process communication mechanism
03. **\[API\]**`showToast` now supports image configuration
04. **\[API\]** Enhanced `onShareAppMessage` Forward / Share API
05. **\[Technical Optimization\]** Added JWT token auto-refresh mechanism
06. **\[Technical Optimization\]** Migrated compilation to subprocesses
07. **\[Technical Optimization\]** Refactored automated testing image comparison functionality
08. **\[Bug Fix\]** Fixed issues with IDE custom headers and Tab Bar
09. **\[Bug Fix\]** Fixed compilation adaptation issues for upload functionality
10. **\[Bug Fix\]** Optimized checks for `navigate` and other routing methods, added error handling

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-7-4-alpha) 1.7.4-alpha

Release Date: May 24, 2021

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/ide/FinClip-IDE-1.7.4-alpha.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/ide/FinClip-IDE-1.7.4-alpha.exe)

Release Notes:

1. **\[Optimization\]** Modified Developer Tools font size and color scheme
2. **\[Optimization\]** Added ability to view full User-Agent (UA) content
3. **\[Optimization\]** Added entry point to clear local data and cache

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-7-3-alpha) 1.7.3-alpha

Release Date: May 17, 2021

Download Links:

- [Download for Mac(opens new window)](https://www-cdn.finclip.com/ide/FinClip-IDE-1.7.3-alpha.dmg)
- [Download for Windows(opens new window)](https://www-cdn.finclip.com/ide/FinClip-IDE-1.7.3-alpha.exe)

Release Notes:

1. **\[Optimization\]** Modularized frontend components
2. **\[Optimization\]** Updated the Developer Tools operation guide link to the [Documentation Center](https://super-apps.ai/mop/document/en/develop/developer/develop/developer/fide-guide.html)

## [\#](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html\#_1-5-3-alpha) 1.5.3-alpha

Release Date: April 12, 2021

Release Notes:

1. **\[Optimization\]** Routine optimizations and updates
2. **\[Basic Feature\]** Aligned functionalities with the SDK
3. **\[Basic Feature\]** Improved log reporting and collection solution

[Previous：FinClip Studio AI Assistant](https://super-apps.ai/mop/document/en/develop/developer/ai-assistant.html)[Next：Blender Builder Changelog](https://super-apps.ai/mop/document/en/develop/developer/blender-builder.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)