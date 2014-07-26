---
layout: spengine
title: 变量 - KScript 教程
css:
 - shCore.css
 - shThemeKScript.css
js:
 - shCore.js
 - shBrushXML.js
 - shBrushKScript.js
 - highlight.js
---

##变量

变量用于储存数据。KScript 是一门 *弱变量类型大小写敏感* 的语言，即使用变量前，无需声明变量类型。在对变量赋值的时候，变量类型被确定下来。

###变量名（标识符）

KScript 中的变量名是由下划线或英文或其他语言文字开头，并由英文数字或其他语言文字组成的字串。换而言之，您可以使用中文变量名。注意变量名不能与 KScript 中的关键字一样。

以下都是合法的变量名(不包括分号";")：

<pre class="brush:ks">
a;
b;
variable;
identifier_abc;
_a;
_1;
a1;
变量;
</pre>

以下都是*非法*的变量名(不包括分号";")：

<pre class="brush:ks">
0abc; // 不是以下划线、英文或其他语言文字开头
variable1.0; // 含有非法字符"."
</pre>

###变量类型

KScript 中的变量只有 4 种类型：

 - 整数：由数字组成的字串,或者由"0x"开头的由0-9或a-f组成的字串
 - 浮点数：含有一个小数点的有数字组成的字串
 - 布尔值：true 或者 false
 - 字符串：由英文双引号或单引号或中括号包围的字串

以下是各种类型的例子：

<pre class="brush:ks">
// 整型
12356;
0xff0088aa; // 该整型为十六进制数

// 浮点
1.3;
0.46;

// 布尔
true;
false;

// 字符串
"我是字符串";
'Hello World!';
[a = 1 + 1;]; // 中括号多用于内容为脚本的字符串
</pre>

**********************************************************************

[上一节：注释](tutorial_kscript_comment.html)

[下一节：运算](tutorial_kscript_operation.html)