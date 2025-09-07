// AOS
AOS.init({ duration: 800, once: true });

// Efek Ketik di Hero
var typed = new Typed("#typed", {
  strings: [
    "Seorang Web Developer.",
    "Seorang Graphic Designer.",
    "Seorang UI/UX Enthusiast."
  ],
  typeSpeed: 60,
  backSpeed: 40,
  backDelay: 1500,
  loop: true
});

// Element
const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');
const themeToggle = document.getElementById('themeToggle');
const scrollTop = document.getElementById('scrollTop');
const html = document.documentElement;

// Mobile nav toggle
menuBtn?.addEventListener('click', () => mobileNav.classList.toggle('hidden'));
mobileNav?.querySelectorAll('a').forEach(a => 
  a.addEventListener('click', () => mobileNav.classList.add('hidden'))
);

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

// Daftar Project
const projects = [
  {
    title: "Website Sekolah",
    url: "https://ponpesalbisyri.netlify.app/",
    code: "https://github.com/FiiekGatarieekV1/DemoPondok"
  },
  {
    title: "On - Going Website",
    url: "https://demo-link.com",
    code: "https://github.com/username/project2"
  },
  {
    title: "Portfolio Website",
    url: "https://myfiie.netlify.app/",
    code: "https://github.com/FiiekGatarieekV1/myportfolio"
  }
];

// Generate Project Cards
const projectGrid = document.getElementById("projectGrid");
projects.forEach(proj => {
  const card = document.createElement("div");
  card.className = "project-card relative group rounded-xl overflow-hidden shadow hover:shadow-xl bg-white dark:bg-slate-900";

  card.innerHTML = `
    <img src="https://image.thum.io/get/width/800/crop/600/${proj.url}" 
         alt="${proj.title}" 
         class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110">
    <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center gap-3 text-white text-center">
      <h4 class="text-lg font-semibold">${proj.title}</h4>
      <div class="flex gap-3">
        <a href="${proj.url}" target="_blank" class="btn-custom px-3 py-1 bg-primary-600 rounded-lg text-sm hover:bg-primary-700">Demo</a>
        <a href="${proj.code}" target="_blank" class="btn-custom px-3 py-1 border border-white rounded-lg text-sm hover:bg-white hover:text-primary-700">Code</a>
      </div>
    </div>
  `;

  projectGrid.appendChild(card);
});
