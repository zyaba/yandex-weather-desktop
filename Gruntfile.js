module.exports = function(grunt) {

    grunt.initConfig({
      cssmin: {
          my_target: {
            files: [{
              expand: true,
              cwd: 'dist/',
              src: ['weather.css', '!*.min.css'],
              dest: 'dist/',
              ext: '.min.css'
            }]
          }
        },

    stylus: {
      compile: {
        options: {
          // paths: ['path/to/import', 'another/to/import'],
        },
        files: {
          'dist/weather.css': 'static/**/*.styl' // 1:1 compile
        }
      }
    }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-stylus');

    grunt.registerTask('default', ['stylus', 'cssmin']);

};