// A man, a plan, a canal: Panama
let isPalindrome = function(s){
	const newStr = s.replace(/[^0-9a-zA-Z]/g,'').toLocaleLowerCase()
	for(let i=0;i<newStr.length/2;i++){
		if(newStr[i] !== newStr[newStr.length-i-1]){
			return false
		}
	}
	return true
}