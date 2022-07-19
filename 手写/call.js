Function.prototype.call = function (context) {
  if (typeof this !== 'function') {
    console.error
  }
  let args = [...arguments].slice(1)
  let res = null
  let context = context || window
  context.fn = this
  res = context.fn(...args)
  delete context.fn
  return res
}
