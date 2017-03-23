define([
  'router',
  'view_mainview',
  'model_product',
  //'hammerjs',
  //'materialize'
  ],
  
  function(Router, MainView, ProductModel/*, HammerJs, Materialize*/) {

  var App = {
    initialize: function() {
      Router.initialize();
      console.log("hola Mundo");
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
