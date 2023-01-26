const slide1 = document.querySelector('[data-slider-index="1"]');
const slide2 = document.querySelector('[data-slider-index="2"]');
const slide3 = document.querySelector('[data-slider-index="3"]');
const slide4 = document.querySelector('[data-slider-index="4"]');

let sliderImagesArr = [slide1, slide2, slide3, slide4];
sliderImagesArr = (activeEl) => activeEl.classList.contain('active');