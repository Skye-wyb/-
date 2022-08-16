function isEmpty(object){
	// 第一种
	// for(let key in object){
	// 	return true
	// }
	// return false
	
	// 第二种
	// if(JSON.stringify(object)!=='{}'){
	// 	return true
	// }
	// return false
	
	// 第三种
	return Object.keys(object).length === 0
}