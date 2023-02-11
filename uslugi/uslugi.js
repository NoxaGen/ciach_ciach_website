//include main.js

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