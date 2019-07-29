function topSectionSlider() {
  $('.top-slider-slick').slick({
    Infinity: true,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    appendDots: $('.top-menu-dots'),
    prevArrow: $('.slide-prev'),
    nextArrow: $('.slide-next')
  });
}

function openCloseServicesWindow() {
  let menu = $('.menu');
  menu.click(function(e) {
    e.preventDefault();
    let el = $(e.target);
    let parent = el.parents('.menu-list-item');
    let menuList = $('.menu-list-item');
    let wServices;
    let parentIndex;
      parentIndex = menuList.index(parent);
      wServices = $(`.menu${parentIndex}-services`);
      if (wServices.length) {
        wServices.fadeIn();
        parent.addClass('menu-list-item-open');
        let close = $(`.menu${parentIndex}-content-close`);
        close.click(function() {
          wServices.fadeOut();
          parent.removeClass('menu-list-item-open');
        });
      }
  });
}

function sectionServicesSlider() {
  $('.services-slider').slick({
    slidesToShow: 4,
    dots: true,
    appendDots: $('.services-dots'),
    prevArrow: $('.services-prev'),
    nextArrow: $('.services-next'),
    //autoplay: true,
    autoplaySpeed: 3000,
    swipe: false

  });
  sliderList();
}

function sectionClientSlider() {
  $('.slider-client').slick({
    slidesToShow: 1,
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
let animateSectionNumber = function() {
  let scroll = $(window).scrollTop();
  let block = $('.number-bottom .number-block');
  let blockTop = $('.number-top');
  let blockBottom = $('.number-bottom');
  let positionBottom = block.offset().top + block.height();
  if (scroll + $(window).height() > positionBottom && scroll < positionBottom) {
    blockTop.addClass('animate');
    blockBottom.addClass('animate');
  } else {
    blockTop.removeClass('animate');
    blockBottom.removeClass('animate');
  }
}

function sliderList() {
  let list = $('.slider-item-text ul');
  for (let i = 0; i < list.length; i++) {
    let listItem = list.eq(i).find('li');
    if (listItem.length > 4) {
      for (let j = 3; j < listItem.length; j++) {
        listItem.eq(j).addClass('close');
      }
      list.eq(i).append(`<li class="list-btn" data-id=${i}>Cмотреть весь список</li>`);
    }
  }
}

function showListSlider() {
  let listBtn = $('.list-btn');
  let list = $('.slider-item-text ul');
  for (let i = 0; i < listBtn.length; i++) {
    listBtn.eq(i).click(function() {
			if(!$(this).parents('.slider-item').hasClass('slider-item-opacity')){
				let id = $(this).attr("data-id");
	      let listItem = list.eq(id).find('li');
	      for (let j = 3; j < listItem.length; j++) {
	        listItem.eq(j).removeClass('close');
	      }
				listBtn.detach();
				list.eq(id).append(`<li class="btn-close">Cкрыть весь список</li>`);
	    	closeListSlider();
			}
    });
  }
}

function closeListSlider(){
	let btnClose = $('.btn-close');
	let list = btnClose.parent();
	let id = $('.slider-item-text ul').index(list);
	list = list.find('li');
	btnClose.click(function(){
		closeListItem(list);
		btnClose.detach();
		list.parent().append(`<li class="list-btn" data-id=${id}>Cмотреть весь список</li>`);
		showListSlider();
	});
}

function closeListItem(list){
	for(let i=3;i<list.length;i++){
		list.eq(i).addClass('close');
	}
}

function clickButtonSlider(){
	let btnLf = $('.services-prev');
	let btnRg = $('.services-next');
	btnLf.click(function(){
		opacityListSlider();
	});
	btnRg.click(function(){
		opacityListSlider();
	});
}
function opacityListSlider() {
	let sliderItem = $('.services-slider .slick-active');
	sliderItem.eq(0).addClass('slider-item-opacity');
	sliderItem.eq(0).find('button').attr('disabled','true');
	for(let i=1;i<sliderItem.length-1;i++){
		sliderItem.eq(i).removeClass('slider-item-opacity');
		sliderItem.eq(i).find('button').removeAttr('disabled');
	}
	sliderItem.eq(sliderItem.length-1).addClass('slider-item-opacity');
	sliderItem.eq(sliderItem.length-1).find('button').attr('disabled','true');
}

$(document).ready(function() {
  topSectionSlider();
  openCloseServicesWindow();
  sectionServicesSlider();
  sectionClientSlider();
  showListSlider();
	clickButtonSlider();
	opacityListSlider();
});
$(window).load(function() {});

$(window).resize(function() {

});
$(window).scroll(function() {
  animateSectionNumber();
});
