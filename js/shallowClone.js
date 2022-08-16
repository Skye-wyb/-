function shallowClone(object) {
  if (!object || typeof object !== 'object') return object
  let newObject = Array.isArray(object) ? [] : {}
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      newObject[key] = object[key]
    }
  }
  return newObject
}

let obj1 = {
  name: 'wyb',
  age: 25,
  hobby: {
    name: 'hb',
    grade: 1
  }
}

let obj2 = shallowClone(obj1)
console.log(obj2)
obj2.hobby.name = 'JS'
console.log(obj1)
