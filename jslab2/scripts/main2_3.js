function rpressed(){
	
	let fnumber1 = + number1.value;
	alert(isleap(fnumber1))
}

function isleap(n){
    let leap = false;
    if ((n % 4 === 0) & (n % 100 != 0)){
        leap  = true;
    }
    if (leap){
        return 'високосный';
    }  
    else{
        return 'не високосный';
    }
}

