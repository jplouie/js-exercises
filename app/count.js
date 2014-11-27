if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
      setInterval(function(start, end){
        while(start <= end){
          console.log(start++);
        }
      }, 100);
    }
  };
});