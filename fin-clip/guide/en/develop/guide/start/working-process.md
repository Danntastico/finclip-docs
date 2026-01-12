<!--
Source URL: https://super-apps.ai/mop/document/en/develop/guide/start/working-process.html
Extracted: 2026-01-12T23:19:58.882Z (January 12, 2026)
Title: Mini-Program Operation Mechanism | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Overview](https://super-apps.ai/mop/document/en/develop/guide/feature.html) [![](https://super-apps.ai/mop/document/images/arrow_open.svg)\\
Understand Mini Program](https://super-apps.ai/mop/document/en/develop/guide/start/host-environment.html)

- [Host Environment](https://super-apps.ai/mop/document/en/develop/guide/start/host-environment.html)
- [Working Process](https://super-apps.ai/mop/document/en/develop/guide/start/working-process.html)
- [Migration Inspection](https://super-apps.ai/mop/document/en/develop/guide/start/migration-inspection.html)
- [Code Structure](https://super-apps.ai/mop/document/en/develop/guide/start/structure.html)
- [Directory Structure](https://super-apps.ai/mop/document/en/develop/guide/start/directory.html)

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Configure Mini Program](https://super-apps.ai/mop/document/en/develop/guide/start/working-process.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Mini Program Framework](https://super-apps.ai/mop/document/en/develop/guide/start/working-process.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Custom Component](https://super-apps.ai/mop/document/en/develop/guide/component.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Mini Program Plugin](https://super-apps.ai/mop/document/en/develop/guide/plugin.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Basic Abilities](https://super-apps.ai/mop/document/en/develop/guide/start/working-process.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Import from 3rd-party (beta)](https://super-apps.ai/mop/document/en/develop/guide/start/working-process.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
SSO Login Guide](https://super-apps.ai/mop/document/en/develop/guide/ssoLogin.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Traceability (beta)](https://super-apps.ai/mop/document/en/develop/guide/trace.html)

# [\#](https://super-apps.ai/mop/document/en/develop/guide/start/working-process.html\#mini-program-operation-mechanism) Mini-Program Operation Mechanism

Depending on the Host-App environment in which the Mini-Program runs, the Mini-Program will have different startup mechanisms.

## [\#](https://super-apps.ai/mop/document/en/develop/guide/start/working-process.html\#_1-mini-program-startup) 1\. Mini-Program Startup

There are two scenarios for Mini-Program startup: **Cold Start** and **Hot Start**.

- **Cold Start**: Occurs when a user opens the Mini-Program for the first time or when the Mini-Program is reopened after being actively destroyed by the Host-App. In this case, the Mini-Program needs to be reloaded and restarted, which is a cold start.
- **Hot Start**: If a user has previously opened a Mini-Program and reopens it within a certain period, the Mini-Program does not need to restart. Instead, it is simply brought from the **background** to the **foreground**. This process is a hot start.

## [\#](https://super-apps.ai/mop/document/en/develop/guide/start/working-process.html\#_2-foreground-and-background-states) 2\. Foreground and Background States

After a Mini-Program starts, its interface is directly visible to the user, meaning the Mini-Program is in the **foreground** state.

When the user closes the Mini-Program by clicking the `Capsule Button` in the upper right corner or leaves the Host-App by pressing the `Device Home Button`, the Mini-Program is not immediately destroyed. Instead, it enters the **background** state. When the user reopens the client or the Mini-Program again, the Mini-Program transitions from the background back to the **foreground**.

## [\#](https://super-apps.ai/mop/document/en/develop/guide/start/working-process.html\#_3-mini-program-destruction-mechanism) 3\. Mini-Program Destruction Mechanism

### [\#](https://super-apps.ai/mop/document/en/develop/guide/start/working-process.html\#_3-1-mobile) 3.1 Mobile

Typically, a Mini-Program is destroyed only after it has been in the background for a certain period or when it consumes excessive system resources. The destruction mechanism for mobile Mini-Programs is as follows:

- If a Mini-Program consumes excessive system resources, it may be destroyed by the system or actively reclaimed by the client.
  - On **iOS**, a maximum of **5 Mini-Programs** are allowed to exist simultaneously. If this limit is exceeded, the least recently used Mini-Program is destroyed. Additionally, when the client receives a memory warning, it actively destroys all background Mini-Programs.
  - On **Android**, a maximum of **5 Mini-Programs** are allowed to exist simultaneously. If this limit is exceeded, the least recently used Mini-Program is destroyed. Furthermore, when memory is low, the system directly reclaims memory, destroying Mini-Programs that have been inactive in the background for an extended period.

### [\#](https://super-apps.ai/mop/document/en/develop/guide/start/working-process.html\#_3-2-desktop) 3.2 Desktop

On desktop platforms, as long as the Mini-Program is not closed, it remains running. If it is closed, it is destroyed immediately.

## [\#](https://super-apps.ai/mop/document/en/develop/guide/start/working-process.html\#_4-mini-program-opening-logic) 4\. Mini-Program Opening Logic

The page opening logic for a **Cold Start** is straightforward, whereas a **Hot Start** is more complex because it may automatically trigger certain navigations.

Depending on the startup parameters, these navigations can be summarized as follows:

| Different Specified Page or Parameters | Effect |
| --- | --- |
| Yes | Clears the original page stack and opens the specified page |
| No | Retains the previous state |

[Previous：Host Environment](https://super-apps.ai/mop/document/en/develop/guide/start/host-environment.html)[Next：Migration Inspection](https://super-apps.ai/mop/document/en/develop/guide/start/migration-inspection.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)