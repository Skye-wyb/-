const getAjax = function(url,methods){
	return new Promise((resolve,reject)=>{
		const xhr = new XMLHttpRequest()
		xhr.open(methods,url,false)
		xhr.setRequestHeader('Accept','application/json')
		xhr.onreadystatechange = function(){
			if(xhr.readyState !== 4) return
			if(xhr.status === 200 || xhr.status === 304){
				resolve(xhr.responseText)
			}else{
				reject(new Error(xhr.responseText))
			}
		}
		xhr.send()
	})
}