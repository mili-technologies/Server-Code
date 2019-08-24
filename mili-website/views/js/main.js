// < !--Navigation Script-- >




$(document).ready(function () {
    $('.navbar-fostrap').click(function () {
        $('.nav-fostrap').toggleClass('visible');
        $('body').toggleClass('cover-bg');
    })
})

// On scroll navigation bar change
$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 50) {
            $(".nav-fostrap").css({ "background": "white" }),
                $(".logo").css({ "color": "#fff!important" }),
                $(".container-fluid.div1").css({ "box-shadow": "0px 0px 4px grey" }),
                $(".smoothScroll.btn4").css({ "color": "#fff" }),
                $(".nav-fostrap").css({ "padding": "10px 0px 10px 0px" }),
                $(".nav-fostrap li a").css({ "color": "black" }),
                $(".white").css({ "background": "#c8c4c4ba" }),
                $(".brand_logo").css({ "color": "black" }),
                $("a.login").css({ "color": "white" });
        }
        else {
            $(".logo").css({ "color": "white" }),
                $(".nav-fostrap").css({ "background": "none" }),
                $(".container-fluid.div1").css({ "box-shadow": "none" }),
                $(".smoothScroll.btn4").css({ "color": "white" }),
                $(".nav-fostrap").css({ "padding": "20px 0px 20px 0px" }),
                $(".white").css({ "background": "#ffffffba" }),
                $(".nav-fostrap li a").css({ "color": "white" }),
                $(".brand_logo").css({ "color": "white" });
        }
    })
})

// Form validationv

// var main = function () {
//     $('form').submit(function () {
//         var firstName = $('#name').val();

//         if (firstName === "") {
//             $('.first-name-error').text('Please enter your first name.')
//         }

//         return false;
//     });
//     $(document).ready(main);

var main = function () {
    $('form').submit(function () {
        var name = $('#name').val();

        if (name === "") {
            $('.first-name-error').text('Please enter your first name')
        }

        return false;
    });

    $('form').submit(function () {
        var lastName = $('#lastname').val();

        if (lastName === "") {
            $('.last-name-error').text('Please enter your last name')
        }

        return false;
    });

    $('form').submit(function () {
        var restaurantname = $('#restaurantname').val();

        if (restaurantname === "") {
            $('.restaurant-name-error').text('Please enter Restaurant Name')
        }

        return false;
    });

    $('form').submit(function () {
        var phonenumber = $('#phonenumber').val();

        if (phonenumber === "") {
            $('.contact-error').text('Please enter Contact Number')
        }

        return false;
    });

    $('form').submit(function () {
        var email = $('#email').val();

        if (email === "") {
            $('.email-error').text('Please enter your email address.')
        };

        if (email === "vishwakarmavishal695@gmail.com") {
            $('.email-error').text('This email is already taken.')
        }

        return false;
    })

    $('form').submit(function () {
        var password = $('#password').val();

        if (password === "") {
            $('.password-error').text('Please enter a password.')
        };

        if (password.length < 8 && password.length > 1) {
            $('.password-error').text('Short passwords are easy to guess. Try one with at least 8 characters.')
        }

        return false;
    });


}

$(document).ready(main);

$(function () {  // $(document).ready shorthand
    $('.monster').fadeIn('slow');
});

$(document).ready(function () {

    /* Every time the window is scrolled ... */
    $(window).scroll(function () {

        /* Check the location of each desired element */
        $('.hideme').each(function (i) {

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object) {

                $(this).animate({ 'opacity': '1' }, 1500);

            }

        });

    });

});


$(function () {

    var slideCount = $(".slider ul li").length;
    var slideWidth = $(".slider ul li").width();
    var slideHeight = $(".slider ul li").height();
    var slideUlWidth = slideCount * slideWidth;

    $(".slider").css({ "max-width": slideWidth, "height": slideHeight });
    $(".slider ul").css({ "width": slideUlWidth, "margin-left": - slideWidth });
    $(".slider ul li:last-child").prependTo($(".slider ul"));

    function moveLeft() {
        $(".slider ul").stop().animate({
            left: + slideWidth
        }, 700, function () {
            $(".slider ul li:last-child").prependTo($(".slider ul"));
            $(".slider ul").css("left", "");
        });
    }

    function moveRight() {
        $(".slider ul").stop().animate({
            left: - slideWidth
        }, 700, function () {
            $(".slider ul li:first-child").appendTo($(".slider ul"));
            $(".slider ul").css("left", "");
        });
    }


    $(".next").on("click", function () {
        moveRight();
    });

    $(".prev").on("click", function () {
        moveLeft();
    });


});


$(document).ready(function () {
    $('.hvr-grow1').click(function () {
        // $('h2.feature1').hide();
        $('.card-text-scan').show();
        $('.card-title-scan').show();
        $('.card-title-database').hide();
        $('.card-title-network').hide();
        $('.card-text-database').hide();
        $('.network').hide();
        $('.hvr-grow3').css({ 'background': 'none' });
        $('.hvr-grow1').css({ 'background': 'white' });
        $('.hvr-grow2').css({ 'background': 'none' });
        $('.diamond3').css({ 'backgroundImage': 'url(../images/share1.png)' });
        $('.diamond2').css({ 'backgroundImage': 'url(../images/tray1.png)' });
        $('.diamond1').css({ 'backgroundImage': 'url(../images/scan1_inv.png)' });
    });
});

$(document).ready(function () {
    $('.hvr-grow2').click(function () {
        // $('h2.feature1').hide();
        $('.card-text-scan').hide();
        $('.card-title-database').show();
        $('.card-title-scan').hide();
        $('.card-title-network').hide();
        $('.card-text-database').show();
        $('.network').hide();
        $('.hvr-grow3').css({ 'background': 'none' });
        $('.hvr-grow1').css({ 'background': 'none' });
        $('.hvr-grow2').css({ 'background': 'white' });
        $('.diamond3').css({ 'backgroundImage': 'url(../images/share1.png)' });
        $('.diamond1').css({ 'backgroundImage': 'url(../images/scan1.png)' });
        $('.diamond2').css({ 'backgroundImage': 'url(../images/tray1_inv.png)' });
    });
});


$(document).ready(function () {
    $('.hvr-grow3').click(function () {
        // $('h2.feature1').hide();
        $('.card-text-scan').hide();
        $('.card-title-database').hide();
        $('.card-title-scan').hide();
        $('.card-text-scan').hide();
        $('.network').show();
        $('.card-text-database').hide();
        $('.card-title-network').show();
        $('.hvr-grow3').css({ 'background': 'white' });
        $('.hvr-grow1').css({ 'background': 'none' });
        $('.hvr-grow2').css({ 'background': 'none' });
        $('.diamond3').css({ 'backgroundImage': 'url(../images/share1_inv.png)' });
        $('.diamond2').css({ 'backgroundImage': 'url(../images/tray1.png)' });
        $('.diamond1').css({ 'backgroundImage': 'url(../images/scan1.png)' });
    });
});








// TESTING JS
/*jslint plusplus: true */
/*global $, jQuery, console, alert, prompt */

$('.carousel').carousel();


