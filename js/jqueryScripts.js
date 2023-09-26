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
        margin: 10.5,
        responsive: {
					961: {
						items: 3
					},
          661: {
            items: 2
          },
					0: {
						items: 1
					}
        }
      });
      $('.category-button-prev').click(function() {
          owlCategory.trigger('prev.owl.carousel');
        });
      $('.category-button-next').click(function() {
          owlCategory.trigger('next.owl.carousel');
        });
    }

    
    var owlReviews = $('.reviews__slider');
    if($(window).width() <= 960) {
      owlReviews.owlCarousel({
        responsive: {
          481: {
            items: 2
          },
          0: {
            items: 1,
            margin: 5
          }
        }
      });
      $('.reviews-button-prev').click(function() {
          owlReviews.trigger('prev.owl.carousel');
        });
      $('.reviews-button-next').click(function() {
          owlReviews.trigger('next.owl.carousel');
        });
    }

    $(".phone_mask").mask("+7(999)999-99-99");
});