$(document).ready(function () {

    $('.services-block__item__image-services').imagesLoaded(function () {
        console.log('all images are loaded');
    }).imagefill();
    $('.portfolio-block__item__image-work').imagesLoaded(function () {
        console.log('all images are loaded');
    }).imagefill();


    $(window).resize(function () {
        if ($(window).width() > 768) {
            if ($('#main-menu-button').hasClass('open')) {
                $('#main-menu-button').removeClass('open');
                $('#main-menu').removeClass('main-menu--menu-show');
            }
        }
    });

    /* menu */
    $('#main-menu-button').click(function () {
        $(this).toggleClass('open');
        $('#main-menu').toggleClass('main-menu--menu-show');
    });
    $('#main-menu').find('a').click(function () {
        $('#main-menu-button').removeClass('open');
        $('#main-menu').removeClass('main-menu--menu-show');
    });

});