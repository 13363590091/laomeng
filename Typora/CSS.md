# CSS

## CSS概念

> **层叠样式表** (Cascading Style Sheets，缩写为 **CSS**），是一种 [样式表](https://developer.mozilla.org/zh-CN/docs/DOM/stylesheet) 语言，用来描述 [HTML](https://developer.mozilla.org/zh-CN/docs/HTML) 或 [XML](https://developer.mozilla.org/zh-CN/docs/XML_介绍)（包括如 [SVG](https://developer.mozilla.org/zh-CN/docs/SVG)、[MathML](https://developer.mozilla.org/zh-CN/docs/Web/MathML)、[XHTML](https://developer.mozilla.org/zh-CN/docs/XHTML) 之类的 XML 分支语言）文档的呈现。CSS 描述了在屏幕、纸质、音频等其它媒体上的元素应该如何被渲染的问题。

## CSS创建

* 文本类型的文档后缀名设置.css就可以
* 通过文本编辑器直接创建
## CSS打开
* css的运行是基于HTML的，一般只需要在HTML文件中引入或者嵌入css的代码，在浏览器中打开HTML,浏览器就会自动解析识别css代码。
## CSS编写
### css的引用方式
* 外部引入的方式 link标签<link rel = " "href="">
* 页面内插入<style></style>
* 标签内部设置行内样式< div style="color=red;"></div>
* 在css代码中进行导入 @import url()

### css选择器

>  选择当前样式规则要控制的标签

* 选择器的格式 选择器{样式}
* 选择器分类
  * 标签选择器  标签：{}
  * 类名选择器 .类名{}
    
> 标签的类名可以有多个 多个类名之间可以用空格隔开

  * id选择器 #id{}
  * 群组选择器  选择器，选择器2，选择器3{}（多个选择器组合）
  * 交叉选择器  标签名.类名{} 标签名#id{}  .类名.1类名2{}
![image-20200622163017116](C:\Users\Fengjinlong\AppData\Roaming\Typora\typora-user-images\image-20200622163017116.png)
  * 通配选择器：选择页面中所有元素 *{}
  * 后代元素选择器（祖先元素 后代元素）  
    ![image-20200622162831149](C:\Users\Fengjinlong\AppData\Roaming\Typora\typora-user-images\image-20200622162831149.png)
    ![image-20200622162841938](C:\Users\Fengjinlong\AppData\Roaming\Typora\typora-user-images\image-20200622162841938.png)
    
* 层叠性
  
  * 多个选择器可以同时对一个元素进行样式控制的
* 优先级
  > 层叠性会产生一个问题 样式冲突 当样式冲突后如何解决
  * 标签名交叉id > id选择器 > 标签名交叉类名 > 类名选择器 > 标签名选择器(暂时这样比较)
  * 选择器选择的越精确 优先级越高
  * 组合使用某些选择器一定比单独使用某个选择器优先级高

### css样式
* 格式 ：样式名：样式值；
* 文字样式
  * **Color:red**;     文字颜色      
    * 颜色名   
    
    * 十六进制  0 1 2 3 4 5 6 7 8 9 A B C D E F 16^0X15+16^1X15=255
    
    * 数值    rgb（0~255，0~255,0~255）;
  * **font-family:"" ** 字体的设置 可以设置多个
  * **font-size:Xpx**;  字体大小 
  * **fontstyle**:(文字倾斜)italic;
  * **font-weight**:bold 或者50px 数值，字体加粗
  * **font-bariant:small-caps **; 控制英文的字体 small-caps英文字母大写
  * **text-docoration**: line-thorugh;
    ![image-20200622173816727](C:\Users\Fengjinlong\AppData\Roaming\Typora\typora-user-images\image-20200622173816727.png)
  * **text-align**:left 、right 、center; 文字居中 文		字左对齐
  * **line-height** : 行高 行高和容器一样高 就可以**实现垂直居中**
* 布局样式 
##### width 宽度
* 值 数值 百分比 相对于父元素的宽度占比
* auto不设置 宽度会自适应父元素的宽度 父元素加padding 也不会超出父元素（当前元素宽度加上边框加上内边距加上外边距会等于父元素宽度）
##### height 高度
* 值 数值 百分比 相对于父元素的宽度占比
* auto 不设置高度会由子元素撑开
##### border 边框（复合样式）(是可以分方向来设置边框的)
* boder-width(复合样式)
  * border-left-width
  * border-right-width
  * boder-top-width
  * boder-bottom-width
* boder-style(复合样式)
  * border-left-style
  * border-right-style
  * boder-top-style
  * boder-bottom-style
* boder-color(复合样式)
* border-radius 当前矩形的圆角半径
##### margin 外边距（复合样式）
* margin-top
* margin-bottom
* * margin-left
* margin-right
  * 设置一个值 上下左右都是这个值
  * 设置两个值 30 50 上下三十 左右五十
  * 设置三个值 30 50 80 上 30 左右 50 下 80
  * 设置四个值 30 50 80 100 上 右 下 左
  * **容器自动居中 margin:0 auto; **
* 调整元素和元素之间的间距
* 也可以用于调整子元素和父元素之间
##### padding 内边距（复合样式 ）
* padding-left     左内边距
* padding-right    右内边距
* padding-bottom   下内边距
* padding-top      上内边距
* padding 和 margin写法上没多大区别
  ![image-20200623094540773](C:\Users\Fengjinlong\AppData\Roaming\Typora\typora-user-images\image-20200623094540773.png)
* 只是用于父元素和子元素之间 只设置给父元素
##### float浮动属性
  * left设置了浮动的元素依次从左到右进行排列
  * right设置了浮动的属性依次从右到左进行排列
  * 浮动是用来让多个块元素在一行当中显示的 需要在一行显示的块元素都需要添加浮动属性
  * 浮动会脱离文档流（通俗的理解：会浮动上层）（没有设置浮动属性的元素会对设置属性的元素视而不见） 
  * 设置了浮动的元素在之前元素不是浮动元素的情况下，在能在当前行显示  红色没有设置浮动元素![image-20200623112721630](C:\Users\Fengjinlong\AppData\Roaming\Typora\typora-user-images\image-20200623112721630.png)
  * 浮动元素是受父元素的限制的
  * 如果当前容器的宽度不足以防置全部的浮动元素，多出来的元素则会换行显示
  * 行元素和行内块级元素设置浮动之后会具备块元素的特性 可以设置宽高、不再识别标签间空格
  * 浮动元素是不会把没设置高度或高度设置auto的父元素自动撑开
    * 办法：给父元素设置高度
    * 在浮动元素的最后面添加一个空的div 在这个div中设置style:"clear:both"（清楚浮动的影响）
  * 浮动元素可以和行元素在一行显示的
##### backgound 背景属性
* background-color     设置容器背景颜色
* background-image     背景图片地址url() 
* background-repeat    调整背景图片的重复方式
  * no-repeat  不重复
  * repeat-x   在x轴方向重复
  * repeat-y 	 在y轴方向重复
  * repeat默认值全部重复
* background-position
  * left right top bottom center 两两组合五个值确定九个位置  如果只设置一个另外一个值默认为center
![image-20200624110931301](C:\Users\Fengjinlong\AppData\Roaming\Typora\typora-user-images\image-20200624110931301.png)
  * 数值 x轴偏移 y轴偏移  可以为负值
  * 百分比 x轴偏移百分比 y轴偏移百分比
* background-attachment 设置当前背景图片是否要固定到窗口的某个位置（也就是不随着滚动条的滚动而滚动） 属性值 fixed
* 所有的都可以整合到background里
![image-20200624113119995](C:\Users\Fengjinlong\AppData\Roaming\Typora\typora-user-images\image-20200624113119995.png)
##### opacity 
* 当前元素的不透明度 0 完全透明 1 完全不透明 0~1
##### overflow 
> 处理内容超出当前范围后的显示效果

* 属性值
  * visible   超出后依然可见
  * hidden    超出后隐藏
  * scroll    通过滚动条进行滚动显示（在ie浏览器中会始终显示滚动条栏）
  * auto      如果高度未超出容器 不显示 高度超出才显示滚动条栏
* overflow-x单独控制横向超出的显示效果
* overflow-y单独控制纵向超出的显示效果
##### display 

> 转换元素的特性
* 属性值
  * block          转化为块元素
  * inline-block   转换为行内块级元素
  * inline         转换为行元素
  * 
##### 文字样式的特性
* 所有的文字样式都具备继承性 继承样式的优先级没有默认样式的优先级高
  * 除了文字样式以外的其他样式，可以通过设置inherit 实现继承效果
* 所有的css属性并不是在每一种标签中都通用的
  * width height text-align 在行标签是不起作用的
  * margin-top margin-bottom 在行元素中不起作用
### css注释
/* ...  */
### margin-top bug问题
* 某个元素如果没有上边框
* 也没用上内边距（padding-top）
* 他的第一个子元素
* 没有浮动属性的情况下
* 子元素设置的margin-top就会作用到他的父元素上
  * 解决办法 **让其中一个条件不成立**

