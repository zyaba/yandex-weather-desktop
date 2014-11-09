module.exports = function (grunt) {

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

        watch: {
            src: {
              files: ['static/**/*.styl'],
              tasks: ['default'],
            }
        },

        jscs: {
            src: "static/**/*.js",
            options: {
                config: true,
                requireCurlyBraces: [ "if" ]
            }
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc' // relative to Gruntfile
            },
            // You get to make the name
            // The paths tell JSHint which files to validate
            myFiles: ['static/**/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['stylus', 'autoprefixer', 'cssmin', 'watch']);

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks("grunt-jscs");

    grunt.registerTask('process_js', ['jscs', 'jshint'] );

};