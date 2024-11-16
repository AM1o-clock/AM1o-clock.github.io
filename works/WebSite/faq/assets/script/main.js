// ハンバーガーメニュー
var hamburger = $('.hamburger__menu');
$('.hamburger__button').on('click', function () {
  hamburger.toggleClass('hamburger__menu--active');
});

$(window).on('resize', function () {
  hamburger.removeClass('hamburger__menu--active');
});



// アコーディオン
$(function () {
  $('.accordion__item--answer').hide();
  $('.accordion__item--question').on('click', function () {
    $(this).toggleClass("open");
    $(this).next().slideToggle();
    $(this).parent().toggleClass("open");

  });
});


