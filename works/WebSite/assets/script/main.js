//password
$(".contents__hole").hide();
$(".password button").on("click", () => {
  if ($(".password input").val() === "portfoliopass") {
    $(".contents__hole").show();
    $(".password").hide();
  }
})


// ハンバーガーメニュー
var hamburger = $('.hamburger__menu');
$('.hamburger__button').on('click', function () {
  hamburger.toggleClass('hamburger__menu--active');
});

$(window).on('resize', function () {
  hamburger.removeClass('hamburger__menu--active');
});


