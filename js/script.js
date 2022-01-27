$(function () {
    'use strict'
  
    //banner slider start
    $('#banner').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      dots: true,
    });
  
    // about video venobox
    $('.venobox').venobox({
      spinner: 'cube-grid',
    });
  
    // team slider
    $('.team_slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      arrows: false,
      dots:false,
      responsive: [
        {
          breakpoint: 991.98,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 767.98,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots:false,
            autoplay:true,
          }
        },
        {
          breakpoint: 575.98,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  
    //testimonial slider start
    $('.test_slider').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      arrows: false,
      dots: true,
      responsive: [
        {
          breakpoint: 991.98,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 767.98,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 575.98,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  
    // Client Counter
    $('.counter').counterUp({
      delay: 10,
      time: 1000,
    });
  
     //bottom slider start
     $('.bottom_slider').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      arrows: true,
      prevArrow: ' <i class="fas fa-chevron-left"></i> ',
      nextArrow: ' <i class="fas fa-chevron-right"></i> ',
      responsive: [
        {
          breakpoint: 1199.98,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows:false,
          }
        },
        {
          breakpoint: 991.98,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows:false,
          }
        },
        {
          breakpoint: 767.98,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows:false,
            autoplay:true,
          }
        },
        {
          breakpoint: 575.98,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplaySpeed:2000,
            arrows: false,
          }
        }
      ]
    });
  
  })