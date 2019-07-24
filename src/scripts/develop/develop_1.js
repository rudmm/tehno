
$(document).ready(function(){
     $('.topsection-slider-slick').slick({
     	Infinity: true,
     	dots: true,
     	fade: true,
     	speed: 1000,
     	autoplay: true,
     	autoplaySpeed: 3000,
     	appendDots: $('.topsection-menu-block-dots'),
     });
     let slickPrev = $('.slick-prev');
     let slickNext = $('.slick-next');
     slickPrev.html('<svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-3.49691e-07 7L8.25 0.0717961L8.25 13.9282L-3.49691e-07 7Z" fill="white"/></svg>');
     slickNext.html('<svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 7L0.75 13.9282L0.750001 0.0717965L9 7Z" fill="white"/></svg>');
});

$(window).load(function(){
});

$(window).resize(function(){

});