define([
  'jquery'
],

function($) {
  var config = {
    api: '',
    image_server: ''
  }

  // Register globally
  config.register = function(globalName) {
    if(typeof(globalName) == 'undefined') {
      globalName = 'c';
    }

    window[globalName] = this;
  }

  return config;
})