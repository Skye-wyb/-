// 1.reduce实现forEach
function forEach(arr, handler) {
  arr.reduce((pre, item, index) => {
    handler(item, index)
  }, 0)
}

// 2.reduce实现map
function map(arr, handler) {
  let ans = []
  arr.reduce((pre, item, index) => {
    let temp = handler(item, index)
    ans.push(temp)
  }, 0)
  return ans
}

// 3.reduce实现filter
function filter(arr, handler) {
  let res = []
  arr.reduce((pre, item, index) => {
    if (handler(item, index)) {
      res.push(item)
    }
  }, 0)
  return res
}

let arr = [1, 2, 3, 4, 5]
function fn(item, index) {
  //   console.log(item + 1)
  //   return item + 1
  if (item < 3) {
    return true
  } else {
    return false
  }
}

// let ans = forEach(arr, fn)

// let ans = map(arr, fn)
let ans = filter(arr, fn)
console.log(ans)
