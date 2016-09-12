# 何睦_Web开发工程师

## 基本信息

**何睦** 男 25岁 湖北黄冈

手机号：13268296634 邮箱地址：oochoo@live.com

教育：2010.9-2014.7 中南大学 **信息管理与信息系统**

GitHub：<https://github.com/jellyfishgh>

<img src='http://7xq0r0.com1.z0.glb.clouddn.com/me1.jpg' style='width:129px;height:auto;position:absolute;right:32px;top:160px;'/>

## 工作经历

2014.7-2016.9 多益网络 **策划**

独自担任 战盟 iOS App 策划，负责产品功能设计和项目进度管理的工作，也会开发一些关联的 Web 页面。

**App 移动官网**

战盟 App 下载页面<http://quan.duoyi.com/html/dp.html> 的开发，实现了对 微信，安卓，iPhone 和 iPad 的完美适配。

> 使用了 FullPage.js 实现 全屏单页滚动的效果，media-query 实现不同分辨率的设备按需请求对应的图片资源。

**广告页**

App 启动时会根据运营同事在管理后台上的设置的参数来显示广告页，广告页时 App 通过 WebView 加载本地预下载成功的 html 文件。

> 1. 设计控制显示广告页的配置文件 ad.json，包含每日广告页的最高次数，最短间隔，某个广告的次数，广告页的图片资源等参数；
> 1. 根据运营需求开发网页，实现倒计时和点击按钮后调用关闭 WebView 的原生方法来跳过广告；
> 1. media-query 实现不同分辨率的设备加载不同的图片资源，js 实现 适配 iPad 横竖屏切换；

**游戏更新日志**

PC 端战盟上的需要显示游戏更新日志，日志来源是一个由游戏策划通过 SVN 和 中文环境下的 Windows 记事本 维护的 txt 文件，所以该文件是 GBK 编码的。

eg：神武2 <http://wzupdate.duoyi.com/sw_new.html>

> 1. 本来想使用 JS 在前端解析 txt 并渲染 DOM，因为浏览器跨域限制，改用 php 在服务端解析 txt 文件并生成 html；
> 2. 开发完成之后，才知道公司 Web 服务端只支持 .Net 和 Node，于是改用 Node 重写了解析算法并使用了 iconv-lite 将 GBK 转码成 UTF-8；
> 3. 开发并本地测试通过，准备让网站部部署 Node 服务时，被告知不能为了该小的应用而部署单独的 Web 服务；
> 4. 最后只能采用前端 JS 解析渲染的方案，于是给所有游戏都分别写了 html文件，内联 JS 和 CSS，并让游戏策划把 html 文件通过 SVN 放置在 txt 文件的同一路径下来解决浏览器跨域访问的限制；
> 5. 通过 Ajax 请求 txt 文件，使用 Blob 实现 GBK 转 UTF-8，前端 JS 复用 Node 中解析渲染 DOM 的算法；

## 技能简述

- 熟悉 Stack，HashMap 等常用数据结构及其实现原理；
- 熟悉快速排序，二分查找等常用算法；
- 熟悉 HTTP，TCP/IP，了解 UDP，WebSocket；
- 熟悉 Node/JavaScript 和 Java，了解 HTML5，CSS3 和 ES6；
- 熟悉 Express，了解 Koa@1.x；
- 熟悉 JSON，了解 protobuf；
- 熟悉 MySQL，了解 Redis 和 MongoDB；
- 熟悉 jQuery 和 Zepto，了解 Bootstrap；
<!-- - 了解 MVC，MVVM 软件的架构思想，了解 React 和 Angular@1.x 前端数据绑定框架； -->
<!-- - 了解负载均衡，缓存更新等分布式系统的设计思想和策略； -->
<!-- - 了解性能优化等工程化的策略和使用工具； -->
- 熟悉多线程编程，了解进程间的通信机制；
- 熟练使用 Git 和 Linux(Ubuntu)；

## 个人说明

2 年前，作为一个应届毕业生，以策划助理的岗位踏入职场。查阅需求挖掘与用户体验方面的资料时发现了 Taobao UED，一步一步地学习他人分享的技术时，发现自己慢慢步入到了 Web 开发的世界，进而迷恋上了 Node/JS。

生产环境中极致的性能优化和工程化的实践我还没有机会尝试，阅读再多的经验分享，本地尝试再多的工具，仍然无法在实际中开发出支撑高并发的系统，也无法理解分布式系统，负载均衡和多级缓存的意义。纸上得来终觉浅，绝知此事要躬行。自己想跟优秀的人一起从事面向用户产品的开发，切身实践并积累生产环境中的经验。

自己原来负责的产品完成了最初规划的所有功能，经过月均一个版本的迭代，已趋稳定。对前2年的工作告一段落，进入一个全新的工作领域，踏实地完成所有挑战。
