a = 1
function foo(){
	console.log(this.a);
}

const obj = {
	a:10,
	bar(){
		foo() // 1 foo函数仍然是独立运行的，foo中的this依旧指向window对象，指向其定义时绑定的this
	}
}

obj.bar()