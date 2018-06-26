const arr = [1,2,3];
const obj = {};
const func = function() {};
// Object 来自于一个 function() {}
// 构造函数有prototype属性  对象 有__proto__属性
console.log(Object.prototype.toString);
console.log(Object.prototype.toString.call(arr));
console.log(Object.prototype.toString.call(obj));
console.log(Object.prototype.toString.call(func));

const zk = {
    name: '展开',
    toString: function() {
        // console.log(`${this.name}是程序员`);
        return `${this.name}是程序员`;
    }
}
// 序列化"{name:'展开', habit:'交友'}"
console.log(JSON.parse(JSON.stringify(zk)));

console.log(zk.toString())
console.log(Array.isArray(obj) );
console.log(zk instanceof Object);
console.log(Object.prototype.toString.call(zk));
console.log(zk.constructor);
