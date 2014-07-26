---
layout: spengine
title: 基本指令（UI布局） - SpeShow 教程
css:
 - shCore.css
 - shThemeKScript.css
js:
 - shCore.js
 - shBrushXML.js
 - shBrushKScript.js
 - highlight.js
---

##基本指令（UI布局）


本节开始，将介绍 SpeShow 的引擎系统函数。您可能需要动手编写 KScript 脚本了。[我推荐您使用 Notepad++ 作为您的代码编辑器](editor.html)，因为我为他添加了 KSctipt 的语法高亮支持。

本节将介绍以下内容：

 - [屏幕](#part_1)
 - [UI组件：基本UI组件](#part_2)
 - [UI组件：文字框](#part_3)
 - [UI组件：图片框](#part_4)
 - [UI组件：列表](#part_5)
 - [等待](#part_6)
 - [退出](#part_7)
 - [示例](#part_8)

**********************************************************************

<h3 id="part_1">屏幕</h3>

我决定从“屏幕”（screen）开始讲起，因为屏幕是 UI 的基础，没有屏幕，什么都显示不了。虽说是叫“屏幕”，但是跟显示器荧屏是不一样的概念。在 SpeShow 里的屏幕更像是一个画布，所有的组件都将绘制到画布上，没有画布，您就不知道应该将东西画到哪了。

屏幕的引擎系统函数格式如下：

<pre class="brush: ks">
// 完全参数列表
@screen{
	name: "屏幕名"
    pop_up: 布尔值
}

// 必要参数列表
@screen{
	name: "屏幕名"
}
</pre>

本函数的功能除了创建屏幕之外，还包括把已创建的屏幕调到最前端显示。

参数相关说明如下：

{% table spengine/tutorials/arguments_screen.csv %}


**********************************************************************

<h3 id="part_2">UI组件：基本UI组件</h3>

UI组件是 SpeShow 演示的基本元素，每个被绘制的元素都是一个组件，或者由多个组件组成。

简单来说 UI 组件就是绘制在屏幕上的一个矩形，该矩形有长、宽、位置、背景图片、背景颜色等属性，就相当于 html 里的 div, DOM 里面的 DOM元素。

定义一个基本UI组件的引擎系统函数的格式如下:

<pre class="brush: ks">
// 必要参数列表
@component{
	name:				字符串
}

// 完整参数列表
@component{
	name: 				字符串
	display: 			字符串
    layer: 				数字
    width:				数字
    height:				数字
    x:					数字
    y:					数字
	// 详见下表
}
</pre>

其完整参数列表很长，但是必须的仅仅是“name”属性，即组件的ID。其中一些属性以“on”或“catch”开头，这些是关于事件处理的属性，将在后面的章节中讲解，本节只讲解其他基本属性。

{% table spengine/tutorials/arguments_component.csv %}

必须指定组件 ID（name），才能对属性进行设置或更改。若 *当前屏幕* 中没有以该 ID 命名的 UI 组件，则会在 *该屏幕* 创建一个新的 UI 组件并对其进行属性设置，否则将对已存在的 UI 组件进行属性设置。

另外，创建 UI 组件时也必须指定 width 和 height， 否则宽度和高度为0，这个组件就看不见了。

**********************************************************************

<h3 id="part_3">UI组件：文字框</h3>

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

####字体

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

####修改文字框文字


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

<h3 id="part_4">UI组件：图片框</h3>

虽然普通的 UI 组件已经可以实现用背景显示图片，但是其不能实现一些诸如图像变换等特效。于是我们引入了图片框。图片框也是 UI 组件，所以其包含基本 UI 组件的所有属性，在此不再重复。

设置或修改一个图片框的格式为：

<pre class="brush: ks">
// 必要参数列表
@pictureBox{
	name:				字符串
} 

// 完整参数列表（不包括基本UI组件参数）
@pictureBox{
    name:				字符串
	picture:			字符串
	fill_mode: 			字符串
    position_mode:		字符串
    position_x:			数字
    position_y:			数字
} 
</pre>

pictureBox的基本属性的解释如下：

{% table spengine/tutorials/arguments_picturebox.csv %}

其中图片并不是指定一个文件，而是一个picture对象，一个picture对象是一个列图片，包括一个基图，以及一系列混合图。我们通过@picture函数来设置一个picture对象。

@picture的语法如下：

<pre class="brush: ks">
// 必要参数列表
@picture{
    name:	字符串
}

// 完整参数列表
@picture{
    name:	字符串
    src:	字符串
    row:	数字
    col:	数字
    fps:	数字
    video:	字符串
    particle_system: 字符串
}
</pre>

其参数说明如下：

{% table spengine/tutorials/arguments_picture.csv %}

其中src和video还有particle_system属性只能填一个，因为picture要不展示一幅图，要不展示一个视频，要不展示一个粒子系统。若填了src，则可以设置row、col、fps属性的值，一旦这些属性之一被设置，该图像会产生一个精灵动画，此时传入的图像应是一个由row行col列图片拼接而成的一个图片，picture会根据fps来更新显示的图片，从而产生动画效果。

设置了一个picture对象之后，我们可以使用@mixPicture函数叠加一幅图像到已设置的picture之上。

@mixPicture的语法如下：

<pre class="brush: ks">
// 必要参数列表
@mixPicture{
    // 无
}

// 完整参数列表
@mixPicture{
    target:	字符串
    src:	字符串
    layer:	数字
    row:	数字
    col:	数字
    fps:	数字
    mix_mode:字符串
}
</pre>

其参数说明如下：

{% table spengine/tutorials/arguments_mixpicture.csv %}

于是我们可以通过 @picture 函数创建一个基图像，然后使用 @mixPicture  函数向其上面叠加一幅图像，生成一种独特的效果。注意一点，这里的 *mixPicture 的图像大小最好跟 picture 的图像大小一致*，否则 mixPicture 将会被拉伸至 picture 大小后再进行叠加。

当您设置好 picture 和 mixPicture 后，您就可以指定 pictureBox 中的 picture 属性了。

**********************************************************************

<h3 id="part_5">UI组件：列表</h3>

列表是基本UI组件的一种扩展，在其中的子组件，将会按照水平方向或垂直方向和层深的顺序进行排列，子组件之间不会发生重叠，就像一个表一样，把需要展示的内容都陈列出来。

创建或修改列表的格式为：

<pre class="brush: ks">
// 必要参数列表
@list{
    name:	字符串
}

// 完整参数列表（不包含基本UI的参数列表）
@list{
    name:	字符串
    scroll_position:	数字
    scroll_position_delta:数字
    scroll_delta:		数字
    max_item:	数字
    direction:	字符串
    clear:	布尔值
}
</pre>

其参数说明如下：

{% table spengine/tutorials/arguments_list.csv %}

在创建了列表之后，就可以通过指定子组件的 father 属性到列表ID的方法添加列表元素，此时子组件的 x，y 属性表示的是相对上一个子组件的末端的位移。


**********************************************************************

<h3 id="part_6">等待</h3>


如果您只使用以上提及的命令，那么您的程序将只显示最终的结果。因为程序在一瞬间便将您输入的所有引擎系统命令执行完毕。

如果你需要让你的命令逐个执行，而且命令与命令之间有时间间隔，那么您需要使用等待命令。等待命令包括 @waitClick 和 @waitTime 还有下一节才会使用到的 @waitDialog。

####waitClick

顾名思义，就是等待鼠标左键点击，当程序遇到此命令时会暂停继续执行，直到用户点击鼠标。

@waitClick 的格式如下：

<pre class="brush: ks">
// 最简形式
@waitClick;

// 完整参数列表
@waitClick{component:"组件名"};
</pre>

{% table spengine/tutorials/arguments_waitclick.csv %}

*仅0.8.6 以后版本支持component参数*，填写该参数将以该component为基准等待鼠标点击，即类似取代该component的catch_click响应脚本，只有被该组件捕获到鼠标点击，才能结束等待。若不填写component，则该waitClick拦截所有鼠标点击，即其他组件不可能获取到鼠标点击。

####waitTime

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

####wait

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

<h3 id="part_7">退出</h3>

退出程序的方法除了点击右上角的“X”外，还可以执行 @exit 命令。

@exit 的格式如下：

<pre class="brush: ks">
// 完整参数列表（无参数）
@exit;
</pre>

当程序执行到此命令，将直接退出程序。

**********************************************************************

<h3 id="part_8">示例</h3>

请下载对应版本的[示例](download.html)进行查看。

**********************************************************************

[上一节：初识 KScript](tutorial_2.html)

[下一节：进阶指令（UI特效）](tutorial_4.html)
