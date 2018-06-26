function add(a,b){
    return a+b;
}
function minus(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}

// 函数是一等对象,object
// fn要做什么运算,传进来
// 高阶函数
function compute(a,b,fn){
    return fn(a,b);
}
// compute.prototype = {
//     add:add(),
//     minus:minus(),
//     multiply:multiply(),
//     divide:divide()
// }
console.log(compute(1,2,add));


// js callback fn
// 练习将函数作为参数