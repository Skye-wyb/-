// for (let index of ['a', 'b'].keys()) {
//     console.log(index);
// }

// for (let values of ['a', 'b'].values()) {
//     console.log(values);
// }
// for (let [index, values] of ['a', 'b'].entries()) {
//     console.log(index, values);
// }

let x = ['a', 'b', 'c']
let entries = x.entries()
console.log(entries.next().value);