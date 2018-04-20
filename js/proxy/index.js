// 小明表白的故事
// 小明 talk in js
// js 具有强大的表现力
// js 弱类型语言 java 静态强类型语言
// js 基础类型 字符串 数字， 对象{}
// bool 布尔值
// js 基础类型 字符串 数字，
// 对象{}，array， function''
// simpol
// bool 布尔值 false null 为空 undefined
// 五大基础类型 一个复杂类型
var xiaoming = {
    name: '小明',
    age: 21,
    hasGrilFriend: false,
    job: null,
    city: undefined,
    sendFlower: function(target){
        console.log(target);
        // 1 买花
        var flower = new Flower('满天星');
        if(typeof target.receiveFlower == 'function')
        {
            target.receiveFlower(flower,this.name);
            console.log(1223);
        }
            
        else
            console.log('拿到名企前是不可能谈恋爱的！');
    }
}

var xueba = {

}

var xiaomei = {
    name:'小美',
    age: 18,
    hasBoyFriend: false,
    job: null,
    city: undefined,
    receiveFlower: function(object,who){
        console.log("谢谢"+who+"的"+object.type+"花儿！");
    }
}

// 监听好心情
/*
    功能：提供心情监听
    参数：fn 是一个类型函数
    在一段时间后，心情好了，将fn执行
*/
// listenGoodMood= function(fn){
//     setTimeout(function(){fn()}, 10000);
//     //typeof fn === 'function'
//     //fn();
// }
function listenGoodMood(){
    setTimeout(function() {
      fn();
    },10000);
    // typeof fn === 'function'
    // fn();
}



var xiaoxue = {   
    listenGoodMood:function(fn){
        setTimeout(function() {
          fn();
        },10000);
        // typeof fn === 'function'
        // fn();
    },
    name:'小雪',
    receiveFlower: function(a,b){
        console.log(a,b);
        xiaoxue.listenGoodMood(function(){
            console.log(111);
            xiaomei.receiveFlower(a,b);
        })
        // if(b=='小明'){
        //     console.log('让我们在一起吧！');
        // }
        // else{
        //     xiaomei.receiveFlower(a,b);
        //     console.log(1);
        // } 
        // 实现了同样的收花的方法， 接口interface
        // 小雪，小美都实现了同样的方法，实现了相同的接口
        // console.log("谢谢"+who+"的"+flower.type+"花儿！");
    }
}

//类大写， 对象小写
var Flower = function(type){
    this.type = type || '玫瑰'
}

xiaoming.sendFlower(xiaoxue);
