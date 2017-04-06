function init() {
    anime = setInterval(animacion,500);
    
    $(window).on('scroll', function(){
		if ( $(window).scrollTop() > 0 ){
            $('#logo-img').attr("src","img/logo_purpple.png");
            $(".a-about").html("SOBRE MÍ");
            $(".a-skill").html("HABILIDADES");
            $(".a-portfolio").html("PORTAFOLIO");
            $(".a-contact").html("CONTACTO");
            $(".navbar-collapse").css("background-color","rgba(133, 78, 83, 0.77)");
            $(".navbar-toggle").css("background-color","rgba(133, 78, 83, 0.77)");
		} else {
            $(".navbar-collapse").css("background-color","rgba(0, 0, 0, 0)");
            $('#logo-img').attr("src","img/logo_white.png");
            $(".a-about").html("");
            $(".a-skill").html("");
            $(".a-portfolio").html("");
            $(".a-contact").html("");
		}
	});
    
    var heightWindow = $(window).height();
    var widthWindow = $(window).width();
    $("header").css("height",heightWindow);
    $(".fondo").css("height",heightWindow);
    $("#contact").css("height",heightWindow+200);
    alto = heightWindow-100;
    $(".hero").css("padding-top",alto/2);
    
    $("#fill").click(fillSkills);
    
    logoSkill(widthWindow);
    menuResponsive(widthWindow);
}

function logoSkill(_width) {
    console.log(_width);
    if(_width<=500){
        $(".logo-skill").addClass("img-responsive");
        $(".hijo").css("width","100%");
    }
}

function menuResponsive(_width) {
    if(_width<768){


        $(window).on('scroll', function(){
            if ( $(window).scrollTop() == 0 ){
                $(".a-about").html("SOBRE MÍ");
                $(".a-skill").html("HABILIDADES");
                $(".a-portfolio").html("PORTAFOLIO");
                $(".a-contact").html("CONTACTO");
                $(".navbar-collapse").css("background-color","rgba(133, 78, 83, 0.77)");
            }
	    });

    }
}

function animacion() {
    $("#let_h").animate({display: 'block'});
    $("#let_o").animate({bottom: '16px'});
    $("#let_l").animate({display: 'block'});
    $("#let_a").animate({bottom: '16px'});
    clearInterval(anime);
    clear = setInterval(desaparecer,1500);
}

function desaparecer() {
    $("#let_h").fadeOut();
    $("#let_o").fadeOut();
    $("#let_l").fadeOut();
    $("#let_a").fadeOut();
    
    clearInterval(clear);
    nombre = setInterval(nombreIn,400);
}

function nombreIn() {
    $(".hero").css("padding-top", alto/3);
    $("#nombre").fadeIn();
    animacion();
}


function fillSkills() {
    $(".hijo").css("height","500px");
}



// PORTAFOLIO
$('.expand').click(function(){
    var portid = $(this).attr('rel');
    console.log(portid);
    $('html,body').animate({scrollTop: $('#showcase').offset().top-100}, 500, 'easeInOutQuad');
    
    for(var i in portafolios){
        console.log(portafolios[i].name);
        if(portafolios[i].name==portid){
            var id = portafolios[i];
            console.log(id);
        }
    }
    
    
    if (screen.width <= 767 || window.innerWidth <=767) {
        $('#showcase').animate({opacity:'1', height:'650px'},500).css('display', 'block');
        $('#inner-showcase').css('display', 'block');
        
        var html = 
        '<div id="'+portid+'" class="work-content" style="margin-top:25px;">'+
        '<div class="col-md-7 col-xs-12">'+
        '<img class="work-img img-responsive" src="img/'+portid+'.JPG">'+
        '</div><div class="clearfix visible-xs"></div>'+
        '<div class="col-md-5 col-xs-12">'+
        '<h3 class"work-title">'+id.titulo+'</h3><p class"work-text">'+id.texto+'</p><a class="visit-button glyphicon glyphicon-fullscreen" href="'+id.url+'" target="blank_"><span>Visitar Página</span></a>'+
        '<a class="visit-button glyphicon glyphicon-fullscreen" href="'+id.codigo+'" target="blank_"><span>Ver Código</span></a>'+
        '</div>'+
        '</div>';
        $('#s-content').html(html);
    }
        
    else{
        $('#showcase').animate({opacity:'1', height:'500px'},500).css('display', 'block');
        $('#inner-showcase').css('display', 'block');
        
        var html = 
        '<div id="'+portid+'" class="work-content" style="margin-top:25px;">'+
        '<div class="col-md-7 col-xs-12">'+
        '<img class="work-img img-responsive" src="img/'+portid+'.JPG">'+
        '</div><div class="clearfix visible-xs"></div>'+
        '<div class="col-md-5 col-xs-12">'+
        '<h3 class"work-title">'+id.titulo+'</h3><p class"work-text">'+id.texto+'</p><a class="visit-button glyphicon glyphicon-fullscreen" href="'+id.url+'" target="blank_"><span>Visitar Página</span></a>'+
        '<a class="visit-button glyphicon glyphicon-fullscreen" href="'+id.codigo+'" target="blank_"><span>Ver Código</span></a>'+
        '</div>'+
        '</div>';
        $('#s-content').html(html);
        $('#s-content').hide().fadeIn(1000);}
    
});

$('.portfolio-item').click(function(){
    removeclick();
    $(this).addClass("clicked");  
});

function removeclick(){	
    if ($('.portfolio-item').hasClass('clicked')){
        $('.portfolio-item').removeClass("clicked");
    }	
}

$('#close').click(function(e){
    e.preventDefault();
    removeclick();
    $('#showcase').animate({opacity:'0', height:'0px'}, 500)
    $('#s-content').empty();
    $('#inner-showcase').css('height', '1px');
    $('html,body').animate({
        scrollTop: $('#portfolio').offset().top},200);
});



// CONTACTOO

$('#btn-contact').click(function () {
    console.log($(this).parent());
  $(this).parent().toggleClass('expand-contact');     
});








