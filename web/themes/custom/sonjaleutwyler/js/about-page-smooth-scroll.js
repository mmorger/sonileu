(function($) {

  //Animation for scrolling
  $(".block-block-contentd629d8dd-e35f-4ba6-8b86-a88f7d442006 > .container > .field--name-body > p > a").on("click", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top - $('.region-header-nav').height(); // top - header.height
    $('body,html').animate({scrollTop: top}, 1500);
  });
})(jQuery);