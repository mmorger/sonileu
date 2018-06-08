(function($) {

  $.event.special.loadimg = {
    add: function (hollaback) {
      if ( this.nodeType === 1 && this.tagName.toLowerCase() === 'img' && this.src !== '' ) {
        // Image is already complete, fire the hollaback (fixes browser issues were cached
        // images isn't triggering the load event)
        if ( this.complete || this.readyState === 4 ) {
          hollaback.handler.apply(this);
        }

        // Check if data URI images is supported, fire 'error' event if not
        else if ( this.readyState === 'uninitialized' && this.src.indexOf('data:') === 0 ) {
          $(this).trigger('error');
        }

        else {
          $(this).bind('load', hollaback.handler);
        }
      }
    }
  };

  $('.field--name-field-desktop-image img, .views-field-field-branch-image img').on('loadimg',function(e){
    $(this).fadeIn(100);
  })

})(jQuery);