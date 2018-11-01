#### mongoose

- 官网:https://mongoosejs.com/
- 官方指南:https://mongoosejs.com/docs/guide.html
- 官方API文档:https://mongoosejs.com/docs/api.html
##### MongoDB数据库的基本概念
- 可以有多个数据库
- 一个数据库中可以有多个集合(表)
- 一个集合中可以有多个文档(表记录)
- 文档结构很灵活,没有任何限制
- MongoDB非常灵活,不需要像MySql一样先创建数据库、表、设计表结构
    - 在这里只需要,当你需要插入数据的时候,只需要指定往哪个数据库的哪个集合操作就可以了
    - 一切都由MongoDB来帮你自动完成建库建表这件事儿
  ```javascript
  {
      qq:{
        users:[
            {name:'张三',age:15},
            {name:'李四',age:15},
            {name:'王五',age:15},
            {name:'张三123',age:15},
            {name:'张三321',age:18},
            ...
        ],
        products:[

        ],
        ...
      },
      taobao:{

      },
      baidu:{

      }
  }
  ```

1. 起步

安装:
```shell

npm i mongoose
```
hello world
```javascript
const mongoose = require('mongoose');
// 连接MongoDB数据库
mongoose.connect('mongodb://localhost/test',{ useNewUrlParser: true });
// 创建一个模型
// 就是在设计数据库
// MongoDB是动态的,非常灵活,只需要在代码中设计你的数据库就可以了
// mongoose这个包就可以让你的设计编写过程变得非常的简单
const Cat = mongoose.model('Cat', { name: String });

for (let i = 0; i <100; i++) {
    // 实例化一个Cat
    let kitty = new Cat({ name: '喵喵'+i });
    // 持久化保存Kitty实例
    kitty.save().then(() => console.log('meow'));
}
```