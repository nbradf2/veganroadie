// Sticky Header

$(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
        $('.animHead').addClass('sticky');
    } else {
        $('.animHead').removeClass('sticky');
    }
});