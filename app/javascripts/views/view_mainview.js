define([
  'backbone',
  'dragscroll',
  'view_scannerbar',
  'view_product',
  'text!templates/main.html'
], 

function(Backbone, Dragscroll, ScannerBarView, ProductView, main_t) {
  var MainView = Backbone.View.extend({
    el: $('#app_container'),
    tagName: 'div',
    className: 'main-view',

    initialize: function() {
      this.scannerBarView = new ScannerBarView;
      this.productView = new ProductView;
      this.render();
    },

    hideAbout: function() {
      var about = $(".about");
      about.addClass("about-hide");
      setTimeout(function () {
        about.removeClass("about-show");
      }, 710);
    },

    showAbout: function() {
      var about = $(".about");
      about.addClass("about-show");
      about.removeClass("about-hide");
    },

    transformShowProduct: function() {
      var mainview = this;
      var home = mainview.$el.find(".home-wrapper");
      home.addClass("product-mode");
    },

    restoreHome: function() {
      var mainview = this;
      var home = mainview.$el.find(".home-wrapper");
      home.removeClass("product-mode");
    },

    render: function() {
      var mainview = this;
      mainview.$el.append(main_t);

      var scannerBarContainer = mainview.$el.find('#scannerbar');
      scannerBarContainer.append(mainview.scannerBarView.$el);

      var productContainer = mainview.$el.find('#product');
      productContainer.append(mainview.productView.$el);

      // Eventos sobre elementos fuera de este view y de App_container; Acción no estandar
      var aboutShow = $('.button-info');
      aboutShow.click(mainview.showAbout);

      var aboutClose = $('.about .button-close');
      aboutClose.click(mainview.hideAbout);
    }
    
  })

  return MainView;
});