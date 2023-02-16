const formReg = document.querySelector('#formReg');
const formLog = document.querySelector('#formLog');
const input = document.getElementById('input');
// const log = document.querySelector('#login');
// const reg = document.getElementById('reg');
// const navBar = document.getElementById('Nav');
// const body = document.querySelector('body');
// const logOut = document.getElementById('logOut');
// const regBtn = document.getElementById('regBtn');
// const logBtn = document.getElementById('logBtn');
const body = document.querySelector('body');
const formAddBook = document.querySelector('#addBookForm');


if (formReg) {
  formReg.addEventListener('submit', async (event) => {
    event.preventDefault();
    const {
      name, email, password,
    } = event.target;
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

if (formAddBook) {
  formAddBook.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { action, method, nameBook, autor, comment, img } = event.target;
    const response = await fetch(action, {
      method: method.value,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nameBook: nameBook.value, autor: autor.value, comment: comment.value, img: img.value });
    })
    const { newBookHtml, newCommentHtml } = await response.JSON();
    body.append(newBookHtml) /*newCommentHtml - форма нового коммента возможно не нужна*/
  })
}
