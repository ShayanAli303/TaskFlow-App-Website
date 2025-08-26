const reveals = document.querySelectorAll('.reveal')
function revealOnScroll() { for (let i = 0; i < reveals.length; i++) { const windowHeight = window.innerHeight; const elementTop = reveals[i].getBoundingClientRect().top; const elementVisible = 100; if (elementTop < windowHeight - elementVisible) { reveals[i].classList.add('active') } } }
window.addEventListener('scroll', revealOnScroll)

const themeToggle = document.getElementById('theme-toggle')
const body = document.body
if (localStorage.getItem('theme') === 'light') body.classList.add('light')
themeToggle.addEventListener('click', () => { body.classList.toggle('light'); localStorage.setItem('theme', body.classList.contains('light') ? 'light' : 'dark') })

const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')
hamburger.addEventListener('click', () => { navLinks.classList.toggle('active') })

document.querySelectorAll('.ripple').forEach(btn => { btn.addEventListener('click', function (e) { const circle = document.createElement('span'); const x = e.clientX - e.target.offsetLeft; const y = e.clientY - e.target.offsetTop; circle.style.left = x + 'px'; circle.style.top = y + 'px'; this.appendChild(circle); setTimeout(() => circle.remove(), 600) }) })

const counters = document.querySelectorAll('.counter')
let started = false
function countUp() { const stats = document.querySelector('.stats'); const rect = stats.getBoundingClientRect(); if (!started && rect.top < window.innerHeight) { counters.forEach(counter => { const target = +counter.getAttribute('data-target'); const increment = target / 200; let count = 0; const updateCounter = () => { count += increment; if (count < target) { counter.textContent = Math.floor(count); requestAnimationFrame(updateCounter) } else { counter.textContent = target } }; updateCounter() }); started = true } }
window.addEventListener('scroll', countUp)

function loadParticles(theme) { if (window.pJSDom && window.pJSDom.length) { window.pJSDom[0].pJS.fn.vendors.destroypJS(); window.pJSDom = [] } particlesJS("particles-js", { particles: { number: { value: 80, density: { enable: true, value_area: 800 } }, color: { value: theme === 'light' ? "#333333" : "#00f5ff" }, shape: { type: "circle" }, opacity: { value: .5, random: true }, size: { value: 3, random: true }, line_linked: { enable: true, distance: 150, color: theme === 'light' ? "#333333" : "#00f5ff", opacity: .4, width: 1 }, move: { enable: true, speed: 3 } }, interactivity: { detect_on: "canvas", events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" } }, modes: { repulse: { distance: 100, duration: .4 }, push: { particles_nb: 4 } } }, retina_detect: true }) }
loadParticles(body.classList.contains('light') ? 'light' : 'dark')
themeToggle.addEventListener('click', () => { loadParticles(body.classList.contains('light') ? 'light' : 'dark') })

lottie.loadAnimation({ container: document.getElementById('lottie-1'), renderer: 'svg', loop: true, autoplay: true, path: 'https://assets8.lottiefiles.com/packages/lf20_touohxv0.json' })
lottie.loadAnimation({ container: document.getElementById('lottie-2'), renderer: 'svg', loop: true, autoplay: true, path: 'https://assets8.lottiefiles.com/packages/lf20_jcikwtux.json' })
lottie.loadAnimation({ container: document.getElementById('lottie-3'), renderer: 'svg', loop: true, autoplay: true, path: 'https://assets8.lottiefiles.com/packages/lf20_w51pcehl.json' })
