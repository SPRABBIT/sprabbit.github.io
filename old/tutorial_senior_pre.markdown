---
layout: spengine
title: 预执行脚本 - SpeShow 高级指令
css:
 - shCore.css
 - shThemeKScript.css
js:
 - shCore.js
 - shBrushXML.js
 - shBrushKScript.js
 - highlight.js
---
               		
##预执行脚本

预执行脚本并不是一种脚本的名称，而是指写在 pre.ks 中的脚本。这些脚本将会在程序开始的时候执行，但是执行的脚本不会被显示，这时程序将显示一个读取动画。读取动画可以通过修改 loading.png 图片来修改。

因为这个特性，所以建议将一些执行比较慢的脚本放到 pre.ks 中执行，而不会让游戏在执行过程中出现卡顿。比如第一次使用的@effect，还有设置了文字特效的@textBox。还有读取一些比较长的声音。

###必须预执行的函数

@first 函数是一个必须在 pre.ks 中才能起作用的函数。其作用是指定读取完后执行的脚本文件。如果没有指定，则默认执行“first.ks”文件。

@first 的参数列表如下：

{% table spengine/tutorials/arguments_first.csv %}                 

###不能预执行的函数

有一个函数不能在 pre.ks 中出现，他就是 @display。它的作用是修改游戏分辨率，因为要重置设备，卸载资源，所以该函数不能在读取资源时使用。

@display 的参数列表如下：

{% table spengine/tutorials/arguments_display.csv %}                 
     
*注意：如果设置全屏，那么分辨率必须是显卡所能支持的全屏分辨率，否则会调用失败。修改后的分辨率会保存到 config.cfg，以便在下次运行程序时生效。*

如果想预先指定分辨率，请直接修改 config.cfg 文件，而不是使用该函数。

###建议预执行的脚本

所有游戏中需要用到的特效，包括文字特效，建议在 pre.ks 中预先用 @effect 应用到一个空的屏幕中的一个空组件上，以便在预执行时读取效果资源，减少真正使用时的卡顿。

除此之外建议在 pre.ks 中执行的函数还有以下几个。

###@fps

该函数用于设置帧率的显示，默认状态下为显示在右下角，如需关闭，必须执行 @fps 函数。

@fps 的参数列表如下：

{% table spengine/tutorials/arguments_fps.csv %}                 

###@windowText

@windowText 函数用于设置窗口标题。

@windowText 的参数列表如下：

{% table spengine/tutorials/arguments_windowtext.csv %}                 

###@cursor

@cursor 函数用于设置鼠标指针。

@cursor 的参数列表如下：

{% table spengine/tutorials/arguments_cursor.csv %}                 

**********************************************************************

[上一节：高级指令](tutorial_senior.html)

[下一节：内部脚本](tutorial_senior_inner.html)
