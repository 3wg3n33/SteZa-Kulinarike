// Basic interactivity: nav toggle, year, simple form validation
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  navToggle?.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    mainNav.style.display = expanded ? 'none' : 'block';
  });

  // Insert current year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Simple form validation + feedback
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      const name = form.querySelector('#name');
      const email = form.querySelector('#email');
      const message = form.querySelector('#message');
      let ok = true;
      [name,email,message].forEach(el => {
        if (!el.value.trim()) {
          ok = false;
          el.style.outline = '2px solid #f5a3a3';
        } else {
          el.style.outline = '';
        }
      });
      if (!ok) {
        e.preventDefault();
        alert('Prosim izpolnite vsa obvezna polja.');
      }
    });
  }
});
