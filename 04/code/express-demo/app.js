var express = require('express')

// 1.创建app
var app = express()

app.get('/',function(req,res){
    /* res.write('hello ');
    res.write('world ')
    res.end() */
    // res.end('hello world');
    res.send('hello world')
})
app.get('/login',function(req,res){
    /* res.write('hello ');
    res.write('world ')
    res.end() */
    // res.end('hello world');
    res.send('login page')
})

app.listen(3000,function(){
    console.log('express app is running......')
})