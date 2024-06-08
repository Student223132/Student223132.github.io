var buttons = document.getElementsByClassName('remove-button');
var text = document.querySelectorAll('div > p');
var text1 = [];
let flag = []


for (let i = 0; i<buttons.length;i++){
    flag[i] = true;
    buttons[i].addEventListener('click', function() {
        if(flag[i]){
            text1[i] = String(text[i].innerHTML);
            text[i].innerHTML = ''
            flag[i] = false;
        }
        else{
            text[i].innerHTML = text1[i];
            flag[i] = true;
        }
        
        
      });
}
