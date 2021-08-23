(function ($){
    "use strict";

    // mobile-menu
    $('#mobile-menu').meanmenu({
      meanMenuContainer: '.mobile-menu',
      meanScreenWidth: "767",
    });

    //slider
    function mainSlider() {
        var BasicSlider = $('.slider-active');
        BasicSlider.on('init', function(e, slick) {
            var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: false,
            autoplaySpeed: 10000,
            prevArrow: '<button type="button" class="slick-prev"><span class="lnr lnr-arrow-left"></span>Prev</button>',
            nextArrow: '<button type="button" class="slick-next">Next<span class="lnr lnr-arrow-right"></span></button>',
            dots: true,
            fade: true,
			      arrows: true,
            responsive: [
                { breakpoint: 767, settings: { dots: false, arrows: false } },
                {
                  breakpoint: 1200,
                  settings: {
                    arrows: false,
                  }
                },
            ]
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function() {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function() {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();

    // services slider
    $('.services-active').slick({
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 500,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

    //   magnificPopup
      $('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
      });

      // cases-active
      $('.cases-active').slick({
        dots: false,
        arrows: true,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 500,
        prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-alt-circle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-alt-circle-right"></i></i></button>',
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

      // client-active
      $('.client-active').slick({
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 500,
        prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-alt-circle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-alt-circle-right"></i></i></button>',
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              arrows: true
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

      // niceSelect
      $('select').niceSelect();

      // brand-active
      $('.brand-active').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 500,
        prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-alt-circle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-alt-circle-right"></i></i></button>',
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

})(jQuery);