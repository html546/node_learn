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