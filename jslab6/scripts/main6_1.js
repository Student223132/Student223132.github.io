
const selectElement = document.querySelector('select');

const currentOption = selectElement.options[selectElement.selectedIndex];
console.log('Выбранное значение:', currentOption.value);
console.log('Выбранный текст:', currentOption.text);


const newOption = document.createElement('option');
newOption.value = 'Classic';
newOption.text = 'Классика';


selectElement.add(newOption);


newOption.selected = true;