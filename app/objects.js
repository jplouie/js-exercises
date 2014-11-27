if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      obj.fn = fn;
      return obj.fn();
    },

    alterObjects : function(constructor, greeting) {
      constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
      var arr = [];
      for(var key in obj){
        if(obj.hasOwnProperty(key)){
          arr.push(key + ': ' + obj[key]);
        }
      }
      return arr;
    }
  };
});
