AOS.init({ duration: 800, once: true });

const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');
const themeToggle = document.getElementById('themeToggle');
const scrollTop = document.getElementById('scrollTop');
const html = document.documentElement;

// Mobile nav toggle
menuBtn?.addEventListener('click', () => mobileNav.classList.toggle('hidden'));
mobileNav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileNav.classList.add('hidden')));

// Theme toggle
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  html.classList.add('dark');
}
themeToggle.addEventListener('click', () => {
  html.classList.toggle('dark');
  localStorage.theme = html.classList.contains('dark') ? 'dark' : 'light';
});

// Scroll to top button
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTop.classList.remove('hidden');
  } else {
    scrollTop.classList.add('hidden');
  }
});
scrollTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
