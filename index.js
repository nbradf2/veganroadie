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
    if ($('.animHead').hasClass('open-nav')) {
        $('.animHead').removeClass('open-nav');
    } else {
        $('.animHead').addClass('open-nav');
    }
});

$('.animHead li a').click(function() {
    if ($('.animHead').hasClass('.open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.animHead').removeClass('open-nav');
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