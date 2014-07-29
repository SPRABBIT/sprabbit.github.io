---
layout: spengine
title: 分支 - KScript 教程
css:
 - shCore.css
 - shThemeKScript.css
js:
 - shCore.js
 - shBrushXML.js
 - shBrushKScript.js
 - highlight.js
---

##分支

分支即是使程序根据实际情况，执行脚本中的不同部分。

在KScript中可以使用“if/else”语句，或“switch”语句实现。

###if 分支

“if/else”语句的语法格式为：

<pre class="brush: ks">
// 单执行语句表达式（语句需以英文分号“;”结束）
if(条件表达式) 语句1
else 语句2

// 多执行语句表达式
if(条件表达式)
{
	// 这里可以包含多条语句
}
else
{
	// 这里可以包含多条语句
}

// if else 嵌套
if(条件表达式)
{
	// 这里可以包含多条语句
}
else if(另一个条件表达式)
{
	// 这里可以包含多条语句
}
</pre>

其中所有else及其后部分均可省略。当且仅当“if”后面的条件表达式为“true”（布尔型）或不等于0（整型或浮点数）时，执行跟在“if”后面的语句，否则执行“else”后面的语句（仅当“else”及其后语句存在时）。

###switch 分支

“switch”分支的语法为：

<pre class="brush: ks">
// 完整switch命令（语句可以为语句块）
switch(表达式)
{
	case 值1: 语句1
    case 值2: 语句2
    case 值3: 语句3
    ...
    default: 语句N
}
</pre>

“switch”语句会将其后的表达式与所有 case 的值进行比较，如果表达式的值等于 case 的值，则执行该 case 后面的语句。若无一 case 匹配，则执行 default 后的语句。当然，与 if 分支一样，*语句可以是语句块，即由花括号“{}”括起来的多个语句*。这里有一点与 C/C++ 不同的是，不需要使用 break 进行中断，匹配后仅执行紧跟相应 case 的语句，不会调用到其他 case 或 default 中的语句。

**********************************************************************

[上一节：函数](tutorial_kscript_function.html)

[下一节：循环](tutorial_kscript_loop.html)