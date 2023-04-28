$(document).ready(function () {

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      320: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      375: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3.5,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 4.5,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 6,
      },
    },
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 0,
    speed: 700,
    thumbs: {
      swiper: swiper,
    },
  });





  $('.mobmenu').click(function () {
    $(this).toggleClass('active');
    $('header.header').toggleClass('mobheader');
    window.scrollTo(0, 0);
    $('body').toggleClass('hidden');
    
  });

  if ($(window).width() > 1199) {
    $('.sublink').hover(function () {
      $('.header').addClass('headerblack');
    }, function () {
      $('.header').removeClass('headerblack');
    });
  }

  $(window).resize(function () {
    if ($(window).width() > 1199) {
      $('.sublink').hover(function () {
        $('.header').addClass('headerblack');
      }, function () {
        $('.header').removeClass('headerblack');
      });
    }
  });


  if ($(window).width() < 1200) {
    $('.sublink').click(function () {
      $(this).toggleClass('active');
      $(this).find('.sublist').slideToggle();
    });
  }

  $(window).resize(function () {
    if ($(window).width() < 1200) {
      $('.sublink').click(function () {
        $(this).toggleClass('active');
        $(this).find('.sublist').slideToggle();
      });
    }
  });









  //       var windowWidth = $(document).width(),
  //       containerWidth = $('.container').width(),
  //       paddingContainer = ((windowWidth - containerWidth) / 2)
  //   // right
  //   $('.celebrity-luxury, .genslsect, .articlesect__header').css('padding-right', paddingContainer)
  //   // left
  //   $('.spaceleft-container, .genslsect-container, .ournews-slider, .articlesect__headercontain').css('padding-left', paddingContainer);


  //   $(window).resize(function () {
  //       var windowWidth = $(document).width(),
  //           containerWidth = $('.container').width(),
  //           paddingContainer = ((windowWidth - containerWidth) / 2)
  //       // right
  //       $('.celebrity-luxury, .genslsect, .articlesect__header').css('padding-right', paddingContainer)
  //       // left
  //       $('.spaceleft-container, .genslsect-container, .articlesect__headercontain').css('padding-left', paddingContainer);
  //   });











});