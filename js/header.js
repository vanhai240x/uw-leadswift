$(".header .burger").click(() => {
  $(".header .menu-fixed").addClass("active");
});

$(".header .menu-fixed .close").click(() => {
  $(".header .menu-fixed").removeClass("active");
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    $(".header").addClass("fixed");
  } else {
    $(".header").removeClass("fixed");
  }
  if ($(this).scrollTop() > 600) {
    $(".header").addClass("active");
  } else {
    $(".header").removeClass("active");
  }
});
