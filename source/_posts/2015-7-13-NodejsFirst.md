---
layout: post
title: 初识Node.js
date: 2015-7-13
tags: node.js
---

最近突击PHP和框架还有各种环境搭建，接触到了[Node.js](https://nodejs.org/),于是附上node.js环境搭建教程，非常简单。

## Node.js的下载

进入[Node.js](https://nodejs.org/)的官方网站，即可看到如下界面:

{% asset_img QQ20150713-1@2x.png nodejs网站界面 %}

大家看到大大的绿色INSTALL按钮，点击即可根据您所在的平台，下载所需的包。

## 傻瓜安装法

双击下载后的pkg或者安装包，一步一步跟着来就行。

提示安装的路径，node和npm都安装在 /usr/local/bin 下

{% asset_img QQ20150713-2@2x.png nodejs安装界面 %}

软件许可协议

{% asset_img QQ20150713-3@2x.png nodejs安装界面 %}

要点击同意按钮

{% asset_img QQ20150713-4@2x.png nodejs安装界面 %}

直接继续

{% asset_img QQ20150713-5@2x.png nodejs安装界面 %}

{% asset_img QQ20150713-6@2x.png nodejs安装界面 %}

获得权限，输入密码

{% asset_img QQ20150713-7@2x.png nodejs安装界面 %}

安装完成，显示安装的具体位置

{% asset_img QQ20150713-8@2x.png nodejs安装界面 %}

其实就是终端里面一些指令的所谓的$PATH,在Windows下叫做环境变量

{% asset_img QQ20150713-9@2x.png nodejs安装界面 %}

安装完成进入终端，查看版本号，如果出现版本号，则表明已安装好哦！

{% asset_img QQ20150713-10@2x.png nodejs安装界面 %}

## 测试Node.js环境

{% asset_img QQ20150713-11@2x.png nodejs安装界面 %}

根据主页所示，写一个webserver

{% codeblock nodejs-example.js lang:javascript%}
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
{% endcodeblock %}

终端下运行 node nodejs-example.js

{% asset_img QQ20150713-12@2x.png nodejs网站界面 %}

登录 http://127.0.0.1:1337/ 显示如下界面

{% asset_img QQ20150713-13@2x.png nodejs网站界面 %}

怎么样，很简单吧！

node.js是个很神奇的东东，让我们一起在实践中体会！
