const request = createRequest({ max: 3 })
for (let i = 0; i < 10; i++) {
    request('/user').then(console.log)
}

function createRequest(option){
    return Promise.resolve()
}