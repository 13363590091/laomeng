# HTML基础

### HTML 含义

Hyper Text Markup Language （超文本标记语言）在普通文本的基础上提供一些特性。

### HTML 创建

* 任意的文本类型文件只要把后缀名变为.html .htm 就可以直接变成一个html文件

* 通过编辑器直接创建

### HTML 运行
* 直接双击就可以在当前电脑的默认浏览器打开
* 通过编辑器进行网页运行
  * vs code 需要安装 open in browser
* 打开以后就在修改网页并保存之后就可以直接刷新浏览器
### HTML 编写
#### 标签

> **标签(标记)**以尖括号的方式，包裹的一对、或者;一个单词，让普通文本能够具备更多的特性的结构。

* 标签(一通过单词或者用途来称呼每一 个标签)、
  * **div标签**            区块标签
  * **span**                普通的行标签
  * **link**                  引入文件
    * rel                        指定当前引入的什么文件
    * href                     文件的地址
  * **b标签**               可以让当前文本加粗
  
  * **i标签**                可以让当前文本倾斜
  
  * **s标签**               可以让当前文本加删除线
  
  * **u标签**               可以让当前文本加下划线（一般链接比较常用）
  
  * **h1~h6标签**      可以把当前文本变为一级到六级标题
  
  * **p标签**               段落文字
  
  * **pre标签 **          -预格式文本标签   可以识别空格和回车换行字符（本身的字体也会变小）
  
  * **hr标签**             水平分割线
  
  * **br标签**             进行文本换行
  
  * **b标签**               加粗
  
  * **i标签**                倾斜
  
##### a标签

  * **a标签**               网页链接标签
    
    * href 表示链接的地址（特有的属性）
      * URL 网址 eg：http://www.baidu.com
      * 当前项目中的文件
        * 绝对地址      （具体的路径）根据目标文件在系统的目录位置
        * 相对地址         通过目标文件和当前文件的相对位置来指定
          * 同一文件夹下 ** ./目标文件的名字 **
          * 目标文件在当前文件在当前文件同级的目录下:  ** 同级目录/目标文件的名字**
          * 目标文件在当前文件的上级目录中：**../目标文件的名字  ** 如果是上上级目录 则是**../../目标文件名字**
          * 目标文件在当前文件的上级目录的同级目录中：**../目录名称/目标文件**
    * target 用来指定链接页面的打开方式 
      * _self (默认值) 当前页面去打开新页面
      * _blank 在新标签页中打开新页面
      * 其他值 指定的窗口中打开
    * 锚链接 在进行页面跳转的时候额外的携带一些页面滚动位置的信息
      * 在当前页面内
        * ```html
          < a name="top"></a>
          ```
        ```
        
          指定锚点
        
        * ```html
          <a href="#top">跳转到顶部</a>
        ```
        
          跳转到指定的锚点
      * 从其他页面进入 也可以通过地址+#锚点直接进入目标文件的指定文件
        
        * ```html
          <a href="demo1.html#middle">中部</a>
          ```

##### img标签

  * img 图片标签 用来向网页内引入一张图片
    
    * src    指定要引入图片的地址

    * alt    指定当图片引入失败的时候 网页当中提示文字

    * width  指定图片的宽度 只设置宽度的时候 高度会自动调整

    * height 指定图片的高度 只设置高度的时候 宽度会自动调整

    * border 指定图片边框粗细

##### 列表(有序 无序)

  * ul+li 用来表示无序列表ul标签内部必须使用li标签 li标签外部必须使用ul标签

    * ul type属性设置当前列表标记的样式

      * 空心圆 ciecle

      * 方框   squre

      * 实心圆 disc

  * ol+li 用来表示有序列表 ol内部必须使用li标签 li标签外部只能使用ol标签

  * dl+dt+dd 自定义列表 dl外层容器 dt表示列表项的标题 dd 表示列表项的内容

##### table标签

  * table+tbody+thead+tfoot+tr+th/td+caption

    * table 用来表示整个表格容器

      * width   宽度

      * height  高度

      * border  边框   (borderColor边框颜色 单词、十六进制、rgb色域)

      * bgcolor 背景颜色

      * algin    当前表格的水平对齐方式

        * left   左对齐

        * center 居中

        * right  右对齐

        * cellspacing 单元格之间的空隙 

        * cellpadding 单元格内容之间的距离
* caption 设置表格的标题
    * thead   表示表格头部
* tbody   表示表格的主体
    * tfoot   表格表格底部
* tr      表示表格中的一行
  
  * height  当前一行的高度
    
  * bgcolor 当前一行的背景颜色
      * align 当前单元格的文字水平对齐
    * left center right
      * valign 当前单元格的文字垂直对齐
    * top middle bottom
      * colspan 合并同一行的单元格需要把被合并的单元格删掉
      * rowspan 合并不同行的单元格
    * td      表示表格中的单元格
##### form表单
* form             表示一组表单的容器
    * action          表示表单提交的地址
    * method          表示表单提交到方式
    * enctype         表示表单内容的组合方式
  * input          表示某个表单控件
    * type            指定当前input表单控件的类型
      * text          表示普通文本输入框
      * password      表示密码输入框
      * radio         表示单选
      * checkbox      表示多选输入框
      * file          表示一个文件的上传
      * hidden        表示隐藏域
      * submit 提交按钮
      * reset 重置按钮
      * button 普通按钮
    * name         表示提交给后台的字段名
      *复选框的name值后面必须跟上[]结束 
    ![image-20200622094529438](C:\Users\Fengjinlong\AppData\Roaming\Typora\typora-user-images\image-20200622094529438.png)
    * id   
    * value 
      * 文本框 密码框->默认值
      * 单选框 复选框-> 该选项被选中时提交给后台的字段值 
      * 按钮-> value表示当前按钮表示的文字        
    * size 指定长度
      * 用于文本框和密码框 按照字符的个数来计算的
    * maxlength 表示内容的最大长度
      * 用于文本框和密码框 
    * checked 表示默认被选中
      * 用于单选复选框
    * selected  表示选项默认选中状态
![image-20200622103829994](C:\Users\Fengjinlong\AppData\Roaming\Typora\typora-user-images\image-20200622103829994.png)
![image-20200622103843801](C:\Users\Fengjinlong\AppData\Roaming\Typora\typora-user-images\image-20200622103843801.png)
    * disable 禁用
    * readonly 只读
  * textarea       表示文本域表单控件
    * rows 表示默认多少行
    * cols   表示默认多少列
  ![image-20200622102816587](C:\Users\Fengjinlong\AppData\Roaming\Typora\typora-user-images\image-20200622102816587.png)
    
  * select+option  表示下拉表单控件
    * size         同时显示几个选项
    * multiple 表示是否可以多选
    * value      如果没有设置value值 则默认传入的值为option中的值

  * button         表示按钮控件
* label          表示某个表单的标题在html中<br><label>标签通常和<input>标签一起使用，<label>标签为input元素定义标注  <br>**格式**<label for="关联控件的id" form="所属表单id列表">文本内容</label><br>关联控件的id一般指的是input元素 的id；
  ![image-20200622095100282](C:\Users\Fengjinlong\AppData\Roaming\Typora\typora-user-images\image-20200622095100282.png)
  * fieldset       表示表单控件的分组
* 开始标签结束标签对于特定的内容需要设置特殊样式可以把内容放置到开始标签和结束标签的中间，结束标签在单词前会多一个斜杠
* 编辑器的快捷键标签名+tab键可以快速标签结构
* 普通标签对于文本内容的多个空格和换行是不识别的
##### 标签的分类
  * 按照写法 

    * 单标签 br hr

    * 双标签  b i s u h1~h6 p pre...(双标签用来包裹文字)

  * 按照特性

    * 行标签 可以和其他行标签共享一行一行位置不够会自动换行  不能设置宽高b s i u br a
    
    * 块标签 不能直接和其他标签共享一行 每一个标签都要单独占据一行 可以设置宽高h1 ~h6 p 
    
    * 行内块标签 可以和其他行标签或者行内块级标签共享一行 可以设置宽高 img input textarea

##### 标签嵌套

* 标签内容可以是其他标签

* 块标签当中可以使用行标签 

* 行标签当中不能直接嵌套块标签 

* 行标签和行标签之间可以随意嵌套

* 块标签和快标签之间一般是可以相互嵌套

* 部分特殊标签不能随意嵌套

  * p标签当中一般只能嵌套行标签 
  * ul/ol 里面只能使li
  * dl里面只能是dt和dd
  * table里面只能是thead tbody tfoot cption tr
  * tr 里面只能有 td 和 th

#### **属性** 

>  用于开始标签的内部 用来指定当前标签某些方面的特定规则。

* 格式   <标签 属性名1=属性值 属性名2 = 属性值2 ...>内容</标签>

#### **注释** 

> 对于当前代码的注释和说明，只有开发人员需要查看。

* <!--注释内容-->

####  实体
部分不方便直接在html中做为内容输出的符号会通过特殊的方式表示

|\&lt; | 表示左尖括号 | <    |
| ----- | ------------ | ---- |
| \&gt; | 表示右尖括号 | >    |
| \&quot; | 表示引号 | “    |
| \&amp; | 表示符号 | &    |
| \&apos;  | 表示撇号 | ' |
| \&copy; |表示版权(copyright)| © |
| \&reg; | 表示注册商标 | ® |
| \&trade;  |表示商标| ™ |
| \&times; | 表示乘号 | ×|
| \&divide;| 表示除号  | ÷ |
| \&nbsp;| 表示空格  |   |



### 网页的主体结构
  * 文档声明（告诉浏览器当前正在解析的是什么文档）<! DOCTYPE html>
  * html    开始标签
    * head   开始标签（放置网页基础的设置 标题 编码 语言 关键词...)
    * meta   标签 设置具体的属性
    * title     设置标题
    * head   结束标签
    * body   开始标签（放置网页具体的内容）
    * body   结束标签
  * html    结束标签
