$(document).ready(function() {
  // better way makr a var to select something
  let $btns = $(".project-area .button-group button");

  //what will happen for this button when i click
  $btns.click(function(e) {
    //first add class active and remove class active
    $(".project-area .button-group button").removeClass("active");
    e.target.classList.add("active");
    //second e.target (have attr data filter will open)
    // note ther other way to make this not use libeiry
    let selector = $(e.target).attr("data-filter");
    $(".project-area .grid").isotope({
      filter: selector
    });

    return false;
  });

  $(".project-area .button-group #btn1").trigger("click");
  // this for open image on click and change it by arrow

  $(".project-area .grid .test-popup-link").magnificPopup({
    type: "image",
    gallery: { enabled: true }
  });
  // here is a owl couser to start work it sould to be
  $(".site-main .about-area .owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    // it make it responsive
    responsive: {
      // this mean from 0px up to 543px need only one items
      0: {
        items: 1
      },
      // this mean from 544 up to ~~~~ need two items
      544: {
        items: 2
      }
    }
  });

  // sticky nav
  let nav_offeset_top = $(".header-area").height() + 50;
  $(window).scroll(function() {
    var sc = $(window).scrollTop();
    if (sc > 50) {
      $(".header-area .main-menu").addClass("navbar_fixed");
    } else {
      $(".header-area .main-menu").removeClass("navbar_fixed");
    }
  });
});
