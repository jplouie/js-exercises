if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
      var _this = this;
      var files = data.files;
      var arr = [];

      // if(dirName){
      //   while(data.dir !== dirName){
      //     data = files;
      //     files = files.files;
      //   }
      // }
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
