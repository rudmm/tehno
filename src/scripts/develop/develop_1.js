function topSectionSlider(){
	$('.topsection-slider-slick').slick({
     	Infinity: true,
     	dots: true,
     	fade: true,
     	autoplay: true,
     	autoplaySpeed: 3000,
     	speed: 1000,
     	appendDots: $('.topsection-menu-block-dots'),
     	prevArrow: '<button class="topsection-btnPrev"><svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-3.49691e-07 7L8.25 0.0717961L8.25 13.9282L-3.49691e-07 7Z" fill="#fff"/> </svg></button>',
     	nextArrow: '<button class="topsection-btnNext"><svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 7L0.75 13.9282L0.750001 0.0717965L9 7Z" fill="#fff"/></svg></button>'
     	 });

     let slickPrev = $('.slick-prev');
     let slickNext = $('.slick-next');
     slickPrev.html('');
     slickNext.html('');
}
function openCloseServicesWindow(){
	let wServices = $('.menu-services');
	let itemOpen = $('.menu-list-item-js-open');
	let close = $('.menu-services-content-close');
	itemOpen.click(function(e){
		e.preventDefault();
		itemOpen.addClass('menu-list-item-open ');
		wServices.fadeIn();
	});
	close.click(function(){
		itemOpen.removeClass('menu-list-item-open');
		wServices.fadeOut();
	});
}


$(document).ready(function(){
	topSectionSlider();
	openCloseServicesWindow();
});
$(window).load(function(){
});

$(window).resize(function(){

});