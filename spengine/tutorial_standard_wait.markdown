---
layout: spengine
title: 等待 - SpeShow 基本指令
css:
 - shCore.css
 - shThemeKScript.css
js:
 - shCore.js
 - shBrushXML.js
 - shBrushKScript.js
 - highlight.js
---

##等待

如果您只使用以上提及的命令，那么您的程序将只显示最终的结果。因为程序在一瞬间便将您输入的所有引擎系统命令执行完毕。

如果你需要让你的命令逐个执行，而且命令与命令之间有时间间隔，那么您需要使用等待命令。等待命令包括 @waitClick 和 @waitTime 还有下一节才会使用到的 @waitDialog。

###waitClick

顾名思义，就是等待鼠标左键点击，当程序遇到此命令时会暂停继续执行，直到用户点击鼠标。

@waitClick 的格式如下：

<pre class="brush: ks">
// 最简形式
@waitClick;

// 完整参数列表
@waitClick{component:"组件名"};
</pre>

{% table spengine/tutorials/arguments_waitclick.csv %}

*SpeShow 0.9* 以后版本支持component参数。
填写该参数将以该component为基准等待鼠标点击，即类似取代该component的catch_click响应脚本，只有被该组件捕获到鼠标点击，才能结束等待。
若不填写component，则该waitClick拦截所有鼠标点击，即其他组件不可能获取到鼠标点击。

###waitTime

顾名思义，就是等待一段时间，当程序遇到此命令时会暂停继续执行，直到经过所设置的时间。

@waitTime 的格式如下：

<pre class="brush: ks">
// 完整参数列表
@waitTime{ 
    time: 		数值
}
</pre>

其参数说明如下：

{% table spengine/tutorials/arguments_waittime.csv %}

###wait

@wait包括了上述两个函数的功能，只要满足其一，就会停止等待。

@wait 的格式如下：

<pre class="brush: ks">
// 完整参数列表
@wait{ 
    time: 		数值
    click:		布尔值
    component:	组件名
}
</pre>

其参数说明如下：

{% table spengine/tutorials/arguments_wait.csv %}

**********************************************************************

[上一节：列表](tutorial_standard_list.html)

[下一节：退出](tutorial_standard_exit.html)