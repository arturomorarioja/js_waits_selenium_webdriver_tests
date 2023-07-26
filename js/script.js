'use strict';

document.getElementById('frmCreateButton').addEventListener('submit', (e) => {
    e.preventDefault();

    const newBtn = document.createElement('button');
    newBtn.id = 'btnOther';
    newBtn.innerText = 'Click me';
    newBtn.addEventListener('click', () => {
        alert('Hello there');
    });
    setTimeout(() => { document.body.appendChild(newBtn) }, 3000);
});