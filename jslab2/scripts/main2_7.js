function rpressed(){
	
	let fnumber1 = + number1.value;
    switch(fnumber1){
        case 1: {
            let a = + prompt("Введите число");
            sum(a);
            break;
        }
        case 2: {
            let a = + prompt("Введите число");
            let b = + prompt("Введите число");
            sum(a, b);
            break;
        }
        case 3: {
            let a = + prompt("Введите число");
            let b = + prompt("Введите число");
            let c = + prompt("Введите число");
            sum(a, b, c);
            break;
        }
        case 4: {
            let a = + prompt("Введите число");
            let b = + prompt("Введите число");
            let c = + prompt("Введите число");
            let d = + prompt("Введите число");
            sum(a, b, c, d);
            break;
        }
        default:
            alert("Вы ввели неверное число");
            break;
        
    }
}

function sum(x, y, z, q){
    let summ = 0;
    for(let i = 0; i < 4; i++){
        if (arguments[i] != undefined){
            summ += arguments[i];
        }

    }

    alert(summ);

}

