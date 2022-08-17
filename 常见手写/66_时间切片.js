/**
我们都知道一般页面16ms刷新一次，但如果我们的任务超过16ms的话，可能会产生丢帧的情况。因此我们就可以使用时间切片去对一个长时间的任务进行切片拆分。
当一次事件循环结束后，就会刷新一次页面，因此我们只使用`setTimeout`将下一个任务切片设置为一个新的宏任务就可以了。
 */

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