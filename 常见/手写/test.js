const sum = (...args){
    const add = (...args1)=>{
        args = [...args,...args1]
        return add
    }
    add.valueOf = ()=> args.reduce((pre,cur)=>pre+cur,0)
    return add
}