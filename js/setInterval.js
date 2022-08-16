// setTimeoutÊµÏÖsetInterval
function mySetInterval(fn, delay) {
  let timer = null
  let interval = () => {
    timer = setTimeout(() => {
      fn()
      interval()
    }, delay)
  }
  interval()
  return () => {
    clearTimeout(timer)
  }
}

const fn = () => {
  console.log('hello')
}

mySetInterval(fn, 1000)
