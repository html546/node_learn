/**
 * Students.js
 * 数据操作文件模块
 * 职责:操作文件中的数据,只处理数据,不关心业务
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
    fs.readFile(dbPath,'utf8', function (err, data) {
        if(err){
            return callback(err)
        }            
        callback(null,JSON.parse(data).students)
    })
}

/**
 * 添加保存学生
 */
exports.save = function (student,callback) {
    fs.readFile(dbPath,'utf8', function (err, data) {
        if(err){
            return callback(err)
        }            

        var students = JSON.parse(data).students

        // 处理id唯一的,不重复
        student.id = students[students.length-1].id+1
        // 把用户传递的对象保存到数组中
        students.push(student)

        // 把对象数据转换为字符串
        var fileData = JSON.stringify({
            students:students
        })
        // 把字符串保存到文件中
        fs.writeFile(dbPath.fileData,function(err){
            if(err){
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
 * 更新学生
 */
exports.update = function () {

}

/**
 * 删除学生
 */
exports.delete = function () {

}