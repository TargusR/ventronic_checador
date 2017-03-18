requirejs.config({
  paths: {
    templates:  '../../templates',
    jquery:     '../../node_modules/jquery/dist/jquery.min',
    dragscroll: '../../node_modules/dragscroll/dragscroll',
    backbone:   '../../node_modules/backbone/backbone',
    underscore: '../../node_modules/underscore/underscore-min',
    underi18n:  '../../node_modules/underi18n/underi18n',
    text:       '../../node_modules/requirejs-text/text'
  }
});

requirejs([
  'config',
  'app', 
  'templated'
], 

function(Config, App, Templated) {
  Templated.init('$$');    // Register the templating function globally
  Config.register('C');    // Register the configuration object globally

  App.register();
  App.initialize();
});
