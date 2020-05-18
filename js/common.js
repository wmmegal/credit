jQuery(document).ready(function ($) {

    /**
     * Слайдер на главной
     */
    $('#single-slider').slick({
        dots: false,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    arrows: false,
                }
            },
        ]
    });

    /**
     * Слайдер продуктов на главной
     */
    $('#slider-products-main').slick({
        dots: false,
        arrows: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        appendArrows: $('.slider-products-arrows')
    });


    /**
     * Слайдер элементов
     */
    let sliderItems = $('.slider-items'),
        sliderItemsSettings = {
            dots: false,
            arrows: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: false,
            responsive: [
                {
                    breakpoint: 1300,
                    settings: {
                        arrows: false,
                        dots: true
                    }
                },
            ]
        }

    sliderItems.slick(sliderItemsSettings);

    /**
     * Табы
     */
    $('.tabs').on('click', 'li:not(.active)', function () {
        let $thisTab = $(this).addClass('active').siblings().removeClass('active').closest('.container').find('.tab-content').eq($(this).index());

        let sliderItems = $thisTab.find('.slider-items');

        $thisTab.fadeIn(150).siblings('.tab-content').hide();

        if (sliderItems.length) {
            sliderItems.slick('unslick');
            sliderItems.slick(sliderItemsSettings)
        }

    });

});
