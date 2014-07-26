---
layout: spengine
title: 文字框 - SpeShow 基本指令
css:
 - shCore.css
 - shThemeKScript.css
js:
 - shCore.js
 - shBrushXML.js
 - shBrushKScript.js
 - highlight.js
---

##UI组件：文字框

文字框是一种基本 UI 组件的扩展，是一种可以显示文字的 UI 组件。

*所有 UI 组件都包括基本 UI 组件的属性参数，包括文字框还有接下来将提及的图片框、列表等，因此我不再重复写出这些参数及其说明。*

创建或修改一个文字框的引擎系统函数的格式如下：

<pre class="brush: ks">
// 必要参数列表
@textBox{
	name:				字符串
} 

// 完整参数列表（不包括基本UI组件的属性参数）
@textBox{
	name:				字符串
    padding:			数字
    line_space:			数字
    word_space:			数字
    font:				字符串
    color:				数字
    content:			字符串
    text_effect_back:	字符串
	text_effect_back_tex:字符串
    text_effect_back_level:数字
    text_effect_back_XX:数字
    text_effect_front:	字符串
    text_effect_front_tex:字符串
    text_effect_front_level:数字
    text_effect_front_XX:数字
}
</pre>

其中以“text_effect”开头的属性参数，是文字特效的相关参数，将在下一节讲解。这里只讲解其他基本参数。

textBox的基本属性的解释如下：

{% table spengine/tutorials/arguments_textbox.csv %}

其中有“font”这一属性，需要填写一个已定义字体的 ID。如此，有必要介绍一下设置字体的相关函数。

###字体

与其他地方不一样，这里的字体，并不单单是指文字的风格，还包括文字大小，文字倾斜，文字粗细这些属性。

设置字体的相关函数有两个。@registerFont 和 @font。前者用来注册一种系统里没有的字体文件，后者创建或是修改一种字体。

@registerFont 的用法很简单，格式如下：

<pre class="brush: ks">
// 完整参数列表
@registerFont{ src: 字符串 } 
</pre>

其参数解释如下：

{% table spengine/tutorials/arguments_registerfont.csv %}

如果您使用的是系统自带的字体，那么您可以不注册字体文件，但是您需要确保你的用户的系统中也有同样的字体。否则，您就要将该种字体放到游戏文件夹下，并使用 @registerFont 注册字体。

当您确定要使用的字体存在或者已经注册后，您就可以使用 @font 创建字体。

@font 的格式如下：

<pre class="brush: ks">
// 必要参数列表
@font{
	name:				字符串
} 

// 完整参数列表
@font{
	name:				字符串
	size: 				数字
    font:				字符串
    weight:				数字
    italic:				布尔值
} 
</pre>

其参数解释如下：

{% table spengine/tutorials/arguments_font.csv %}

###修改文字框文字


修改文字框文字，除了使用 @textBox 的 content 属性，还可以使用 @addText 和 @clearText 两个函数。实际上因为 @textBox 的 content 属性不能设置不同于默认字体的字体，所以一般不使用。

@addText 函数可以在指定的文本框的文字内容后面增加新的文字内容，格式如下：

<pre class="brush: ks">
// 必要参数列表
@addText{
	// 无
} 

// 完整参数列表
@addText{
	box:				字符串
	color: 				数字
    font:				字符串
    content:			字符串
    effect_back:		字符串
	effect_back_tex:	字符串
    effect_back_level:	数字
    effect_back_XX:		数字
    effect_front:		字符串
    effect_front_tex:	字符串
    effect_front_level:	数字
    effect_front_XX:	数字
} 
</pre>

@clearText 函数可以清楚指定的文本框的文字内容，并替换为新的文字内容，格式如下：

<pre class="brush: ks">
// 必要参数列表
@clearText{
	// 无
} 

// 完整参数列表
@clearText{
	box:				字符串
	color: 				数字
    font:				字符串
    content:			字符串
    effect_back:		字符串
	effect_back_tex:	字符串
    effect_back_level:	数字
    effect_back_XX:		数字
    effect_front:		字符串
    effect_front_tex:	字符串
    effect_front_level:	数字
    effect_front_XX:	数字
} 
</pre>

两个函数的参数列表都是一致的，区别只在于 @addText 用于添加文字， @clearText 用于替换文字。其中以“effect”开头的参数用于设置文字的特效，将在下一节中介绍。其余参数的说明如下：

{% table spengine/tutorials/arguments_addtext.csv %}

如此便可以修改文字框的内容了。

**********************************************************************

[上一节：基本组件](tutorial_standard_component.html)

[下一节：图片框](tutorial_standard_picturebox.html)
