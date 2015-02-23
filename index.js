/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-cli-timecop',

  treeFor: function(name) {
    if (name !== 'vendor') { return; }

    return this.treeGenerator(path.join(__dirname, 'node_modules'));
  },

  included: function(app) {
    this._super.included(app);

    if (app.env !== 'production') {
      this.app.import('vendor/timecop/timecop.js');
    }
  }
};
