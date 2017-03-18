define([
  'router',
  'model_product',
  'view_mainview',
  'view_scannerbar',
  'view_product'
  ],
  function(Router, ProductModel, MainView, ScannerBar, ProductView) {

  var App = {
    initialize: function() {
      Router.initialize();
      console.log("hola Mundo");
    },

    register: function(globalName) {
      if(typeof(globalName) == 'undefined') {
        globalName = 'App';
      }
      window[globalName] = this;
    }
  }

  return App;
})
