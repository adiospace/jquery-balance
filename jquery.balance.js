(function($) {
  $.fn.balance = function (option) {
    return this.each(function() {
      var $this = $(this),
        data    = $this.data(),
        options = $.extend({}, $.fn.balance.defaults, option, data),
        $parent = options.parent || $this,
        $children = $parent.find(options.selector),
        classes = options.cssClass,
        height  = 0;

      function setChildrenMaxHeight() {
        $children.css({minHeight: 0});

        if($(window).width() > options.minWidth){
          var maxElHeight = Math.ceil(Math.max.apply(null, $children.map(function() {
            return $(this).height(); 
          }))) + 'px';
          $children.css({minHeight: maxElHeight});
        }
      }

      // align bottom
      if (options.align == 'bottom') {
        classes += ' ' + options.cssClass + '-bottom';
      }

      // balance height child elements 
      // by setting the max height
      $children.addClass(classes);
      setChildrenMaxHeight();
      if(options.updateResize == true) {
        $(window).on('resize', function(){
          setChildrenMaxHeight();
        });
      }
    });
  };

  $.fn.balance.defaults = {
    align: 'top', // top or bottom
    selector: '.balanced',
    cssClass: 'balanced',
    minWidth: 0,
    updateResize: false
  };

  // data-api
  $('[data-toggle=balance]').balance();
})(jQuery);
