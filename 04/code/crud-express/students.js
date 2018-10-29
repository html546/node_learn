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
exports.save = function () {

}

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