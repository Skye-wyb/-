Array.prototype.unique = function () {    
	let obj = {};    
	return this.filter(function (item, index, arr) {        
		return obj.hasOwnProperty(typeof item + JSON.stringify(item)) ? false : (obj[typeof item + JSON.stringify(item)] = true);    
	});
}

// let arr = [[1,2,3],[1,'2',3],'meili',[1,2,3]]
let arr = [{a:1},{a:{b:{c:1}}},[1,2,3],[1,2,3],'meili',123,'123',{a:{b:{c:1}}},{a:{b:{c:'1'}}}]
let ans = arr.unique()
console.log(ans);