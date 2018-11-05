const express = require('express')
var path = require('path')

var app = express()

app.use('/public/', express.static(path.join(__dirname, './public/')))
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')))

// 在Node中,有很多第三方模板引擎都可以使用,不是只有art-template
// ejs、jade(pug)、handlebars、nunjucks
app.engine('html', require('express-art-template'));
app.set('views',path.join(__dirname,'./views/')) //默认就是 ./views目录

app.get('/',function(req,res){
    res.render('index.html',{
        name:'张三'
    })
})

app.listen(3000,function(){
    console.log('running...')
})