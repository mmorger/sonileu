(function($) {

  $(window).ready(function(){
    if ($('select#edit-branch-select').val() == 0) {
      $('select#edit-branch-select').css({
        'color': '#ababab'
      });
    };
  });

  $('select#edit-branch-select').change(function(){
    if ($(this).val() == 0) {
      $(this).css({
        'color': '#ababab'
      });
    } else {
      $(this).css({
        'color': '#000'
      });
    }
  });

  var nav = $('.region.region-header-nav'),
      invertClass = 'invert-header',
      openNavClass = 'open-nav',
      openButtonClass = 'open-mobile-menu',
      closeButtonClass = 'close-mobile-menu',
      noScrollClass = 'off-scroll';

  $(window).on('load scroll resize',function(){
    var win_pos = $(window).scrollTop();
    if (win_pos > nav.height()/2) {
      nav.addClass(invertClass);
    } else {
      nav.removeClass(invertClass);
    }
  });

  $(window).ready(function(){
    nav.append('<a class='+ closeButtonClass +'><div></div><div></div><div></div></a>');
    nav.append('<a class='+ openButtonClass +'><div></div><div></div><div></div></a>');
    $('.region-header').append('<a id = "downScroll" href="#main-content"></a>');

    //Animation for scrolling
      $(".region-header").on("click","#downScroll", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top - 45; // top - header.height
        $('body,html').animate({scrollTop: top}, 1500);
      });
  });


  $(window).on('resize',function(){
    if (window.innerWidth > 767) {
      $('body').removeClass(noScrollClass);
    }
  });

  nav.on('click','.' + openButtonClass ,function(){
    nav.addClass(openNavClass);
    $('html,body').addClass(noScrollClass);
    $(document).bind('touchmove', function(e){e.preventDefault()});
  });

  nav.on('click','.' + closeButtonClass ,function(){
    nav.removeClass(openNavClass);
    $('html,body').removeClass(noScrollClass);
    $(document).unbind('touchmove');
  });


  //Scrolling after page loading

  //TODO Need changes
  $(window).ready(function(){
    if (window.location.hash) {
      $('body,html').scrollTop(0);
    }
  })

  // document.addEventListener("DOMContentLoaded", function(){
  //   if (window.location.hash) {
  //     window.scrollTo(0,0);
  //   }
  // });

  $(window).on('load',function(){
    if (window.location.hash) {
      var id = window.location.hash,
        top = $(id).offset().top - $('.region-header-nav').height();
      $('body,html').animate({scrollTop: top}, 1500);
    }
  });

  $('footer.footer a').on('click',function(e){
    var location = window.location.href,
        id = $(this).attr('href').replace(window.location.pathname,'').replace('/',''),
        link = $(this).attr('href').replace(id,'');

    if ((location.indexOf(link) + 1)&&(window.location.hash === id)&&(window.location.hash)) {
      e.preventDefault();
      var top = $(id).offset().top - $('.region-header-nav').height();
      $('body,html').stop().animate({scrollTop: top}, 1500);
    }
  });

  $('#block-languageswitcher .links').on('click',function(){
    var activeClass = 'open';
    if (window.innerWidth > 767) {
      if ($(this).hasClass(activeClass)) {
        $(this).removeClass(activeClass);
        $(this).find('li:not(".is-active")').stop().css('display','inline-block').toggle("slide");
      } else {
        $(this).addClass(activeClass);
        $(this).find('li:not(".is-active")').stop().toggle("slide",function(){
          $(this).css('display','inline-block');
        }).css('display','inline-block');
      }
    }
  })

  $('#block-languageswitcher .links li a').on('click',function(e){
    if ($(this).hasClass('is-active')) {
      e.preventDefault();
    }
    if (window.innerWidth > 767) {
      if (!$('#block-languageswitcher .links').hasClass('open')) {
        e.preventDefault();
      }
    }
  })

})(jQuery);