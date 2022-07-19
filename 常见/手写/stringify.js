function deepClone(object) {
  let newObject = JSON.parse(JSON.stringify(object))
  return newObject
}

let a = {
  name: 'zhh',
  person: {
    name: 'wyb',
    hobby: '摩托'
  }
}
let b = deepClone(a)
console.log(b)
b.person.hobby = '滑板'
console.log(b)
console.log(a)
