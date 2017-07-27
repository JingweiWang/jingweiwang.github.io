---
title: Prototype 原型模式
date: 2017-07-24 20:00:00
tags: DesignPatterns
---

# Prototype 原型模式

## 定义

- Specify the kinds of objects to create using a prototypical instance, and create new objects by copying this prototype.
- 用原型实例指定创建对象的种类, 并且通过拷贝这些原型创建新的对象。

## 类图

![](https://github.com/JingweiWang/DesignPatterns/blob/master/src/io/github/jingweiwang/DesignPatterns/prototype/Prototype.png?raw=true)

## 应用

### 优点 

- 性能优良
- 逃避构造器的约束

### 场景

- 资源优化场景
- 一个对象多个修改者场景

## 注意事项

- 构造器不会执行
- 浅拷贝
- 深拷贝

## 拓展

### 浅拷贝 与 深拷贝

注意: 使用原型模式时, 引用的成员变量必须满足两个条件才不会被拷贝: 

1. 是类的成员变量, 而不是方法内变量;
2. 必须是一个可变的引用对象, 而不是一个原始类型或不可变对象。

### clone 与 final

要使用clone方法, 类的成员变量上不要增加final关键字。