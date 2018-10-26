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
        <h1>hello login aaa</h1>
    </body>
    </html>
    `)
})

app.listen(3000,function(){
    console.log('express app is running......')
})