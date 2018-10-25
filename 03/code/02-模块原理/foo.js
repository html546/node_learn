// 在node中,每个模块内部都有一个自己的module对象
// 该module对象中,有一个成员叫:exports也是一个对象
// 也就是说如果你需要对外导出成员,只需要把导出的成员挂载到module.exports中

// 我们发现,每次导出接口成员的时候都通过module.exports.xxx = xxx的方式很麻烦,点儿的太多了
// 所以,Node为了简化你的操作，专门提供了一个变量:exports 等于module.exports

/* var module = {
    exports: {
        foo:'bar',
        add:function
    }
} */

// 也就是说在模块中还有这么一句代码
// var exports = module.exports

/* module.exports.foo = 'bar'
module.exports.add = function(x,y){
    return x+y
} */
// 两者一致，那就说明,我可以使用任意一方来导出成员
// console.log(exports === module.exports)

/* exports.foo = 'bar'


module.exports.add = function(x,y){
    return x+y
} */

// 当一个模块需要导出单个成员的时候
// 直接给exports赋值是不管用的
exports = 'hello'


// 谁来require我,谁就得到module.exports
// 默认在代码的最后有一句:
// return module.exports