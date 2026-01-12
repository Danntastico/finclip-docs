<!--
Source URL: https://super-apps.ai/mop/document/en/develop/developer/ai-assistant.html
Extracted: 2026-01-12T23:15:00.722Z (January 12, 2026)
Title: AI Copilot | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
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
Low-code Development](https://super-apps.ai/mop/document/en/develop/developer/ai-assistant.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
FinClip App](https://super-apps.ai/mop/document/en/develop/developer/ai-assistant.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Generate App from Mini Program](https://super-apps.ai/mop/document/en/develop/developer/ai-assistant.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Generate HarmonyOS App from Mini Program](https://super-apps.ai/mop/document/en/develop/developer/ai-assistant.html)

# [\#](https://super-apps.ai/mop/document/en/develop/developer/ai-assistant.html\#ai-copilot) AI Copilot

In October 2024, FinClip Studio integrated the Copilot development plugin (project codenamed FinMUSE during development), which helps developers improve programming efficiency and reduce repetitive tasks. This plugin can assist users in quickly generating code templates, auto-completing code snippets, and performing real-time code error checks.

> Please note: Currently, this feature is only available for macOS (version 13.7 and above). Other versions do not support this feature yet. Please ensure your operating system meets the installation requirements.

## [\#](https://super-apps.ai/mop/document/en/develop/developer/ai-assistant.html\#_1-using-copilot) 1\. Using Copilot

After upgrading to the latest version of FinClip Studio and completing the login process, you will see the feature entry on the left side of the Studio interface. FinClip Studio will automatically load the plugin.

![image.png](https://super-apps.ai/mop/document/assets/img/finmuse-entry.68e32cda.png)

Click the Copilot button on the sidebar, then enter text in the chat panel to start a conversation with the AI. Use `Shift+Enter` to create a new line.

## [\#](https://super-apps.ai/mop/document/en/develop/developer/ai-assistant.html\#_2-different-functions-of-copilot) 2\. Different Functions of Copilot

Building on support for multiple language features, Copilot has enhanced understanding related to Mini-Program pages and functions. When using it, you can not only perform targeted optimization and ask questions about specific code blocks but also consult Copilot for more comprehensive Mini-Program introductions and guidance.

### [\#](https://super-apps.ai/mop/document/en/develop/developer/ai-assistant.html\#_2-1-referencing-files-or-websites) 2.1 Referencing Files or Websites

Enter `@` to reference relevant files or web pages for more accurate responses.

![image.png](https://super-apps.ai/mop/document/assets/img/finmuse-refer-context.0fa4b560.png)

### [\#](https://super-apps.ai/mop/document/en/develop/developer/ai-assistant.html\#_2-2-referencing-code-blocks-using-shortcuts) 2.2 Referencing Code Blocks Using Shortcuts

Select a code block and press the shortcut `Cmd+L` (macOS) / `Ctrl+L` (Windows) to directly reference that code block in the chat.

After referencing a code snippet, enter the `/edit` command in the chat window to automatically modify the referenced code.

![image.png](https://super-apps.ai/mop/document/assets/img/finmuse-cmd-l.f81ffd98.png)

### [\#](https://super-apps.ai/mop/document/en/develop/developer/ai-assistant.html\#_2-3-quickly-editing-currently-selected-code) 2.3 Quickly Editing Currently Selected Code

Select a code block and press the shortcut `Cmd+I` (macOS) / `Ctrl+I` (Windows) to directly modify the selected code.

![image.png](https://super-apps.ai/mop/document/assets/img/finmuse-cmd-i.1d4be0be.png)

### [\#](https://super-apps.ai/mop/document/en/develop/developer/ai-assistant.html\#_2-4-custom-referenced-websites) 2.4 Custom Referenced Websites

Enter `@docs` in the chat window, press Enter, and select the `Add Docs` option to customize referenced documentation.

> Please note: This operation has certain performance requirements for your computer. When adding new documents, multiple local processes will be started to crawl the website content and generate embeddings locally.

![image.png](https://super-apps.ai/mop/document/assets/img/finmuse-add-docs.e515a363.png)

### [\#](https://super-apps.ai/mop/document/en/develop/developer/ai-assistant.html\#_2-5-custom-commands) 2.5 Custom Commands

Enter `/` in the chat box and select `Build a custom prompt`. This will create a `.prompts/new-prompt-file.prompt` file in the current project's root directory. The file name will be the command name.

![image.png](https://super-apps.ai/mop/document/assets/img/finmuse-custom-cmd.40bda72c.png)

![image.png](https://super-apps.ai/mop/document/assets/img/finmuse-created-cmd.d2d3d3d8.png)

## [\#](https://super-apps.ai/mop/document/en/develop/developer/ai-assistant.html\#_3-feedback) 3\. Feedback

FinClip Studio Copilot is a highly useful collaborative assistant. We hope it helps you quickly acquire relevant capabilities during Mini-Program development and other related operations, providing a more enjoyable coding experience.

If you encounter any functional anomalies requiring improvement or have user experience-related issues while using this feature, please contact us via the WeChat Developer Community, the product team's email (wangzi@finogeeks.com), or other available channels.

## [\#](https://super-apps.ai/mop/document/en/develop/developer/ai-assistant.html\#_4-algorithm-model-filing) 4\. Algorithm Model Filing

The algorithm model relied upon by the FinClip AI Copilot (FinClip Mini-Program Generation Large Model Algorithm) has been filed with the relevant national authorities.

![](https://super-apps.ai/mop/document/assets/img/beian.c6f47c2b.jpeg)

If you require relevant filing credentials, you can log in to the Cyberspace Administration of China's Internet Information Service Algorithm Filing System and search for the **Filing Number** "网信算备440304042830501240017号" to view the related filing information.

[Previous：FinClip Studio Guide](https://super-apps.ai/mop/document/en/develop/developer/fide-detail.html)[Next：FinClip Studio Changelog](https://super-apps.ai/mop/document/en/develop/developer/fide-update-log.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)