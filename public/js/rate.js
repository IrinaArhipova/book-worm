const rateBtn = document.getElementById('rateBtn');
const rateForm = document.querySelector('#rateForm');
const select = document.querySelectorAll('#select');
const div = document.querySelector('.rating');
if (select) {
  select.forEach((el) =>
    el.addEventListener('change', async (event) => {
      event.preventDefault();
      const { value } = event.target;
      const { id } = event.target.dataset;
      const response = await fetch(`/rate/${id}/${value}`);
      const data = await response.json();
      document.getElementById(`div${id}`).innerHTML = data;
    })
  );
}
