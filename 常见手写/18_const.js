function _const(data,value){
	window.data = value
	Object.defineProperty(window,data,{
		enumerable:false,
		configurable:false,
		get:function(){
			return value
		},
		set:function(newValue){
			if(newValue!==value){
				throw new TypeError()
			}else{
				return value
			}
		}
	})
}