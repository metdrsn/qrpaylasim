const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
const year = document.getElementById('year');
const contactForm = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

menuBtn?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

year.textContent = new Date().getFullYear();

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  formMsg.textContent = 'Mesajın alındı. En kısa sürede sana dönüş yapılacak!';
  contactForm.reset();
});
