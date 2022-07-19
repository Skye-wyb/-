function change(a, b) {
  a = a + b
  b = a - b
  a = a - b
  return [a, b]
}
console.log(change(1, 2))
