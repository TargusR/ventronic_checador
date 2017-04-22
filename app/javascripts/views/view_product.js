define([
  'backbone',
  'text!templates/product.html'
], 

function(Backbone, product_t) {
  var ProductView = Backbone.View.extend({
    tagName: 'div',
    className: 'product-view',

    events: {
    },

    initialize: function() {
      // to do on initialize
      //this.render();
    },

    render: function() {
      var view = this;

      view.dataError = false;
      view.dataErrorMsg = '';

      if(App.productModel.isEmpty()){
        view.dataError = true;
        view.dataErrorMsg = "No se ha descargado ningún contenido";
      }

      else if(typeof App.productModel.attributes.error !== "undefined") {
        view.dataError = true;
        view.dataErrorMsg = App.productModel.attributes.error;
      }

      
      var product = App.productModel.attributes;

      var data = {
        product_error: view.dataError,
        product_error_message: view.dataErrorMsg,
        product_name: typeof product.nombre === 'undefined' ? "No se ha proporcionado un nombre" : product.nombre,
        product_preciom: typeof product.preciom === 'undefined' ? "No se ha proporcionado un precio mayoreo" : product.preciom,
        product_preciop:  typeof product.preciop === 'undefined' ? "No se ha proporcionado un precio publico" : product.preciop,
        product_stock:  typeof product.stock === 'undefined' ? "No se ha proporcionado una cantidad" : product.stock,
        product_img:  typeof product.url === 'undefined' ? "images/no_description.png" : C.image_server + product.url
      }

      view.$el.empty().append(
        $$( {
          name: 'product',
          content: product_t
        }, data )
      );
    },

    show: function() {
      var view = this;
      var container = view.$el.find(".product-container");
      container.removeClass("product-container-hide");
      container.addClass("product-container-show");
    },

    hide: function() {
      var view = this;
      var container = view.$el.find(".product-container");
      container.removeClass("product-container-show");
      container.addClass("product-container-hide");
    }

  });

  return ProductView;
});