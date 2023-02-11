// mobile and tablets behaviour
// hamburger-menu

const hamburger = document.querySelector('.hamburger i');
const mobileMenu = document.querySelector('.mobile-menu')

hamburger.addEventListener('click', function () {
    mobileMenu.classList.toggle('active-mobile-menu');
    hamburger.classList.toggle('fa-bars');
    hamburger.classList.toggle('fa-times');
});

// reset hamburger then scroll to desired section

const aboutUsMobile = document.querySelector('.about-us-mobile');
const ourServicesMobile = document.querySelector('.services-mobile')
const opinions = document.querySelector('.opinions');
const services = document.querySelector('.full-list-services');
const navigationBar = document.querySelector('.nav-bar');

function scrollAutoMobileOpinions() {
    window.scroll(0, opinions.offsetTop - navigationBar.clientHeight);
};

function scrollAutoMobileServices() {
    window.scroll(0, services.offsetTop - navigationBar.clientHeight);
}

function mobileMenuBehaviour() {
    mobileMenu.classList.remove('active-mobile-menu');
    hamburger.classList.remove('fa-times');
    hamburger.classList.add('fa-bars');
}

aboutUsMobile.addEventListener('click', function () {
    mobileMenuBehaviour();
    scrollAutoMobileOpinions();
});

ourServicesMobile.addEventListener('click', function () {
    mobileMenuBehaviour();
    scrollAutoMobileServices();
});

// for subpages, make function to jump on the subpage + scroll on desired section

const aboutUsSubMobile = document.querySelector('.about-us-subpage-mobile');
const servicesSubMobile = document.querySelector('.services-subpage-mobile');



aboutUsSubMobile.addEventListener('click', function () {
    console.log('working');
    mobileMenuBehaviour();
    window.location.href = "../index.html";
    scrollAutoMobileServices();
});



// desktop scroll to desired section