(function($) {

    $(window).ready(function(){

        var elem = $('.field--name-field-conditions .field--item .paragraph--type--jobs-conditions'),
            front_class = "front-section",
            back_class = "back-section",
            elem_to_front = $('.field--name-field-title, .field--name-field-image'),
            elem_to_back = $('.field--name-field-description'),
            clone = $('.field--name-field-title');

        elem.each(function(){
            var self = $(this);
          self.append('<div class='+ front_class +'></div><div class='+ back_class +'></div>');

          self.find('.' + front_class).append(self.find(elem_to_front));
          self.find('.' + back_class).append(self.find(elem_to_back));
          self.find('.' + back_class).append(self.find(clone).clone());
        });


    });

})(jQuery);