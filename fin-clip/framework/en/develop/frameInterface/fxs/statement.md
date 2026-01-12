<!--
Source URL: https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/statement.html
Extracted: 2026-01-12T23:19:29.460Z (January 12, 2026)
Title: Statements | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Mini Program Configuration](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/statement.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Framework API](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/statement.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
FXML Syntax](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/statement.html) [![](https://super-apps.ai/mop/document/images/arrow_open.svg)\\
FTS Syntax](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/intro.html)
- [Introduction](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/intro.html)
- [Modules](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/module.html)
- [Variables](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/variate.html)
- [Annotations](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/annotation.html)
- [Operators](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/operate.html)
- [Statements](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/statement.html)
- [Data Types](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html)
- [Basic Library](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/basiclibrary.html)

# [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/statement.html\#statements) Statements

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/statement.html\#if-statement) if Statement

In FTS, you can use the following formats of if statements:

- `if (expression) statement`: When `expression` is truthy, execute `statement`.
- `if (expression) statement1 else statement2`: When `expression` is truthy, execute `statement1`. Otherwise, execute `statement2`.
- `if ... else if ... else statementN`: Through this pattern, you can select one statement to execute from `statement1 ~ statementN`.

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/statement.html\#example-syntax) Example Syntax

```text
// if ...

if (expression) statement;

if (expression)
  statement;

if (expression) {
  code block;
}

// if ... else

if (expression) statement;
else statement;

if (expression)
  statement;
else
  statement;

if (expression) {
  code block;
} else {
  code block;
}

// if ... else if ... else ...

if (expression) {
  code block;
} else if (expression) {
  code block;
} else if (expression) {
  code block;
} else {
  code block;
}

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/statement.html\#switch-statement) switch Statement

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/statement.html\#example-syntax-2) Example Syntax

```text
switch (expression) {
  case variable:
    statement;
  case number:
    statement;
    break;
  case string:
    statement;
  default:
    statement;
}

        Code copied

```

- The `default` branch can be omitted.
- Only `variable`, `number`, or `string` can follow the `case` keyword.

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/statement.html\#example-code) Example Code

```text
var exp = 10;

switch ( exp ) {
case "10":
  console.log("string 10");
  break;
case 10:
  console.log("number 10");
  break;
case exp:
  console.log("var exp");
  break;
default:
  console.log("default");
}

        Code copied

```

Output:

```text
number 10

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/statement.html\#for-statement) for Statement

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/statement.html\#example-syntax-3) Example Syntax

```text
for (statement; statement; statement)
  statement;

for (statement; statement; statement) {
  code block;
}

        Code copied

```

- Supports using `break` and `continue` keywords.

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/statement.html\#example-code-2) Example Code

```text
for (var i = 0; i < 3; ++i) {
  console.log(i);
  if( i >= 1) break;
}

        Code copied

```

Output:

```text
0
1

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/statement.html\#while-statement) while Statement

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/statement.html\#example-syntax-4) Example Syntax

```text
while (expression)
  statement;

while (expression){
  code block;
}

do {
  code block;
} while (expression)

        Code copied

```

- When the expression is `true`, repeatedly execute the `statement` or `code block`;
- Supports using `break` and `continue` keywords.

[Previous：Operators](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/operate.html)[Next：Data Types](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)