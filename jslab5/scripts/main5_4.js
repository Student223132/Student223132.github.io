const button = document.getElementById('hider');
var text = document.getElementById('text');
var text1 = '';
let flag = true
button.addEventListener('click', function() {
    if(flag){
        text1 = String(text.innerHTML);
        text.innerHTML = ''
        button.defaultValue = 'Показать текст'
        flag = false;
    }
    else{
        text.innerHTML = text1;
        button.defaultValue = 'Спрятать текст'
        flag = true;
    }
    
    
  });