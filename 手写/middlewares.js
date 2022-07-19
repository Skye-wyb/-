function compose(...middlewares) {
  return function (x) {
    function dispath(i, value) {
      const fn = middlewares[i]
      if (!fn) return
      return fn(value, value => dispath(i + 1, value))
    }
    return dispath(0, x)
  }
}
