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
    
    $("#fill").click(function(){
        $(".hijo").css("height","500px");
    })
    scrollMenu();
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

function scrollMenu() {
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
}

