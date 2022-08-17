function reverseSame(str){
	return str === str.split('').reverse().join('')
}

let str = 'abccba'
console.log(reverseSame(str))
// true