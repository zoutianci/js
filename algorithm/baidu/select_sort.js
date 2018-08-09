// 选择排序
// 找到数组中最小的值放在第一位,第二小的放在第二位......

const arrs = [85, 24, 63, 45, 24, 17, 31, 96, 50];

function selectionSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let min = i;  // 先定第一个为最小数
    for (let j = i; j < len; j++) {
      if (arr[j] < arr[min]) {  // 每次都将数组与此第一个数比较
        min = j;  // 放置新的最小数
      }
    }
    if (min !== i) {  // 如新的最小数与之前的不同
      [arr[min], arr[i]] = [arr[i], arr[min]]   // 调换一下位置
    }
  }
  return arr;
}

console.log(selectionSort(arrs))