function add (a, b) {
  console.log(a, b)
  return a + b
}
let ans = 0
function debounce (fn, time) {
  let timer = null
  return function (...args) {
    clearTimeout(timer)
    // var args = arguments
    // console.log(args)
    timer = setTimeout(function () {
      return fn.apply(this, args)
    }, time)
  }
}
console.log(debounce(add, 1000)(5, 10))
// setTimeout(() => {
//   console.log('ans', ans)
// }, 3000)
