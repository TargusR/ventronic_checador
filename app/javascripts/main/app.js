define([
  'backbone',
  'router',
  'view_mainview',
  'model_product'
  ],
  
  function(Backbone, Router, MainView, ProductModel) {

  var App = {
    initialize: function() {
      Router.initialize();
      console.log("App Initialized: Backbone v" + Backbone.VERSION);
      this.start();
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
