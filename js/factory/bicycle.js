// 函数属于对象，函数是一等对象

// 类，简单的只有一个构造函数
// 类跟函数没有区别
// js 本身并没有类，只是用的人多了，给了这个实现。
// js 其实只有对象 而且是基于原型式的对象 Object原型对象的始祖
// 原型 prototype
// js 不需要你传统的继承， 只要有一个参照物之后就可以实现原型式继承

function Bicycle(brand){
    // 构造函数 constructor
    // new 时执行
    // this.brand = brand||'凤凰'
}

// 原型：凤凰...
// 多了 二维码，手机支付
// 在js会认为  这是一个继承的关系吗，不是的。
// 共享单车，完全颠覆了自行车，
Bicycle.prototype = {
    sellBicycle: function(model){
        var bicycle = null;
        switch(model){
            case 'Giant':
                bicycle = new Giant();
            break;
            case 'The Speed Ster':
                bicycle = new Speedster();
            break;
            case 'U2':
                bicycle = new U2();
            break;
        }
        bicycle.assemble();
        bicycle.wash();
        bicycle.provideRepair();
        // 把车卖出去
        return bicycle;
        // console.log('卖车了。。。');
        // return null;
        // 面向对象们
        // 卖车，商店，很多车，维修人员，仓库人员        
    }
}
// function assemble(){
//     console.log("已完成！");
// }
// function wash(){
//     console.log("已完成清洗！");
// }
// function provideRepair(){
//     console.log('保修3年！');
// }
// js基本类型
// 字符串，数字，布尔值，undefined，null
// 复杂类型 object<-prototype arry function json

function Speedster(){

}
Speedster.prototype = {
    assemble:function(){
        console.log('组装完成');
    },
    wash:function(){
        console.log('清洗完成');
    },
    provideRepair:function(){
        console.log('保修1年');
    }
}

function Giant(){
    // provideRepair: '3year';
}
Giant.prototype = {
    assemble:function(){
        console.log('组装完成');
    },
    wash:function(){
        console.log('清洗完成');
    },
    provideRepair:function(){
        console.log('保修3年');
    }
}

function U2(){

}
U2.prototype = {

}

// var Bicycle = new Bicycle('永久');
// console.log(Bicycle.sellBicycle());
var bicycle = new Bicycle();
console.log(bicycle.sellBicycle('Giant'));