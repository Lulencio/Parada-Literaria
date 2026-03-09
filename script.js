// ─── Scroll animaciones ───
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // ─── Donate option toggle ───
  document.querySelectorAll('.donate-option').forEach(opt => {
    opt.addEventListener('click', () => {
      document.querySelectorAll('.donate-option').forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
    });
  });

  // ─── Nav scroll effect ───
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
      nav.style.boxShadow = '0 2px 30px rgba(28, 20, 9, 0.12)';
    } else {
      nav.style.boxShadow = 'none';
    }
  });