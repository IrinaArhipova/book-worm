const formComment = document.getElementById('form_comment');

console.log(formComment);

if (formComment) {
  formComment.addEventListener('submit', (e) => {
    e.preventDefault();
    const { action, method, comment } = e.target;
    console.log(action, method, comment.value);
  });
}
