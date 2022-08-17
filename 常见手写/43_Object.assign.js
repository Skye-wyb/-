Object.defineProperty(Object,'assign',{
	value:function(target,...args){
		if(!target){
			return new TypeError()
		}
		const to = Object(target)
		for(let i=0;i<args.length;i++){
			const source = args[i]
			if(source){
				for(const key in source){
					if(Object.hasOwnProperty.call(source,key)){
						to[key] = source[key]
					}
				}
			}
		}
		return to
	}
})
let target = {
	name:'网易',
	age:25
}
Object.assign(target,{x:1,y:2})
console.log(target);
