let tree = [
    { name: 'A' },
    {
        name: 'B', children: [
            { name: 'A' },
            { name: 'AA', children: [{ name: 'AAA' }] }
        ]
    },
    { name: 'C' }
]

function getItem (tree, str) {
    let ans = []
    tree.forEach(item => {
        if (item.name === str) {
            ans.push(item)
        }
        let temp = JSON.parse(JSON.stringify(item))
        let child = []
        if (item.children) {
            child = getItem(item.children, str)
        }
        if (child.length) {
            temp.children = [...child]
            ans.push(temp)
        }
    })
    return ans
}
console.log(getItem(tree, 'A'));
// console.log(JSON.stringify(getItem(tree, 'A')));

console.log(getItem(tree, 'AA'));
// console.log(JSON.stringify(getItem(tree, 'AA')));

console.log(getItem(tree, 'B'));
// console.log(JSON.stringify(getItem(tree, 'B')));
// 1.假设我输入的str为A, 则过滤后返回的结果为
// [
//     { name: 'A' },
//     { name: 'B', children: [{ name: 'A' }] }
// ]
//2.假设我输入的str为AA,则过滤后返回的结果为
// [
//     {
//         name: 'B', children: [
//             { name: 'AA', children: [{ name: 'AAA' }] }
//         ]
//     }
// ]

//3.假设我输入的str为B,则过滤后返回的结果为
// [
//     {
//         name: 'B', children: [
//             { name: 'A' },
//             { name: 'AA', children: [{ name: 'AAA' }] }
//         ]
//     }
// ]