(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': self['printJS']
    };
  }

  define('print-js', [], vendorModule);
})();
