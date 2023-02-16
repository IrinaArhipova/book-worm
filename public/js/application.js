
const formReg = document.querySelector('#formReg');
const formLog = document.querySelector('#formLog');
const log = document.querySelector('#login');
const reg = document.getElementById('reg');
const navBar = document.getElementById('Nav');
const body = document.querySelector('body');

const logOut = document.getElementById('logOut');
const regBtn = document.getElementById('regBtn');
const logBtn = document.getElementById('logBtn');
const input = document.getElementById('input');


if (formReg) {
  formReg.addEventListener('submit', async (event) => {
    event.preventDefault();

    const { name, email, password } = event.target;
    const response = await fetch('/reg', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        password: password.value,
      }),
    });
    const data = await response.json();
    if (data === 'ok') {
      window.location.href = 'http://localhost:3000';

    } else {
      regBtn.insertAdjacentHTML('afterend', data);

    }
  });
}
if (formLog) {
  formLog.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { email, password } = event.target;

    const response = await fetch('/login', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.value, password: password.value }),
    });
    const data = await response.text();
    if (data === 'ok') {
      window.location.href = 'http://localhost:3000';
    } else {
      input.innerHTML = data;
    }

  });
}
