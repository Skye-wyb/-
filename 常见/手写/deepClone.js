function deepClone(object) {
  if (!object || typeof object !== 'object') {
    return
  }
  let newObject = Array.isArray(object) ? [] : {}
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      newObject[key] =
        typeof object[key] === 'object' ? deepClone(object[key]) : object[key]
    }
  }

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
