const formReg = document.querySelector('#formReg');
const formLog = document.querySelector('#formLog');
const input = document.getElementById('input');

if (formReg) {
  formReg.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { name, email, password } = event.target;
    const response = await fetch('/auth/reg', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        password: password.value,
      }),
    });
    const data = await response.json();
    console.log(data);
    if (data.message === 'ok') {
      window.location.href = '/';
    } else {
      input.innerHTML = data.message;
    }
  });
}

if (formLog) {
  formLog.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { email, password } = event.target;

    const response = await fetch('/auth/login', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.value, password: password.value }),
    });
    const data = await response.json();
    if (data.message === 'ok') {
      window.location.href = '/';
    } else {
      input.innerHTML = data.message;
    }
  });
}