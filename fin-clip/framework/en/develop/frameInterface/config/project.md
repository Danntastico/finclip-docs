<!--
Source URL: https://super-apps.ai/mop/document/en/develop/frameInterface/config/project.html
Extracted: 2026-01-12T23:17:31.162Z (January 12, 2026)
Title: Project Configuration File | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

# [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/config/project.html\#project-configuration-file) Project Configuration File

The `project.config.json` file in the project root directory can be used to configure the project.

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/config/project.html\#_1-configuration-items) 1\. Configuration Items

| Property | Type | Description |
| --- | --- | --- |
| miniprogramRoot | Path String | Specifies the directory of the Mini-Program source code (must be a relative path) |
| pluginRoot | Path String | Specifies the directory of the plugin project (must be a relative path) |
| compileType | String | Compilation type |
| appid | String | Project appid |
| projectname | String | Project name |
| packOptions | Object | Packaging configuration options |
| setting | Object | Project settings |

Please Note

The following configuration items are currently not supported.

| Name | Function Description |
| --- | --- |
| qcloudRoot | Specifies the directory of the Tencent Cloud project (must be a relative path) |
| cloudbaseRoot | Cloud development code root directory (must be a relative path) |
| cloudfunctionRoot | Cloud function code root directory (must be a relative path) |
| cloudfunctionTemplateRoot | Root directory for cloud function local debugging request templates (must be a relative path) |
| cloudcontainerRoot | Cloud hosting code root directory (must be a relative path) |
| libVersion | Base Library version |
| debugOptions | Debugging configuration options |
| watchOptions | File monitoring configuration settings |
| scripts | Custom preprocessing |
| staticServerOptions | Only valid in Mini-Game projects |
| editorSetting | Specifies the tabIndent and tabSize for auto-generated files |
| skeletonConfig | Settings related to skeleton screens |

### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/config/project.html\#compiletype) compileType

The compilation type affects the following settings in the Developer Tools:

| Name | Description |
| --- | --- |
| miniprogram | Currently a standard Mini-Program project |
| plugin | Currently a Mini-Program plugin project |
| game | Currently a Mini-Game project |

### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/config/project.html\#packoptions) packOptions

`packOptions` is used to configure options during the project packaging process. Packaging is a necessary step performed on the project during preview and upload.

Currently, the `packOptions.include` field can be specified to configure files (only those with extensions in the whitelist) or folders that must be forcibly included during packaging. The matched files or folders will definitely appear in the preview or upload results. (This field has higher priority than `packOptions.ignore`)

Simultaneously, the `packOptions.ignore` field can be specified to configure files or folders that match specific rules to be ignored during packaging, skipping the packaging process. These files or folders will not appear in the preview or upload results. If `packOptions.ignore` is set to ignore page files that are actually used, an error will occur during compilation, preventing subsequent preview and upload operations.

`packOptions.ignore` and `packOptions.include` are arrays of objects. The object element types are as follows:

| Field Name | Type | Description |
| --- | --- | --- |
| value | string | Path or value |
| type | string | Type |

Among these, the possible values for `type` are `folder`, `file`, `suffix`, `prefix`, `regexp2`, `glob2`, corresponding to folder, file, suffix, prefix, regular expression, and Glob rules, respectively. All rule values automatically ignore case.

Note: If the value of the `value` field represents a file or folder path, it is relative to the Mini-Program directory (`miniprogramRoot`).

Example configuration is as follows:

```text
{
  "packOptions": {
    "ignore": [{\
      "type": "file",\
      "value": "test/test.js"\
    }, {\
      "type": "folder",\
      "value": "test"\
    }, {\
      "type": "suffix",\
      "value": ".webp"\
    }, {\
      "type": "prefix",\
      "value": "test-"\
    }, {\
      "type": "glob",\
      "value": "test/**/*.js"\
    }, {\
      "type": "regexp",\
      "value": "\\.jsx$"\
    }]
  }
}
```

Note: Changes to these settings may require clearing the cache to take effect.

### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/config/project.html\#setting) setting

Additional settings for the project. The following settings can be specified.

| Field Name | Type | Description |
| --- | --- | --- |
| loginUUID | string | Sets the UUID used by the `ft.login` interface to obtain the code; can be set in the project details |
| skipCompileWatch | Boolean | Sets whether the IDE triggers watch hot updates when files are modified |
| es6 | Boolean | Whether to enable ES6 to ES5 transpilation during compilation. Some older Android systems cannot recognize newer syntax. It is recommended to enable this if deployment targeting such devices is required. |
| enhance | Boolean | Whether to enable enhanced compilation |
| postcss | Boolean | Whether to automatically complete styles when uploading code |
| minified | Boolean | Whether to automatically compress script files when uploading code |

The following fields are implicit settings of the Developer Tools:

| Field Name | Type | Description |
| --- | --- | --- |
| useCompilerPlugins | String\[\] or false | Compilation plugin configuration |
| packNpmManually | Boolean | Whether to manually configure the npm build path |
| packNpmRelationList | Array | Only takes effect when `packNpmManually` is true; refer to the npm build documentation for details |