---
layout: speshow
title: 多媒体 - SpeShow 文档
---

##多媒体

多媒体是指在 SpeShow 可以使用多种媒体来进行演示，比如图片、文字、视频、声音等。图片和文字在前面的 [UI组件文档](component.html) 中已有介绍，本节将介绍其他媒体以及特殊的图片。

***********************************************************************

<h3 id="sound">音频</h3>

音频的概念很简单，创建一个音轨，然后导入音乐文件播放即可。创建音轨使用 SpeShow 对象的 `createTrack` 方法：

<pre class="brush:js">
	var track = ss.createTrack({
        id: '一个音轨',
        volume: 1
    });
</pre>

其中配置对象可以有以下属性：

{% table speshow/api/createTrack.csv %}

创建完也可以根据 `id` 来获取音轨：

<pre class="brush:js">
	var track = ss.getTrackById('一个音轨');
</pre>

返回的 `track` 具有以下属性，这些属性同样可以在配置对象中设置：

{% table speshow/obj/track.csv %}

`track` 对象还有以下方法：

#### play

播放或恢复暂停：

<pre class="brush:js">
	track.play();
</pre>

#### stop

停止播放：

<pre class="brush:js">
	track.stop();
</pre>

#### pause

暂停播放：

<pre class="brush:js">
	track.pause();
</pre>

***********************************************************************

<h3 id="video">视频</h3>

视频的创建方法跟音频非常类似，使用 SpeShow 对象的 `createVideo` 方法：

<pre class="brush:js">
	var video = ss.createVideo({
        id: '一个视频',
        volume: 1
    });
</pre>

其中配置对象可以有以下属性：

{% table speshow/api/createVideo.csv %}

创建完也可以根据 `id` 来获取视频：

<pre class="brush:js">
	var video = ss.getVideoById('一个视频');
</pre>

返回的 `video` 具有以下属性，这些属性同样可以在配置对象中设置：

{% table speshow/obj/video.csv %}

`video` 对象还有以下方法：

#### play

播放或恢复暂停：

<pre class="brush:js">
	video.play();
</pre>

#### stop

停止播放：

<pre class="brush:js">
	video.stop();
</pre>

#### pause

暂停播放：

<pre class="brush:js">
	video.pause();
</pre>

#### 视频的显示

虽然属性和方法与音频差不多，但是还是有一点不一样，视频一定要有UI组件作为容器，才能看到图像，否则就只能听到声音。目前支持作为视频容器的有所有UI组件的背景属性 `backgroundImage`，图片框组件的 `setPicture` 方法，AVG对话框的 `nextPageImage` 和 `nextLineImage` 属性等，设置时只需要将这些属性或参数设置为一个对象即可：

<pre class="brush:js">
	com.backgroundImage = {
        video: videoObj
    };
</pre>

其中 `videoObj` 为上面创建的视频对象。

***********************************************************************

<h3 id="sprite">精灵动画</h3>

精灵动画是一种将一个图片分成 M x N 个矩形部分逐帧播放产生的动画，可以使用精灵动画的容器跟视频一样是所有UI组件的背景属性 `backgroundImage`，图片框组件的 `setPicture` 方法，AVG对话框的 `nextPageImage` 和 `nextLineImage` 属性等，只需要传入一个精灵动画初始化对象即可：

<pre class="brush:js">
	com.backgroundImage = {
        src: 'path/img.jpg',
        col: 2,
        row: 3,
        fps: 14
    };
</pre>

参数解释如下：

{% table speshow/obj/sprite.csv %}

***********************************************************************

<h3 id="particle">粒子系统</h3>

粒子系统为复数运动规律相似的图像运动组合成的动态图画，可以用来表现下雨下雪等天气效果。创建粒子系统的方法与视频类似，使用 SpeShow 的 `createParticleSystem` 方法：

<pre class="brush:js">
	var ps = ss.createParticleSystem({
        id: '一个粒子系统'
    });
</pre>

创建完也可以根据 `id` 来获取视频：

<pre class="brush:js">
	var video = ss.getParticleSystemById('一个粒子系统');
</pre>


返回的粒子系统对象 `ps` 他具有以下属性：

{% table speshow/obj/particleSystem.csv %}

其中配置对象的属性也可以 `ps` 对象的属性。


`ps` 对象还有以下方法：

#### play

播放或恢复暂停：

<pre class="brush:js">
	ps.play();
</pre>

#### stop

停止播放：

<pre class="brush:js">
	ps.stop();
</pre>

#### pause

暂停播放：

<pre class="brush:js">
	ps.pause();
</pre>

#### 粒子系统的显示

和视频一样，粒子系统一定要有UI组件作为容器，才能看到图像。目前支持作为容器的有所有UI组件的背景属性 `backgroundImage`，图片框组件的 `setPicture` 方法，AVG对话框的 `nextPageImage` 和 `nextLineImage` 属性等，设置时只需要将这些属性或参数设置为一个对象即可：

<pre class="brush:js">
	com.backgroundImage = {
        particleSystem: ps
    };
</pre>

其中 `ps` 为上面创建的粒子系统对象。

***********************************************************************

上一节：[事件响应](event.html)

下一节：[进阶指南](advanced.html)

***********************************************************************

{% include uyan.html %}