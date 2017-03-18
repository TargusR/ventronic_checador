define([
  'backbone'
], 

function(Backbone) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      'show': 'show_product'
    },

    show_product: function() {
      console.log("Showing Product!");
    }

  })
  
  var initialize = function() {
    var app_router = new AppRouter

    // app_router.on('route:testRouter', function() {
    //   console.log('Testing router from initialize binding')
    // })

    Backbone.history.start()
  }

  return {initialize: initialize}
})