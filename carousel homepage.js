// JavaScript Document
document.addEventListener("DOMContentLoaded", function () {
const slides = document.querySelectorAll('.carousel-slide');
let currentIndex = 0;
let interval = null;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('fade-in');
      slide.style.display = 'block';
      slide.style.pointerEvents = 'auto'; // Enable interaction

      // Force reflow
      void slide.offsetWidth;

      slide.classList.add('active');
    } else {
      slide.classList.remove('active', 'fade-in');
      slide.style.display = 'none';
      slide.style.pointerEvents = 'none'; // Disable interaction
    }
  });
}


function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function startCarousel() {
  if (interval === null) {
    interval = setInterval(nextSlide, 5000);
  }
}

function pauseCarousel() {
  if (interval !== null) {
    clearInterval(interval);
    interval = null;
  }
}


// Initialize
showSlide(currentIndex);
startCarousel();

// Pause on hover
document.getElementById('carousel').addEventListener('mouseenter', pauseCarousel);
document.getElementById('carousel').addEventListener('mouseleave', startCarousel);

// Pause/resume when hovering over any anime image or title

setTimeout(() => {
  const pauseElements = document.querySelectorAll('.anime-thumb img, .carousel-slide a');

  pauseElements.forEach((el) => {
    el.addEventListener('mouseenter', pauseCarousel);
    el.addEventListener('mouseleave', startCarousel);
  });
}, 100);



// Arrows
document.getElementById('arrow-left').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

document.getElementById('arrow-right').addEventListener('click', () => {
  nextSlide();
});
	});
