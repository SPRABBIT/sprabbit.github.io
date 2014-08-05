---
layout: speshow
title: 屏幕 - SpeShow 文档
---

##屏幕

屏幕是容纳UI组件的基本单位，一切可视化的组件都只能在屏幕展示，类似于一张画布。使用 SpeShow 方法 `createScreen` 可以创建一个屏幕：

<pre class="brush:js">
	var screen = ss.createScreen(opt);
</pre>

其中 `opt` 为配置对象，其属性可以为下值：

{% table speshow/api/createScreen.csv %}

函数返回一个 `screen` 对象，他有以下属性：

{% table speshow/obj/screen.csv %}

创建完毕后可以使用 SpeShow 方法 `getScreenById` 方法来获取一个已知id的屏幕：

<pre class="brush:js">
	var screen = ss.getScreenById(id);
</pre>

{% table speshow/api/getScreenById.csv %}

***********************************************************************

<h3 id="root">根组件</h3>

Screen 对象的 `root` 属性是一个基本UI组件对象，他代表了整个屏幕组件树的根节点，类似于HTML的document节点，只有该组件的后代组件才会被绘制到屏幕上。有关UI组件可参看 [组件文档](component.html)。

***********************************************************************

<h3 id="focus">聚焦</h3>

一般来说，如果存在多个 Screen ，那么只有位于顶部的 Screen 才会被显示（PopUp除外）。Screen 对象提供一个 `focus` 方法，来让该 Screen 被提前到所有屏幕的顶部：

<pre class="brush:js">
	screen.focus();
</pre>

***********************************************************************

<h3 id="capture">截图</h3>

使用 Screen 的 `capture` 方法可以将 Screen 当前显示的内容截取到图像文件中保存：

<pre class="brush:js">
	screen.capture(opt);
</pre>

若 `opt` 为字符串，则屏幕将截图保存为该路径的文件。若 `opt` 为对象，则其可以有下列属性：

{% table speshow/api/capture.csv %}

本方法支持保存为 `jpg`、`png`、`bmp` 等主流图形格式。

***********************************************************************

<h3 id="create_component">创建组件</h3>

使用 Screen 对象的 `createComponent` 方法可以创建并返回一个UI组件：

<pre class="brush:js">
	var com = screen.createComponent(opt);
</pre>

其中 `opt` 的属性出了可以指定 `type` 属性为特定UI组件类型外，其他属性与UI组件的属性一致，而UI组件的相关属性在 [组件文档](component.html) 中有详细的介绍。

除此之外，还可以用 `getComponentById` 方法获取一个特定ID的组件对象：

<pre class="brush:js">
	var com = screen.getComponentById(id);
</pre>

***********************************************************************

上一节：[窗口](window.html)

下一节：[组件](component.html)

***********************************************************************

{% include uyan.html %}