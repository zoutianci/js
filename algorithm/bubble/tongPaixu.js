// const arr = [35, 99, 18, 76, 12];
// const oarr = [];

// for(let i =0; i<=99; i++){
//     oarr[i] = i;
//     console.log(oarr[i]);
//     for(let j = 0; j<=oarr.length; j++){

//     }
// }

const source_arr = [35, 99, 18, 76, 12];
function tongPaixu(){
    const arr = [];
    // 方法是: 利用数组的下标, 数字大小在下标范围之内,下标是有天然的顺序的,
    const a = [];
    for(let i = 0; i < 100; i++){
        a[i]=0;
        
    }
    for(let i = 0; i < source_arr.length; i++){
        const item = source_arr[i];
        a[item] += 1;
    }
    for(let i = 0; i < a.length; i++){
        if(a[i] >0){
            // console.log(a[i]);
            for(let j = 0; j<a[i];j++){
                arr.push(i);
            }            
        }
    }
    return arr;
    // console.log(arr);
}

const result_arr = tongPaixu();
console.log(result_arr);


const source_arr = [35, 99, 18, 18, 76, 12 ];
function sort() {
  const arr = [];
  // 方法是：利用数组的下标， 数字大小在下标范围之内，
  // 下标是天然有顺序的，桶排序
  const a = [];
  for (let i = 0; i < 100; i++) {
    // 桶子做好了
    a[i] = 0;
  }
  for (let i = 0; i < source_arr.length; i++) {
    const item = source_arr[i];
    // console.log(item);
    a[item] += 1;
  }
//   console.log(a);
  for (let i = 0; i < a.length; i++) {
    if (a[i] > 0) {
      for (let j = 0; j < a[i]; j++) {
        arr.push(i);
      }
    }
  }

  return arr;
}
const sorted_arr = sort();
console.log(sorted_arr);
