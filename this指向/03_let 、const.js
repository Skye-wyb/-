let a = 1;
const b = 2;
var c = 3;
function print(){
	console.log(this.a);
	console.log(this.b);
	console.log(this.c);
}
print()
console.log(this.a);