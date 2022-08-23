// 回溯
const subsets = function (nums) {
  const res = []
  const dfs = (index,temp)=>{
		if(index===nums.length){
			res.push([...temp])
			return
		}	
		temp.push(nums[index])
		dfs(index+1,temp)
		temp.pop()
		dfs(index+1,temp)
	}
	dfs(0,[])
	return res
}

let nums = [1,2,3,4]
console.log(subsets(nums));


