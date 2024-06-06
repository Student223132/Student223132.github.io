import {fibs} from "./jslab3.js";

const button = document.getElementById('readyb');
button.addEventListener('click', function() {
	let fnumber = + number1.value;
	alert(fibs(fnumber));

});