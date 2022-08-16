class Storage{
	constructor(){
		this.name = 'Storage'
	}
	// 设置存储
	// key:需要存储的数据
	// value:需要存储的数据
	// expres：过期时间，毫秒单位
	setItem(key,value,expires){
		let obj = {
			value,
			expires,
			startTime:new Date().getTime()
		}
		if(obj.expires){
			localStorage.setItem(key,JSON.stringify(obj))
		}else{
			localStorage.setItem(key,JSON.stringify(obj.value))
		}
	}
	getItem(key){
		let temp = JSON.parse(localStorage.getItem(key))
		if(temp.expires){
			let nowTime = new Date().getTime()
			if(nowTime - temp.startTime > temp.expires){
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