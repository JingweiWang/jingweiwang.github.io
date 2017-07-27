---
layout: post
title:  AndroidStudio超简单配置AndroidAnnotations框架
date: 2015-8-4
tags: Android
---
发现一Android框架，号称使用后可以将107行的Android代码简化为61行。

此框架官方网站为[AndroidAnnotations](http://androidannotations.org/)

开始时按照官网的说明，各种Download各种配置，结果都以失败告终，最终发现一简单方法，不需要手动下载及导入任何api，只需几行代码即可，这得益于[gradle](https://gradle.org/)这一高超的项目管理（构建集成）工具。

tips：Gradle 是以 Groovy 语言为基础，面向Java应用为主。基于DSL（领域特定语言）语法的自动化构建工具。

## 第一步

新建一个Android项目，然后我们在Project视图中打开build.gradle文件，将下列代码添加进去。

{% codeblock lang:groovy %}
classpath 'com.neenbedankt.gradle.plugins:android-apt:1.6'
{% endcodeblock %}

如下图所示：

{% asset_img QQ20150806-1.png 第一步 %}

## 第二步

还是在Project视图中，不过要进入app文件夹，打开此文件夹的build.gradle文件，将下列代码添加进去。

```groovy
apply plugin: 'android-apt'
def AAVersion = '3.3.2'
```

3.3.2为当前使用的AndroidAnnotations版本号，最新版本可在AndroidAnnotations的[github](https://github.com/excilys/androidannotations/wiki/Download)中查询。

{% codeblock lang:groovy %}
apt "org.androidannotations:androidannotations:$AAVersion"
compile "org.androidannotations:androidannotations-api:$AAVersion"
{% endcodeblock %}


{% codeblock lang:groovy %}
apt {
    arguments {
        androidManifestFile variant.outputs[0].processResources.manifestFile
        resourcePackageName "io.github.jingweiwang.helloworld"
    }
}
{% endcodeblock %}

不要忘记修改你的包名哦！

如下图所示：

{% asset_img QQ20150806-2.png 第二步 %}

## 第三步

点击右上角“Sync Now“按钮，把刚才修改的信息同步起来，这时，gradle会自动下载所需的api包

然后你就会发现，AndroidAnnotations-apis就静静的躺在那里。

请看图！

{% asset_img QQ20150804-3.png 第三步 %}

## 第四步

打开你的代码，删掉没用的东西，尽情的让AndroidAnnotations框架帮你做体力活吧！
加入标签，同时，Android Studio会自动帮你添加import包

{% codeblock lang:java %}
@EActivity(R.layout.activity_main)
{% endcodeblock %}

如下图所示：

{% asset_img QQ20150806-4.png 第四步 %}

## 第五步

最重要的一步，打开AndroidManifest.xml文件，在你的MainActivity后面添加“_”（呃，这是下划线！千万不要忘记）

{% asset_img QQ20150806-5.png 第五步 %}

## 第六步

尽情的，优雅的运行吧。哈哈哈

下图为真机运行：

{% asset_img Screenshot_2015-08-04-14-26-40.png 第六步 %}
