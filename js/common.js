jQuery(document).ready(function($) {

    //slider
    $('.single-slider').slick({
        dots: false,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.arr-prev').on('click', function (e) {
        e.preventDefault();
        $('.single-slider').slick('slickPrev');
    });
    $('.arr-next').on('click', function (e) {
        e.preventDefault();
        $('.single-slider').slick('slickNext');
    });

    var slider = $('#slider-1');
    slider.slick({
        dots: false,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    slider.find('.arr-prev-2').on('click', function (e) {
        e.preventDefault();
        slider.slick('slickPrev');
    });
    slider.find('.arr-next-2').on('click', function (e) {
        e.preventDefault();
        slider.slick('slickNext');
    });


    //select
    $('select').styler();

    //tabs
    var slider2 = $('#slider-2');
    $('#tabs').on('click', 'li:not(.active)', function() {
        $(this).addClass('active').siblings().removeClass('active').parents().find('.box').eq($(this).index()).fadeIn(150).siblings('.box').hide();

        slider2.slick({
            dots: false,
            arrows: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    });

    slider2.find('.arr-prev-2').on('click', function (e) {
        e.preventDefault();
        slider2.slick('slickPrev');
    });
    slider2.find('.arr-next-2').on('click', function (e) {
        e.preventDefault();
        slider2.slick('slickNext');
    });

    var body = $('body');
    $('.our-works').on('click', '.btn-all', function (e) {
        e.preventDefault();
        $(this).parents().find('.other-items').slideToggle();
        if ($(this).text() != 'Скрыть') {
            $(this).text('Скрыть');
        } else {
            $(this).text('Смотреть все проекты');
        }
    });

    slider.on('afterChange', function(event, slick, currentSlide, nextSlide){
        $(this).next().find('a').siblings().removeClass('active').eq(currentSlide).addClass('active');
    });

    slider2.on('afterChange', function(event, slick, currentSlide, nextSlide){
        $(this).next().find('a').siblings().removeClass('active').eq(currentSlide).addClass('active');
    });

    $('.other-items').on('click', 'a', function (e) {
        e.preventDefault();
        var href = $(this).attr('href');
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $(href).slick('slickGoTo', $(this).index());
    });

    var slider3 = $('.slider-fotos');
    slider3.slick({
        dots: false,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    slider3.parent().find('.arr-prev').on('click', function (e) {
        e.preventDefault();
        slider3.slick('slickPrev');
    });
    slider3.parent().find('.arr-next').on('click', function (e) {
        e.preventDefault();
        slider3.slick('slickNext');
    });

    //fancy
    slider.find('a').fancybox();
    slider2.find('a').fancybox();
    $('[rel=foto]').fancybox();

    /* how work window */
    $('.how-work .item').on('click',function (e) {
        $(this).siblings().find('.item-window').fadeOut();
        $(this).find('.item-window').fadeToggle();
    });

    $('.how-work .btn-close').on('click',function (e) {
        e.preventDefault();
        $(this).parent().find('.item-window').fadeOut();
    });

    //file
    $('.btn-file').on('click', function (e) {
       e.preventDefault();
       $(this).parent().find(':file').click();
    });

    $('.file :file').change(function () {
        $('#file').val($(this).val());
    });

    //window
    $('.btn-window').on('click', function(event) {
        event.preventDefault();
        var href = $(this).attr('href');
        $(href).fadeIn().css('display', 'flex');
    });

    body.on('click', function(event) {
        if ($(event.target).closest('.window-inner').length==0 &&
            !$(event.target).hasClass('btn-window')) {
            $('.window').fadeOut();
        }
    });

    $('.btn-close').on('click', function(event) {
        event.preventDefault();
        $('.window').fadeOut();
    });

    //slider
    var square_slider = $( "#slider-square" );
    var square = $( "#from" );
    square.keyup(function () {
        if (square.val() > 0 && square.val() < 401) {
            square_slider.slider('value', square.val());
            summ();
        }
    });

    square_slider.slider({
        range: 'min',
        min: 0,
        max: 400,
        value: 0,
        step: 1,
        animate: true,
        slide: function( event, ui ) {
            square.val(ui.value);
            summ();
        }
    });

    square.val(square_slider.slider('value'));

    //menu
    body.on('click', ' .btn-nav', function (e) {
        e.preventDefault();
        $('.nav').slideToggle();
    });

    var f1 = $('#f-1');
    var f2 = $('#f-2');
    f1.on('click', function () {
        f2.attr('checked', false);
    });
    f2.on('click', function () {
        f1.attr('checked', false);
    });

    $(':checkbox').on('click', function () {
        summ();
    });

});

var floor1 = [16000, 17000, 15000, 18000, 15000];
var floor1_mix = [14500, 15500, 13500, 16500, 13500];
var floor2 = [15500, 16500, 14500, 17500, 14500];
var floor2_mix = [15000, 16000, 14000, 17000, 14000];
var reset = [0, 0, 0, 0, 0];

function summ () {
    var summ = 0;
    $(':checkbox').each(function () {
        if ($(this).is(':checked')) {
            summ += parseInt($(this).val());
        }
    });
    if (summ == 1 ) {
        calc (floor1);
    } else if (summ == 2 ) {
        calc (floor2);
    }
    else if (summ == 4 ) {
        calc (floor1_mix);
    }
    else if (summ == 5 ) {
        calc (floor2_mix);
    }
    else if (summ == 3 || summ == 0 ) {
        $('#f-3').attr('checked', false);
        calc (reset);
    }
}

function calc (arr) {
    var count = arr.length;
    var squere = parseInt($('#from').val());
    for (var i = 0; i < count; i++) {
        $('#t-' + i).text(arr[i] * squere);
    }
}

