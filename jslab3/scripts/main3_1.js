import {getDecimal} from "./jslab3.js";

const button = document.getElementById('readyb');
button.addEventListener('click', function() {
	let fnumber1 = + number1.value;
	alert(getDecimal(fnumber1));

});