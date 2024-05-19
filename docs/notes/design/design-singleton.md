# JS单例模式

单例模式是指一个类Class只能有**一个实例**. 即使多次实例化该类, 返回的实例都是**同一个**.
并且提供一个全局访问点.

## 实现
1. 使用`#`私有化

```js
class Animal{
  #instance = null;
  constructor(...args){
    if(!Animal.#instance){
      Animal.#instance = new Animal(...args);
    }
    return Animal.#instance;
  }
  // 其他方法...
}
```
> 使用了`#`来私有化属性.(其他语言可以直接把构造函数私有化)  
> 不考虑兼容可以使用这个

2. 使用`Proxy`代理

写一个`singleton函数`单独导出来, 它是一个为某个类实现单例模式的方法.

这样当多个类都需要单例模式时, 就无需为每个类写一遍单例模式逻辑.
:::code-group
```js:line-numbers {8,9}  [singleton.js]
/**
 * @description: 为类实现单例模式
 * @param { Class } className: 一个类
 * @return { Proxy } 返回该类的Proxy代理
 */
export function singleton(className){
  let instance = null;
  return new Porxy(className, { 
    construct(target, args){ // 劫持了类的构造调用 
      if(!instance){
        instance = new target(...args)
      }
      return instance;
    }
  })
}
```
```js:line-numbers {9} [Animal.js]
import { singleton } from '@/utils/singleton.js'

class Animal{
  constructor(name){
    this.name = name
  }
}

const newAnimal = singleton(Animal); // 返回的是Animal类的代理
export { animal as Animal }
```
:::