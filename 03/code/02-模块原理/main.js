var fooExports = require('./foo');

console.log(fooExports);

// 如果你实在分不清楚exports和module.exports
// 你可以选择忘记exports
// 而只使用module.exports也没问题

// module.exports.xxx = xxx
// module.exports = {}