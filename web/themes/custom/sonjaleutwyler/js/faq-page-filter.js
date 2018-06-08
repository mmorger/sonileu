(function ($) {
  Drupal.behaviors.faqFilter = {
    attach: function (context, settings) {
      //Search filters
      var activeClass = 'active-filter',
        _filters = 'filter-link';

      var filterClick = function (elem, event) {
        var isActive = elem.hasClass(activeClass),
          filter_tid = elem.attr('filter_tid'),
          _location;
        _location = window.location;
        if (isActive) {
          event.preventDefault();
        } else {
          elem.addClass(activeClass);
          if (elem.hasClass('select-all')) {
            window.location.href = _location.origin + _location.pathname;
          }
          else {
            window.location.search = '?field_faq_category_target_id[]=' + filter_tid;
          }
        }
      };

      var checkActiveFilters = function () {
        var search = window.location.search.replace('?', ''),
          elements = search.split('&');
        if (search.length == 0) {
          $('.' + _filters + '.select-all').addClass(activeClass);
        }
        else {
          $.each(elements, function (_idx, _item) {
            var _ar = _item.split('=');
            var _value = _ar[1];
            $('.' + _filters + '[filter_tid="' + _value + '"]').addClass(activeClass);
          });
        }
      };

      $(document).ready(function() {
        checkActiveFilters();
      });

      $('.' + _filters).once().on('click', function (event) {
        event.preventDefault();
        filterClick($(this), event);
      });
    }
  }
})(jQuery);