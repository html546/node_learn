var express = require('express')

// 1.创建app
var app = express()

// 当以 /public/开头的时候,去 ./public/这个目录中查找对应的资源
// 这种方式更容易辨识,推荐这种方式
// app.use('/public/',express.static('./public/'))

// 必须是/a/public目录中的
//  app.use('/a/',express.static('./public/'))

// 当省略第一个参数的时候,则可以通过省略/public的方式来访问
// 这种方式的好处就是可以省略/public/
// app.use(express.static('./public/'))

app.get('/',function(req,res){
    res.send('hello world')
})
// 路由其实就是一张表
// 这个表里面有具体的映射关系

app.listen(3000,function(){
    console.log('express app is running......')
})