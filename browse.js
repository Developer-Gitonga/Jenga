startImageTransition();
function startImageTransition() {
  const images = document.getElementsByClassName("test");

  for (const i = 0; i < images.length; i++) {
    images[i].style.opacity = 1;
  }

  const top = 1;

  const cur = images.length - 1;

  setInterval(changeImage, 3000);

  async function changeImage() {
    const nextImage = (1 + cur) % images.length;

    images[cur].style.zIndex = top + 1;
    images[nextImage].style.zIndex = top;

    await transition();

    images[cur].style.zIndex = top;

    images[nextImage].style.zIndex = top + 1;

    top = top + 1;

    images[cur].style.opacity = 1;

    cur = nextImage;
  }
}
