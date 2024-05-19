# 观察者模式

对象之间**一对多**依赖关系，当一个对象发生**状态改变**时, 所有依赖于它的对象都会**得到通知并自动更新**

## 实现

```js
class Subject{
  constructor(){
    this.observer = []; // 定义观察者数组
  }

  /**
   * @description: 注册观察者
   * @param { Observer } observer : 一个观察者对象
   */
  registerObserver(observer){
    this.observer.push(observer)
  }

  /**
   * @description: 移除观察者
   * @param { Observer } observer : 一个观察者对象
   */
  removeObserver(observer){
    this.observer = this.observer.filter(obs => obs !== observer)
  }

  /**
   * @description: 通知所有的观察者
   * @param { any } msg: 通知的消息
   */
  notifyObservers(msg){
    this.observer.forEach(obs => obs.update(msg))
  }
}


class Observer{
  constructor(name){
    this.name = name;
  }

  /**
   * @description: 更新方法, 具体的更新之后的操作方法由子类的定义
   */
  update(msg){
    console.log(this.name + '更新了, 消息是: ' + msg)
  }
}


// 创建一个主体对象
const subject = new Subject();

// 创建观察者对象
const obs1 = new Observer('A');
const obs2 = new Observer('B');

// 注册进去
subject.registerObserver(obs1);
subject.registerObserver(obs2);

// 通知一下
subject.update('list更新了')
```

> 一个生活的小例子:  
> 你和你朋友去书店买《盗墓笔记》，发现书没有了，老板说下批书快到了，可以等一下，加一下联系方式到时候我通知你们。  
> 于是他们加了老板联系方式（注册两个观察者对象， 书店一方就是`subject`主体对象，你和你朋友就是两个`Observer观察者对象`）。  
> 第二天书到了，老板在微信上通知你们（通知观察者`update`），通知是通知了，但是做什么还是由你和你朋友当下来决定的（`update`方法由具体子类的实现。），是去买书还是去吃饭。

## 案例
