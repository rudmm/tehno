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
		//autoplay: true,
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
let  animateSectionNumber = function(){
	let scroll = $(window).scrollTop();
	let block = $('.sectionnumber-bottom .sectionnumber-block');
	let blockTop = $('.sectionnumber-top');
	let blockBottom = $('.sectionnumber-bottom');
	let positionBottom= block.offset().top+block.height();
	if(scroll+$(window).height()>positionBottom && scroll<positionBottom){
		blockTop.addClass('animate');
		blockBottom.addClass('animate');
	}else{
		blockTop.removeClass('animate');
		blockBottom.removeClass('animate');
	}
}

function sliderList(){
	let list = $('.sectionservices-slider-slide-text ul');
	for(let i =0;i<list.length;i++){
		let listItem = list.eq(i).find('li');
		if(listItem.length>4){
			for(let j =3;j<listItem.length;j++){
				listItem.eq(j).css('display', 'none');
			}
			list.eq(i).append(`<li class="list-btn" data-id=${i}>Cмотреть весь список</li>`);
		}
	}	
}

function showListSlider(){
	let listBtn = $('.list-btn');
	let list = $('.sectionservices-slider-slide-text ul');
	for(let i=0;i<listBtn.length;i++){
		listBtn.eq(i).click(function(){
			let id = $(this).attr("data-id");
			let listItem = list.eq(id).find('li');
			for(let j =3;j<listItem.length;j++){
				listItem.eq(j).css('display', 'block');
			}
		});
	}
}

$(document).ready(function(){
	topSectionSlider();
	openCloseServicesWindow();
	sectionServicesSlider();
	sectionClientSlider();
	$(window).scroll(animateSectionNumber);
	sliderList();
	showListSlider();
});
$(window).load(function(){
});

$(window).resize(function(){

});