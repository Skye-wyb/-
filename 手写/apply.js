Function.prototype.apply = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError()
  }
  let context = context || window
  let ans = null
  context.fn = this
  if (arguments[1]) {
    ans = context.fn(...arguments[1])
  } else {
    ans = context.fn()
  }
  delete context.fn
  return ans
}
