######
- sublime插件
    - HTML-CSS-JS Prettify
- callback是不是相当于函数子调用?
    - 很简单,函数也是一种数据类型,既可以当做参数进行传递,也可以当做方法的返回值

#### 异步编程

##### 回调函数

不成立的情况
```javascript
function add(x, y) {
    console.log(1)
    setTimeout(function () {
        console.log(2)
        var ret = x + y
        return ret;
    }, 1000)
    console.log(3)
    // 到这里执行就结束了，不会等待前面的定时器，所以直接就返回了默认值undefined
}

console.log(add(10, 20)) //undefined
```

不成立的情况:
```javascript
function add(x, y) {
    var ret 
    console.log(1)
    setTimeout(function () {
        console.log(2)
        ret = x + y
    }, 1000)
    console.log(3)
    // 到这里执行就结束了，不会等待前面的定时器，所以直接就返回了默认值undefined
    return ret
}

console.log(add(10, 20)) //undefined
```

回调函数
如何熟练达到像定义一个变量一样来封装一个带有回调函数的方法
这是javascript编程的一大特色,异步编程
设置很多具有服务端开发经验的都不太容易熟悉这种方式
```javascript
function add(x, y, callback) {
    // callback就是回调函数
    // var x = 10
    // var y = 20
    // var callback = function(ret){console.log(ret)}
    console.log(1)
    setTimeout(function () {
        var ret = x + y;
        callback(ret)
    }, 1000)
}
add(10, 20, function (ret) {
    // 我现在拿到这个结果可以做任何操作
    console.log(ret)
})
```
#### 基于原生XMLHTTPReaquest ajax方法

- PHP中为什么就可以直接`require`、`include`因为PHP当初在设计的时候就加入了这个功能
- PHP这门语言天生就支持
- 模块作用域
- 可以使用API来进行文件与文件之间的依赖加载
- 在 Node这个环境中对Javascript进行了特殊的模块化支持 CommonJS
- JavaScript天生不支持模块化
    - require
    - exports
    - Node.js才有的
- 在浏览器中也可以像在Node中的模块一样来进行编程
    - `<script>`标签来引用加载,而且你还必须考虑加载的顺序问题
    - require.js 第三方库 AMD
    - sea.js 第三方库 CMD
- 无论是CommonJS、AMD、CMD、UMD、EcmaScript 6 Modules官方规范
    - 都是为了解决Javascript的模块化问题
    - CommonJS、AMD、CMD都是民间搞出来的
    - EcmaScript是官方规范定义
    - 官方看民间都在乱搞,开发人员为了在不同的环境使用不同的Javascript模块化解决方案
    - 所以EcmaScript在2015年发布了EcmaScript2016官方标准
    - 其中就包含了官方对Javascript模块化的支持
    - 也就是语言天生就只吃了
    - 但是虽然标准已经发布了，但是很多JavaScript运行环境还不支持
    - Node也是只在8.5版本之后才对EcmaScript 6 module 进行了支持
    - less 编译器 > css
    - EcmaScript 6 -> 编译器 -> EcmaScript 5
    - 目前的前端情况都是使用很多新技术,然后利用编译器工具打包可以在低版本浏览器运行.
    - 使用新技术的目的就是为了提高效率,增加可维护性
- 这里涉及到一个中间件的概念
    - app.use不仅仅是用来处理静态资源的
    - 还可以做很多工作
    - 配置bory-parse也是通过app.use来配置的
    - 这叫中间件,其中有一套规则
- 当你安装包的时候,新版的npm还会自动生成一个文件:package-lock.json


### package.json和package-lock.json

npm5以前是不会有`package-lock.json`这个文件的
npm5以后才加入了这个文件爱你
当你安装包的时候，npm都会生成或者更新`package-lock.json`这个文件

- npm5以后的版本的安装包不需要加`--save`参数,它会自动保存依赖信息
- 当你安装包的时候,会自动创建或者是更新`package-lock.json`这个文件
- `package-lock.json`这个文件会保存`node_modules`中所有包的信息(版本、下载地址)
    - 这样的话重新`npm install` 速度就可以提升
- 从文件来看,有一个`lock`称之为锁
    - 这个`lock`是用来锁定版本的
    - 如果项目依赖了`1.1.1`版本
    - 如果你重新install其实会下载最新版本,而不是1.1.1
    - 我们的目的就是希望可以锁住1.1.1这个版本
    - 所以这个`package-lock.json`这个文件的另一个作用就是锁定版本号,防止自动升级版本
- EcmaScript6中的find方法


### MongoDB

#### 关系型数据库和非关系型数据库
- 表就是关系
- 或者说表与表之间存在关系
    - 所有的关系型数据库都需要通过`sql`语言来操作
    - 所有的关系型数据库在操作之前都需要设计表结构
    - 而且数据表还支持约束
        - 唯一的
        - 主键
        - 默认值
        - 非空
    - 非关系型数据库非常的灵活 
    - 有的非关系型数据库就是key-value对儿
    - 但是MongoDB是长的最像关系型数据库的非关系型数据库
        - 数据库->数据库
        - 数据表->集合(数组)
        - 表记录->(文档对象)
    - MongoDB不需要设计表结构
    - 也就是说你可以任意的往里面存数据,没有结构性这么一说
    - 下载
    - 安装
    - 配置环境变量
    - 最后输入`mongod --version`测试是否安装成功

## 上午总结

- 回调函数
    - 异步编程
    - 如果需要得到一个函数内部异步操作的结果，这个时候必须通过回调函数来获取
    - 在调用的位置传递一个函数进来
    - 在封装的函数内部调用传递进来的函数
- find、findIndex、forEach
    - 数组的遍历方法,都是对函数作为参数的一种运用
    - every
    - some
    - includes 判断数组中是否包含指定的数据
    - map
    - reduce
    ```javascript
        数组的reduce方法
    ```
- package-lock.json文件的作用
    - 下载速度快了
    - 锁定版本
- Javascript模块化
    - Node 中的CommonJS
    - 浏览器中的
        - AMD require.js
        - CMD sea.js
    - EcmaScript官方在EcmaScript 6 中增加了官方支持
    - EcmaScript 6
- MongoDB数据库

### 启动和关闭数据库
启动:
```shell
# mongodb默认使用执行mongodb命令所处盘符根目录下的/data/db作为自己的数据存储目录
# 所以在第一次执行该命令之前先自己手动新建一个/data/db
mongod
```
如果想要修改默认的数据存储目录.可以:
```shell
mongod --dbpath=数据存储目录路径
```
停止:
```shell
在开启服务的控制台,直接Ctrl+c即可停止
或者直接关闭开启服务的控制台也可以
```

### 连接和退出数据库
连接:
```shell
# 该命令默认连接本机的MongoDB服务
mongo
```
退出:
```shell
# 在连接状态输入exit退出连接
exit
```
### 基本命令
- `show dbs`
    - 查看数据库列表
- `db`
    - 查看当前操作的数据库
- `use`数据库名称
    - 切换到制定的数据库.(如果没有会新建)
- 插入数据

### 在Node中如何操作MongoDB数据

#### 使用官方的`mongodb`包来操作
    [文档](https://github.com/mongodb/node-mongodb-native)
#### 使用第三方mongoose来操作MongoDB数据库
第三方包:`mongoose`基于MongoDB官方的`mongodb`包再一次做了封装
- 网址:https://mongoosejs.com/