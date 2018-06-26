// 1. flatten 功能以后慢慢学
// 2. 数组的一些超纲但常用,  npm 包提供了这种功能
// lodash underscore
// 3. 代码的宿主环境是  命令行
// 4. npm init -y package.json
// 5. yarn add lodash
// 6. 在当前文件中, 引入node_modules下的lodash
// 7. 使用它完成flatten, 看文档
// lodash 是在nodemodules(本地项目中)npm包, 模块

const _ = require('lodash');
var chunk = require('lodash.chunk');

const arr = [1,2,[3,4],[5,[6,7]]];

console.log(_.flattenDepth(arr,[depth=2]));
function flattern(arr) { return arr.toString().split(',')} 
console.log(flattern(arr));