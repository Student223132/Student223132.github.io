
let color = '#ffce9e';
var cells = document.getElementsByTagName("td");
let counter = 0;

for (var i = 0; i < cells.length; i++) {
  if (i<=9){}
  else{
    if(i>89){

    }
    else{
        if (counter === 0){}
        else{
            if(counter === 9){
                color =colorchange(color);
            }
            else{
                cells[i].style.backgroundColor = color;
                color = colorchange(color);
            }
        }
        
    }
  }
  if (counter < 9){
    counter++;
  }
  else{
    counter = 0;
  }
}

function colorchange(clr){
    if (clr == '#d18b47')
        return '#ffce9e';
    else{
        return '#d18b47';
    }
}