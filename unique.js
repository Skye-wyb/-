let arr = [1,1,"1","1",true,true,"true",{},{},"{}",null,null,undefined,undefined]

// 去重第一种
let ans = Array.from(new Set(arr))
console.log(ans);
// 第二种
let uniqueTwo = arr =>{
	let map = new Map()
	let ans = []
	arr.forEach(item=>{
		if(!map.has(item)){
			map.set(item,true)
			ans.push(item)
		}
	})
	return ans
}
console.log(uniqueTwo(arr));

// 第三种
let uniqueThree = arr=>{
	let ans = []
	arr.forEach((item,index)=>{
		if(ans.indexOf(item)===-1){
			ans.push(item)
		}
		// if(!ans.includes(item)){
		// 	ans.push(item)
		// }
	})
	return ans
}
console.log(uniqueThree(arr));

// 第四种
let uniqueFour = arr =>{
	let ans = arr.filter((item,index)=>{
		return arr.indexOf(item)===index
	})
	return ans
}
console.log(uniqueFour(arr));