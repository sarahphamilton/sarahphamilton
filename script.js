const cards = document.querySelectorAll('.metric-card');
const detailBox = document.querySelector('.detail-box');

cards.forEach((card) => {
  card.addEventListener('click', () => {
    cards.forEach((item) => item.removeAttribute('aria-pressed'));
    card.setAttribute('aria-pressed', 'true');
    detailBox.textContent = card.dataset.detail;
  });
});
