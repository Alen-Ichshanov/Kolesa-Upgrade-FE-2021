import '../css/style.css';

document.querySelector('#app').innerHTML = `
  <h1>Hello, Ален Ищанов!</h1>
`;
const modal = document.getElementById('modal-window');
const btn = document.getElementById('button-modal');
const span = document.getElementsByClassName('close')[0];

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
