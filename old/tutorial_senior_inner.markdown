---
layout: spengine
title: 内部脚本 - SpeShow 高级指令
css:
 - shCore.css
 - shThemeKScript.css
js:
 - shCore.js
 - shBrushXML.js
 - shBrushKScript.js
 - highlight.js
---
               		
##内部脚本

内部脚本是一种延迟执行脚本的方式。

###@script

我们通过 @script 函数执行内部脚本，期参数列表如下：

{% table spengine/tutorials/arguments_script.csv %}            

与 @include 不同，当程序执行到 @script 函数时，不会直接执行里面定义的脚本，而是生成一条引擎系统命令，当引擎执行到该命令时再执行其中定义的脚本。有了这个函数我们就可以让系统在需要时再进行if分支判断，从而实现游戏分支。

###@var

@var 用于定义并初始化内部脚本中的变量。如果变量已存在，则不会发生变化，否则按照 @var 的参数列表初始化变量。经过 @var 定义的变量与普通变量的不同之处在于，在使用退出游戏前，@var 定义的变量将保存下来，而一般变量不会。

@var 的参数列表用于定义变量，参数名为需要定义的变量名，参数值为要设置的变量值。

**********************************************************************

[上一节：预执行脚本](tutorial_senior_pre.html)

[下一节：事件响应脚本](tutorial_senior_listener.html)
