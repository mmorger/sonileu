(function($) {
  var $stickySection = $('.block-views-blockbranch-menu-block-1'),
      $header = $('.region-header-nav '),
      stickyClass = 'sticky-menu';
  $(window).on('scroll ready resize',function() {
    if (window.innerWidth > 767) {
      if ($(window).scrollTop() > ($stickySection.offset().top  - $header.height())) {
        $stickySection.addClass(stickyClass);
      } else {
        $stickySection.removeClass(stickyClass);
      }
    }
  })
})(jQuery);