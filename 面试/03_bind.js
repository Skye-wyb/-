Function.prototype.bind = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError()
  }
  let args = [...arguments].slice(1)
  let fn = this
  return function Fn() {
    return fn.apply(
      this instanceof Fn ? this : context,
      args.concat(...arguments)
    )
  }
}
function fn() {
  console.log(this)
}

let fun = fn.bind({ name: 1 }, 999)
fun()
