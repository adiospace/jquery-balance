(function($) {
  $.fn.balance = function (option) {
    return this.each(function() {
      var $this = $(this),
        data    = $this.data(),
        options = $.extend({}, $.fn.balance.defaults, option, data),
        $children = $this.find(options.selector),
        classes = options.cssClass,
        height  = 0;

      // align bottom
      if (options.align == 'bottom') {
        classes += ' ' + options.cssClass + '-bottom';
      }
      // balance height child elements 
      // by setting the max height
      $children
        .addClass(classes)
        .height(Math.ceil(Math.max.apply(null, $children.map(function() {
          return $(this).height(); 
      }))));
    });
  };

  $.fn.balance.defaults = {
    align: 'top', // top or bottom
    selector: '.balanced',
    cssClass: 'balanced'
  };

  // data-api
  $('[data-toggle=balance]').balance();
})(jQuery);