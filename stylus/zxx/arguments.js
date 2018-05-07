//参数不限
//js 函数很灵活,参数的数量都可以不定
function sum(...args){
    // this 自动生成,函数执行的方式决定
    // arguments 所有参数

    console.log(arguments.length);
    // 类数组, js 生成的怪胎
    // 真正的数组是 Array.prototype.forEach
    let total = 0;
    Array.from(arguments).forEach(i => { //es6
        total += i;
    });
    // for(let i=0;i<arguments.length;i++){
    //     total += arguments[i];
    // }
    // let total = 0;
    // args.forEach(i => {
    //     total += i;
    // })
    return total;
}

console.log(sum(1,2,3,4,5,6,7,8,9,10));