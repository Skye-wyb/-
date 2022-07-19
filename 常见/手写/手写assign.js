function myAssign(target, ...source) {
  if (target == null) {
    throw new TypeError('Cannot convert undefined or null to object')
  }
  let res = Object(target)
  source.forEach(obj => {
    if (obj !== null) {
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          res[key] = obj[key]
        }
      }
    }
  })
  return res
}

let a = { name: 'wyb' }
let b = { age: 24, hobby: { name: '滑板', grade: 1 } }
let c = {}
c = myAssign(c, a, b)
console.log(c)
