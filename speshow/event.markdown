---
layout: speshow
title: 事件响应 - SpeShow 文档
---

##事件响应

事件是在某些UI交互发生的时候所触发的信号，比如鼠标点击，键盘按键，鼠标移动等。用户可以通过设置UI组件的事件处理函数来处理这些事件带来的影响，比如当用户点击组件时让组件隐藏，只需要如下设置：

<pre class="brush:js">
    // com 为一个组件对象
	com.onClick = function(e){
        this.display = false;
    }
</pre>

***********************************************************************

<h3 id="propagation">事件传递</h3>

事件的传递分为两个过程，一个是自顶向下的下沉，另一个是自底向上的冒泡。

事件发生时，将由 Screen 产生事件对象，然后从根组件开始往子孙组件深度优先地传递事件对象，若发现了合适的UI组件，则停止下沉，并自底向上冒泡地传递事件，直到事件对象返回根部。

***********************************************************************

<h3 id="event_handling">事件处理</h3>

事件的处理使用事件处理函数，事件处理函数为接受一个参数的函数如上面提到的：

<pre class="brush:js">
    // com 为一个组件对象
	com.onClick = function(e){
        this.display = false;
    }
</pre>

参数 `e` 则为事件对象，他有以下属性：

{% table speshow/obj/event.csv %}

其中键盘事件的 `key` 值见 [下方附表](#key)。

因为事件传递有两个阶段，所以事件处理也有两个阶段，在事件下沉阶段的事件处理为事件捕获，使用以 `catch` 开头的事件处理器，如 `catchClick`：

<pre class="brush:js">
    // com 为一个组件对象
	com.catchClick = function(e){
        // 处理事件
    }
</pre>

在事件冒泡阶段的事件处理为一般事件处理，使用以 `on` 开头的事件处理器，如 `onClick`：

<pre class="brush:js">
    // com 为一个组件对象
	com.onClick = function(e){
        // 处理事件
    }
</pre>

终止事件传递有两种方法，第一种是直接在处器中返回 `false`：

<pre class="brush:js">
    // com 为一个组件对象
	com.onClick = function(e){
        return false;
    }
</pre>

另一种是将事件对象的 `returnValue` 属性设为 `false`：

<pre class="brush:js">
    // com 为一个组件对象
	com.onClick = function(e){
        e.returnValue = false;
    }
</pre>

***********************************************************************

<h3 id="event_type">事件类型</h3>

事件的类型名为事件处理器 `on` 或 `catch` 后面的部分。

各个事件的解释如下：

{% table speshow/obj/event_type.csv %}

***********************************************************************

<h3 id="key"> 附：键盘事件key值对照表</h3>

{% table speshow/obj/key.csv %}

***********************************************************************

上一节：[组件](component.html)

下一节：[多媒体](multimedia.html)

***********************************************************************

{% include uyan.html %}