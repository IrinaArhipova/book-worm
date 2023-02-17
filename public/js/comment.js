const formComment = document.querySelector('#form_comment');
// const cardCom = document.querySelector('#card_com');
const table = document.getElementById('table');
if (formComment) {
  formComment?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { action, comment } = e.target;
    const { id } = e.target.dataset;
    const res = await fetch(action, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        bookId: id,
        comment: comment.value,
      }),
    });
    const { html } = await res.json();
    table.innerHTML = html;
  });
}
