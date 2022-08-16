// let num:number = 10

// for(let i:number=0;i<10;i++){
//     console.log('我是：',i);
    
// }

// let nums:(number|string)[]=[1,2,3,4,5,'ko']
// console.log(nums);

// let arr:string[] = new Array()
// arr[0] = 'wyb'
// console.log(arr);

// function fn(age:number,name:string):boolean{
//     if(age<24 && name=='wyb'){
//         return true
//     }
//     return false
// }
// console.log(fn(23,'wyb'));
// function fn(num:number){
//     return num
// }

// let num:number = fn(100)
// console.log(num);

// 全局变量
// let num:number = 27
// function fn():number{
//     // 局部变量
//     let num:number = 85
//     console.log(num);
    
//     return -1
// }
// fn()
// console.log(num);


// 对象
// let person:{name:string,age:number,hobby:string[]}={
//     name:'wyb',
//     age:24,
//     hobby:['滑板','街舞']
// }

// console.log(person);

// 对象类型别名
// type Person = {
//     name:string,
//     age:number,
//     hobby:string[]
// }
// let person:Person={
//     name:'wyb',
//     age:24,
//     hobby:['滑板','街舞']
// }

// console.log(person);


// 接口
interface IUser {
    name:string,
    age:number
}

let p1:IUser = {
    name:'wyb',
    age:24
}
console.log(p1);
