(function($) {

  function accordionAnimate($elem,from_n, duration_d){
    var duration = duration_d || 1000,
      elems_l = $elem.length,
      duration_per_elem = duration/elems_l,
      from = from_n || 1;

    for (var i = from; i <= elems_l; i++) {
      $elem.eq(i-1)
        .delay((i-1)*duration_per_elem)
        .slideDown(duration_per_elem);
    }
  }

    $(document).ready(function() {
        $('.block-views-blockmilestones-block-1 a').on('click', function (e) {
            e.preventDefault();

          accordionAnimate($('.block-views-blockmilestones-block-1 .views-row'),5, 700);

            // $('.block-views-blockmilestones-block-1 .views-row').css('display', 'block');
            $('.block-views-blockmilestones-block-1 .views-field-body').addClass('after-height');
            $('.block-views-blockmilestones-block-1 .view-footer').hide(0);

        });
    });
})(jQuery);