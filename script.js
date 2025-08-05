// Smooth scrolling for in-page navigation
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href');
    if (targetId.length > 1) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Basic form handler placeholder
const form = document.getElementById('contactForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you for registering! We will contact you soon.');
  form.reset();
});
