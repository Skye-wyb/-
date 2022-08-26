const express = require('express')

const app = express()

// 使用回调函数的参数：request和response对象来处理请求和响应的数据
// （1）request对象：标识HTTP请求，包含了请求查询字符串、参数、内容、HTTP请求头部等属性
app.get('/',(request,response)=>{
	response.send('Hello World!')
})

app.listen(8085,()=>{
	console.log('Server is running at http://localhost:8085');
})