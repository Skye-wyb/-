function toNumber(str) {
  let res = parseInt(str)
  const max = Math.pow(2, 31) - 1
  const min = -max - 1
  return isNaN(res) ? 0 : res > max ? max : res < min ? min : res
}

let str = '1987654'
let num = toNumber(str)
console.log(typeof num === 'number')
