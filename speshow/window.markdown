---
layout: speshow
title: 窗口 - SpeShow 文档
---

##窗口

SpeShow 对象有一个 `window` 属性，它代表演示程序所在的窗口，通过修改该 `window` 的属性或调用其方法，可以在一定程度上对该窗口进行操作。

***********************************************************************

<h3 id="title">标题</h3> 

使用 `window` 对象的 `title` 属性可以设置或获取窗口的标题：

<pre class="brush:js">
	ss.window.title;
	ss.window.title = 'New Title';
</pre>

***********************************************************************

<h3 id="resize">窗口大小</h3> 

通过 `window` 对象的 `width` 属性，可以获取或设置窗口的宽度：

<pre class="brush:js">
	ss.window.width;
	ss.window.width = 1024;
</pre>


通过 `window` 对象的 `height` 属性，可以获取或设置窗口的高度：

<pre class="brush:js">
	ss.window.height;
	ss.window.height = 728;
</pre>

通过 `window` 对象的 `resize` 方法，可以直接设置窗口的大小：

<pre class="brush:js">
	ss.window.resize(width, height);
</pre>

***********************************************************************

<h3 id="cursor">指针</h3> 

通过 `window` 对象的 `cursor` 属性，可以设置鼠标指针：

<pre class="brush:js">
	ss.window.cursor = 'cursor/pointer.ani';
</pre>

***********************************************************************

<h3 id="fps">FPS</h3> 

通过 `window` 对象的 `fps` 属性，可以调整帧率的显示，其中 `fps` 对象的属性如下：

{% table speshow/api/fps.csv %}

***********************************************************************

<h3 id="onexit">退出事件</h3> 

通过设置 `window` 对象的 `onExit` 属性为一个函数，可以使之在程序退出前执行：

<pre class="brush:js">
	ss.window.onExit = function(e){
		return true;
	};
</pre>

若该函数返回 `false`，则程序不会退出。

***********************************************************************

上一节：[脚本分类](script_type.html)

下一节：[屏幕](screen.html)

***********************************************************************

{% include uyan.html %}