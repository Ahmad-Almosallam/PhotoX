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

    $('.gallery-list-item').click(function() {
        let value = $(this).attr('data-filter');
        if (value === 'all') {
            $('.filter').show(300);
        } else {
            $('.filter').not('.' + value).hide(300);
            $('.filter').filter('.' + value).show(300);
        }
    });

    $('.gallery-list-item').click(function() {
        $(this).addClass('active-item').siblings().removeClass('active-item');

    })
});