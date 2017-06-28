$(document).ready(function(){
    var addToInitialOffset = 10;

    $('a.js-scroll-anchor').on('click', function(e) {
        e.preventDefault();
        if ($(window).width() < 1080) {
            addToInitialOffset = 60;
        }
        var anchor = $(this).attr('href');
        $('html, body').animate({ scrollTop: $(anchor).offset().top - addToInitialOffset }, 300);
    });
});