let a = {
    index: 1,
    toString: function () {
        this.index *= 2
        return this.index / 2
    }
}

console.log(a == 1 && a == 2 && a == 4);