startImageTransition();
function startImageTransition(){
    const images = document.getElementsByClassName("test");

    for (const i = 0; i < images.length; i++) {
        images[i].style.opacity = 1;
    }

    const top =1;
    const cur = images.length - 1;
    setInterval(changeImage, 3000);
}