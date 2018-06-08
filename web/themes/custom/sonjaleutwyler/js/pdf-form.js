(function($) {

    $('.block-block-contenta3c585e7-bea9-43f5-91cc-fd6a1ecb8b29, .block-block-content280bdb09-8acd-48f5-b8be-bbe157a58ac7').find('.field--name-body a.btn-custom[href="#"]').on('click', function (e) {
      e.preventDefault();
      $(this).parents('.block-block-contenta3c585e7-bea9-43f5-91cc-fd6a1ecb8b29,.block-block-content280bdb09-8acd-48f5-b8be-bbe157a58ac7').next('.block-webform-block').slideToggle();

      //Animation for scrolling
      var elem = $(this).parents('.block-block-contenta3c585e7-bea9-43f5-91cc-fd6a1ecb8b29,.block-block-content280bdb09-8acd-48f5-b8be-bbe157a58ac7').next('.block-webform-block'),
        top = elem.offset().top - $('.region-header-nav').height(); // top - header.height
      $('body,html').animate({scrollTop: top}, 1000);
    });


})(jQuery);