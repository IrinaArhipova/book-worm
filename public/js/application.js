// const regBtn = document.getElementById('regBtn');
const formReg = document.querySelector('#formReg');
const formLog = document.querySelector('#formLog');
const log = document.querySelector('#login');
const reg = document.getElementById('reg');
const navBar = document.getElementById('Nav');
const body = document.querySelector('body');

if (formReg) {
  formReg.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    console.log(email.value, password.value);
    const response = await fetch('/reg', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.value, password: password.value }),
    });
    const data = await response.json();
    if (data === 'ok') {
      window.location.href = 'http://localhost:3000';
    }
  });
}
if (formLog) {
  formLog.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    console.log(email.value, password.value);
    const response = await fetch('/login', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.value, password: password.value }),
    });
    const data = await response.text();
    body.innerHTML = data;
  });
}
