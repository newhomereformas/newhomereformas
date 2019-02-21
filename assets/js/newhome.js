
// Transition to any anchor smoothly
$(function() {
  $('a[href^=#]:not([href=#navPanel])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1500);
        return false;
      }
    }
  });
});

// Slider
jQuery('#slider-home').slippry({
  // general elements & wrapper
  slippryWrapper: '<div class="sy-box pictures-slider" />', // wrapper to wrap everything, including pager
  // options
  adaptiveHeight: false, // height of the sliders adapts to current slide
  captions: false, // Position: overlay, below, custom, false
  // pager
  pager: false,
  // controls
  controls: false,
  autoHover: false,
  // transitions
  transition: 'kenburns', // fade, horizontal, kenburns, false
  kenZoom: 100,
  speed: 2500 // time the transition takes (ms)
});

jQuery('#slider-post').slippry({
  auto: false,
  adaptiveHeight: false
});

// Privacy policy toggle
$("#pp").click( function(){
  if ( $("#conditions").css('display') == 'none' ) {
    $("#conditions").show();
  }
  else {
    $("#conditions").hide();
  }
});
