---
layout: speshow
title: SpeShow 模块 - SpeShow 文档
---

##SpeShow 模块

文档待更新

<pre class="brush:js">
	var ss = process.binding('speshow');
</pre>

<h3 id="jump">脚本文件引入及跳转</h3>

<pre class="brush:js">
	ss.include('filename');
</pre>

<pre class="brush:js">
	ss.goto({file: 'filename', tag: 'tagname');
</pre>

<h3 id="queue_func">队列函数</h3>

<pre class="brush:js">
	ss.addCommand([Function]);
</pre>

<h3 id="variable_type">系统变量与状态变量</h3>

<pre class="brush:js">
	ss.sysVar.[VariableName] = [Value];
</pre>

<pre class="brush:js">
	ss.screen.[VariableName] = [Value];
</pre>

<h3 id="state_saving">状态保存</h3>

<pre class="brush:js">
	ss.saveState();
	ss.loadState();
</pre>

<pre class="brush:js">
	ss.saveSystemData();
	ss.loadSystemData();
</pre>

********************************************************************

 上一节：[JavaScript](javascript.html)

 下一节： [脚本分类](script_type.html)
 
***********************************************************************

{% include uyan.html %}