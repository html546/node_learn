var mysql = require('mysql');

// 1.创建连接
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'users'
});

// 2.连接数据库 打开冰箱门
connection.connect();

// 3.执行数据操作 把大象放到冰箱
connection.query('SELECT * FROM `users`', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
});

/* connection.query('INSERT INTO users VALUES(1,"admin","123456")', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
}); */

// 4.关闭连接  关闭冰箱门
connection.end();