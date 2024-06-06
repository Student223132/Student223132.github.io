import {arrReverseSorted} from "./jslab3.js";

const button = document.getElementById('readyb');
button.addEventListener('click', function() {
	let fnumber = + number1.value;
    let arr = []
    for(let i = 0; i<fnumber; i++ ){
        arr.push(getRandomInt(100));
    }
    alert(arr);
	alert(arrReverseSorted(arr));

});


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }