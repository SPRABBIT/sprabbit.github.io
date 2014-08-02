---
layout: speshow
title: JavaScript - SpeShow 文档
---

##JavaScript

JavaScript 是一种广泛应用于Web前后端的编程语言，SpeShow 0.11 版本以后，我们选择 JavaScript 作为脚本语言，并使用 Node.js 作为平台，以便提供更多的可能性。我们选择JavaScript以及Node.js是基于以下理由：

 - `学习曲线短`，大部分对JavaScript有一定认识的人员可以马上切入SpeShow开发
 - `与DOM操作契合度高`，SpeShow的UI渲染是基于一种类似DOM树的组件对象模型
 - `异步单线程`，天生的适合事件响应式图形界面开发
 - `流行的平台`，可以使用丰富的Node.js模块资源，实现更多意想不到的功能
 - `执行效率高`，基于Google V8 JS引擎
 - `学习成本低`，就算你以后不用SpeShow，你也学会了JavaScript和Node.js，不会是无用功
 
如果你对JavaScript不熟悉，建议到 [W3School](http://www.w3school.com.cn) 查看 [JavaScript / EcmaScript 相关语法教程](http://www.w3school.com.cn/js/index_pro.asp) 即可。

<h3 id="node.js">Node.js</h3>

[Node.js](http://www.nodejs.org) 是一个可以快速构建网络服务及应用的平台。它对Google V8引擎进行了封装，使得 JavaScript 得以走出浏览器，成为一种前后端通用的编程语言。现在，无论是前端开发设计人员，或是后端逻辑数据开发人员都已离不开 Node.js，也因此有了一大批基于 Node.js 的模块及应用。

基于这样一个平台，也便于 SpeShow 获取他的优势，让开发更加自由，让开发者可以开发出更加多功能，更加强大的桌面图文演示类应用。

如果你对Node.js不熟悉，也可以继续使用SpeShow，只有到你需要自己编写模块，或者需要调用一些系统模块时，需要参考一下 [Node.js的模块教程](http://www.w3cschool.cc/nodejs/nodejs-module-system.html)，完整教程也可以直接当 [W3CSchool.cc](http://www.w3cschool.cc/nodejs/nodejs-tutorial.html)查看

<h3 id="speshow_mod">SpeShow 模块</h3>

SpeShow 中集成整个 Node.js 的核心代码，让 js 文件无需配置便可以直接在 SpeShow 中运行。同时，SpeShow 作为一个 Node.js 模块暴露给脚本，以便于脚本调用 SpeShow 接口以及操作UI组件对象。

由于 SpeShow 是一个内嵌模块，所以获取他的方式跟普通的不一样，不是使用 `require` 而需要使用进程绑定：

<pre class="brush:js">
	var ss = process.binding('speshow');
</pre>

关于该模块的一些属性及方法会在下一节介绍。

********************************************************************

 上一节：[部署 SpeShow](deployment.html)

 下一节： [SpeShow 模块](speshow_module.html)
 
 ***********************************************************************

{% include uyan.html %}