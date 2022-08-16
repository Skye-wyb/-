function sum(...args){
	let ans = 0
	ans = args.reduce((pre,cur)=>{
		return pre+cur
	},0)
	let add = function(...args){
		ans = args.reduce((pre,cur)=>{
			return pre + cur
		},ans)
		return add
	}
	add.valueOf = function(){
		console.log(ans);
	}
	return add
}

sum(1,2,3)(2).valueOf()