function topSectionSlider(){
	$('.topsection-slider-slick').slick({
     	Infinity: true,
     	dots: true,
     	fade: true,
     	autoplay: true,
     	autoplaySpeed: 3000,
     	speed: 1000,
     	appendDots: $('.topsection-menu-block-dots'),
     	prevArrow: $('.slPrev'),
     	nextArrow: $('.slNxt')
     	 });
}
function openCloseServicesWindow(){
	let menu = $('.menu');
	menu.click(function(e){
		e.preventDefault();
		let el = $(e.target);
		let parent = el.parent();
		let menuList = $('.menu-list-item');
		let wServices;
		let parentIndex;
		if(parent.is('li')){
			parentIndex = menuList.index(parent); 
			wServices = $(`.menu${parentIndex}-services`);
			if(wServices.length){
	            wServices.fadeIn();	
		        parent.addClass('menu-list-item-open');
		        let close = $(`.menu${parentIndex}-services-content-close`);
		        close.click(function(){
		        	wServices.fadeOut();
		        	parent.removeClass('menu-list-item-open');
		        });
			}
		}
	});
}

function sectionServicesSlider(){
	$('.sectionservices-slider').slick({
		slidesToShow: 4,
		dots: true,
		appendDots: $('.sectionservices-dots'),
		prevArrow: $('.services-prev'),
		nextArrow: $('.services-next'),
		autoplay: true,
		autoplaySpeed: 3000,
		swipe: false

	});
}
function sectionClientSlider(){
	$('.slider-client').slick({
		slidesToShow:1,
		variableWidth: true, 
		dots: true,
		appendDots: $('.client-dots'),
		prevArrow: $('.client-prev'),
		nextArrow: $('.client-next'),
		swipe: false,
		autoplay: true,
		autoplaySpeed: 3000

	});
}

$(document).ready(function(){
	topSectionSlider();
	openCloseServicesWindow();
	sectionServicesSlider();
	sectionClientSlider();
});
$(window).load(function(){
});

$(window).resize(function(){

});