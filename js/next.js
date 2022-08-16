function createIterator(items) {
  let i = 0
  return {
    next: function () {
      let done = i >= items.length
      let value = !done ? items[i++] : undefined
      return {
        done,
        value
      }
    }
  }
}

function* gen() {
  yield 1
  yield 2
  yield 3
}

let g = gen()
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
