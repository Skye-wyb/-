add(1)(2).sum()  // 3
add(1)(2)(3).sum() // 6

const addOne = add(1)
addOne.sum() // 1
addOne.sum() // 1

function add (a) {
    function s (b) {
        a += b
        return s
    }
    s.sum = function () {
        console.log(a);
    }
    return s
}