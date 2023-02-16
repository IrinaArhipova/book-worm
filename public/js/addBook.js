const body = document.querySelector('body');
const formAddBook = document.querySelector('#addBookForm');

if (formAddBook) {
  formAddBook.addEventListener('submit', async (event) => {
    event.preventDefault();
    const {
      action, method, nameBook, autor, comment, img,
    } = event.target;
    const response = await fetch(action, {
      method: method.value,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nameBook: nameBook.value, autor: autor.value, comment: comment.value, img: img.value,
      }),
    });
    const { newBookHtml, newCommentHtml } = await response.JSON();
    body.append(newBookHtml); /* newCommentHtml - форма нового коммента возможно не нужна */
  });
}
