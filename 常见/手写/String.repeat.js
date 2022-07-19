function repeat(s, n) {
  return new Array(n + 1).join(s)
}

let s = 'abc'
let ans = repeat(s, 2)
console.log(ans)
