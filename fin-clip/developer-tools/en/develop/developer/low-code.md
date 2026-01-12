<!--
Source URL: https://super-apps.ai/mop/document/en/develop/developer/low-code.html
Extracted: 2026-01-12T23:15:39.835Z (January 12, 2026)
Title: Low-Code Development Guide | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
FinClip Studio](https://super-apps.ai/mop/document/en/develop/developer/low-code.html) [![](https://super-apps.ai/mop/document/images/arrow_open.svg)\\
Low-code Development](https://super-apps.ai/mop/document/en/develop/developer/low-code.html)

- [FinClip Studio Low-code Guide](https://super-apps.ai/mop/document/en/develop/developer/low-code.html)
- [Component List](https://super-apps.ai/mop/document/en/develop/lowcode/component-details.html)
- [Action & Event Binding](https://super-apps.ai/mop/document/en/develop/lowcode/action-event.html)
- [JS Usage](https://super-apps.ai/mop/document/en/develop/lowcode/js.html)
- [Troubleshooting](https://super-apps.ai/mop/document/en/develop/lowcode/error-check.html)

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
FinClip App](https://super-apps.ai/mop/document/en/develop/developer/low-code.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Generate App from Mini Program](https://super-apps.ai/mop/document/en/develop/developer/low-code.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Generate HarmonyOS App from Mini Program](https://super-apps.ai/mop/document/en/develop/developer/low-code.html)

# [\#](https://super-apps.ai/mop/document/en/develop/developer/low-code.html\#low-code-development-guide) Low-Code Development Guide

Unlike common low-code development tools on the market, the low-code tool provided by FinClip Studio is more oriented towards developers, aiming to accelerate the development process (avoiding repetitive, low-value ticket cycle development), thereby making the development of related projects and applications simpler.

## [\#](https://super-apps.ai/mop/document/en/develop/developer/low-code.html\#_1-feature-introduction) 1\. Feature Introduction

The low-code development capability features very intuitive and flexible visual modeling tools, such as lists, action bars, forms, carousels, etc., which can meet most business needs, thereby reducing developers' workload and avoiding a large amount of coding and testing work. Developers can configure various components as needed, making it more convenient to create custom forms, reports, and Mini-Program applications.

- Low-code for business personnel: Drag-and-drop component assembly (components cannot support the implementation of specific personalized functions)
- Traditional development process: Database setup → Backend code → Frontend code → Deployment and build
- On FinClip Studio: Database setup → Visual interface construction (Personalized requirements can add code within components)

## [\#](https://super-apps.ai/mop/document/en/develop/developer/low-code.html\#_2-usage-instructions) 2\. Usage Instructions

After opening FinClip Studio, select the project type as Mini-Program, check the low-code option, click create, and you can draw the Mini-Program by dragging and dropping components.

![](https://super-apps.ai/mop/document/assets/img/create1.bf8011f3.jpg)

**Overall Introduction**

- The left side is the operation panel, used for drawing pages and components, as well as related configuration of components.

TIP

If your computer screen is small, you can adjust the interface size in the left operation panel -> by using command +/-

- The right side is the simulator. Clicking publish will automatically open the simulator and compile the content drawn on the left into a Mini-Program displayed on the simulator.

![](https://super-apps.ai/mop/document/assets/img/all1.cdf4de6d.png)

### [\#](https://super-apps.ai/mop/document/en/develop/developer/low-code.html\#_2-1-menu-bar) 2.1 Menu Bar

The menu bar in the upper left corner can control the expansion and collapse of the operation sidebar, and switch between edit and preview modes.

![](https://super-apps.ai/mop/document/assets/img/create2.2b5407ff.png)

### [\#](https://super-apps.ai/mop/document/en/develop/developer/low-code.html\#_2-2-sidebar-operation-panel) 2.2 Sidebar Operation Panel

- Pages: Perform operations related to pages, including adding new pages and configuring or modifying related content.

- Resource Management: Manage the component resources of the currently selected page. You can add or delete corresponding components. Click on a component to configure or modify it.

- Add Component: Add components to the current page, and configure or modify them. For specific component operations and configurations, please refer to the link.

- JS Object: Provides a static data source for components; used to write our JS code, configured and called in the configuration area on the right.

- Tool Library: Built-in tool library, used for code formatting, time formatting, XML syntax parsing, and code compression libraries.


![](https://super-apps.ai/mop/document/assets/img/create3.0f0d38ec.png)

### [\#](https://super-apps.ai/mop/document/en/develop/developer/low-code.html\#_2-3-adding-components) 2.3 Adding Components

Click Add Component, drag the component from the left to the canvas, perform the corresponding configuration, and then click \[Publish\] in the upper right corner to preview it in the simulator. Go try it out!

![](https://super-apps.ai/mop/document/assets/img/create4.8ba6b0e4.png)

### [\#](https://super-apps.ai/mop/document/en/develop/developer/low-code.html\#_2-4-how-to-obtain-component-data) 2.4 How to Obtain Component Data

You can obtain the data of the corresponding component, or the data of the currently clicked item, by using the format 【Component Name.Variable Value】.

**For example:**

```text
{{Text1.value}}

        Code copied

```

| Component | Component Name | Variable Value |
| --- | --- | --- |
| Text | Text | value |
| Textarea | textarea | value |
| Tab Navigation | tabs | tabs1.selectedTab |
| Switch | switch | value |
| Product Specifications | sku | submitData |
| Search Box | search | text |
| Radio Button | RadioGroup | selectedOption/value |
| Dropdown Multi-select | Select | value |
| List | list | currentItem |
| Input Box | input | value |
| Grid | grid | currentItem |
| Form | form | formData |
| File Upload | fileUploader | currentItem |
| Date Time Picker | DateTimePicker | value |
| Checkbox | checkbox | value |
| Calendar | calendar | value |
| Province-City-District Picker | AreaPicker | value |
| Cascader | cascader | value |
| Number Slider | slider | value |
| Dropdown Single Select | Dropdown | value |

## [\#](https://super-apps.ai/mop/document/en/develop/developer/low-code.html\#_3-component-description) 3\. Component Description

To view the list of components used by the low-code development tool, please [click here](https://super-apps.ai/mop/document/en/develop/lowcode/component-details.html)

[Previous：FinClip Studio FAQ](https://super-apps.ai/mop/document/en/develop/developer/fide-faq.html)[Next：Component List](https://super-apps.ai/mop/document/en/develop/lowcode/component-details.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)