$(document).ready(function() {

    // ***slider***

    let stop = false;
    var slider = $('.slider-bg');
    const list = [
        'slider1.jpg',
        'slider2.jpg',
        'slider3.jpg'
    ]
    
    var nav = $('.slider__contain-nav-item');

    function changeSlideNext(){  
        if(stop) return;
        stop = true;      
        slider.animate(
            { opacity: 0.01 }, 
            1000, 
            function() {                
                for(let i = 0; i < nav.length; i += 1) {
                    if (nav.eq(i).hasClass('active')) {
                        nav.eq(i).removeClass('active');
                        if(i != nav.length - 1) {
                            slider.css({
                                'background': 'url(img/' + list[i + 1] + ') no-repeat center top',
                                'background-size': 'cover'
                            });
                            nav.eq(i + 1).addClass('active');
                            break;
                        } else {
                            slider.css({
                                'background': 'url(img/' + list[0] + ') no-repeat center top',
                                'background-size': 'cover'
                            });
                            nav.eq(0).addClass('active');
                            break;
                        }
                    }
                }
            }        
        )
        slider.animate(
            { opacity: 1 },
            1000, 
            function() {
                stop = false;
            }
        )        
    }

    function changeSlidePrev(){
        if(stop) return;
        stop = true;        
        slider.animate(
            { opacity: 0.01 }, 
            1000, 
            function() {               
                for(var i = 0; i < nav.length; i += 1) {
                    if (nav.eq(i).hasClass('active')) {
                        nav.eq(i).removeClass('active');
                        if(i == 0 ) {
                            slider.css({
                                'background': 'url(img/' + list[2] + ') no-repeat center top',
                                'background-size': 'cover'
                            });
                            nav.eq(2).addClass('active');                            
                            return;
                        } else {
                            slider.css({
                                'background': 'url(img/' + list[i - 1] + ') no-repeat center top',
                                'background-size': 'cover'
                            });
                            nav.eq(i - 1).addClass('active');
                            return;
                        }
                    }
                }
            }        
        )
        slider.animate(
            { opacity: 1 },
            1000, 
            function() {
                stop = false;
            } 
        )        
    }

    $('.slider__nav-next').click(changeSlideNext);
    $('.slider__nav-prev').click(changeSlidePrev);

    setInterval(changeSlideNext, 10000);

    // ***mini slider***

    const width = 300;
    const timer = 500;
    const autoTimer = 6000;
    let stopMove = false;
   
    function nextSlide() {
        if(stopMove) return;
        stopMove = true;

        $('.mini-slider-item:first-child').clone()
            .appendTo('.mini-slider__container');
        $('.mini-slider__container').animate(
                { 'margin-left': -width + -35 }, 
                timer, 
                function() {
                $('.mini-slider__container').css('margin-left', 0);
                $('.mini-slider-item:first-child').remove();
                stopMove = false
            });
    };
    
    function prevSlide() {
        if(stopMove) return;
        stopMove = true;

        $('.mini-slider-item:last-child')
            .clone().prependTo('.mini-slider__container');
        $('.mini-slider__container').css('left', -width + -35);
        $('.mini-slider__container').animate(
                { 'margin-left': width + 35 }, 
                timer, 
                function() {           
                $('.mini-slider__container').css('margin-left', 0);
                $('.mini-slider__container').css('left', 0);
                $('.mini-slider-item:last-child').remove();
                stopMove = false
            });
    };

    $(".mini-slider__nav-prev")
        .click(nextSlide);
    $(".mini-slider__nav-next")
        .click(prevSlide);

    var interval = setInterval(nextSlide, autoTimer);

    // ***drop menu***

    $('.drop-menu').click(showDropMenu);
    $('.btn-closed').click(hidedDropMenu)

    function showDropMenu() {

        $('.drop-menu').css('display', 'none');
        $("body").addClass("fixed");

        $('.mobile-menu').animate(
            { 'width': '320px' },
            500,
            function() {
                $('.mobile-menu__items').css('display', 'block');
            }
        );
        
    }
    function hidedDropMenu() {
        $('.drop-menu').css('display', 'block');
        $("body").removeClass("fixed");

        $('.mobile-menu__items').css('display', 'none');

        $('.mobile-menu').animate(
            { 'width': '0px' },
            500
        );
    }

    // ***Scroll***

    var stopAnimate = true;

    window.addEventListener("resize", function() {
        if ($(window).height() < 340) {
            $('.header').animate(
                { 'height': '2.5rem'},
                300,
                function() {
                    stopAnimate = true;
                }
            )
            return;
        }
        if (window.pageYOffset >= 100 && stopAnimate) {                
            $('.header').animate(
                { 'height': '4.5rem'},
                300,
                function() {
                    stopAnimate = false;
                }
            )                
        }
        else if (window.pageYOffset == 0) {
            $('.header').animate(
                { 'height': '5rem'},
                300,
                function() {
                    stopAnimate = true;
                }
            )
        }
    }, false);

    $(window).scroll(

        function () {
            if ($(window).height() < 340) return;

            if (window.pageYOffset >= 100 && stopAnimate) {                
                $('.header').animate(
                    { 'height': '4.5rem'},
                    300,
                    function() {
                        stopAnimate = false;
                    }
                )                
            }
            else if (window.pageYOffset == 0) {
                $('.header').animate(
                    { 'height': '5rem'},
                    300,
                    function() {
                        stopAnimate = true;
                    }
                )
            }
        }
    );

    // ***Popup***

    $('.slider__contain-btn').click(showPopup);
    $('.popup__btn-closed').click(hidePopup);
    $('.popup__submit').click(function(){
        $('.popup').css('display', 'none');
        $("body").removeClass("fixed");
    });    

    function showPopup() {
        $('.popup').css('display', 'block');
        $("body").addClass("fixed");
    }
    function hidePopup() {
        $('.popup').css('display', 'none');
        $("body").removeClass("fixed");
    }
});