function maxLength(s){
	let map = new Map()
	let str = ''
	let max = 0
	for(let item of s){
		map.set(item,map.get(item)+1||1)
	}
	for(let [key,value] of map){
		if(value>max){
			max = value
			str = key
		}
	}
	return [str,max]
}