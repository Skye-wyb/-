let p = new Promise((resolve, reject) => {
    // resolve('成功')
    reject('失败')
}).then(res => {
    console.log(res);
}, err => {
    console.log(err);
    return new Promise((resolve, reject) => { })
}).catch(err => {
    console.log(err);
}).finally(ans => {
    console.log('结束啦');
})