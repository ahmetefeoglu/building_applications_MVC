module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          "public/javascripts/vendor/all.js": ["public/javascripts/vendor/all.js"]
        }
      }
    },
    //Takes everything in bower_components and makes them one file
    bower_concat: {
      all: {
        dest: "public/javascripts/vendor/all.js",
        dependencies: {
          "underscore": "jquery",
          "backbone": "underscore"

        }
      }

    }
  });


  [ 
    "grunt-bower-concat",
    "grunt-contrib-uglify"
  ].forEach(function(task) {
    grunt.loadNpmTasks(task);
  });
   
 

  grunt.registerTask("default", ["bower_concat", "uglify"]);
}
