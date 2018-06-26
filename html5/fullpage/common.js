
// console.log(1);
// document.addEventListener('DOMMouseScroll',scrollFunc,false)
// var preF = document.getElementById('preFullPage')
// preF.document.addEventListener('DOMMouseScroll',scrollFunc,false);
// function scrollFunc(){
//     console.log(1);
//     var clientHeight = document.documentElement.clientHeight;
//     preF.style.top = `-${clientHeight}px`;
// }
// var clientHeight = document.documentElement.clientHeight;
// preF.style.top = '-736px'
// var clientHeight = document.documentElement.clientHeight;
// import from utils;

class preFullPage {
    constructor(options) {
        // constructor就只需要留下属性的定义,其他的放到外面做
        // 1.手动计算page的高度
        // # preFullPage高度?

        const defaultOptions = {
            isShowNav: true,
            delay: 1000,
            // 每次turnpage callback
            definePages: () => {
                
            },
        }
        this.options = Object.assign(defaultOptions, options);
        console.log(this.options);
        this.container = document.getElementById('preFullPage');   
        this.viewHeight = document.documentElement.clientHeight;
        
        console.log(this.container);
        console.log(this.viewHeight);
        this.DELAY = this.options.delay;
        this.currentPosition = 0;
        this.init();
        
    }
    init () {
        this.container.style.height = `${this.viewHeight}px`;
        // mousewheel 节流
        // this.scrollMouse 方法, 负责滚动  执行太频繁
        // 就用throttle 方法  让它在规定时间里  只执行一次
        // 重新返回一个函数, handleMouseWheel, 闭包, 将this.scrollMouse封到内部
        // this, 函数执行的context
        // 1000 delay 推迟执行

        const handleMouseWheel = utils.throttle(this.scrollMouse, this, this.DELAY);
        if(navigator.userAgent.toLowerCase().indexOf('firefox') === -1) {
            document.addEventListener('mousewheel', handleMouseWheel,false);
        }else {
            document.addEventListener('DOMMouseScroll', function() {
                console.log('scroll')
            },false)
        }
        
        console.log(navigator.userAgent.toLowerCase().indexOf('firefox'));
        // 时间监听   浏览器嗅探
        // mousewheel
        // firefox  DOMMouseScroll
        
        // 事件处理函数交由对象的方法来执行
        window.addEventListener('resize', this.handleWindowResize.bind(this), false);
    }

    handleWindowResize (event) {
        // console.log('handlewindowresize');
        // console.log(this);
        // 对象的方法, 肯定有需要找到对象
        // this 代表对象
        
        // 防抖
        utils.debounce(this.getNewPosition, this, event, this.DELAY);
        
    }

    getNewPosition () {
        console.log('debounce');
        this.viewHeight = document.documentElement.clientHeight;
        this.container.style.height = `${this.viewHeight}px`;
    }

    // 滚轮事件处理函数
    scrollMouse (event) {
        
        const delta = utils.getWheelDelta(event);
        console.log('滚轮事件执行,此处打印delta:')
        console.log(delta);
        if (delta > 0) {
            // 向上滚
            this.goUp();
        } else {
            this.goDown();
        }
    }
    goUp() {
        console.log("Up1:");
        console.log(this.container.style.top );
        this.currentPosition += this.viewHeight;
        this.container.style.top = `${this.currentPosition}px`;
        console.log("Up2:");
        console.log(this.container.style.top );
    }
    goDown() {
        console.log("D1:");
        console.log(this.container.style.top );
        this.currentPosition -= this.viewHeight;
        this.container.style.top = `${this.currentPosition}px`;
        console.log("D2:");
        console.log(this.container.style.top );
    }
    
}

// new preFullPage();
