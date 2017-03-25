define([
  'backbone'
], 

function(Backbone) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'home',
      'show/:option': 'show_product',
      'test/': 'testing'
    },

    testing: function() {
      console.log("Routing!!");
    },

    home: function() {
      App.mainView.restoreHome();
      App.mainView.scannerBarView.clean();
    },

    show_product: function(code) {
      var onSucess = function() {
        //console.log("Si se Pudo");
        App.mainView.transformShowProduct();
      }

      var onError = function() {
        console.log("No se pudo");
      }

      console.log("Showing Product: " + code);
      App.productModel.fetchProduct(code, onSucess, onError);
    }

  });
  
  var initialize = function() {
    var app_router = new AppRouter;

    //Backbone.history.start();

    // Está pasando algo extraño y este método no es para nada convencional
    return app_router;
  }

  return {initialize: initialize};
});