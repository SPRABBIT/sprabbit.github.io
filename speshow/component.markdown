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

其中以 `on` 和 `catch` 开头的属性为事件处理器，将在 [事件文档](event.html) 详细讲解。`backgroundImage` 属性除了可以是字符串外，还可以是图像对象，详见 [多媒体文档](multimedia.html)。

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

***********************************************************************

<h3 id="picturebox">图片框</h3>

一般来说，要展示图片，只要使用基本组件的 `backgroundImage` 相关属性即可满足基本功能。而图片框的存在只是为了方便以后的扩展，使用图片框可以在 `backgroundImage` 上再放置一个图片。（注：0.9以下版本的图片框支持的视频播放等图片框特有的功能均可以在 `backgroundImage` 下实现，因此0.11版本以后弱化了相关功能。）

图片框的生产方法为将 `createComponent` 的 `opt` 参数的 `type` 属性设置为 `pictureBox`：

<pre class="brush:js">
	var pictureCom = screen.createComponent({
        id: '一个图片框',
        type: 'pictureBox'
    });
</pre>

返回的 `pictureCom` 对象有以下属性：

{% table speshow/obj/pictureBox.csv %}

### setPicture

通过调用 `pictureCom` 对象的 `setPicture` 方法可以为图片框设置图片。

##### 用法

<pre class="brush:js">
	pictureCom.setPicture(texture);
</pre>

##### 参数

{% table speshow/api/setPicture.csv %}

`texture` 除了可以是字符串外，还可以是图像对象，详见 [多媒体文档](multimedia.html)。

***********************************************************************

<h3 id="textbox">文字框</h3>

文字框是用来显示文字的组件，生产方法为将 `createComponent` 的 `opt` 参数的 `type` 属性设置为 `textBox`：

<pre class="brush:js">
	var textCom = screen.createComponent({
        id: '一个文字框',
        type: 'textBox'
    });
</pre>

返回的 `textCom` 对象有以下属性：

{% table speshow/obj/textBox.csv %}

其中特效对象的格式跟基本组件的 `addEffect` 的 `opt` 参数一致。

而 `font` 字体对象的格式如下：

{% table speshow/obj/font.csv %}

其中若字体为非系统自带字体，需要使用 SpeShow 模块的 `registerFont` 方法注册，详见 [SpeShow模块文档](speshow_module.html#register_font)。

#### addText

文字框只有一个方法 `addText` ，可以将一段文字添加到当前文字框的文字后面。

##### 用法

<pre class="brush:js">
	textCom.addText(opt);
</pre>

##### 参数

若 `opt` 为字符串则直接按默认字体添加到文字框文字之后。若 `opt` 为对象，则他可以有以下属性：

{% table speshow/api/addText.csv %}

***********************************************************************

<h3 id="dialogbox">AVG对话框</h3>

对话框是一种特殊的文字框，*它包含文字框的所有属性和方法*。与文字框的不同在于对话框可以逐字显示，并有换行换页标记。生产方法为将 `createComponent` 的 `opt` 参数的 `type` 属性设置为 `dialogBox`：

<pre class="brush:js">
	var dialogCom = screen.createComponent({
        id: '一个对话框',
        type: 'dialogBox'
    });
</pre>

返回的 `dialogCom` 对象除了文字框固有属性外还有以下属性：

{% table speshow/obj/dialogBox.csv %}

使用 `dialogCom` 的 `text` 属性或 `addText` 方法改变文字时，文字会根据所设速度逐字显示，并在显示到换行或换页标记后在行末显示换行或换页图标。换行换页图标除了可以设成字符串外还可以设成精灵动画，详见 [多媒体文档](multimedia.html)。

对话框还有一些额外的方法：

#### next

方法 `next` ，可以跳过逐字显示，直接显示至行末或页末。

##### 用法

<pre class="brush:js">
	dialogCom.next();
</pre>


#### isDisplaying

方法 `isDisplaying` ，返回一个布尔值，提示当前是否处于逐字显示状态（即是否已显示至行末或页末）。

##### 用法

<pre class="brush:js">
	dialogCom.isDisplaying();
</pre>


#### isAllDisplayed

方法 `isAllDisplayed` ，返回一个布尔值，提示当前是否已将所有文字输出完毕。

##### 用法

<pre class="brush:js">
	dialogCom.isAllDisplayed();
</pre>


#### markNextLine

方法 `markNextLine` ，用于强制将状态标记为等待换行（即会显示换行标记）。

##### 用法

<pre class="brush:js">
	dialogCom.markNextLine();
</pre>


#### markNextPage

方法 `markNextPage` ，用于强制将状态标记为等待换页（即会显示换页标记）。

##### 用法

<pre class="brush:js">
	dialogCom.markNextPage();
</pre>

***********************************************************************

<h3 id="scroll">滚动框（列表）</h3>

滚动框是基本UI组件的一种扩展，在其中的子组件，将会按照水平方向或垂直方向和层深的顺序进行排列，子组件之间不会发生重叠，就像一个表一样，把需要展示的内容都陈列出来。生产方法为将 `createComponent` 的 `opt` 参数的 `type` 属性设置为 `scroll`：

<pre class="brush:js">
	var scrollCom = screen.createComponent({
        id: '一个滚动框',
        type: 'scroll'
    });
</pre>

返回的 `scrollCom` 对象除了基本属性外还有以下属性：

{% table speshow/obj/scroll.csv %}

在创建了滚动框之后，若向其中添加子组件，此时子组件的 x，y 属性表示的是相对上一个子组件的末端的位移，若为垂直滚动，则末端为上一组件的 `y + height`，水平滚动则为 `x + width`。若组件数量超出所设 `maxCount` 值则会删掉顶部的一个组件。

滚动框还有以下方法：

#### scrollBy

方法 `scrollBy` ，用于使用像素级滚动。

##### 用法

<pre class="brush:js">
	scrollCom.scrollBy(distance);
</pre>

##### 参数

{% table speshow/api/scrollBy.csv %}



#### clear

方法 `clear` ，用于清除所有子组件。

##### 用法

<pre class="brush:js">
	scrollCom.clear();
</pre>

***********************************************************************

上一节：[屏幕](screen.html)

下一节：[事件响应](event.html)

***********************************************************************

{% include uyan.html %}