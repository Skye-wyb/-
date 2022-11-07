function compose (fns) {
    return function (...args) {
        let index = 0
        let res = fns[index].apply(this, args)
        while (++index < fns.length) {
            res = fns[index].call(this, res)
        }
        return res
    }
}