(() => {
  const cards = document.querySelectorAll('.spotlight');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      card.style.setProperty('--mx', `${x}%`);
      card.style.setProperty('--my', `${y}%`);
    });
    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--mx', '50%');
      card.style.setProperty('--my', '50%');
    });
  });
})();
