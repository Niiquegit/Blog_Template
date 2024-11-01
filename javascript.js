const hamburger = document.querSelector('.hamburger');
const navLinks = document.querSelector('.nav-links');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

let currentSlide = 0;
const slides =
document.querySelectorAll('.slides image');
const totalSlides = slides.length;
slides.length;

document.querySelector('.next').addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;

slides[currentSlide].classList.add('active');
});

document.querySelector('.prev').addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;

slides[currentSlide].classList.add('active');
});
// Initialize the slider 
slides[currentSlide].classList
.add('active');
 
var backBtn = 
document.querySelector(".back-btn");
window,addEventListener("scroll", function() {
    if (this.pageYoffset > 100) {
        backBtn.classList.add("active");
    } else {
        backBtn.classList.remove("active");
    }
});
backBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})