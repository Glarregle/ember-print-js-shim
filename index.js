'use strict';

module.exports = {
  name: 'ember-print-js-shim',

  included() {
    this._super.included.apply(this, arguments);
    this.importDependencies();
  },

  importDependencies() {
    this.import(
      {
        development: 'node_modules/print-js/dist/print.js',
        production: 'node_modules/print-js/dist/print.min.js'
      }
    );
    this.import('node_modules/print-js/dist/print.min.css');
    this.import('vendor/print-js-shim.js');

  }

};
