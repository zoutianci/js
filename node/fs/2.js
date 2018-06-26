const fs = require('fs');
let data;

try {
    data = fs.readFile('./f1.txt', 'utf8');
    console.log('文件读取完成');
    console.log('文件内容是:' + data);
}catch(e) {
    console.log('读取文件错误:' + e.message)
}

