document.addEventListener('DOMContentLoaded', () => {
    const div = document.getElementById('editable-div');
    let textarea = null;
    let originalContent = '';

    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'e' && !textarea) {
            e.preventDefault();
            originalContent = div.innerHTML;
            textarea = document.createElement('textarea');
            textarea.value = div.innerHTML;
            div.parentNode.replaceChild(textarea, div);
            textarea.focus();
        } else if (e.ctrlKey && e.key === 's' && textarea) {
            e.preventDefault();
            div.innerHTML = textarea.value;
            textarea.parentNode.replaceChild(div, textarea);
            textarea = null;
        } else if (e.key === 'Escape' && textarea) {
            e.preventDefault();
            div.innerHTML = originalContent;
            textarea.parentNode.replaceChild(div, textarea);
            textarea = null;
        }
    });
});