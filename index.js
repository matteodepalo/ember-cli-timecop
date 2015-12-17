/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-cli-timecop',

  treeFor: function(name) {
    if (name !== 'vendor') { return; }

    var assetsPath = require('path').join('timecop', 'timecop.js');
    return this.treeGenerator(require.resolve('timecop').replace(assetsPath, ''));
  },

  included: function(app) {
    this._super.included(app);

    if (app.env !== 'production') {
      this.app.import('vendor/timecop/timecop.js');
    }
  }
};
