// let zk = {};
// // 订阅者
// zk.peopleList = [];
// // 2018年10月1日大婚
// // 作何反应?
// zk.listen = function (fn) {
//     this.peopleList.push(fn);
// }
// zk.trigger = function () {
//     // ?消息发出后, 所有订阅者做出反应
//     for (var i = 0, fn; fn = this.peopleList[i++];) {
//         fn.apply(this, arguments);
//     }
// }
// zk.listen(function(msg) {
//     console.log('受到了'+msg+'的信息')
// })
// zk.listen(function(msg) {
//     console.log('受到了'+msg+'的信息')
// })
// zk.listen(function(msg) {
//     console.log('受到了'+msg+'的信息')
// })

// zk.trigger('zk结婚了1');
// zk.trigger('zk结婚了2');
// zk.trigger('zk结婚了3');

// function Pet(words){
//     this.words = words;
//     this.speak = function () {
//         console.log( this.words)
//     }
// }
// function Dog(words){
//     // Pet.call(this, words); //结果： Wang
//    Pet.apply(this, arguments); //结果： Wang
// }
// var dog = new Dog('Wang');
// dog.speak();

window.number = 'one';
document.number = 'two';

var s1 = { number: 'three' };
function changeColor() {
    console.log(this.number);
}

changeColor.apply();         //one (默认传参)
changeColor.apply(window);   //one
changeColor.apply(document); //two
changeColor.apply(this);     //one
changeColor.apply(s1);       //three

console.log(this)