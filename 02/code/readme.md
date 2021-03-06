- [JavaScript Standard Style](https://standardjs.com)
- Airbnb JavaScript Style
- 当你采用了无分号的代码风格的时候，只需要注意一下情况就不会有上述问题了:
    - 当一行代码是以:`([`开头的时候，则在前面补上一个分号用以避免一些语法解析错误.
    - 所以你会发现在一些第三方的代码中能看到一上来就以一个;开头.
    - 结论:
        - 无论你的代码是否有分号，都建议如果一行代码是以(、[、`开头的,则最好都在其前面补上一个分号.
## 上午总结


- 代码风格
- 无分号
    - `(`
    - `[`
    - `
    - 最好前面补分号
    - 编写可维护的JavaScript
    - 不仅是功能，还要写的更漂亮
- 服务端渲染
    - 说白了就是在服务端使用模板引擎
    - 模板引擎最早诞生于服务端,后来才发展到了前端


- 服务端渲染和客户端渲染的区别
    - 服务端渲染:
        - 对于服务端渲染来讲,只请求了一次.
        - 服务端渲染,响应的就是最终的结果,客户端不需要在做任何处理.
    - 客户端渲染:
        - 第一次请求拿到的是页面
        - 第二次请求拿到的是动态数据
        - 客户端渲染不利于SEO搜索引擎优化   
    - 服务端渲染是可以被爬虫抓取到的,客户端异步渲染是很难被爬虫抓取到的
    - 所以你会发现真正的网站既不是纯异步也不是纯服务端渲染出来的
    - 而是两者结合来做的
    - 例如京东的商品列表就采用的服务端渲染,目的是为了SEO搜索引擎优化
    - 而他的商品评论列表为了用户体验，而且也不需要SEO优化，所以采用是客户端渲染