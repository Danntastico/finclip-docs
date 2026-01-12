<!--
Source URL: https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/variate.html
Extracted: 2026-01-12T23:19:18.378Z (January 12, 2026)
Title: Variables | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Mini Program Configuration](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/variate.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Framework API](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/variate.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
FXML Syntax](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/variate.html) [![](https://super-apps.ai/mop/document/images/arrow_open.svg)\\
FTS Syntax](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/intro.html)
- [Introduction](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/intro.html)
- [Modules](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/module.html)
- [Variables](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/variate.html)
- [Annotations](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/annotation.html)
- [Operators](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/operate.html)
- [Statements](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/statement.html)
- [Data Types](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html)
- [Basic Library](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/basiclibrary.html)

# [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/variate.html\#variables) Variables

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/variate.html\#_1-concept) 1\. Concept

- Variables in `fts` are all references to values.
- Assigning a value to an undeclared variable directly will define it as a global variable.
- If a variable is declared but not assigned a value, its default value is `undefined`.
- The behavior of `var` is consistent with JavaScript, including variable hoisting.

```text
var foo = 1;
var bar = "hello world";
var i; // i === undefined

        Code copied

```

The code above declares three variables: `foo`, `bar`, and `i`. Then, `foo` is assigned the numeric value `1`, and `bar` is assigned the string value `"hello world"`.

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/variate.html\#_2-variable-names) 2\. Variable Names

Variable names must comply with the following two rules:

- The first character must be: a letter (a-zA-Z) or an underscore (\_)
- The remaining characters can be: letters (a-zA-Z), underscores (\_), or digits (0-9)

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/variate.html\#_3-reserved-identifiers) 3\. Reserved Identifiers

The following identifiers cannot be used as variable names:

```text
delete
void
typeof

null
undefined
NaN
Infinity
var

if
else

true
false

require

this
function
arguments
return

for
while
do
break
continue
switch
case
default

        Code copied

```

[Previous：Modules](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/module.html)[Next：Annotations](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/annotation.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)