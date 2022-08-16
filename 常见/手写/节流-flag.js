// 闭包实现
function throttle(fn, delay) {
  let flag = null
  return function () {
    if (flag) return
    flag = setTimeout(() => {
      fn.apply(this, arguments)
      // 最后在setTimeout执行完毕后再把标记设置为null(关键)
      // 表示可以执行下一次循环了。
      flag = null
    }, delay)
  }
}
