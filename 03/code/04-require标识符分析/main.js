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
// 然后加载使用这个第三方包
// 实际上最终加载的还是文件
var template = require('art-template');

// 如果package.json文件不存在或者main指定的入口模块是也没有
// 则node会自动找该目录下的index.js
// 也就是说index.js会作为一个默认备选项

// 如果以上所有任何一个条件都不成立,则会进入上一级目录中的node_modules目录查找
// 如果上一级还没有，则继续往上上一级查找
//  ...
// 如果直到当前磁盘根目录还找不到,最后报错:
// can not find module xxx
// 
// 注意:我们一个项目有且只有一个node_modules,放在项目根目录中,这样的话项目中的所有子目录中的代码都可以加载到第三方包
// 不会出现有多个node_modules
// 模块查找机制
// 优先从缓存加载
// 核心模块
// 路径形式的文件模块
// 第三方模块
// node_modules/art-template/
// node_modules/art-template/package.json
// node_modules/art-template/package.json main
// index.js备选项
// 进入上一级目录找node_modules
//按照这个规则依次往上找,直到磁盘根目录还找不到,最后报错:Can not find module xxx
// 一个项目有且仅有一个node_modules而且是存放到项目的根目录

