const button = document.getElementById('datecheckb');


button.addEventListener('click', function() {
    const today = new Date();
    alert(formatDate(today));
});

function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
  
    return `${day}.${month}.${year}`;
  }