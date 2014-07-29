---
layout: spengine
title: 初识 KScript - SpeShow 教程
css:
 - shCore.css
 - shThemeKScript.css
js:
 - shCore.js
 - shBrushXML.js
 - shBrushKScript.js
 - highlight.js
---

##初识 KScript

###KScript 简介

KScript 是一种我们自己定制的脚本语言，其语法分析器由 [Antlr3](http://www.antlr.org/) 生成。

KScript 伴随 SPENGINE 出现，并且随 SPENGINE 的变化而变化。KScript 最早用于游戏[《颤抖吧废怯少女！》(SPG01)](http://blog.sprabbit.com/blog/2012/03/25/shake-magical-girls/)中的关卡脚本，以及弹幕脚本。取名为 KScript 只是因为本人英文名以 K 开头，所以脚本文件后缀名为 ks，与其他同后缀脚本并没有任何关系。目前 KScript 的版本为 0.9，我们可以通过写 KScript 脚本来调用引擎接口。

本节介绍 KScript for SpeShow 的基本语法，以及如何在 SpeShow 中使用 KScript。本节由以下部分组成：

 - [注释](tutorial_kscript_comment.html)
 - [变量](tutorial_kscript_variable.html)
 - [运算](tutorial_kscript_operation.html)
 - [函数](tutorial_kscript_function.html)
 - [分支](tutorial_kscript_branch.html)
 - [循环](tutorial_kscript_loop.html)
 - [include 函数](tutorial_kscript_include.html)
 - [KScript 与 SpeShow](tutorial_kscript_relationship.html)

如果您有编程经验，那么您一定能很快上手，因为他的语法（除函数外）跟大多数的编程语言相似。如果您没有接触过编程，那也没有关系，因为在简单的 SpeShow 程序中，并不涉及很多编程，但是您至少要掌握 *[函数](tutorial_kscript_include.html)* 的用法以及 *[KScript 与 SpeShow](tutorial_kscript_relationship.html)* 的关系。

*注意：如果需要在脚本中使用Unicode字符（比如中文），请将脚本文件保存为 UTF-8编码，否则程序将在执行脚本时发生错误。推荐使用[Notepad++](editor.html)作为KScript编辑器。（0.8.3以下版本请保存为UTF-8 without BOM）*

**********************************************************************

[上一节：部署 SpeShow](tutorial_deploy.html)

[下一节：KScript 注释](tutorial_kscript_comment.html)