const hamburger = document.querySelector('.hamburger i');
const mobileMenu = document.querySelector('.mobile-menu')

hamburger.addEventListener('click', function () {
    mobileMenu.classList.toggle('active-mobile-menu');
    hamburger.classList.toggle('fa-bars');
    hamburger.classList.toggle('fa-times');
});