//menu adaptive
$(document).ready(function(){
	var touch = $('.menu-icon');
	var menu = $('.menu');
	$(touch).click(function(slide) {
		slide.preventDefault();
		menu.slideToggle();
	});
	$(window).resize(function() {
		var wid = $(window).width();
		if(wid > 750 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});
});
//popup
$(document).ready(function(){	
	$(".popup").css("display","inherit");
	$(".overlay").css("display","inherit");
	
	$(".close-popup").click(function(){
	$(".popup").fadeTo(450,0).css("display","none");
	$(".overlay").fadeTo(450,0).css("display","none");
	});	 
});
//loader
$(window).on('load', function () {
    var $preloader = $('#loader');
    $preloader.delay(1900).fadeOut('slow');
});
//bottom top
$(document).ready(function() {
   $('body').append('<div id="toTop"><h1>&#9650; Наверх</h1></div>');
	   $(window).scroll(function() {
		   if($(this).scrollTop() > 400) {
			   $('#toTop').fadeIn();	
		   } else {
			   $('#toTop').fadeOut();
		   }
	   });

$('#toTop').click(function() {
   $('body, html').animate({scrollTop: 0}, 450);
   });	
});