$(document).ready(function () {

    "use strict";

    $('#slider-carousel').carouFredSel({

        responsive: true,
        width: '100%',
        circular: true,
        scroll: {

            items: 1,
            duration: 500,
            pauseOnHover: true
        },

        auto: true,
        items: {

            visible: {

                min: 1,
                max: 1
            },

            height: "variable"
        },

        pagination: {

            container: ".sliderpager",
            pageAnchorBuilder: false
        }

    });

    $('.carousel').carousel({
        interval: 2000
    });


    $(window).scroll(function () {

        var top = $(window).scrollTop();

        if (top > 100) {

            $('header').addClass('secondary');



        } else {

            $('header').removeClass('secondary');

        }



    });


    $('.open i').click(function (){

        $('.sidenav').css('transform', 'translateX(0)');

    });
    
     $('.close i').click(function (){

        $('.sidenav').css('transform', 'translateX(-100%)');

    });



});
