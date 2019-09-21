// Sticky Header

$(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
        $('.animHead').addClass('sticky');
    } else {
        $('.animHead').removeClass('sticky');
    }
});

//Mobile Nav

$('.mobileToggle').click(function() {
    if ($('.animHead').hasClass('openNav')) {
        $('.animHead').removeClass('openNav');
    } else {
        $('.animHead').addClass('openNav');
    }
});

$('.animHead li a').click(function() {
    if ($('.animHead').hasClass('openNav')) {
        $('.navigation').removeClass('openNav');
        $('.animHead').removeClass('openNav');
    }
})

// Nav Scroll

$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $(html, body).animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
})