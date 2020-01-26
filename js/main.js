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


    var isAddedMap = false;

    $(window).scroll(function() {
        var el = $('.map');
        if ($(this).scrollTop() > el.offset().top - 800) {
            if(isAddedMap) return;
            isAddedMap = true;
            var script = document.createElement('script');
            script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A3640a6472e0817484e41c82f3bab31623c39b2a8835bc6ba7b8029c7367f5a4f&amp;width=100%25&amp;height=100%&amp;lang=ru_RU&amp;scroll=false";
            el.append(script);
        };
    });

    
});