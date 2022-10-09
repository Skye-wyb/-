function throttle (fn, delay) {
  let lastTime = 0
  return function () {
    let nowTime = Date.now()
    if (nowTime - lastTime > delay) {
      fn.call(this)
      lastTime = nowTime
    }
  }
}

function debounce (fn, delay) {
  let timer = null
  return function () {
    // 清除上一次的定时器
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this)
    }, delay)
  }
}
