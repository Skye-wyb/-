let nusm = [1,2,3,4,5]
let ans = 0
try{
	nusm.forEach(item=>{
		if(item===2){
			ans = item
			throw('出错啦')
		}
		console.log(item);
	})
}catch(e){
	console.log(e);
}
console.log(ans);