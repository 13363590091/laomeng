# PHP

> PHP(全称:PHP:Hypertext Preprocessor,即"PHP:超文本于处理器")是一种通用开源脚本语言。PHP脚本在服务器上运行。PHP是开源的可免费下载使用。

## PHP文件是什么？
* PHP文件可包含包含文本、HTML、Javascript代码和PHP代码。
* PHP代码在服务器上执行，结果以纯HTML形式返回给浏览器。
* PHP文件的默认文件扩展名是".php"。

## 变量
以$开头+变量名 第一个是字母

```php
$x = 10;
$y = 20;
$sum = $x + $y ;
echo $sum;
```

> $this 是一个特殊的变量，它不能被赋值。

| 函数名         | 描述               |
| :------------- | :----------------- |
| `gettype(var)` | 检测变量类型       |
| `isset(var)`   | 检测变量是否存在   |
| `unset(var)`   | 销毁变量           |
| `empty(var)`   | 判断变量值为否为空 |


### 数据类型
#### 基础类型(标量数据类型)

| 类型EN  | 类型CN   | 值                                                           |
| ------- | -------- | ------------------------------------------------------------ |
| boolean | 布尔型   | true false                                                   |
| string  | 字符串型 | 字符串可以是引号内的任何文本。您可以使用单引号或双引号       |
| integer | 整型     | 只包含整数、正数、负数,可以用三种格式规定整数：十进制、十六进制（前缀是 0x）或八进制（前缀是 0） |
| float   | 浮点型   | 浮点数是带小数部分的数字，或者指数形式                       |

##### boolean
不区分大小写 通常用于判断

```
<?php
	$x = true;
	$y=FALSE;
	echo $x;
	echo $y;
?>
```

##### string

字符段型，使用单引号或双引号引起来的一段字符。

**并置运算符**

并置运算符 (.) 用于把两个字符串值连接起来。

```
<?php
    $str = "hello";
    $str2 = "你好";
    echo $str.'翻译过来是：'.$str2;
?>
```

##### integer

整数是一个没有小数的数字。

整型可以用三种格式来指定：十进制， 十六进制（ 以 0x 为前缀）或八进制（前缀为 0）。

```
<?php
    $x = 5678;
    var_dump($x);

    $y = -99999;
    var_dump($y);

    $z = 0xff;
    var_dump($z);

    $k = 066;
    var_dump($k);
?>
```

##### float

浮点数是带小数部分的数字，或是指数形式。

```
<?php
    $i = 100;
    var_dump($i);

    $k = 10.1234;
    var_dump($k);

    $l = 2e3;
    var_dump($l);

    $m = 2e-3;
    var_dump($m);
?>
```
#### 复合数据类型

包括数组array和对象object

数组类型：是一个数据集合，可以包括多种数据：标量数据、数组、对象、资源、及PHP中支持的其他语法结构。

数组中每个数据成为一个元素，元素包括索引（键名）和值两部分。元素索引只能有数字或字符串组成。元素值可以是多种数据类型。

| 类型EN | 类型CN | 值                                                           |
| ------ | ------ | ------------------------------------------------------------ |
| Array  | 数组   | 数组在一个变量中存储多个值。                                 |
| Object | 对象   | 对象是存储数据和有关如何处理数据的信息的数据类型。对象是类的实例，用new来创建 |

##### 数组

$arr =array("a","b","c","d");//索引数组 下标数字的叫做索引数组

$arr =array(0=>"a",1=>"b",2=>"c",3=>"d");

$arr =array("name"=>"zhangsan");//关联数组 下标字符串的

echo arr["name"];

js里面  var arr ={"name","zhangsan"};

for($i=0;$i<arr.)

##### Object

#### 特殊数据类型

包括空值NULL和资源resource

resource：资源是由专门的函数来建立和使用的，它是一种特殊的数据类型，并由程序员分配。在使用资源时，要及时释放不需要的资源。如果忘记释放资源，系统自动启动垃圾回收机制，避免内存消耗殆尽。

NULL：表示变量没有值。NULL不区分大小写，null和NULL都是一样。 为NULL的情况：

- 被赋为null；
- 尚未被赋值；
- 通过函数unset（）而被销毁。

| 类型EN   | 类型CN | 值                                                           |
| -------- | ------ | ------------------------------------------------------------ |
| resource | 资源   | 资源是由专门的函数来建立和使用的，它是一种特殊的数据类型，并由程序员分配。 |
| NULL     | 空     | 表示变量没有值。NULL不区分大小写，null和NULL都是一样         |

### 获取变量数据类型

通过函数 gettype() 获取变量中存储数据的类型。

```
gettype(var)
```

### 数据类型转换

#### (type)value

语法：

```
(type)value

# 示例
$initData = 100;
$bool = (bool)$initData;
```

| 类型关键字        | 类型转换     |
| ----------------- | ------------ |
| int,integer       | 转换成整型   |
| float,double,real | 转换成浮点型 |
| bool,boolean      | 转换成布尔型 |
| string            | 转换成字符型 |
| array             | 换成数组     |
| object            | 转换成对象   |

注意：

##### 转换为boolean：

当转换为 boolean 时，以下值被认为是 FALSE ：

- 布尔值 FALSE 本身
- 整型值 0（零）
- 浮点型值 0.0（零）
- 空字符串，以及字符串 "0"
- 不包括任何元素的数组
- 不包括任何成员变量的对象（仅 PHP 4.0 适用）
- 特殊类型 NULL（包括尚未赋值的变量）
- 从空标记生成的 SimpleXML 对象

所有其它值都被认为是 TRUE （包括任何资源）。

##### 转化为integer：

```
- boolean：false为0，true为1
- float:小数部分被舍去
- string:以数字开头则截取到非数字位，否则输出0
```

#### 通过函数settpye()

settype会改变变量自身类型

```
bool settpye（mixed var , string type）
```

- var为指定变量
- type为要转换的类型 boolean/float/integer/string/array/null/object

### 数据类型检测

php内置了检测数据类型的系列函数

| 函数               | 作用                               |
| ------------------ | ---------------------------------- |
| is_bool            | 变量是否为布尔型                   |
| is_string          | 变量是否为字符串类型               |
| is_float,is_double | 变量是否为浮点型                   |
| is_integer,is_init | 变量是否为整型                     |
| is_null            | 变量是否为null                     |
| is_array           | 变量是否为数组                     |
| is_object          | 变量是否为一个对象                 |
| is_numeric         | 变量是否为数字或由数字组成的字符串 |

示例

```
 $initData = 100;
 if(is_init($initData)){
    echo "整型";
 }else{
     echo "不是整型";
 }
```

## 输出

```php
//乱码解决
<meta charset="UTF-8">//
<?php
	echo "输出字符串"; //必须有分号,代表命令的结束
	print("输出字符串"); //如果可以输出 则返回1 不可以则-1
	print_r(expression:"符合类型");
	var_dump(expression:"符合类型");
?>
```

# PHP运算符

### 算数运算符

| 运算符 | 名称 | 例子       |
| ------ | ---- | ---------- |
| +      | 加法 | $x+$y      |
| -      | 减法 | $x-$y      |
| *      | 乘法 | $x*$y      |
| /      | 除法 | $x/$y      |
| %      | 取余 | $x%$y      |
| -      | 取反 | -$x        |
| .      | 并置 | $str1.$str |

### 赋值运算符

PHP赋值运算符用于向变量写值。

| 运算符 | 例子           | 作用 |
| ------ | -------------- | ---- |
| =      | $x = 100       | 赋值 |
| +=     | $x += 10       | 加法 |
| -=     | $x -= 10       | 减法 |
| *=     | $x *= 10       | 乘法 |
| /=     | $x /= 3        | 除法 |
| %=     | $x %= 2        | 取余 |
| .=     | $str .= "lisi" | 连接 |

### 递增/递减运算符

| 运算符 | 例子 | 作用            |
| ------ | ---- | --------------- |
| ++x    | ++$x | $x+1 然后返回$x |
| x++    | $x++ | 返回$x,$x+1     |
| --x    | --$x | $x-1 返回$x     |
| x--    | $x-- | 返回$x,$x-1     |

### 比较运算符

比较运算符返回的结果为布尔值。

| 运算符 | 例子     | 作用                          |
| ------ | -------- | ----------------------------- |
| ==     | 等于     | 比较值是否相同                |
| ===    | 恒等于   | 比较值是否相等、类型是否相同  |
| !=     | 不等于   | 值不相等                      |
| <>     | 不等于   | 值不相等                      |
| !==    | 不恒等   | 值或类型不相同                |
| >      | 大于     | $x>$y $x比$y大返回true        |
| <      | 小于     | $x<$y $x小于$y返回true        |
| >=     | 大于等于 | $x>=$y $x比$y大或相等返回true |
| <=     | 小于等于 | $x<=$y $x比$y小或相等返回true |

### 逻辑运算符

| 运算符 | 名称 | 例子      | 结果                                             |
| ------ | ---- | --------- | ------------------------------------------------ |
| and    | 与   | $x and $y | 如果 $x 和 $y 都为 true，则返回 true             |
| or     | 或   | $x or $y  | 如果 $x 和 $y 至少有一个为 true，则返回 true。   |
| xor    | 异或 | $x xor $y | 如果 $x 和 $y 有且仅有一个为 true，则返回 true。 |
| &&     | 与   | $x && $y  | 如果 $x 和 $y 都为 true，则返回 true。           |
| II     | 或   | $x II $y  | 如果 $x 和 $y 至少有一个为 true，则返回 true。   |
| !      | 非   | !$x       | 如果 $x 不为 true，则返回 true。                 |

### PHP 数组运算符

PHP 数组运算符用于比较数组：

| 运算符 | 名称   | 例子      | 结果                                                         |
| ------ | ------ | --------- | ------------------------------------------------------------ |
| +      | 联合   | $x + $y   | $x 和 $y 的联合（但不覆盖重复的键）                          |
| ==     | 相等   | $x == $y  | 如果 $x 和 $y 拥有相同的键/值对，则返回 true。               |
| ===    | 全等   | $x === $y | 如果 $x 和 $y 拥有相同的键/值对，且顺序相同类型相同，则返回 true。 |
| !=     | 不相等 | $x != $y  | 如果 $x 不等于 $y，则返回 true。                             |
| <>     | 不相等 | $x <> $y  | 如果 $x 不等于 $y，则返回 true。                             |
| !==    | 不全等 | $x !== $y | 如果 $x 与 $y 完全不同，则返回 true。                        |

### 三元运算符

```
$var = exp?x:y；
```

### 错误控制符 @

在PHP中，可以使用@运算符来抑制单个错误。例如，如果不希望PHP报告它不包括某个文件，则可以编写如下代码：

```
@include ('config.inc.php');
```

或者如果不希望看到“除以0”错误：

```
$x = 8;
$y = 0;
$num = @($x/$y);
```

像函数调用或数学运算一样，@符号只能处理表达式。不能在条件语句、循环语句、函数定义等之前使用@符号。 一条经验法则是，我建议将@符号用于那些执行失败时不会影响脚本整体功能的函数。

# 流程控制

## 选择结构

> 条件语句用于根据不同条件执行不同动作。

### If...Else 语句

在 PHP 中，提供了下列条件语句：

- if 语句 - 在条件成立时执行代码
- if...else 语句 - 在条件成立时执行一块代码，条件不成立时执行另一块代码
- if...else if....else 语句 - 在若干条件之一成立时执行一个代码块
- switch 语句 - 在若干条件之一成立时执行一个代码块

#### if 语句

if 语句用于仅当指定条件成立时执行代码。 语法

```
if (条件)
{
    条件成立时要执行的代码;
}
```

#### if...else 语句

在条件成立时执行一块代码，条件不成立时执行另一块代码，请使用 if....else 语句。 语法

```
if (条件)
{
条件成立时执行的代码;
}
else
{
条件不成立时执行的代码;
}
```

#### if...else if....else 语句

在若干条件之一成立时执行一个代码块，请使用 if....else if...else 语句。. 语法

```
if (条件)
{
if 条件成立时执行的代码;
}
else if (条件)
{
elseif 条件成立时执行的代码;
}
else
{
条件不成立时执行的代码;
}
```

### Switch 语句

如果您希望有选择地执行若干代码块之一，请使用 switch 语句。

```
语法
switch (n)
{
case label1:
    如果 n=label1，此处代码将执行;
    break;
case label2:
    如果 n=label2，此处代码将执行;
    break;
default:
    如果 n 既不等于 label1 也不等于 label2，此处代码将执行;
}
```

## 循环

### For 循环

> 循环执行代码块指定的次数，或者当指定的条件为真时循环执行代码块。

for循环用于预先知道脚本要运行的次数。 语法

```
for (初始值; 条件; 增量)
{
要执行的代码;
}
```

示例

```
<html>
<body>

<?php
for ($i=1; $i<=5; $i++)
{
echo "The number is " . $i . "<br>";
}
?>

</body>
</html>
```

### foreach 循环

foreach 循环用于遍历数组。

```php
foreach ($array as $value)
{
要执行代码;
}
foreach ($array as $key=>$value)
{
要执行代码;
}
```

### While 循环

while 循环将重复执行代码块，直到指定的条件不成立。

```php
while (条件)
{
要执行的代码;
}
```

### do...while 语句

do...while 语句会至少执行一次代码，然后检查条件，只要条件成立，就会重复进行循环。 语法

```php
do
{
要执行的代码;
}
while (条件);
```
# 引入文件

```php
//include ".php";
//include_once  ".php" 引入其他文件 只引入一次
//引入的文件有错误，只会提示，不会终止程序的执行。
//require ".php";
//require_once ".php";
//引入错误终止执行
//require 如果引入的文件很重要
//一个文件可以return一个值 exp demo.php  return 0;
// $a = require "demo.php";
```

### 文件的读写

```php
file_get_contents("demo.php");
file_put_contents("demo.php","123");
```

  

# PHP函数

> PHP 的真正威力源自于它的函数。

在 PHP 中，提供了超过 1000 个内建的函数。

```php
//php 和其他的语言类似 函数只能访问局部的变量 
//js就不同了
```

## 创建函数

语法：

```php
function functionName()
{
要执行的代码;
}
<?php
//形参实参数量要一致
//实参数量多于，形参 不会报错
//形参不能多于实参
//php 和其他的语言类似 函数只能访问局部的变量
//js就不同了
header( 'Content-Type:text/html;charset=utf-8 ');
echo $abc="撒旦撒";
//1.定义在函数里面的变量，叫局部变量。定义在函数最外层的变量，叫做全局变量。
//2.静态变量 ->js里面有闭包   一个函数return另一个函数 调用外层函数的变量
//就可以把局部变量的变化值保存起来
//3.php static 定义
//4. js函数里面可以再定义一个 var a =function(){}属于内部函数
// php 函数里面定义一个函数  函数没有局部函数一说
//5.function_exists(函数名)
//6.超全局变量 不需要global 也可以在函数中访问$_GET;$_COOKIE;$_POST;
//$_REQUEST;$_ENV;$_FILES;...
function aa($a){
    var_export(count(func_get_args()));
    var_export(func_get_args());
    global $abc;//函数使用全局变量
    echo $abc;
    echo $a;
}
function bb(){
    static $message=0;
    $message++;
    echo $message;
}//容易导致内存泄漏
//php,js都是弱类型语言,php更严谨一些
//回调函数
function cc($callback){
    $callback();
}
cc(function (){
    echo "回调";
});
function b(){
    echo "回调";
}
$c = "b";
//$c();
echo $c;
cc("b");
//aa("aac","sds","sdsd");
//bb();bb();bb();bb();
```

PHP 函数准则：

- 函数的名称应该提示出它的功能
- 函数名称以字母或下划线开头（不能以数字开头）
- 函数的名称不区分大小写