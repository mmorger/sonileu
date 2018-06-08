(function($) {

  var $button = $('.toogle-section'),
      $section = $('.addons-list');

  $(window).ready(function(){
    $section.hide();

    $('.addons-list .addon-item > label .title').matchHeight({byRow: false});
    $('.addons-list .addon-item > label .description').matchHeight({byRow: false});

    $.fn.matchHeight._update();
  });


  $button.on('click',function(e){
    e.preventDefault();
    $(this).toggleClass('active');
    $section.stop().slideToggle('');
  })

})(jQuery);