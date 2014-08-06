---
layout: speshow
title: UI组件 - SpeShow 文档
---

##UI组件

UI组件是屏幕渲染的基本单位，类似于HTML中的DOM节点，简单地说就是一个包含图片或文字内容的矩形。一个组件可以包含多个子组件，层层嵌套，从而形成一棵组件树，整棵树的根节点就是 Screen 对象的 `root` 节点。

UI组件是从属于屏幕的对象，一个UI组件只能渲染在对应的屏幕上，而不能插入到其他屏幕的组件树上。因此组件只能由 Screen 对象来生产：

<pre class="brush:js">
	var com = screen.createComponent(opt);
</pre>

其中 `opt` 为初始化参数对象，他可以包含以下属性：

{% table speshow/api/createComponent.csv %}

除了以上属性外，`opt` 还可以包含对应组件的可用属性初始化，不同组件的属性详见下文。

***********************************************************************

<h3 id="normal_component">基本组件</h3>

基本组件就是最简单的组件，其生产方法为将 `createComponent` 的 `opt` 参数的 `type` 属性设置为undefined或不传type：

<pre class="brush:js">
	var normalCom = screen.createComponent({
        id: '一个基本组件',
        type: undefined
    });
</pre>

返回的 `normalCom` 对象有以下属性：

{% table speshow/obj/component.csv %}

以上这些属性若非只读属性，均可以在使用 `createComponent` 生成组件时作为 `opt` 的属性值传入，如：

<pre class="brush:js">
	var normalCom = screen.createComponent({
        id: '一个基本组件',
        backgroundColor: 0x00ffffff,
        onClick: function(e){
            // 响应点击
        }
    });
</pre>

其中以 `on` 和 `catch` 开头的属性为事件处理器，将在 [事件文档](event.html) 详细讲解。

除了以上属性，基本组件还包括以下方法：



#### appendChild

`appendChild` 方法用于为组件添加一个子组件到子组件列表尾部。

##### 用法

<pre class="brush:js">
	normalCom.appendChild(child);
</pre>

##### 参数

{% table speshow/api/appendChild.csv %}



#### removeChild

`removeChild` 方法用于为组件删除一个子组件。

##### 用法

<pre class="brush:js">
	normalCom.removeChild(child);
</pre>

##### 参数

{% table speshow/api/removeChild.csv %}



#### insertBefore

`insertBefore` 方法用于插入一个子组件到另一个子组件之前。

##### 用法

<pre class="brush:js">
	normalCom.insertBefore(targetChild, nextChild);
</pre>

##### 参数

{% table speshow/api/insertBefore.csv %}

***********************************************************************

<h3 id="animation">动画</h3>

动画即是插值动画，即计算当前状态与目标状态的差值再除以单位时间，每单位之间改变组件的属性值，从而实现渐变动画。

#### addAnimation

`addAnimation` 方法用于为组件添加一个插值动画，传入目标状态作为参数后，组件将产生一段动画并渐变到目标状态。

##### 用法

<pre class="brush:js">
	normalCom.addAnimation(opt);
</pre>

##### 参数

参数 `opt` 为目标状态对象，其可以有以下属性：

{% table speshow/api/addAnimation.csv %}

***********************************************************************

<h3 id="effect">特效</h3>

使用特效可以为组件添加滤镜等数字图像处理效果，实际上就是基于HLSL的像素着色器。若组件包含子组件，并需要将特效覆盖到子组件上，需要将组件的 `absolute` 属性设为 `false`，否则特效只会应用到该组件上。特效支持自定义，详见 [进阶指南](advanced.html)。

#### addEffect

`addEffect` 方法用于为组件添加一个特效（动画），传入特效配置作为参数后，组件将产生一段动画并根据特效渐变到目标状态。

##### 用法

<pre class="brush:js">
	normalCom.addEffect(opt);
</pre>

##### 参数

参数 `opt` 为特效配置对象，其可以有以下属性：

{% table speshow/api/addEffect.csv %}

#### clearEffect

`clearEffect` 方法用于清除当前所有特效。

##### 用法

<pre class="brush:js">
	normalCom.clearEffect();
</pre>

#### skip

`skip` 方法用于跳过当前特效动画，若特效可跳过则直接设置为特效目标状态。该方法同样会跳过上面提到的插值动画。

##### 用法

<pre class="brush:js">
	normalCom.skip();
</pre>

***********************************************************************

<h3 id="picturebox">其他UI组件</h3>

除了基本UI组件 SpeShow 还提供了其他UI组件。*这些UI组件都包含了基本UI组件的所有属性和方法*，因此以下文档中若提及属性和方法，将只描述与基本UI组件不同的部分，而省略基本UI组件自带的部分。

<h3 id="picturebox">图片框</h3>

文档待更新

***********************************************************************

上一节：[屏幕](screen.html)

下一节：[事件响应](event.html)

***********************************************************************

{% include uyan.html %}