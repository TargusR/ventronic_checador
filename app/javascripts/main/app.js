define([
  'router',
  'view_mainview',
  'model_product',
  ],
  function(Router, MainView, ProductModel) {

  var App = {
    initialize: function() {
      Router.initialize();
      console.log("hola Mundo");
    },

    start: function() {
      App.mainView = new MainView;
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
