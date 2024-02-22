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
new WOW().init();
$(".slider-mobile").slick({
  dots: true,
  arrows: false,
  centerMode: true,
  slidesToShow: 1,
  centerPadding: "calc((100% - 890px) / 2)",
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        centerPadding: "calc((100% - 725px) / 2)",
      },
    },
  ],
});
function openTab(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// Gsap animation - card scroll
$(function () {
  let cards = gsap.utils.toArray(".stackCard");
  let stickDistance = 0;
  let lastCardST = ScrollTrigger.create({
    trigger: cards[cards.length - 1],
    start: "center center",
  });
  cards.forEach((card, index) => {
    var scale = 1 - (cards.length - index) * 0.05;
    let scaleDown = gsap.to(card, {
      scale: scale,
      "transform-origin": '"50% ' + (lastCardST.start + stickDistance) + '"',
    });
    ScrollTrigger.create({
      trigger: card,
      start: "center center",
      end: () => lastCardST.start + stickDistance,
      pin: true,
      markers: false,
      pinSpacing: false,
      ease: "none",
      animation: scaleDown,
      toggleActions: "restart none none reverse",
    });
  });
});

// Add smooth scrolling to all links
$("a").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $(".header .menu-fixed").removeClass("active");
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 78,
      },
      800
    );
  }
});

// Sign up
// $(".slider-signup").slick({
//   dots: true,
//   arrows: true,
//   slidesToShow: 1,
//   autoplay: true,
//   autoplaySpeed: 5000,
// });

// Forgot password
setTimeout(() => {
  $('#input-number-1').focus();
}, 1000);
$('#input-number-1').on('input',function(e){
  if (e.target.value) {
    $('#input-number-2').focus();
  }
});
$('#input-number-2').on('input',function(e){
  if (e.target.value) {
    $('#input-number-3').focus();
  }
});
$('#input-number-3').on('input',function(e){
  if (e.target.value) {
    $('#input-number-4').focus();
  }
});
$('#input-number-4').on('input',function(e){
  if (e.target.value) {
    $('#btn-send').focus();
  }
});
