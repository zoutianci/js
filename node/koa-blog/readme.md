config 文件做配置
routes 路由的定义
middlewares 中间件   此处用来判断用户是否登录了 在去到一个路由响应之前一点点 去执行 判断是否有session值
lib 对mysql数据库的操作

yarn add config-lite ejs koa koa-body-parser(处理form表单的,将form表单解析出来) koa-mysql-session koa-router koa-session-minimal koa-static koa-static-cache(静态文件缓存,利用后端缓存) koa-views(koa模板层的一些处理) markdown-it(转译处理成html) md5(加密) moment

数据库访问  并发过多,会拥堵