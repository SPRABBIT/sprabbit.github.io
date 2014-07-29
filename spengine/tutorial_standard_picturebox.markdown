---
layout: spengine
title: 图片框 - SpeShow 基本指令
css:
 - shCore.css
 - shThemeKScript.css
js:
 - shCore.js
 - shBrushXML.js
 - shBrushKScript.js
 - highlight.js
---

##UI组件：图片框

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

[上一节：文字框](tutorial_standard_textbox.html)

[下一节：列表](tutorial_standard_list.html)