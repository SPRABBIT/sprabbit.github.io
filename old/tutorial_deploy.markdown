---
layout: spengine
title: 部署 SpeShow - SpeShow 教程
css:
 - shCore.css
 - shThemeKScript.css
js:
 - shCore.js
 - shBrushXML.js
 - highlight.js
---

##部署 SpeShow

下载完毕后，解压压缩包，直接执行 SpeShow.exe 文件即可运行本程序。

开始运行后，SpeShow将做一些读取以及初始化工作，并执行 *pre.ks* 文件中的内容。pre.ks 是一个用KScript语言书写的脚本文件，KScript相关内容，将在[下一节](tutorial_2.html)中描述。在预读资源并执行 pre.ks 的过程中会有读取动画播放（默认为一个转动的圆形）。读取完毕后，SpeShow 将执行在 pre.ks 中用 @first 函数指定的文件。如果没有在 pre.ks 中设置的话，默认会执行 first.ks 文件。

在执行之前，您还可以设置一些程序的初始化参数。使用记事本打开 *config.cfg* 文件，其内容大概如下:

<pre class="brush:xml">
<Config>
	<WindowWidth>1024</WindowWidth>
	<WindowHeight>768</WindowHeight>
	<WorkingWidth>800</WorkingWidth>
	<WorkingHeight>600</WorkingHeight>
	<MultisampleType>0</MultisampleType>
	<MultisampleLevel>0</MultisampleLevel>
	<RefreshRate>0</RefreshRate>
	<Windowed>true</Windowed>
	<VSync>true</VSync>
	<DeviceType>1</DeviceType>
</Config>
</pre>

您可以更改其中的数值，程序运行时会根据这些数据初始化引擎。

参数说明如下：

{% table spengine/tutorials/config.csv %}                 

********************************************************************

[下一节： 初识 KScript](tutorial_kscript.html)
