let p = new Promise((resolve,reject)=>{
	resolve()
}).then(res=>{
	console.log(5555);
}).then(res=>{
	console.log(6666);
})