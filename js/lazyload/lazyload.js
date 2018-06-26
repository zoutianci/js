/*
 * author ztc
 * date 2018-5-4
 */


// 服务于任何图片元素， img 幕后， 再将
// origin_src 设置过去
var LazyLoadImage = (function(){
    // 变量的冒泡查找
    // const a = 1;
    return {
        setSrc: function(ele){
            // console.log(a);
            const url = ele.getAttribute('origin_src')?ele.getAttribute('origin_src'):'';
            if(!url) return;
            const oImg = document.createElement('img');
            // 不会影响页面，none会离开文档流
            oImg.style.display = 'none';
            document.body.appendChild(oImg);
            // 图片下载完之后，onload注册的事件回调
            // 函数就会被执行
            // 异步，同步
            oImg.onload = function(){
                // 不会立即执行，
                // 后执行
                // console.log('图片下载完成了');
                ele.src = url;
                document.body.removeChild(this);
            }
            // 先执行
            // console.log('设置src');
            oImg.src = url;

        }
    }
})();
// LazyLoadImage.setSrc();