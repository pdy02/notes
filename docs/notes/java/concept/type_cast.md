---

---

# 强制类型转换

- 默认情况下，大范围类型的变量直接赋值给小范围类型的变量会报错
- 可以强行赋值`数据类型 变量 = (数据类型)变量`

```java
int a = 20;
// byte b = a; // 直接赋值, 报错

byte b = (byte)a; // 强行转换
```

> 为什么会报错: 因为可能会出现**数据丢失**



浮点型转换成整型`int`时候, 是直接舍弃小数部分.



## 原理

在强行转换时候, 计算机内部是如何进行的.

它是直接截取的



