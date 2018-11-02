var fs = require('fs')

var p1 = new Promise(function (resolve, reject) {
    fs.readFile('./data/a.txt', 'utf8', function (err, data) {
        if (err) {
            reject(err)
        } else {
            resolve(data)
        }
    })
})

var p2 = new Promise(function (resolve, reject) {
    fs.readFile('./data/b.txt', 'utf8', function (err, data) {
        if (err) {
            reject(err)
        } else {
            resolve(data)
        }
    })
})

var p3 = new Promise(function (resolve, reject) {
    fs.readFile('./data/c.txt', 'utf8', function (err, data) {
        if (err) {
            reject(err)
        } else {
            resolve(data)
        }
    })
})
p1
    .then(function (data) {
        console.log(data)
        // 当前函数中return的结果就可以在后面的then中的function接收到
        // 当你return 123后面就接收到123
        //      return 'hello'后面就接受到'hello'
        //      没有return 后面接收到的就是undefined
        // 上面那些return的数据没什么卵用
        // 真正有用的是，我们可以return一个Promise对象
        // 当return 一个Promise对象的时候,后续的then中的方法的第一个参数会作为p2 的resolve
        return p2
    }, function (err) {
        console.log('读取文件失败了', err)
    })
    .then(function (data) {
        console.log(data)
        return p3
    })
    .then(function (data) {
        console.log(data)
        console.log('end')
    })
