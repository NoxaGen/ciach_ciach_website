//include main.js
//mobile

const aboutUsSubMobile = document.querySelector('.about-us-subpage-mobile');
const servicesSubMobile = document.querySelector('.services-subpage-mobile');

aboutUsSubMobile.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = '../index.html#opinions-id';
});

servicesSubMobile.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = '../index.html#services-id';
});

//desktop

const aboutUsSubDesktop = document.querySelector('.about-us-subpage-desktop');
const servicesSubDesktop = document.querySelector('.services-subpage-desktop');

aboutUsSubDesktop.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = '../index.html#opinions-id';
});

servicesSubDesktop.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = '../index.html#services-id';
});