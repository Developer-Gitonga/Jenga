startImageTransition();
function startImageTransition(){
    const images = document.getElementsByClassName("test");

    for (const i = 0; i < images.length; i++) {
        images[i].style.opacity = 1;
    }
}