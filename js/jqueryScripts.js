$(document).ready(function(){
  var owl = $('.slider-wrapper');
  owl.owlCarousel({
    stageClass: 'slider-body',
    responsive: {
      961: {
        loop: true,
        center: true,
        margin: 14,
        autoWidth: true,
        startPosition: 1
      },
      320: {
        loop: true,
        items: 1,
        center: true,
        startPosition: 1
      }
    }
  });
  $('.slider-button-prev').click(function() {
      owl.trigger('prev.owl.carousel');
    });
  $('.slider-button-next').click(function() {
      owl.trigger('next.owl.carousel');
    });

    var owlCategory = $('.category__wrapper');
    if($(window).width() <= 960) {
      owlCategory.owlCarousel({
        items: 2,
        navClass: ['owl-category-button-prev', 'owl-category-button-next']
      });
      $('.category-button-prev').click(function() {
          owlCategory.trigger('prev.owl.carousel');
        });
      $('.category-button-next').click(function() {
          owlCategory.trigger('next.owl.carousel');
        });
    }
});