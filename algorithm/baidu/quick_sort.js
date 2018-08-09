// 快排算法(分治的概念)
  // 1. 随机选择数组中的一个数A, 作为基准 -> 中点
  // 2. 其他数字跟他比较, 小于它的放左边, 大于它的放右边
  // 3. 递归的思想, 将左边的数和右边的数重得做以上两步
// 有三种复杂排序: 1.快排 2.堆排序  3.归并排序   执行效率不同

const arrs = [85, 24, 63, 45, 17, 31, 96, 50];
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivotIndex = Math.floor(arr.length/2);
  // 基准点是提前排好了序的
  // let pivot = arr[pivotIndex];
  let pivot = arr.splice(pivotIndex, 1)[0];
  let left = [], right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
}
console.log(quickSort(arrs));



const arr2 = [7, 8, 21, 2, 45, 26, 98, 12, 11];

function quickSort2 (arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let midObj = arr.splice(mid, 1)[0];
  let left = [], right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < midObj) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([midObj], quickSort(right));
}

console.log(quickSort2(arr2))