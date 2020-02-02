        function update() {
            if ($(window).scrollTop() > 1) {
    $('nav').attr('class', 'nav-active');
  } else {
    $('.nav-active').attr('class', 'nav');
  }
}
setInterval(update, 0);