Promise.resolve('ok').finally(()=>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve('inner ok')
		},1000)
	})
}).then((data)=>{
	console.log('成功',data);
},err=>{
	console.log('失败',err);
})