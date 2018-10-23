var http = require('http');

var server = http.createServer();

// request请求事件处理函数,需要接受两个参数:
// Request请求对象
//      请求对象可以用来获取客户端的一些请求信息，例如请求路径
// Response相应对象
//      响应对象可以用来给客户端发送响应消息
server.on('request', function (request, response) {
    console.log('收到客户端的请求了,请求路径是:' + request.url);
    // response.对象有一个方法:write可以用来给客户端发送响应数据
    // write可以使用多次,但是最后一定要使用end来结束响应,否则客户端会一直等待
    if(request.url === '/'){
        response.write('index');
    }else if(request.url === '/login'){
        response.write('登陆');
    }else if(request.url === '/register'){
        response.write('注册');
    }else if(request.url === '/haha'){
        response.write('哈哈哈');
    }
    // 告诉客户端,我的话说完了,你可以呈递给用户了
    response.end();
    // 由于现在我们的服务器的能力还非常的弱,无论是什么请求，都只能响应hello nodejs
    // 思考:
    // 我希望当请求不同的路径的时候响应不同的结果
    // 例如：
    //  / index
    //  /login  登陆
    //  /register 注册
    //  /haha 哈哈哈
})

server.listen(3000, function () {
    console.log('服务器启动成功了，可以通过http://127.0.0.1:3000/来进行访问');
});