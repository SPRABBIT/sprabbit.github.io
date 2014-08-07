---
layout: spengine
title: 下载 SpeShow - SpeShow图文演示
---

##下载 SpeShow

*注意：本页面为 SpeShow 0.9（ks版本）的下载页面，SpeShow 0.9 及以下版本将逐步放弃支持，请前往 [SpeShow.JS 版本的下载页面](/speshow/download.html)以下载最新版 SpeShow。*

在您下载SpeShow之前，请先阅读[使用许可](license.html)。

下载KScript编辑器请到[这里](editor.html)。

下载SSPackGuider打包器请到[这里](pack_guider.html)。

###配置要求

运行本软件的计算机 *必须安装有支持 DirectX 9.0c 和 Shader Model 2.0 或以上的系统（Windows XP/Vista/7/8）和显卡*。

除此之外，我们建议您的计算机满足以下要求，以达到流畅效果：

 - 双核1.6G以上的CPU
 - 2G内存
 - 4G以上空余硬盘容量

###版本

当前发行的版本罗列如下：

 - 2013-10-06 [SpeShow v0.9 Beta](#speshow_v_0.9) *NEW*
 - 2013-03-03 [SpeShow v0.8.5 Beta](#speshow_v_0.8.5)
 - 2012-12-18 [SpeShow v0.8.3 Beta](#speshow_v_0.8.3)
 - 2012-10-20 [SpeShow v0.8.2.2 Beta](#speshow_v_0.8.2.2)
 - 2012-10-07 [SpeShow v0.82 Beta](#speshow_v_0.82)
 - 2012-08-17 [SpeShow v0.8 Alpha](#speshow_v_0.8)

*****************************************************************************

<h3 id="speshow_v_0.9">Version 0.9 Beta</h3>

本版在上一个版本Beta 0.8.5之上，新增以下功能：

 - 添加绝对定位绘图模式，并默认开启。此功能将改善绘图质量，尤其是Alpha混合的效果，如文字绘制。[详情...](tutorial_standard_component.html)
 - 处理内存泄露问题，提高执行效率。
 - 降低UAC等级，使用户不需要管理员权限运行（若未注册XAudio2则需要右键以管理员权限运行一次）。
 - 改进即时触发脚本的执行方式，以消除动画在显示上的延迟。
 - 改进KScript函数执行方式，令其使用已生成好的语法树来执行，而非重新编译一遍脚本。[详情...](tutorial_senior_listener.html)
 - 添加键盘按钮点击响应事件。[详情...](tutorial_kscript_function.html)
 - 添加脚本文件错误位置提醒。
 - 禁止窗口标题相同的程序多开。
 - 加强打包的保密性。[详情...](pack_guider.html)
 - 改善存档文件大小。
 - 添加等待某组件点击的功能。[详情...](tutorial_standard_wait.html)
 - 添加 @list 的鼠标滚轮事件。[详情...](tutorial_standard_list.html)
 - 改善从文件读脚本的效率。

本版在上一个版本Beta 0.8.5之上，修复以下Bug：
                    
 - 修复跳过失效的问题。
 - 修复跳过时脚本顺序混乱问题。
 - 修复因某段脚本执行时间过长，而导致立即执行脚本插入位置错误的问题。
 - 修复精灵绘制效率下降的问题。
 - 修复对话框特效显示问题。
 - 修复对话框换行换页符显示错误的问题。
 - 修复临时脚本的继承重写错误。
 - 修复文字框初次显示花屏问题。
 - 修复列表的崩溃问题。
 - 修复已读脚本记录错误。
 - 修复组件背景图片资源矩形错误。
 - 修复强行退出程序引起的错误。
 - 修复分辨率不同的显示差异。
 - 修复一个读取数据的死循环。
 - 修复因分辨率改变引起设备重置错误的问题。
 - 修复设备丢失后程序崩溃的问题。
 - 修复重置设备后的特效失效问题。       

另外感谢 冰楓メ約錠、[梦羽辉翼](http://weibo.com/u/2416037837) 和 林卯 测试使用我们的引擎并给了我们改进的建议。

本版本为不稳定版本，您在使用过程中可能会遇到一些Bug。请您将Bug出现的情形记录下来，并到[SPRABBIT论坛的SpeShow板块](http://bbs.sprabbit.com/categories/speshow)中反映，或通过各种[联系方式联系我们](http://blog.sprabbit.com/about/)，我们会为您找到一个解决办法，并在以后的版本中修复此Bug。

下载：

SpeShow 0.9：[百度网盘](http://pan.baidu.com/share/link?shareid=639531155&uk=872546290)

SpeShow 0.9 以及示例（《Sicily 序章》 ）：[百度网盘](http://pan.baidu.com/share/link?shareid=1092148053&uk=872546290)

*****************************************************************

<h3 id="speshow_v_0.8.5">Version 0.8.5 Beta</h3>

本版在上一个版本Beta 0.8.3之上，新增以下功能：

 - *内置音视频解码（基于[LAV Filters](http://code.google.com/p/lavfilters/)），不再需要安装FFDshow等解码器*
 - 几乎允许您在 pictureBox 组件中播放任何格式的视频。相关函数见[教程](tutorial_4.html#part_3)
 - 添加四通道视频支持（支持Alpha通道），可以正常播放半透明视频
 - 改进音频播放方式，减少读取时间
 - 添加粒子系统功能，可以模拟下雪，下雨等特效。相关函数见[教程](tutorial_4.html#part_6)
 - 添加资源打包功能，避免裸露资源文件。打包文件需要下载[打包器SSPackGuider](pack_guider.html)
 - 添加跳过功能，包括跳过已读和自动跳过。相关函数见[教程](tutorial_4.html#part_7)
 - 预编译HLSL文件，加快程序执行效率
 - 修改 SpeShow 的 Logo，以及程序图标

本版在上一个版本Beta 0.8.3之上，修复以下Bug：
                    
 - 帧动画的覆盖问题
 - 修复示例脚本中的一些bug               

本版本为不稳定版本，您在使用过程中可能会遇到一些Bug。请您将Bug出现的情形记录下来，并到Q群： 197397909 中反映或通过各种[联系方式联系我们](http://blog.sprabbit.com/about/)，我们会为您找到一个解决办法，并在以后的版本中修复此Bug。

下载SpeShow：[百度网盘](http://pan.baidu.com/share/link?shareid=311161&uk=872546290)

下载基本示例：[百度网盘](http://pan.baidu.com/share/link?shareid=311195&uk=872546290)

下载视频播放示例（Alpha）： [百度网盘](http://pan.baidu.com/share/link?shareid=311175&uk=872546290)

下载粒子系统示例（雪）： [百度网盘](http://pan.baidu.com/share/link?shareid=311149&uk=872546290)

下载粒子系统示例（雨）： [百度网盘](http://pan.baidu.com/share/link?shareid=311148&uk=872546290)

PS:将示例解压到SpeShow根目录后执行SpeShow.exe即可。

*****************************************************************

<h3 id="speshow_v_0.8.3">Version 0.8.3 Beta</h3>

本版在上一个版本Beta 0.8.2.2之上，新增以下功能：

 - *解除脚本编码UTF-8无BOM限制，若要使用Unicode只需使用UTF-8编码即可。*
 - 锁定帧率(避免过高的CPU占用率)
 - 用法：@fps{ lock : [帧率] } 
 - 其中[帧率]是一个整数，默认为60，若设置为0，则解除锁定帧率。              

本版在上一个版本Beta 0.8.2.2之上，修复以下Bug：
                    
 - 某些A卡计算机上出现的对话框花屏问题
 - 缺少音频输出设备导致播放音乐崩溃
 - 修复示例脚本中的一些错误                    

本版本为不稳定版本，您在使用过程中可能会遇到一些Bug。请您将Bug出现的情形记录下来，并到Q群： 197397909 中反映或通过各种[联系方式联系我们](http://blog.sprabbit.com/about/)，我们会为您找到一个解决办法，并在以后的版本中修复此Bug。

下载地址（附带示例）：[百度网盘](http://pan.baidu.com/share/link?shareid=141326&uk=872546290)

**********************************************************************

<h3 id="speshow_v_0.8.2.2">Version 0.8.2.2 Beta</h3>

本版在上一个版本Beta 0.82之上，修复以下Bug：

 - 无安装DXSDK的系统无法播放音乐
 - 快速保存快速读取出错
 - 音乐以及视频播放失败导致程序崩溃                    

本版本为不稳定版本，您在使用过程中可能会遇到一些Bug。请您将Bug出现的情形记录下来，并到Q群： 197397909 中反映或通过各种(http://blog.sprabbit.com/about/)[联系方式联系我们]，我们会为您找到一个解决办法，并在以后的版本中修复此Bug。

下载地址（附带示例）： [百度网盘](http://pan.baidu.com/share/link?shareid=84406&uk=872546290)

*******************************************************************

<h3 id="speshow_v_0.82">Version 0.82 Beta</h3>

本版本为 SpeShow 首个Beta版本。其在上一个版本Alpha 0.8之上，增加了以下功能：

 - 文字特效
 - 视频播放（MPG、MP4、MOV、AVI）
 - 音乐播放（WAV、OGG）                    
 - 列表组件
 - 事件响应脚本
 - 图片框支持精灵动画
 - 图片框支持视频显示
 - AVG专用组件对话框
 - 等待对话框内容显示完毕
 - 脚本跳转与调用
 - 自定义脚本函数

本版本为不稳定版本，您在使用过程中可能会遇到一些Bug。请您将Bug出现的情形记录下来，并到Q群： 197397909 中反映或通过各种[联系方式联系我们](http://blog.sprabbit.com/about/)，我们会为您找到一个解决办法，并在以后的版本中修复此Bug。

下载地址： [百度网盘](http://pan.baidu.com/share/link?shareid=72089&uk=872546290)

 下载示例： [Sample](tutorial_8.html)

*******************************************************************

<h3 id="speshow_v_0.8">Version 0.8 Alpha</h3>

本版本为 SpeShow 首个可发行版本。相对稳定，因为只封装了图文演示所需的最基本模块。其实现功能如下：

 - UI屏幕
 - 基本UI组件
 - 图片框组件
 - 文字框组件
 - UI组件特效动画
 - UI组件插值动画
 - 图片框组件图像混合
 - 图片框组件图像切换
 - 等待时间或等待鼠标点击

本版本最先为Alpha版，即内测版本。因为功能较少，较稳定，所以比较适合制作纯演示类程序，如教程等。如需使用本版，请加入*用户Q群： 197397909*， 或[<span>联系我们</span>](http://blog.sprabbit.com/about/)。
