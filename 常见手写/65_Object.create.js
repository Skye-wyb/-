Object.create = function(proto,propertiesObject = undefined){
	if (typeof proto !== 'object' && typeof proto !== 'function') {
	    throw new TypeError('Object prototype may only be an Object or null.')
	}
	if (propertiesObject === null) {
		throw new TypeError('Cannot convert undefined or null to object')
	}
	function F(){}
	
	// 绑定原型
	F.prototype = proto
	// 创建新原型
	const obj = new F()
	
	if(propertiesObject){
		Object.defineProperties(obj,propertiesObject)
	}
	if(proto === null){
		obj.__proto__ = null
	}
	return obj
}