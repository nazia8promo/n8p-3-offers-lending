// Навороченные эффекты для Nazia8Promo
document.addEventListener('DOMContentLoaded', function() {
  console.log("🚀 Nazia8Promo Premium loaded");
  
  // Плавный скролл для ссылок
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if(targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if(targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Анимация появления элементов при скролле
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);
  
  // Наблюдаем за карточками и секциями
  document.querySelectorAll('.card, .section h2, ul li').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    
    observer.observe(el);
  });
  
  // Добавляем класс для анимации
  const style = document.createElement('style');
  style.textContent = `
    .animate-in {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
    
    .card:nth-child(1) { transition-delay: 0.1s; }
    .card:nth-child(2) { transition-delay: 0.2s; }
    .card:nth-child(3) { transition-delay: 0.3s; }
  `;
  document.head.appendChild(style);
  
  // Эффект параллакса для hero секции
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if(hero) {
      hero.style.transform = `translateY(${scrolled * 0.05}px)`;
    }
  });
  
  // Интерактивность для кнопок
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('mousedown', function() {
      this.style.transform = 'scale(0.95)';
    });
    
    button.addEventListener('mouseup', function() {
      this.style.transform = '';
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = '';
    });
  });
  
  // Консольное приветствие
  console.log("%c🚀 NAZIA8PROMO %c\nГотовы к росту продаж? 👑", 
    "color: #2E8B57; font-size: 18px; font-weight: bold;", 
    "color: #FF6B35; font-size: 14px;");
});