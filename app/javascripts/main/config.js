define([
  'jquery'
],

function($) {
  var config = {
    // default Values
    api: 'default',
    image_server: 'default'
  }

  config.fileGet = function ( file ) {
    var c = this;
    var fs = require('fs');
    var fileParser = this.fileParser;
    var configValues = this.configValues;
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) throw err;
      c.configValues(c.fileParser(data));
    });
  }

  config.configValues = function ( data ) {
    this.api = data['api'];
    this.image_server = data['image_server'];
  }

  config.fileParser = function ( data ) {
    var values = data.split('\n');
    var table = [];
    $(values).each(function (index, value) {
      value = value.replace("\t",'');
      value = value.split(' ');
      table[value.shift()] = value.join();
    });
    return table;
  }

  config.initialize = function () {
    var file = __dirname + '/config.info';
    this.fileGet(file);
  }

  // Register globally
  config.register = function( globalName ) {
    if(typeof(globalName) == 'undefined') {
      globalName = 'c';
    }
    window[globalName] = this;
    this.initialize();
  }

  return config;
})