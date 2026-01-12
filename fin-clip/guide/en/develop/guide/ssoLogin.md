<!--
Source URL: https://super-apps.ai/mop/document/en/develop/guide/ssoLogin.html
Extracted: 2026-01-12T23:23:00.732Z (January 12, 2026)
Title: Unified Login Guide | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

# [\#](https://super-apps.ai/mop/document/en/develop/guide/ssoLogin.html\#unified-login-guide) Unified Login Guide

To address login challenges for Mini-Program ecosystem partners deploying across multiple Host-Apps, FinClip provides an adaptable Mini-Program login solution.

The Host-App injects a unique user identifier and sets its channel name. The Mini-Program can then integrate a plugin to obtain a code via `wx.login`, which is decrypted by the Mini-Platform to retrieve the channel, unique user ID (openId), and optional global user ID (unionId).

## [\#](https://super-apps.ai/mop/document/en/develop/guide/ssoLogin.html\#host-app-integration) Host-App Integration

### [\#](https://super-apps.ai/mop/document/en/develop/guide/ssoLogin.html\#ios) iOS

Simply configure `currentUserId`, `channel`, and `phone` in `FATConfig` during SDK initialization. (Requires upgrade to version 2.45.1)

Sample code:

```json
FATConfig *config = [FATConfig configWithStoreConfigs:storeArrayM];
config.currentUserId = @"xxxx";
config.channel = @"finclip";
config.phone = @"appid";
```

### [\#](https://super-apps.ai/mop/document/en/develop/guide/ssoLogin.html\#android) Android

Simply configure `currentUserId`, `channel`, and `phone` in `FATConfig` during SDK initialization. (Requires upgrade to version 2.45.1)

Sample code:

```json
val config = FinAppConfig.Builder()
    .setUserId("xxxx")
    .setChannel("finclip")
    .setPhone("12345678901")
    .build()
```

### [\#](https://super-apps.ai/mop/document/en/develop/guide/ssoLogin.html\#harmonyos) HarmonyOS

Simply configure `currentUserId`, `channel`, and `phone` in `FinAppConfig` during SDK initialization. (Requires upgrade to version 1.0.2)

Sample code:

```ts
const finAppConfig: IFinAppConfig.IFinAppConfig = {
  // ...
  phone: '12345678901',
  currentUserId: 'xxxx',
  channel: 'finclip'
}
```

### [\#](https://super-apps.ai/mop/document/en/develop/guide/ssoLogin.html\#uni-app) uni-app

**Login Integration**

Simply configure `userId`, `channel`, and `phone` in the options during plugin SDK initialization ( [Integration Documentation](https://super-apps.ai/mop/document/runtime-sdk/uniapp/uni-integrate.html#_1-%E8%8E%B7%E5%8F%96%E5%87%AD%E6%8D%AE)). (Update to the latest plugin version (download from GitHub/Gitee) and rely on the latest core SDK version 2.45.5)

Sample code:

```json
MopSdk.initialize({
    finStoreConfigs:[\
    {'sdkKey': 'xxxxxx',\
    'sdkSecret': 'xxx',\
    'apiServer': 'https://xxx.com'}]},
    userId: 'xxxx',
    channel: 'finclip',
    phone: '135xxxxxxx',
    (ret) => {
       console.log('App Launch Success', ret)
    },
    (ret) =>{
        console.log('App Launch Fail', ret)
    });
```

**Grayscale Release**

Configure the grayscale matching value for reporting [Documentation Center](https://super-apps.ai/mop/document/runtime-sdk/uniapp/api/api-delegate.html#_7-%E8%AE%BE%E7%BD%AE%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%81%B0%E5%BA%A6%E5%80%BC)

```json
 //For gender/age matching, report information as follows:
 const  options = [{key: 'sex',value: '男'}，{key: 'age',value: 18 }]
 MopSdk.setGrayAppletVersionConfigs(options）
```

Note: To ensure proper injection of `currentUserId`, `phone`, etc., in `FATConfig`, **the Host-App should verify login status before launching the Mini-Program** (If configuration injection fails, calling `wx.login` in the Mini-Program will trigger the fail callback, and the `bindgetphonenumber` event callback will only return error information).

## [\#](https://super-apps.ai/mop/document/en/develop/guide/ssoLogin.html\#ide-integration) IDE Integration

Configure the `userId`, `channel`, and `phone` information in the "Global Field Configuration" section.

![](https://super-apps.ai/mop/document/assets/img/ssoLogin1.4b950567.jpg)

## [\#](https://super-apps.ai/mop/document/en/develop/guide/ssoLogin.html\#mini-program-integration) Mini-Program Integration

Mini-Program demo:

[login-demo.zip(opens new window)](https://www-cdn.finclip.com/test/login-demo.zip)

### [\#](https://super-apps.ai/mop/document/en/develop/guide/ssoLogin.html\#configure-plugins-in-app-json) Configure Plugins in app.json

```json
"plugins":{
    "loginPlugins": {
        "version": "1.0.6",
        "provider": "2275269218722181"
      },
      "getPhoneNumberPlugins": {
        "version": "1.0.4",
        "provider": "2275270855598469"
      }
  }
```

### [\#](https://super-apps.ai/mop/document/en/develop/guide/ssoLogin.html\#login) Login

1. The Mini-Program calls `wx.login`; the plugin automatically intercepts and returns an encrypted `code`.
2. The `success` callback of the `login` interface returns `code`, `appid`, and `apiserver`.
3. The business service calls the following Mini-Program service interface to obtain the user's `openId` and `unionId`.

POST {Mini-Program Server apiserver}/api/v1/open/dev/mini-apps/unified-auth/login

**Request Parameters**

**Parameter Location: header**

| Field | Type | Meaning | Remarks |
| --- | --- | --- | --- |
| Authorization | string | Bearer {personalAccessToken} | personalAccessToken is generated in the Personal Center of the Developer Center. Ensure the "Mini-Program Unified Authentication" scope is selected. |

**Parameter Location: body**

| Field | Type | Meaning |
| --- | --- | --- |
| appId | string | Mini-Program ID |
| code | string |  |

**Response Parameters**

| Field | Sub-field | Type | Meaning |
| --- | --- | --- | --- |
| data | channel | string | Channel |
|  | openId | string | Unique User ID |
|  | unionId | string | Global User ID |
| errcode |  |  |  |
| error |  |  |  |

**Final Request Example**

```bash
POST {Mini-Program Server apiserver}/api/v1/open/dev/mini-apps/unified-auth/login

Body application/json
{
    "appId":"fc2183741419665349",
    "code":"1drac2l7scWpTtetZtF4tA02llZegeLbJSxTYTUG6MmjBA2L3xewOk7IjSqY72ZNDsvWKU0r2EdLKcLqS82g0EKnDgE0uSu1REmvFpPIF8Y="
}

Response
{
    "error": "",
    "errcode": "OK",
    "data": {
        "channel": "com.finogeeks.finosprite",
        "openId": "2279547539610117",
        "unionId": "5110c76fbc1c8ebc7429e906b83c1f7f",
        "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImNlcnQtYnVpbHQtaW4iLCJ0eXAiOiJKV1QifQ.eyJvd25lciI6ImNvbS5maW5vZ2Vla3MuZmlub3Nwcml0ZSIsIm5hbWUiOiIyMjc5NTQ3NTM5NjEwMTE4IiwiY3JlYXRlZFRpbWUiOiIyMDI0LTA3LTE4IDEwOjE1OjQyIiwidXBkYXRlZFRpbWUiOiIyMDI0LTA3LTE4IDEwOjE1OjQyIiwiaWQiOiIyMjc5NTQ3NTM5NjEwMTE4IiwidHlwZSI6Im5vcm1hbC11c2VyIiwicGFzc3dvcmQiOiIiLCJwYXNzd29yZFNhbHQiOiIiLCJkaXNwbGF5TmFtZSI6IiIsImZpcnN0TmFtZSI6IiIsImxhc3ROYW1lIjoiIiwiYXZhdGFyIjoiIiwicGVybWFuZW50QXZhdGFyIjoiIiwiZW1haWwiOiIiLCJlbWFpbFZlcmlmaWVkIjpmYWxzZSwicGhvbmUiOiIiLCJsb2NhdGlvbiI6IiIsImFkZHJlc3MiOltdLCJhZmZpbGlhdGlvbiI6IiIsInRpdGxlIjoiIiwiaWRDYXJkVHlwZSI6IiIsImlkQ2FyZCI6IiIsImhvbWVwYWdlIjoiIiwiYmlvIjoiIiwicmVnaW9uIjoiIiwibGFuZ3VhZ2UiOiIiLCJnZW5kZXIiOiIiLCJiaXJ0aGRheSI6IiIsImVkdWNhdGlvbiI6IiIsInNjb3JlIjowLCJrYXJtYSI6MCwicmFua2luZyI6NCwiaXNEZWZhdWx0QXZhdGFyIjpmYWxzZSwiaXNPbmxpbmUiOmZhbHNlLCJpc0FkbWluIjpmYWxzZSwiaXNHbG9iYWxBZG1pbiI6ZmFsc2UsImlzRm9yYmlkZGVuIjpmYWxzZSwiaXNEZWxldGVkIjpmYWxzZSwic2lnbnVwQXBwbGljYXRpb24iOiJjb20uZmlub2dlZWtzLmZpbm9zcHJpdGVfZmMyMTgzNzQxNDE5NjY1MzQ5IiwiaGFzaCI6IiIsInByZUhhc2giOiIiLCJjcmVhdGVkSXAiOiIiLCJsYXN0U2lnbmluVGltZSI6IiIsImxhc3RTaWduaW5JcCI6IiIsImxkYXAiOiIiLCJwcm9wZXJ0aWVzIjp7fSwicm9sZXMiOltdLCJwZXJtaXNzaW9ucyI6W10sImxhc3RTaWduaW5Xcm9uZ1RpbWUiOiIiLCJzaWduaW5Xcm9uZ1RpbWVzIjowLCJ0b2tlblR5cGUiOiJhY2Nlc3MtdG9rZW4iLCJzY29wZSI6InByb2ZpbGUiLCJpc3MiOiJodHRwczovL2lhbS1tYW5hZ2VyOjgwMDAiLCJzdWIiOiIyMjc5NTQ3NTM5NjEwMTE4IiwiYXVkIjpbImU0ZDcwY2FmNDExZWY4YjU2YzRkIl0sImV4cCI6MTcyMTg3Mzc0MiwibmJmIjoxNzIxMjY4OTQyLCJpYXQiOjE3MjEyNjg5NDIsImp0aSI6ImFkbWluLzMxYzEzYzM0LThhZjUtNDYzYS05OGQwLTY0ZGEwNWY2NDViMiJ9.WCjVGoF55xeBQLXs7D0gHwHbif92_Zfc7pNtToAytiwtBpKfPAIzVUKh4w4xNtzCVNW0ov1ajNBNlP-qmDgd-jAgN_0HETPi3q_kYT4gc5Nh-iBCeXgHxXfBAl3is7J6999RAUVPyoM0T-CbU6A-opIGyXYYc1giCfta53rcMlM2PNYudquoCy9oyWjzriATWElQARP3lDHARJA_mRMoufVUgm92q5xq8Dw4gnpGKHSmweNhEqrjSj78jMz2_eeXMxfX1f2t-1asV4RahFVOZSSYLGcuFf44oK4GPMfzhOwwTIH4sqmNlsHIor8aT0DUFUU5HW3nMKDM3shl0zsnlgQT5-YdxhaYElLMjSOpY4pscwn6pdaGb9yYwkTommE_RxysmpXfA6TPuTg14_rNXQXxcJ1eDG4BjjHP9dp1Vk66AmUVnNbLZCheFioG1IsXIjaXnUUSxwyUCZRHL3GFrPbcwiyqmWwwgOLZfYetQTUO3MPJOY52eR0zS_-fWwGcHBf2SMZMb7Daz9w7u_fOL-FU1T57MvF97cEB3zx9o4GHIjd7K1gUX0UnvAvQsYUG2A6iJu9C2KziCDFH30q1rxCqrG35ZkwsKoYh1PHBu1ej-T1h9oRUFjzlO83N7LPR3KsQKCcgpkkchUje4pg2iD9-UDRoKsOuwn02qf1dlk0"
    },
    "traceid": "4fccb7b175cc401690235e4a400bb363"
}
```

### [\#](https://super-apps.ai/mop/document/en/develop/guide/ssoLogin.html\#phone-number) Phone Number

1. Set the `button` component's `open-type=getPhoneNumber` and bind the `bindgetphonenumber` event in the Mini-Program. Clicking the `button` component returns an encrypted `code`.
2. The `bindgetphonenumber` event is triggered, returning `code`, `appid`, and `apiserver`.
3. The business service calls the following Mini-Program service interface to obtain the user's phone number.

POST {Mini-Program Server apiserver }/api/v1/open/dev/mini-apps/unified-auth/phone/get

**Request Parameters**

**Parameter Location: header**

| Field | Type | Meaning | Remarks |
| --- | --- | --- | --- |
| Authorization | string | Bearer {personalAccessToken} | personalAccessToken is generated in the Personal Center of the Developer Center. Ensure the "Mini-Program Unified Authentication" scope is selected. |

**Parameter Location: body**

| Field | Type | Meaning |
| --- | --- | --- |
| appId | string | Mini-Program ID |
| code | string |  |

**Response Parameters**

| Field | Sub-field | Type | Meaning |
| --- | --- | --- | --- |
| data | phone | string | Phone Number |
| errcode |  |  |  |
| error |  |  |  |

**Final Request Example**

```bash
POST {Mini-Program Server apiserver}/api/v1/open/dev/mini-apps/unified-auth/phone/get

Body application/json
{
    "appId":"fc2183741419665349",
    "code":"1drac2l7scWpTtetZtF4tA02llZegeLbJSxTYTUG6MmjBA2L3xewOk7IjSqY72ZNDsvWKU0r2EdLKcLqS82g0EKnDgE0uSu1REmvFpPIF8Y="
}

Response
{
    "error": "",
    "errcode": "OK",
    "data": {
        "phone": "13333333333"
    },
    "traceid": "8a272339cf6f4e72bec6efa3a11a42e7"
}
```