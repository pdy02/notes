# dio工具库的使用

## 安装 

链接

- [pub.dev/dio链接](https://pub-web.flutter-io.cn/packages/dio)



安装

- Command Line

```shell
flutter pub add dio
```

- pubspec.yaml

```yaml
dependencies:
  dio: ^5.8.0+1
```



## 使用



### 基础使用



```Dart
import 'package:dio/dio.dart';

// 实例化Dio类
final dio = Dio();

// 一个异步函数
void getHttp() async {
  // 发起一个Get请求
  final response = await dio.get('https://dart.cn'); // 返回值Response类型
  print(response);
}
```





### 基础配置

`BaseOptions`：设置默认的配置，如果没有设置就会使用它的配置。

```dart
const _defaultTimeout = Duration(seconds: 20);
dio.options = BaseOptions(
   // 请求方式
  	method:"GET",
   // baseUrl
   baseUrl:"https://baidu.com",
   // 连接超时时间
   connectTimeout: _defaultTimeout,
   // 接受超时时间
   receiveTimeout: _defaultTimeout,
   // 发送超时时间
   sendTimeout: _defaultTimeout,
   // 请求头,可以设置Cookie之类的
   headers:{},
   // query查询参数
   queryParameters:{},
);
```



#### 设置网络代理`Proxy`

```dart
// 代理配置（根据需要保留）
dio.httpClientAdapter = IOHttpClientAdapter(
  createHttpClient: () {
    final client = HttpClient();
    client.findProxy = (uri) => 'PROXY localhost:7890';
    return client;
  },
);
```





## 项目使用



### 1. 封装dio_instance.dart



创建一个`dio_instance`文件，实现一个`dio`的单例模式，并且配置好基础配置，让一个项目的多个请求有一个基础的默认配置，这样不需要重复的实例化`dio`和一些重复的配置。



示例：`dio_instance.dart`

```dart
import 'dart:io';
import 'package:dio/dio.dart';
import 'package:dio/io.dart';
import '../datas/const_data.dart';  // 我的常量文件

class DioInstance {
  static final DioInstance _instance = DioInstance._internal();
  factory DioInstance() => _instance;
  
  final Dio dio = Dio();
  static const _defaultTimeout = Duration(seconds: 20);

  DioInstance._internal() {
    dio.options = BaseOptions(
      method: _HttpMethod.get,
      baseUrl: MyApiData.baseUrl,
      connectTimeout: _defaultTimeout,
      receiveTimeout: _defaultTimeout,
      sendTimeout: _defaultTimeout,
      headers: MyApiData.headers,
      queryParameters: {'lang': 'zh', 'version': MyApiData.version},
    );

    // 代理配置（根据需要保留）
    dio.httpClientAdapter = IOHttpClientAdapter(
      createHttpClient: () {
        final client = HttpClient();
        client.findProxy = (uri) => 'PROXY localhost:7890';
        return client;
      },
    );
  }
}

// http方法 枚举类
class _HttpMethod {
  static const String get = "GET";
  // static const String post = "POST";
  // static const String put = "PUT";
  // static const String delete = "DELETE";
  // static const String patch = "PATCH";
}
```



### 2. 封装ViewModel类以及请求方法



示例：`home_view_model.dart`

> `home`页面的请求，`ViewModel`模型类



示例：`Details_vm.dart` 详情页的数据模型类

```dart
import 'package:dio/dio.dart';
// ...Other

class DetailsViewModel {


  /// 获取小说章节
  static Future<List<SeriesContent>?> getNovelChapters(String id)async{
 
    final dio = DioInstance().dio;
    late Response res;
    // 其实这个报错也可以不需要try，直接抛出去，交给UI层去处理报错，UI根据报错去做对应的处理
    try{
      // 请求需要独特的Query参数时候，可以这样写
      res = await dio.get("/touch/ajax/novel/series_content/$id", queryParameters: {
        "limit":30,
        "last_order":0,
        "order_by": "asc",
        "lang":"zh",
        "version": MyApiData.version,
      });
    }catch(e){
      return null;
    }
	 // NovelChapterData.fromJson方法： 将JSON数据转化为Dart类数据格式
    NovelChapterData parseRes = NovelChapterData.fromJson(res.data);
    novelChapterData = parseRes.body.seriesContents;
    return novelChapterData;
  }
}
```



在UI层使用

```dart
calss DetailsViewPage extends StatefulWidget{
  final String id;  // 传入的id

  const DetailsPage({super.key, required this.id});

  @override
  State<StatefulWidget> createState() {
    return _DetailsPageState();
  }
}


class _DetailsPageState extends State<DetailsPage> {
  late final String id;
  /// 小说详情数据
  late Series? novelData;
    
  @override
  void initState() {
    super.initState();
    id = widget.id; // widget就是DetailsViewPage
    getDataDetails();
  }
 
  /// 获取网络数据
  getDataDetails() async {
    var detailsRes = await DetailsViewModel.getNovelDetails(id: id); // 获取小说详情
    // await getDataChapter();
    if (detailsRes != null) {
      // 加载成功
      _controllerDetails.loaded(); // 显示加载成功视图
      setState(() {
        novelData = detailsRes; // 赋值给novelData
      });
      getDataChapter(); // 紧接着加载章节
    } else {
      // 加载失败
      _controllerDetails.showError(); // 显示加载失败视图
    }
  }
}
```



上面的代码关注网络请求的逻辑即可。

> 如果使用状态管理包的话，代码可能不一样