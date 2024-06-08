const dropdown = document.getElementById('dropdown');
const optionsList = document.getElementById('options');




dropdown.addEventListener('click', function() {
  if (optionsList.style.display === 'none') {
    optionsList.style.display = 'block';
  } else {
    optionsList.style.display = 'none';
  }
});


document.addEventListener('click', function(event) {
  if (!event.target.matches('#dropdown') && !event.target.matches('#options li')) {
    optionsList.style.display = 'none';
  }
});