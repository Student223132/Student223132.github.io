import {truncate} from "./jslab3.js";

const button = document.getElementById('readyb');
button.addEventListener('click', function() {
	let fstring = String(text1.value);
    let fnumber = + number1.value
	alert(truncate(fstring, fnumber));

});