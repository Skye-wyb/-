let plus = function (...args) {
    if (args.length === 0) {
        console.log(0);
        return
    }
    let ans = args[0]
    return function fn (...args1) {
        if (args1.length == 0) {
            console.log(ans);
            return
        } else {
            ans += args1[0]
            return fn
        }
    }
}