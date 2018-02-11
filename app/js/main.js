$(document).ready(function() {
    $('.js-slider-top').slick({
        arrows: false,
        dots: true
    });
    $('.js-slider-testimonial').slick({
        dots: true,
        responsive: [
            {
                breakpoint: 1255,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    function heightEL(el) {
        var elH = el;
        var maxHeight = 0;
        for (var i = 0; i < elH.length; ++i) {
            elH[i].style.height = "";
            if (maxHeight < elH[i].clientHeight) {
                maxHeight = elH[i].clientHeight;
            }
        }
        for (var i = 0; i < elH.length; ++i) {
            elH[i].style.height = maxHeight + "px";
        }
    }
    if ($(window).width() >= 767) {
        heightEL($('.features .feature-item'));
    }
    $('.js_validate [type="submit"]').on("click", function () {
        return validate($(this).parents(".js_validate"));
    });
    $('.js-mobile-menu').on('click', function () {
       $(this).toggleClass('active');
       $(this).parents('header').find('.main-menu').slideToggle();
    });
});