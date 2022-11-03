var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("tag");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "block";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    // var rand = Math.floor((Math.random() * slides.length));
    slides.style.display = "block";
    setTimeout(showSlides, 5000);
}