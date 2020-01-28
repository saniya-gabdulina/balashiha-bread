$(document).ready(function () {
    $('.fancybox').fancybox();
    
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
    function validateForm(form) {
        $(form).validate({
            errorClass: "invalid",
            rules: {
                // simple rule, converted to {required:true}
                userName: {
                    required: true,
                    minlength: 2,
                    maxlength: 10
                },
                userPhone: {
                    required: true,
                    minlength: 17,
                    maxlength: 17
                }
            },
            errorElement: "span",
            messages: {
                userName: {
                    required: "Имя обязательно",
                    minlength: "Имя не короче 2 букв",
                    maxlength: "Имя не длиннее 10 букв"
                },
                userPhone: "Телефон обязателен"
                }
            },
            submitHandler: function (form) {
                $.ajax({
                    type: "POST",
                    url: "http://gabdulinasm.ru/balashiha-bread/send.php",
                    data: $(form).serialize(),
                    success: function (response) {
                        $('.modal-thanks').addClass('modal--visible');
                        $(form)[0].reset();
                        $.fancybox.close();
                        setTimeout(function () {
                            $('.modal-thanks').removeClass('modal--visible');
                        }, 2000); //убирает окно благодарности через 2000мс (2 секунды) 
                    },
                    error: function (response) {
                        $('.modal-error').addClass('modal--visible');
                        $.fancybox.close();
                        setTimeout(function () {
                            $('.modal-error').removeClass('modal--visible');
                        }, 3000); //убирает окно благодарности через 2000мс (2 секунды) 
                    }
                });
            }
        });
    }
    validateForm('.modal__form');

    function validateForm(form) {
        $(form).validate({
            errorClass: "invalid",
            rules: {
                // simple rule, converted to {required:true}
                userName: {
                    required: true,
                    minlength: 2,
                    maxlength: 10
                },
                userPhone: {
                    required: true,
                    minlength: 17,
                    maxlength: 17
                },
                // compound rule
                userEmail: {
                    required: true,
                    email: true
                }
            },
            errorElement: "span",
            messages: {
                userName: {
                    required: "Имя обязательно",
                    minlength: "Имя не короче 2 букв",
                    maxlength: "Имя не длиннее 10 букв"
                },
                userPhone: "Телефон обязателен",
                userEmail: {
                    required: "Обязательно укажите email",
                    email: "Введите в формате name@domain.com"
                }
            },
            submitHandler: function (form) {
                $.ajax({
                    type: "POST",
                    url: "http://gabdulinasm.ru/balashiha-bread/send.php",
                    data: $(form).serialize(),
                    success: function (response) {
                        $('.modal-thanks').addClass('modal--visible');
                        $(form)[0].reset();
                        $.fancybox.close();
                        setTimeout(function () {
                            $('.modal-thanks').removeClass('modal--visible');
                        }, 2000); //убирает окно благодарности через 2000мс (2 секунды) 
                    },
                    error: function (response) {
                        $('.modal-error').addClass('modal--visible');
                        $.fancybox.close();
                        setTimeout(function () {
                            $('.modal-error').removeClass('modal--visible');
                        }, 3000); //убирает окно благодарности через 2000мс (2 секунды) 
                    }
                });
            }
        });
    }
    
    validateForm('.hero__form');
    validateForm('.offer-form');

    // Маска для телефона
    $('[type=tel]').mask('+7(000) 00-00-000', { placeholder: "Ваш номер телефона:" });


});