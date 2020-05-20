jQuery(document).ready(function ($) {

    /**
     * Меню
     */

    let menuA = $('#nav a');
    menuA.each(function () {
        if ($(this).next('ul').length) {
            $(this).append(' <i class="icon-arr"></i>')
        }
    });

    $(document).on('click', '#nav a', function (e) {
        let $this = $(this);
        let thisParent = $this.closest('li'),
            ul = thisParent.find('> ul');
        if (ul.length > 0) {
            e.preventDefault();

            if (thisParent.hasClass('active')) {
                thisParent.removeClass('active')
            } else {
                thisParent.addClass('active').siblings().removeClass('active');
            }

            // if ($(window).width() < 1200) {
            //     if (!ul.find('.btn-menu-back').length) {
            //         ul.prepend('<li><button class="btn-menu-back"><i class="icon-arr"></i>' + $this.text() + '</button></li>');
            //     }
            // }
        }
    });

    $(document).on('click', function (e) {
        hideElement($(e.target), '#nav', $('#nav li'));
    });

    $(document).on('click', '.btn-menu-back', function (e) {
        $(this).closest('ul').closest('li').removeClass('active');
    });

    $('.btn-menu').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active').next().slideToggle();
        $('#header').toggleClass('show-menu');
    });

    /**
     * Поиск
     */
    let quickSearch = $('#quick-search');
    $('.btn-show-search').on('click', function (e) {
        quickSearch.addClass('active').find('input').focus();
    });

    quickSearch.find('input').on('blur', function (e) {
        let $this = $(this);

        setTimeout(function () {
            quickSearch.removeClass('active');
            $this.closest('form').find('.search-results').removeClass('active');
        }, 1)
    });

    quickSearch.find('input').on('focus', function (e) {
        $(this).closest('form').find('.search-results').addClass('active');
    });


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
        appendArrows: $('.slider-products-arrows'),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 1,
                }
            },
        ]
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
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
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


    /**
     * Селект
     */
    $('select').styler();

    /**
     * Дроп списки
     */
    $(document).on('click', '.btn-drop-toggle', function () {
        $(this).toggleClass('active');
        $(this).closest('div').siblings().find('.drop-list');
        $(this).closest('div').find('.drop-list').toggleClass('active');
    });

    $(document).on('click input', function (event) {
        if (check_drop_list($(event.target))) return;
        $('.drop-list').removeClass('active');
        $('.btn-drop-toggle').removeClass('active');
        event.stopPropagation();
    });

    function check_drop_list(el) {
        return el.hasClass("btn-drop-toggle") || el.closest('.btn-drop-toggle').length || el.is('input') || el.closest('.drop-list').length;
    }

    /**
     * Аккордион
     */
    $('.question').on('click', function () {
        let thisParent = $(this).closest('.faq'),
            otherParents = thisParent.siblings();
        otherParents.find('.question').removeClass('active').next('.answer').slideUp();
        thisParent.find('.question').toggleClass('active').next('.answer').slideToggle();
    });

    /**
     * Ползунок в инпутах
     */
    $('.input-slider').each(function () {
        let $this = $(this),
            $input = $this.closest('.with-slider').find('input'),
            min = $this.data('min'),
            max = $this.data('max'),
            value = $this.data('value'),
            $join = $this.data('join');

        $this.slider({
            range: 'min',
            animate: "fast",
            min, max, value,
            slide: function (event, ui) {
                $input.val(ui.value + ' ' + $join);
            }
        });

        $input.val($this.slider('value') + ' ' + $join);

    })
});

/**
 * Спрятать элемент по клику из вне
 */
function hideElement(el, parent, elHide) {
    if (!el.closest(parent).length) {
        elHide.removeClass('active');
    }
}
