// 插入排序  如扑克插牌

// 插入的位置m  m>0
// 把m位置的牌跟眼前的0, (m-1)进行比较 如果小于交换一下位子

// 2 1 3 5 4 3
// 1 2 3 5 4 3
// 1 2 3 5 5 3
// 1 2 3 4 5 3
// 1 2 3 4 5 5
// 1 2 3 4 4 5
// 1 2 3 3 4 5

const arr = [2, 1, 3, 5, 4, 3, 21, 1, 33, 6, 99, 0];

function insertion_sort(arr) {
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        [arr[j], arr[i]] = [arr[i], arr[j]];
      }
    }
  }  
  return arr;
}

console.log(insertion_sort(arr));
