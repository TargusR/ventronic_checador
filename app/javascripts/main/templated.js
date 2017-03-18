define([
  'backbone', 
  'underscore',
  'underi18n'
], 

function(Backbone, Underscore, Underi18n) {
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

  // Template loading done by calling view, synchronous
  var $$2 = function(template, data) {
    var lang = t.getLanguage()
    var templatesList = templates

    if(typeof(templatesList[lang]) == 'undefined') {
      templatesList[lang] = {}
    }

    if(typeof(templatesList[lang][template.name]) == 'undefined') {
      _.templateSettings.interpolate  = /\{\{(.*?)\}\}/g
      //_.templateSettings.evaluate     = /\{\{%([\s\S]+?)\}\}/g
      _.templateSettings.escape       = /\{\{-([\s\S]+?)\}\}/g

      templatesList[lang][template.name] = _.template(underi18n.template(template.content, t))
    }
    
    return templatesList[lang][template.name](data)
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