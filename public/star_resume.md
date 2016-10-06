# 何睦_Web 开发工程师

## 基本信息

<img src='http://7xq0r0.com1.z0.glb.clouddn.com/me1.jpg' width='135' height='180' style='position:absolute;right:340px;top:120px;'/>

何睦 25岁

<span style='color:#ccc;'>手机号：</span>13268296634 <span style='color:#ccc;'>邮箱地址：</span>oochoo@live.com

<span style='color:#ccc;'>GitHub：</span><https://github.com/jellyfishgh>

<span style='color:#ccc;'>教育：</span>2010.9-2014.7 中南大学 信息管理与信息系统 本科

<span style='color:#ccc;'>工作：</span>2014.7-2016.9 多益网络 策划

## 项目经历

### 1.战盟 移动端官网

#### 项目描述

战盟 App 适配移动设备的官网。自适应 iPhone，iPad 横竖屏，安卓设备，微信访问时点击下载按钮后优雅提示。使用了 FullPage.js 库实现全屏单页滚动的效果，media-query 实现不同分辨率的设备按需请求对应的图片资源。

#### 职责与开发周期

原型设计，独立开发。原型设计，美术设计和切图和开发共计5天。

#### 访问地址与源代码

移动设备访问 <http://dygame.duoyi.com>

源代码 <https://github.com/jellyfishgh/downloadpages>

### 2.iOS 战盟

#### 项目描述

战盟是多益游戏玩家的即时通讯和社交工具，有 Windows iOS 和 Android 三个系统上的客户端，跟所有多益游戏内的好友关系互通。

#### 职责与开发周期

担任产品策划，负责原型设计，开发文档撰写，项目进度管理和产品功能测试。独立开发 app 内嵌 的功能介绍，更新历史，游戏帮派公告和使用条款的网页。2015.8.5 第一个版本上线 App Store，至离职时已迭代10个版本。

#### 内嵌页面描述

以内嵌的`更新历史`为例，企业内部的管理后台提交表单来更改 json 文件，访问时页面时 ajax 异步请求 json 文件并在前端渲染页面。

源代码 <https://github.com/jellyfishgh/versionhistory>

### 3.App 启动时的广告页

#### 项目描述

App 启动时会根据运营同事在企业管理后台上的设置的参数来显示对应的广告页。App 在登录时根据服务端下发的配置文件 md5 来判断是否需要更新本地的 ad.json 配置文件。解析配置文件，根据参数来预下载 html 文件和图片资源。下次 App 启动时，通过 WebView 加载本地预下载成功的 html 文件。

#### 职责与开发周期

负责产品策划与前端页面开发，与 Web 服务端同事，IM 服务端同事，App 客户端同事合作开发。从运营提出需求到开发联调通过共计2周。

1. 设计控制显示广告页的配置文件 ad.json，包含每日广告页的最高次数，最短间隔，某个广告的次数，广告页的图片资源等参数；
1. 根据运营需求开发网页，实现倒计时和点击按钮后调用关闭 WebView 的原生方法来跳过广告；
1. js 实现 适配 iPad 横竖屏切换，js 获取当前设备屏幕尺寸和分辨率来选择加载不同尺寸的图片资源；

#### 源代码

- 前端页面 <https://github.com/jellyfishgh/advertisement/blob/master/public/ad.html>
- 配置文件 <https://github.com/jellyfishgh/advertisement/blob/master/public/ad.json>

### 4.游戏更新日志

#### 项目描述

PC 端战盟是多益所有游戏的下载，安装和更新的管理器。游戏更新时玩家能够通过 PC 端战盟的内嵌浏览器访问该游戏的更新日志页面。客户端内嵌浏览器使用的是 CEF 的一个自定义版本，因为客户端使用的最新 CEF 不支持 gbk，所以该项目也更换过版本，从上线至我离职时一直稳定运行。

#### 职责与开发过程简述

独立开发，第一次开发上线历时1周。一年后改版过一次，历时半天后上线。

第一个版本 <http://wzupdate.duoyi.com/sw.html>

1. iframe 请求 txt 文件，js 根据每个游戏的格式解析后在前端渲染 html；
1. 因为跨越访问受限，每个游戏都有一个 html 文件部署在跟 txt 文件在同一个目录；
1. 因为 txt 文件是 gbk 编码，所以网页编码也设置为 gbk 编码；

第二个版本 <http://wzupdate.duoyi.com/sw_new.html>

1. ajax 异步请求 txt 文件，使用 Blob 实现 GBK 转 UTF-8

#### 访问地址与源代码

以 神武2 这个游戏为例 <http://wzupdate.duoyi.com/sw_new.html>。因为是内嵌在 PC 客户端上显示，所以滚动条和页面背景的样式作了特殊处理。

源代码 <https://github.com/jellyfishgh/gamelog>。源代码中使用的是 node 在服务端实现转码和渲染 html 页面，跟生产环境中不一致。

## 技能简述

- 熟悉 Node.js／JavaScript，Java，Html，CSS；
- 熟悉 TCP/IP 网络通信，Http 协议；
- 使用过 Express 和 Koa Web 开发框架；
- 使用过 React，Bootstrap 前端开发框架；

## 个人说明

自己原来负责的产品完成了最初规划的所有功能，经过月均一个版本的迭代，已趋稳定。对前两年的工作已经告一段落，自己想要进入一个全新的工作领域。经过两年坚持不懈的自学 Web 开发和前端知识，我有信心完成新的工作挑战。

纸上得来终觉浅，绝知此事要躬行。生产环境中极致的性能优化和工程化的实践我还没有机会尝试，阅读再多的经验分享，本地尝试再多的工具，仍然无法在实际中开发出支撑高并发的系统，也无法理解分布式系统，负载均衡和多级缓存的意义。自己想跟优秀的人一起从事面向用户产品的开发，切身实践并积累生产环境中的经验。