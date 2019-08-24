$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 50) {
            $(".mililogo_inv").css({ "color": "black!important" });
        }
        else {
            $(".mililogo_inv").css({ "color": "white!important" });
        }
    })
})