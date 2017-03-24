$(document).ready(function(){
	var altura = $('.menu').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > 0 ){
			$('.menu').addClass('menu-fijo');
            $('#logo-img').attr("src","img/logo_purpple.png");
		} else {
			$('.menu').removeClass('menu-fijo');
            $('#logo-img').attr("src","img/logo_white.png");
		}
	});
 
});