(function initPageSliders() {
  (function($) {
    "use strict";

    // Fullwidth slider
    $(".fullwidth-slider").owlCarousel({
      slideSpeed: 350,
      singleItem: true,
      autoHeight: true,
      navigation: true,
      navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
      ]
    });
  })(jQuery);
})();
