# JavaScript

> 基于对象的、弱类型的、解释型的、异步执行的、基于事件的语言。

![img](D:\laomeng\Typora\插图\]_JL{`X9_IU3LVMJ%5GO_N8.png)

## 书写方式

1. 嵌入式
2. 外部.js文件
## 变量

| 分类     | 类型                                                         | 值                                                        |
| -------- | ------------------------------------------------------------ | --------------------------------------------------------- |
| 初始类型 | undefined                                                    | undefined                                                 |
| null     | 一个表明 null 值的特殊关键字。 JavaScript 是大小写敏感的，因此 null 与 Null、NULL或其他变量完全不同。 |                                                           |
| string   | 单双引号引起来的数据                                         |                                                           |
| number   | 包括整型和浮点型。科学计数法。支持二进制、八进制、十进制、十六进制。 |                                                           |
| boolean  | true false                                                   |                                                           |
| Symbol   | 表示独一个一无二的值。(ES6新增)                              |                                                           |
| 引用类型 | Object                                                       | 包含相关属性和方法的一个集合。包含Function、Array、Object |

### 初始类型（存在栈区）

##### undefined 

> 说明没有给变量赋值 如果没有给变量赋值，变量的值就是undefined那么他的类型就是undefined

##### number 

```
var num = 1.1;
```



##### string

> 只要是用单引号或双引号包含的内容全部都是字符串。
>
> " "     '   '

```
var str="1" ;

console.log(typeof str);
```

##### 布尔类型

var bool ="false";

##### null object 对象

> 定义了一个变量，并且给他分配了空间，即将要存储内容

var no = null;

##### symbol    类和对象的时候

```
var a = Symbol();
console.log(typeof a);
```

### 引用类型（复杂类型）（存在堆区)

> 引用类型是指有**多个值构成的对**象，也就是对象类型比如：Object,Array,Function,Data等js的引用数据类型是存储在**堆**中（heap），也就是说存储的变量处的值是一个**指针（point）**，指向存储对象的内存地址。存在堆中的原因是：**引用值的大小会改变，所以不能放在栈中，否则会降低变量查询的速度**

```
var obj1 = new Object();

　　var obj2 = obj1;

　　obj2.name = "我有名字了";

　　console.log(obj1.name); // 我有名字了
```

不同的内存分配机制导致了不同的访问机制，js中不允许直接访问保存在堆内存中的对象，所以在访问一个对象时，首先得到这个对象在堆内存中的地址，然后在按照这个地址去获取对象中的值，这就是**按引用访问**，基础类型则可以直接访问到

参数传递的不同（实参复制给形参的过程），首先我们知道所有函数都是**按值来传递**的，传参不同也就是内存分配不同的原因，当我们把变量赋值给参数的时候，参数的改变和变量没有关系，当我们把引用类型传递给参数的时候，此时我们传递的是引用类型的地址，所有当参数在函数内部改变的时候，会出现修改了函数外面值的情况

## 书写规则

- 严格区分大小写的；

```
ep：var a = 10;
var A = 20;
```

- 命名是以字母 、_ 、$开头、后面可以跟数字 、字母 、_ 、$
	
```
var $="钱"
```

![image-20200706162201707](D:\laomeng\Typora\插图\image-20200706162201707.png)

* 不能用关键字或保留字  ep：var 定义变量

* 约定俗成的一些的规则  驼峰 myName、

* 基础类型首字母小写，引用类型首字母大写

* 命名时候尽量有语义

* 分号使用的问题 一段代码结束之后要用

> ；和回车是耦合的，都代表一段代码的结束,虽然回车和分号的作用，但是一定要加，不然后面很麻烦
>

  ```
  var name ="sd"
  var age = 12
  var sex = "weiz";
  ```

##   运算符

### 算数运算符

+、-、*、/、%

**1.+加号**

1. **数字与除字符串以外类型相加**： 将其他类型转化为数字后算术相加，无法转化则结果为NaN

   - true 转化为1
   - false、null转化为0
   - undefined 无法转化

2. NaN与除字符串以外类型相加结果都为NaN

3. **字符串与任意类型**相加： 拼接

   ```js
    1+false    //1
    '1'+1      //'11'
    NaN+'1'     //'NaN1'
    [1,2,3]+1    //"1,2,31"
    {a:2}+'1'    // 1
   ```
4.拼接  变量必须放到字符串引号外部，变量与字符串之间用+连接：

   ```
    var name = "张三", age = 20, sex = "男";
    alert( name + "的年龄是:" +age+ "，性别是:" +sex )
   ```

**2.- 减号**

1.数字和字符串相减 :

* 字符串全部由数字组成，将字符串转化为数字，再相减
* 字符串不能转化为数字，结束是 NaN
* null转化为0 undefined转化为NaN true为1 false为0

2.字符串和字符串相减 : 和数字和字符串相减规则相同

```
'11a'-1    //NaN
'11'-1     //10
```

### 乘法运算

1. 数字与字符串运算：
   - 将字符串尝试着转化为数字，进行运算
   - 字符串不能转化为数字，结果是 NaN
2. null转化为0 true为1 false为0 空字符串转为0
3. Undefined乘所有数据类型的都为NaN
4. 字符串和字符串运算 : 和数字和字符串运算规则相同

```js
true*null      //0
'11'*'11'    // 121
'1a'*22    //NaN
```

### 除法运算

1. 字符串类型 数字类型与 null 相除 结果为 Infinity
2. 字符串类型、数字类型 null与 Undefined 相除 结果为 NaN
3. 字符串类型 数字类型 null与 字符串类型、数字类型 null相除进行相应转换做除法运算
   - 字符串不能转为数字则结果为NaN
   - 空字符串转为0

```JS
11/null              //Infinity
'11'/'11'            // 1
'11a'/'11'            // NaN
```

### 取余(%)

取余，即取余数，如 `10 % 3` 则指 10除以3的余数

> 用于取一段范围的值
> 一般不用于小数，因为结果不确定（不精确）。

1. Undefined 与所有数据类型的 取余 都为NaN

2. 其余数据类型先进行转换，能转为数字则进行取余运算，否则为NaN

   ```JS
   ''%1        // 0
   11%0        // NaN
   11%null     // NaN
   ```

   判断数字num是否是偶数：

   ```js
   if(num%2==0){
    alert(num + "是偶数")
   }
   ```

### 比较运算符

比较运算符得到的结果 都是 boolean

主要有以下几种比较运算符

- \>
- <
- \>=
- <=
- == (相等)
- != (不相等)
- === (全等)既比较值，又比较类型，不会进行类型转换
- !== (不全等)

**比较规则**

1. 将比较的对象尝试转化为数字,能转化则按照数字比较,不能转化则为false

2. `NaN`与任意数据比较结果均为 false

3. 字符串和字符串比较, 比较第一个字符的unicode编码值，第一个字符要是相同，就比较第二个，依次往下(ASCII码表在最末尾)

   ```js
    '10000' < '2'   //1的unicode值比2的unicode值小  true       
    '10000' > 2    //转成数字比较  true
   ```

4. 和全等=的区别

   是只比较两边的值(如果两边类型不相同，则先尝试着转化，然后再比较，所以耗时比=多)

   - 0==undefined (false)
   - 0==null (false)
   - NaN == NaN (false)
   - undefined==null (true)
- `===`比较两边的值和类型，都相等才返回true；
  
5. ===和object.js()的区别

   ```js
   注/Object.is(+0,-0);               //false
   +0===-0                         //true
   Object.is(NaN,NaN);             //true
   NaN===NaN                       //false
   ```

### 赋值运算符

> `=、+=、-=、*=、/=、%=、**=` 运算符右边的值赋给左边的变量

| 运算符 | 实例  | 等价于 |
| ------ | ----- | ------ |
| `=`    | a=25  | a=25   |
| `+=`   | a+=25 | a=a+25 |
| `-=`   | a-=25 | a=a-25 |
| `*=`   | a*=25 | a=a*25 |
| `/=`   | a/=25 | a=a/25 |
| `%=`   | a%=25 | a=a%25 |
| `**=`  | a**=3 | a=a^3  |

### 逻辑运算符

> 在JavaScript逻辑运算中，0、""、null、false、undefined、NaN都会判为false，其他都为true

1. 与`&&`
   - 只要有一个是假，结果就是假
   - &&左侧是真，结果取右侧； 左侧假，结果取左侧值
2. 或`||`
   - 只要有一个是真，结果就是真
   - ||左侧是真，结果取左侧； 左侧假，结果取右侧值
3. 非`!`
   - 取反
   - 结果是`boolean`值

总结： 与或运算，哪一侧能决定表达式真假性，则结果取哪一侧。

例:

```js
0 && 1    // 0     
0 || 1    // 1

1 && 2     // 2
1 || 2     // 1

!1     // false
!0     // true
```

### 一元运算符

只能操作一个值的操作符就叫做一元操作符

- new (创建对象) delete (删除对象上的内容)
- typeof -(负号) +(正号)
- instanceof (判断对象是否由一个构造函数实例化)

### 三元运算符（三目）

> 基于某些条件对变量进行赋值的条件运算符，

```js
var iablename=(condition)?value1:value2
```

condition为true则variablename取:前的值，也就是value1，否则取:后的值，也就是value2

三元运算符使用技巧

1. 可以简化条件判断

   ```js
   var fee;
   if(isMember){
    fee="￥2.00";
   }else{
    fee="￥10.00";
   }
   fee=isMember ? "￥2.00" : "￥10.00";
   ```

2. 三元运算符用来执行多个操作,用小括号包裹，再用逗号隔开语句。

   ```
   var x = 100;
   var result = x<100?"小于100":(x>100?'大于100':'等于100')
   ```

### 特殊运算符

, 逗号 —— 分隔数据

```
​```js
var num1 = 1, num = 2, num3 = 3;
​```
```

() 小括号运算符 —— 提升算术优先级

```
​```js
var i = 1 + 3 * 5;
console.log(i);   // 16
var l = (1 + 3) * 5;
console.log(l);   // 20
​```
```

### 运算符的优先级

> 下表中的运算符按从最高到最低的优先级列出。具有相同优先级的运算符按从左至右的顺序求值。

| 运算符                                                       | 运算符类型                                                   |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| `(…)`                                                        | 圆括号                                                       |
| `….…`, `…[…]` ,`new…(…)`,`…(…)`                              | 成员访问,需计算的成员访问,new(带参数列表),函数调用           |
| `new …`                                                      | new(无参数列表)                                              |
| `…++`, `…--`                                                 | 后置递增(运算符在后) 后置递减(运算符在后)                    |
| `!…`,`~…`,`+…`,`-…`,`++…`,`--…`,`typeof…`,`void…`,`delete…`,`await…` | 逻辑非 按位非 一元加法 一元减法 前置递增 前置递减 typeof void delete await |
| `…**…`                                                       | 幂                                                           |
| `…*…` `…/…` `…%…`                                            | 乘法 除法 取余                                               |
| `+` `-`                                                      | 加法 减法                                                    |
| `<` `<=` `>` `>=` `in` `instanceof`                          | 小于 小于等于 大于 大于等于 in 判断是否为这个构造函数实例化  |
| `` `!=` `=` `!==`                                            | 等号 非等 全等 非全等                                        |
| `&&`                                                         | 逻辑与                                                       |
| ¦¦                                                           | 逻辑或                                                       |
| `… ? … : …`                                                  | 三元运算符                                                   |
| `=` `+=` `-=` `*=` `/=` `%=` `**=`                           | 赋值                                                         |
| `,`                                                          | 逗号                                                         |

## **流程控制**

> **流程** 指的是代码的执行顺序
>
> **流程控制** 指通过规定的语句让程序代码有条件的按照一定的方式执行

| 结构     | 描述                                           |
| :------- | :--------------------------------------------- |
| 顺序结构 | 按照书写顺序从上到下的执行代码                 |
| 选择结构 | 根据给定的条件有选择的执行相应的语句           |
| 循环结构 | 在给定的条件满足的情况下，反复的执行同一段代码 |

### 选择结构（条件判断）

**if分支**

1. 单路分支

   ```js
   if(判断条件){    
    条件为真，执行该处代码
   }
   ```

2. 双路分支(两条分支二选一)

   ```js
   if(判断条件){    
    条件为真，执行该处代码
   }else{
    条件为假，执行该处代码
   }
   ```

3. 多路分支

   ```js
   if(条件1){
    条件1 成立,执行代码
   }else if(条件2){
    条件1不成,条件2成立,  执行代码
   }else if(条件3){
    条件1 条件2都不成立,条件3成立,  执行代码
   }else{
    所有条件都不成立,  执行代码
   }
   ```

4. 嵌套分支

   ```js
   if (条件1){
    条件1 成立,执行代码
    if(条件2){
        条件1 条件2 都成立,执行代码
        if(条件3){
            条件1 条件2 条件3 都成立,执行代码
        }else{
            条件1 条件2成立，条件3不成立，执行代码
        }
    }else if(条件4){
        条件1成立 条件2不成立,执行代码
    }
   }
   ```

switch 分支(多选一的条件判断)

```js
switch (需要判断的值) {
    case 值1:
        当需要判断的值==值1 ,执行代码
        break;
    case 值2:
        当需要判断的值==值2 ,执行代码
        break;
    case 值3:
        当需要判断的值==值3 ,执行代码
        break;
}
```

**if分支与switch分支的区别与选择:**

- 当判断某种范围时用if，当判断单个值时用switch
- 各个条件满足的情况不可重复，放置造成不可预期后果

## 循环结构

### for循环

```js
for(var i = 0; i < 100; i++){
    循环体
    每次循环执行一次该处代码
}
```

**for循环的执行顺序**

> for循环四个要素： 起始值、终止值、步进值、循环体

```js
for(起始值;终止值;步进值){
    循环体;
}
```

第一次循环的时候顺序为：起始值 => 终止值，判断终止值是否满足条件，不满足条件则结束循环，满足则继续循环 => 循环体 => 步进值;
后续的循环则不再执行起始值，其余顺序不变，直到终止值不满足条件，循环结束。

**`break`和`continue`**

- `break`: 语句可以立即退出循环，阻止再次反复执行任何代码。
- `continue`: 语句退出当前循环，根据控制表达式还允许继续进行下一次循环。

```js
for(var i=1;i<=10;i++) {
    if(i==5) {
        break;
    }
    console.log(i);     // 输出结果：1 2 3 4
}

for(var i=1;i<=10;i++) {
    if(i==5) {
        continue;
    }
    console.log(i);    // 输出结果：1 2 3 4 6 7 8 9 10
}
```

### `while`语句

> 在条件表达式为真的前提下，循环执行指定的一段代码，直到那个表达式不为真时结束循环。

```js
// 控制台顺序输出 1-5:
var i = 0;
while (i < 5){
    i += 1;
    console.log(i);
}
```

**`for`循环和`while`循环的使用选择**

1. `for`循环必须知道循环次数，而`while`循环次数可以不确定
2. 所以在已知循环次数情况下使用`for`循环
3. 使用时优先考虑`for`循环，当无法写出循环条件的起始结束步进值时考虑用`while`循环

### do-while语句

> 先执行一次循环,再进行判断,所以循环至少迭代一次。

```js
// 控制台输出1-5 :
var i = 0;
do {
   i += 1;
     console.log(i);
} while (i < 5);
```

**`while`循环和`do while`循环的使用选择**

1. `do while`循环先执行循环体后判断条件是否成立；
2. `while`循环先判断条件是否成立，后执行循环体
3. 所以`do while`循环的循环体至少执行一次
4. 总结： 当循环的判断条件所需的值来自于循环体时，可以使用`do while`循环

do while循环：获取小于0.5的随机数(不知道循环次数，判断条件来自于循环体)

```js
var number;
do{
    number = Math.random()
}while(number>=0.5)
```

# 函数

**函数**：将完成某一特定功能的代码封装起来，并且可以重复调用的代码块。

**为何使用函数？**

1. 能够对代码进行复用：只要定义一次代码，就可以多次使用它。
2. 能够多次向同一函数传递不同的参数，以产生不同的结果。
3. 使程序更加简洁、具有逻辑性、维护方便

## 函数声明方式

**function关键字**

```js
function 函数名([参数1],[参数2],...[参数n]){
    函数体
    [retrun]  //返回值
}
```

**字面量定义(匿名函数)**

```js
var 变量 = function ([参数1],[参数2]....){
    函数体
    [retrun]  //返回值
}
```

**实例化构造函数**

```js
var 变量 = new Function([参数1],[参数2]...,"函数体");
```

## 函数调用方式

### 通过括号调用

用于具名函数的调用

- 函数名()
- 变量名()

```js
function fun1(){}
fun1()

var fun2 = function (){}
fun2()
```

### 自调用(IIFE)

用于匿名函数的调用，匿名函数还可以通引用变量来调用。

```js
//第一种
(function (){})()

//第二种
!function(){

}()

//第三种
(function(){

}())
```

> 注意： 在进行函数自调用时，上一条语句必须结尾有`;`

### 通过事件调用

```html
<script>
    function fun(){}
</script>
<div onclick="fun()"></div>
```

```js
var div =document.querySelector("div");

div.onclick=function(){

}
```

# 函数参数与返回值

## 函数的参数

> 可以动态的改变函数的变量的类型与值，使同一函数实现不同的效果

当我们封装一个功能，例如十行十列表格，但是每次使用该功能时想动态改变实现效果，例如想输出为五行五列、两行两列的表格，这时就需要修改函数体代码。 而更好的方法就是，在调用时有使用者传入一些值来控制函数体中的相关功能，即可实现不同效果，这个使用者在调用函数时传入的值就是函数的参数。

### 参数作用

可以动态的改变函数的变量的类型与值，使同一函数产生不同的结果。

### 参数类型

- 形参：函数在定义时，括号里所定义的变量。 (形式上存在，只有在被调用时才有值)
- 实参：函数在调用时，括号里所传入的值。 (进行函数调用时,它们都必须具有确定的值, 以便把这些值传送给形参)

```javascript
// num 是形参
function ta(num){
    for(var i = 1;i <= num;i++){
        for(var j = 1;j <= num-i;j++){
            document.write("&nbsp;");
        }
        for(var k = 1;k <= i*2-1;k++){
            document.write("*");
        }
        document.write("<br>");
  }
}
ta(6);    // 6 是实参
```

在实参为形参传递过程中，实参和形参位于内存中两个不同地址中，实参先自己复制一次拷贝，再把拷贝复制给形参。所以，在函数体中，形参的变化不会对实参有任何的影响。例如：

```js
var number = 10
function fun(number){
    number = 100
}

fun(number);
alert(number);   // 10
```

### 参数详解

1. 参数可以是任何的数据类型
2. 参数个数
3. 参数尾逗号

#### 参数数据类型

参数可以是任何的数据类型

```javascript
function TYPEOF(type){
alert(typeof type);
}
TYPEOF(1)
TYPEOF("a")
TYPEOF(true)
TYPEOF(null)
TYPEOF()
//甚至可以传入函数：
TYPEOF(function(){alert(1)})
```

#### 参数个数

1. 实参与形参的个数相同时，一一对应。

2. 实参小于形参时，形参自动赋值为undefined。

   ```javascript
    function aa(a,b){
        alert(a);
        alert(b);
    }
    aa(1);  //   1  undefined
   ```

3. 实参大于形参时，使用

   ```
   arguments
   ```

   对象来获取。

   ```javascript
    function aa(a,b){
        alert(a);
        alert(b);
        alert(arguments.length);
        alert(arguments[2]);
        alert(arguments.callee);
    }
    aa(1,5,7);   //依次弹出 1  5  3   7  函数本身
   ```

4. arguments对象 在创建函数时，隐式的创建了arguments对象，它是用来记录函数的参数的信息的，只能在函数内部使用

   它的属性：

   ```
    * length: 函数的参数的长度<br/>
    * callee: 对函数本身的调用<br/>
    * 可以通过下标来访问具体参数的值。
   ```

   > 注：`arguments`对象不是数组，而是一个类似数组的对象。所以为了使用数组的方法，必须使用`Array.prototype.slice.call`先将其转为数组。

5. [es6]rest参数

   > ES6 引入 rest 参数（形式为...变量名），用于获取函数的多余参数，这样就不需要使用`arguments`对象了。`rest`参数搭配的变量是一个数组，该变量将多余的参数放入数组中。

   ```js
    function fun(...a){
        console.log(a);    // [1,2,3,4]
    }
    fun(1,2,3,4)
   
    function fun(a, ...b){
        console.log(a,b);    //1   [2,3,4]
    }
    fun(1,2,3,4)
   
    // rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。
    function f(a, ...b, c) {
        // 报错
    }
   ```

   <iframe src="http://cross.hnz.kim/caniuse/1.html?style=rest-parameters" frameborder="0" style="box-sizing: border-box; width: 1134.4px; min-height: 300px;"></iframe>

### 参数尾逗号

在ES7种，函数实参和形参末尾可以以逗号结束：

```js
function fun(a,b,){ }

fun(10,20,)
```

**功能**：重新排列元素项，改变最后一个元素位置时不需要增删逗号

### 函数的重载

> 一个函数通过传入的参数的个数不同或者参数类型的不同，可以对应函数的多个实现，而且每一种实现对应一个函数体。
> 重载函数常用来实现功能类似而所处理的数据类型不同的问题。

**模拟函数的重载：**

```javascript
function fun(a,b){
    if(arguments.length == 1){
            alert("只有一个参数"+a);
    }
    if(arguments.length == 2){
            alert(" 有两个参数"+a+"和"+b);
    }
    if(arguments.length >= 3){
            alert("参数太多了");
    }
}
fun(1,3.4,4);
```

### [es6]函数参数默认值

```js
// 该函数计算两数之和，但如果调用只传入一个参数则结果是NaN，所以必须为参数设置默认值0
function add(a,b){
    return a+b
}
```

#### ES5设置默认值方式

使用短路原则为变量设置默认值

```js
// 利用短路原则为函数参数设置默认值，参数存在则取参数，参数未传则取0
function add(a,b){
   a = a||0;
   b = b||0;
   return a+b
}
// 为变量设置默认值1
var num = num || 1
```

#### ES6函数参数设置默认值

ES6允许为函数的参数设置默认值，即直接写在参数定义的后面。

```javascript
function add(x, y = 0) {
console.log(x, y);
}
log(10) // 10 0
log(10, 100) // 10  100
log(10, '') // 10
```

#### 函数的length属性

函数的length属性，将返回没有指定默认值的参数个数，仅包括第一个具有默认值之前的参数个数。

```javascript
function aa(a){}
function bb(a=5){}
function cc(a,b,c=5){}

console.log(aa.length) // 1
console.log(bb.length) // 0
console.log(cc.length) // 2
```

## 函数返回值

> 函数体中的计算结果可以输出查看，但是如果想对函数的结果进行处理则需要用到函数的返回值。

函数体中的关键字 `return` 可以将函数体中运行的结果返回给函数外部：

```js
function fun(a,b){
    var num = a+b;
    return num;
}
var end = fun(1,2);    // 函数运行结果保存到变量end中
```

### return 的功能

1. 将函数运行结果返回
2. 停止并跳出当前函数 （不会执行return后面的语句）

```javascript
function aa(){
  return;
  alert("hello world");
}
aa();   // 没有弹出 hello world
```

> 一个函数可以有多个return语句，但只有一个return执行（常用于判断）

```javascript
function aa(a){
    if(a>0){
        alert(a);
        return;
    }
    if(a<=0){
        alert(a);
        return;
    }
}
aa(3);  //  3
```

### 函数返回值使用事项

1. 返回值可以是任何数据类型

2. 每个函数都默认有返回值，如果一个函数没有写`return`，会默认返回`undefined`。

   ```javascript
   function aa(a){
      if(a>0){
          alert(a);
          return;
      }
      if(a<=0){
          alert(a);
          return 1;
      }
   }
   alert(aa(3));   //  3  undefined
   alert(aa(0));   //  0  1
   ```

3. 一个函数只能有一个返回值。

   ```javascript
   function bb(a,b,c){
      return a,b,c;
   }
   alert(bb(3,5,7)); //  7
   ```

   原因：用逗号做返回值时，是按从左到右赋值的，最终赋值为最后一个值，前面的值被覆盖了。

   > 如果想返回多个值，则可以将多个值打包为数组或对象

# 预解析与作用域

## 环境

> **运行环境** 是JavaScript中重要的一个概念，指JavaScript代码运行的地方

- 宿主环境: 指支持JavaScript运行的平台或软件，一般指**浏览器**
- 执行环境: 定义了变量或函数有权访问的其他数据，决定了它们各自的行为
  - 全局环境：整个页面
  - 函数环境：一个函数内部就是一个环境
  - eval()

正因为有了这些环境，在不同环境中声明的变量或函数就有了它的生效范围，这就是作用域：

## 作用域

**作用域**：作用域即一段代码的作用范围。

### 全局变量

在全局环境(即函数外部)声明的变量，或者没有使用var关键字声明的变量，在任何地方都可以访问得到，拥有全局的作用域。

### 局部变量

在函数环境(即函数内部)声明的变量，参数也是局部变量。只能在函数内部访问得到。

```javascript
var a=100;
function aa(){
    alert(a);
    var b = 200;
    alert(b);
    c = 1;
}
aa();   // 100 200
alert(a);  //100
alert(b);  //报错
alert(c);
```

优点：可以提高程序的逻辑性、安全性，可以减少名字的冲突。

### 作用域链

当访问一个变量或函数时，JavaScript会创建变量的一个**作用域链**，规定了该变量在执行环境中的访问次序：从当前环境开始，依次到包含(外部)环境、下一个包含环境，直到全局环境。

直观表现就是：变量函数的值会从当前作用域寻找，然后逐级地向上级回溯，直至找到变量为止（如果找不到变量，通常会导致错误发生）。

```javascript
var num = 1;
function aa(){
  var num = 2;
  function bb(){
    var num = 3;
    function cc(){
      num = 4;
      alert(num);    // 4
    }
    cc();
    alert(num);        // 4
  }
  bb();
  alert(num);            // 2
}
aa();
alert(num);                // 1
```

> 注意：
> 不用var声明直接为变量赋值，得到的不是真正的全局变量，它实际是对属性赋值操作。首先，它会尝试在当前作用域链中解析 改变量； 如果在任何当前作用域链中找到改变量，则会执行对改变量属性赋值； 如果没有找到改变量，它才会在全局对象（即当前作用域链的最顶层对象，如window对象）中创造改变量属性并赋值。

## 预解析

> JavaScript解析器在运行JavaScript代码的时候会将`变量`、`函数`提前到当前作用域顶部，再顺序执行。

预解析顺序：

1. 按`<script> </script>`块依次来解析的
2. 按执行环境来解析
   - 全局环境：打开页面解析
   - 函数环境：调用该函数的时候解析
3. 遇到关键字var和function时，提前解析到内存中
4. 如果还有`<script> </script>`块，再按上述顺序来解析

案例：

1. 全局环境预解析
2. 函数环境预解析
3. 分块解析

预解析案例：

```javascript
alert(a);   //  undefined
var a = 12;
alert(a);   //  12
alert(b);   //  b is not defined
var num = 10;
function fun() {
    var num
    console.log(num)     // undefined
    num = 100
}
fun()
注/console.log(fun);   // 函数fun
var fun = 123;
function fun() {
    console.log('Hello javascript');
}
console.log(fun);     // 123
```

# 函数高级

## 回调函数

> js代码会至上而下一条线执行下去，但是有时候我们需要等到一个操作结束之后再进行下一个用户操作，这时候就需要用到回调函数来控制下一个操作的功能。

把一个函数的指针作为另一个函数的参数，当调用这个参数时，这个函数就叫 **回调函数** 。

```javascript
function A(callback) {
    callback();
    console.log('主函数');
}

function cb(){
    console.log("回调函数")
}
A(cb)
```

把函数整体作为参数传进去

```js
function A(callback) {
    callback();
    console.log('主函数');
}


A(function (){
    console.log("回调函数")
})
```

传参给回调函数

```js
function A(callback) {
    var str = "传递给回调的参数";
    callback(str);
    console.log('主函数');
}

A(function (str){
    //str 是接收主函数传递的参数
    console.log("主函数传递的参数为",str);
    console.log("回调函数");
})
```

在执行回调的时候确保它是个函数

```js
function Fn(options, callback) {
    if (typeof callback === "function") {
        callback(options);
    }
}
```

示例：封装each函数简化for循环

```js
function each(n,callback){
    for(var i=0;i<n;i++){
        callback(i)
    }
}

each(10,function(i){
    console.log(i)
})
```

## 递归函数

所谓的 **递归函数** 就是在函数体内调用本函数。使用递归函数一定要注意，处理不当就会进入死循环。

- 在函数内部直接或间接引用自身。
- 每个递归函数里必定会有终止条件。

求阶乘：

```javascript
function factorial(c){
  if(c == 1){
      return c;
  }else{
      return c * factorial(c-1);
  }
}
alert(factorial(5));
```

多维数组遍历：

```javascript
var new_array=[];
function _getChilds(data){
    if(typeof data != "object" || data == null){
        new_array.push(data);
    }else{
        getChilds(data);
    }
}
function getChilds(data){
    for(var i in data){
        _getChilds(data[i]);
    }
}
var json = {
    "aa" : {"l" : 1,"m" : 3},
    "bb" : 1,
    "cc" : "abc",
    "dd" : true,
    "ee" : null
}
getChilds(json)
console.log(new_array)
```

## 闭包

> 闭包是JavaScript语言的一大特点，主要应用场合为:设计私有的方法和变量。

### 什么是闭包函数?

> 理解闭包前，需要先理解 **全局作用域和局部作用域** 的区别。函数内部可以访问全局作用域下定义的全局变量，而函数外部却无法访问到函数内部定义(局部作用域)的局部变量。

- **概念**： 闭包（closure）是定义在一个外部函数内部，并且能够访问外部函数中变量的函数。
- **原理**： 作用域链

创建闭包的常见方式，就是在一个函数内部创建另一个函数并返回：

```javascript
function fun(num){
    return function (){
        return num;
    }
}
var end = fun(100);
end();  //  100
```

上述案例中，num 是fun函数内部的变量，本来只能fun函数内部使用，但是返回的函数也有权限访问num。所以在函数外部通过调用返回的函数即可得到函数内部的变量

```js
function out (){
   var n = 1;
   return function (){
       return n++;
} }
var fn = out();
console.log(fn()) //1
console.log(fn()) //2
console.log(fn()) //3
```

### 闭包三个特性

1. 函数嵌套函数
2. 函数内部可以引用外部的参数和变量
3. 参数和变量不会被垃圾回收机制回收

### 闭包的缺点

闭包的缺点就是常驻内存，会增大内存使用量，使用不当很容易造成内存泄漏。 一般函数执行完毕后，局部活动对象就会被销毁，内存中仅仅保存全局作用域。但闭包的情 况不同。

**JavaScript的垃圾回收机制**

1. 在JavaScript中，如果一个对象不再被引用，那么这个对象就会被GC回收。
2. 如果两个对象互相引用，而不被第三者所引用，那么这两个互相引用的对象也会被回收。

### 闭包小案例

那么使用闭包有什么好处呢?

1. 希望一个局部变量长期驻扎在内存中
2. 避免全局变量的污染
3. 私有成员的存在

**局部变量长期驻扎内存**

```js
function out (){
    var n = 1;
    return function (){
        return n++;
    }
}
var fn = out();
console.log(fn())
console.log(fn())
console.log(fn())
```

在循环中直接找到对应的元素的索引

```js
 <ul>
   <li>1111111</li>
   <li>1111111</li>
   <li>1111111</li>
</ul>
var lis=document.getElementsByTagName("li");
for(var i=0;i<lis.length;i++){
    (function(i){
        lis[i].onclick=function(){
            alert(i);//0 1 2
        }
    })(i)
}
for(var i=0;i<10;i++){
    setTimeout(function(){
        console.log(i);    //10
    }, 1000)
}
```

**避免全局变量污染**

但我们声明一个函数的时候其实就相当于创建一个全局变量 上一个例子中总共占有2个全局变量。

函数表达式 函数自调用:

```
(function(){
})()
 var out = (function(){
    var n1 = 1;
    var n2 = 100;
    return function(){
        n1++;
        n2--;
        return n1+n2;
} })()
out() // 1
out() // 2
```

**私有成员的存在**

模块化代码

```
var aa=(function(){
   var a=10;
   function aaa(){
       a++;
       alert(a);
   }
   function bbb(){
       a+=10;
       alert(a);
   }
   return {
      a:aaa,
      b:bbb
   }
})()
aa.a(); //11
aa.b(); //21
```

这样做的好处就是 bbb aaa 这两个函数我们在外面是访问不到的

- [JavaScript内部原理系列－闭包（Closures）](https://www.cnblogs.com/skylor/p/4721816.html)

> 由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在IE中可能导致内存泄露。

## 块级作用域

### 什么是块级作用域

JS中作用域有：全局作用域、函数作用域。没有块作用域的概念。ECMAScript 6(简称ES6)中新增了块级作用域。

块作用域由 `{ }` 包括，if语句和for语句里面的{ }都属于块作用域。

ES5没有块级作用域概念：

```js
{
  var num = 10;
}
console.log(num)    // 10

// for循环结束后，变量i依然会存在
for(var i = 10; i<5;i++){ }
console.log(i);   // 5
```

ES6的块级作用域：

```js
{
  let num = 10;
}
console.log(num)    // 报错： num is not defined

// 由于i是存在于块级作用域中，所以i只能在循环{}中使用
for(let i = 10; i<5;i++){ }
console.log(i);   // 报错： i is not defined
```

### 函数声明与块级作用域

- ES5中，函数只能在顶层作用域和函数作用域中声明，不能在块级作用域中声明。
- ES6中，在块级作用域内部声明的变量函数，其行为类似于let，即块级作用域外不可使用

```javascript
  function fun(){
    console.log("I am outside function.")
  }
  if (true) {
    function fun() {
      console.log("I am inside function.");
    }
    fun();    // I am inside function.
  }
  fun();    // I am inside function.
  'use strict'      //es6 中的运行结果
  function fun(){
    console.log("I am outside function.")
  }
  if (true) {
    function fun() {
      console.log("I am inside function.");
    }
    fun();    // I am inside function.
  }
  fun();    // I am outside function.
```

## 函数扩展

### 函数参数的解构赋值

> ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构

只需要保证实参和形参数据类型同为数组或对象，即可进行函数参数的解构赋值：

```js
function add([x, y]){
  return x + y;
}

add([1, 2]); // 3
function fun({num1:x, num2:y}) {
  return x + y;
}
fun({num1: 1, num2: 2})  // 3
```

### 箭头函数

#### 基本用法

ES6允许使用“箭头”（=>）定义函数。

```javascript
var f = v => v;
```

上面的箭头函数等同于：

```javascript
var f = function(v) {
return v;
};
```

- 如果箭头函数不需要参数，就使用一个`()`或`_`代表参数部分。
- 如果箭头函数需要多个参数，就使用一个`()`代表参数部分。

```javascript
var f = () => 5;
var f = _ => 5;
// 等同于
var f = function () { return 5 };

var sum = (num1, num2) => num1 + num2;
// 等同于
var sum = function(num1, num2) {
return num1 + num2;
};
```

如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来。

```javascript
var sum = (num1, num2) => {
    console.log(num2);
    console.log(num1);
return num1 + num2;
}

console.log(sum(1,2));     // 2  1  3
```

由于大括号被解释为代码块，所以如果箭头函数直接返回一个json，必须在对象外面加上括号。

```javascript
var person = age => ({ name: "Tom", age: age});
console.log(person(21));     //Object {name: "Tom", age: 21}
```

箭头函数可以与变量解构结合使用。

```javascript
var full = ({ name, age}) => name + '-' + age;
console.log(full({name:"Tom",age:21}));     // Tom-21
```

箭头函数使得表达更加简洁。

```javascript
const isEven = n => n % 2 == 0;
const square = n => n * n;
```

箭头函数的其中一个用处是简化回调函数。

```javascript
// 正常函数写法
var arr1 = [1,2,3].map(function (x) {
return x * x;
});
console.log(arr1);    //[1,4,9]

// 箭头函数写法
var arr2 = [1,2,3].map(x => x * x);
console.log(arr2);    //[1,4,9]
```

#### 使用注意点

1. this对象的指向是可变的，但是在箭头函数中，它是固定的。

   ```javascript
   function foo() {
   setTimeout(() => {
     console.log('id:', this.id);
   }, 100);
   setTimeout(function () {
     console.log("id:",this.id);
   },100)
   }
   
   var id = 21;
   foo.call({ id: 42 });
   //id: 42
   //id: 21
   ```

2. 不能当做构造函数

3. 箭头函数没有arguments对象

##     顶层的内置函数

> ​    顶层 直接能调用的函数 全局的函数

​    /ecmascript 自带的函数

### String();

将任何的数据类型转换为字符串 强制转换

### Number();

> 强制将某些类型转换为数值类型

* 布尔类型转换为数值类型 true：1 false ：0
* 字符串转换为数值类型 NaN not a number 必须是包含合法数值类型的字符串
* undefined NaN null:0

###  boolean(); 

> 强制的将所有的数值类型转换为布尔值 强制转换

* false :false 0 '' null undefined NaN 

* 判断一个值是不是NaN  isNaN() 是：true 否则：false

### parseInt() 函数

> parseInt() 函数可解析一个字符串，并返回一个整数。

### 隐式转换

数学计算的时候会进行类型转化

用**算术运算符** - * / % 

除了加号以外的所有算术运算符，在运算的时候都会进行隐式类型转换 Number();

**比较运算符**

转换的规则参考Number()

如果是两个字符串比较，字符串的第一个字母转换为ASCII码进行比较

判断的逻辑的时候，会进行类型转换

## 隐式类型转换

> 由于js是弱类型语言，在使用算术运算符时，运算符两边的数据类型可以是任意的。比如，一个字符串可以和数字相加。之所以不同的数据类型之间可以做运算，是因为JavaScript引擎在运算之前会悄悄的把他们进行了`隐式类型转换`

### 算数运算符类

#### - * / %

```
* 在进行算术运算，如果操作数不是数值，将会隐式的调用Number()函数，按照这个函数的转换规则进行转换
* 如果转换不成功，整个表达式返回NaN
```

#### +

```
*  任何数据类型和`字符串`相加，返回他们拼接的结果。
*  如果操作数不包含字符串，则规则同 `- * / %`
```

### 关系运算符类

- 两个操作数都是`字符串`，则比较两个字符串对应的字符编码
- 除此之外，参与比较的数据都会隐式调用`Number()`进行转换后再比较

### 逻辑运算符类

- `&& || !`运算，会调用 `Boolean()`函数判断参与逻辑运算的数据的真假性

### 语句

> `if`、`while`、`do while`语句和`三元表达式`里面的判断条件表达式会隐式的调用`Boolean()`函数，按照这个函数的转换规则，转换为相应的布尔值

```js
  // 判断一个字符串是否为空
  var str = "";
  if(str){
    console.log("str is true")
  }
```

# 数组

* 数组里面可以存放任何的数据类型
* 如果访问的下标超出数组的内容，访问的值 undefined
* 在数组里面是可以不写值， 默认的是undefined
* 如果在数组里面再放数组，形成多维度数组

函数 数组

1.写个函数 ，这个函数 数组去重

2.写个函数找出数组的最大值

3.写一个函数，通过插入排序实现数组由小到大的排序