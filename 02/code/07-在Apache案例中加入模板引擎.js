var http = require('http');
var fs = require('fs');
var template = require('art-template');
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
    fs.readFile('./template-apache.html', function (err, data) {
        if (err) {
            return res.end('404 Not Found');
        }
        // 1. 如何得到wwwDir目录列表中的文件名和目录名
        //      fs.readdir
        // 2. 如何将得到的文件名和目录名替换到template.html中
        //      2.1 在template.html中需要替换的位置预留一个特殊的标记(就像以前使用模板引擎的标记一样)
        //      2.2 根据files生成需要的HTML内容
        // 只要你做了这两件事儿,那这个问题就解决了
        fs.readdir(wwwDir, function (err, files) {
            if (err) {
                return res.end('Can not find www dir.')
            }
            // 这里只需要使用模板引擎解析替换data中的模板字符串就可以了
            // 数据就是files
            // 然后去你的template.html文件中编写你的模板语法就可以了
            var htmlStr = template.render(data.toString(), {
                title:"哈哈",
                files:files
            })
            // 3. 发送解析替换过后的响应数据
            res.end(htmlStr);
        })
    })
})

// 3.绑定端口号,启动服务
server.listen(3000, function () {
    console.log('running....')
})
