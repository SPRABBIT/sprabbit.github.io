---
layout: spengine
title: 跳转脚本 - SpeShow 高级指令
css:
 - shCore.css
 - shThemeKScript.css
js:
 - shCore.js
 - shBrushXML.js
 - shBrushKScript.js
 - highlight.js
---
               		
##跳转脚本

脚本跳转也是延迟执行的一种方法。

####@goTo

当引擎执行到 @goTo 命令时，会进行脚本跳转。@goTo 的参数如下：

{% table spengine/tutorials/arguments_goto.csv %}

若不设置tag参数，脚本将跳转到file所指定的脚本的开头。

####@tag

@tag 只是用来设置标签的函数，不对引擎做任何操作。其参数如下：

{% table spengine/tutorials/arguments_tag.csv %}

同一个文件内设置的标签名必须唯一，否则只能跳转到第一次出现该名称标签的地方。

**********************************************************************

[上一节：事件响应脚本](tutorial_senior_listener.html)

[下一节：高级用途](tutorial_professional.html)
