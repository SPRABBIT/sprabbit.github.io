---
layout: speshow
title: 脚本分类 - SpeShow 文档
---

##脚本分类

SpeShow 引入了一种与一般脚本不同的阻塞型顺序执行脚本，我们叫他做队列脚本。

<h3 id="normal_script">一般脚本</h3>

一般写JS的语法结构都是自顶向下，根据实际情况作出判断分支，循环，直至最后一个回调执行结束。但是一般图文演示程序都是分步按顺序依次执行的，每一步之间可能需要达到某些条件才会进行下一步，比如点击鼠标、键盘按键、又或者等待一定时间（参考PPT的演示方法）。如果直接用原生JS来操作，将会是层层嵌套的回调地狱。

<h3 id="queued_script">队列脚本</h3>

为了解决原生JS对阻塞型顺序执行脚本的支持，我们引入了队列脚本的概念。队列脚本是指使用 SpeShow 方法 `ss.addCommand` 添加的队列函数，这种函数会根据添加顺序依次执行。用法：

<pre class="brush:js">
	ss.addCommand(function(event){
		// 操作一
	});
	
	ss.addCommand(function(event){
		// 操作二
	});
	
	ss.addCommand(function(event){
		// 操作三
	});
</pre>

执行完 `addCommand` 后，作为参数传入的函数将会被添加到一个队列中，SpeShow将在空闲时（无其他JS脚本运行时）执行该队列中的第一个函数。函数执行时接受一个参数 `event`，可以使用它的属性值控制函数的执行完成或重复，其属性值说明如下：

{% table speshow/api/commandEvent.csv %}

除了可以按顺序执行外，队列函数还支持跳过，使用 addTag 添加标签后用 goto 语句可以忽略该标签前的所有队列函数，直接执行该标签后的第一个队列函数，详见 [脚本跳转文档](speshow_module.html#jump)。

队列脚本的另一个重要功能是可以保存或读取执行状态，使用 SpeShow 模块的 [`saveState/loadState`](speshow_module.html#state_saving) 可以保存或读取队列脚本。

如果一般脚本写在 `addCommand` 之外（即脚本文件的最外层的脚本），那么SpeShow会先执行完顶层的脚本，然后再执行队列脚本。因此，除非你清楚你的代码逻辑，否则一般情况下，*一个包含队列脚本的文件，在最外层最好不要再书写一般脚本，并需要使用 `goto` 语句来引入该文件*。



***********************************************************************

上一节：[SpeShow 模块](speshow_module.html)

下一节：[窗口](window.html)

***********************************************************************

{% include uyan.html %}