const button = document.getElementById('createlstb');

const obj1 = {
  'Фрукты': {
    'Ананасы': null,
    'Яблоки': null,
    'Апельсины': null
  },
  'Овощи': {
    'Помидоры': null,
    'Огурцы': null,
    'Картофель': null
  }
};

button.addEventListener('click', function() {
  button.insertAdjacentHTML('afterend', createTree(obj1));
});

function createTree(obj) {
  // Base case: If the input is not an object, return an empty string
  if (typeof obj !== 'object' || obj === null) {
    return '';
  }

  // Start with an empty string to accumulate the HTML
  let html = '';

  // Loop through the keys of the object
  for (let key in obj) {
    // Open a new list item
    html += '<li>';

    // Add the key as text content
    html += key;

    // Check if the value is an object
    if (typeof obj[key] === 'object') {
      // If it's an object, create a nested unordered list
      html += '<ul>' + createTree(obj[key]) + '</ul>';
    }

    // Close the list item
    html += '</li>';
  }

  // Wrap the list items in an unordered list
  return '<ul>' + html + '</ul>';
}