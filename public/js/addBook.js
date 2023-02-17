const formAddBook = document.querySelector('#addBookForm');
const noBooksPhrase = document.querySelector('#noBookesAdded');
const allBooks = document.querySelector('#allBooks')

if (formAddBook) {
  formAddBook.addEventListener('submit', async (event) => {
    event.preventDefault();
    const {
      action, method, nameBook, autor, comment, img,
    } = event.target;
    const response = await fetch(action, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nameBook: nameBook.value, autor: autor.value, comment: comment.value, img: img.value,
      }),
    });
    const { html } = await response.json();
    if (noBooksPhrase) {
      noBooksPhrase.remove();
    }
    formAddBook.insertAdjacentHTML('afterend', html);
  });
}
