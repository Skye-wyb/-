String.prototype.trim = function(){
	let str = this
	return str.replace(/^\s*|\s*$/g,'')
}

let str = '      wyb    '
console.log(str.trim());