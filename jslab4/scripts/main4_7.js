const button = document.getElementById('scheckb');


button.addEventListener('click', function() {
    alert(getSecondsToday());
});

function getSecondsToday() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const diffMs = now.getTime() - today.getTime();
    const diffSeconds = diffMs / 1000;
    return Math.floor(diffSeconds);
  }