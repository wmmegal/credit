jQuery(document).ready(function($) {

    /**
     * Слайдер на главной
     */

    //slider
    $('#single-slider').slick({
        dots: false,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    arrows: false,
                }
            },
        ]
    });

    $('#slider-products-main').slick({
        dots: false,
        arrows: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        appendArrows: $('.slider-products-arrows')
    });

    // $('.arr-prev').on('click', function (e) {
    //     e.preventDefault();
    //     $('.single-slider').slick('slickPrev');
    // });
    // $('.arr-next').on('click', function (e) {
    //     e.preventDefault();
    //     $('.single-slider').slick('slickNext');
    // });



});
