/**
 * router.js路由模块
 * 职责:
 *      处理路由
 *      根据不同的请求方法+请求路径设置具体的请求处理函数
 * 模块职责要单一,不要乱写
 * 我们划分模块的目的就是为了增强项目代码的可维护性
 * 提升开发效率
 */
var fs = require('fs');
var Student = require('./students')

// 这样也不方便
/* module.exports = function(app){
    app.get('/students', function (req, res) {
        // readFile的第二个参数是可选的,传入utf8就是告诉它把读取到的文件直接按照utf8编码转成我们能认识的字符
        // 除了这样来转换之外,也可以通过data.toString()的方式
        fs.readFile('./db.json', 'utf8', function (err, data) {
            if (err) {
                return res.status(500).send('Server error.')
            }
            // 从文件中读取到的数据一定是字符串
            // 所以这里一定要手动转成对象
            var students = JSON.parse(data).students
            res.render('index.html', {
                fruits: [
                    '苹果',
                    '香蕉',
                    '橘子'
                ],
                students: students
            })
        })
    })
    
    app.get('/students/new',function(req,res){
        
    })
    app.get('/students/new',function(req,res){
    
    })
    app.get('/students/new',function(req,res){
    
    })
} */
// express提供了一种更好的方式
// 专门用来包装路由的
var express = require('express');
// 1.创建一个路由容器
var router = express.Router()

// 2.把路由都挂载到router路由容器中
router.get('/students', function (req, res) {
    // readFile的第二个参数是可选的,传入utf8就是告诉它把读取到的文件直接按照utf8编码转成我们能认识的字符
    // 除了这样来转换之外,也可以通过data.toString()的方式
    /* fs.readFile('./db.json', 'utf8', function (err, data) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        // 从文件中读取到的数据一定是字符串
        // 所以这里一定要手动转成对象
        var students = JSON.parse(data).students
        res.render('index.html', {
            fruits: [
                '苹果',
                '香蕉',
                '橘子'
            ],
            students: students
        })
    }) */
    Student.find(function(err,students){
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.render('index.html', {
            fruits: [
                '苹果',
                '香蕉',
                '橘子'
            ],
            students: students
        })
    })
})

router.get('/students/new',function(req,res){
    res.render('new.html')
})
router.post('/students/new',function(req,res){
    // 1.获取表单数据
    // 2.处理
    //      将数据保存到db.json文件中用以持久化
    // 3.发送响应
    // 先读取出来.转成对象
    // 然后往对象中push数据
    // 然后把对象转为字符串
    // 然后把字符串再次写入文件
})
router.get('/students/edit',function(req,res){

})
router.post('/students/edit',function(req,res){

})
router.get('/students/delete',function(req,res){

})

// 3.把router导出
module.exports = router;