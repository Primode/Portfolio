$('a').click(function(){
    var $href = $(this).attr('href');
    var $anchor = $($href).offset().top - 63;
    $('html, body').animate({ scrollTop: $anchor }, 1000);
    return false;
});