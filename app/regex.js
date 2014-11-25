if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
      var x = str.match(/[0-9]/);
      if(x){
        return true;
      }
      else{
        return false;
      }
    },

    containsRepeatingLetter : function(str) {
      var x = str.match(/([a-z])\1/i);
      if(x){
        return true;
      }
      else{
        return false;
      }
    },

    endsWithVowel : function(str) {
      var x = str.match(/[aeiou]$/i);
      if(x){
        return true;
      }
      else{
        return false;
      }
    },

    captureThreeNumbers : function(str) {
      var x = str.match(/(\d){3}/);
      if(x){
        return x[0];
      }
      else{
        return false;
      }
    },

    matchesPattern : function(str) {
      var x = str.match(/^((\d){3}\-){2}(\d){4}$/);
      if(x){
        return true;
      }
      else{
        return false;
      }
    },
    isUSD : function(str) {
      var x = str.match(/$\$/);
      if(x){
        return true;
      }
      else{
        return false;
      }
    }
  };
});
