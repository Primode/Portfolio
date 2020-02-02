$(document).ready(function() {
    $('.menu-toggle').click(function() {
        $('.menu').slideToggle(300);
});

$(window).resize(function() {		
    if (  $(window).width() > 300 ) {			
        $('.menu').removeAttr('style');
        }
    });
});