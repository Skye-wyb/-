Function.prototype.call = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError()
  }
  let args = [...arguments].slice(1)
  let ans = null
  context = Object(context) || window
  let fn = Symbol('fn')
  context[fn] = this
  ans = context[fn](...args)
  delete context[fn]
  return ans
}

function fn() {
  console.log(this)
}
fn.call('aaa')
