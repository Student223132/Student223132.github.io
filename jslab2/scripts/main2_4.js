function rpressed(){
	
	let fnumber1 = + number1.value;
	alert(factorial(fnumber1))
}

function factorial(n){
    let result = BigInt(0)
    if (n === 1){
        result = 1;
        return result;
    }
    else{
         result = n * factorial(n - 1)
        return result;
    }
}

