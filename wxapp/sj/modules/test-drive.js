// es6里面这个叫做模块化语法 module
// js 变量或常量, 值的类型由值决定
// var a = 1;
// a = "str"

const testDrive = () =>{
    // wx表示要用内置的来自微信的API了
    // 原生的api 大部分的小程序的是html5 webview
    // 性能上比原生的慢一些
    wx.showToast({
        title: '暂不支持'
    })
}
export default testDrive