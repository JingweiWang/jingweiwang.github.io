---
title: Factory Method 工厂方法模式
date: 2017-07-25 20:00:00
tags: DesignPatterns
---

# Factory Method 工厂方法模式

## 定义

- Define an interface for creating an object, but let subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.
- 定义一个用于创建对象的接口, 让子类决定实力化哪一个类。工厂方法使一个类的实例化延迟到子类。

## 类图

![](https://github.com/JingweiWang/DesignPatterns/tree/master/src/io/github/jingweiwang/DesignPatterns/factory/Factory.png)

## 应用

### 优点 

- 良好的封装性, 代码结构清晰
- 扩展性优秀
- 屏蔽产品类

### 案例

JDBC切换数据库

### 场景

- new 的替代品
- 需要灵活可扩展的框架
- 异构项目
- 可以使用在测试驱动开发的框架下

## 拓展

### 简单工厂模式

#### 做法

1. 去掉抽象工厂类
2. 将工厂类里的方法变为静态类型
3. 用法: XxxFactory.createXxx(XxxXxx.class);

#### 优点

- 简化类图
- 相当实用

#### 缺点
- 扩展困难
- 不符合开闭原则

### 多工厂模式

#### 做法

1. 抽象工厂类的抽象方法不需要再传递相关参数
2. 分别创建具体工厂类, 继承抽象工厂类
3. 用法: (new XxxFactory()).createXxxx();

#### 优点

- 符合单一职责原则
- 结构简单

#### 缺点

- 可扩展性差
- 可维护性差

#### 一般做法

在复杂的应用中一般使用多工厂的方法, 然后再增加一个协调类, 避免调用者与各个子工厂交流, 协调类的作用是封装子工厂类, 对高层模块提供统一的访问接口。

### 替代单例模式

#### 做法

```java
public class Singleton {
    private Singleton() {
    }
    public void doSomething() {
        //Ignore
    }
}
public class SingletionFactory {
    private  static Singleton singleton;
    static {
        try {
          Class cl = Class.forName(Singleton.class.getName());
          Constructor constructor = cl.getDeclaredConstructor();
          constructor.setAccessible(true);
          singleton = (Singleton) constructor.newInstance();
        } catch (Exception e){
            //Ignore
        }
    }
    public static Singleton getSingleton() {
        return singleton;
    }
}
```

#### 结论

- 反射方法
- 不建议

### 延迟初始化(Lazy Initialization)

#### 做法

通过定义一个 Map 容器, 容纳所有产生的对象, 如果在 Map 容器中已经有的对象, 则直接取出返回; 如果没有, 则根据需要的类型产生一个对象并放入到 Map 容器中, 方便下次调用。

#### 优点

- 可扩展
- 限制某一个产品的最大实例化数量
- 降低对象的产生和销毁带来的复杂性

#### 场景

- JDBC设置最大连接数
- 硬件访问
- 对象初始化较复杂的情况