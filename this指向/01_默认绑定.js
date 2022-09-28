// 默认绑定通常是指函数独立调用，不涉及其他绑定规则。非严格模式下，this指向window，严格模式下，this指向undefined。

// 非严格模式
var foo = 123
function print(){
	this.foo = 234
	console.log(this);  // window
	console.log(this.foo); // 234
}
print()

// 严格模式（"use strict"可以开启严格模式）
