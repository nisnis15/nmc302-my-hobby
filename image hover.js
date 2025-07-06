document.querySelectorAll('.carousel-slide').forEach(slide => {
  const mainImage = slide.querySelector('.main-preview-image img');
  const thumbs = slide.querySelectorAll('.preview-thumb');
  const originalSrc = mainImage.src;

  thumbs.forEach((thumb) => {
    thumb.addEventListener('mouseenter', () => {
      const bigSrc = thumb.getAttribute('data-src');

      if (mainImage.src !== bigSrc) {
        mainImage.classList.add('fade-out');

        // Wait for fade-out before changing image
        setTimeout(() => {
          mainImage.src = bigSrc;
          mainImage.classList.remove('fade-out');
          mainImage.classList.add('fade-in');

          // Remove fade-in class after transition to avoid buildup
          setTimeout(() => {
            mainImage.classList.remove('fade-in');
          }, 400);
        }, 200);
      }
    });

    thumb.addEventListener('mouseleave', () => {
      mainImage.classList.add('fade-out');

      setTimeout(() => {
        mainImage.src = originalSrc;
        mainImage.classList.remove('fade-out');
        mainImage.classList.add('fade-in');

        setTimeout(() => {
          mainImage.classList.remove('fade-in');
        }, 400);
      }, 200);
    });
  });
});
