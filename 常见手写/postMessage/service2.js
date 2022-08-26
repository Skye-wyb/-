const express = require('express')
const app = express()

app.get('/index',(request,response)=>{
	response.send('Hello Html!')
})

app.listen(8086,()=>{
	console.log('Server is running at http://localhost:8086');
})