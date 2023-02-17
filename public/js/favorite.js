const button = document.querySelectorAll('.button');

button.forEach((but) => but.addEventListener('click', async (e) => {
  const { id } = e.target.dataset;
  const res = await fetch('/favorite', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
    }),
  });
}));
