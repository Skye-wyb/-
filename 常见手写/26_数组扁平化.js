function flat(array){
	// if(!Array.isArray(array)) return
	// let res = []
	// res = array.reduce((pre,item)=>{
	// 	return pre.concat(Array.isArray(item)?flat(item):item)
	// },[])
	// return res
	
	return array.toString().split(',').map(Number)
}

let array = [1,2,3,[4,5,6,[7,8],[9,10]],11,[12,13,14],15]
console.log(flat(array));