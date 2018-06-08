 (function($) {

     $('.views-row > .views-field-field-question').click(function (){

         // $(this).toggleClass('views-field-field-question2', 8000 ).addClass('is-visited');
         $(this).toggleClass('views-field-field-question2', 8000 );
         $(this).siblings('.views-field-field-answer').slideToggle();
         $('.views-row .views-field-field-question').not(this).siblings('.views-field-field-answer').slideUp('slow');
         $('.views-row .views-field-field-question').not(this).removeClass('views-field-field-question2').addClass('.views-field-field-question');
         // $(this).find('span').addClass('is-visited');

     });

     $(window).ready(function(){
        var count = $('#edit-field-faq-category-target-id > option').length;
        $('#edit-field-faq-category-target-id').attr('size',count);
     });

     $( '#edit-field-faq-category-target-id' ).click(function() {
         $( '#views-exposed-form-faq-block-1')[0].submit();
     });

 })(jQuery);