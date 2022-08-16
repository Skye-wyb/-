class PlayBoy{
	constructor(name){
		this.name = name
		this.stack = []
	}
	sayHi(){
		console.log(`hello, my name is ${this.name}`);
		return this
	}
	sleep(time){
		setTimeout(()=>{
			this.stack.shift()()
		},time)
		return this
	}
	play(game){
		const fn = ()=>{
			console.log(`我在玩${game}`);
		}
		this.stack.push(fn)
		return this
	}
}

const boy = new PlayBoy('tom')
boy.sayHi().sleep(1000).play('王者').sleep(2000).play('跳一跳')