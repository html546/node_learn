// art-template

// art-template 不仅可以在浏览器使用,也可以在node中使用

// 安装:
//  npm install art-template
//  改命令在哪执行就会把包下载到哪里，默认会下载到node_modules目录中
//  node_modules 不要改,也不支持改.

// 在Node中使用art-template模板引擎
// 模板引擎最早就是诞生于服务器领域,后来才发展到了前端

// 1.安装 npm install art-template
// 2. 在需要使用的文件模块中加载art-template
//  只需要使用require方法加载就可以了 require('art-template');
// 参数中的art-template就是你下载的包的名字
// 也就是说你install的名字是什么,则你require中的就是什么
// 3.查文档，使用模板引擎的API

var template = require('art-template');
// 这里不是浏览器
// template('script标签id'，{对象})