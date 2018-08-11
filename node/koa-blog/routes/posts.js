const routers = require('koa-router');
const controller = require('../controller/c-posts');

const router = routers();
router.get('/', controller.getRedirectPosts);  // 路由交给controller(控制器)函数去做处理
router.get('/posts', controller.getPosts);

module.exports = router;