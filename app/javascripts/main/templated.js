define([
  'backbone', 
  'underscore',
  'underi18n'
], 

function(Backbone, _, Underi18n) {
  var templates = {}

  // Asynchronous template loading, with a callback
  var $$1 = function(name, data, callback) {
    var templatesList = templates

    if(typeof(templatesList[name]) == 'undefined') {
      var templateFile = 'text!templates/' + name + '.html'

      require([templateFile], function(templateHTML) {
        _.templateSettings.interpolate  = /\{\{(.*?)\}\}/g
        _.templateSettings.evaluate     = /\{\{%([\s\S]+?)\}\}/g
        _.templateSettings.escape       = /\{\{-([\s\S]+?)\}\}/g

        templatesList[name] = _.template(templateHTML)
        callback(templatesList[name](data))
      })
    }
    else {
      callback(templatesList[name](data))
    }
  }

  // Template loading done by calling view, synchronous :: MODIFIED, removed multilanguage selection ::
  var $$2 = function(template, data) {
    var templatesList = templates

    if(typeof(templatesList[template.name]) == 'undefined') {
      _.templateSettings.interpolate  = /\{\{(.*?)\}\}/g
      //_.templateSettings.evaluate     = /\{\{%([\s\S]+?)\}\}/g
      _.templateSettings.escape       = /\{\{-([\s\S]+?)\}\}/g

      templatesList[template.name] = _.template(Underi18n.template(template.content))
    }
    
    return templatesList[template.name](data)
  }

  var $$ = $$2
  
  // Register globally
  $$.register = function(globalName) {
    if(typeof(globalName) == 'undefined') {
      globalName = '$$'
    }

    window[globalName] = this
  }

  $$.init = function(globalName) {
    Underi18n.templateSettings = {
      translate: /\[\[_([\s\S]+?)\]\]/g,
      i18nVarLeftDel: '{{',
      i18nVarRightDel: '}}'
    }

    this.register(globalName)
  }

  return $$
})