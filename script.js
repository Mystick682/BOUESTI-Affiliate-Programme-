// Mobile drawer toggle
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileDrawer = document.getElementById('mobileDrawer');

hamburgerBtn.addEventListener('click', () => {
  mobileDrawer.classList.toggle('open');
  hamburgerBtn.classList.toggle('active');
});

// Close mobile drawer when a link is clicked
mobileDrawer.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileDrawer.classList.remove('open'));
});

// Scroll-to-top button
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
});
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Services row horizontal scroll via next button
const servicesScroll = document.querySelector('.services-scroll');
const servicesNext = document.getElementById('servicesNext');
if (servicesNext) {
  servicesNext.addEventListener('click', () => {
    servicesScroll.scrollBy({ left: 240, behavior: 'smooth' });
  });
}

// Testimonials carousel via prev/next buttons
const testiScroll = document.getElementById('testiScroll');
const testiPrev = document.getElementById('testiPrev');
const testiNext = document.getElementById('testiNext');
if (testiNext) {
  testiNext.addEventListener('click', () => {
    testiScroll.scrollBy({ left: 260, behavior: 'smooth' });
  });
}
if (testiPrev) {
  testiPrev.addEventListener('click', () => {
    testiScroll.scrollBy({ left: -260, behavior: 'smooth' });
  });
}