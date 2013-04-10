(function($) {
  $.fn.balance = function (option) {
    return this.each(function() {
      var $this = $(this),
        data    = $this.data(),
        options = $.extend({}, $.fn.balance.defaults, option, data),
        classes = options.cssClass,
        height  = 0;

      // align bottom
      if (options.align == 'bottom') {
        classes += ' ' + options.cssClass + '-bottom';
      }
      
      // balance height child elements 
      // by setting the max height
      $this.find(options.selector).addClass(classes).each(function() {
        var elHeight = $(this).outerHeight(true);
        if (elHeight > height) height = elHeight;
      }).outerHeight(height);
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