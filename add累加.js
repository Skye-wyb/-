// // add(2)(3)(4)(5)

// function add (a) {
//     function s (b) {
//         a += b
//         return s
//     }
//     s.toString = function () {
//         return a
//     }
//     return s
// }

// console.log(add(1)(2)(3)(4));



function add (a) {
    let fn = function (b) {
        a = a + b;
        return fn;
    }

    fn.toString = function () {
        return a;
    }

    return fn;
}

add(1);      // 1
add(1)(2);   // 3
add(1)(2)(3) // 6
add(1)(2)(3)(4) // 10  