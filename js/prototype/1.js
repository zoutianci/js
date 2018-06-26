var obj = {a: 1};
console.log(obj.toString);
// console.log( 1 in obj);
// console.log("a" in obj);
// console.log("toString" in obj);
// 原型链对象上是否具有某属性
// obj 对象
// name 属性名
// obj , a false 
// obj, b false 
// obj toString true

function hasPrototypeProperty(obj, name) {
    return name in obj && !obj.hasOwnProperty(name);
}
console.log(hasPrototypeProperty(obj, "toString"));
console.log(hasPrototypeProperty(obj, "a"));

//函数是对象 Object
//Person 可以是 程序员  作曲家, 作者 的原型链对象
// prototype 属性 in obj in Object
// prototype 入口? js 吧有对象其实是由 function 构造的
// 函数都有的属性

// 实例 instance p1 p2 都有自身属性name
// 由Person 构建函数  this.name = 
// Person constructor
// Person.prototype.sayName
// 新的对象构建
// 不是类与对象的关系, 而是父子关系
// 原型关系
// constructor 属性设置, 车头
// constructor -> prototype
// 方法, prototype  车身

const p1 = new Person('小明');

function Person(name) {
    this.name = name;
}
// 函数
// js里面  几乎所有的函数都有一个prototype属性,
// 这个属性就像一个指针一样指向一个对象, 属性或方法的集合


Person.prototype = {
    getName: function() {
        return this.name
    }
}
//js 原型式继承
// constructor  Person name + books 属性
// prototype Person的方法链 + 方法链(自身方法)
// 一 让子类拥有父类的所有属性
function Author(name, books) {
    // 新的构造函数
    Person.call(this, name);
    this.books = books;
}

extend(Author, Person);
Author.prototype.getBooks = function() {
    return this.books;
}
// 构造函数  Author prototype ->
// surperClass prototype -> superClass.prototype
function extend(subClass, superClass) {
    var F = function() {};//空的构造函数
    F.prototype = superClass.prototype;
    subClass.prototype = new F(); //新的对象
    //失去构造函数
    subClass.prototype.constructor = subClass;
}

const author = new Author('雨果',['悲惨世界']);
// java里  就是对象拥有新的方法和属性的一份拷贝
// ? author  函数prototype 指向 Author的prototype
// this 实例对象 函数, this 指向 作用域内可以找到属性
// 方法?  prototype 去查找Author 对象的prototype
// console.log(author.getName()); 最终为实现此处
console.log(author.getName());
console.log(author.name);
console.log(author.getBooks());

Person.prototype.getName = function() {
    return this.name;
}