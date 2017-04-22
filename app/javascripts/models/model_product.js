define([
  'backbone'
  ],

  function(Backbone) {
    var ProductModel = Backbone.Model.extend({

      fetchProduct: function(barcode, callbackOn, callbackOff) {
        var model = this;
        model.url = C.api + '?codigo=' + barcode;
        model.data_type = 'Producto';
        var ProductoSuccess = function(model, response, options) {
          callbackOn();
        }
        var ProductoError = function() {
          console.log("ERROR: Can't reach data source");
          callbackOff();
        }
        model.fetch({
          success: ProductoSuccess,
          error: ProductoError,
          reset: false,
          remove: false
        })
      }

    });

    return ProductModel;
  }
);