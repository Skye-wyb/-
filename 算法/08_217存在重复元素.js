let containDuplicate = function(nums){
	let map = new Map()
	for(let i=0;i<num.length;i++){
		if(map.has(nums[i])){
			return true
		}
		map.set(num[i],i)
	}
	return false
}

let containDuplicate = function(nums){
	for(let i=0;i<nums.length;i++){
		if(nums.indexOf(nums[i])!==i){
			return true
		}
	}
	return false
}