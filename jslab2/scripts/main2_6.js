function rpressed(){
	
	let fnumber1 = + number1.value;
	compare(fnumber1)
}

function compare(n){
    anon(n)
}

function anon(x){
    let y = prompt("Введите второе число для сравнения")
    if (y > x){
        alert(true)
    }
    else{
        if (y < x){
            alert(false)
        }
        else{
            alert(null)
        }
    }
    
}