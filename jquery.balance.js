(function($) {
  $.fn.balance = function (config) {

    return this.each(function() {
      var $this = $(this);
      var data = $this.data();
      var options = $.extend({}, $.fn.balance.defaults, config, data);
      var classes = options.cssClass, height = 0;
      var sel = options.selector;
      var align = options.align;

      if (align == 'bottom') classes += ' ' + options.cssClass + '-bottom';
      $this.find(sel).addClass(classes).each(function() {
        var elHeight = $(this).outerHeight(true);
        if (elHeight > height) height = elHeight;
      }).outerHeight(height);
    });
  };

  $.fn.balance.defaults = {
    align: 'bottom', // top or bottom
    selector: '.balanced',
    cssClass: 'balanced'
  };

  // data-api
  $('[data-toggle=balance]').balance();
})(jQuery);