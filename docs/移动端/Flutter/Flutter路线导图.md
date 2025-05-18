---

mindmap-plugin: basic

---

# Flutter 学习路线图

## 第一阶段：基础入门与环境配置
- 1.1 了解 Flutter 背景与优势
	- 什么是 Flutter？
		- 跨平台开发、单代码库、多端支持（Android、iOS、Web、桌面）
	- Flutter 的设计理念：
		- 响应式编程、热重载、Widget 架构
- [1.2 安装与配置开发环境](./入门/环境搭建.md)
	- 安装 Flutter SDK
		- 官方下载：[Flutter 官网](https://flutter.dev)
	- 配置 IDE（Android Studio/VS Code）
		- 安装 Flutter 和 Dart 插件
	- 运行 `flutter doctor` 检查环境配置是否正确
- 1.3 [认识 Dart 语言](Dart语言/0.1-Dart.md)
	- 基础语法：变量、数据类型、运算符、流程控制
	- 函数、面向对象编程
	- 异步编程（Future、async/await）

## 第二阶段：Flutter 核心概念与组件开发
- 2.1 Widget 系统
	- 理解 StatelessWidget 与 StatefulWidget
	- 常用基础 Widget：
		- `Text`、`Container`、`Image`
		- 布局 Widget：`Row`、`Column`、`Stack`、`Padding`
- 2.2 布局与响应式设计
	- 掌握布局原理和约束（Constraints）
	- 学习常用布局组件：
		- `Expanded`、`Flexible`、`ListView`、`GridView`
- 2.3 路由与导航
	- 使用 Navigator 进行页面跳转
		- 命名路由与匿名路由
	- 路由传参与页面返回数据
- 2.4 状态管理
	- 基础状态管理：
		- 使用 `setState`、InheritedWidget
	- 进阶状态管理：
		- Provider、Bloc、Riverpod、GetX 等

## 第三阶段：进阶功能与性能优化
- 3.1 异步编程与网络请求
	- 深入理解 Future、async/await
	- 使用 Stream 处理数据流
	- 网络请求：
		- 使用 `http` 或 `dio` 库进行 API 调用
		- JSON 数据解析与序列化
- 3.2 本地存储与数据持久化
	- 数据库存储：SQLite、Hive
	- 简单存储：Shared Preferences
- 3.3 动画与自定义组件
	- 学习内置动画组件：
		- `AnimatedContainer`、`Hero` 动画、`AnimatedSwitcher`
	- 自定义绘制：
		- 使用 `CustomPaint` 与 Canvas 绘制自定义 UI
- 3.4 性能优化与调试
	- 使用 Flutter DevTools 进行性能监控与调试
	- 优化渲染、减少重绘、内存管理

## 第四阶段：实战项目与持续学习
- 4.1 小项目实战
	- 完成简单项目：
		- 计数器、待办事项、天气应用等
	- 分析项目需求，设计 UI 及状态管理方案
- 4.2 参与开源项目
	- 在 GitHub 上寻找优秀的 Flutter 开源项目
		- 阅读源码，了解项目架构和最佳实践
	- 参与社区讨论，提交 PR 与代码贡献
- 4.3 持续关注与资源更新
	- 关注 Flutter 官方博客、Flutter China、知乎专栏等
	- 参加 Flutter 技术大会和线上线下沙龙
	- 持续学习最新的技术和工具

## 推荐学习资源
- **官方文档**
[Flutter 官方文档](https://flutter.dev/docs)
[Dart 语言指南](https://dart.dev/guides)
- **在线工具**
[DartPad](https://dartpad.dev/) – 在线编辑和运行 Dart/Flutter 代码
- **视频教程**
	- YouTube、Bilibili 上搜索 “Flutter 入门”、“Flutter 实战”
- **书籍推荐**
	- 《Flutter 实战：第二版》
	- 《Flutter 从入门到精通》
- **社区交流**
	- Flutter 官方论坛、StackOverflow、Reddit（r/FlutterDev）



.
