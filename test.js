// 列出打印顺序
function changeStuff (a, b, c) {
    a = a * 10;
    b.item = "changed";
    c = { item: "changed" };
}

let num = 10;
let obj1 = { item: "unchanged" };
let obj2 = { item: "unchanged" };

changeStuff(num, obj1, obj2);

console.log(num);
console.log(obj1.item);
console.log(obj2.item);