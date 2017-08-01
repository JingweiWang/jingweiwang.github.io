---
title: Template Method 模版方式模式
date: 2017-08-01 14:36:17
tags: DesignPatterns
---

## 定义

- Define the skeleton of an algorithm in an operation, deferring some steps to subclasses. Template Method lets subclassesredefine certain steps of an algorithm without changing the algorithm's structure.
- 定义一个操作中的算法的框架, 而将一些步骤延迟到子类中。使得子类可以不改变一个算法的结构即可重定义该算法的某些特定步骤。

## 类图

![](https://github.com/JingweiWang/DesignPatterns/blob/master/src/io/github/jingweiwang/DesignPatterns/template/Template.png?raw=true)

## 代码地址

[GitHub](https://github.com/JingweiWang/DesignPatterns/tree/master/src/io/github/jingweiwang/DesignPatterns/template)

## 应用

### 优点

- 封装不变部分, 扩展可变部分
- 提取公共部分代码, 便于维护
- 行为由父类控制, 子类实现

### 缺点

- 子类对父类产生影响
- 代码阅读困难

### 场景

- 多个子类有共有的方法, 并且逻辑基本相同时
- 重要、复杂的算法, 可以把核心算法设计为模版方法, 周边的相关细节功能则由各个子类实现
- 重构时, 把相同的代码抽取到父类, 通过钩子方法约束其行为

### 注意事项

- 为防止恶意操作, 一般模版方法都加上 `final` 关键字, 不允许被重写
- 模版中的基本方法尽量设计为 `protected` 类型
- 要符合迪米法则, 尽量不要扩大父类中的访问权限

## 拓展

### 钩子方法(Hook Method)

在抽象类中可以设置 钩子方法 , 其返回值影响模版方法的结果