Array.prototype.my_push = function () {
  for (let i = 0; i < arguments.length; i++) {
    this[this.length] = arguments[i]
  }
  return this.length
}

let arr = [1, 2, 3]
let ans = arr.my_push(5)
console.log(ans)
