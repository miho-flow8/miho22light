'use strict';

/* ============================
   Scroll-driven Fade-in
============================ */
const fadeEls = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.08,
  rootMargin: '0px 0px -32px 0px'
});

fadeEls.forEach(el => observer.observe(el));

/* ============================
   Header: scroll shadow + active link
============================ */
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  header.classList.toggle('is-scrolled', window.scrollY > 48);
}, { passive: true });

/* ============================
   Mobile hamburger menu
============================ */
const hamburger = document.getElementById('hamburger');
const nav       = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('is-open');
  nav.classList.toggle('is-open', isOpen);
  hamburger.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

nav.querySelectorAll('.header__nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('is-open');
    nav.classList.remove('is-open');
    document.body.style.overflow = '';
  });
});

/* ============================
   FAQ Accordion
============================ */
document.querySelectorAll('.faq__q').forEach(btn => {
  btn.addEventListener('click', () => {
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';

    document.querySelectorAll('.faq__q').forEach(b => {
      b.setAttribute('aria-expanded', 'false');
      b.nextElementSibling.classList.remove('is-open');
    });

    if (!isExpanded) {
      btn.setAttribute('aria-expanded', 'true');
      btn.nextElementSibling.classList.add('is-open');
    }
  });
});

/* ============================
   Smooth scroll offset (fixed header)
============================ */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = header.offsetHeight + 16;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
