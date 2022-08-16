let o = Object.create(Object.prototype,{
	name:{
		writable:true,
		configurable:true,
		enumerable:true,
		value:'网易'
	},
	sayHello:{
		configurable:false,
		get:function(){
			return 10
		},
		set:function(value){
			console.log('Setting "o.sayHello"',value);
		}
	}
})
console.log(o);
o.sayHello = 10