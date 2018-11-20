var $window = $(window),
    $carouselMobile = $('.carousel-mobile'),
    toggleSlick,

	isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
	isTouch = "ontouchstart" in window,

	mobile = false;

if(isMobile || isTouch)  {
	mobile = true;
}



$(document).ready(function () {
	
	//scrollAnimation
	var offset = 0;
	
	if ($window.height() <= 850 ) {
		offset = 100;
	}
	
	
	wow = new WOW({
		animateClass: 'animated',
		offset: offset
	});
	wow.init();
	

	// if (mobile) {
	// 	wow.offset = 0;
	// }

  // //Menu
  $('.js-menu').on('click', function(e) {
      e.preventDefault();

      $(this).toggleClass('menu__btn_open');
      $('body, html').toggleClass('overflow');
      $('.header__menu').toggleClass('menu_open');
  });
	
	//Car anim
	$('.order__car').on('click', function (e) {
		e.preventDefault();
		
		$(this).removeClass('lightSpeedIn animated');
		
		
			$(this).css('animation-name','lightSpeedOut').addClass('animated');
		
	});
	
	//Parallax
	var scene = document.querySelector('.scene');

	if ($window.width() > 1023 && !mobile && scene) {
		var parallax = new Parallax(scene, {
			relativeInput: true,
			clipRelativeInput: false,
			hoverOnly: true,
			calibrateX: true,
			calibrateY: false,
			invertX: true,
			invertY: true,
			limitX: 80,
			limitY: 0,
			frictionX: 0.2,
			frictionY: 0.2,
			selector: '.layer',
			pointerEvents: true
		});
	}
	
    // //Menu
    // $('.js-menu').on('click', function(e) {
    //     e.preventDefault();
	//
    //     $(this).toggleClass('open');
    //     $('body, html').toggleClass('overflow');
    //     $('.header__navigation').toggleClass('open');
    // });
	
    //Popup
	$('.js-popup-link').magnificPopup({
		type: 'inline',

		fixedContentPos: true,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: false,
		preloader: false,
		focus: 'input[name="name"]',
		modal: false,

		midClick: true,
		removalDelay: 400,
		mainClass: 'my-mfp-zoom-in'
	});

    $('.popup__close').on('click', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
    
	$('.popup__button_close').on('click', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });

	//Inpumask
	$('input[name*="phone"]').inputmask({
		mask: '+7 (999) 999-99-99',
		showMaskOnHover: false
	});

  //carousel-mobile

  toggleSlick = function () {
      if ($window.width() < 600) {
          $carouselMobile.slick({
              dots: false,
              arrows: true,
              speed: 500,
              slidesToShow: 1,
              slidesToScroll: 1,
            	variableWidth: true,
						  centerMode: true,
              prevArrow: '<button type="button" class="slick-prev slick-arrow" aria-label="Previous"><span class="icon icon-arrow-prev slick-arrow__icon"></span></button>',
              nextArrow: '<button type="button" class="slick-next slick-arrow" aria-label="Next"><span class="icon icon-arrow-next slick-arrow__icon"></span></button>'
          });
      } else {
          if($carouselMobile.hasClass('slick-initialized')) {
              $carouselMobile.slick('unslick');
          }
      }
  };

  $window.resize(toggleSlick);
  toggleSlick();
    
    //Form
	$('.form-data__input').on("change keyup input", function () {
		if($(this).val() != '') {
			$(this).closest('.form-data__parametr').removeClass('form-data__parametr_error');
		}
	});

    var validatePhone = function(phone) {
        var re = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{3,10}$/;
        return re.test(phone);
    };

    $('.form_feedback').submit(function(e){

        var name = $(this).find('input[name="your-name"]').val(),
            phone = $(this).find('input[name="your-phone"]').val(),
            errorFlag1 = false,
            data = $(this).serialize();

        e.preventDefault();

        if ( !validatePhone(phone) || phone == '' ) {
            $(this).find('input[name="your-phone"]').closest('.form-data__parametr').addClass('form-data__parametr_error');
            errorFlag1 = true;
        } else{
            $(this).find('input[name="your-phone"]').closest('.form-data__parametr').removeClass('form-data__parametr_error');
            errorFlag1 = false;
        }
		
		
		
        if ( !errorFlag1 ) {
            $.ajax({
                url: "send.php",
                type: "post",
                dataType: "text",
                data: data,
                success: function (ans) {
                    $('.form_feedback')[0].reset();

					$.magnificPopup.open({
						items: {
							src: '#modal_success',

							type: 'inline',

							fixedContentPos: true,
							fixedBgPos: true,

							overflowY: 'auto',

							closeBtnInside: false,
							preloader: false,
							modal: false,

							midClick: true,
							removalDelay: 400,
							mainClass: 'my-mfp-zoom-in'
						}
					});
                }
            });
        }
		
    });

	$('.form_popup').submit(function(e){

		var name = $(this).find('input[name="your-name"]').val(),
			phone = $(this).find('input[name="your-phone"]').val(),
			errorFlag1 = false,
			data = $(this).serialize();

		e.preventDefault();

		if ( !validatePhone(phone) || phone == '' ) {
			$(this).find('input[name="your-phone"]').closest('.form-data__parametr').addClass('form-data__parametr_error');
			errorFlag1 = true;
		} else{
			$(this).find('input[name="your-phone"]').closest('.form-data__parametr').removeClass('form-data__parametr_error');
			errorFlag1 = false;
		}
		

		if ( !errorFlag1 ) {
		    $.ajax({
		        url: "send.php",
		        type: "post",
		        dataType: "text",
		        data: data,
		        success: function (ans) {
		            $('.form_popup')[0].reset();

					$.magnificPopup.close();

					setTimeout(function () {
						$.magnificPopup.open({
							items: {
								src: '#modal_success',

								type: 'inline',

								fixedContentPos: true,
								fixedBgPos: true,

								overflowY: 'auto',

								closeBtnInside: false,
								preloader: false,
								modal: false,

								midClick: true,
								removalDelay: 400,
								mainClass: 'my-mfp-zoom-in'
							}
						});
					},405);
		        }
		    });
		}
		
	});
	
});
