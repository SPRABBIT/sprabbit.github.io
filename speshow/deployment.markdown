---
layout: speshow
title: 部署 SpeShow - SpeShow 文档
---

##部署 SpeShow

确保你下载了最新的 [SpeShow 发行版](download.html) 压缩包，解压出来的文件夹中应该有如下文件：

 - `/bin/` 二进制文件，以及相关脚本资源文件
 - `/SSLauncher.exe` 以一般模式运行SpeShow程序，主要针对使用者
 - `/SSDebug.exe` 以调试模式运行SpeShow程序，打开控制台

其中 `/bin/` 目录下还有这些文件：

 - `/bin/`
	 - `/effect/` 特效HLSL文件夹
	 - `/mask/` 遮罩图片文件夹
	 - `/mix/` 图像混合HLSL文件夹
	 - `/trans/` 图像变换HLSL文件夹
	 - `*.dll` 引用的库文件
	 - `config.cfg` 配置文件
	 - `init.js` 入口脚本文件
	 - `SpeShow.exe` SpeShow主程序

<h3 id="init">入口文件</h3>

SSLauncher 和 SSDebug 实际上都是调用`/bin/`目录下的 `SpeShow.exe` 文件来执行程序，执行SpeShow.exe 可以带有以下参数：

 - -d 开启调试模式
 - -l 开启Log
 - >2 脚本错误输出文件
 
SSLauncher实际上是直接打开SpeShow.exe，而SSDebug则是以以下参数打开SpeShow.exe：

<pre class="brush:js">
	SpeShow.exe -d -l 2> log/script.log
</pre>

这里 `2> log/script.log` 的意思是将Node.js的错误信息输出到 `log/script.log` 文件中，换而言之如果你执行脚本过程中遇到问题，可以去查看一下这个文件中是否有内容，一般该文件中会包含错误发生的位置信息。

如果 `bin` 文件夹中包含 `init.js` 文件，运行后SpeShow后，SpeShow将做一些读取以及初始化工作，然后执行 `init.js` 中的脚本，也即是 `init.js` 脚本就是整个程序的入口。

<h3 id="debug">调试模式</h3>

使用SSDebug，或者使用 `-d` 参数打开SpeShow.exe可以调试模式运行SpeShow。以调试模式运行时，除了打开主窗口，还会打开一个命令行窗口，这是一个Node.js的Shell，可以直接在其中输入执行JS脚本，或查看实时变量值。

<h3 id="config">配置文件</h3>

在执行 SpeShow 之前，您还可以设置一些程序的初始化参数。使用记事本打开 `config.cfg` 文件，其内容大概如下:

<pre class="brush:xml">
	<?xml version="1.0" encoding="UTF-8"?>
	<Config>
		<WindowWidth>800</WindowWidth>
		<WindowHeight>450</WindowHeight>
		<WorkingWidth>1280</WorkingWidth>
		<WorkingHeight>720</WorkingHeight>
		<MultisampleType>0</MultisampleType>
		<MultisampleLevel>0</MultisampleLevel>
		<RefreshRate>0</RefreshRate>
		<Windowed>true</Windowed>
		<VSync>true</VSync>
		<DeviceType>1</DeviceType>
		<Debug>true</Debug>
	</Config>
</pre>

您可以更改其中的数值，程序运行时会根据这些数据初始化引擎。

参数说明如下：

{% table speshow/config.csv %}                 



********************************************************************

 上一节：[快速入门](quick_start.html)

 下一节： [JavaScript](javascript.html)