<!--
Source URL: https://super-apps.ai/mop/document/en/develop/guide/ability/worker.html
Extracted: 2026-01-12T23:22:14.396Z (January 12, 2026)
Title: Multi-thread Worker (Beta) | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Overview](https://super-apps.ai/mop/document/en/develop/guide/feature.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Understand Mini Program](https://super-apps.ai/mop/document/en/develop/guide/ability/worker.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Configure Mini Program](https://super-apps.ai/mop/document/en/develop/guide/ability/worker.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Mini Program Framework](https://super-apps.ai/mop/document/en/develop/guide/ability/worker.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Custom Component](https://super-apps.ai/mop/document/en/develop/guide/component.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Mini Program Plugin](https://super-apps.ai/mop/document/en/develop/guide/plugin.html) [![](https://super-apps.ai/mop/document/images/arrow_open.svg)\\
Basic Abilities](https://super-apps.ai/mop/document/en/develop/guide/ability/storage.html)

- [Storage](https://super-apps.ai/mop/document/en/develop/guide/ability/storage.html)
- [File System](https://super-apps.ai/mop/document/en/develop/guide/ability/file-system.html)
- [Subpackages](https://super-apps.ai/mop/document/en/develop/guide/ability/subpackages.html)
- [Canvas](https://super-apps.ai/mop/document/en/develop/guide/ability/canvas.html)
- [Custom TabBar](https://super-apps.ai/mop/document/en/develop/guide/ability/custom-tabbar.html)
- [Lazy Load](https://super-apps.ai/mop/document/en/develop/guide/ability/lazyload.html)
- [Worker (Beta)](https://super-apps.ai/mop/document/en/develop/guide/ability/worker.html)
- [DarkMode Guide](https://super-apps.ai/mop/document/en/develop/guide/ability/dark-mode.html)
- [Background Data Fetch](https://super-apps.ai/mop/document/en/develop/guide/ability/background-data.html)

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Import from 3rd-party (beta)](https://super-apps.ai/mop/document/en/develop/guide/ability/worker.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
SSO Login Guide](https://super-apps.ai/mop/document/en/develop/guide/ssoLogin.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Traceability (beta)](https://super-apps.ai/mop/document/en/develop/guide/trace.html)

# [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/worker.html\#multi-thread-worker-beta) Multi-thread Worker (Beta)

> Supported by Base Library 3.0.45 and above. For tool debugging, please use version 1.8.46 or higher, and for the SDK, please use version 2.41.0 or above.

Some asynchronous processing tasks can be placed in a Worker to run, and after execution is complete, the results can be returned to the Mini-Program main thread. The Worker runs in a separate global context and thread and cannot directly call methods from the main thread.

## [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/worker.html\#usage-process) Usage Process

### [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/worker.html\#_1-configure-worker-information) 1\. Configure Worker Information

In `app.json`, you can configure the directory where the `Worker` code is placed.

Configuration example:

```json
{
  "workers": "workers"
}

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/worker.html\#_2-add-worker-code-files) 2\. Add Worker Code Files

Based on the configuration in step 1, create an entry file `workers/request/index.js` in the code directory.

### [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/worker.html\#_3-write-worker-code) 3\. Write Worker Code

Write the Worker response code in workers/request/index.js.

```js
// In the Worker thread execution context, a worker object is globally exposed. You can directly call worker.onMessage/postMessage.
worker.onMessage(function (res) {
  console.log(res)
})

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/worker.html\#_4-initialize-the-worker-in-the-main-thread) 4\. Initialize the Worker in the Main Thread

Initialize the Worker in the main thread's code app.js.

```js
const worker = wx.createWorker('workers/request/index.js') // The filename specifies the path to the Worker's entry file, using an absolute path.

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/guide/ability/worker.html\#_5-send-messages-from-the-main-thread-to-the-worker) 5\. Send Messages from the Main Thread to the Worker

```js
worker.postMessage({
  msg: 'hello worker'
})

        Code copied

```

**Notes**

- The maximum concurrent number of Workers is limited to 1. Before creating a new one, terminate the current Worker using Worker.terminate().
- The code inside the Worker can only require files within the specified Worker path and cannot reference files from other paths.
- The entry file for the Worker is specified when calling `wx.createWorker()`. Developers can dynamically specify the Worker entry file.
- APIs starting with wx are not supported inside the Worker.
- Sending messages between Workers is not supported.
- Only JS files can be placed in the Worker directory. Other types of static files need to be placed outside the Worker directory.

[Previous：Lazy Load](https://super-apps.ai/mop/document/en/develop/guide/ability/lazyload.html)[Next：DarkMode Guide](https://super-apps.ai/mop/document/en/develop/guide/ability/dark-mode.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)