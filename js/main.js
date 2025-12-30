document.addEventListener('DOMContentLoaded', () => {
  console.log("🚀 Nazia8Promo Premium loaded");

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ===== Counters (RAF вместо setInterval) ===== */
  function animateCounters() {
    if (reduceMotion) return;

    document.querySelectorAll('.stat-number, .total-loss-amount, .result-value')
      .forEach(el => {
        const raw = el.textContent;
        const target = parseInt(raw.replace(/\D/g, ''), 10);
        const suffix = raw.replace(/[0-9]/g, '');
        let start = null;

        function tick(ts) {
          if (!start) start = ts;
          const progress = Math.min((ts - start) / 1800, 1);
          el.textContent = Math.floor(progress * target) + suffix;
          if (progress < 1) requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick);
      });
  }

  /* ===== Smooth scroll ===== */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const id = link.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* ===== Reveal on scroll ===== */
  if (!reduceMotion && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add('animate-in'));
    }, { threshold: 0.12 });

    document
      .querySelectorAll('.problem-card, .pricing-card, .promo-card, .case-study, .step')
      .forEach(el => io.observe(el));
  }

  /* ===== Logo theme switch ===== */
  document.querySelectorAll('.adaptive-logo').forEach(logo => {
    const dark = logo.dataset.dark;
    const light = logo.dataset.light;
    const isDark = logo.closest('.hero, footer, .dark');
    logo.src = isDark ? dark : light;
  });

  /* ===== Init ===== */
  setTimeout(animateCounters, 600);

  console.log("%cNAZIA8PROMO — системный рост",
    "color:#2E8B57;font-weight:700;font-size:14px");
});
