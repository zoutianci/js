// 1. 有一个二维数组
// 2. 每一行从左到右递增的顺序， 每一列从上到下增
// 3. 完成一个函数判断是否有此数


function find (target, arr) {
  // arr 不固定
  let i = 0 ;  //row
  let j = arr[i].length-1 // 末尾
  while (i<arr.length && j>=0) {
   if (target>arr[i][j]) {
     i++;
    //  j = arr[i].length-1;
   } else if (target === arr[i][j]) {
       return true
   } else {
      j--;
   }
  }
  return false
}
console.log(find(10, [
  [1, 2, 3, 4],
  [5, 9, 10, 11],
  [13, 20, 21, 23]
]))
