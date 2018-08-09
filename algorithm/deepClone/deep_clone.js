// 1. js 复杂对象, 引用拷贝
// 2. 递归  树  key=>value value object 

// 1. 递归主体,

function deepClone(o1, o2) {
  for (let k in o2) {
    if (typeof o2[k] === 'object') {
      o1[k] = {};
      deepClone(o1[k], o2[k]);
    } else {
      o1[k] = o2[k];
    }
  }
}

let obj = {
  a: 1,
  b: [1, 2, 3],
  c: {
    d: 4
  },
  e: 7
}

let emptyObj = Object.create(null);
deepClone(emptyObj, obj);
console.log(emptyObj.a == obj.a);
console.log(emptyObj.b == obj.b);
console.log(emptyObj.e == obj.e);
console.log(emptyObj.c == obj.c);
console.log(emptyObj.d);