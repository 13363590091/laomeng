# HTML5

### HTML5概念

> 狭义：HTML发展到今天第五代版本
>
> 广义：包括HTML、CSS、js以及浏览器机制等一系列新技术集合的描述。

### HTML5 的特性
*  语义化标签(对网页的规范化)
  * 从使用上来说和div没有任何区别，但是可以让代码的可读性更高，利于开发人员的阅读和搜索引擎的读取（有利于SEO）
> SEO 搜索引擎优化 网络运营人员


##### 常用标签
和div没什么区别
  * header          头部
  * nav                 导航
  * hgroup          标题容器
  * article            文章
  * section          分节
  * figure          （图带有可选的标题）元素
  * figcaption      插入内容或图标题元素
  * aside              次要内容 
  * main              主体
  * footer            底部
  * address        地址信息
  * time              时间信息
  * progress      进度

##### 功能标签 

  * audio 播放音频  url controls
  * video 播放视频  url controls
  * canvas 画布
##### 新增全局属性

  ```html
  <!-- 隐藏元素 -->
  <div hidden>
      lorem
  </div>
  <!-- 设置元素能否被拖拽(true/false) -->
  <div draggable="true">
      lorem
  </div>
  <!-- 设置元素能否被编辑(true/false) -->
  <div contenteditable="true">
      lorem
  </div>
  <!-- data-* 自定义属性，供css和js使用 -->
  <div data-id>
  </div>
  ```

##### 表单类型

  ```html	
  <form action="#">
          <input type="email" name="email">
          <input type="url" name="url">
          <input type="date" name="date">
          <input type="time" name="time">
          <input type="week" name="week">
          <input type="month" name="month">
          <input type="datetime-local" name="datetime-local">
          <input type="search" name="search">
          <input type="color" name="color">
          <input type="number" name="number">
          <input type="range" name="range">
          <input type="submit" value="提交">
    </form>
  ```

##### 表单属性

  ```html
  <!-- form属性 指定当前控件所在的表单 -->
  <!-- 表单和表单控件不必嵌套 -->
  <form action="#" name="form1">
  </form>
  <input type="text" name="user" form="form1">
  <input type="submit">
  <!-- placeholder 设置提示文字 -->
  <input type="email" placeholder="请输入邮箱">
  <!-- autofocus 自动获得焦点 -->
  <input type="text" autofocus>
  <!-- required 表示当前的表单控件是必填项 -->
  <input type="text" required>
  <!-- pattern 用正则的方式进行验证 -->
  <input type="text" pattern="\d{18}">
  <!-- number和range类型独有
  	min 最小值
  	max 最大值
  	step 步进值
  -->
  <input type="number" min="50" max="60" step="2">
  <!-- autocomplete(on/off) 自动填充 -->
  <input type="text" autocomplete="off">
  <!-- novalidate 忽略提交表单时控件的验证 -->
  <form novalidate>
  </form>
  <!-- submit 独有 
  	重写表单属性
  	formaction 重写提交地址
  	formmethod 重写提交方式
  	formenctype 重写表单内容编码
  	formnovalidate 重写是否开启表单验证
  	formtarget 重写打开新页面的方式
  -->
  <input type="submit" value="提交到1">
  <input type="submit" value="提交到2" formaction="#1">
  ```
