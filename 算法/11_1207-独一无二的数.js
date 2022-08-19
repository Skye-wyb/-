// 给你一个整数数组 arr，请你帮忙统计数组中每个数的出现次数。
// 如果每个数的出现次数都是独一无二的，就返回 true；否则返回 false。
let uniqueOccurences = function(arr){
	let map = new Map()
	for(let item of arr){
		if(map.has(item)){
			map.set(item,map.get(item)+1)
		}else{
			map.set(item,1)
		}
	}
	const set = new Set()
	for(let [key,value] of map){
		set.add(value)
	}
	return map.size === set.size
}