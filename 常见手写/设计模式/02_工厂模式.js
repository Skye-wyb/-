// 工厂模式：有一个工厂对象决定创建出哪一种产品类的实例；
// 使用工厂模式后，不需要重复引入一个个构造函数，只需要引入工厂对象就可以方便的创建各类对象。

// 汽车构造函数
function SuzukiCar (color) {
	this.color = color
	this.brand = 'Suzuki'
}

function HondaCar (color) {
	this.color = color
	this.brand = 'Honda'
}

function BMWCar (color) {
	this.color = color
	this.brand = 'BMW'
}

const Brands = {
	suzuki: 1,
	honda: 2,
	bmw: 3
}

// 汽车工厂
function CarFactory () {
	this.create = (brand, color) => {
		switch (brand) {
			case Brands.suzuki:
				return new SuzukiCar(color)
			case Brands.honda:
				return new HondaCar(color)
			case Brands.bmw:
				return new BMWCar(color)
			default:
				break
		}
	}
}

// 使用工厂
const carFactory = new CarFactory()
const cars = []

cars.push(carFactory.create(Brands.suzuki, 'brown'))
cars.push(carFactory.create(Brands.honda, 'green'))
cars.push(carFactory.create(Brands.bmw, 'pink'))

function sayHello () {
	console.log(`Hello, I am a ${this.color}-${this.brand} car`);
}
for (const car of cars) {
	sayHello.call(car)
}