function showPrompt(html, callback) {
    const modalOverlay = document.getElementById('modal-overlay');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');

    modalContent.innerHTML = `
        <form class="modal-form">
            <div>${html}</div>
            <input type="text" id="prompt-input">
            <div class="buttons">
                <button type="button" id="cancel-btn">Отмена</button>
                <button type="submit" id="ok-btn">Ок</button>
            </div>
        </form>
    `;

    const form = modalContent.querySelector('.modal-form');
    const input = document.getElementById('prompt-input');
    const cancelBtn = document.getElementById('cancel-btn');
    const okBtn = document.getElementById('ok-btn');

    const closeModal = (value) => {
        modalOverlay.classList.add('hidden');
        modal.classList.add('hidden');
        callback(value);
    };

    form.onsubmit = (e) => {
        e.preventDefault();
        closeModal(input.value);
    };

    cancelBtn.onclick = () => closeModal(null);

    document.onkeydown = (e) => {
        if (e.key === 'Escape') {
            closeModal(null);
        }
    };

    modalOverlay.classList.remove('hidden');
    modal.classList.remove('hidden');
    input.focus();

  
    const focusableElements = modal.querySelectorAll('input, button');
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    modal.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                }
            } else {
                if (document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
        }
    });
}


function testShowPrompt() {
    showPrompt("Введите своё имя", (value) => {
        if (value === null) {
            alert("Вы закрыли поле ввода.");
        } else {
            alert(`Здравствуйте, ${value}!`);
        }
    });
}