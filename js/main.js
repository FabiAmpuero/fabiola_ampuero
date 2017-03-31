$(document).ready(function(){
	var altura = $('.menu').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > 0 ){
			$('.menu').addClass('menu-fijo');
            $('#logo-img').attr("src","img/logo_purpple.png");
            $(".a-about").html("SOBRE MÍ");
            $(".a-skill").html("HABILIDADES");
            $(".a-portfolio").html("PORTAFOLIO");
            $(".a-contact").html("CONTACTO");
		} else {
			$('.menu').removeClass('menu-fijo');
            $('#logo-img').attr("src","img/logo_white.png");
            
            $(".a-about").html("");
            $(".a-skill").html("");
            $(".a-portfolio").html("");
            $(".a-contact").html("");
		}
	});
 
});