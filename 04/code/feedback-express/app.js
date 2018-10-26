var express = require('express');

var app = express();

// 配置使用art-template模板引擎
// 第一个参数,表示,当渲染以.art结尾的文件的时候,使用art-template模板引擎
// express-art-template是专门用来在Express中把art-template整合到Express中的
// 虽然我们这里不需要记载art-template但是也必须安装
// 原因就在于express-art-template依赖了art-template

app.engine('html', require('express-art-template'));

app.use('/public/', express.static('./public'))

// Express为Response响应对象提供了一个方法:render
// render方法默认是不可以使用,但是如果配置了模板引擎就可以使用了
// res.render('html模板名',{模板数据})
// 第一个参数不能写路径,默认会去项目中的views目录中查找该模板文件
// 也就是说,Express有一个约定:开发人员把所有的视图文件都放到views目录中

// 如果想要修改默认的views目录，则可以:
// app.set('views',render函数的默认路径)
app.get('/', function (req, res) {
    res.render('404.html')
})

app.get('/admin', function (req, res) {
    res.render('admin/index.html',{
        title:'管理系统'
    })
})
app.get('/post', function (req, res) {
    res.send('post page')
})
app.listen(3000, function () {
    console.log('running...')
})