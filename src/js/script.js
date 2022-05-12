$(document).ready(function(){
  $('.slider__wrapper').slick({
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
		responsive: [
			{
			breakpoint: 880,
      settings: {
        dots: true,
				arrows: false,
				variableWidth: false
			}
		}
	]
	});
});