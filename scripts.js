document.querySelectorAll('.stat-number').forEach(el => {
  el.addEventListener('mouseenter', () => {
    el.style.transform = 'scale(1.08)';
  });
  el.addEventListener('mouseleave', () => {
    el.style.transform = 'scale(1)';
  });
});
