---
layout: spengine
title: 注释 - KScript 教程
css:
 - shCore.css
 - shThemeKScript.css
js:
 - shCore.js
 - shBrushXML.js
 - shBrushKScript.js
 - highlight.js
---

##注释

注释即是插入到代码中的文字注解，在代码执行时将会被忽略。KScript 中的注释形式与大多数编程语言相同，分为行注释与块注释。行注释是以两个斜杠“//”开始，到本行末尾的部分。块注释是以“`/*`”开头到第一次出现“`*/`”的部分。

请看以下例子：

<pre class="brush:ks">
// 这里是行注释。

a = 1; // 行注释不包括“//”之前的部分。

/*
	这里是块注释。
    块注释可以包括多行。
*/
</pre>

请不要吝惜使用注释，以便能够马上理解代码。

**********************************************************************

[上一节：初识 KScript](tutorial_kscript.html)

[下一节：变量](tutorial_kscript_variable.html)