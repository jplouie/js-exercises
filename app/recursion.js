if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
      var _this = this;
      var files = data.files;
      var arr = [];
      var searchDir = function(data){
        if(data.dir === dirName){
          dir = data;
          return;
        }
        var files = data.files;
        files.forEach(function(file){
          if(typeof file === 'object'){
            return searchDir(file);
          }
        });
      };

      if(dirName){
        var dir;
        searchDir(data);
        files = dir.files;
      }
      files.forEach(function(file){
        if(typeof file !== 'object'){
          arr.push(file);
        }
        else{
          arr = arr.concat(_this.listFiles(file));
        }
      });
      return arr;
    },

    permute: function(arr) {

    }
  };
});
