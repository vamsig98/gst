(function($) {

	"use strict";


    /*------------------------------------------
        = FUNCTIONS
    -------------------------------------------*/
    // Check ie and version
    function isIE () {
        var myNav = navigator.userAgent.toLowerCase();
        return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1], 10) : false;
    }

    /*------------------------------------------
        = SERVICES S2 SLIDER
    -------------------------------------------*/
    if ($(".pricing-slider").length) {
        $(".pricing-slider").owlCarousel({
            autoplay:true,
            smartSpeed: 300,
            margin: 30,
            loop:true,
            autoplayHoverPause:true,
            responsive: {
                0 : {
                    items: 1
                },

                600 : {
                    items: 2
                },

                1200 : {
                    items: 3,
                    center: true,
                }
            }
        });
    }

})(window.jQuery);
