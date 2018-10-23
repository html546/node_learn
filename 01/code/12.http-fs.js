var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (req, res) {
        //  index.html
    var url = req.url;
    if(url === '/'){
        fs.readFile('./resource/index.html',function(err,data){
            if(err){
                res.setHeader('Content-Type','text/plain;charset=utf-8');
                res.end('文件读取失败,请稍后重试');
            }else{
                // data默认是二进制数据,可以通过.toString()转为我们能识别的字符串
                // res.end()支持两种数据类型,一种是二进制,一种是字符串
                res.setHeader('Content-Type','text/html;charset=utf-8');
                res.end(data);
            }
        })
    }else if(url === '/vue'){
        fs.readFile('./resource/logo.png',function(err,data){
            if(err){
                res.setHeader('Content-Type','text/plain;charset=utf-8');
                res.end('文件读取失败,请稍后重试');
            }else{
                // data默认是二进制数据,可以通过.toString()转为我们能识别的字符串
                // res.end()支持两种数据类型,一种是二进制,一种是字符串
                // 图片就不需要制定编码了,因为我们常说的编码一般指的是:字符编码
                res.setHeader('Content-Type','image/png');
                res.end(data);
            }
        })
    }
})
server.listen(3000, function () {
    console.log('Server is running...')
})