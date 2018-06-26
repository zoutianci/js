// setTimeout
const Promise = require('./promise.js');

// 将要执行的耗时任务,封装在executor,实例化时就开始执行
// resolve ? 成功执行   reject ? 执行失败   形参 类型是函数
const p = new Promise((resolve, reject) => {
    // resolve('Hello World!');
    reject('Error');
})

p.then((data) => {
    console.log(data);
}, (err) => {
    console.log(err);
})

// const p = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('Hello World!')
//     },2000)
// })

// p.then((data)=> {
//     console.log(data);
// })

// Promise
//     .all([])
//     .then()
