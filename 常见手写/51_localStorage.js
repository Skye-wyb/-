class _localStorage{
	constructor(){
		this.name = 'storage'
	}
	setItem(key,value,expires){
		let obj = {
			value,
			expires,
			startTime:Date.now()
		}
		if(obj.expires){
			localStorage.setItem(key,JSON.stringify(obj))
		}else{
			localStorage.setItem(key,JSON.stringify(value))
		}
	}
	getItem(key){
		let temp = JSON.parse(localStorage.getItem(key))
		if(temp.expires){
			let date = Date.now()
			// 过期
			if(date - temp.startTime > temp.expires){
				localStorage.removeItem(key)
				return
			}else{
				return temp.value
			}
		}else{
			return temp
		}
	}
}