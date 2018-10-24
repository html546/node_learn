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
    fs.readFile('./template.html', function (err, data) {
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
            console.log(files);
            // 2.1 生成需要替换的内容
            var content = '';
            files.forEach(function (item) {
                content += `
                <tr>
                    <td data-value="apple/"><a class="icon dir" href="/E:/www/apple/">${item}/</a></td>
                    <td class="detailsColumn" data-value="0"></td>
                    <td class="detailsColumn" data-value="1540343327">2018/10/24 上午9:08:47</td>
                </tr>
                `
            })
            // 2.3替换
            data = data.toString();
            // 普通的字符串解析替换,浏览器看到的结果就不一样了
            data = data.replace('^-^', content);
            console.log(data);
            // 3. 发送解析替换过后的响应数据s
            res.end(data);
        })
    })
})

// 3.绑定端口号,启动服务
server.listen(3000, function () {
    console.log('running....')
})
