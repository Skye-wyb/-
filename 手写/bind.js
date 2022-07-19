Function.prototype.bind = function (context) {
  if (typeof this !== 'function') {
    console.error()
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
