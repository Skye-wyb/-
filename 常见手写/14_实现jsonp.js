function Jsonp(url,params,callback){
	// 判断参数
	let querystring = url.indexOf('?') === '-1'?'?':'&'
	// 添加参数
	for(let key in params){
		if(params.hasOwnProperty(key)){
			querystring += key +'='+ params[key]+'&'
		}
	}
	// 处理回调
	let random = Math.random().toString().replace('.','')
	let callbackName = 'myJsonp'+random
	// 添加回调
	querystring += 'callback='+callbackName
	// 构建请求
	let scriptNode = document.createElement('script')
	scriptNode.src = url + querystring
	window[callbackName] = function(){
		callback(...arguments)
		document.getElementsByTagName('head')[0].removeChild(scriptNode)
	}
	// 发送请求
	document.getElementsByTagName('head')[0].appendChild(scriptNode)
}