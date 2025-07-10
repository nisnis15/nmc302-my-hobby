document.addEventListener("DOMContentLoaded", () => {
  const videos = [
    "vid/meme1.mp4",
    "vid/meme2.mp4",
    "vid/meme3.mp4",
    "vid/meme4.mp4",
    "vid/meme5.mp4",
    "vid/meme6.mp4"
  ];

  function triggerChaos() {
    const video = videos[Math.floor(Math.random() * videos.length)];
    const videoEl = document.getElementById("meme-video");
    const blocker = document.getElementById("overlay-blocker");

    if (!videoEl || !blocker) {
      console.error("Missing meme-video or overlay-blocker element");
      return;
    }

    blocker.style.display = "block";
    document.body.classList.add("freeze-all");
    document.body.style.overflow = "hidden";

    if (typeof swiper !== "undefined") {
      swiper.autoplay?.stop?.();
    }

    videoEl.src = video;
    videoEl.style.display = "block";
    videoEl.play();

    document.body.classList.add("shake");
    setTimeout(() => {
      document.body.classList.remove("shake");
    }, 3000);

    videoEl.onended = () => {
      videoEl.style.display = "none";
      videoEl.src = "";
      blocker.style.display = "none";
      document.body.classList.remove("freeze-all");
      document.body.style.overflow = "";

      if (typeof swiper !== "undefined") {
        swiper.autoplay?.start?.();
      }
    };
  }

  const memeBtn = document.getElementById("meme-button");
  if (memeBtn) {
    memeBtn.addEventListener("click", triggerChaos);
  } else {
    console.error("meme-button not found");
  }
});
