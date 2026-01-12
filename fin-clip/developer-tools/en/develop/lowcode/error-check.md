<!--
Source URL: https://super-apps.ai/mop/document/en/develop/lowcode/error-check.html
Extracted: 2026-01-12T23:16:09.470Z (January 12, 2026)
Title: Common Error Alerts | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
FinClip Studio](https://super-apps.ai/mop/document/en/develop/lowcode/error-check.html) [![](https://super-apps.ai/mop/document/images/arrow_open.svg)\\
Low-code Development](https://super-apps.ai/mop/document/en/develop/developer/low-code.html)

- [FinClip Studio Low-code Guide](https://super-apps.ai/mop/document/en/develop/developer/low-code.html)
- [Component List](https://super-apps.ai/mop/document/en/develop/lowcode/component-details.html)
- [Action & Event Binding](https://super-apps.ai/mop/document/en/develop/lowcode/action-event.html)
- [JS Usage](https://super-apps.ai/mop/document/en/develop/lowcode/js.html)
- [Troubleshooting](https://super-apps.ai/mop/document/en/develop/lowcode/error-check.html)

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
FinClip App](https://super-apps.ai/mop/document/en/develop/lowcode/error-check.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Generate App from Mini Program](https://super-apps.ai/mop/document/en/develop/lowcode/error-check.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Generate HarmonyOS App from Mini Program](https://super-apps.ai/mop/document/en/develop/lowcode/error-check.html)

## [\#](https://super-apps.ai/mop/document/en/develop/lowcode/error-check.html\#common-error-alerts) Common Error Alerts

Error alert names on the code side, better for locating and identifying the root cause of issues.

| Error Reason | Page Error Code | Project Error Code | Title Display |
| --- | --- | --- | --- |
| INVALID\_PARAMETER | 400 | 4000 | Invalid parameter |
| PLUGIN\_NOT\_INSTALLED | 400 | 4001 | Plugin not installed |
| PLUGIN\_ID\_NOT\_GIVEN | 400 | 4002 | Missing plugin id |
| DATASOURCE\_NOT\_GIVEN | 400 | 4003 | Missing datasource |
| PAGE\_ID\_NOT\_GIVEN | 400 | 4004 | Missing page id |
| DUPLICATE\_KEY\_USER\_ERROR | 400 | 4005 | Name already used |
| PAGE\_DOESNT\_BELONG\_TO\_USER\_WORKSPACE | 400 | 4006 | Page doesn''t belong to this workspace |
| UNSUPPORTED\_OPERATION | 400 | 4007 | Unsupported operation |
| DEPRECATED\_API | 400 | 4008 | Deprecated API |
| USER\_DOESNT\_BELONG\_ANY\_WORKSPACE | 400 | 4009 | User doesn''t belong to any workspace |
| USER\_DOESNT\_BELONG\_TO\_WORKSPACE | 400 | 4010 | User doesn''t belong to this workspace |
| NO\_CONFIGURATION\_FOUND\_IN\_DATASOURCE | 400 | 4011 | Datasource configuration is invalid |
| INVALID\_ACTION\_COLLECTION | 400 | 4038 | Collection configuration is invalid |
| INVALID\_ACTION | 400 | 4012 | Action configuration is invalid |
| INVALID\_DATASOURCE | 400 | 4013 | Datasource configuration is invalid |
| INVALID\_DATASOURCE\_CONFIGURATION | 400 | 4015 | Datasource configuration is invalid |
| INVALID\_ACTION\_NAME | 400 | 4014 | Invalid action name |
| NO\_CONFIGURATION\_FOUND\_IN\_ACTION | 400 | 4016 | No configurations found in this action |
| NAME\_CLASH\_NOT\_ALLOWED\_IN\_REFACTOR | 400 | 4017 | Name already taken |
| PAGE\_DOESNT\_BELONG\_TO\_APPLICATION | 400 | 4018 | Page doesn''t belong to this application |
| INVALID\_DYNAMIC\_BINDING\_REFERENCE | 400 | 4022 | Invalid dynamic binding reference |
| USER\_ALREADY\_EXISTS\_IN\_WORKSPACE | 400 | 4021 | User already exists in this workspace |
| UNAUTHORIZED\_DOMAIN | 401 | 4019 | Invalid or unauthorized email domain |
| USER\_NOT\_SIGNED\_IN | 401 | 4020 | User not signed in |
| INVALID\_PASSWORD\_RESET | 400 | 4020 | Invalid password reset request |
| INVALID\_PASSWORD\_LENGTH | 400 | 4037 | Invalid password length |
| JSON\_PROCESSING\_ERROR | 400 | 4022 | Json processing error |
| INVALID\_CREDENTIALS | 200 | 4023 | Invalid credentials |
| UNAUTHORIZED\_ACCESS | 403 | 4025 | Unauthorized access |
| DUPLICATE\_KEY | 409 | 4024 | Duplicate key |
| USER\_ALREADY\_EXISTS\_SIGNUP | 409 | 4025 | Account already exists with this email |
| ACTION\_IS\_NOT\_AUTHORIZED | 403 | 4026 | Permission denied |
| NO\_RESOURCE\_FOUND | 404 | 4027 | No resource found |
| USER\_NOT\_FOUND | 404 | 4027 | No user found |
| ACL\_NO\_RESOURCE\_FOUND | 404 | 4028 | No resource found or permission denied |
| GENERIC\_BAD\_REQUEST | 400 | 4028 | Invalid request |
| VALIDATION\_FAILURE | 400 | 4028 | Validation failed |
| INVALID\_CURL\_COMMAND | 400 | 4029 | Invalid cURL command |
| INVALID\_LOGIN\_METHOD | 401 | 4030 | Invalid login method |
| INVALID\_GIT\_CONFIGURATION | 400 | 4031 | Invalid Git configuration |
| INVALID\_GIT\_SSH\_CONFIGURATION | 400 | 4032 | SSH key not configured |
| INVALID\_GIT\_REPO | 400 | 4033 | Invalid Git repository |
| DEFAULT\_RESOURCES\_UNAVAILABLE | 400 | 4034 | Default resources not found |
| GIT\_MERGE\_FAILED\_REMOTE\_CHANGES | 406 | 4036 | Git merge failed for remote changes |
| GIT\_MERGE\_FAILED\_LOCAL\_CHANGES | 406 | 4037 | Git merge failed for local changes |
| REMOVE\_LAST\_WORKSPACE\_ADMIN\_ERROR | 400 | 4038 | Last admin cannot be removed |
| INVALID\_CRUD\_PAGE\_REQUEST | 400 | 4039 | Invalid page generation request |
| UNSUPPORTED\_OPERATION\_FOR\_REMOTE\_BRANCH | 400 | 4040 | Unsupported Operation |
| ROLES\_FROM\_SAME\_WORKSPACE | 400 | 4041 | Roles already exist |
| INTERNAL\_SERVER\_ERROR | 500 | 5000 | Internal server error |
| REPOSITORY\_SAVE\_FAILED | 500 | 5001 | Failed to save |
| PLUGIN\_INSTALLATION\_FAILED\_DOWNLOAD\_ERROR | 500 | 5002 | Plugin installation failed |
| PLUGIN\_RUN\_FAILED | 500 | 5003 | Plugin execution failed |
| PLUGIN\_EXECUTION\_TIMEOUT | 504 | 5040 | Timeout in plugin execution |
| PLUGIN\_LOAD\_FORM\_JSON\_FAIL | 500 | 5004 | Unable to load datasource form configuration |
| PLUGIN\_LOAD\_TEMPLATES\_FAIL | 500 | 5005 | Unable to load datasource templates |
| IO\_ERROR | 503 | 5003 | I/O error |
| MARKETPLACE\_TIMEOUT | 504 | 5041 | Datasource cannot be deleted |
| WORKSPACE\_ID\_NOT\_GIVEN | 400 | 4031 | Missing workspace id |
| INVALID\_CURL\_METHOD | 400 | 4032 | Invalid method in cURL command |
| OAUTH\_NOT\_AVAILABLE | 500 | 5006 | Unsupported login method |
| MARKETPLACE\_NOT\_CONFIGURED | 500 | 5007 | Marketplace not configured |
| PAYLOAD\_TOO\_LARGE | 413 | 4028 | Payload exceeds max allowed size |
| SIGNUP\_DISABLED | 403 | 4033 | Signup disabled |
| FAIL\_UPDATE\_USER\_IN\_SESSION | 500 | 5008 | Unable to update user in session |
| APPLICATION\_FORKING\_NOT\_ALLOWED | 403 | 4034 | Forking application not permitted |
| GOOGLE\_RECAPTCHA\_TIMEOUT | 504 | 5042 | Timeout in Google recaptcha verification |
| GOOGLE\_RECAPTCHA\_FAILED | 401 | 4035 | Google recaptcha verification failed |
| UNKNOWN\_ACTION\_RESULT\_DATA\_TYPE | 500 | 5009 | Unexpected data type |
| INVALID\_CURL\_HEADER | 400 | 4036 | Invalid header in cURL command |
| AUTHENTICATION\_FAILURE | 500 | 5010 | Authentication |
| INSTANCE\_REGISTRATION\_FAILURE | 500 | 5011 | Registration failed for this instance |
| TOO\_MANY\_REQUESTS | 429 | 4039 | Too many requests |
| INVALID\_JS\_ACTION | 400 | 4040 | Invalid action in JS object |
| CYCLICAL\_DEPENDENCY\_ERROR | 400 | 4041 | Cyclical Dependency in Page Load Actions |
| CLOUD\_SERVICES\_ERROR | 500 | 5012 | Error in cloud services |
| GIT\_APPLICATION\_LIMIT\_ERROR | 402 | 4043 | Maximum number of Git repo connection limit reached |
| GIT\_ACTION\_FAILED | 400 | 4044 | Git failed |
| GIT\_FILE\_SYSTEM\_ERROR | 503 | 5013 | Git file system error |
| GIT\_EXECUTION\_TIMEOUT | 504 | 5014 | Timeout in Git command execution |
| INCOMPATIBLE\_IMPORTED\_JSON | 400 | 4045 | Incompatible Json file |
| GIT\_MERGE\_CONFLICTS | 400 | 4046 | Merge conflicts found |
| GIT\_PULL\_CONFLICTS | 400 | 4047 | Merge conflicts found during the pull operation |
| SSH\_KEY\_GENERATION\_ERROR | 500 | 5015 | Failed to generate SSH keys |
| GIT\_GENERIC\_ERROR | 504 | 5016 | Git command execution error |
| GIT\_UPSTREAM\_CHANGES | 400 | 4048 | Git push failed for pending upstream changes |
| GENERIC\_JSON\_IMPORT\_ERROR | 400 | 4049 | Unable to import application in workspace |
| FILE\_PART\_DATA\_BUFFER\_ERROR | 500 | 5017 | Failed to upload file |
| MIGRATION\_ERROR | 500 | 5018 | Action already migrated |
| INVALID\_GIT\_SSH\_URL | 400 | 4050 | Invalid SSH URL |
| REPOSITORY\_NOT\_FOUND | 404 | 4051 | Repository not found |
| UNKNOWN\_PLUGIN\_REFERENCE | 400 | 4052 | Unknown |
| ENV\_FILE\_NOT\_FOUND | 500 | 5019 | Environment file not found |
| PUBLIC\_APP\_NO\_PERMISSION\_GROUP | 500 | 5020 | Required permission missing for public access |
| RTS\_SERVER\_ERROR | 500 | 5021 | RTS server error |

## [\#](https://super-apps.ai/mop/document/en/develop/lowcode/error-check.html\#rest-api-errors) REST API Errors

**1\. Missing URL**

```text
DEFAULT_REST_DATASOURCE is not correctly configured. Please fix the following and then re-run: \n[Missing URL.]

        Code copied

```

This message indicates that the URL field for the REST API in the API editor form has been left blank.
This error can be fixed by editing the REST API form and providing a URL.

**2\. Missing Client Secret/Client ID/Access Token**

```text
DEFAULT_REST_DATASOURCE is not correctly configured. Please fix the following and then re-run: \n[Missing Client Secret, Missing Client ID, Missing Access Token URL]

        Code copied

```

This message indicates that the mentioned parameter fields - //Client Secret have been left blank. These fields are nested within sub-sections which become visible if the OAuth 2.0 option has been selected under Authentication Type.

**3\. Secret Key Required**

```text
Secret key is required when sending session details is switched on, and should be at least 32 characters in length.

        Code copied

```

This message indicates that the Send Appsmith signature header field has been marked as Yes but the Session Details Signature Key field has been left blank.

This error can be resolved by filling in the field or by disabling the Send Appsmith signature header field by selecting No.

## [\#](https://super-apps.ai/mop/document/en/develop/lowcode/error-check.html\#js-errors) JS Errors

Errors may occur when using JS objects or writing JS functions. They could be caused by syntax errors in the code, mismatched data types, or attempting to access non-existent properties or functions.

### [\#](https://super-apps.ai/mop/document/en/develop/lowcode/error-check.html\#_1-data-type-evaluation) 1\. Data Type Evaluation

This error occurs when the value in a widget property does not match the required data type for the property.

**Error Message 1:**

example

This value does not evaluate to type Array\[Object\]

**Cause:**

For example, you might encounter this error when using Lists because the data property requires an array of objects that may not match the data type of the API response.

**Solution:**

The solution is to bind the array in the response object or use JavaScript to transform the response object. Below is an example of the response from a fetch users API. Binding it directly to a table would result in an error.

```text
{
 "next": "https://mock-api.appsmith.com/users?page=2&pageSize=10",
 "previous": null,
 "users": [\
   {\
     "id": 1,\
     "name": "Barty Crouch",\
     "status": "APPROVED",\
     "avatar": "https://robohash.org/sednecessitatibuset.png?size=100x100&set=set1",\
     "email": "barty.crouch@gmail.com",\
   },\
   {\
     "id": 2,\
     "name": "Jenelle Kibbys",\
     "status": "APPROVED",\
     "avatar": "https://robohash.org/quiaasperiorespariatur.bmp?size=100x100&set=set1",\
     "email": "jkibby1@hp.com",\
   }\
 ]
}

        Code copied

```

To overcome this issue, you can use JavaScript to bind the users response array instead of the entire response object:

```text
{{ fetch_users.data.users }}

        Code copied

```

**Error Message 2:**

example

This value does not evaluate to type Array\[{label: string, value: string}\]

**Cause:**

You might encounter a data mismatch error when adding options to single-select or multi-select dropdown lists. In this case, ensure that the options property is an array of objects containing label and value as strings.

**Solution:**

If the response does not contain label and value keys as shown below, you can map the response and transform it using JavaScript.

```text
// invalid response of fetchColors API
[\
 'Blue',\
 'Green',\
 'Red'\
]

        Code copied

```

```text
// Transform Response
{{
   fetchColors.data.map((color) =>{
       return {
           label: color,
           value: color
       }
   })
}}

        Code copied

```

**Error Message 3:**

example

Value does not match ISO 8601 standard date string

**Cause:**

Date pickers require a default date in standard ISO format. If the date you provide does not match this, you will see this error.

**Solution:**

To resolve this, you can use moment.js to convert the date string.

```text
// Moment can be used to set the default date to the current date
{{moment()}}

        Code copied

```

```text
// Moment can parse your date format
{{ moment("2021-07-26", "YYYY-MM-DD") }}

        Code copied

```

**Error Message 4:**

example

This value does not evaluate to type \`boolean

**Cause:**

This error typically occurs in isVisible and isDisabled properties, indicating that the value in the property does not match the boolean type.

**Solution:**

You can resolve this issue using comparison operators.

```text
{{ Dropdown1.selectedOptionValue === "RED" }}

        Code copied

```

**Error Message 5:**

example

This value does not evaluate to type string

**Cause:**

You might encounter an error when using widgets where the data property requires a string value that does not match the data type of the query response.

**Solution:**

The solution to this problem is to convert the data type of the API response to a string. This can be done using JavaScript methods. Additionally, ensure that the data passed to the widget is in the correct format. For example:

```text
To get text,
{{Text1.text}}

To get image,
{{Image1.image}}

        Code copied

```

If the above method does not work, you can also check the EVALUATED VALUE section to ensure it returns a string value rather than an object or other data type.

**Error Message 6:**

example

This value must be number

**Cause:**

You might encounter an error where the data property requires a numeric value that does not match the data type of the API response.

**Solution:**

It is important to ensure that the data passed to the widget's data property matches the expected data type. One solution to this issue is to use JavaScript to convert the API response to the correct data type or to access the correct data type from the API response.

You can also check the EVALUATED VALUE section to ensure it returns a numeric value rather than an object or other data type.

### [\#](https://super-apps.ai/mop/document/en/develop/lowcode/error-check.html\#_2-syntax-errors) 2\. Syntax Errors

This error occurs when there is invalid JavaScript inside handlebars . In this case, the evaluated value of the field shows as undefined. Validate the number of braces in the code and consider rewriting the JS into multiline code.
In the example below, test is not defined anywhere in the application.

![](https://super-apps.ai/mop/document/assets/img/error.28e1cc2e.png)

### [\#](https://super-apps.ai/mop/document/en/develop/lowcode/error-check.html\#_3-infinite-loop-errors) 3\. Infinite Loop Errors

An infinite loop error occurs when a function or block of code repeats endlessly, causing the application or function to become unresponsive and even preventing users from accessing certain features of the application.

**Cause:**

The issue could be due to the page load function being stuck in a loop. This happens if you add code that uses the navigateTo function and executes on onPageLoad, which could make the page inaccessible or cause the application to get stuck in a loop and keep routing to the target page.

**Solution:**

To resolve this issue, you can use a debugger statement in Pageplug to stop the execution of the code and identify the source of the infinite loop. Here are the steps to do this:

- Open the application in Pageplug and go to the page where the infinite loop occurs.

- Locate the function or block of code causing the infinite loop.

- Insert a debugger statement at the beginning of the function or block of code to pause its execution and allow you to inspect its state. See debugging statements and their usage for more details.

- Use the browser’s debugger console to step through the code and determine the cause of the infinite loop.

- Once the issue is identified, make the necessary changes to the code to fix it.

- Save the changes and test the application again to ensure the infinite loop issue is resolved.


[Previous：JS Usage](https://super-apps.ai/mop/document/en/develop/lowcode/js.html)[Next：FinClip App](https://super-apps.ai/mop/document/en/develop/developer/finclip-app.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)