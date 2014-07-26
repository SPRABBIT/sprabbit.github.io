---
layout: spengine
title: 切换 - SpeShow 进阶指令
css:
 - shCore.css
 - shThemeKScript.css
js:
 - shCore.js
 - shBrushXML.js
 - shBrushKScript.js
 - highlight.js
---

##切换

切换分为图像切换和屏幕切换。

###图像切换

图像切换的函数为 @switchPicture，它可以改变一个图片框里显示的图片，如果不使用特效，那么效果跟直接使用@pictureBox设置图片是一样的。其参数列表如下：

{% table spengine/tutorials/arguments_switchpicture.csv %}

###屏幕切换

屏幕切换的函数为 @switchScreen，屏幕切换可以从当前屏幕切换到目标屏幕，若不使用特效，其效果跟@screen 切屏是一样的。其参数列表如下：

{% table spengine/tutorials/arguments_switchscreen.csv %}
     
**********************************************************************

[上一节：进阶指令（UI特效）](tutorial_advanced.html)

[下一节：声音](tutorial_advanced_sound.html)
