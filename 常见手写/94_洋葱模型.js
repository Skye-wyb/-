// JS 实现洋葱模型
async function mid1 (next) {
    console.log(1);
    await next();
    console.log(4);
}

async function mid2 (next) {
    console.log(2);
    await next();
    console.log(5);
}

async function mid3 (next) {
    console.log(3);
    await next();
    console.log(6);
}
function compose (middleware) {
    return async function () {
        let args = arguments
        await dispatch(0);
        async function dispatch (i) {
            const fn = middleware[i]
            if (!fn) return null
            await fn(...args, async function next () {
                await dispatch(i + 1)
            })
        }
    }
}

const middleware = [mid1, mid2, mid3];
compose(middleware)();