// hamburger-menu

const hamburger = document.querySelector('.hamburger i');
const mobileMenu = document.querySelector('.mobile-menu')

hamburger.addEventListener('click', function () {
    mobileMenu.classList.toggle('active-mobile-menu');
    hamburger.classList.toggle('fa-bars');
    hamburger.classList.toggle('fa-times');
});

const aboutUsMobile = document.querySelector('.about-us-mobile');
const ourServicesMobile = document.querySelector('.services-mobile')
const opinions = document.querySelector('.opinions');
const services = document.querySelector('.full-list-services');
const navigationBar = document.querySelector('.nav-bar')

aboutUsMobile.addEventListener('click', function () {
    mobileMenu.classList.remove('active-mobile-menu');
    hamburger.classList.remove('fa-times');
    hamburger.classList.add('fa-bars');
    window.scroll(0, opinions.offsetTop - navigationBar.clientHeight);
});

ourServicesMobile.addEventListener('click', function () {
    mobileMenu.classList.remove('active-mobile-menu');
    hamburger.classList.remove('fa-times');
    hamburger.classList.add('fa-bars');
    window.scroll(0, services.offsetTop - navigationBar.clientHeight);
});