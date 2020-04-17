//Preloader
// jQuery(window).load(function () {
//     $('#load').delay(500).fadeOut('slow');
//     $('#preloader').delay(900).fadeOut('slow');
//     $('body').delay(900).css({
//         'overflow': 'visible',
//     });
// });
jQuery(document).ready(function(){
    var sideMenuHeight = $(window).height() - parseInt($('.side-menu').css('margin-top').substring(0, $('.side-menu').css('margin-top').length - 1));
    var rightMenuHeight = $(window).height() - parseInt($('.right-menu').css('margin-top').substring(0, $('.right-menu').css('margin-top').length - 1));
    $('.side-menu').css({
        'max-height': sideMenuHeight + 'px',
    })
    $('.right-menu').css({
        'max-height': rightMenuHeight + 'px',
    })
    $(window).resize(function(){
        var sideMenuHeight = $(window).height() - parseInt($('.side-menu').css('margin-top').substring(0, $('.side-menu').css('margin-top').length - 1));
        $('.side-menu').css({
            'max-height': sideMenuHeight + 'px',
        })
        var rightMenuHeight = $(window).height() - parseInt($('.right-menu').css('margin-top').substring(0, $('.right-menu').css('margin-top').length - 1));
        $('.right-menu').css({
            'max-height': rightMenuHeight + 'px',
        })
    })
});