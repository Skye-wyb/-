// 严格模式（"use strict"可以开启严格模式）
"use strict"
var foo = 123
function print(){
	this.foo = 234
	console.log(this);  // window
	console.log(this.foo); // 234
}
print()

// 注意事项：开启严格模式后，函数内部this指向undefined，但全局对象window不会受影响