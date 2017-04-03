define([
  'backbone',
  'text!templates/scannerbar.html'
], 

function(Backbone, scannerbar_t) {
  var ScannerbarView = Backbone.View.extend({
    tagName: 'div',
    className: 'scannerbar-view',

    events: {
      "click .close-form": "backToHome",
      "submit #scannerbar-form": "routeChange",
      "keyup #search": "checkInput"
    },

    initialize: function() {
      // to do on initialize
      this.render();
    },

    render: function() {
      var view = this;
      view.$el.append(scannerbar_t);
    },

    backToHome: function() {
      App.Router.home();
    },

    clean: function() {
      var view = this;
      view.$el.find('#search').val('');
    },

    routeChange: function(e) {
      e.preventDefault();
      var view = this;
      var code = view.$el.find('#search').val();
      App.Router.show_product(code);
    },

    checkInput: function(e) {
      var view = this;
      content = view.$el.find('#search').val();

      console.log("Your input is: " + content);
    }

  })

  return ScannerbarView;
});