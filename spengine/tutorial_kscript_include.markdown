---
layout: spengine
title: include - KScript 教程
css:
 - shCore.css
 - shThemeKScript.css
js:
 - shCore.js
 - shBrushXML.js
 - shBrushKScript.js
 - highlight.js
---

##include 函数

include 函数是 KScript 唯一的自带函数，并不属于 SpeShow 引擎系统函数，因此在这里介绍。

include 函数的作用是在脚本文件中，引进另外一个脚本文件中的内容，即插入一段储存在当前脚本文件之外的脚本。include 的好处是，当您需要重复用到某一段脚本（例如自定义函数）时，您不需要把这段脚本复制N次，只需把这段脚本储存在另外一个脚本文件中，然后在你需要用到它的地方，include 这一个文件。

include 函数的格式如下：

<pre class="brush: ks">                    
// 完整参数列表
@include{
	file: 文件路径字符串
    inherit: 布尔值1
    rewrite: 布尔值2
}
    
// 最简式
@include{ file: 文件路径字符串 }
</pre>

参数解释：

{% table spengine/tutorials/arguments_include.csv %}

**********************************************************************

[上一节：循环](tutorial_kscript_loop.html)

[下一节：KScript 与 SpeShow](tutorial_kscript_relationship.html)