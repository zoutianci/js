// ajax 请求服务器数据时  为了保证安全  要求带上时间戳
// 有时还会要求   时间戳+uid  md5  值 再来请求
// 假如说  我们要得到一个  20160614134947(时间) 
function generateTime() {
    // 年份, 月份少于两位加0
    // 日期也是两位, 加0.
    var a = new Date();
    console.log(a.getDate());
    var date = new Date().getTime();
    console.log(date);
    var time = new Date(date);
    console.log(time);

}

generateTime();

// function getCurrentTime() {
//     var keep = '';
//     var date = new Date();
//     var y = date.getFullYear();
//     var m = date.getMonth() + 1;
//     m = m < 10 ? '0' + m : m;
//     var d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
//     var h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
//     var f = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
//     var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
//     var rand = Math.round(Math.random() * 899 + 100);
//     keep = y + '' + m + '' + d + '' + h + '' + f + '' + s;
//     return keep; //20160614134947
// }
// getCurrentTime();
  