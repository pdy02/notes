# 面向对象

java的面向对象有三大概念

- 封装
- 继承
- 多态



## 封装

封装（Encapsulation）是指一种将抽象性函式接口的实现细节部分隐藏、隐藏起来的方法。

封装可以认为是一个保护屏障，防止该类的代码和数据接口被外部类定义的代码随意访问。

- 想要访问该类的代码和数据，必须通过严格的接口控制。

- 我们能修改自己的实现代码，而不用修改那些调用我们代码的程序片段。
- 容易理解，易于维护。



**优点**

- 良好的封装可以**减少耦合**
- 类内部的结构可以自己修改
- 可以对成员变量进行更加精细的控制
- 隐藏信息，实现细节



> 对类里面的一些数据变量进行一个**封装**. 使外部不能对某些变量任意读取修改的权限.
>
> 将对变量的读写操作的权限封装为类自身. 外部想要获取必须先通过类自身的流程.



**Using**

```java
public class Test{
    // 一些私有的变量
    private int age;
    private String name;
    public Test(int age, String name){
        this.age = age;
        this.name = name;
    }
    
    /**获取age */
    public int getAge(){
        // 对age数据读取之前的一些操作...
        return this.age;
    }
    
    // 同上
    public String getName(){
        return this.name;
    }
    
    // ...setAge()  setName()同理
}
```

> 加强中央集权

## 继承

子类可以继承父类的字段和方法. 这样一些重复性的工作就无需再放到子类去定义了.

使用`extends`关键字继承



**Using**

::: code-group
```java [Animal.java]
public class Animal{
    String race;
    
    public Animal(String race){
    	this.race = race;
    }
    
    public void eat(){
        
    }
    
    public void say(){
        
    }
}
```

```java  [Dog.java]
// 继承父类
public class Dog extends Animal{
	public Dog(String race){
		super(race)
	}
}
```
:::



> 继承家业



## 多态



### 覆写

简单来说就是子类重写父类的方法.  

重写方法需要子类方法与父类方法的**参数列表相同,返回类型相同.** 


# 抽象类

对象是通过类描述的，但是不是所有的类都是描述对象的。

有些类的信息不足以描述对象。这种就是抽象类。它只负责抽象出属性和方法的一个**类**。它甚至不负责实现方法的实现。所以它是不能实例化对象的,只能**继承**，它除了不能实例化对象，和其他类几乎没有区别。

这样的**抽象类**用一个关键字来定义。——**`abstract`**

**用法**

```java
public abstract class Employee
{
   private String name;
   private String address;
   private int number;
   public Employee(String name, String address, int number)
   {
      System.out.println("Constructing an Employee");
      this.name = name;
      this.address = address;
      this.number = number;
   }
   public double computePay()
   {
     System.out.println("Inside Employee computePay");
     return 0.0;
   }
   public void mailCheck()
   {
      System.out.println("Mailing a check to " + this.name
       + " " + this.address);
   }
   public String toString()
   {
      return name + " " + address + " " + number;
   }
   public String getName()
   {
      return name;
   }
   public String getAddress()
   {
      return address;
   }
   public void setAddress(String newAddress)
   {
      address = newAddress;
   }
   public int getNumber()
   {
     return number;
   }
}
```

> 除了不能实例化，和其他正常类也一样。

## 抽象方法

抽象方法它负责定义方法，但是没有实现，具体的实现交给子类来实现，它没有方法体。如果子类没有实现则不会通过编译。

构造方法和类方法（static修饰的静态方法）不能声明成抽象方法。

> 也就是说  
>
> 1. 抽象方法的类必须也是抽象类
> 2. 子类必须实现该抽象方法
> 3. 或者子类也是抽象类
>
> 都不满足则不会通过编译。直到最终有子类来实现该方法

- 通过关键字定义**`abstract`**抽象方法.

- 抽象方法只能定义**在抽象类内**



# 接口

**`interface`**

接口，在java里是一个抽象类型，是**抽象方法的集合**。使用`interface`关键字来声明。其他类通过继承接口的方式，来继承接口的方法。

> **接口不是类**，但是它和类很相似。但注意，它们是不同的概念。所以接口同样**也不能实例化**。
>
> - 类描述对象的属性和方法
> - 接口则是包含要实现的方法

类可以实现接口，一个实现接口的类，除非它是一个抽象类，不然都要实现接口声明的方法。

- 要么是抽象类继承接口
- 要么实现接口的所有方法



接口和类的**区别**

- 接口不能实例化对象
- 接口没有构造方法
- 接口所有的方法必须是抽象方法，java8之后接口可以使用`default`关键字修饰的非抽象方法
- 接口不能包含成员变量（因为没有实例化），除了`static`和`final`修饰的变量
- 接口不是被类继承了，而是要被类**实现**
- 接口支持多继承



**接口特性**

- 接口方法都是隐式抽象的，接口方法会被隐性指定为`public abstract`，其他修饰符会报错。
- 接口可以含有变量，但接口变量隐式指定为`public static final`（`private`会编译报错）
- 接口方法不能在接口中实现，只能由实现接口的类来实现
