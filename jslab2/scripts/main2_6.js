function rpressed(){
	
	let fnumber1 = + number1.value;
    let fnumber2 = + number2.value;
	alert(compare(fnumber1)(fnumber2));
}

function compare(n){
    const anon = (y) =>     {if (y > n){
        return true;
    }
    else{
        if (y < n){
            return false;
        }
        else{
            return null;
        }
    }};
    return anon;
}
