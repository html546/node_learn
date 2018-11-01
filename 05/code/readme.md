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