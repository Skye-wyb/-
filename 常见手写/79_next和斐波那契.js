function fib(){
	function fibFun(n){
		if(n==0){
			return 0
		}
		let first = 0
		let second = 1
		for(let i=2;i<=n;i++){
			let third = first + second
			first = second
			second = third
		}
		return second
	}
	let n = 0
	return {
		next:function(){
			return fibFun(n++)
		}
	}
}


let a = fib()
console.log(a.next())   //0
console.log(a.next())   //1
console.log(a.next())   //1
console.log(a.next())   //2
console.log(a.next())   //3
console.log(a.next())   //5
console.log(a.next())   //8
console.log(a.next())   //13