# path路径操作模块

> 参考文档L
- path.basename
    - 获取一个路径的文件名(默认包含扩展名)
- path.dirname
    - 获取一个路径中的目录部分
- path.extname
    - 获取一个路径中的扩展名部分
- path.parse
    - 把一个路径转为对象
        - root根路径
        - dir目录
        - base包含后缀名的文件名
        - ext后缀名
        - name不包含后缀名的文件名
- path.join
    - 当你需要进行路径拼接的时候,推荐使用这个方法
- path.isAbsolute 用来判断一个路径是否是绝对路径