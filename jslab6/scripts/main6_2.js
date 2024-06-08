

let form = document.getElementById("form");
let field = form.getElementsByTagName('input')[0];
let label = form.getElementsByTagName('label')[0];

label.style.visibility = 'hidden';

field.setAttribute('placeholder', field.dataset.placeholder);
label.innerHTML = field.dataset.placeholder;

field.addEventListener('focus', () => {
    label.style.visibility = 'visible';
    field.setAttribute('placeholder', '');
});

field.addEventListener('blur', () => {
    label.style.visibility = 'hidden';
    field.setAttribute('placeholder', field.dataset.placeholder);

});