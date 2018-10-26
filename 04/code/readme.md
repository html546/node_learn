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