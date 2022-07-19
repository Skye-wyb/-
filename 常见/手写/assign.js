let a = {
  name: 'zhh',
  person: {
    name: 'wyb',
    hobby: '摩托'
  }
}
let b = { age: 24 }
Object.assign(b, a)

let c = { ...b }

c.person.hobby = '滑板'
console.log(a)
console.log(b)
console.log('------')
console.log(c)
