var http = require('http');
var fs = require('fs');
// 1.创建Server
var server = http.createServer();

// 2.监听Server的request请求事件,设置请求处理函数
//  请求
//      处理
//  响应
//      一个请求对应一个响应,如果在一个请求的过程中,已经结束响应了,则不能重复发送响应
//      没有请求就没有响应

var wwwDir = 'E:/www'
server.on('request', function (req, res) {
    var url = req.url;
    //  / wwwDir+index.html
    // /a.txt wwwDir+a.txt
    //  /apple/login.html  wwwDir+apple/login.html
    // /img/ab1.jpg wwwDir+/img/ab1.jpg
    if (url === '/') {
        fs.readFile(wwwDir + '/index.html', function (err, data) {
            if (err) {
                return res.end('404 Not Found');
            } else {
                res.end(data);
            }
        })
    } else if (url === '/a.txt') {
        fs.readFile(wwwDir + '/a.txt', function (err, data) {
            if (err) {
                return res.end('404 Not Found');
            } else {
                res.end(data);
            }
        })
    } else if (url === '/index.html') {
        fs.readFile(wwwDir + '/index.html', function (err, data) {
            if (err) {
                return res.end('404 Not Found');
            } else {
                res.end(data);
            }
        })
    } else if (url === '/apple/login.html') {
        fs.readFile(wwwDir + '/apple/login.html', function (err, data) {
            if (err) {
                return res.end('404 Not Found');
            } else {
                res.end(data);
            }
        })
    }
})

// 3.绑定端口号,启动服务
server.listen(3000, function () {
    console.log('running....')
})
