---
layout: spengine
title: 对话框 - SpeShow 进阶指令
css:
 - shCore.css
 - shThemeKScript.css
js:
 - shCore.js
 - shBrushXML.js
 - shBrushKScript.js
 - highlight.js
---

##AVG专用组件：对话框

这里重点讲对话框。对话框是一种特殊的文字框，函数指令是 @dialogBox，其包含文字框的所有属性。其扩展功能是可以逐字显示，并由换行换页标记。

###其他参数

其他对话框独有的参数如下：

{% table spengine/tutorials/arguments_dialogbox.csv %}

###换行 换页

对话框同样使用 @addText 和 @clearText 进行内容显示。但是当这两个函数中的 content 参数中包含"\n"（换行）符号，则会自动换行。在换行的时候，文字内容停止继续显示，直到执行 @next 命令。而 @clearText 则还会添加一个换页标记，同样需要执行 @next 函数后才会继续显示。等待时会在文字末端显示换行或换页标记。

@next 的参数列表如下：

{% table spengine/tutorials/arguments_next.csv %}
     
*注意：@next 是一个立即执行的函数，请在延迟执行脚本中使用。*

###@waitDialog

@waitDialog 是另一个等待函数，执行该函数将等待指定对话框的内容显示完毕。

@waitDialog 的参数列表如下：

{% table spengine/tutorials/arguments_waitdialog.csv %}          

**********************************************************************

[上一节：文字特效](tutorial_advanced_texteffect.html)

[下一节：高级指令](tutorial_senior.html)
