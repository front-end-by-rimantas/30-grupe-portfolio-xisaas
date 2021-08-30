// import JS modules

// execute JS modules

/* Icons Area Start */
$(document).ready(function(){
    $('.carousel').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: false,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        rensponsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 5
            }
        }]
    });
});

/* Icons Area End */
