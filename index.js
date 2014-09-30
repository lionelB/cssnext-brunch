/**
 * Modules dependencies
 */
var cssnext = require("cssnext")

/**
 * Exposes plugin
 */
module.exports = CssNextCompiler

/**
 * Plugin
 */
function CssNextCompiler(config) {
  this.config = config
  var options = config.plugins && config.plugins.cssnext

  if (!options) {
    this.cssNextOptions = {}
    return
  }

  this.cssNextOptions = Object.keys(options).reduce(function(memo, key) {
    memo[key] = options[key]
    return memo
  }, {})
}

CssNextCompiler.prototype.brunchPlugin = true
CssNextCompiler.prototype.type = "stylesheet"
CssNextCompiler.prototype.extension = "css"
CssNextCompiler.prototype.compile = function(params, callback) {
  var result
  var error

  var env = this.config.env
  // Disable inlined sourcemap in production
  if (env && env.indexOf("production") !== -1) {
    this.cssNextOptions.sourcemap = false
  }

  try {
    result = cssnext(params.data, this.cssNextOptions)
  }
  catch (err) {
    error = err
  }
  finally{
    return callback(error, result)
  }
}
