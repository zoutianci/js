// function controller () {
// }
// module.exports = controller;
// <% if(session.user) {%>
//     Hello, <%= session.user %>
//     <% } else { %>
//     欢迎注册登录^_^
//     <% } %>
exports.getRedirectPosts = async ctx => { // koa 原生支持axios
  ctx.redirect('/posts'); // 发生一次跳转, codestatus 3##, 跳转到/posts下
}

exports.getPosts = async ctx => {
  ctx.body = 'getPosts';
}