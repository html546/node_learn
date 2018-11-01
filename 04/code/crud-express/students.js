/**
 * Students.js
 * 数据操作文件模块
 * 职责:操作文件中的数据,只处理数据,不关心业务
 * 
 * 这里才是我们学习Node的精华部分:奥义所在
 * 封装异步API
 */

var fs = require('fs');

var dbPath = './db.json'

/**
 * 获取所有学生列表
 * callback中的参数
 *      第一个参数是err
 *          成功是null
 *          错误是错误对象
 *      第二个参数是结果
 *          成功是数组
 *          错误是undefined
 * return []
 */
exports.find = function (callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        callback(null, JSON.parse(data).students)
    })
}

/**
 * 添加保存学生
 */
exports.save = function (student, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }

        var students = JSON.parse(data).students

        // 处理id唯一的,不重复
        student.id = students[students.length - 1].id + 1
        // 把用户传递的对象保存到数组中
        students.push(student)

        // 把对象数据转换为字符串
        var fileData = JSON.stringify({
            students: students
        })
        // 把字符串保存到文件中
        fs.writeFile(dbPath, fileData, function (err) {
            if (err) {
                // 错误就是把错误对象传递给它
                return callback(err)
            }
            // 成功就没错,所以错误对象是null
            callback(null)
        })
    })
}

/* save({
    name:'xxx',
    age:18
},function(err){
    if(err){
        console.log('保存失败了')
    }else{
        console.log('保存成功了')
    }
}) */

/**
 * 根据id获取学生信息对象
 * @param {Number}  | id        学生id
 * @param {Function}| callback  回调函数
 */
exports.findById = function (id, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students;
        var ret = students.find(function (item) {
            return item.id === parseInt(id);
        })
        callback(null, ret)
    })
}

/**
 * 更新学生
 */
exports.updateById = function (student, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err);
        }
        var students = JSON.parse(data).students

        // 注意:这里记得把 id 统一转换为数字类型
        student.id = parseInt(studnet.id)

        // 你要修改谁,就需要把谁找出来
        // EcmaScript 6 中的一个数组方法:find
        // 需要接收一个函数作为参数
        // 当某个遍历项符合 item.id === student.id条件的时候,find会终止遍历,同时返回遍历项
        var stu = students.find(function (item) {
            return item.id === student.id
        })
        // 遍历拷贝对象
        for (var key in student) {
            stu[key] = student[key]
        }

        // 把对象数据转换为字符串
        var fileData = JSON.stringify({
            students: students
        })

        // 把字符串保存到文件中
        fs.writeFile(dbPath, fileData, function (err) {
            if (err) {
                // 错误就是把错误对象传递给它
                return callback(err)
            }
            // 成功就没错,所以错误对象是null
            callback(null)
        })
    })
}

/* updateById({
    id:1,
    name:'xx',
    age:15
},function(err){

}) */

/**
 * 删除学生
 */
exports.delete = function () {

}