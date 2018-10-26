// 0.安装
// 1.引包
var express = require('express');

// 2.创建你服务器应用程序
// 也就是原来的http.createServer

var app = express()

// 在Express中开放资源就是一个API的事儿
// 公开指定目录
// 只要这样做了，你就可以直接通过/public/xxx的方式访问public目录中的所有资源了
app.use('/public/',express.static('./public/'))
app.use('/static/',express.static('./static/'))
app.use('/node_modules/',express.static('./node_modules/'))

// 模板引擎,在Express也是一个API的事儿

// 当服务器收到get请求/的时候,执行回调处理函数
app.get('/', function (req, res) {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        <h1>hello Express! 你好</h1>
    </body>
    </html>
    `)
})
// 得到路径
// 一个一个的判断
// 以前的代码很丑

app.get('/about', function (req, res) {
    res.send('你好,我是Express!');
})

// 相当与server.listen
app.listen(3000, function () {
    console.log('app is running at port 3000.')
})