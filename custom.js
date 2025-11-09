
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});

function toggleTheme() {
  const body = document.body;
  const currentTheme = body.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  body.setAttribute('data-theme', newTheme);
}

function downloadCV() {
  const cvURL = "kanishka.pdf";

  window.open(cvURL, "_blank");
}


// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Pause animations on hover
document.querySelectorAll('.marquee, .projects-slider').forEach(el => {
  el.addEventListener('mouseenter', () => {
    el.style.animationPlayState = 'paused';
  });
  el.addEventListener('mouseleave', () => {
    el.style.animationPlayState = 'running';
  });
});
// Mobile menu toggle
const mobileToggle = document.querySelector(".mobile-toggle");
const nav = document.querySelector("header nav");

mobileToggle.addEventListener("click", () => {
  nav.classList.toggle("show-nav");
});
var swiper = new Swiper(".projects-slider", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });