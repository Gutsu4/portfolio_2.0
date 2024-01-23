$(document).ready(function() {
    var current = 0,
        slides = $('#project-slideshow .slide');

    slides.eq(current).fadeIn();

    setInterval(function() {
        slides.eq(current).fadeOut();
        current = (current < slides.length - 1) ? current + 1 : 0;
        slides.eq(current).fadeIn();
    }, 3000);
});
