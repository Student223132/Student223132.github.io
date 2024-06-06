import {normalizeUrl} from "./jslab3.js";

const button = document.getElementById('readyb');
button.addEventListener('click', function() {
	let fstring = String(number1.value);
	alert(normalizeUrl(fstring));

});