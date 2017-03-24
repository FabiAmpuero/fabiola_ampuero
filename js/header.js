function init() {
    
    anime = setInterval(animacion,1000);
    
    var heightWindow = $(window).height();
    $("header").css("height",heightWindow);
    $("#aboutme").css("height",heightWindow);
    $("#skills").css("height",heightWindow);
    $("#portfolio").css("height",heightWindow);
    $("#contact").css("height",heightWindow);
    var alto = heightWindow-100;
    $(".hero").css("padding-top",alto/2);
    
    menuColor();
}

function animacion() {
    $("#let_h").animate({display: 'block'});
    $("#let_o").animate({bottom: '16px'});
    $("#let_l").animate({display: 'block'});
    $("#let_a").animate({bottom: '16px'});
    clearInterval(anime);
    clear = setInterval(desaparecer,3000);
}

function desaparecer() {
    console.log("oli");
    $("#let_h").fadeOut();
    $("#let_o").fadeOut();
    $("#let_l").fadeOut();
    $("#let_a").fadeOut();
    clearInterval(clear);
    nombre = setInterval(nombreIn,1000);
}

function nombreIn() {
    $("#nombre").fadeIn();
}

function menuColor(){
    /*$(".link-nav").click(function(){
        //alert($(this).text());
        $(this).css("border-bottom","6px solid #000");
    });*/
    
}

