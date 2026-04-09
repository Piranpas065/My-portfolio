// Navbar scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu
const toggle = document.querySelector('.mobile-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
if (toggle) {
  toggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    toggle.textContent = mobileMenu.classList.contains('open') ? '✕' : '☰';
  });
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      toggle.textContent = '☰';
    });
  });
}

// Typing effect
const texts = [
  "Building scalable products with code & AI",
  "Full-stack engineer crafting modern web apps",
  "Turning ideas into performant software"
];
let textIdx = 0, charIdx = 0, isDeleting = false;
const typingEl = document.getElementById('typing-text');

function typeEffect() {
  const current = texts[textIdx];
  if (!isDeleting) {
    typingEl.textContent = current.substring(0, charIdx + 1);
    charIdx++;
    if (charIdx === current.length) {
      setTimeout(() => { isDeleting = true; typeEffect(); }, 2000);
      return;
    }
  } else {
    typingEl.textContent = current.substring(0, charIdx - 1);
    charIdx--;
    if (charIdx === 0) {
      isDeleting = false;
      textIdx = (textIdx + 1) % texts.length;
    }
  }
  setTimeout(typeEffect, isDeleting ? 40 : 60);
}
typeEffect();

// Image slideshow
document.querySelectorAll('.slideshow').forEach(show => {
  const imgs = show.querySelectorAll('img');
  const dots = show.querySelectorAll('.slide-dot');
  let current = 0;
  setInterval(() => {
    imgs[current].classList.remove('active-slide');
    imgs[current].classList.add('hidden-slide');
    dots[current]?.classList.remove('active');
    current = (current + 1) % imgs.length;
    imgs[current].classList.remove('hidden-slide');
    imgs[current].classList.add('active-slide');
    dots[current]?.classList.add('active');
  }, 2500);
});

// Active nav highlight
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (s.getBoundingClientRect().top < 200) current = s.id;
  });
  navItems.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});
