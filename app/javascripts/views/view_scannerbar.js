define([
  'backbone',
  'text!templates/scannerbar.html'
], 

function(Backbone, scannerbar_t) {
  var ScannerbarView = Backbone.View.extend({
    tagName: 'div',
    className: 'scannerbar-view',

    initialize: function() {
      // to do on initialize
      this.render();
    },

    render: function() {
      var view = this;
      view.$el.append(scannerbar_t);
    }

  })

  return ScannerbarView;
});