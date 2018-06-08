(function($) {
    $(document).ready(function(){

        var show = true;
        $(window).on("scroll", function () {

            if(!show) return false;

            var w_top = $(window).scrollTop();
            var e_top = $(".block-block-contente7e71ecf-9e5d-4c6b-9856-6942958c6cae").offset().top;

            // console.log(w_top + 650 + " " + e_top);

            if(w_top + 650 >= e_top){


              $(".field--name-field-number").addClass('animation-bounce');
                // $(".field--name-field-number").show("scale", 600, function() {
                //     // $(this).effect("bounce", 1000);
                // });

                // $(".field--name-field-number").animate({
                //     transform: "scale(1)"
                // }, 3000, function() {
                //     $(this).effect("bounce", "slow");
                // });

                show = false;
            }
        });
    });
})(jQuery);