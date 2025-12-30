// main.js - улучшенная версия
document.addEventListener('DOMContentLoaded', function() {
  console.log("🚀 Nazia8Promo Premium loaded");
  
  // Анимация счетчиков
  function animateCounters() {
    const counters = document.querySelectorAll('.stat-number, .total-loss-amount, .result-value');
    counters.forEach(counter => {
      const target = parseInt(counter.textContent.replace(/[^0-9]/g, ''));
      const suffix = counter.textContent.replace(/[0-9]/g, '');
      const duration = 2000;
      const step = target / (duration / 16);
      
      let current = 0;
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        counter.textContent = Math.floor(current) + suffix;
      }, 16);
    });
  }
  
  // Плавный скролл
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
  
  // Анимация появления при скролле
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
  
  // Наблюдаем за элементами
  document.querySelectorAll('.problem-card, .pricing-card, .promo-card, .case-study, .step').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
  
  // Добавляем стили для анимации
  const style = document.createElement('style');
  style.textContent = `
    .animate-in {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
    
    .problem-card:nth-child(1) { transition-delay: 0.1s; }
    .problem-card:nth-child(2) { transition-delay: 0.2s; }
    .problem-card:nth-child(3) { transition-delay: 0.3s; }
    .problem-card:nth-child(4) { transition-delay: 0.4s; }
    
    .pricing-card:nth-child(1) { transition-delay: 0.2s; }
    .pricing-card:nth-child(2) { transition-delay: 0.4s; }
    .pricing-card:nth-child(3) { transition-delay: 0.6s; }
  `;
  document.head.appendChild(style);
  
  // Эффект параллакса
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if(hero) {
      hero.style.transform = `translateY(${scrolled * 0.05}px)`;
    }
    
    // Анимация графиков при скролле
    const bars = document.querySelectorAll('.bar-fill');
    bars.forEach(bar => {
      const rect = bar.getBoundingClientRect();
      if(rect.top < window.innerHeight * 0.8) {
        bar.style.width = bar.style.width;
      }
    });
  });
  
  // Интерактивность кнопок
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
  
  // Инициализация анимаций
  setTimeout(animateCounters, 1000);
  
  // Консольное приветствие
  console.log("%c🚀 NAZIA8PROMO %c\nГотовы к экспоненциальному росту? 👑", 
    "color: #2E8B57; font-size: 18px; font-weight: bold;", 
    "color: #FF6B35; font-size: 14px;");
  
  console.log("%c📈 Премиум решения для роста бизнеса\n💼 Системные продажи\n📱 Автоматизация процессов\n🎯 Гарантия результата", 
    "color: #1A3C34; font-size: 12px; background: #F8F9FA; padding: 10px; border-radius: 5px;");
});