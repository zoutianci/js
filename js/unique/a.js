const arr = [1, 2, 3, 4, 1, 4, 5, 3];
// function unique(arr) {
//     // 遍历arr，把元素分别放入tmp数组(不存在才放)  
//     const tmp = new Array();
//     for (const i in arr) {
//         //该元素在tmp内部不存在才允许追加  
//         if (tmp.indexOf(arr[i]) == -1) {
//             tmp.push(arr[i]);
//         }
//     }
//     return tmp;
// }


function unique() {
    //严谨性
    if (!Array.isArray(arr)) {
        console.log('type error');
        return;
    }
    const resultArr = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        let flag = true;
        for (let j = 0; j < resultArr.length; j++) {
            if (arr[i] === resultArr[j]) {
                flag = false;
                break;
            }
        }
        if(flag){
            resultArr.push(arr[i]);
        }       
    }
    return resultArr;
}
console.log(unique(arr));
