---
layout: spengine
title: 进阶指令（UI特效） - SpeShow 教程
css:
 - shCore.css
 - shThemeKScript.css
js:
 - shCore.js
 - shBrushXML.js
 - shBrushKScript.js
 - highlight.js
---

##进阶指令（UI特效）

由于时间关系，我并未能写出详尽的进阶指令教程，于是本节及其后章节只对相关函数及其参数进行简要的描述。

本节包含以下内容：
<ul>
<li>[切换](#part_1)</li>
<li>[声音](#part_2)</li>
<li>[视频](#part_3)</li>
<li>[特效](#part_4)</li>
<li>[动画](#part_5)</li>
<li>[粒子系统](#part_6)</li>
<li>[截图](#part_7)</li>
<li>[跳过](#part_8)</li>
<li>[AVG专用组件：对话框](#part_9)</li>
</ul>

**********************************************************************

<h3 id="part_1">切换</h3>

切换分为图像切换和屏幕切换。

####图像切换

图像切换的函数为 @switchPicture，它可以改变一个图片框里显示的图片，如果不使用特效，那么效果跟直接使用@pictureBox设置图片是一样的。其参数列表如下：

{% table spengine/tutorials/arguments_switchpicture.csv %}

####屏幕切换

屏幕切换的函数为 @switchScreen，屏幕切换可以从当前屏幕切换到目标屏幕，若不使用特效，其效果跟@screen 切屏是一样的。其参数列表如下：

{% table spengine/tutorials/arguments_switchscreen.csv %}

**********************************************************************

<h3 id="part_2">声音</h3>

播放声音有两个函数，第一个是 @sound，用于定义一个声音对象，其参数列表如下：

{% table spengine/tutorials/arguments_sound.csv %}

另一个是 @track，用于分轨播放声音，其参数列表如下：

{% table spengine/tutorials/arguments_track.csv %}

**********************************************************************

<h3 id="part_3">视频</h3>

定义或控制视频的函数为 @video ，其参数列表如下：

{% table spengine/tutorials/arguments_video.csv %}

定义后可以在 [@picture](tutorial_3.html#part_4) 中指定 video 属性到视频ID。

**********************************************************************

<h3 id="part_4">特效</h3>

特效可以为UI组件加一段特效动画，函数 @effect ，其参数列表如下：

{% table spengine/tutorials/arguments_effect.csv %}

**********************************************************************

<h3 id="part_5">动画</h3>

可以为UI组件添加帧动画，函数为 @animation ，其参数列表如下：

{% table spengine/tutorials/arguments_animation.csv %}

**********************************************************************

<h3 id="part_6">粒子系统</h3>

定义或控粒子系统的函数为 @particleSystem ，其参数列表如下：

{% table spengine/tutorials/arguments_particlesystem.csv %}

*其中，含有min/max字样的属性必须两个都设置好才能令属性生效。*
定义后可以在 [@picture](tutorial_3.html#part_4) 中指定 particle_system 属性到粒子系统ID。

**********************************************************************

<h3 id="part_7">跳过</h3>       

@skip 函数可以执行跳过操作。

@skip 的参数列表如下：

{% table spengine/tutorials/arguments_skip.csv %}

**********************************************************************

<h3 id="part_8">截图</h3>     

@savePicture 函数可以将组件保存为图片或设置到picture中。

@savePicture 的参数列表如下：

{% table spengine/tutorials/arguments_savepicture.csv %}

**********************************************************************

<h3 id="part_9">AVG专用组件：对话框</h3>

这里重点讲对话框。对话框是一种特殊的文字框，换而言之，其包含文字框的所有属性。其扩展功能是可以逐字显示，并由换行换页标记。

####文字特效

这里说明一下之前未解释的文字框的文字特效相关属性：

{% table spengine/tutorials/arguments_texteffect.csv %}

####其他参数

其他对话框独有的参数如下：

{% table spengine/tutorials/arguments_dialogbox.csv %}

####换行 换页

对话框同样使用 @addText 和 @clearText 进行内容显示。但是当这两个函数中的 content 参数中包含"\n"（换行）符号，则会自动换行。在换行的时候，文字内容停止继续显示，直到执行 @next 命令。而 @clearText 则还会添加一个换页标记，同样需要执行 @next 函数后才会继续显示。等待时会在文字末端显示换行或换页标记。

@next 的参数列表如下：

{% table spengine/tutorials/arguments_next.csv %}
     
*注意：@next 是一个立即执行的函数，请在延迟执行脚本中使用。*

####@waitDialog

@waitDialog 是另一个等待函数，执行该函数将等待指定对话框的内容显示完毕。

@waitDialog 的参数列表如下：

{% table spengine/tutorials/arguments_waitdialog.csv %}          
     
**********************************************************************

[上一节：基本指令（UI布局）](tutorial_3.html)

[下一节：高级指令（事件响应）](tutorial_5.html)
