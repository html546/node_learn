var mongoose = require('mongoose');

var Schema = mongoose.Schema

// 连接数据库
// 指定连接的数据库不需要存在,当你插入第一条数据之后就会自动被创建出来
mongoose.connect('mongodb://localhost/itcast')

// 设计集合结构(表结构)
// 字段名称就是表结构中的属性名称
// 值
// 约束的 目的是为了保证数据的完整性,不要有脏数据
var userSchema = new Schema({
    username: {
        type: String,
        required: true //必须有
    },
    password: {
        typep: String,
        required: true
    },
    email: {
        type: String
    }
});
