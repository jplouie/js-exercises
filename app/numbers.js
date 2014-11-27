if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
      var bits = num.toString(2);
      var length = bits.length;
      return parseInt(bits[length - bit], 10);
    },

    base10: function(str) {
      return parseInt(str, 2);
    },

    convertToBinary: function(num) {
      var bits = num.toString(2);
      var zeros = '';
      var difference = 8 - bits.length;
      if(difference){
        zeros = Array.apply(null, new Array(difference)).map(function(){
          return '0';
        }).join('');
      }
      return zeros + bits;
    },

    multiply: function(a, b) {
      return (a * 10) * (b * 10) / (10 * 10);
    }
  };
});

