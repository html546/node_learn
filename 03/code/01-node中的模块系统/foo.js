var foo = 'bar';

function add(x, y) {
    return x + y;
}

// 这种方式不行
// exports = add

// 如果一个模块需要直接导出某个成员,而非挂载的方式
// 那这个时候必须使用下面这种方式
module.exports = 'hello';
module.exports = function (x, y) {
    return x + y
}

module.exports = {
    add: function (x, y) {
        return x + y;
    },
    str: 'hello'
}
// 你可以认为在每个模块的最后return了这个exports

// 只能得到我想要给你的成员
// 这样做的目的是为了解决变量命名冲突的问题
// exports.add = add;

// exports是一个对象
// 我们可以通过多次为这个对象添加成员实现对外多个内部成员
// exports.str = 'hello'

// 现在我有一个需求:
// 我希望加载得到的直接就是一个:
// 方法
// 字符串
// 数字
// 数组
