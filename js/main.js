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

    // $(window).scroll(function() {
    //     var el = $('.map');
    //     if ($(this).scrollTop() > el.offset().top - 800) {
    //         if(isAddedMap) return;
    //         isAddedMap = true;
    //         var script = document.createElement('script');
    //         script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A26d5c2c9463cb9ed50f2d10b3e1f730ca9172716f8b73a7059fb58551f8af047&amp;width=100%25&amp;height=563&amp;lang=ru_RU&amp;scroll=false"
    //         el.append(script);
    //     };
    // });

     // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.751574, 37.573856],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
            hintContent: 'Собственный значок метки с контентом',
            balloonContent: '<div class="pin"><img src="img/pin-img.jpg" alt="" srcset="" class="pin-img"><div class="pin__content"><span class="pin-title">Мы находимся:</span><span class="pin-text">г. Москва, ул. Неверовского, д. 9</span><span class="pin-text">Телефон: +7 (495) 444-44-44</span><span class="pin-text">E-mail: info@ied.ru</span></div></div>',
            iconContent: '12'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/pin.png',
            // Размеры метки.
            iconImageSize: [48, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
    

    myMap.geoObjects
        .add(myPlacemarkWithContent);
    myMap.behavior.disable('scrollZoom'); 
});

    function validateForm1(form) {
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
                
            },
            submitHandler: function (form) {
                $.ajax({
                    type: "POST",
                    url: "http://gabdulinasm.ru/balashiha-bread/send.php",
                    data: $(form).serialize(),
                    success: function (response) {
                        $('.modal-thanks').addClass('modal--visible');
                        $('#modal-form')[0].reset();
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

    validateForm1('#modal-form');

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
    
    validateForm('#hero__form');
    validateForm('#offer-form');

    // Маска для телефона
    $('[type=tel]').mask('+7(000) 00-00-000', { placeholder: "Ваш номер телефона:" });

    

});