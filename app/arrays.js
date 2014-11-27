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
      var length = arr.length;
      for(var i = 0; i < length; i++){
        if(arr[i] === item){
          arr.splice(i, 1);
          i--;
          length--;
        }
      }
      return arr;
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
      arr2.forEach(function(value){
        arr1.push(value);
      });
      return arr1;
    },

    insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
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
      var length = arr.length;
      var original = [];
      var dupes = [];
      for(var i = 0; i < length; i++){
        var x = arr[i]
        if(original.indexOf(x) === -1){
          original.push(x);
        }
        else if(dupes.indexOf(x) === -1){
          dupes.push(x);
        }
      }
      return dupes;
    },

    square : function(arr) {
      var newArr = [];
      arr.forEach(function(x){
        newArr.push(x * x);
      });
      return newArr;
    },

    findAllOccurrences : function(arr, target) {
      var indexes = [];
      arr.forEach(function(letter, index){
        if(letter === target){
          indexes.push(index);
        }
      });
      return indexes;
    }
  };
});
