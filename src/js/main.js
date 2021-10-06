// import '../css/style.css';
import '../css/style.scss';

const modal = document.querySelector('#modal-window');
const btn = document.querySelector('#button-modal');
const span = document.querySelector('.modal__close');

btn.onclick = function () {
    modal.style.display = 'block';
};

span.onclick = function () {
    modal.style.display = 'none';
};

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
