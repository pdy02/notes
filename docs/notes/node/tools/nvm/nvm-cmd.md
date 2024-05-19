# nvm的常用命令

## `nvm -v`
用来查看nvm的版本

## `nvm list`
用来展示当前安装的所有node，前面带星号的是正在使用的node版本

## `nvm list available`
查看当前可下载的node版本
> 下载源来自你的nvm配置文件setting.txt的`node_mirror`字段

## `nvm install <版本号>`
安装对应的版本的node
> 只写大版本号会自动下载当前大版本号中最高的版本.

## `nvm use <版本号>`
使用/切换 对应的版本的node