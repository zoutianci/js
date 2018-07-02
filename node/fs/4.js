const fs = require('fs');

const readStream = fs.createReadStream('./a1.txt', "utf8");

readStream.on('data', (chunk) => {
    console.log("读取到的数据--------\n"+chunk);
})
.on('error', (err) => {
    console.log('出错了\n'+ err.message);
})
.on('end', () => {
    console.log('读取完成');
})
.on('close', () => {
    console.log('已经关闭');
})