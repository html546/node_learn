// 如果是非路径形式的模块标识
// 路径显示的模块
//  ./ 当前目录,不可省略
// ../ 上一级目录,不可省略
//  /xxx 几乎不用
// d:/a/foo.js 几乎不用
//  首位的/在这里表示的是当前文件模块所属磁盘根路径
//  .js后缀名可以省略
// require('./foo')

// 核心模块的本质也是文件
// 核心模块文件已经被编译到了二进制文件中了,我们只需要按照名字来加载就可以了
// require('fs')
// require('http')

// 第三方模块
// 凡是第三方模块都必须通过npm下载
// 使用的时候就可以通过require('包名')的方式来进行加载才可以使用
// 不可能有任何一个第三方包和核心模块的名字是一样的
// 既不是核心模块、也不是路径形式的模块
// 先找到当前文件所属目录中的node_modules目录
// node_modules/art-template
// node_modules/art-template/package.json
// node_modules/art-template/package.json中的main属性
// main属性中就记录了art-template的入口模块
var template = require('art-template');