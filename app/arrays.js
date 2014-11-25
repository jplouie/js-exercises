if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      var i = -1;
      arr.forEach(function(value, index){
        if(value === item){
          i = index;
          return;
        }
      });
      return i;
    },

    sum : function(arr) {
      var sum = 0;
      arr.forEach(function(value){
        sum += value;
      });
      return sum;
    },

    remove : function(arr, item) {
      newArr = arr.filter(function(value){
        return value !== item;
      });
      return newArr;
    },

    removeWithoutCopy : function(arr, item) {

    },

    append : function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
      arr.pop();
      return arr;
    },

    prepend : function(arr, item) {
      arr.unshift(item);
      return arr;
    },

    curtail : function(arr) {
      arr.shift();
      return arr;
    },

    concat : function(arr1, arr2) {

    },

    insert : function(arr, item, index) {

    },

    count : function(arr, item) {
      var count = 0;
      arr.forEach(function(value){
        if(value === item){
          count++;
        }
      });
      return count;
    },

    duplicates : function(arr) {

    },

    square : function(arr) {

    },

    findAllOccurrences : function(arr, target) {

    }
  };
});
