网站由网页构成, 由超链接串起来
web app mobile native app (ios, android)

多页应用  很多页面, 会跳转, 重新刷新页面. 
缺点: 
- 用户体验极差,
每次点链接, 都要等http请求及相应
整个页面的刷新, 页面白一下, 如果传输时间大于0.5秒, 会看到明显的白屏.
- 相同的html片段 重复被下载

1. preventDefault a //阻止默认的行为
2. href attribute
3. jquery ajax 动态得到html内容
4. p content img src
    $('').content()
    $('').src('')

SPA Single Page Application
单页应用

- 页面的状态 可以对应 路由
SPA 解决了用户体验的问题, 但却带来了另一个极其严重的问题
--> 浏览记录没有了,
history
如何为每个状态改变, (路由状态), 产生一个url(路由), 并且生成一次浏览历史记录
让SPA 的访问, 更像传统的请求, location 浏览器地址栏上的操作可以使用了.

如何主动去设置 history

- 一个页面对应多个页面状态, 每个页面状态都会有一个route 路由 (地址, state, 数据), 又会用来对应一个组件.
vue 单页面应用开发, 由 router 响应 匹配相应的组件显示再一直组件化的过程.