let oo = {}
Object.defineProperty(oo, 'fn', {
  get() {
    console.log('get')
  },
  set() {
    console.log('set')
  },
})

oo.fn = '100'
