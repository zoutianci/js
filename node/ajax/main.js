const http = require('http');
const fs = require('fs');
// 创建一个web服务器
const server = http.createServer((req, res) => {
    // 怎么得到index.html?
    if(req.url == '/') {
        let indexFile = fs.createReadStream('./index.html')
        // console.log('那个家伙又来了');
        // http 响应头
        res.writeHead(200, {
            'Content-Type': 'text/html;charset=utf8'
        })
        indexFile.pipe(res);        
    } else if (req.url == '/info') {
        // api 后端
        const info = {
            "name": 'zk',
            "desc": '身骑白马',
        };
        res.writeHead(
            // 200 http状态码   contentType文件格式   返回浏览器
            // 需要知道如何去解析这一次的请求的到达
            200, {
                'Content-Type': "text/plain;charset=utf8"
            }
        )
        res.end(JSON.stringify(info));
    }
    // console.log('那个家伙又来了');
    // res.end('Hello World!你要的反正不是首页');
})

server.listen(8081);