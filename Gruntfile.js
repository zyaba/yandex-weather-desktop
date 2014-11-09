module.exports = function (grunt) {

    grunt.initConfig({        
        stylus: {
          compile: {
            files: {
              'dist/temp/temp.css': 'static/**/*.styl'
            }
          }
        },

        autoprefixer: {
            single_file: {
                options: {
                  browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', 'ie 8', 'ie 9']
                },

                src: 'dist/temp/temp.css',
                dest: 'dist/temp/weather.css'
            }
        },

        cssmin: {
          my_target: {
            files: [{
              expand: true,
              cwd: 'dist/temp/',
              src: ['weather.css', '!*.min.css'],
              dest: 'dist/',
              ext: '.min.css'
            }]
          }
        },

        watch: {
            options: {
              reload: true
            },
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
        },

        clean: ['dist/temp/'],
        
        shell: {
            server: {
                options: {
                    stdout: true
                },
                command: [
                    'cd server',
                    'node server'
                ].join('&&')
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['stylus', 'autoprefixer', 'cssmin', 'clean']);

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks("grunt-jscs");

    grunt.registerTask('process_js', ['jscs', 'jshint'] );
    
    /* Start Express server */
    require('load-grunt-tasks')(grunt);
    grunt.registerTask('express', ['shell']);
        
};