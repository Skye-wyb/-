// 缓存结果使得函数至多被调用1次
// 无论传参如何，都只返回第一次调用的结果

function once(func) {
  // your code here
  let flag = false
  let ans
  return function(...rest){
    if(!flag){
      ans = func.apply(this,rest)
      flag = true
    }
    return ans
  }
}

function func(num) {
  return num
}

const onced = once(func)

console.log(onced(1) );
// 1

console.log(onced(2));
// 1，因为已经调用过了，前一次的结果被直接返回