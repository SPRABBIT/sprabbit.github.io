---
layout: speshow
title: 快速入门 - SpeShow 文档
---

##快速入门

为了编写SpeShow程序，首先你要有一个 [SpeShow 发行版](download.html)。至于什么是SpeShow发行版，反正就是你点进去下个最新的就是了。

解压出来的文件夹中应该有如下文件：

 - /bin/
 - /SSLauncher.exe
 - /SSDebug.exe

你可以直接执行SSLauncher.exe，若你下载了附带示例的版本应该会打开一个有东西看的窗口，否则就只有一个黑框。

但是作为一个编写脚本的人，没错你不应该打开SSLauncher而应该打开SSDebug，这会在打开窗口之余打开一个控制台。如果你会JavaScript（以下简称JS），那么你可以直接在控制台输入JS脚本，因为这其实就是一个Node.js的Shell。如果你不会JS也没关系，去学就是了。那么在你去学之前你也可以跟着这个入门来试着输入一些JS代码看看效果。

<h3 id="hello_world">Hello World</h3>

第一个程序当然就是Hello World了，那么在控制台输入以下语句：

<pre class="brush:js">
	'Hello World!'
</pre>

然后控制台应该会返回 `'Hello World!'`，是不是很厉害。你肯定不会觉得厉害，因为只有控制台输出了句话，窗口什么都没变。

那我们就让窗口发生一些变化，为了调用 SpeShow 的接口，首先我们要获取 SpeShow 模块，与一般 Node.js 模块不一样，因为 SpeShow 是内嵌模块，所以需要使用下面的代码来获取：

<pre class="brush:js">
	var ss = process.binding('speshow');
</pre>

然后 SpeShow 模块就绑定到了变量 `ss` 上，当然，你可以使用别的变量名来代替 `ss`。然后在控制台输入：

<pre class="brush:js">
	ss.window.title = 'Hello World!';
</pre>

然后你会发现窗口还是没变化。真的没变化吗？仔细看窗口标题，窗口标题已经变成刚刚输入的 `Hello World!` 了。

<h3 id="hello_component">Hello 组件</h3>

你应该还觉得不够Cool，应该将 Hello World 显示在窗口里面，没问题，虽然你可能不太明白接下来的代码，但是先输着玩也是不错的体验。

首先我们要创建一个白色的屏幕：

<pre class="brush:js">
	// 创建屏幕
	var screen = ss.createScreen({id:'test'});
	// 聚焦屏幕
	screen.focus();
	// 将屏幕设成白色
	screen.root.backgroundColor = 0xFFFFFFFF;
</pre>

然后添加一个文字框：

<pre class="brush:js">
	// 创建文字框组件
	var textCom = screen.createComponent({
		type: 'textBox',
		width: 300,
		height: 50,
		color: 0xFF000000,
		font: {
			size: 30,
			weight: 'Bold'
		}
	});
	// 添加组件到组件树
	screen.root.appendChild(textCom);
	// 设置文字框文字
	textCom.text = 'Hello World!';
</pre>

是不是很Cool。

<h3 id="hello_file">Hello 脚本文件</h3>

你可能觉得一行一行输这些代码太麻烦了，没问题，打开 `/bin/` 文件夹，在里面找到 `init.js` 文件，如果没有就手动创建一个，然后把以上代码全数拷贝到文件中保存（最好存成UTF-8文件）。

<pre class="brush:js">
	// 绑定SpeShow模块
	var ss = process.binding('speshow');
	
	// 修改标题
	ss.window.title = 'Hello World!';

	// 创建屏幕
	var screen = ss.createScreen({id:'test'});
	
	// 聚焦屏幕
	screen.focus();
	
	// 将屏幕设成白色
	screen.root.backgroundColor = 0xFFFFFFFF;

	// 创建文字框组件
	var textCom = screen.createComponent({
		type: 'textBox',
		width: 300,
		height: 50,
		color: 0xFF000000,
		font: {
			size: 30,
			weight: 'Bold'
		}
	});
	
	// 添加组件到组件树
	screen.root.appendChild(textCom);
	
	// 设置文字框文字
	textCom.text = 'Hello World!';
</pre>

保存成功后重新运行SSLauncher或SSDebug，怎样，效果跟手打代码一样吧，没错，你已经学会用文件来保存脚本了。如果已经对SpeShow产生了兴趣，不妨接着往下看，更多功能以及说明尽在文档中。

***********************************************************************

上一节：[文档](docs.html)

下一节：[部署SpeShow](deployment.html)

***********************************************************************

{% include uyan.html %}