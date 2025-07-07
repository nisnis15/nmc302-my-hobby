document.addEventListener("DOMContentLoaded", function () {
  function initCarouselWhenReady() {
    const slides = document.querySelectorAll('.carousel-slide');
    if (slides.length === 0) {
      // Retry after short delay
      return setTimeout(initCarouselWhenReady, 100);
    }

    let currentIndex = 0;
    let interval = null;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.classList.add('fade-in');
          slide.style.display = 'block';
          slide.style.pointerEvents = 'auto';
          void slide.offsetWidth;
          slide.classList.add('active');
        } else {
          slide.classList.remove('active', 'fade-in');
          slide.style.display = 'none';
          slide.style.pointerEvents = 'none';
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
    const carouselContainer = document.getElementById('carousel');
    if (carouselContainer) {
      carouselContainer.addEventListener('mouseenter', pauseCarousel);
      carouselContainer.addEventListener('mouseleave', startCarousel);
    }

    setTimeout(() => {
      const pauseElements = document.querySelectorAll('.anime-thumb img, .carousel-slide a');
      pauseElements.forEach((el) => {
        el.addEventListener('mouseenter', pauseCarousel);
        el.addEventListener('mouseleave', startCarousel);
      });
    }, 100);

    // Arrows
    const leftArrow = document.getElementById('arrow-left');
    const rightArrow = document.getElementById('arrow-right');
    if (leftArrow && rightArrow) {
      leftArrow.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
      });
      rightArrow.addEventListener('click', nextSlide);
    }
  }

  initCarouselWhenReady();
});
