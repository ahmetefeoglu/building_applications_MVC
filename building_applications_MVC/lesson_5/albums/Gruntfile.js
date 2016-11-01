module.exports = function(grunt) {
  grunt.initConfig({
    //Configure first plugin uglify: which minifies the javascript code

    uglify: {
      my_target: {
        files: {
          "public/javascripts/vendor/all.js": ["public/javascripts/vendor/all.js"]
        }
      }
    },

    //COnfigure second plugin bower_concat
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

  // After we configured our plugins we have to load our tasks

  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-bower-concat");

  // After loading our tasks we have to register them

  grunt.registerTask("default", ["bower_concat", "uglify"]);
}