/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-timecop',

  treeForVendor() {
    var path = require('path');
    var Funnel = require('broccoli-funnel');
    var timecopPath = path.dirname(require.resolve('timecop'));
    var baseTree = this.treeGenerator(timecopPath);

    return new Funnel(baseTree, {
      destDir: 'timecop'
    });
  },

  included: function(app) {
    this._super.included(app);

    if (app.env !== 'production') {
      this.app.import('vendor/timecop/timecop.js');
    }
  }
};
