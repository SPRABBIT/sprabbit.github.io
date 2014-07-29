---
layout: spengine
title: 屏幕 - SpeShow 基本指令
css:
 - shCore.css
 - shThemeKScript.css
js:
 - shCore.js
 - shBrushXML.js
 - shBrushKScript.js
 - highlight.js
---

##屏幕

我决定从“屏幕”（screen）开始讲起，因为屏幕是 UI 的基础，没有屏幕，什么都显示不了。虽说是叫“屏幕”，但是跟显示器荧屏是不一样的概念。在 SpeShow 里的屏幕更像是一个画布，所有的组件都将绘制到画布上，没有画布，您就不知道应该将东西画到哪了。

屏幕的引擎系统函数格式如下：

<pre class="brush: ks">
// 完全参数列表
@screen{
	name: "屏幕名"
    pop_up: 布尔值
}

// 必要参数列表
@screen{
	name: "屏幕名"
}
</pre>

本函数的功能除了创建屏幕之外，还包括把已创建的屏幕调到最前端显示。

参数相关说明如下：

{% table spengine/tutorials/arguments_screen.csv %}


**********************************************************************

[上一节：SpeShow 基本指令](tutorial_standard.html)

[下一节：基本组件](tutorial_standard_component.html)
