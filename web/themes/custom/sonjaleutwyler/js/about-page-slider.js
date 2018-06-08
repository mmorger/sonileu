(function($) {
    $(window).ready(function(){
        $('.field--name-field-slide').flickity({
            imagesLoaded: true,
            wrapAround: true,
            pageDots: false,
            arrowShape: {
                x0: 45,
                x1: 70, y1: 50,
                x2: 75, y2: 50,
                x3: 50
            }
        });
    });
})(jQuery);