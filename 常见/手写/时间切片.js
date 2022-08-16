function timeSlicing(generator) {
  if (typeof generator === 'function') {
    generator = generator()
  }
  if (!generator || typeof generator.next !== 'function') return
  return function next() {
    let res = generator.next()
    if (res.done) {
      return
    }
    // next会在下一个宏任务执行
    setTimeout(next)
  }
}

// 使用
button.onclick = timeSlicing(function* () {
  while (true) {
    doSomething()
    yield
  }
})
