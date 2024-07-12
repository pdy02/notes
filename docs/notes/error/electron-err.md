# electron错误本



## 安装electron, 报错electron不完整

`Electron failed to install correctly, please delete node_modules/electron and try installing again`

原因安装的electron少了`dist`和`path.txt`

**解决**

使用`electron-fix`

1. 可以全局安装`electron-fix`

```shell
npm i electron-fix -g
```

2. 在项目跟目录下运行`electron-fix start`

会发现node_modules目录下的electron目录多了path.txt

3. 执行electron目录的install.js

```shell
node ./node_modules/electron/install.js
```



等待下载好electron, 即可.