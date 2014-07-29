---
layout: spengine
title: KScript 与 SpeShow - KScript 教程
css:
 - shCore.css
 - shThemeKScript.css
js:
 - shCore.js
 - shBrushXML.js
 - shBrushKScript.js
 - highlight.js
---

##KScript 与 SpeShow

如上所述，KScript 通过调用 SpeShow 的引擎系统函数，来控制 SpeShow 的行为。为了使您使用 SpeShow 引擎系统函数更加得心应手，这里有必要解释一下 SpeShow 的引擎系统函数，到底做了什么。

SpeShow 在开始运行时会执行根目录下的“pre.ks”文件。用户通过修改“pre.ks”中的脚本，从而达到控制引擎的效果。

而实际上，SpeShow 引擎系统函数分为 *两种*，一种是直接执行的函数（如 @include ），这种函数会在执行到的时候直接调用引擎接口。而另外一种是延迟执行的函数，这种函数并不是直接修改 SpeShow 的显示内容，在执行该类函数时将根据参数生成一条引擎系统命令，并将其加入到 SpeShow 的引擎系统命令列表，SpeShow 将在空闲时依次执行该列表中的命令。我们提供的函数绝大多数是延迟执行的，只有极少数函数即时执行。

说明这一点的原因，是要告诉大家 KScript 的执行和 SpeShow 引擎系统命令的执行不一定是同步的，大部分情况下是先执行脚本，生成所有的引擎系统命令后，再依次执行命令。所以您不能在顶层的脚本中使用“if”分支来使游戏出现分支，因为分支的条件将在执行到该行时直接计算出来，而不会延时计算。因此只能延迟使用if的时间到出现分支的地方。至于怎么延迟执行命令，以及在游戏中实现分支，将会在“高级指令”章节中介绍。

**********************************************************************

[上一节：KScript 与 SpeShow](tutorial_kscript_relationship.html)

[下一节：SpeShow 基本指令](tutorial_standard.html)