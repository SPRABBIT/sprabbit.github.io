---
layout: spengine
title: 循环 - KScript 教程
css:
 - shCore.css
 - shThemeKScript.css
js:
 - shCore.js
 - shBrushXML.js
 - shBrushKScript.js
 - highlight.js
---

##循环

循环即是使程序重复多次执行同一段脚本。

KScript 中的循环分为“for”循环和“while”循环。

###for 循环

for循环的语法格式为：

<pre class="brush: ks">
// 顺序式（语句可以为语句块）
for 变量1 = 值1 to 值2
	语句

// 逆序式（语句可以为语句块）
for 变量1 = 值1 downto 值2
	语句
</pre>

在上面的循环里，“变量1”将首先被赋值为 值1，然后执行后面的语句一次。执行后，“变量1”将加一（或减一，*取决于 值2 的大小，与 to 或是 downto 无关*），再执行语句一次。重复直到“变量1”超出了 值1 到 值2 的范围（若 值2 大于 值1，则若“变量1”大于 值2 便不再执行后面的语句，反之亦然）。和上面的分支一样，*语句可以是语句块，即由花括号“{}”括起来的多个语句*。

###while 循环

for循环的语法格式为：

<pre class="brush: ks">                    
// 条件在先式
while(条件表达式)
	语句
    
// 条件在后式
do 语句
while(条件表达式)
</pre>

对于条件在先式，当条件表达式为true或不等于0，则重复执行语句，直到条件表达式为为false或等于0，便不再执行。

对于条件在后式，则先执行一次语句，若条件表达式为true或不等于0，则再重复执行语句，直到条件表达式为为false或等于0，便不再执行。

**********************************************************************

[上一节：分支](tutorial_kscript_branch.html)

[下一节：include](tutorial_kscript_include.html)
