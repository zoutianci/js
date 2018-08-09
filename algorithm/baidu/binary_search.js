// function binary_search(arr, key) {
//   console.log(arr, key)
//   var low = 0, high = arr.length -1;
//   console.log(low, high)
//   while(low < high) {
//     var mid = parseInt((high + low) / 2);
//     console.log(mid)
//     if (key == arr[mid]) {
//       return arr[mid];
//     }
//     if (key > arr[mid]) {
//       low = mid + 1;
//     }
//     if (key < arr[mid]) {
//       high = mid -1;
//     } else {
//       return -1;
//     }
//   }
// }

function binary_search (arr, low, high, key) {
  // console.log(low, high)
  var mid = Math.floor((high + low) / 2);
  // console.log(mid)
  if (arr[mid] == key) {
    return mid;
  } else if (arr[mid] > key) {
    high = mid -1;
    return binary_search(arr, low, high, key);
  } else if (arr[mid] < key) {
    low = mid +1;
    return binary_search(arr, low, high, key);
  }
}
 
var arr = [1,2,3,4,5,6,7,8,9,10,11,23,44,55];
var result = binary_search(arr, 0, 13, 1);
console.log(result);