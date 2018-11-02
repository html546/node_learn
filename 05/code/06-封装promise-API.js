var fs = require('fs')

function preadFile(filePath) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filePath, 'utf8', function (err, data) {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}
preadFile('./data/a.txt')
    .then(function (data) {
        console.log(data)
        return preadFile('./data/b.txt')
    })
    .then(function (data) {
        console.log(data)
        return preadFile('./data/c.txt')
    })
    .then(function (data) {
        console.log(data)
    })

// 