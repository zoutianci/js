//console.log('合唱团')
// talk is js
// 国王，招1000只鸭子组成合唱团
var choir = [];
// duck 是鸭对象
// JSON Object
// 只要两脚站立会嘎嘎嘎的叫的都是鸭子
var duck = {
    // name:'鸭王',
    // actor:'任达华',
    duckSinging:function(){
        console.log('嘎嘎嘎');
    }
}
// new 一下， json 就是对象，不需要new
// json 是可以慢慢描述的 也是数据交换的一个标准
var yyj = {
    name:'杨玉杰',
    hasGirFriend:false,
    birth:'5-23',
    girlAttributes:{
        sex:'all',
        isAlive:true
    }
}
console.log(yyj.girlAttributes.sex);
yyj.girlAttributes.sex = 'female';
console.log(yyj.girlAttributes.sex);
var chicken = {
    duckSinging:function(){
        console.log('嘎嘎嘎');
    }
}

// choir.push(duck)
for(var i=0; i<999;i++){
    // choir.push(duck);
    joinChoir(duck);
}
joinChoir(chicken);
console.log(choir.length);
console.log(choir);
// choir.push(chicken);
// console.log(choir.length);
for(var i=0;i<choir.length;i++){
    var singer = choir[i];
    if(!singer.duckSinging){
        console.log('不是鸭子');
        break;
    }
}

function joinChoir(ani){
    if(ani && typeof ani.duckSinging == 'function')
        choir.push(ani);
    else{
        console.log('不合要求');
    }
}