function rpressed(){
	
	let fnumber1 = + number1.value;
	alert(fibonacci(fnumber1))
}

function fibonacci(n){
    let result = BigInt(0)
    let prev1 = BigInt(1);
    let prev2 = BigInt(0);
    if (n === 0){
        result = BigInt(0);
    }
    else{
        if (n === 1){
            result = BigInt(1);
        }
        else{
            for (let i = 2; i<=n;i++){
                result = prev1+prev2;
                prev2 = prev1;
                prev1 = result;
            }
        }
    }
    alert(typeof(result));
    return result;
}