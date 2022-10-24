// 1、运算
var a = 1, b = 2;
a = a + b
b = a - b
a = a - b
console.log(a, b);

// 2、异或：利用a^b^b=a
let n = 2, m = 3
n = n ^ m
m = n ^ m
n = n ^ m
console.log(n, m);

// 3、解构赋值
let x = 7, y = 8;
[x, y] = [y, x];
console.log(x, y);