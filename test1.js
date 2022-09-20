function getNum(password) {
    var securityLevelFlag = 0;
    if (/[a-z]/.test(password)){
        securityLevelFlag++;    
    }
    if (/[A-Z]/.test(password)){
        securityLevelFlag++;   
    } 
    if(/[0-9]/.test(password)){
        securityLevelFlag++; 
    }
    if(getSpecial(password)){
        securityLevelFlag++;    
    }
    return securityLevelFlag;
}
function getSpecial(str)   
{   
    var containSpecial = RegExp(/\W|\_/);
    return (containSpecial.test(str));   
}

var getPwdRank = function(str){
	if(str.length<8){
		return 0
	}else{
		if(getNum(str)===1){
			return 0
		}else if(getNum(str)===2 && ((!getSpecial(str) && !/[A-Z]/.test(str)) || (!getSpecial(str) && !/[a-z]/.test(str)))){
			return 1
		}else if(getNum(str)===2 && !((!getSpecial(str) && !/[A-Z]/.test(str)) && (!getSpecial(str) && !/[a-z]/.test(str)))){
			return 2
		}else if(getNum(str)>=3){
			return 3
		}
	}
}
console.log(getPwdRank('hello'));
console.log(getPwdRank('hello89757'));
console.log(getPwdRank('HelloWorld'));
console.log(getPwdRank('Hello89757+'));