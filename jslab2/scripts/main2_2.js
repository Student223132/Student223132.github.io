function rpressed(){
	
	let fnumber1 = + number1.value;
	alert(sumto(fnumber1))
}

function sumto(n){
    let i = 1;
    console.log(i);
    let sum = 0;
	while(i<= n){
        sum += i;
        i++;
    }
    return sum;
}

