var url = require('url');

var obj = url.parse('/pinglun?name=1323123&message=324234234234',true);
console.log(obj);
console.log(obj.query);