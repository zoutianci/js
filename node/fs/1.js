// COMMONJS require NODE 内置支持的js模块化方案
// 还有 es6 module; sea.js
// "use strict"
const fs = require('fs');
let data;

var promise = new Promise((resolve, reject) => {
    fs.readFile('./f1.txt', 'utf8', (e, d) => {
        // console.log('真正的读取完成了');
        // console.log('文件的内容' + data);
        if(e){
            reject();
        }else{
            resolve(d);
        }        
    });

});

promise.then(function() {
    console.log('读取完成, 做其他事情')
}).catch(function () {
    console.log("读取错误")
})
// promise.then(e => {
    
// })