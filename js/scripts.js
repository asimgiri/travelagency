$(document).ready(function() {
  $(".carousel").carousel({
    interval: 1000,
    pause: false
  });

  $(".carousel .carousel-inner").swipe({
    swipeLeft: function(event, direction, distance, duration, fingerCount) {
      this.parent().carousel('next');
    },
    swipeRight: function() {
      this.parent().carousel('prev');
    },
    threshold: 0,
    tap: function(event, target) {
      // get the location: in my case the target is my link
      window.location = $(this).find('.carousel-item.active a').attr('href');
    },
    //เอา  a ออกถ้าต้องการให้ slide ที่เป็น tag a สามารถคลิกได้
    excludedElements: "label, button, input, select, textarea, .noSwipe"
  });

  $('.carousel .carousel-inner').on('dragstart', 'a', function() {
    return false;
  });




  $(".set > a").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".content")
        .slideUp(200);
      $(".set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    } else {
      $(".set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
      $(this)
        .find("i")
        .removeClass("fa-plus")
        .addClass("fa-minus");
      $(".set > a").removeClass("active");
      $(this).addClass("active");
      $(".content").slideUp(200);
      $(this)
        .siblings(".content")
        .slideDown(200);
    }
  });


});



$('.owl-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  margin: 10,
  dots: false,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 4
    }
  }
})
