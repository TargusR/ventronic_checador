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
      App.mainView.productView.hide();
      setTimeout(function () {
        App.mainView.restoreHome();
        App.mainView.scannerBarView.clean();
      }, 400);
    },

    show_product: function(code) {
      var onSucess = function() {
        //console.log("Si se Pudo");
        App.mainView.productView.render();
        App.mainView.transformShowProduct();
        setTimeout(function () {
          App.mainView.productView.show();
        }, 400);
      }

      var onError = function() {
        //console.log("No se pudo");
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