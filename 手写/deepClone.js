function deepClone(obj) {
  if (!obj || typeof obj !== 'object') return
  let newObject = Array.isArray(obj) ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObject[key] =
        typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
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

let obj2 = deepClone(obj1)
console.log(obj2)
obj2.hobby.name = 'JS'
console.log(obj1)
console.log(obj2)
