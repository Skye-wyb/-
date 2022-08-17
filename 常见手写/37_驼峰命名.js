function toCamString(name){
	let arr = name.split('-')
	if(arr[0]===''){
		arr = arr.slice(1)
	}
	for(let i=1;i<arr.length;i++){
		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
	}
	return arr.join('')
}

let str = 'hello-world-component'
console.log(toCamString(str));