var fs = require('fs');
var path = require('path');

// 模块中的路径标识和文件操作中的相对路径标识不一致
// 模块中的路径标识就是相对于当前文件模块,不受执行node命令所处路径影响
require('./b');

//  ./a.txt 相对于当前文件路径
//  ./a.txt相对于执行node命令所处的终端路径
// 这不是错误,Node就是这样设计的
// 就是说,文件操作路径中,相对路径设计的就是相对于执行node命令所处的路径
/* fs.readFile('F:/node_learn/123/06/code/foo/a.txt','utf8',function(err,data){
    if(err){
        throw err;
    }
    console.log(data);
}) */

fs.readFile(path.join(__dirname,'./a.txt'), 'utf8', function (err, data) {
    if (err) {
        throw err;
    }
    console.log(data);
})