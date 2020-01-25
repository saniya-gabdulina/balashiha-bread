$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
    
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    })
    
    var next = $('.swiper-button-next');
    var prev = $('.swiper-button-prev');
    var bulllets = $('.swiper-pagination');

    next.css('left', prev.width() + 10 + bulllets.width() +10)
    bulllets.css('left', prev.width() + 10)

});