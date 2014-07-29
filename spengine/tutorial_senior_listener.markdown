---
layout: spengine
title: 事件响应脚本 - SpeShow 高级指令
css:
 - shCore.css
 - shThemeKScript.css
js:
 - shCore.js
 - shBrushXML.js
 - shBrushKScript.js
 - highlight.js
---
               		
##事件响应脚本

事件响应脚本是在某些UI事件发生的时候所触发的脚本执行。因为是有事件的时候才会执行，所以事件响应脚本也是一种内部脚本，延迟执行。设置响应脚本的方法是在设置UI组件时设置事件响应参数。

各个事件参数的解释如下：

{% table spengine/tutorials/arguments_event.csv %}

事件的响应顺序是自顶向下，即上层（layer）组件若处理了组件，则下层组件不接收事件；父组件接收到事件，子组件才能接收到事件；子组件处理了事件，相当于父组件处理了事件。只有`on_mouse`、`on_mouse_in`、`on_mouse_out`这三个事件比较特殊，即使事件被其他组件处理，这三个函数依然会响应。

以下是响应键盘按键的XXX的键名取值表：

{% table spengine/tutorials/arguments_key.csv %}

**********************************************************************

[上一节：内部脚本](tutorial_senior_inner.html)

[下一节：跳转](tutorial_senior_jump.html)
