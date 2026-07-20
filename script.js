document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  let lastScrollY = window.scrollY;
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 50 && currentScrollY > lastScrollY) {
      header.classList.add('header-hidden');
    } else {
      header.classList.remove('header-hidden');
    }
    lastScrollY = currentScrollY;
  });

  // Hamburger Menu Toggle
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileNav = document.getElementById('mobileNav');

  if (hamburgerBtn && mobileNav) {
    mobileNav.style.display = 'flex';

    hamburgerBtn.addEventListener('click', () => {
      hamburgerBtn.classList.toggle('active');
      mobileNav.classList.toggle('open');
    });

    // Close mobile nav when a link is clicked
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        mobileNav.classList.remove('open');
      });
    });
  }
});
