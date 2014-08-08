---
layout: speshow
title: SpeShow 模块 - SpeShow 文档
---

##SpeShow 模块

在JS脚本中，用户通过 SpeShow 模块来调用 SpeShow 的接口，引用SpeShow模块的写法如下：

<pre class="brush:js">
	var ss = process.binding('speshow');
</pre>

这句代码所做的是绑定 SpeShow 模块到变量 `ss` 中，这样我们就可以通过变量 `ss` 来调用 SpeShow 的接口，当然你也可以使用别的变量名，但是下文默认使用 `ss` 作为 SpeShow 模块变量。

下面介绍 SpeShow 模块的几个基本接口。

********************************************************************

<h3 id="jump">脚本文件引入及跳转</h3>

在 SpeShow 中除了可以像 Node.js 那样引用模块文件外，SpeShow 模块还提供了引用其他脚本文件的方法。

#### include

include 方法用于直接引入另一个脚本文件的内容，相当于将另一个文件的代码插入到当前位置，类似于执行一个函数。注意引用文件的路径为相对路径，即相对于 `SpeShow.exe` 的路径，如 `init.js`、`script/logo.js` 等。

##### 用法

<pre class="brush:js">
	ss.include('filename');
</pre>

##### 参数

{% table speshow/api/include.csv %}

#### goto

goto 方法用于跳转到另一个文件，换而言之将跳出当前作用域，并重新运行一个新的文件。跳转指令一般用于队列脚本，有关队列脚本的介绍请查看 [脚本分类](script_type.html) 章节。

##### 用法

<pre class="brush:js">
	ss.goto({file: 'filename', tag: 'tagname');
</pre>

##### 参数

该方法的参数为一个对象，其属性值为：

{% table speshow/api/goto.csv %}

#### addTag

addTag 方法用于在队列脚本中插入一个标签，插入标签后使用 `goto` 方法可以直接跳转到标签位置，而省略标签之前的队列脚本。

##### 用法

<pre class="brush:js">
	ss.addTag(tagname);
</pre>

##### 参数

{% table speshow/api/addTag.csv %}

********************************************************************

<h3 id="queue_func">队列函数</h3>

队列函数是一些需要按顺序执行的函数，有关队列脚本的介绍请查看 [脚本分类](script_type.html) 章节。

#### addCommand

通过接口 `addCommand` 来添加一个队列函数。

##### 用法

<pre class="brush:js">
	ss.addCommand(func);
</pre>

##### 参数

{% table speshow/api/addCommand.csv %}

********************************************************************

<h3 id="register_font">注册字体</h3>

非系统默认字体需要注册后才能被文字框组件使用，注册字体文件使用 `registerFont` 方法。

#### registerFont

通过接口 `registerFont` 来注册一个字体文件。

##### 用法

<pre class="brush:js">
	ss.registerFont(opt);
</pre>

##### 参数

其中配置对象 `opt` 可以有以下属性：

{% table speshow/api/registerFont.csv %}

********************************************************************

<h3 id="variable_type">系统变量与屏幕变量</h3>

一般使用 `var` 声明的变量，在程序退出后便会丢失，如果需要持久化某些数据，则需要使用系统变量或状态变量。

#### sysVar

系统变量指的是程序退出后，再重新加载不会丢失的变量。实际上系统变量是通过将值赋给 `ss.sysVar` 对象的属性来实现保存的。通过使用后面提到的状态保存方法，可以实现重启程序后数据不丢失。

##### 用法

<pre class="brush:js">
	ss.sysVar.[VariableName] = [Value];
</pre>

#### 屏幕变量

屏幕变量是指与屏幕相关的变量，屏幕的相关介绍请查看 [屏幕文档](screen.html)。屏幕变量是通过将值赋给屏幕对象的属性来实现的，然后使用后面的状态保存方法，可以做到保存屏幕变量，使得读取状态后屏幕对象仍包含该属性。

##### 用法

<pre class="brush:js">
	ss.screen.[VariableName] = [Value];
</pre>

********************************************************************

<h3 id="state_saving">状态保存</h3>

状态保存或恢复通过使用以下方法实现。

#### saveSystemData

保存系统状态，该方法会保存 `ss.sysVar` 对象，以及脚本的已读标记。

##### 用法

<pre class="brush:js">
	ss.saveSystemData(filename);
</pre>

##### 参数

{% table speshow/api/saveSystemData.csv %}

#### loadSystemData

读取系统状态，该方法会读取 `ss.sysVar` 对象，以及脚本的已读标记。

##### 用法

<pre class="brush:js">
	ss.loadSystemData(filename);
</pre>

##### 参数

{% table speshow/api/loadSystemData.csv %}

#### saveState

保存屏幕状态，该方法会保存屏幕对象，以及队列脚本。

##### 用法

<pre class="brush:js">
	ss.saveState(opt);
</pre>

##### 参数

其中若opt为字符串，则将所有屏幕保存到该字符串的文件中。

若opt为对象，则其属性为：

{% table speshow/api/saveState.csv %}

#### loadState

读取屏幕状态，该方法会读取屏幕对象，以及队列脚本。

##### 用法

<pre class="brush:js">
	ss.loadState(filename);
</pre>

##### 参数

{% table speshow/api/loadState.csv %}

注意所保存的队列脚本为当前队列中正在执行或未执行的脚本，保存方式为将队列脚本函数转化为函数字符串保存，读取时再转成函数。因此，*保存队列脚本函数不会保存其引用的自由变量值（闭包），若引用到自由变量将会当成全局变量来处理*，因此除非你对脚本的执行逻辑有足够的认识，否则不建议在队列脚本中使用闭包。

********************************************************************

 上一节：[JavaScript](javascript.html)

 下一节： [脚本分类](script_type.html)
 
***********************************************************************

{% include uyan.html %}