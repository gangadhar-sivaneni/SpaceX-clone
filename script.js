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
});
