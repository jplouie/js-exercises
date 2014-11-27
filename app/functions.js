if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      return fn(arr[0], arr[1], arr[2]);
    },

    speak : function(fn, obj) {
      return fn.apply(obj);
    },

    functionFunction : function(str) {
      return function(str2){
        return str + ', ' + str2;
      };
    },

    makeClosures : function(arr, fn) {
      var closures = [];
      arr.forEach(function(x){
        closures.push(function(){
          var val = x;
          return fn(x);
        });
      });
      return closures;
    },

    partial : function(fn, str1, str2) {
      return function(expression){
        return fn(str1, str2, expression);
      }
    },

    useArguments : function() {
      var args = Array.prototype.slice.call(arguments);
      var sum = 0;
      args.forEach(function(x){
        sum += x;
      });
      return sum;
    },

    callIt : function(fn) {
      var allArgs = Array.prototype.slice.call(arguments);
      return fn.apply(null, allArgs);
    },

    partialUsingArguments : function(fn) {
      var args = Array.prototype.slice.call(arguments);
      if(args.length > 1){
        return function(arguments){
          
        }
      }
    },

    curryIt : function(fn) {

    }
  };
});
