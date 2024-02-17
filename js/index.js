$(document).ready(() => {
  $(".slider-talent").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".slider-insights").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".client-say .slider-say").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
  });
  scroolDown();
});

function scroolDown() {
  $(window).scroll(function () {
    $(".visible-bottom-to-top").each(function () {
      let pos = $(this).offset().top;
      let winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide-bottom-to-top");
      }
    });
    $(".visible-top-to-bottom").each(function () {
      let pos = $(this).offset().top;
      let winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide-top-to-bottom");
      }
    });
    $(".visible-left-to-right").each(function () {
      let pos = $(this).offset().top;
      let winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide-left-to-right");
      }
    });
    $(".visible-right-to-left").each(function () {
      let pos = $(this).offset().top;
      let winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide-right-to-left");
      }
    });
  });
}

// Collapse
let coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

// Homepage
$("#homepage .our-specialist .container .left .items .item").hover(function (
  e
) {
  $("#homepage .our-specialist .container .left .items .item").removeClass(
    "active"
  );
  $(this).addClass("active");
  let img = $(this).attr("attr-img");
  let title = $(this).attr("attr-title");
  let content = $(this).attr("attr-content");
  $("#homepage .our-specialist .container .right").css(
    "background-image",
    `url('${img}')`
  );
  $("#homepage .our-specialist .container .right .title").text(title);
  $("#homepage .our-specialist .container .right .content").text(content);
});

// Meet the team
$("#meet-the-team .find-out .items .item .btn-yellow").click(() => {
  $("#meet-the-team .popup").addClass("active");
});
$("#meet-the-team .popup .wrapper .close").click(() => {
  $("#meet-the-team .popup").removeClass("active");
});
$("#meet-the-team .popup").click((e) => {
  if ($(e.target).attr('class') === "popup active") {
    $("#meet-the-team .popup").removeClass("active");
  }
});
