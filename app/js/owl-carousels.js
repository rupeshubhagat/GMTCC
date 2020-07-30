$(document).ready(function() {
    $('#video-carousel').owlCarousel({
        loop: true,
        margin: 38,
        responsiveClass: true,
        autoWidth: true,
        // autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                margin: 10,
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 2,
                nav: false,
                loop: true
            }
        }
    })


});