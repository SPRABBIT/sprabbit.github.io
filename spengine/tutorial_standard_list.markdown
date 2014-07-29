---
layout: spengine
title: 列表 - SpeShow 基本指令
css:
 - shCore.css
 - shThemeKScript.css
js:
 - shCore.js
 - shBrushXML.js
 - shBrushKScript.js
 - highlight.js
---

##UI组件：列表

列表是基本UI组件的一种扩展，在其中的子组件，将会按照水平方向或垂直方向和层深的顺序进行排列，子组件之间不会发生重叠，就像一个表一样，把需要展示的内容都陈列出来。

创建或修改列表的格式为：

<pre class="brush: ks">
// 必要参数列表
@list{
    name:	字符串
}

// 完整参数列表（不包含基本UI的参数列表）
@list{
    name:	字符串
    scroll_position:	数字
    scroll_position_delta:数字
    scroll_delta:		数字
    max_item:	数字
    direction:	字符串
    clear:	布尔值
}
</pre>

其参数说明如下：

{% table spengine/tutorials/arguments_list.csv %}

在创建了列表之后，就可以通过指定子组件的 father 属性到列表ID的方法添加列表元素，此时子组件的 x，y 属性表示的是相对上一个子组件的末端的位移。

*SpeShow 0.9* 版本添加了两个List独有的事件属性 *on_scroll_down_max* 和 *on_scroll_up_min*，前者为鼠标滚轮往下滚到尽头时触发的事件，后者为鼠标滚轮向上滚到尽头时触发的事件。

**********************************************************************

[上一节：图片框](tutorial_standard_picturebox.html)

[下一节：等待](tutorial_standard_wait.html)