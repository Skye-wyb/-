// get(['foo','baz',0,'bar'], obj)

const get = (list, obj) => {
    list.reduce((total,item) => {
      (total && total[item]) ? total[item] : null
    }, obj)
	return list
}
let obj = {
	name:'wyb'
}
console.log(get(['foo','baz',0,'bar'], obj));