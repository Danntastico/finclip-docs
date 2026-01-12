<!--
Source URL: https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html
Extracted: 2026-01-12T23:19:29.614Z (January 12, 2026)
Title: Data Types | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

[![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Mini Program Configuration](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
Framework API](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html) [![](https://super-apps.ai/mop/document/images/arrow_close.svg)\\
FXML Syntax](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html) [![](https://super-apps.ai/mop/document/images/arrow_open.svg)\\
FTS Syntax](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/intro.html)
- [Introduction](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/intro.html)
- [Modules](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/module.html)
- [Variables](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/variate.html)
- [Annotations](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/annotation.html)
- [Operators](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/operate.html)
- [Statements](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/statement.html)
- [Data Types](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html)
- [Basic Library](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/basiclibrary.html)

# [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html\#data-types) Data Types

The FTS language currently supports the following data types:

- `number`: Numeric value
- `string`: String
- `boolean`: Boolean value
- `object`: Object
- `function`: Function
- `array`: Array
- `date`: Date
- `regexp`: Regular expression

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html\#number) number

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html\#syntax) Syntax

number includes two types of values: integers and decimals.

```text
var a = 10;
var PI = 3.141592653589793;

        Code copied

```

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html\#properties) Properties

- `constructor`: Returns the string `"Number"`.

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html\#methods) Methods

- `toString`
- `toLocaleString`
- `valueOf`
- `toFixed`
- `toExponential`
- `toPrecision`

> For specific usage of the above methods, please refer to the `ES5` standard

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html\#string) string

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html\#syntax-2) Syntax

string has two writing methods:

```text
'hello world';
"hello world";

        Code copied

```

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html\#properties-2) Properties

- `constructor`: Returns the string `"String"`.
- `length`

> For the specific meaning of properties other than `constructor`, please refer to the `ES5` standard

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html\#methods-2) Methods

- `toString`
- `valueOf`
- `charAt`
- `charCodeAt`
- `concat`
- `indexOf`
- `lastIndexOf`
- `localeCompare`
- `match`
- `replace`
- `search`
- `slice`
- `split`
- `substring`
- `toLowerCase`
- `toLocaleLowerCase`
- `toUpperCase`
- `toLocaleUpperCase`
- `trim`

> For specific usage of the above methods, please refer to the `ES5` standard

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html\#boolean) boolean

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html\#syntax-3) Syntax

Boolean values have only two specific values: `true` and `false`.

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html\#properties-3) Properties

- `constructor`: Returns the string `"Boolean"`.

##### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html\#methods-3) Methods

- `toString`
- `valueOf`

> For specific usage of the above methods, please refer to the `ES5` standard

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html\#object) object

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html\#syntax-4) Syntax

object is an unordered key-value pair. Usage is as follows:

```text
var o = {} // Create a new empty object

// Create a new non-empty object
o = {
  'string'  : 1,  // The key of an object can be a string
  const_var : 2,  // The key of an object can also be an identifier that conforms to variable definition rules
  func      : {}, // The value of an object can be any type
};

// Read operation of object properties
console.log(1 === o['string']);
console.log(2 === o.const_var);

// Write operation of object properties
o['string']++;
o['string'] += 10;
o.const_var++;
o.const_var += 10;

// Read operation of object properties
console.log(12 === o['string']);
console.log(13 === o.const_var);

        Code copied

```

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html\#properties-4) Properties

- `constructor`: Returns the string `"Object"`.

```text
console.log("Object" === {k:"1",v:"2"}.constructor)

        Code copied

```

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html\#methods-4) Methods

- `toString`: Returns the string `"[object Object]"`.

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html\#function) function

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html\#syntax-5) Syntax

function supports the following definition methods:

```text
// Method 1
function a (x) {
  return x;
}

// Method 2
var b = function (x) {
  return x;
}

        Code copied

```

function also supports the following syntax (anonymous functions, closures, etc.):

```text
var a = function (x) {
  return function () { return x;}
}

var b = a(100);
console.log( 100 === b() );

        Code copied

```

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html\#arguments) arguments

The `arguments` keyword can be used inside functions. This keyword currently only supports the following properties:

- `length`: The number of arguments passed to the function.
- `[index]`: The `index` subscript can be used to traverse each argument passed to the function.

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html\#example-code) Example Code

```text
var a = function(){
  console.log(3 === arguments.length);
  console.log(100 === arguments[0]);
  console.log(200 === arguments[1]);
  console.log(300 === arguments[2]);
};
a(100,200,300);

        Code copied

```

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html\#properties-5) Properties

- `constructor`: Returns the string `"Function"`.
- `length`: Returns the number of formal parameters of the function.

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html\#methods-5) Methods

- `toString`: Returns the string `"[function Function]"`.

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html\#example-code-2) Example Code

```text
var func = function (a,b,c) { }

console.log("Function" === func.constructor);
console.log(3 === func.length);
console.log("[function Function]" === func.toString());

        Code copied

```

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html\#array) array

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html\#syntax-6) Syntax

array supports the following definition methods:

```text
var a = [];      // Create a new empty array

a = [1,"2",{},function(){}];  // Create a new non-empty array, array elements can be any type

        Code copied

```

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html\#properties-6) Properties

- `constructor`: Returns the string `"Array"`.
- `length`

> For the specific meaning of properties other than constructor, please refer to the `ES5` standard.

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html\#methods-6) Methods

- `toString`
- `concat`
- `join`
- `pop`
- `push`
- `reverse`
- `shift`
- `slice`
- `sort`
- `splice`
- `unshift`
- `indexOf`
- `lastIndexOf`
- `every`
- `some`
- `forEach`
- `map`
- `filter`
- `reduce`
- `reduceRight`

> For specific usage of the above methods, please refer to the `ES5` standard.

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html\#date) date

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html\#syntax-7) Syntax

To create a date object, use the `getDate` function, which returns an object representing the current time.

```text
getDate()
getDate(milliseconds)
getDate(datestring)
getDate(year, month[, date[, hours[, minutes[, seconds[, milliseconds]]]]])

        Code copied

```

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html\#parameters) Parameters

- `milliseconds`: The number of milliseconds since January 1, 1970, 00:00:00 UTC.
- `datestring`: Date string, the format is: "month day, year hours:minutes:seconds".

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html\#example-code-3) Example Code

```text
var date = getDate(); // Returns the current time object

date = getDate(1500000000000);
// Fri Jul 14 2017 10:40:00 GMT+0800 (China Standard Time)
date = getDate('2017-7-14');
// Fri Jul 14 2017 00:00:00 GMT+0800 (China Standard Time)
date = getDate(2017, 6, 14, 10, 40, 0, 0);
// Fri Jul 14 2017 10:40:00 GMT+0800 (China Standard Time)

        Code copied

```

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html\#properties-7) Properties

- `constructor`: Returns the string `"Date"`.

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html\#methods-7) Methods

- `toString`
- `toDateString`
- `toTimeString`
- `toLocaleString`
- `toLocaleDateString`
- `toLocaleTimeString`
- `valueOf`
- `getTime`
- `getFullYear`
- `getUTCFullYear`
- `getMonth`
- `getUTCMonth`
- `getDate`
- `getUTCDate`
- `getDay`
- `getUTCDay`
- `getHours`
- `getUTCHours`
- `getMinutes`
- `getUTCMinutes`
- `getSeconds`
- `getUTCSeconds`
- `getMilliseconds`
- `getUTCMilliseconds`
- `getTimezoneOffset`
- `setTime`
- `setMilliseconds`
- `setUTCMilliseconds`
- `setSeconds`
- `setUTCSeconds`
- `setMinutes`
- `setUTCMinutes`
- `setHours`
- `setUTCHours`
- `setDate`
- `setUTCDate`
- `setMonth`
- `setUTCMonth`
- `setFullYear`
- `setUTCFullYear`
- `toUTCString`
- `toISOString`
- `toJSON`

> For specific usage of the above methods, please refer to the `ES5` standard

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html\#regexp) regexp

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html\#syntax-8) Syntax

To create a regexp object, use the `getRegExp` function.

```text
getRegExp(pattern[, flags])

        Code copied

```

- Parameters:
  - `pattern`: The content of the regular expression.
  - `flags`: Modifiers. This field can only contain the following characters:

    - `g`: global
    - `i`: ignoreCase
    - `m`: multiline.

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html\#example-code-4) Example Code

```text
var a = getRegExp("x", "img");
console.log("x" === a.source);
console.log(true === a.global);
console.log(true === a.ignoreCase);
console.log(true === a.multiline);

        Code copied

```

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html\#properties-8) Properties

- `constructor`: Returns the string `"RegExp"`.
- `source`
- `global`
- `ignoreCase`
- `multiline`
- `lastIndex`

> For the specific meaning of properties other than constructor, please refer to the `ES5` standard.

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html\#methods-8) Methods

- `exec`
- `test`
- `toString`

> For specific usage of the above methods, please refer to the `ES5` standard.

## [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html\#data-type-judgment) Data Type Judgment

### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html\#constructor-property) constructor Property

Data type judgment can use the `constructor` property.

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html\#example-code-5) Example Code

```text
var number = 10;
console.log( "Number" === number.constructor );

var string = "str";
console.log( "String" === string.constructor );

var boolean = true;
console.log( "Boolean" === boolean.constructor );

var object = {};
console.log( "Object" === object.constructor );

var func = function(){};
console.log( "Function" === func.constructor );

var array = [];
console.log( "Array" === array.constructor );

var date = getDate();
console.log( "Date" === date.constructor );

var regexp = getRegExp();
console.log( "RegExp" === regexp.constructor );

        Code copied

```

### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html\#typeof) typeof

Using `typeof` can also distinguish some data types.

#### [\#](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/datatype.html\#example-code-6) Example Code

```text
var number = 10;
var boolean = true;
var object = {};
var func = function(){};
var array = [];
var date = getDate();
var regexp = getRegExp();

console.log( 'number' === typeof number );
console.log( 'boolean' === typeof boolean );
console.log( 'object' === typeof object );
console.log( 'function' === typeof func );
console.log( 'object' === typeof array );
console.log( 'object' === typeof date );
console.log( 'object' === typeof regexp );

console.log( 'undefined' === typeof undefined );
console.log( 'object' === typeof null );

        Code copied

```

[Previous：Statements](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/statement.html)[Next：Basic Library](https://super-apps.ai/mop/document/en/develop/frameInterface/fxs/basiclibrary.html)

# ❤️Support for FinClip

We need your support, please click the button below to help us add Github star
![](https://img.shields.io/github/stars/finogeeks?style=social)