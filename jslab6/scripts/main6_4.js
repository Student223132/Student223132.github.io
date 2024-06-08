document.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById('editable-table');
    let currentEditCell = null;

    table.addEventListener('click', (e) => {
        const td = e.target.closest('td');
        if (!td || currentEditCell) return;

        currentEditCell = td;
        const originalContent = td.innerHTML;
        td.classList.add('editing');

        const textarea = document.createElement('textarea');
        textarea.value = originalContent;
        td.innerHTML = '';
        td.appendChild(textarea);

        const buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('buttons');

        const okButton = document.createElement('button');
        okButton.textContent = 'Ок';
        okButton.onclick = () => {
            td.innerHTML = textarea.value;
            td.classList.remove('editing');
            currentEditCell = null;
        };

        const cancelButton = document.createElement('button');
        cancelButton.textContent = 'Отмена';
        cancelButton.onclick = () => {
            td.innerHTML = originalContent;
            td.classList.remove('editing');
            currentEditCell = null;
        };

        buttonsDiv.appendChild(okButton);
        buttonsDiv.appendChild(cancelButton);
        td.appendChild(buttonsDiv);

        textarea.focus();
    });
});