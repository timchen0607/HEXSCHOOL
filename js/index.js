$(document).ready(function () {
  home();


  $(window).resize(function() {
    var width = $(window).width();
    if (width>=768){
      $('h1').show();
      $('nav ul>li').show();
      $('.control').hide();
    }else{
      $('h1').show();
      $('nav ul>li').hide();
      $('.control i').addClass('fa-bars');
      $('.control i').removeClass('fa-times');
      $('.control').show();
    }
  });
  $('.control').click(function (e) { 
    e.preventDefault();
    $('.control i').toggleClass('fa-bars');
    $('.control i').toggleClass('fa-times');
    $('h1').toggle(300);
    $('nav ul li').toggle(300);
  });


  function home(){
    $('.page').fadeOut();
    $('#home').fadeIn().css('transform', 'translateX(0%)');
    $('#info').css('transform', 'translateX(100%)');
    $('#qna').css('transform', 'translateX(200%)');
    $('.home').parent().addClass('active').siblings().removeClass('active');
    $('.son li').removeClass('active');
    $('.son').slideUp();
    $("html,body").animate({scrollTop:0},500);
  }
  function info(tag){
    $('.page').fadeOut();
    $('#info').fadeIn();
    $('.info_item').fadeOut();
    $(tag).fadeIn();
    $('#home').css('transform', 'translateX(-100%)');
    $('#info').css('transform', 'translateX(0%)');
    $('#qna').css('transform', 'translateX(100%)');
    $('.qna_son li').removeClass('active');
    $("html,body").animate({scrollTop:0},500);
  }
  function qna(flag){
    $('.page').fadeOut();
    $('#qna').fadeIn();
    $('#home').css('transform', 'translateX(-200%)');
    $('#info').css('transform', 'translateX(-100%)');
    $('#qna').css('transform', 'translateX(0%)');
    $('.info_son li').removeClass('active');
    $('.qna').parent().addClass('active').siblings().removeClass('active');
    setTimeout(function(){
      $('html, body').animate({scrollTop: $(flag).offset().top-100}, 500);
    },500);
    $('.qna_son').slideUp();
  }


  $('.home').click(function (e) { 
    e.preventDefault();
    home();
  });


  $('.info').click(function (e) { 
    e.preventDefault();
    $('.qna_son').slideUp();
    $('.info_son').stop().slideToggle();
  });
  $('.html5').click(function (e) { 
    e.preventDefault();
    $('.info').parent().addClass('active').siblings().removeClass('active');
    $('.html5').parent().addClass('active').siblings().removeClass('active');
    info('#html5');
    $('.info_son').slideUp();
  });
  $('.rwd').click(function (e) { 
    e.preventDefault();
    $('.info').parent().addClass('active').siblings().removeClass('active');
    $('.rwd').parent().addClass('active').siblings().removeClass('active');
    info('#rwd');
    $('.info_son').slideUp();
  });
  $('.jquery').click(function (e) { 
    e.preventDefault();
    $('.info').parent().addClass('active').siblings().removeClass('active');
    $('.jquery').parent().addClass('active').siblings().removeClass('active');
    info('#jquery');
    $('.info_son').slideUp();
  });


  $('.qna').click(function (e) { 
    e.preventDefault();
    $('.info_son').slideUp();
    $('.qna_son').stop().slideToggle();
  });
  $('.simple').click(function (e) { 
    e.preventDefault();
    qna('#simple');
  });
  $('.pay').click(function (e) { 
    e.preventDefault();
    qna('#pay');
  });
  $('.refund').click(function (e) { 
    e.preventDefault();
    qna('#refund');
  });
  

  $(window).scroll(function(){
    if($(this).scrollTop()>300){
        $("#top").fadeIn();
    } else {
        $("#top").fadeOut();
    }

    var scrollVal = $(window).scrollTop()+150;
    var simpleVal = $('#simple').offset().top;
    var payVal = $('#pay').offset().top;
    var refundleVal = $('#refund').offset().top;
    if (scrollVal >= simpleVal && simpleVal != 0){
      $('.simple').parent().addClass('active').siblings().removeClass('active');
    }
    if (scrollVal >= payVal && payVal != 0){
      $('.pay').parent().addClass('active').siblings().removeClass('active');
    }
    if (scrollVal >= refundleVal && refundleVal != 0){
      $('.refund').parent().addClass('active').siblings().removeClass('active');
    }
    if (scrollVal <= simpleVal){
      $('.qna_son li').removeClass('active');
    }
  });
  $('.top').click(function (e) { 
    e.preventDefault();
    $("html,body").animate({scrollTop:0},500);
  });
});