// 节流throttle, 在规定时间只执行一次, 先执行
// debounce 防抖, 在规定时间内执行一次,后执行. 都为解决高频事件而来
// scroll  mousewheel  mouseover  mousemove touchemove onriseze

const utils = {
    // 帮忙 method 执行的次数在规定时间内只有一次
    // method执行时, 函数内的this -> preFullPage
    // this.container
    throttle(method, context, delay) {
        // args?
        // 这个里面返回的函数  就是等下时间执行的真正函数体
        // 此处产生一个闭包
        let wait = false
        return function (...args) {
            // method()
            // 如果这样执行, 那么这个this 就会指向window
            // args? -> event 对象
            // 执行时, 上下文环境要跟以前一样            
            if (!wait) {
                console.log('throttle执行');
                method.apply(context, args)
                wait = true;
                setTimeout(() => {
                    wait = false
                }, delay)
            }
        }
    },
    debounce(method, context, event, delay) {
        // window.resize 等一下再执行
        console.log("执行了debounce");
        clearTimeout(context.tId);
        // 定时器保持它的名字?
        // js 动态语言  普通的变量, 他是会被覆盖的
        context.tId = setTimeout(() => {
            method.call(context, event);
        }, delay);
        // method.call(context, event);
    },
    getWheelDelta(event) {
        // console.log(event);
        if (event.wheelDelta) {
            this.getWheelDelta = event => event.wheelDelta;
            return event.wheelDelta;
        }
    }
}

// export default utils;