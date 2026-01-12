<!--
Source URL: https://super-apps.ai/mop/document/en/develop/component/basic.html
Extracted: 2026-01-12T23:13:43.958Z (January 12, 2026)
Title: Basic Content | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Component Overview](https://super-apps.ai/mop/document/en/develop/component/overview.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
View Container](https://super-apps.ai/mop/document/en/develop/component/view.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Basic Content](https://super-apps.ai/mop/document/en/develop/component/basic.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Form Components](https://super-apps.ai/mop/document/en/develop/component/form.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Navigation](https://super-apps.ai/mop/document/en/develop/component/navigation.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Media Components](https://super-apps.ai/mop/document/en/develop/component/media.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Map Components](https://super-apps.ai/mop/document/en/develop/component/map.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Canvas](https://super-apps.ai/mop/document/en/develop/component/canvas.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Open Abilities](https://super-apps.ai/mop/document/en/develop/component/basic.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Native Component Intro](https://super-apps.ai/mop/document/en/develop/component/original.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Navigation Bar](https://super-apps.ai/mop/document/en/develop/component/navigation-bar.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Page Meta](https://super-apps.ai/mop/document/en/develop/component/meta.html)

# [\#](https://super-apps.ai/mop/document/en/develop/component/basic.html\#basic-content) Basic Content

## [\#](https://super-apps.ai/mop/document/en/develop/component/basic.html\#basic-content-description) Basic Content Description

| Component | Description | Minimum Version |
| --- | --- | --- |
| icon | Icon | 1.0.0 |
| text | Text | 1.0.0 |
| progress | Progress Bar | 1.0.0 |
| rich-text | Rich Text | 1.0.0 |

## [\#](https://super-apps.ai/mop/document/en/develop/component/basic.html\#icon) icon

| Property | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| type | string |  | Yes | The type of the icon, valid values: success, success\_no\_circle, info, warn, waiting, cancel, download, search, clear | 1.0.0 |
| size | number/string | 23 | No | The size of the icon | 1.0.0 |
| color | string |  | No | The color of the icon, same as CSS color | 1.0.0 |

## [\#](https://super-apps.ai/mop/document/en/develop/component/basic.html\#text) text

| Property | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| user-select | boolean | false | No | Whether the text is selectable, this property will make the text node display as inline-block | 3.6.3 |
| enable-native-proxy | boolean | false | No | Effective when user-select is true, after enabling, selecting text will trigger native event proxy | 3.6.3 |
| space | string |  | No | Display continuous spaces | 2.11.4 |
| decode | boolean | false | No | Whether to decode | 2.11.4 |

### [\#](https://super-apps.ai/mop/document/en/develop/component/basic.html\#valid-values-for-space) Valid values for space

| Value | Description | Minimum Version |
| --- | --- | --- |
| ensp | Half the size of a Chinese character space |  |
| emsp | The size of a Chinese character space |  |
| nbsp | Space size based on font settings |  |

## [\#](https://super-apps.ai/mop/document/en/develop/component/basic.html\#progress) progress

| Property | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| percent | number |  | No | Percentage 0~100 | 1.0.0 |
| show-info | boolean | false | No | Show percentage on the right side of the progress bar | 1.0.0 |
| stroke-width | number/string | 6 | No | The width of the progress bar line | 1.0.0 |
| color | string | #09BB07 | No | Progress bar color (please use activeColor) | 1.0.0 |
| active | boolean | false | No | Animation of the progress bar from left to right | 1.0.0 |
| border-radius | number/string | 0 | No | Corner radius size | 2.11.4 |
| font-size | number/string | 16 | No | Font size of the percentage on the right | 2.11.4 |
| activeColor | string | #09BB07 | No | Color of the selected progress bar | 2.11.4 |
| backgroundColor | string | #EBEBEB | No | Color of the unselected progress bar | 2.11.4 |
| active-mode | string | backwards | No | backwards: Animation plays from the start; forwards: Animation continues from the last end point | 2.11.4 |
| duration | number | 30 | No | Milliseconds required for progress to increase by 1% | 2.11.4 |
| bindactiveend | eventhandle |  | No | Animation completion event | 2.11.4 |

## [\#](https://super-apps.ai/mop/document/en/develop/component/basic.html\#rich-text) rich-text

| Property | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| nodes | array/string | \[\] | No | Node list / HTML String | 1.0.0 |
| space | string |  | No | Display continuous spaces | 2.11.4 |

[Previous：View Container](https://super-apps.ai/mop/document/en/develop/component/view.html)[Next：Form Components](https://super-apps.ai/mop/document/en/develop/component/form.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)