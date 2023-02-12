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

// this event listener checks flags and adjust scroll position

window.addEventListener("load", function () {
    if (window.location.hash === "#opinions-id") {
        scrollAutoMobileOpinions();
    } else if (window.location.hash === "#services-id") {
        scrollAutoMobileServices();
    }
});

// all desktop buttons are plugged and working good

const mainBtn = document.getElementById('check-our-offer');
const aboutUsDesktop = document.querySelector('.about-us-desktop');
const servicesDesktop = document.querySelector('.services-desktop');


function scrollAutoDesktopServices() {
    window.scroll(0, services.offsetTop);
};

function scrollAutoDesktopOpinions() {
    window.scroll(0, opinions.offsetTop);
};

mainBtn.addEventListener('click', function () {
    scrollAutoDesktopServices();
});

servicesDesktop.addEventListener('click', function () {
    scrollAutoDesktopServices();
});

aboutUsDesktop.addEventListener('click', function () {
    scrollAutoDesktopOpinions();
});

// slider script 

const slider = document.querySelector('.slider');
const images = slider.querySelectorAll('img');
let currentIndex = 0;

// function that setting or removing class .active for every image
const setActiveImage = () => {
    images.forEach((image, index) => {
        image.classList.remove('active');
        if (index === currentIndex) {
            image.classList.add('active');
        }
    });
}

// function that tell us what next image will be active
const nextImage = () => {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    setActiveImage();
}

// interval, we can set speed of slider
setInterval(nextImage, 3000);