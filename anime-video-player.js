document.addEventListener("DOMContentLoaded", function () {
  const videoWrapper = document.getElementById('anime-video-wrapper');
  const video = document.getElementById('anime-video');
  const overlay = document.getElementById('anime-video-overlay');
  const closeBtn = document.getElementById('close-anime-video');
  const thumbnails = document.querySelectorAll('.small-thumb');
  const navContainer = document.getElementById('container');

  // Play video when thumbnail clicked
  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const videoSrc = thumb.getAttribute('data-video');
      if (!videoSrc) return;

      video.src = videoSrc;
      video.load();

      overlay.classList.add('show');
      videoWrapper.classList.add('show');
      navContainer.classList.add('darkened');
      video.play();
    });
  });

  // Close button handler
  closeBtn.addEventListener('click', closeVideo);

  // Auto-close when video ends
  video.addEventListener('ended', closeVideo);

  function closeVideo() {
    video.pause();
    videoWrapper.classList.remove('show');
    overlay.classList.remove('show');
    navContainer.classList.remove('darkened');

    setTimeout(() => {
      video.src = '';
    }, 500);
  }
});
