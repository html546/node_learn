# Node.js第四天课堂笔记

## 知识点

- Express
- 基于文件做一套 CRUD

### 模块标识中的`/`和文件操作路径中的`/`

#### 起步

安装
```javascript
npm install --save express
```

#### 修改完代码自动重启
1. 我们这里可以使用一个第三方命令行工具:`nodemon`来帮我们解决频繁修改代码重启服务器问题.
2. `nodemon`是一个基于Node.js开发的一个第三方命令行工具,我们使用的时候需要独立安装.
```javascript
# 在任意目录执行该命令都可以
# 也就是说,所有需要 --global来安装的包都可以在任意目录执行
`npm install --global nodemon`
```
3. 安装完毕之后,使用.
    ```javascript
         node app.js

        # 使用nodemon
        nodemon app.js
    ```
只要是通过`nodemon app.js`启动的服务,则它会监视你的文件变化.当文件发生变化的时候,自动帮你重启服务器.

#### 基本路由
- 请求方法
- 请求路径
- 请求处理函数

###### get:
```javascript
//当你以GET方法请求/的时候,执行对应的处理函数
app.get('/',function(req,res){
    res.send('Hello World!')
})
```

###### post:
```javascript
//当你以POST方法请求/的时候,执行对应的处理函数
app.post('/',function(req,res){
    res.send('Got a POST request')
})
```

#### 静态服务
```javascript
    //  /public资源
    app.use(express.static('public'))

    //  /files资源
    app.use(express.static('files'))

    //  /public/xxx
    app.use('/public',express.static('public'))

    //  /static/xxx
    app.use('/static',express.static('public'))

    app.use('/static',express.static(path.join(__dirname,'public')))
```

#### 在Express中配置使用`art-template`模板引擎

- [art-template -GitHub仓库](https://github.com/aui/art-template)
- [art-template -官方文档](https://aui.github.io/art-template/)
  
  安装
  ```shell
    npm install --save art-template
    npm install --save express-art-template
  ```
  配置
  ```javascript
        app.engine('html', require('express-art-template'));
  ```

  使用
  ```javascript
    app.get('/',function(req,res){
        //express默认会去项目中的views目录中找index.html
        res.render('index.html',{
            title:'hello world'
        })
    })

  ```
  如果希望修改默认的`views`视图渲染存储目录,可以:
  ```javascript
    //注意:第一个参数views千万不要写错
    app.set('views',目录路径)
  ```

#### 在Express中获取表单GET请求参数
Express内置了一个API，可以直接通过`req.query`来获取
```javascript  
    req.query
```
##### 在Express获取表单POST请求体数据

在Express中没有内置获取表单POST请求体的API。这里我们需要使用一个第三方包:`body-parser`
安装:
```shell
    npm install --save body-parser
```
配置:
```javascript
    var express = require('express')
    // 0. 引包
    var bodyParser = require('body-parser')

    var app = express()

    // 配置body-parser
    // 只要加入这个配置,则在req请求对象上会多出来一个属性:body
    // 也就是说你就可以直接通过req.body来获取表单POST请求体数据了
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }))

    // parse application/json
    app.use(bodyParser.json())

   
```
使用:
```javascript
    app.use(function (req, res) {
    res.setHeader('Content-Type', 'text/plain')
    res.write('you posted:\n')
    // 可以通过req.body来获取表单post的数据
    res.end(JSON.stringify(req.body, null, 2))
    })
```

## 上午总结

### 演讲

> 说服
> PPT
> 脑图
> markdown
> 结构思维

- 找痛点 why 为什么
- 解决方案 what 是什么
- 怎么去使用 how 怎么用
- where 在哪儿用 
- when 什么时候用

- 文件路径中的`/`和模块标识中的`/`
- nodemon
- Express
    - art-template 模板引擎的配置
    - body-parser解析表单POST请求体
- 技术只是一种解决问题的手段、工具而已
    - 第三方的东西,不要纠结
    - 先以解决问题为主
- 讲解了express.static 静态服务API 
    - app.use('/public/',express.static('./public'))
- crud
### 模块化思想
1. 模块如何划分
    1. 模块职责要单一
    2. Vue
    3. angular
    4. React
    5. 全部
    6. 也非常有利于学习前端三大框架

#### 自己编写的步骤
1. 处理模板
2. 配置开放静态资源
3. 配置模板引擎
4. 简单路由,/students 渲染静态页出来
5. 路由设计
6. 提取路由模块
7. 由于接下来一系列的业务操作都需要处理文件数据,所以我们需要封装student.js
8. 先写好student.js文件结构
    1. 查询所有学生列表的API find
    2. findById
    3. save
    4. updateById
    5. deleteById
9. 实现具体功能
    1.  通过路由收到请求
    2.  接受请求中的数据(get、post)
        1.  req.query
        2.  req.body
    3.  调用数据操作API处理数据
    4.  根据操作结果给客户端发送响应
10. 业务功能顺序
    1.  列表
    2.  添加
    3.  编辑
    4.  删除
11. find
12. findIndex