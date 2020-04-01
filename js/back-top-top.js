var btn = $('.back-to-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 100) {
    // btn.addClass('show');
    btn.fadeIn();
  } else {
    btn.fadeOut();

    // btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '100');
});