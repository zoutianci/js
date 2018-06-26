// symbol js 的基础数据类型之一
// 为js 带来唯一值, 不会重复
// var s = Symbol('foo');
// console.log(s);
// var s1 = Symbol('bar');
// console.log(s == s1);
// var sym = Symbol('My Symbol');
// console.log(sym);
// console.log(typeof String(sym));

// var str = '123';
// var str1 = new String("123");
// console.log(typeof str)
// console.log(typeof str1)
// console.log(typeof String(str1))

var mySymbol = Symbol();
var a = {
    'delay': 1000,
    'delay': 2000,
    [mySymbol]: 'Hello!', 
}
var mySymbol = Symbol();
a[mySymbol] = {value: '您好'};
var mySymbol = Symbol();
a[mySymbol] = {value: '您好1'};
var mySymbol = Symbol();
a[mySymbol] = {value: '您好2'};

for (key in a) {
    console.log(key, a[key]);
}
const objectSymbols = Object.getOwnPropertySymbols(a);
Object.defineProperty(a, mySymbol, {
    configurable: false,//是否可配置
    writable: true,//是否可写
    enumerable: true,//是否可枚举
    value: '张三',
});
a[mySymbol] = '张三丰';

console.log(a);
console.log(objectSymbols);
// console.log(a);
