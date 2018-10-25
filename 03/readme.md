# Node.js 第三天课堂笔记

## 知识点

- 模块系统
    - 核心模块
    - 第三方模块
    - 自己写的模块
    - 加载规则以及加载机制
    - 循环加载
- npm
- package.json
- Express
    - 第三方Web开发框架
    - 高度封装了http模块
    - 更加专注于业务,而非底层细节
    - 知其所以然
- 增删改查
    - 使用文件来保存数据(锻炼异步编码)
- MongoDB
    - (所有方法都封装好了)
- 软件开发版本里面设计到软件工程学:
    - x.x.x
        - 0.0.1
        - 0.0.2
        - 1.1.5
        - 1.9.2
        - 2(新增功能比较多,甚至可能去除了某些功能).5(加入了新功能).0(修复bug,提升性能)
        - 大版本
        - 一般是这些客户端软件、技术框架开发者比较理解的多
        - 做网站很少涉及到版本的概念,网站的目的就是快
- each是art-template的模板语法,专属的
- {{each 数组}}
- <li>{{$value}}</li>
- {{/each}} 这是art-template模板引擎支持的语法,只能在模板字符串中使用
- $.each(数组,function)
- $('div').each(function)一般用于遍历Jquery选择器选择到的伪数组实例对象
- forEach是EcmaScript 5 中的一个数组遍历函数,是JavaScript原生支持的遍历方法,可以遍历任何可以被遍历的成员
- jQuery的each方法和forEach几乎一致
- 由于forEach是EcmaScript5中的，所以低版本浏览器不支持


- 技多不压身
- Node对于前端来讲是进阶高级前端开发工程师必备的技能

- 网页中所有的路径其实都是url路径,不是文件路径
  

- 在Node中,我们开启的Web服务是一个完全的黑盒子,它不像php
- php中无论是代码还是网页,都可以直接通过web url路径来访问

- 在Node中开启的服务器,默认是黑盒子,所有资源都不允许用户来访问,用户可以访问哪些
- 资源由具体的开发人员编写设计的代码为准.

    /     index.html
    /post post.html
- 在Node中就可以很方便的来自定义这个url地址.Node天生就可以把url地址处理的非常精简而漂亮,优雅而艺术.


- 自定义非常灵活
- 设计url地址,设计好这个规则
- 让用户按照你的规则来访问使用

- 如何在Node中实现服务器重定向
    - header('location')
        - 301 永久重定向 浏览器会记住
            - a.com b.com
            - a浏览器不会请求a了
            - 直接去跳到b了
        - 302 临时重定向 浏览器不记忆
            - a.com b.com
            - a.com 还会请求a
            - a告诉浏览器你往b


### Node中的模块系统
- 使用Node编写应用程序主要就是在使用
    - EcmaScript语言
        - 和浏览器不一样,在Node中没有BOM、DOM
    - 核心模块
        - 文件操作fs
        - http服务的http
        - url路径操作模块
        - path路径处理模块
        - os操作系统信息
    - 第三方模块
        - art-template
        - 必须通过npm来下载才可以使用
    - 咱们自己写的模块
        - 自己创建的文件


#### 什么是模块化

  - 文件作用域
  - 通信规则
    - 加载require
    - 导出

#### CommonJS模块规范
在Node中的javascript还有一个很重要的概念,模块系统
-   模块作用域
-   使用require方法来加载模块
-   使用exports接口对象用来导出模块中的成员

#### 加载 `require`

    语法:
    `
        var 自定义变量名称 = require('模块')
    `
###### 两个作用
- 执行被加载模块中的代码
- 得到被加载模块中的exports导出接口对象
#### 导出 `exports`
- Node中是模块作用域,默认文件中所有的成员只在当前文件模块中有效
- 对于希望可以被其他模块访问的成员,我们就需要把这些公开的成员都挂载到`exports`接口对象中就可以了

导出多个成员(必须在对象中):
```javascript
exports.a = 123
exports.b = 'hello'
exports.c = function(){
    console.log('ccc')
}
exports.d = {
    foo:'bar'
}
```

导出单个成员(拿到的就是函数、字符串):
```javascript
    module.exports = 'hello'
```
一下情况会覆盖
```javascript
module.exports = 'hello';
//以这个为准,后者会覆盖前者
module.exports = function (x, y) {
    return x + y
}
```
也可以这样来导出多个成员
```javascript
module.exports = {
    add: function (x, y) {
        return x + y;
    },
    str: 'hello'
}
```


### 原理解析
exports是`module.exports`的一个引用
```javascript
console.log(exports === module.exports) // => true

exports.foo = 'bar'

//等价于
module.exports.foo = 'bar'
```