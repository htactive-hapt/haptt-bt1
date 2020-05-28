var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    // var slides = document.getElementsByClassName("mySlides");
    var images = document.getElementsByClassName("image");
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > images.length) {
        slideIndex = 1;
    }

    images[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000);
}