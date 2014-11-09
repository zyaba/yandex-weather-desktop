module.exports = function(grunt) {

    grunt.initConfig({
        stylus: {
          compile: {
            files: {
              'dist/temp.css': 'static/**/*.styl'
            }
          }
        },

        autoprefixer: {
            single_file: {
                options: {
                  browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', 'ie 8', 'ie 9']
                },

                src: 'dist/temp.css',
                dest: 'dist/weather.css'
            }
        },

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

    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-autoprefixer');

    grunt.registerTask('default', ['stylus', 'autoprefixer', 'cssmin']);

};