let p1 = new Promise((resolve, reject) => {
    resolve('p1')
})

let p2 = new Promise((resolve, reject) => {
    reject('p2')
})

let p3 = new Promise((resolve, reject) => {
    resolve('p3')
})

Promise.all([p1, p2, p3].map(p => p.catch(e => '出错啦'))).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})