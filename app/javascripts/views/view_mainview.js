define([
  'backbone',
  'dragscroll',
  'view_scannerbar',
  'view_product',
  'text!templates/main.html'
], 

function(Backbone, Dragscroll, ScannerBarView, ProducView, main_t) {
  var MainView = Backbone.View.extend({
    el: $('#app_container'),
    tagName: 'div',
    className: 'main-view',

    initialize: function() {
      this.scannerBarView = new ScannerBarView;
      /*
      this.navigationView = new NavigationView;
      this.headerView = new HeaderView;
      this.feedsView = new FeedsView;
      this.contentView = new ContentView;
      this.itemModalView = new ItemModalView;
      this.caleidoscopioModalView = new CaleidoscopioModalView;
      this.filView = new FILView;
      this.partnerFullDescriptionView = new PartnerFullDescriptionView;
      if(C.sponsorCode == "ink")
        this.inkCustomMenuView = new InkCustomMenuView;
      */
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

      // Eventos sobre elementos fuera de este view y de App_container; Acción no estandar
      var aboutShow = $('.button-info');
      aboutShow.click(mainview.showAbout);

      var aboutClose = $('.about .button-close');
      aboutClose.click(mainview.hideAbout);

      //mainview.$el.find('.main').addClass(C.sponsorCode);

      /*
      // destruir loader
      $('.loader-container').remove()

      // Navigation
      var navigationContainer = mainview.$el.find('.nav');
      navigationContainer.append(mainview.navigationView.$el);

      // Header
      var headerContainer = mainview.$el.find('.main .main-wrapper .main-upper');
      headerContainer.append(mainview.headerView.$el);

      // Feeds
      var feedsContainer = mainview.$el.find('.main .main-wrapper .main-lower .main-left-column');
      feedsContainer.append(mainview.feedsView.$el);
      feedsContainer.find('.feed-items').addClass('dragscroll');

      // Content
      var contentContainer = mainview.$el.find('.main .main-wrapper .main-lower .main-right-column');
      contentContainer.append(mainview.contentView.$el);
      contentContainer.find('.content-wrapper').addClass('dragscroll');
      Dragscroll.reset();

      // Item Modal save reference
      mainview.itemModalView.reference(mainview);
      mainview.partnerFullDescriptionView.reference(mainview);
      mainview.caleidoscopioModalView.reference(mainview.$el.find('.main .main-wrapper'));
      //mainview.caleidoscopioModalView.render();

      mainview.$el.find('.main-lower').append(mainview.filView.$el);

      // bloquear dragging
      mainview.$el.find("img").attr('draggable', false);
      
      // ink custom template
      if(C.sponsorCode == "ink") {
        var inkCustomContainer = mainview.$el.find('.main .main-wrapper .main-lower');
        mainview.inkCustomMenuView.reference(inkCustomContainer);
      }
      */
    }

    /*,

    showFil: function() {
      this.filView.show();
    }*/
  })

  return MainView;
});