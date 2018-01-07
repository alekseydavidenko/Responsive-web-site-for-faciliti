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
            () => {                
                for(let i = 0; i < nav.length; i += 1) {
                    if (nav.eq(i).hasClass('active')) {
                        nav.eq(i).removeClass('active');
                        if(i != nav.length - 1) {
                            slider.css('background', `url('img/${list[i + 1]}')`)
                            nav.eq(i + 1).addClass('active');
                            break;
                        } else {
                            slider.css('background', `url('img/${list[0]}')`)
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
            () => stop = false
        )        
    }

    function changeSlidePrev(){
        if(stop) return;
        stop = true;        
        slider.animate(
            { opacity: 0.01 }, 
            1000, 
            () => {               
                for(var i = 0; i < nav.length; i += 1) {
                    if (nav.eq(i).hasClass('active')) {
                        nav.eq(i).removeClass('active');
                        if(i == 0 ) {
                            slider.css('background', `url('img/${list[2]}')`)
                            nav.eq(2).addClass('active');                            
                            return;
                        } else {
                            slider.css('background', `url('img/${list[i - 1]}')`)
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
            () => stop = false
        )        
    }

    $('.slider__nav-next').click(changeSlideNext);
    $('.slider__nav-prev').click(changeSlidePrev);

    setInterval(changeSlideNext, 10000);

    // ***mini slider***

    const width = 300;
    const timer = 1500;
    const autoTimer = 3000;
    let stopMove = false;
   
    function nextSlide() {
        if(stopMove) return;
        stopMove = true;

        $('.mini-slider-item:first-child')
            .clone()
            .appendTo('.mini-slider__container');
        $('.mini-slider__container')
            .animate({
                'margin-left': -width + -35
            }, timer, function(){
                $('.mini-slider__container')
                    .css('margin-left', 0);
                $('.mini-slider-item:first-child')
                    .remove();
                stopMove = false
            });
    };
    
    function prevSlide() {
        if(stopMove) return;
        stopMove = true;

        $('.mini-slider-item:last-child')
            .clone()
                .prependTo('.mini-slider__container');
        $('.mini-slider__container')
            .css('left', -width + -35);
        $('.mini-slider__container')
            .animate({
                'margin-left': width + 35
            }, timer, function(){           
                $('.mini-slider__container')
                    .css('margin-left', 0);
                $('.mini-slider__container')
                    .css('left', 0);
                $('.mini-slider-item:last-child')
                    .remove();
                stopMove = false
            });
    };

    $(".mini-slider__nav-prev")
        .click(nextSlide);
    $(".mini-slider__nav-next")
        .click(prevSlide);

    var interval = setInterval(nextSlide, autoTimer);
});