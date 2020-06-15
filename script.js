$(document).ready(function() {
    var nav_button = $('.nav-button');
    nav_button.click(function() {
        nav_button.toggleClass('change');
    });

    $(window).scroll(function() {
        let pos = $(this).scrollTop();
        if (pos >= 200) {
            $('.nav-menu').addClass('custom-navbar');
        } else {
            $('.nav-menu').removeClass('custom-navbar');
        }
    });

    $(window).scroll(function() {
        let pos = $(this).scrollTop();
        if (pos >= 650) {
            $('#img-anim').addClass('fromLeft');
            $('#text-anim').addClass('fromRight');
        } else {
            $('#img-anim').removeClass('fromLeft');
            $('#text-anim').removeClass('fromRight');
        }
    });
});