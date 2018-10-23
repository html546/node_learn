// 用来获取机器信息的
var os = require('os');
// 用来操作路径
var path = require('path');

// 获取当前机器的cpu信息
// console.log(os.cpus());
// 获取内存
// console.log(os.totalmem());

// extname extension name 扩展名
console.log(path.extname('c:/a/b/c/d/hello.txt'));