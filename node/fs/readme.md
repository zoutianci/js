性能优化

http createServer (req, res) => { callback }
web 一切皆资源

web server 资源(html, css, json, img)  createReadStream(读)
进行访问时 将相应的资源传输到客户端 client proxy(浏览器即为用户代理)
"传输" 到客户端  client proxy

优化空间?

传输的体积能够减小,就能达到  gzip压缩
服务器端是可以进行文件的操作的   读写, 权限  压缩 解压缩
客户端
发送时就有状态码res.writeHead(200, {
    'Content-Type': 'text/html;charset=utf8'
})
带有压缩的字段, unzip

减少传输体积,  快  省带宽

