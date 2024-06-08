const button = document.getElementById('calculateb');
const button1 = document.getElementById('cleanb');


button.addEventListener('click', function() {
    let fage = + age1.value;
    let gender = 'neutral';
    if (cm.checked){
        gender = "Male";
    }
    if (cf.checked){
        gender = "Female";
    }
    if (gender === "Not stated"){
        alert("Укажите пол");
    }
    if (fage > 0){
        if (fage <= 17){
            result1.innerHTML = 'Вам ещё работать рано, учитесь!';
        }
        else{
            if (gender === "Male"){
                if (fage <= 59){
                    result1.innerHTML = 'Вам ещё работать и работать!';
                }
                else{
                    if (fage <= 64){
                        result1.innerHTML = 'Скоро пенсия!';
                    }
                    else{
                        result1.innerHTML = 'Вам пора на пенсию!';
                    }
                }
            }
            if (gender === "Female"){
                if (fage <= 54){
                    result1.innerHTML = 'Вам ещё работать и работать!';
                }
                else{
                    if (fage <= 59){
                        result1.innerHTML = 'Скоро пенсия!';
                    }
                    else{
                        result1.innerHTML = 'Вам пора на пенсию!';
                    }
                }
            }
        }
        
    }
    else {
        result1.innerHTML = 'Введите возраст!';
    }
});

button1.addEventListener('click', function() {
    age1.value = '';
    cm.value = 'off';
    cf.value = 'off';
    result1.innerHTML ='Результат:'; 
});