//ハンバーガーメニュー
var hamburger = $('.hamburger-menu');
var section = $('.header-nav-list-item');

$('.hamburger-button').on('click', function () {
    hamburger.toggleClass('hamburger-menu-active');
});

$(window).on('resize', function () {
    hamburger.removeClass('hamburger-menu-active');
});

$('.header-nav-list-item').on('click', function () {
    hamburger.removeClass('hamburger-menu-active');
});


//スマートタブ

$('#smarttab').smartTab({
    enableUrlHash: false,
    autoAdjustHeight: false,
});


