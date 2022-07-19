function debounce(func, delay) {
  let timer = null
  return function () {
    let context = this
    let args = arguments

    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    // 设置定时器
    timer = setTimeout(() => {
      func.apply(context, args)
    }, delay)
  }
}
