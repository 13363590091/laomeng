#  CSS3

## CSS3 新增选择器

##### css的选择器

标签选择器 类名选择器 id选择器 群组选择器 交叉选择器 后代选择器 详细见css.md文件

##### 通用选择器 

> 通用选择器可以选择页面上的所有元素，并对它们应用样式，用 * 来表示

##### 属性选择器 

* [属性名]拥有当前属性的所有元素

* [属性名=属性值]拥有当前属性并且值为特定值的元素

* [属性名*=属性值]拥有当前属性并且值包含特定值的元素

* *= XX只要名字里面包含 XX
  ![image-20200629171151096](D:\laomeng\Typora\image-20200629171151096.png)

* [属性名^=属性值]拥有当前属性并且值以特定值开始的元素
* [属性名$=属性值]拥有当前属性并且值以特定值结束的元素

##### 子选择器 

> 选择器1 >选择器2 选择器1选中的所有元素所有的子元素中能够被选择器2选择的元素

##### 相邻选择器

* 选择器1+选择器2 **紧邻**选择器1能够选中的元素后面被选择器2能选中的元素
  ![image-20200629174328636](D:\laomeng\Typora\image-20200629174328636.png)
* 选择器1~选择器2 选择器1能够选择中的元素后面被选择器2能选中的元素

##### 根据相对位置选择

* 所有兄弟元素的相对位置 
  
  * :first-child 所有兄弟元素中的第一个元素    **<u>通常交叉使用</u>**  ep：
  
    ```
    li:first-child 
    ```
  
    
  
  * :last-child 当前所有兄弟元素中的最后一个
  
    ```
    li:last-child
    ```
    
    
    
  * :nth-child(no) no为第几个要选中的元素 ep当前所有兄弟元素中指定的位置
  
    ```
    li:nth-child(2n)   兄弟元素第偶数个
    li:nth-child(2n-1) 兄弟元素第奇数个
    li:nth-child(2)    兄弟元素的第二个
    ```
    
  * :nth-last-child 当前所有兄弟元素中指定的位置 **倒数**
    
  * only-child 选中**没有任何兄弟元素**的元素
  
* 所有**相同兄弟元素**的相对元素
  * :first-of-type 所有同类型兄弟元素中的第一个元素 
  * :last-of-type当前所有同类型兄弟元素中的最后一个
  * :nth-of-type(no) no为第几个要选中的元素 ep当前所有同类型兄弟元素中指定的位置
  * :nth-last-of-type 当前所有同类兄弟元素中指定的位置 **倒数**
  
##### 根据元素的内容进行选择
* :empty 选择没有任何子元素

##### 伪类选择器

* :link未被访问过得连接
* :hover鼠标经过时的效果 
* :active鼠标按下链接时的效果
* :visited 访问过的链接



##### 基于表单空间特性选择

* :focus 选择获得焦点的表单控件

* :enabled 选择未被禁用的表单控件

* :disabled 选择禁用的表单控件

  ![image-20200630083506605](D:\laomeng\Typora\image-20200630083506605.png)
  
##### not选择器
* :not选择器
> 选择除了被当前选择器选中的元素

![image-20200630085151698](D:\laomeng\Typora\image-20200630085151698.png)
##### selectioon选择器
* ::selection 内容当中被选中区域的样式
![image-20200630091506081](D:\laomeng\Typora\image-20200630091506081.png)
![image-20200630091522777](D:\laomeng\Typora\image-20200630091522777.png)
##### 伪元素选择器
* ::before 在当前元素之前插入另一段内容
* ::after  在当前元素之后插入另一段内容
* ::content属性必须设置，表示当前伪元素的内容
* 选择文本内容
  * :first-line 选择第一行文本内容
  * :first-letter 选择第一个字母/文字
##### CSS选择器优先级的计算规则
* 选择器优先级是靠A，B，C，D四个值进行计算，比较优先级的时候依次比较ABCD四个值的大小
  * A 如果有内联样式（行内样式）则A的值为0也就1，0，0，0
  * B 根据当前id选择器出现的次数 出现几次B就等于几
  * C 根据当前类选择器、伪类选择器、属性选择器出现的次数来计算0，0，1，0
  * D 根据标签选择器和伪元素选择器出现次数来计算
* *通用选择器是没有优先级权重的
* 当某个样式后面设置**!important** 当前的样式具备最高的优先级，比行内样式还要高
  * 如果有选择器优先级更高的选择器内给样式同样设置!important会比优先级较低的优先级高
  * 或者直接被样式后面覆盖
## CSS3新增属性  
### 容器修饰

##### border-radius 圆角

* 1个值 四个圆角相同的半径
* 2个值 左上右下     右上左下
* 3个值 左上      右上左下       右下
* 4个值 左上 右上 右下 左下
  
  * 对于每个角落 我们可以设置1个半径 也可以设置2个半径
  
* ![image-20200630101936410](C:\Users\ABC\AppData\Roaming\Typora\typora-user-images\image-20200630101936410.png)
  
    ![image-20200630102238294](C:\Users\ABC\AppData\Roaming\Typora\typora-user-images\image-20200630102238294.png)
  
  * 可以用百分比表示宽度的百分比会做为横向的半径高度的百分比会做为纵向的半径
  
  * 圆角会影响元素的边框显示但是不会影响布局

##### box-shadow
> box-shadow属性可以设置一个或多个下拉阴影的框

* box-shadow: h-shadow v-shadow blur spread color inset;

  | 值       | 说明                                               |
  | -------- | -------------------------------------------------- |
  | h-shadow | 必需的。水平阴影的位置。允许负值                   |
  | v-shadow | 必需的。垂直阴影的位置。允许负值                   |
  | blur     | 可选。模糊距离                                     |
  | spread   | 可选。阴影的大小                                   |
  | color    | 可选。阴影的颜色                                   |
  | inset    | 可选。外层的阴影（开始时）改变阴影内侧阴影（发光） |
* text-shadow 
> 用于文字

  * 用法类似 但是不能设置内阴影  
* 可以设置多组阴影-实现多重边框
* 不会对布局产生任何影响
##### outline 轮廓线
* outline和border类似 outline-style outline-width outline-color
* outline-offset 轮廓线向外偏移的值
* 不会对于布局产生任何影响
* 轮廓线不会随圆角border-radius改变
* 不会改变盒子的大小
### 背景元素的补充

##### background-clip 

> 用来调整背景图片的显示区域

* border-box 默认值
  * padding-box 
  * content-box
##### background-origin 
> 用来调整背景图片的定位原点

  * border-box 默认值
  * padding-box 
  * content-box
##### background-size 
  * 数值 -当前图片的大小

  * 百分比  

  * cover    等比例缩放图片直到能够把元素内部覆盖满为止

  * contain  等比例缩放图片直到能够把图片完整显示为止

* **背景属性可以设置多组值** 

### 图片边框

* border-image-source 图片地址
* border-image-width边框图片的宽度
* border-image-slice 对图片截取的方式
* border-image-outset 图片边框向外的偏移值
* border-image-repeat 边框部分的图片的重复方式
### 渐变色
*  ```
background-image: linear-gradient(30deg red, blue);
  background-image: linear-gradient(red, blue);
  background-image:linear-gradient(to bottom, rgba(255,255,0,0.5), rgba(0,0,255,0.5)),
  url('https://mdn.mozillademos.org/files/7693/catfront.png');
  彩虹渐变            
  background-image: linear-gradient(to right, red 0, red 20%, orange 20%, orange 40%, yellow 40%,
  yellow 60%, green 60%, green 80%, skyblue 80%);
  ```
  
  <img src="D:\laomeng\Typora\image-20200630155749729.png" alt="image-20200630155749729" style="zoom: 33%;" />
  
  * 在所有能有使用图片的地方都可以使用渐变图案表示
  * 
  * linear-gradient线性渐变
  * repeating-linear-gradient 重复线性渐变
  * radial-gradient 径向渐变
  * repeating-radial-gradient 重复径向渐变
  
### 过渡动画 transition

* transition-property 表示当前有哪些属性需要有过渡效果

* transition- duration表示当前过渡动画的持续时间

* transition-timing-function 表示过渡动画的速率函数

* linear 匀速
  
  * ease-in 加速
  
  * ease-out 减速
  
  * ease-in-out 先加速后减速
  
* cubic-bezier（）通过贝塞尔曲线设置速度变化
  
* transition-delay 表示过渡的延迟时间

* transition 对以上属性进行集合

  ![image-20200630175727208](D:\laomeng\Typora\image-20200630175727208.png)

### transform 转换\变形

##### 2D转换

  * 位移
    * translateX()
    * translateY()
    * translate()
    * 
  * 旋转
    
    * rotate(45deg)
  * 角度deg .
    
    * 弧度1rad
  * 缩放
    * scaleX
    * scaleY
    * scale
  * 同时要设置多个转换效果 用空格隔开每个转换函数就可以了。
  * transform-origin 设置位移基准点，可以设置到图形的外部。
  * 斜切
    * skewX
    
    * skewY
    
    * skew
    
      ![image-20200630175509717](D:\laomeng\Typora\image-20200630175509717.png)

##### 3D转化

  * 场景里设置 perspective 当前场景的景深
  
  * 子元素要设置transition
  
  * 位移
    * translateZ()
    * translate3d()
    * translateX()
    * translateY()
    
  * 旋转
  
  * rotateX()
  
  * rotateY()
  
  * rotateZ()
  
  * rotate3d(X,X,X,angle)
  
    ![image-20200701085635400](D:\laomeng\Typora\插图\image-20200701085635400.png)
  
* 设置元素和子元素之间的呈现方式
  
  * transform-style:preserve-3d;
* 设置观察者观察位置
  
  * perspective-origin: left right top bottom;
* 设置元素背面是否可见，默认可见
  
  * backface-visibility 
##### 帧动画
* 定义动画
  * @skyframes 
    
``` 
格式   动画名称{from{}to{}}
```


* 调用动画
  
```
      * animation-name 动画名称
      
      * animation-duration 动画的持续时间
      
      * animation-time-function 动画的速率变化趋势
      
      * animation-delay 首次动画的延迟
      
      * animation-iteration-count 动画运行的次数
      
        * infinite 无限次
      
      * animation-fill-mode 动画完成时的状态
```

![image-20200701105157278](D:\laomeng\Typora\插图\image-20200701105157278.png)

  

  

![image-20200701113453678](D:\laomeng\Typora\插图\image-20200701113453678.png)

  * animation-direction 动画播放的方式
    
    * normal
      
      > 每个循环内动画向前循环，换言之，每个动画循环结束，动画重置到起点重新开始，这是默认属性。
    
    * alternate
    
      > 动画交替反向运行，反向运行时，动画按步后退，同时，带时间功能的函数也反向，比如，ease-in 在反向时成为ease-out。计数取决于开始时是奇数迭代还是偶数迭代
    
    * reverse
    
      > 反向运行动画，每周期结束动画由尾到头运行。
    
    * alternate-reverse
    
      > 反向交替， 反向开始交替动画第一次运行时是反向的，然后下一次是正向，后面依次循环。决定奇数次或偶数次的计数从1开始。
  
  * animation-play-state 动画的播放状态

  * ```
      running
      ```

      当前动画正在运行。

      ```
      paused
      ```

      当前动画以被停止。通常这样用：

![image-20200701113614866](D:\laomeng\Typora\插图\image-20200701113614866.png)

## 弹性布局
### 容器（有的属性是给容器设置、有的给项目）

#### 主轴 

##### display:flex;

* 表示当前容器要应用弹性布局

##### **justify-content**

* 调整项目在主轴方向上分布方式 
  
  * flex-start  对齐到主轴上的起点
  * flex-end    对齐到主轴上的终点
  * center      居中到主轴上的中心
  * space-around 均匀分布主轴上的项目、 

  > 项目和项目之间的间距是项目和容器之间间距的二倍
  

 ![image-20200701153640075](D:\laomeng\Typora\image-20200701153640075.png)
  ![image-20200701153749106](D:\laomeng\Typora\image-20200701153749106.png)

* **space-between** 均匀分布主轴上的项目

  > 项目和容器之间没有间距，项目和项目之间的间距是完全相等的

![image-20200701153917275](D:\laomeng\Typora\image-20200701153917275.png)
  * **space- evenly** 均匀分布在主轴上的项目

  > 项目和项目之间的间距 与 项目和容器之间间距是相等的

  * ![image-20200701153856628](C:\Users\ABC\AppData\Roaming\Typora\typora-user-images\image-20200701153856628.png)
#### 交叉轴
##### **space-items**
    * （如果容器中只有一个或一行元素）调整一行内容在交叉轴方向上的对齐方式
      * flex-start对齐到交叉轴的起点
      * flex-end对齐到交叉轴的终点
      * center居中到交叉轴的中心
      * stretch 如果项目没有设置高度则在交叉轴方向拉伸直到占满为止
      * baseline 项目中的文字和容器中的文字基线对齐
##### **flex-wrap** 

> 调整项目的换行方式

    * no-wrap
    * wrap 普通换行
    * wrap-reverse 换行第一
##### **flex-drection** 

> 调整主轴方向(正方向或反方向)。

    * row             flex容器的主轴被定义为与文本方向相同。 主轴起点和主轴终点与内容方向相同。
    * row-reverse     表现和row相同，但是置换了主轴起点和主轴终点
    * column          flex容器的主轴和块轴相同。主轴起点与主轴终点和书写模式的前后点相同
    * column-reverse  表现和column相同，但是置换了主轴起点和主轴终点
##### **align-contant**

```
    * flex-start  对齐到主轴上的起点
    * flex-end    对齐到主轴上的终点
    * center      居中到主轴上的中心
    * space-around  均匀分布主轴上的项目
    * space-between 均匀分布主轴上的项目
    * space- evenly 均匀分布在主轴上的项目
    * stretch 如果项目没有设置高度则在交叉轴方向拉伸直到占满交叉轴为止
```



##### **flex-flow** 
  * 是flex-wrap和flex-direction的简写 

### **项目**
##### **order** 
  * 指定当前项目在所有项目中的排序 默认为0 排列方式从小到大 相同大小原始顺序
##### flex-grow 
  * 在主轴方向上的剩余空间分配中要占据几份 分配空间会被当前项目占据    默认值为0 ，1，2，3......
![image-20200701165941298](C:\Users\ABC\AppData\Roaming\Typora\typora-user-images\image-20200701165941298.png)
![image-20200701165322533](D:\laomeng\Typora\插图\image-20200701165322533.png)
##### **flex-shrink** 
  * (默认值都会缩小)当前项目在主轴方向上
##### **flex-basis** 
  * 当前项目未设置宽高的情况下，在主轴方向上占据的大小
##### **flex** 
  * 是flex-grow、flex-shrink和flex-basis 的简写
##### **align-self**
单独设置当前项目在叫交叉轴上的对齐方式

## 多栏布局

> 控制文字显示效果

* ```
  * column-width 指定当前每一栏的宽度
  * column-count 指定当前要划分几栏
  * column-gap   指定两栏之间的间距
  * column-rule  指定梁兰之剑分割线的样式
  * column-fill  指定内容的对齐方式 默认均匀分布
    * auto       自动将每一列的高度占满才换到下一列
    * balance    每一列的高度是一致的
  * column-span  设置某个元素的内容跨越多列，例如标题
  
  
  ```

### box-sizing
* :border-box;

> 让width和height变成整个容器的宽高（内容，内边距，边框）

## 字体引入和字体图标

> 在css3当中允许引入一个指定的字体文件
>

```
	@font-face{

​				font-family:"name";

​				src:url(font.ttf);

​	}
```

* 利用此特性 我们可以将项目需要的图标封装到字体文件中使用
  * 借助ai软件导出字体文件
  * 借助于在线平台 生城自定义的字体**图标库** 例如：iconfont
## 图片精灵
* 把我们要在浏览器显示的多个小图标，小图片放置一张大的图片中，目的是为了提高网页加载速度
* 核心：background-position
## 响应式布局 
* 书写一套代码，让页面可以在不同的终端设备有不同的显示效果，能够以最合理的方式去适应当前分辨率  
* 实现响应式布局原理
  * 百分比 实现流式布局
  * 媒体查询 media-query 让部分css代码只在特定的设备和分辨率范围下起作用
    * [@media 设备名  条件（查询范围）{}
    *设备名]()
    
    * screen 屏幕设备
    * print 打印设备
    * all 全部
  * 条件
    * and包括
    * or 或者
    * not排除  
  * min
  * ![image-20200702164757286](C:\Users\ABC\AppData\Roaming\Typora\typora-user-images\image-20200702164757286.png)
  * 12栅格化
    * 在网页响应式变化的过程中，对于一行浮动元素要进行方便的控制。

* 有块的属性
* display:block;float ;定位position都可以