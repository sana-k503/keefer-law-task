const hamburger = document.getElementById('hamburger-menu');
const navList = document.getElementById('nav-list');

hamburger.addEventListener('click', () => {
  navList.classList.toggle('active');
  // Removed the background color changes!
});