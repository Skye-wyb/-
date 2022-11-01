// 序列化二叉树的一种方法是使用 前序遍历  当我们遇到一个非空节点时，我们可以记录下这个节点的值。如果它是一个空节点，我们可以使用一个标记值记录，例如 #。
var isValidSerialization = function (preorder) {
    if (preorder == '') return false
    let nodes = preorder.split(',')
    let numbersOfNodes = 1
    for (let i = 0; i < nodes.length; i++) {
        numbersOfNodes--
        if (numbersOfNodes < 0) return false
        if (nodes[i] != '#') numbersOfNodes += 2
    }
    return numbersOfNodes == 0
}

let preorder1 = "9,3,4,#,#,1,#,#,2,#,6,#,#"
console.log(isValidSerialization(preorder1));

let preorder2 = '1,#'
console.log(isValidSerialization(preorder2));

let preorder3 = "9,#,#,1"
console.log(isValidSerialization(preorder3));