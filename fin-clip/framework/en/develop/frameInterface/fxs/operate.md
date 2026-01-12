<!--
Source URL: https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/operate.html
Extracted: 2026-01-12T23:19:22.234Z (January 12, 2026)
Title: Operators | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Mini Program Configuration](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/operate.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Framework API](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/operate.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
FXML Syntax](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/operate.html) [![](https://super-apps.ai/mop/document/images/arrow_open.svg)\\
FTS Syntax](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/intro.html)
- [Introduction](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/intro.html)
- [Modules](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/module.html)
- [Variables](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/variate.html)
- [Annotations](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/annotation.html)
- [Operators](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/operate.html)
- [Statements](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/statement.html)
- [Data Types](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html)
- [Basic Library](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/basiclibrary.html)

# [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/operate.html\#operators) Operators

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/operate.html\#basic-operators) Basic Operators

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/operate.html\#sample-code) Sample Code

```text
var a = 10, b = 20;

// Addition
console.log(30 === a + b);
// Subtraction
console.log(-10 === a - b);
// Multiplication
console.log(200 === a * b);
// Division
console.log(0.5 === a / b);
// Modulus
console.log(10 === a % b);

        Code copied

```

```text
var a = '.w' , b = 'xs';

// String concatenation
console.log('.wxs' === a + b);

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/operate.html\#unary-operators) Unary Operators

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/operate.html\#sample-code-2) Sample Code

```text
var a = 10, b = 20;

// Increment
console.log(10 === a++);
console.log(12 === ++a);
// Decrement
console.log(12 === a--);
console.log(10 === --a);
// Unary plus
console.log(10 === +a);
// Unary negation
console.log(0-10 === -a);
// Bitwise NOT
console.log(-11 === ~a);
// Logical NOT
console.log(false === !a);
// delete operator
console.log(true === delete a.fake);
// void operator
console.log(undefined === void a);
// typeof operator
console.log("number" === typeof a);

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/operate.html\#bitwise-operators) Bitwise Operators

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/operate.html\#sample-code-3) Sample Code

```text
var a = 10, b = 20;

// Left shift
console.log(80 === (a << 3));
// Signed right shift
console.log(2 === (a >> 2));
// Unsigned right shift
console.log(2 === (a >>> 2));
// Bitwise AND
console.log(2 === (a & 3));
// Bitwise XOR
console.log(9 === (a ^ 3));
// Bitwise OR
console.log(11 === (a | 3));

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/operate.html\#comparison-operators) Comparison Operators

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/operate.html\#sample-code-4) Sample Code

```text
var a = 10, b = 20;

// Less than
console.log(true === (a < b));
// Greater than
console.log(false === (a > b));
// Less than or equal to
console.log(true === (a <= b));
// Greater than or equal to
console.log(false === (a >= b));

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/operate.html\#equality-operators) Equality Operators

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/operate.html\#sample-code-5) Sample Code

```text
var a = 10, b = 20;

// Equality
console.log(false === (a == b));
// Inequality
console.log(true === (a != b));
// Strict equality
console.log(false === (a === b));
// Strict inequality
console.log(true === (a !== b));

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/operate.html\#assignment-operators) Assignment Operators

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/operate.html\#sample-code-6) Sample Code

```text
var a = 10;

a = 10; a *= 10;
console.log(100 === a);
a = 10; a /= 5;
console.log(2 === a);
a = 10; a %= 7;
console.log(3 === a);
a = 10; a += 5;
console.log(15 === a);
a = 10; a -= 11;
console.log(-1 === a);
a = 10; a <<= 10;
console.log(10240 === a);
a = 10; a >>= 2;
console.log(2 === a);
a = 10; a >>>= 2;
console.log(2 === a);
a = 10; a &= 3;
console.log(2 === a);
a = 10; a ^= 3;
console.log(9 === a);
a = 10; a |= 3;
console.log(11 === a);

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/operate.html\#binary-logical-operators) Binary Logical Operators

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/operate.html\#sample-code-7) Sample Code

```text
var a = 10, b = 20;

// Logical AND
console.log(20 === (a && b));
// Logical OR
console.log(10 === (a || b));

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/operate.html\#other-operators) Other Operators

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/operate.html\#sample-code-8) Sample Code

```text
var a = 10, b = 20;

// Conditional operator
console.log(20 === (a >= 10 ? a + 10 : b + 10));
// Comma operator
console.log(20 === (a, b));

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/operate.html\#operator-precedence) Operator Precedence

| Precedence | Operator | Description | Associativity |
| --- | --- | --- | --- |
| 20 | ( ... ) | Parentheses | n/a |
| 19 | ... . ... | Member access | Left-to-right |
| ... \[ ... \] | Member access | Left-to-right |  |
| ... ( ... ) | Function call | Left-to-right |  |
| 17 | ... ++ | Postfix increment | n/a |
| ... -- | Postfix decrement | n/a |  |
| 16 | ! ... | Logical NOT | Right-to-left |
| ~ ... | Bitwise NOT | Right-to-left |  |
| \+ ... | Unary plus | Right-to-left |  |
| \- ... | Unary negation | Right-to-left |  |
| \+\+ ... | Prefix increment | Right-to-left |  |
| \-\- ... | Prefix decrement | Right-to-left |  |
| typeof ... | typeof | Right-to-left |  |
| void ... | void | Right-to-left |  |
| delete ... | delete | Right-to-left |  |
| 14 | ... \\* ... | Multiplication | Left-to-right |
| ... / ... | Division | Left-to-right |  |
| ... % ... | Modulus | Left-to-right |  |
| 13 | ... \+ ... | Addition | Left-to-right |
| ... \- ... | Subtraction | Left-to-right |  |
| 12 | ... << ... | Left shift | Left-to-right |
| ... >\> ... | Signed right shift | Left-to-right |  |
| ... >>\> ... | Unsigned right shift | Left-to-right |  |
| 11 | ... < ... | Less than | Left-to-right |
| ... <= ... | Less than or equal to | Left-to-right |  |
| ... \> ... | Greater than | Left-to-right |  |
| ... >= ... | Greater than or equal to | Left-to-right |  |
| 10 | ... == ... | Equality | Left-to-right |
| ... != ... | Inequality | Left-to-right |  |
| ... === ... | Strict equality | Left-to-right |  |
| ... !== ... | Strict inequality | Left-to-right |  |
| 9 | ... & ... | Bitwise AND | Left-to-right |
| 8 | ... ^ ... | Bitwise XOR | Left-to-right |
| 7 | ... ｜ ... | Bitwise OR | Left-to-right |
| 6 | ... && ... | Logical AND | Left-to-right |
| 5 | ... ｜｜ ... | Logical OR | Left-to-right |
| 4 | ... ? ... : ... | Conditional operator | Right-to-left |
| 3 | ... = ... | Assignment | Right-to-left |
| ... += ... | Assignment | Right-to-left |  |
| ... -= ... | Assignment | Right-to-left |  |
| ... \*= ... | Assignment | Right-to-left |  |
| ... /= ... | Assignment | Right-to-left |  |
| ... %= ... | Assignment | Right-to-left |  |
| ... <<= ... | Assignment | Right-to-left |  |
| ... >>= ... | Assignment | Right-to-left |  |
| ... >>>= ... | Assignment | Right-to-left |  |
| ... &= ... | Assignment | Right-to-left |  |
| ... ^= ... | Assignment | Right-to-left |  |
| ... ｜= ... | Assignment | Right-to-left |  |
| 0 | ... , ... | Comma | Left-to-right |

[Previous：Annotations](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/annotation.html)[Next：Statements](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/statement.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)