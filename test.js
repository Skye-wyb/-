var isValidSerialization = function (preorder) {
    if (preorder == '') return false;
    let nodes = preorder.split(',');
    let numbersOfNodes = 1;

    for (let i = 0; i < nodes.length; i++) {
        numbersOfNodes--;
        if (numbersOfNodes < 0) return false;
        if (nodes[i] != '#') numbersOfNodes += 2;
    }
    return numbersOfNodes == 0;
};
