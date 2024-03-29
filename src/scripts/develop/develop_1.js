function topSectionSlider() {
  let clinetWidth = $(window).innerWidth();
  let dots;
  if (clinetWidth < 992) {
    dots = $('.topsection-slider-dots-mobile');
  } else {
    dots = $('.topsection-menu-dots');
  }
  $('.topsection-slider-slick').slick({
    Infinity: true,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    appendDots: dots,
    prevArrow: $('.slide-prev'),
    nextArrow: $('.slide-next')
  });
}

/*function openCloseServicesWindow() {
  let menu = $('.menu');
    menu.click(function(e) {
      e.preventDefault();
      let el = $(e.target);
      let parent = el.parents('.menu-list-item');
      let menuList = $('.menu-list-item');
      let arr = ['zero','one','two','three','four'];
      let wServices;
      let parentIndex;
        parentIndex = menuList.index(parent);

      let nameMenu = arr[parentIndex];
          wServices = $(`.menu-services`+'-'+nameMenu);
        if (wServices.length) {
          parent.addClass('menu-list-item-open');
          if($(window).innerWidth()>992){
            wServices.fadeIn();
          }else{
            wServices.slideDown();
            //let top = parent.offset().top+parent.outerHeight();
            //wServices.css('top',top+'px');
          }
          let close = $(`.menu-content-close`);
          close.click(function() {
            if($(window).innerWidth()>992){
              wServices.fadeOut();
            }else{
              wServices.slideUp();
            }
           
            parent.removeClass('menu-list-item-open');
          });
        }
        
    });
}*/

function openCloseServicesWindow() {
  let list = $('.menu-list-item a');
  list.click(function () {
    let parent = $(this).parents('.menu-list-item');
    let menu = parent.find('.menu-services');
    if (menu.length) {
      parent.addClass('menu-list-item-open');
      if ($(window).innerWidth() > 992) {
        menu.fadeIn();
      } else {
        menu.slideDown();
      }
      let close = $(`.menu-content-close`);
      close.click(function () {
        if ($(window).innerWidth() > 992) {
          menu.fadeOut();
        } else {
          menu.slideUp();
        }
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
    autoplay: true,
    autoplaySpeed: 3000,
    swipe: false,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 666,
        settings: {
          slidesToShow: 1,
        }
      }

    ]

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
let animateSectionNumber = function () {
  let scroll = $(window).scrollTop();
  let block = $('.number-bottom .number-block');
  let blockTop = $('.number-top');
  let blockBottom = $('.number-bottom');
  let positionBottom = block.offset().top + block.height();
  let widthWindow = $(window).innerWidth();
  if (scroll + $(window).height() > positionBottom && scroll < positionBottom && widthWindow > 1024) {
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
    listBtn.eq(i).click(function () {
      if (!$(this).parents('.slider-item').hasClass('slider-item-opacity')) {
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

function closeListSlider() {
  let btnClose = $('.btn-close');
  let list = btnClose.parent();
  let id = $('.slider-item-text ul').index(list);
  list = list.find('li');
  btnClose.click(function () {
    closeListItem(list);
    btnClose.detach();
    list.parent().append(`<li class="list-btn" data-id=${id}>Cмотреть весь список</li>`);
    showListSlider();
  });
}

function closeListItem(list) {
  for (let i = 3; i < list.length; i++) {
    list.eq(i).addClass('close');
  }
}

function fancyBoxText() {
  let btnCredit = $('.credit .btn').fancybox({
    afterClose: function () {
      $('#p1').show();
      $('#p2').show();
      $('#p3').show();
      $('#p4').show();
    }
  });
}
function clickBtnOpenMenu() {
  let btn = $('.menu-open-btn');
  let opacity = $('.menu-opacity-block');
  let menuClose = $('.menu-content-close');
  btn.click(function () {
    $(this).toggleClass('open');
    opacity.slideToggle();
    menuClose.click();
  });
}
function showImageCredit() {
  if ($(window).innerWidth() > 1024) {
    let img = $('.credit .item-img');
    let seccredit = $('.credit').offset().top;
    let scroll = $(window).scrollTop();
    let scrollBottom = scroll + $(window).height();
    for (let i = 0; i < img.length; i++) {
      let position = img.eq(i).offset().top + img.height();
      if (scrollBottom > position) {
        img.eq(i).addClass('active');
      }

    }
  }
}

function fancyTextCompany(){
  let btnCompany = $('.company-btn');
  btnCompany.fancybox({
    hideOnOverlayClick: false,
    hideOnContentClick: true
  });
}
$(document).ready(function () {
  topSectionSlider();
  openCloseServicesWindow();
  sectionServicesSlider();
  sectionClientSlider();
  showListSlider();
  fancyBoxText();
  clickBtnOpenMenu();
  fancyTextCompany();
});
$(window).load(function () { });

$(window).resize(function () {

});
$(window).scroll(function () {
  animateSectionNumber();
  showImageCredit();
});
