function init() {
    
    anime = setInterval(animacion,1000);
    
    var heightWindow = $(window).height();
    $("header").css("height",heightWindow);
    $("#aboutme").css("height",heightWindow);
    $("#skills").css("height",heightWindow);
    //$("#portfolio").css("height",heightWindow);
    $("#contact").css("height",heightWindow);
    var alto = heightWindow-100;
    $(".hero").css("padding-top",alto/2);
    
    $("#fill").click(fillSkills);
    /*$("#fill").click(function(){
        $(".hijo").slideToggle("slow");
    });*/
    //scrollMenu();
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

// ****************************************** FUNCION MENU
/*function scrollMenu() {
    // Add scrollspy to <body>
    $('body').scrollspy({target: "#navbar", offset: 50});   

    // Add smooth scrolling on all links inside the navbar
    $("nav a").on('click', function(event) {
        console.log("se hizo click");
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            console.log(this.hash);
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
            });
        }  // End if
    });
}*/

function fillSkills() {
    $(".hijo").css("height","500px");
}



// PORTAFOLIO
$('.expand').click(function(){
    var portid = $(this).attr('rel');
    $('html,body').animate({scrollTop: $('#showcase').offset().top-100}, 500, 'easeInOutQuad');
    if (screen.width <= 767 || window.innerWidth <=767) {
    $('#showcase').animate({opacity:'1', height:'650px'},500).css('display', 'block');
    $('#inner-showcase').css('display', 'block');
        $('#s-content').load('portfolio.html #'+portid);

    }
    else{
        $('#showcase').animate({opacity:'1', height:'500px'},500).css('display', 'block');
        $('#inner-showcase').css('display', 'block');
        $('#s-content').load('portfolio.html #'+portid, function(){
        });
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


