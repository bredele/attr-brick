
/**
 * Expose 'bind-plugin'
 */

module.exports = function(el, expr){
  var params = expr.split(',');
  el.setAttribute(params[0], this.get(params[1]));
  this.on('change ' + params[1], function(val){
    el.setAttribute(params[0], this.get(val));
  });
};