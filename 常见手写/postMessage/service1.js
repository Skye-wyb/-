const express = require('express')

const app = express()

app.get('/',(request,response)=>{
	response.send('Hello World!')
})

app.listen(8085,()=>{
	console.log('Server is running at http://localhost:8085');
})