// 斐波那契数列

// f(n) = f(n-1) + f(n-2)

// var count = 0;
// function fbnc (val) {
//   count ++;
//   if (val == 1) {
//     return val;
//   }
//   if (val == 2) {
//     return 1;
//   }
//   if (val > 2) {
//     return fbnc(val - 1) + fbnc(val - 2);
//   }
// }

// console.log(fbnc(10), count)

let count = 0;
function fn(n) {
  let cache = {};
  function _fn(n) {
    if (cache[n]) {
      return cache[n]
    }
    count ++;
    if (n == 1 || n == 2) {
      return 1;
    }
    let prev = _fn(n-1);
    cache[n-1] = prev;
    let next = _fn(n-2);
    cache[n-2] = next;
    return prev + next;
  }
  return _fn(n);
}

console.log(fn(20), count);