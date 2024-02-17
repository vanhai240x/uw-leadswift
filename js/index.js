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
// Gsap animation
$(function () {
  let cards = gsap.utils.toArray(".stackCard");
  let stickDistance = 0;
  let lastCardST = ScrollTrigger.create({
    trigger: cards[cards.length - 1],
    start: "center center",
  });
  cards.forEach((card, index) => {
    var scale = 1 - (cards.length - index) * 0.05;
    console.log(scale);
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
