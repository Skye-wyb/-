let arr = [1, 2, 3]
let typeOfArr = Object.prototype.toString.call(arr).split(' ')[1]
console.log(typeOfArr)
