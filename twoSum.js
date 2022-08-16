function twoSum(nums,target){
	let map = new Map()
	for(let i=0;i<nums.length;i++){
		let temp = target - nums[i]
		if(map.has(temp)){
			return [map.get(temp),i]
		}else{
			map.set(nums[i],i)
		}
	}
	return [-1,-1]
}

let nums = [2,11,15,7]
let target = 9
console.log(twoSum(nums,target));