var introHeight = 0;

$(document).ready(function() {
    /* Foundation */
    $(document).foundation();
    
    /* Tooltips */
    $('.tooltip').tooltipster({
        theme: 'tooltip-theme'
    });
    $('.basics-tooltip').tooltipster({
        position: 'bottom',
        theme: 'tooltip-theme'
    });
    
    /* Stretch intro section */
    var totalHeight = $(window).height(),
        headerHeight = $("#header").height() + 4;
    introHeight = totalHeight - headerHeight;
    $("#intro").height(introHeight - 120);
    
    /* Slick */
    $(document).ready(function() {
        $(".skills-slider").slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: true
        });
    });
});

function toBasics() {
    $("body").animate({scrollTop:introHeight}, 1500);
}

function backToTop() {
    $("body").animate({scrollTop:0}, 1500);
}
