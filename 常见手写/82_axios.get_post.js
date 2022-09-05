// 在http.js中import service from '../utils/service.js'引入
// 	get(传入的请求地址url，请求传递的参数){
// 	//主要是通过设置config中的method方法决定请求的类型
// 	  return service(config);
// 	}
// 	至于post和get请求的不同之处
// 	get传递的是params post传递的是data
// 	get/post 方法使用 是 import {get/post} from '../utils/http.js'

import service from './81_axios封装.js'

export function get(url,params){
	const config = {
		method:'get',
		url:url
	}
	if(params){
		config.params = params
	}
	return service(config)
}

export function post(url,params){
	const config = {
		method:'post',
		url:url
	}
	if(params){
		config.data = params
	}
	return service(config)
}